// ============================================================
//  GS Icon Export  —  Figma → SVGO → icons.json
//  피그마 아이콘을 정규화된 SVG + 메타데이터(JSON)로 뽑아내는 스크립트
//
//  실행:  FIGMA_TOKEN=figd_xxxxx  node export-icons.mjs
//  결과:  dist/svg/<카테고리>/<이름>.svg  +  dist/icons.json
// ============================================================

import fs from "node:fs/promises";
import path from "node:path";
import { optimize } from "svgo";

// ─────────────────────────────────────────────
//  ⚙️  설정 — 여기만 고치시면 됩니다
// ─────────────────────────────────────────────
const FILE_KEY = "T5o6NvwlQUMIglYo6paNcJ";   // 피그마 파일 key (URL의 /design/ 뒤 문자열)
const ONLY_PAGE = "[Icon]";                    // 이 문자열이 이름에 든 페이지만 내보냄. 모든 페이지를 대상으로 하려면 "" 로.
const FIGMA_TOKEN = process.env.FIGMA_TOKEN;   // 토큰은 환경변수로 주입 (아래 실행법 참고)
const OUT_DIR = "dist";                        // 결과물이 쌓일 폴더
const EMBED_SVG = true;                         // icons.json 안에 svg 코드까지 넣을지 (AI·사이트용)
const ONLY_NAME_PREFIX = "";                    // 이 접두어로 시작하는 컴포넌트만 내보냄. ""이면 전부 내보냄(권장).
const SKIP_DOT_NAMES = true;                    // 이름이 "."로 시작하는 보조 컴포넌트(.tokenCard 등)는 제외
const FORCE_ICON_PREFIX = true;                 // 출력 이름을 icon_ 로 통일 (피그마 이름은 안 건드림. 원본 그대로 쓰려면 false)
const MULTICOLOR_CATEGORIES = ["benefit"];      // 색을 유지할(=currentColor 변환 안 할) 카테고리 (소문자)
const WEIGHTS = ["line", "fill", "duotone", "bold", "regular", "thin", "solid"];
const IMAGE_BATCH = 60;                          // 한 번에 SVG 렌더 요청할 아이콘 수
// ─────────────────────────────────────────────

if (!FIGMA_TOKEN) {
  console.error("❌ FIGMA_TOKEN 환경변수가 없습니다.\n   실행 예:  FIGMA_TOKEN=figd_xxx node export-icons.mjs");
  process.exit(1);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const slug = (s) =>
  (s || "").trim().toLowerCase().replace(/[\s/]+/g, "_").replace(/[^a-z0-9_-]/g, "");
// FORCE_ICON_PREFIX가 켜져 있으면 icon_ 이 없는 이름 앞에만 붙여줌 (이미 있으면 그대로)
const normalizeName = (n) => (FORCE_ICON_PREFIX && !/^icon[_-]/.test(n) ? `icon_${n}` : n);

// Figma API 호출 (429 재시도 포함)
async function api(url, tries = 3) {
  const res = await fetch(`https://api.figma.com${url}`, {
    headers: { "X-Figma-Token": FIGMA_TOKEN },
  });
  if (res.status === 429 && tries > 0) {
    await sleep(2000);
    return api(url, tries - 1);
  }
  if (!res.ok) throw new Error(`Figma API ${res.status}: ${await res.text()}`);
  return res.json();
}

// SVGO 정규화 규칙
function svgoConfig(isMulticolor) {
  const overrides = {};
  if (!isMulticolor) overrides.convertColors = { currentColor: true }; // 흑백은 색을 currentColor로
  return {
    multipass: true,
    plugins: [
      { name: "preset-default", params: { overrides } },
      "removeDimensions", // width/height 제거, viewBox는 유지
      // ── 보안: 악성 SVG 방어 (피그마에 심어진 스크립트/이벤트 핸들러 제거) ──
      "removeScripts",                              // <script> 요소 제거
      { name: "removeAttrs", params: { attrs: "on.*" } }, // onload/onclick 등 이벤트 핸들러 제거
    ],
  };
}

// ── ① 파일 전체를 한 번 읽어 컴포넌트 목록 + 카테고리 추출 ──
console.log("① 피그마 파일 읽는 중…");
const file = await api(`/v1/files/${FILE_KEY}`);
const descMap = file.components || {}; // { nodeId: { name, description, ... } }

const icons = [];
function walk(node, cat, pageName) {
  // 카테고리 판정: 가장 가까운 SECTION 이름이 우선, 없으면 최상위 FRAME 이름, 그것도 없으면 페이지 이름
  if (node.type === "SECTION" && node.name && !node.name.startsWith(".")) cat = node.name;
  else if (node.type === "FRAME" && !cat && node.name && !node.name.startsWith(".")) cat = node.name;

  if (node.type === "COMPONENT") {
    const raw = node.name || "";
    const passPrefix = !ONLY_NAME_PREFIX || raw.toLowerCase().startsWith(ONLY_NAME_PREFIX);
    const passDot = !(SKIP_DOT_NAMES && raw.startsWith("."));
    if (passPrefix && passDot) {
      icons.push({
        id: node.id,
        name: normalizeName(slug(raw)),
        category: slug(cat || pageName || "etc"),
        description: (descMap[node.id]?.description || "").trim(),
      });
    }
  }
  (node.children || []).forEach((c) => walk(c, cat, pageName));
}
// 대상 페이지 선택 (ONLY_PAGE가 이름에 포함된 페이지만)
const pages = (file.document.children || []).filter(
  (p) => !ONLY_PAGE || (p.name || "").toLowerCase().includes(ONLY_PAGE.toLowerCase())
);
if (ONLY_PAGE && pages.length === 0) {
  console.error(`❌ 이름에 "${ONLY_PAGE}" 가 든 페이지를 못 찾았습니다.`);
  console.error("   현재 페이지 목록:", (file.document.children || []).map((p) => p.name).join(", "));
  process.exit(1);
}
console.log(`   대상 페이지: ${pages.map((p) => p.name).join(", ")}`);
pages.forEach((page) => walk(page, null, page.name));

if (icons.length === 0) {
  console.error("❌ 컴포넌트를 못 찾았습니다. FILE_KEY 또는 ONLY_NAME_PREFIX 설정을 확인하세요.");
  process.exit(1);
}
console.log(`   → 아이콘 ${icons.length}개 발견`);

// ── ② 아이콘별 SVG 렌더 URL 받기 (배치로) ──
console.log("② SVG 렌더 URL 받는 중…");
const idToUrl = {};
for (let i = 0; i < icons.length; i += IMAGE_BATCH) {
  const batch = icons.slice(i, i + IMAGE_BATCH);
  const ids = batch.map((n) => n.id).join(",");
  const res = await api(
    `/v1/images/${FILE_KEY}?ids=${encodeURIComponent(ids)}&format=svg&svg_include_id=false&svg_simplify_stroke=true`
  );
  Object.assign(idToUrl, res.images || {});
  process.stdout.write(`   ${Math.min(i + IMAGE_BATCH, icons.length)}/${icons.length}\r`);
  await sleep(300);
}
console.log("");

// ── ③ SVG 내려받아 정규화 → 파일 저장 + 매니페스트 구성 ──
console.log("③ SVG 내려받고 정리하는 중…");
const manifest = [];
const noDesc = [];
let done = 0;

for (const icon of icons) {
  const url = idToUrl[icon.id];
  if (!url) {
    console.warn(`   ⚠ ${icon.name}: 렌더 URL 없음, 건너뜀`);
    continue;
  }
  const rawSvg = await fetch(url).then((r) => r.text());
  const isMulti = MULTICOLOR_CATEGORIES.includes(icon.category);
  const { data: svg } = optimize(rawSvg, svgoConfig(isMulti));

  // 이름 파싱: icon_ 접두어 제거, 끝 토큰이 weight면 분리
  const base = icon.name.replace(/^icon[_-]/, "");
  const parts = base.split("_");
  const weight = WEIGHTS.includes(parts.at(-1)) ? parts.at(-1) : null;

  // 키워드: Description(콤마 구분)이 있으면 사용, 없으면 이름 토큰으로 대체
  const keywords = icon.description
    ? icon.description.split(",").map((s) => s.trim()).filter(Boolean)
    : base.split("_");
  if (!icon.description) noDesc.push(icon.name);

  // 파일 저장
  const rel = `svg/${icon.category}/${icon.name}.svg`;
  await fs.mkdir(path.join(OUT_DIR, "svg", icon.category), { recursive: true });
  await fs.writeFile(path.join(OUT_DIR, rel), svg, "utf8");

  manifest.push({
    id: base,
    name: icon.name,
    category: icon.category,
    weight,
    type: isMulti ? "multicolor" : "monochrome",
    keywords,
    file: rel,
    ...(EMBED_SVG ? { svg } : {}),
  });

  done++;
  process.stdout.write(`   ${done}/${icons.length}\r`);
}
console.log("");

// ── ④ icons.json 쓰기 ──
manifest.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
await fs.writeFile(
  path.join(OUT_DIR, "icons.json"),
  JSON.stringify({ generatedAt: new Date().toISOString(), total: manifest.length, icons: manifest }, null, 2),
  "utf8"
);

// ── 결과 요약 ──
const byCat = {};
manifest.forEach((m) => (byCat[m.category] = (byCat[m.category] || 0) + 1));
console.log(`\n✅ 완료! ${manifest.length}개 아이콘 → ${OUT_DIR}/`);
console.log("   카테고리:", Object.entries(byCat).map(([k, v]) => `${k}(${v})`).join(", "));
if (noDesc.length) {
  console.log(`\n📝 키워드(Description)가 비어있는 아이콘 ${noDesc.length}개 — 피그마에서 채우면 검색 품질이 좋아집니다:`);
  console.log("   " + noDesc.slice(0, 20).join(", ") + (noDesc.length > 20 ? " …" : ""));
}

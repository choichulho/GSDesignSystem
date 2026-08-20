// ============================================================
//  GS Icon Font Builder
//  icons.json → 아이콘 폰트 (gsicons.css + woff/woff2/ttf) 자동 생성
//
//  실행:  node build-font.mjs
//  결과:  font/gsicons.{css,json,ttf,woff,woff2}
//
//  icons.json의 svg 필드를 그대로 글리프 원본으로 씁니다(별도 svg/ 폴더를 다시 읽지
//  않습니다). 클래스명은 icons.json의 id 필드를 그대로 씁니다 — 예: id "all_check" →
//  클래스 "gis-all_check". apps/icon-library의 Font 탭·gsiconlibrary 사용법 스니펫과
//  반드시 이 규칙을 공유해야 합니다(코드를 바꾸면 사이트도 함께 바꿔야 합니다).
// ============================================================

import fs from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import { generateFonts } from "fantasticon";

const MANIFEST = "icons.json";
const OUT_DIR = "font";
const FONT_NAME = "gsicons";
const CLASS_PREFIX = "gis";

const manifestRaw = await fs.readFile(MANIFEST, "utf8");
const { icons } = JSON.parse(manifestRaw);

if (!icons?.length) {
  console.error(`❌ ${MANIFEST}에 아이콘이 없습니다. 먼저 pnpm --filter @gsds/icons export를 실행하세요.`);
  process.exit(1);
}

// fantasticon은 폴더 안 SVG 파일명을 그대로 글리프 이름(=클래스 접미사)으로 쓰므로,
// icons.json의 svg를 id.svg로 임시 폴더에 풀어서 입력으로 준다.
const tmpDir = await fs.mkdtemp(path.join(os.tmpdir(), "gsicons-font-src-"));
try {
  console.log(`① 아이콘 ${icons.length}개 → 임시 SVG로 전개 중…`);
  for (const icon of icons) {
    if (!icon.svg) {
      console.warn(`   ⚠ ${icon.id}: svg 필드가 비어있어 폰트에서 제외합니다.`);
      continue;
    }
    await fs.writeFile(path.join(tmpDir, `${icon.id}.svg`), icon.svg, "utf8");
  }

  await fs.mkdir(OUT_DIR, { recursive: true });

  console.log("② 폰트 생성 중 (ttf·woff·woff2·css·json)…");
  await generateFonts({
    inputDir: tmpDir,
    outputDir: OUT_DIR,
    name: FONT_NAME,
    prefix: CLASS_PREFIX,
    tag: "i",
    fontTypes: ["ttf", "woff", "woff2"],
    assetTypes: ["css", "json"],
    normalize: true,
    fontHeight: 1000,
  });

  console.log(`\n✅ 완료! ${OUT_DIR}/${FONT_NAME}.{css,json,ttf,woff,woff2}`);
  console.log(`   사용법: <link rel="stylesheet" href=".../${FONT_NAME}.css"> + <i class="${CLASS_PREFIX} ${CLASS_PREFIX}-{id}"></i>`);
} finally {
  await fs.rm(tmpDir, { recursive: true, force: true });
}

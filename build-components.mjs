// ============================================================
//  GS Icon — Component Builder
//  dist/icons.json → React(.jsx) + Vue(.vue) 컴포넌트 자동 생성
//
//  실행:  node build-components.mjs
//  결과:  packages/react/src/*   +   packages/vue/src/*
// ============================================================

import fs from "node:fs/promises";
import path from "node:path";

const MANIFEST = "dist/icons.json";
const REACT_DIR = "packages/react/src";
const VUE_DIR = "packages/vue/src";

// icon_chevron_sort_down → IconChevronSortDown
const pascal = (name) =>
  name
    .split(/[_-]/)
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join("");

// svg 문자열에서 viewBox와 안쪽 내용(paths 등)만 추출
function parseSvg(svg) {
  const viewBox = (svg.match(/viewBox="([^"]+)"/) || [, "0 0 24 24"])[1];
  const inner = svg.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "").trim();
  return { viewBox, inner };
}

// React(JSX)용: fill-rule → fillRule 처럼 하이픈 속성명을 camelCase로
const toJsx = (inner) =>
  inner.replace(/(\s)([a-z]+)-([a-z]+)=/g, (_, sp, a, b) => `${sp}${a}${b[0].toUpperCase()}${b.slice(1)}=`);

function reactComponent(comp, viewBox, inner) {
  return `import * as React from "react";

export const ${comp} = React.forwardRef(({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="${viewBox}"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    ${toJsx(inner)}
  </svg>
));

${comp}.displayName = "${comp}";
`;
}

function vueComponent(viewBox, inner) {
  // Vue 3는 단일 루트면 class/style/onClick 등이 자동으로 svg에 전달됩니다.
  return `<template>
  <svg
    :width="size"
    :height="size"
    viewBox="${viewBox}"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    ${inner}
  </svg>
</template>

<script setup>
defineProps({ size: { type: [Number, String], default: 24 } });
</script>
`;
}

// ── 실행 ──
const { icons } = JSON.parse(await fs.readFile(MANIFEST, "utf8"));
if (!icons?.length) {
  console.error("❌ icons.json에 아이콘이 없습니다. 먼저 export-icons.mjs를 실행하세요.");
  process.exit(1);
}

await fs.mkdir(REACT_DIR, { recursive: true });
await fs.mkdir(VUE_DIR, { recursive: true });

const reactIndex = [];
const vueIndex = [];

for (const icon of icons) {
  if (!icon.svg) {
    console.warn(`   ⚠ ${icon.name}: svg 필드가 없어 건너뜁니다. (export 시 EMBED_SVG=true 확인)`);
    continue;
  }
  const comp = pascal(icon.name); // IconChevronSortDown
  const { viewBox, inner } = parseSvg(icon.svg);

  await fs.writeFile(path.join(REACT_DIR, `${comp}.jsx`), reactComponent(comp, viewBox, inner), "utf8");
  await fs.writeFile(path.join(VUE_DIR, `${comp}.vue`), vueComponent(viewBox, inner), "utf8");

  reactIndex.push(`export { ${comp} } from "./${comp}.jsx";`);
  vueIndex.push(`export { default as ${comp} } from "./${comp}.vue";`);
}

// 배럴 인덱스 (개발자가 import { IconXxx } from "@gs/icons-react" 로 쓰게 해줌)
await fs.writeFile(path.join(REACT_DIR, "index.js"), reactIndex.sort().join("\n") + "\n", "utf8");
await fs.writeFile(path.join(VUE_DIR, "index.js"), vueIndex.sort().join("\n") + "\n", "utf8");

console.log(`✅ 완료!`);
console.log(`   React: ${reactIndex.length}개 → ${REACT_DIR}/`);
console.log(`   Vue:   ${vueIndex.length}개 → ${VUE_DIR}/`);

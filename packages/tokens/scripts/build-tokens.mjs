/**
 * build-tokens.mjs — 토큰 파이프라인 2단계 (Style Dictionary)
 *
 * export-tokens.mjs가 만든 tokens/ (DTCG JSON)을 읽어 CSS 변수로 변환한다.
 * 핵심 요구사항은 두 가지다.
 *   1) :root(Light) + [data-theme="dark"](Dark) 로 모드를 분리한다.
 *   2) outputReferences 로 앨리어스를 var()로 살린다.
 *      (예: --color-background-brand-default: var(--color-gsblue-500))
 *
 * 파일 분류 규칙 (export-tokens.mjs 산출물명 기준)
 *   - *.dark.json   → 다크 모드 오버라이드
 *   - *.light.json  → 라이트 모드 값
 *   - 그 외(primitive-*.json 등) → 모드 무관 공통 값
 * 컬렉션이 늘어도(typography, elevation …) 규칙만 지키면 자동으로 잡힌다.
 *
 * 실행: node build-tokens.mjs
 */
import StyleDictionary from 'style-dictionary';
import { readFileSync, writeFileSync, rmSync, readdirSync } from 'node:fs';

const TOKENS_DIR = 'tokens';
const BUILD_DIR = 'build/';

// ── tokens/ 를 스캔해 모드별 소스 목록을 만든다 ──
const all = readdirSync(TOKENS_DIR)
  .filter((f) => f.endsWith('.json'))
  .map((f) => `${TOKENS_DIR}/${f}`);
const darkFiles = all.filter((f) => f.endsWith('.dark.json'));
const modeless = all.filter((f) => !f.endsWith('.dark.json') && !f.endsWith('.light.json'));
const lightSource = all.filter((f) => !f.endsWith('.dark.json')); // 공통 + light
const darkSource = [...modeless, ...darkFiles];                    // 공통(참조 해석용) + dark

// ── 커스텀 변환: 단위 없는 dimension(숫자)에 px를 붙인다 ──
// Figma FLOAT 변수(radius/space 등)는 단위 없는 숫자로 나오므로 CSS엔 px가 필요하다.
// rem이 필요하면 이 변환만 교체한다.
StyleDictionary.registerTransform({
  name: 'gsshop/dimension-px',
  type: 'value',
  transitive: true,
  filter: (token) => token.$type === 'dimension' && typeof token.$value === 'number',
  transform: (token) => `${token.$value}px`,
});

// css 기본 그룹에서 우리가 쓰는 변환만 추린 목록이다.
// (size/rem은 px 입력을 가정하므로 빼고, 위 px 변환으로 대체한다.)
const CSS_TRANSFORMS = ['attribute/cti', 'name/kebab', 'color/css', 'gsshop/dimension-px'];

/** 한 모드에 대한 CSS 빌드 인스턴스를 만든다. */
function makeCssBuild({ dest, selector, source, darkOnly }) {
  return new StyleDictionary({
    usesDtcg: true,                 // 토큰이 $value/$type/$description(DTCG)을 쓴다
    log: { verbosity: 'silent' },
    source,
    platforms: {
      css: {
        transforms: CSS_TRANSFORMS,
        buildPath: BUILD_DIR,
        files: [{
          destination: dest,
          format: 'css/variables',
          // darkOnly=true면 .dark.json 토큰만 출력한다.
          // primitive는 참조 해석용으로 source에만 두고 출력에선 뺀다.
          filter: darkOnly ? (token) => token.filePath.endsWith('.dark.json') : undefined,
          options: { selector, outputReferences: true },
        }],
      },
    },
  });
}

const lightSD = makeCssBuild({ dest: '_light.css', selector: ':root', source: lightSource, darkOnly: false });
const darkSD = makeCssBuild({ dest: '_dark.css', selector: '[data-theme="dark"]', source: darkSource, darkOnly: true });

await lightSD.buildAllPlatforms();
await darkSD.buildAllPlatforms();

// ── 두 블록을 tokens.css 하나로 합친다 ──
const header = `/**
 * tokens.css — 자동 생성 파일이다. 직접 수정하지 마라.
 * 원천: Figma Variables → export-tokens.mjs → build-tokens.mjs
 */\n\n`;
const light = readFileSync(`${BUILD_DIR}_light.css`, 'utf8').replace(/\/\*\*[\s\S]*?auto-generated\.\s*\*\/\n*/, '');
const dark = readFileSync(`${BUILD_DIR}_dark.css`, 'utf8').replace(/\/\*\*[\s\S]*?auto-generated\.\s*\*\/\n*/, '');
writeFileSync(`${BUILD_DIR}tokens.css`, header + light.trimStart() + '\n' + dark.trimStart(), 'utf8');
rmSync(`${BUILD_DIR}_light.css`);
rmSync(`${BUILD_DIR}_dark.css`);

console.log(`빌드 완료 → build/tokens.css`);
console.log(`  라이트 소스: ${lightSource.length}개 파일`);
console.log(`  다크 소스:   ${darkSource.length}개 파일 (오버라이드 ${darkFiles.length}개)`);

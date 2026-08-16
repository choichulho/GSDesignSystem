# AGENTS.md — GS Design System

AI 코딩 에이전트(Cursor, Claude Code 등)를 위한 프로젝트 지침입니다. 작업 시작 전 이 파일을
먼저 읽습니다. 사용자의 직접 지시가 이 파일보다 우선합니다.

## 프로젝트 개요

GSSHOP의 AI-Ready 디자인 시스템입니다. 플랫폼은 Web·Android·iOS·Flutter입니다.
**Figma가 단일 원천(single source)입니다.** 토큰·아이콘·컴포넌트를 Figma에서 파이프라인으로
자동 동기화하고, 문서 사이트가 그 산출물을 소비합니다. 목표는 AI가 정확히 읽고 쓰는
디자인 시스템입니다.

- 언어: 한국어 기본, 기술 용어는 영어 혼용
- 패키지 매니저: pnpm (npm·yarn을 쓰지 않습니다)
- 배포: Vercel

## 저장소 구조 (pnpm 모노레포)

```
apps/
  docs/            # 통합 문서 사이트 (Vocs). @gsds/docs
  icon-library/    # 아이콘 브라우징 사이트 (정적 HTML). gsiconlibrary.vercel.app
packages/
  icons/           # 아이콘 패키지. @gsds/icons
    scripts/       # export-icons.mjs, build-components.mjs
    icons.json     # ← 파이프라인 산출물(원천은 Figma). 직접 수정하지 마십시오.
    svg/ react/ vue/   # ← 생성물. 직접 수정하지 마십시오.
  tokens/          # 토큰 패키지. @gsds/tokens
    scripts/       # export-tokens.mjs, build-tokens.mjs
    tokens/        # DTCG 토큰 원천 (primitive + semantic light/dark)
    dist/tokens.css    # ← 생성물. 직접 수정하지 마십시오.
.github/workflows/ # sync-icons.yml, sync-tokens.yml
```



## 개발 명령

```bash
pnpm install                              # 의존성 설치

pnpm --filter @gsds/docs dev              # 문서 사이트 로컬 (localhost:5173)
pnpm --filter @gsds/docs build            # 정적 빌드 → apps/docs/dist/public
pnpm --filter @gsds/docs preview          # 빌드 결과 미리보기 (localhost:4173)

pnpm --filter @gsds/icons sync            # 아이콘: Figma export → 컴포넌트 build
pnpm --filter @gsds/tokens build          # 토큰: tokens/*.json → dist/tokens.css
```

문법만 빠르게 검증할 때: `npx esbuild <file> --loader:.jsx=jsx --outfile=/dev/null`

## 파이프라인 (Figma → 코드)

```
Figma → export 스크립트 → JSON 산출물(packages/*) → Actions 봇 자동 커밋 → 사이트가 소비
```

- 갱신은 Actions의 **Sync Icons / Sync Tokens** 워크플로우로 실행됩니다.
- 봇 커밋 메시지는 `chore(icons): ...`, `chore(tokens): ...` 형식이며 `[skip ci]`를 붙입니다.



## 코드·문서 규약

- **문체**: 모든 산출물 문서는 '합니다'체(`~합니다 / ~입니다 / ~됩니다`)로 씁니다. '하다'체
(`~한다 / ~이다`)는 쓰지 않습니다. 명령·지시는 `~하십시오` 형태로 씁니다.
- 토큰 표기는 `develop/token-naming`을 따릅니다.
- **토큰 참조**: semantic 토큰은 primitive를 **참조**(`{color.gsblue.500}`)로 물어야 합니다.
raw hex를 직접 넣지 마십시오. 참조가 끊기면 다크모드·테마 전환이 깨집니다.
- **네이밍**: 약어형(`xs·sm·md·lg`)으로 통일합니다. word-form과 약어를 혼용하지 마십시오.
- **커밋**: `feat(docs): ...`, `fix(site): ...`, `chore(icons): ...` 형식을 씁니다.
- **이동**: 파일 이동은 `git mv`로 합니다(히스토리 보존).
- **MDX frontmatter**: `apps/docs/src/pages/**/*.mdx`에 **새 문서를 추가·개편할 때** YAML
frontmatter를 파일 최상단에 둡니다. 본문은 사람용, frontmatter는 AI·도구(`/llms.txt` 등)용
메타데이터입니다. `description`과 본문 첫 단락이 겹쳐도 됩니다.
  - **공통**: `title`, `korean`, `description`, `category`, `status`, `version`, `lastUpdated`,
  `platforms`, `figma`(fileKey·nodeId), `aliases`, `ai`(intents·doNotConfuseWith)
  - **컴포넌트** (`components/*.mdx`): `code`(react·vue), `relatedComponents`,
  `tokenSource`, `tokenCollections`, `a11y`(role·wcag) — 선택 필드 포함 가능
  - **Foundations** (`foundations/*.mdx`): `package`(`@gsds/tokens`·`@gsds/icons` 등),
  `relatedPages` 또는 `relatedComponents`
  - **컴포넌트 가이드 템플릿**: `apps/docs/templates/component-guide-template.md`를 복사해
  `apps/docs/src/pages/components/{slug}.mdx`로 작성합니다. 이미지는
  `apps/docs/public/components/{slug}/`에 두고 본문에서는 `/components/{slug}/...`로
  참조합니다. `vocs.config.ts` sidebar에 항목이 없으면 추가하십시오.
  - **figma.fileKey**: 컴포넌트·토큰 → DS 파일 `nt54vMZZnxkgPQ5It6B0IU`, 아이콘 →
  `packages/icons/scripts/export-icons.mjs`의 `FILE_KEY`. nodeId는 Figma URL에서 채우고, 모르면
  `"TBD"`로 둡니다.
  - **참고 예시**: `components/button.mdx`, `foundations/design-tokens.mdx`,
  `foundations/iconography.mdx`, `templates/component-guide-template.md`

## 코드 생성 규칙

- **하드코딩 금지**: 색상·spacing·typography·radius·border·elevation 등 UI 스타일 값을 raw hex,
  px, rem 또는 임의의 CSS 변수로 직접 작성하지 마십시오. Figma에 없는 값은 추측해 만들지 말고
  `⚠ 확인 필요`로 남기거나 디자인 결정을 요청하십시오. 단, 아래 터치 타겟 최소값은 접근성 제약으로
  직접 적용할 수 있습니다.
- **semantic 토큰만 사용**: 소비 코드에서는 primitive 토큰(`--color-gsblue-500`,
  `--color-gray-*` 등)을 직접 참조하지 마십시오. 현재 사이트에 연결된 semantic 토큰인
  `--color-content-primary`, `--color-background-primary`,
  `--color-background-brand-default`, `--color-border-secondary`처럼 용도를 나타내는 토큰만
  사용하십시오. 새 토큰이 필요하면 Figma에서 semantic → primitive 참조로 정의하고 파이프라인으로
  동기화하십시오.
- **인터랙션 크기**: Button, IconButton, 링크형 컨트롤 등 모든 조작 가능 요소의 hit area는
  최소 **44×44px**을 보장하십시오. 시각적 크기가 더 작아야 하면 padding 또는 별도 hit area로
  확장하되, 레이아웃 값 자체는 정의된 토큰을 사용하십시오.
- **정의된 컴포넌트만 사용**: Figma와 문서·패키지에 API가 정의된 컴포넌트만 재사용하십시오.
  현재 저장소에서 구현 가이드가 있는 컴포넌트는 `Button`입니다. `IconButton`, `TextLink`, `Chip`,
  `ButtonGroup`, `Tab` 등은 관련 컴포넌트로 언급되었더라도 구현 또는 API가 추가되기 전에는
  존재하는 컴포넌트로 가정하거나 임의로 생성하지 마십시오.



## 절대 손대지 말 것 (경계)

- **생성물 직접 수정 금지**: `packages/icons/{svg,react,vue}`, `packages/icons/icons.json`,
`packages/tokens/dist/tokens.css`, `apps/docs/public/{icons,colors}.json`.
이들은 파이프라인이 만듭니다. 고칠 게 있으면 **Figma 원천을 고치고 sync를 실행하십시오.**
- **비밀 금지**: `FIGMA_TOKEN` 등 시크릿을 코드·커밋에 넣지 마십시오. `.env`를 커밋하지 마십시오.
- **락파일**: `pnpm-lock.yaml`은 pnpm이 관리합니다. 손으로 편집하지 마십시오. 의존성을 바꿨으면
`pnpm install` 후 락파일을 **반드시 함께 커밋하십시오**(CI는 frozen-lockfile로 실행됩니다).



## 환경 주의점 (검증된 함정)

- **Vocs 문서 사이트**
  - `waku`는 반드시 `1.0.0-beta.8`로 **정확히 고정**합니다(`^` 금지). beta.9는 하이드레이션
  크래시를 냅니다.
  - 훅을 쓰는 인터랙티브 컴포넌트는 파일 첫 줄에 `'use client'`가 필수입니다.
  - 정적 배포에는 `vocs.config.ts`에 `renderStrategy: 'full-static'`이 필수입니다.
  - 빌드 출력은 `dist/public`입니다. Vercel Output Directory를 이걸로 지정합니다.
- **파이프라인 스크립트**: 경로 상수는 패키지 루트 기준으로 씁니다. pnpm이 패키지 디렉터리를
CWD로 스크립트를 실행하기 때문입니다.
- **반응형**: 4개 브레이크포인트(375/768/1024/1360px) 간 선형 보간(fluid)을 씁니다.



## Cursor 사용 시

- 루트의 이 `AGENTS.md`는 항상 활성입니다. 파일 타입별(예: `*.tsx` 전용) 규칙이 필요하면
`.cursor/rules/*.mdc`로 분리합니다.
- 에이전트에게 대량 자동 수정을 맡기기 전에 먼저 커밋해서 되돌릴 수 있게 하십시오.

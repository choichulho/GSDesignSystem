# apps/docs 적용 순서

Vocs 2.8 기반 통합 문서 사이트다. 컨테이너에서 빌드까지 검증된 상태 그대로다.
(NAV 6탭·사이드바 이식, 아이콘 갤러리, 토큰 테마, llms.txt 자동 생성, full-static SSG)

## 1. 번들 풀기

레포 루트에서 푼다. apps/docs/ 가 새로 생긴다.

```bash
cd <레포 루트>
unzip -o ~/Downloads/gsds-docs-vocs.zip -d .
```

## 2. 의존성 설치 + 로컬 확인

```bash
pnpm install
pnpm --filter @gsds/docs dev     # http://localhost:5173 열어 확인
```

확인 포인트: 상단 6탭, Foundations 사이드바, Iconography 페이지의 아이콘 갤러리(12개 샘플).

## 3. 실제 아이콘 데이터 연결

지금 public/icons.json은 12개 샘플이다. 실제 837개로 교체한다.

```bash
cp packages/icons/icons.json apps/docs/public/icons.json
```

매번 손으로 복사하지 않으려면 sync-icons.yml 빌드 스텝 뒤에 이 복사 한 줄을 추가한다.
(아이콘 동기화 → 문서 사이트 자동 갱신 고리가 완성된다)

## 4. 토큰 테마 연결

src/styles.css 상단 블록은 build-tokens.mjs 출력과 동일한 형식의 견본이다.
토큰 파이프라인이 실제로 돌기 시작하면 packages/tokens/dist/tokens.css 내용으로 교체하거나
빌드 스텝에서 복사한다.

## 5. 커밋 + Vercel 새 프로젝트

```bash
git add apps/docs
git commit -m "feat(docs): Vocs 기반 통합 문서 사이트 스캐폴딩"
git push
```

Vercel에서 **새 프로젝트**를 만든다 (기존 gsiconlibrary와 별개다).
- 같은 GitHub 레포 연결
- Root Directory: `apps/docs`
- Framework Preset: Vite (자동 인식되면 그대로)
- Build Command: `pnpm build` / Output Directory: `dist/public`

## 6. 확인

배포 후 `/llms.txt` 와 `/llms-full.txt` 가 뜨는지 확인한다. AI-Ready의 첫 산출물이다.

## 구조 요약

```
apps/docs/
├─ vocs.config.ts        # NAV 6탭 → topNav + 경로별 sidebar (gs-ds-navigation.html 이식)
├─ src/
│  ├─ pages/             # MDX 문서 (계층 1~3 대표 페이지)
│  ├─ components/IconGallery.tsx   # icons.json 소비 갤러리 ('use client')
│  └─ styles.css         # GS 토큰 → Vocs 테마 연결
└─ public/icons.json     # 아이콘 데이터 (샘플 12개 → 실제로 교체)
```

## 주의 (검증 중 확인된 것들)

- Vocs 2.x는 `vocs/components`(HomePage 등 1.x API)가 없다. 랜딩은 frontmatter layout으로 쓴다.
- 인터랙티브 컴포넌트(훅 사용)는 파일 첫 줄에 `'use client'`가 필수다 (RSC 기반).
- 정적 배포에는 `renderStrategy: 'full-static'`이 필수다 (기본값은 dynamic).
- 빌드 출력은 `dist/public/` 이다.

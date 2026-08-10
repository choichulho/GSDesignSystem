# 적용 순서

이 번들은 `git mv` 이동을 마친 뒤 레포 루트에서 풀면 각 파일이 제자리에 들어간다.
히스토리를 깔끔히 남기려면 아래 순서를 지킨다.

1. 이동 커밋 — ADR-0002의 `git mv` 순서를 실행하고 먼저 커밋한다.
   (site→apps/icon-library, packages/react·vue→packages/icons/…, 스크립트→packages/icons/scripts/)

2. 이 번들을 레포 루트에서 푼다.
   - 신규: pnpm-workspace.yaml, packages/*/package.json, sync-tokens.yml, build-tokens.mjs
   - 덮어씀: package.json(루트), 두 스크립트(경로 상수 패치본), sync-icons.yml

3. 고아 파일 4개를 지운다 (매니페스트에 없는 잔재다).
   git rm packages/icons/react/src/IconPhoneFilled.jsx \
          packages/icons/react/src/IconPhoneIncomingFilled.jsx \
          packages/icons/react/src/IconPhoneOffFilled.jsx \
          packages/icons/react/src/IconPhoneOutgoingFilled.jsx
   git rm packages/icons/vue/src/IconPhoneFilled.vue \
          packages/icons/vue/src/IconPhoneIncomingFilled.vue \
          packages/icons/vue/src/IconPhoneOffFilled.vue \
          packages/icons/vue/src/IconPhoneOutgoingFilled.vue
   # 재발 방지: build-components.mjs가 출력 폴더를 쓰기 전에 비우도록 prune을 넣는 것을 권장한다.

4. package-lock.json을 지우고 pnpm으로 재설치한다.
   git rm package-lock.json
   pnpm install     # pnpm-lock.yaml 생성

5. 검증 후 커밋한다.
   pnpm --filter @gsds/icons build   # 아이콘이 제자리에 동일 재생성되면 정상이다
   git add -A && git commit -m "chore: pnpm 워크스페이스 전환 + 경로 패치"

6. export-tokens.mjs(기존 파일)를 packages/tokens/scripts/로 옮긴다. 토큰 스크립트도
   OUT 경로가 패키지 루트 기준인지 확인한다(tokens/ 와 dist/tokens.css).

<!--
============================================================
사용법 (복사 시 이 블록은 제거하십시오)

1. 이 파일 전체를 복사합니다.
2. `apps/docs/src/pages/components/{slug}.mdx`로 저장합니다.
   - slug는 kebab-case (예: button, text-field)
   - vocs.config.ts sidebar에 항목이 없으면 추가하십시오.
3. 이미지는 `apps/docs/public/components/{slug}/`에 두고,
   본문에서는 `/components/{slug}/hero.png` 형태로 참조합니다.
4. placeholder `{...}`, `TBD`, `YYYY-MM-DD`를 실제 값으로 교체합니다.
5. `pnpm --filter @gsds/docs dev`로 로컬 확인 후 커밋합니다.

참고 예시: apps/docs/src/pages/components/button.mdx
============================================================
-->

---
# GS Design System — 컴포넌트 가이드 표준 템플릿 v0.3 (레포 적용판)
# AI 에이전트가 파싱하는 메타데이터 영역입니다.
# 값이 미확정이면 비워두지 말고 "TBD"로 명시합니다.
title: "ComponentName"
korean: "{한국어명}"
description: "{한 문장 정의. '~하는 컴포넌트입니다.' 형태로 씁니다.}"
category: "components/{actions|input-control|data-display|feedback-status|navigation|data-and-tables|patterns}"
status: "draft"
version: "0.1.0"
lastUpdated: "YYYY-MM-DD"
platforms: [web, android, ios, flutter]
figma:
  fileKey: "nt54vMZZnxkgPQ5It6B0IU"
  nodeId: "TBD"
code:
  react: "@gs/design-system-react"
  vue: "@gs/design-system-vue"
aliases: []
relatedComponents: []
tokenSource: "gsshop-token-ver0813.json"
tokenCollections: []
a11y:
  role: ""
  wcag: "2.1 AA"
ai:
  intents: []
  doNotConfuseWith: []
---

<!--
============================================================
작성 규칙 (배포 MDX에 포함해도 됩니다. HTML 주석은 렌더되지 않습니다.)

1. 문체: 종결 어미는 '합니다'체(`~합니다 / ~입니다 / ~됩니다`)로 통일합니다.
   지시문은 `~하십시오` 형태로 씁니다. '하다'체(`~한다 / ~이다`)는 쓰지 않습니다.
2. 섹션 번호와 영문 앵커는 변경하지 않습니다. AI 파싱의 안정 키(stable key)입니다.
3. 필수 섹션: 1, 2, 3, 4, 6, 7, 11, 13, 16, 17
   선택 섹션: 5, 8, 9, 10, 14, 15, 18 — 해당 없으면 삭제하지 말고
   "해당 없음 (사유: ...)" 한 줄을 남깁니다.
4. 모든 스타일 값은 토큰으로 기술합니다. 원시값(hex, px)은 토큰 옆 참고값으로만 병기합니다.
5. Figma에서 미확인 값은 "⚠ 확인 필요"를 붙입니다.
6. 토큰 표기: `gsshop-token-ver0813.json`(Figma Variables 원본)의 변수명을 그대로 쓰고
   앞에 `$`를 붙여 슬래시 경로로 표기합니다. 예: `$color/background/brand/default`, `$spacing/160`, `$radius/md`.
   "sys" 접두어 계층은 없으므로 임의로 붙이지 않습니다.
   kebab-case 별칭(예: `color-surface-default`)은 실제 토큰 체계가 아니므로 쓰지 않습니다.
   원본 파일에 없는 값은 발명하지 말고 "⚠ 확인 필요 — {사유}"로 명시하거나 파생 계산식을 남깁니다.
7. 이미지: `apps/docs/public/components/{component-name}/`에 저장하고
   MDX 본문에서는 `/components/{component-name}/hero.png`로 참조합니다.
============================================================
-->

# {ComponentName}

{한 줄 설명. frontmatter description과 동일하게 유지합니다.}

![hero-preview](/components/{component-name}/hero.png)

#### 다른 이름 (Common Alternative Names)
{aliases를 자연어로 나열합니다. 없으면 "없음"}

---

## 1. 주요 특징

- {핵심 특성. 예: 선택 방식, 그룹 크기, 배치 규칙}
- {사용 제약. 예: 옵션 수 상한, 라벨 길이, 다국어 대응}
- {시각·인터랙션 특징}

---

## 2. 사용 시점 (When to Use)

이 컴포넌트가 해결하는 사용자 목적(Job to be done)을 1~4개로 정리합니다.

1. **{목적 1}** — {한 줄 설명}
2. **{목적 2}** — {한 줄 설명}

### 사용하지 않는 맥락 (When NOT to Use)

- {부적합한 상황} → 대신 **{대체 컴포넌트}**를 사용하십시오
- {부적합한 상황} → 대신 **{대체 컴포넌트}**를 사용하십시오

---

## 3. Use Cases <!-- 선택 -->

실제 화면에서 이 컴포넌트가 어떻게 쓰이는지 시나리오 단위로 서술합니다.

### 케이스 1 — {제목}

**의도:** {사용자가 무엇을 하려고 하는가}
**효과:** {이 컴포넌트가 어떤 가치를 제공하는가}
**예시:** {실제 화면 예시}

![use-case-1](/components/{component-name}/use-case-1.png)

---

## 4. 해부 구조 (Anatomy)

![{ComponentName} Anatomy](/components/{component-name}/anatomy.png)

| # | 슬롯 (Slot) | 필수 여부 | 역할 |
| :-- | :-- | :-- | :-- |
| 1 | Container (root) | 필수 | 인터랙션 가능한 전체 영역 |
| 2 | Label | 필수/선택 | {설명} |
| 3 | {슬롯명} | 선택 | {설명} |

<!-- 슬롯명은 12·13장·Figma 레이어명·코드 prop과 1:1로 일치시킵니다. -->

---

## 5. 속성 (Properties)

<!-- 컴포넌트에 존재하는 축(axis)만 남기고 나머지는 삭제합니다.
     축 이름(variant, size, layout, state, width)은 Figma 프로퍼티명·코드 prop명과 일치시킵니다. -->

### 5.1 Variant

| Variant | 설명 | 용도 |
| :-- | :-- | :-- |
| `default` | 기본형 | 일반 상황 |
| `{variantB}` | {설명} | {용도} |

### 5.2 Size

| Size | Height (참고) | Padding | Font | Radius |
| :-- | :-- | :-- | :-- | :-- |
| `sm` | - | - | - | - |
| `md` | - | - | - | - |
| `lg` | - | - | - | - |

<!-- 사이즈 키는 약어형(xs, sm, md, lg)으로 통일합니다. 실제 값은 13장 Token Mapping에서 토큰으로 확정합니다. -->

### 5.3 Width Behavior

| Mode | 동작 | 사용 시점 |
| :-- | :-- | :-- |
| `hug` | 콘텐츠 길이에 따라 가변 (기본값) | 텍스트 길이가 다양할 때 |
| `fill` | 부모 너비를 가득 채움 | 폼·카드 안에 들어갈 때 |
| `fixed` | 트랙 너비 고정, 항목이 동일 비율로 분할 | 옵션 수가 적고 균일하게 보이고 싶을 때 |

### 5.4 State

| State | 진입 조건 | 인터랙션 가능 여부 |
| :-- | :-- | :-- |
| `preloading` | 데이터 로드 전. 자리에 skeleton을 표시합니다 | 불가 |
| `enabled` | 기본 상태 | 가능 |
| `hover` | 포인터가 올라간 상태 (웹 전용) | 가능 |
| `focus` | 키보드 포커스를 받은 상태 | 가능 |
| `pressed` | 탭·클릭이 눌려 있는 상태 | 가능 |
| `selected` | {진입 조건} | 가능 |
| `disabled` | 현재 조건에서 수행할 수 없는 상태 | 불가 |
| `error` (선택) | {진입 조건} | 컴포넌트에 따라 다름 |

---

## 6. 위계와 조합 (Hierarchy & Composition) <!-- 선택 -->

{여러 인스턴스가 한 화면에 공존할 때의 위계·조합 규칙을 서술합니다.}

| Emphasis | Variant | 화면 내 개수 | 용도 |
| :-- | :-- | :-- | :-- |
| High | `{variant}` | 1개 | {용도} |
| Medium | `{variant}` | 여러 개 | {용도} |
| Low | `{variant}` | 여러 개 | {용도} |

---

## 7. 사용 가이드라인 (Do / Don't)

<!-- Do/Don't는 반드시 쌍으로 작성합니다. 근거를 함께 쓰고, 이미지가 있으면 함께 배치합니다. -->

### ✅ Do

- {권장 패턴과 의도·근거를 함께 씁니다}

### ❌ Don't

- {비권장 패턴} → {이유}. 대체 컴포넌트가 있으면 명시합니다

---

## 8. 콘텐츠 작성 (Content / UX Writing) <!-- 선택 -->

- {라벨·텍스트 작성 규칙}
- {글자 수 제한. 예: 띄어쓰기 포함 최대 N자}
- {좋은 예 ➔ 나쁜 예 대비를 제시합니다}

### 로컬라이제이션 (Localization)

- 번역 시 텍스트가 20~30% 길어질 수 있음을 전제로 레이아웃을 설계하십시오.
- {말줄임/줄바꿈 정책}

---

## 9. 반응형 대응 (Responsive) <!-- 선택 -->

<!-- Figma Layout/Responsive 컬렉션 4개 모드(375/768/1024/1360) 기준으로 서술합니다. -->

| 구간 | 기준 | 동작 |
| :-- | :-- | :-- |
| Mobile | ~767px | {동작} |
| Tablet | 768px~ | {동작} |
| Laptop | 1024px~ | {동작} |
| Desktop | 1360px~ | {동작} |

---

## 10. Prototype <!-- 선택 -->

핵심 인터랙션 데모입니다. Figma Prototype 링크 또는 GIF를 남깁니다.

![prototype](/components/{component-name}/prototype.gif)

---

## 11. Comparison — 유사 컴포넌트와의 차이

| 컴포넌트 | 사용 시점 | 강점 | 사용하지 말아야 할 때 |
| :-- | :-- | :-- | :-- |
| **이 컴포넌트** | — | — | — |
| **유사 A** | — | — | — |
| **유사 B** | — | — | — |

핵심 차이는 멘탈 모델(사용자가 어떻게 인식하는가)과 화면 전환 범위에서 갈립니다. 본문에 1~2문단으로 차이를 풀어 씁니다.

---

## 12. 접근성 (Accessibility)

- **Role / ARIA:** `{역할}` (예: `radiogroup` + `radio`). 라벨만으로 맥락이 부족하면 `aria-label`로 보완하십시오
- **명도 대비:** WCAG 2.1 AA 이상 (일반 텍스트 4.5:1 / 큰 글씨 3:1). `disabled` 상태는 대비 기준 예외입니다
- **터치 타겟:** 최소 48×48px을 보장하십시오 (웹 포인터 입력은 {N}×{N}px)
- **스크린 리더:** 그룹·현재 선택값·옵션 수를 안내합니다
- **포커스 표시:** `$color/border/focus/default` 외곽선을 키보드 사용자에게만 노출하십시오 (`:focus-visible`)
- **모션 감소:** `prefers-reduced-motion` 환경에서는 slide 등 이동 애니메이션을 즉시 전환으로 대체합니다

---

## 13. Token Mapping

<!-- 컴포넌트가 소비하는 토큰을 속성 단위로 한눈에 보는 요약 표입니다.
     값은 gsshop-token-ver0813.json의 실제 변수명을 $ + 슬래시 경로로 씁니다. -->

| Property | Token |
| :-- | :-- |
| background-default | `$color/background/{role}/default` |
| background-hover | `$color/background/{role}/hover` 또는 `$color/state-layer/hover` |
| background-pressed | `$color/background/{role}/pressed` 또는 `$color/state-layer/pressed` |
| background-selected | `$color/background/selected/{role}` |
| background-disabled | `$color/background/disabled/default` |
| content-default | `$color/text/{role}/default` |
| content-selected | `$color/text/selected/{role}` |
| content-disabled | `$color/text/disabled/default` |
| border-default | `$color/border/{role}/default` |
| border-focus | `$color/border/focus/default` |
| radius | `$radius/{key}` |
| padding-horizontal | `$spacing/{value}` |
| padding-vertical | `$spacing/{value}` |
| font | `$label/{size}/font-size` 등 |
| motion-duration | ⚠ 확인 필요 — Motion 컬렉션이 `gsshop-token-ver0813.json`에 아직 없습니다 |
| motion-easing | ⚠ 확인 필요 — 위와 동일 사유 |

> hover·pressed 전용 배경 스와치가 없는 색군(예: inverse)은 `$color/state-layer/*` 오버레이를 대신 씁니다. Motion처럼 원본 토큰 컬렉션이 아직 없는 축은 토큰명을 지어내지 말고 "⚠ 확인 필요"로 남깁니다.

---

## 14. Specification (상세 매트릭스) <!-- 선택, 코드 생성 정밀도가 필요할 때 작성 -->

<!-- 13장 요약 표로 부족할 때만 작성합니다. 상태×슬롯×속성×토큰의 SEED식 전개입니다.
     조합 축이 많으면 base → variant별 → size별 순으로 소제목을 나눕니다. -->

### base

| 상태 | 슬롯 | 속성 | 값 |
| :-- | :-- | :-- | :-- |
| enabled | root | {속성} | `${category}/{role}/{state}` |
| | label | fontWeight | `$label/font-weight/{weight}` |

### variant={variantA}

| 상태 | 슬롯 | 속성 | 값 |
| :-- | :-- | :-- | :-- |
| enabled | root | background | `$color/background/{role}/default` |
| hover | root | background | `$color/background/{role}/hover` |
| pressed | root | background | `$color/background/{role}/pressed` |
| disabled | root | background | `$color/background/disabled/default` |

### size={size}

| 상태 | 슬롯 | 속성 | 값 |
| :-- | :-- | :-- | :-- |
| enabled | root | paddingX | `$spacing/{value}` ({px}) |
| | root | paddingY | `$spacing/{value}` ({px}) |
| | root | cornerRadius | `$radius/{key}` ({px}) |
| | label | fontSize / lineHeight | `$label/{size}/font-size` / `$label/{size}/line-height` |

---

## 15. Behavior

### 선택 동작 <!-- 선택 컴포넌트에만 해당 -->

- {한 번에 하나만 활성인지, 다중 선택인지 서술합니다}
- {클릭·탭 시 상태 전이 규칙}

### 모션 (Motion)

| 요소 | 동작 | Token |
| :-- | :-- | :-- |
| {요소} | {slide/fade 등} | ⚠ 확인 필요 — Motion 컬렉션이 `gsshop-token-ver0813.json`에 아직 없습니다 |

### 키보드 / 포커스

| 키 | 동작 |
| :-- | :-- |
| `Tab` | 다음 포커스 요소로 이동 |
| `Shift+Tab` | 이전 포커스 요소로 이동 |
| `←` / `→` | 그룹 내 항목 이동 (해당 시) |
| `Space` / `Enter` | 실행·선택 |

---

## 16. Platform Notes

| Platform | 구현 노트 |
| :-- | :-- |
| Web | HTML/ARIA 패턴을 따르고, CSS custom property로 토큰을 바인딩합니다 |
| Android | Jetpack Compose 권장. Material 컴포넌트를 그대로 쓰지 않고 토큰으로 재구성합니다 |
| iOS | 네이티브 컴포넌트 대신 자체 구현을 권장합니다 (토큰 일관성 확보) |
| Flutter | 자체 위젯으로 토큰을 바인딩합니다 |

---

## 17. 플랫폼 API (API Reference)

### React

```tsx
import { {ComponentName} } from '@gs/design-system-react';

<{ComponentName} variant="default" size="md">
  {children}
</{ComponentName}>
```

| Prop | Type | Default | 설명 |
| :-- | :-- | :-- | :-- |
| `variant` | `'{a}' \| '{b}'` | `'{a}'` | {설명} |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | {설명} |
| `disabled` | `boolean` | `false` | {설명} |

### Vue

```vue
<GS{ComponentName} variant="default" size="md">{내용}</GS{ComponentName}>
```

<!-- Android / iOS / Flutter API는 code-connect가 확정되면 동일 표 형식으로 추가합니다. 미구현이면 "TBD"로 남깁니다. -->

### Android — TBD
### iOS — TBD
### Flutter — TBD

---

## 18. 관련 컴포넌트 (Related) <!-- 선택 -->

- **{컴포넌트}:** {언제 이것을 대신 쓰는지 한 줄}

---

## 19. References <!-- 선택 -->

외부 참고 문서·타 디자인시스템 링크를 남깁니다.

- [{디자인시스템명} — {컴포넌트명}]({URL})

---

## 20. 변경 이력 (Changelog)

<!-- 변경 타입: Added | Changed | Fixed | Deprecated | Removed | Security -->

| Date | Version | Type | 변경 내용 |
| :-- | :-- | :-- | :-- |
| YYYY-MM-DD | 0.1.0 | Added | 초안 작성 |

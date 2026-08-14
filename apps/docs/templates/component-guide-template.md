---
# ============================================================
# GS Design System — 컴포넌트 가이드 표준 템플릿 v0.3
# AI 에이전트가 파싱하는 메타데이터 영역이다.
# 값이 미확정이면 비워두지 말고 "TBD"로 명시한다.
#
# v0.2 변경 사항 (업로드된 component-template.md와 병합):
# - frontmatter: kebab-case component id, code-connect, a11y 요약, 3단 날짜 체계 도입
# - 본문: Use Cases·Prototype·Platform Notes·Changelog Type 컬럼 추가
#
# v0.3 변경 사항:
# - 업로드 템플릿의 `color-surface-default` 등 kebab-case 토큰명은 실제 토큰이 아니라
#   예시였음이 확인되어, v0.2에서 도입했던 Alias/Canonical 이원 표기를 되돌렸다.
# - 토큰은 다시 `gsshop-token-ver0813.json` 기준 단일 경로($ + 슬래시)로만 표기한다.
# ============================================================
component: "component-name"             # kebab-case. 파일명과 일치시킨다. AI 파싱용 정규화 키
display-name: "ComponentName"           # 문서·UI에 노출되는 표시명 (PascalCase 영문)
korean: "{한국어명}"                     # 예: 버튼
description: "{한 문장 정의. '~하는 컴포넌트이다' 형태로 쓴다.}"
status: "draft"                         # draft | in-review | stable | deprecated
version: "0.1.0"
owner: "{담당자}"
created: "YYYY-MM-DD"
updated: "YYYY-MM-DD"
last-reviewed: "YYYY-MM-DD"
platforms: [web, android, ios, flutter]
category: []                            # Action | Input-control | Data-display | Feedback-status | Navigation | Data-and-tables (복수 선택 가능)
tags: []                                 # 검색·필터용 키워드
aliases: []                              # Common Alternative Names. 예: [CTA, Action Button]
related: []                              # 연관 컴포넌트. kebab-case id로 쓴다. 예: [icon-button, chip]
figma:
  file: "{Figma file key 또는 URL}"
  node-id: "{메인 컴포넌트 노드 ID}"
  library: "GS Shop Components"
code-connect:                            # figma-code-connect 스킬로 생성되는 매핑과 동일 값을 쓴다
  web: ""
  android: ""
  ios: ""
  flutter: ""
tokenSource: "gsshop-token-ver0813.json" # 토큰 SSOT 파일명. 버전이 바뀌면 갱신한다
tokenCollections: []                     # 이 컴포넌트가 소비하는 Figma Variable 컬렉션
                                          # 예: ["Semantic: Color", "Semantic: Appearance", "Semantic: Typography"]
a11y:
  role: ""                               # WAI-ARIA role. 예: button, radiogroup
  wcag: "2.1 AA"
ai:                                       # AI 에이전트의 컴포넌트 선택을 돕는 블록
  intents: []                            # 이 컴포넌트를 골라야 하는 사용자 의도 키워드
  doNotConfuseWith: []                   # 혼동하기 쉬운 컴포넌트 목록
---

<!--
============================================================
작성 규칙 (이 주석 블록은 배포 시 유지해도 된다. llms-full.txt에는 포함되지 않도록 빌드에서 제거한다.)

1. 문체: 종결 어미는 '하다'체로 통일한다. 지시문은 '~하라'로 쓴다. '~합니다/~습니다' 금지.
2. 섹션 번호와 영문 앵커는 변경하지 않는다. AI 파싱의 안정 키(stable key)다.
3. 필수 섹션: 1, 2, 3, 4, 6, 7, 11, 13, 16, 17
   선택 섹션: 5, 8, 9, 10, 14, 15, 18 — 해당 없으면 삭제하지 말고
   "해당 없음 (사유: ...)" 한 줄을 남긴다. AI가 '누락'과 '의도적 생략'을 구분하게 한다.
4. 모든 스타일 값은 토큰으로 기술한다. 원시값(hex, px)은 토큰 옆 참고값으로만 병기한다.
5. Figma에서 미확인 값은 "⚠ 확인 필요"를 붙인다.
6. 토큰 표기: `gsshop-token-ver0813.json`(Figma Variables 원본)의 변수명을 그대로 쓰고
   앞에 `$`를 붙여 슬래시 경로로 표기한다. 예: `$color/background/brand/default`, `$spacing/160`, `$radius/md`.
   이 파일에 "sys"라는 접두어 계층은 없으므로 임의로 붙이지 않는다.
   컬러는 `Semantic: Color`, 스페이싱·라운드·스트로크·아이콘 사이즈는 `Semantic: Appearance`,
   타이포그래피는 `Semantic: Typography` 컬렉션의 변수명을 그대로 따른다.
   kebab-case 별칭(예: `color-surface-default`)은 실제 토큰 체계가 아니므로 쓰지 않는다.
   원본 파일에 없는 값(예: 컴포넌트 전용 height, motion duration/easing)은 발명하지 말고
   "⚠ 확인 필요 — {사유}"로 명시하거나 파생 계산식을 남긴다.
7. 이미지 경로는 Obsidian 볼트 상대 경로를 쓴다. 예: `../99-Assets/components/{component}/hero.png`
============================================================
-->

# {ComponentName}

> {한 줄 설명. frontmatter description과 동일하게 유지한다.}

![hero-preview](../99-Assets/components/{component-name}/hero.png)

**다른 이름 (Common Alternative Names):** {aliases를 자연어로 나열한다. 없으면 "없다"}

---

## 1. 주요 특징

- {핵심 특성. 예: 선택 방식, 그룹 크기, 배치 규칙}
- {사용 제약. 예: 옵션 수 상한, 라벨 길이, 다국어 대응}
- {시각·인터랙션 특징}

---

## 2. 사용 시점 (When to Use)

이 컴포넌트가 해결하는 사용자 목적(Job to be done)을 1~4개로 정리한다.

1. **{목적 1}** — {한 줄 설명}
2. **{목적 2}** — {한 줄 설명}

### 사용하지 않는다 (When NOT to Use)

- {부적합한 상황} → 대신 **{대체 컴포넌트}**를 사용하라
- {부적합한 상황} → 대신 **{대체 컴포넌트}**를 사용하라

---

## 3. Use Cases <!-- 선택 -->

실제 화면에서 이 컴포넌트가 어떻게 쓰이는지 시나리오 단위로 서술한다.

### 케이스 1 — {제목}

**의도:** {사용자가 무엇을 하려고 하는가}
**효과:** {이 컴포넌트가 어떤 가치를 제공하는가}
**예시:** {실제 화면 예시}

![use-case-1](../99-Assets/components/{component-name}/use-case-1.png)

---

## 4. 해부 구조 (Anatomy)

![{ComponentName} Anatomy](../99-Assets/components/{component-name}/anatomy.png)

| # | 슬롯 (Slot) | 필수 여부 | 역할 |
| :-- | :-- | :-- | :-- |
| 1 | Container (root) | 필수 | 인터랙션 가능한 전체 영역 |
| 2 | Label | 필수/선택 | {설명} |
| 3 | {슬롯명} | 선택 | {설명} |

<!-- 슬롯명은 12·13장·Figma 레이어명·코드 prop과 1:1로 일치시킨다. -->

---

## 5. 속성 (Properties)

<!-- 컴포넌트에 존재하는 축(axis)만 남기고 나머지는 삭제한다.
     축 이름(variant, size, layout, state, width)은 Figma 프로퍼티명·코드 prop명과 일치시킨다. -->

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

<!-- 사이즈 키는 약어형(xs, sm, md, lg)으로 통일한다. 실제 값은 13장 Specification에서 토큰으로 확정한다. -->

### 5.3 Width Behavior

| Mode | 동작 | 사용 시점 |
| :-- | :-- | :-- |
| `hug` | 콘텐츠 길이에 따라 가변 (기본값) | 텍스트 길이가 다양할 때 |
| `fill` | 부모 너비를 가득 채움 | 폼·카드 안에 들어갈 때 |
| `fixed` | 트랙 너비 고정, 항목이 동일 비율로 분할 | 옵션 수가 적고 균일하게 보이고 싶을 때 |

### 5.4 State

| State | 진입 조건 | 인터랙션 가능 여부 |
| :-- | :-- | :-- |
| `preloading` | 데이터 로드 전. 자리에 skeleton을 표시한다 | 불가 |
| `enabled` | 기본 상태 | 가능 |
| `hover` | 포인터가 올라간 상태 (웹 전용) | 가능 |
| `focus` | 키보드 포커스를 받은 상태 | 가능 |
| `pressed` | 탭·클릭이 눌려 있는 상태 | 가능 |
| `selected` | {진입 조건} | 가능 |
| `disabled` | 현재 조건에서 수행할 수 없는 상태 | 불가 |
| `error` (선택) | {진입 조건} | 컴포넌트에 따라 다름 |

---

## 6. 위계와 조합 (Hierarchy & Composition) <!-- 선택 -->

{여러 인스턴스가 한 화면에 공존할 때의 위계·조합 규칙을 서술한다.}

| Emphasis | Variant | 화면 내 개수 | 용도 |
| :-- | :-- | :-- | :-- |
| High | `{variant}` | 1개 | {용도} |
| Medium | `{variant}` | 여러 개 | {용도} |
| Low | `{variant}` | 여러 개 | {용도} |

---

## 7. 사용 가이드라인 (Do / Don't)

<!-- Do/Don't는 반드시 쌍으로 작성한다. 근거를 함께 쓰고, 이미지가 있으면 함께 배치한다. -->

### ✅ Do

- {권장 패턴을 '~한다' 또는 '~하라' 형태로 쓰고, 의도·근거를 함께 쓴다}

### ❌ Don't

- {비권장 패턴} → {이유} + 대체 컴포넌트가 있으면 명시한다

---

## 8. 콘텐츠 작성 (Content / UX Writing) <!-- 선택 -->

- {라벨·텍스트 작성 규칙}
- {글자 수 제한. 예: 띄어쓰기 포함 최대 N자}
- {좋은 예 ➔ 나쁜 예 대비를 제시한다}

### 로컬라이제이션 (Localization)

- 번역 시 텍스트가 20~30% 길어질 수 있음을 전제로 레이아웃을 설계하라.
- {말줄임/줄바꿈 정책}

---

## 9. 반응형 대응 (Responsive) <!-- 선택 -->

<!-- Figma Layout/Responsive 컬렉션 4개 모드(375/768/1024/1360) 기준으로 서술한다. -->

| 구간 | 기준 | 동작 |
| :-- | :-- | :-- |
| Mobile | ~767px | {동작} |
| Tablet | 768px~ | {동작} |
| Laptop | 1024px~ | {동작} |
| Desktop | 1360px~ | {동작} |

---

## 10. Prototype <!-- 선택 -->

핵심 인터랙션 데모. Figma Prototype 링크 또는 GIF를 남긴다.

![prototype](../99-Assets/components/{component-name}/prototype.gif)

---

## 11. Comparison — 유사 컴포넌트와의 차이

| 컴포넌트 | 사용 시점 | 강점 | 사용하지 말아야 할 때 |
| :-- | :-- | :-- | :-- |
| **이 컴포넌트** | — | — | — |
| **유사 A** | — | — | — |
| **유사 B** | — | — | — |

핵심 차이는 멘탈 모델(사용자가 어떻게 인식하는가)과 화면 전환 범위에서 갈린다. 본문에 1~2문단으로 차이를 풀어 쓴다.

---

## 12. 접근성 (Accessibility)

- **Role / ARIA:** `{역할}` (예: `radiogroup` + `radio`). 라벨만으로 맥락이 부족하면 `aria-label`로 보완하라
- **명도 대비:** WCAG 2.1 AA 이상 (일반 텍스트 4.5:1 / 큰 글씨 3:1). `disabled` 상태는 대비 기준 예외다
- **터치 타겟:** 최소 48×48px을 보장하라 (웹 포인터 입력은 {N}×{N}px)
- **스크린 리더:** 그룹·현재 선택값·옵션 수를 안내하라
- **포커스 표시:** `$color/border/focus/default` 외곽선을 키보드 사용자에게만 노출하라 (`:focus-visible`)
- **모션 감소:** `prefers-reduced-motion` 환경에서는 slide 등 이동 애니메이션을 즉시 전환으로 대체하라

---

## 13. Token Mapping

<!-- 컴포넌트가 소비하는 토큰을 속성 단위로 한눈에 보는 요약 표다.
     값은 gsshop-token-ver0813.json의 실제 변수명을 $ + 슬래시 경로로 쓴다.
     kebab-case 별칭은 실제 토큰 체계가 아니므로 쓰지 않는다. -->

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
| motion-duration | ⚠ 확인 필요 — Motion 컬렉션이 `gsshop-token-ver0813.json`에 아직 없다 |
| motion-easing | ⚠ 확인 필요 — 위와 동일 사유 |

> hover·pressed 전용 배경 스와치가 없는 색군(예: inverse)은 `$color/state-layer/*` 오버레이를 대신 쓴다. Motion처럼 원본 토큰 컬렉션이 아직 없는 축은 토큰명을 지어내지 말고 "⚠ 확인 필요"로 남긴다.

---

## 14. Specification (상세 매트릭스) <!-- 선택, 코드 생성 정밀도가 필요할 때 작성 -->

<!-- 13장 요약 표로 부족할 때만 작성한다. 상태×슬롯×속성×토큰의 SEED식 전개다.
     조합 축이 많으면 base → variant별 → size별 순으로 소제목을 나눈다. -->

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

- {한 번에 하나만 활성인지, 다중 선택인지 서술한다}
- {클릭·탭 시 상태 전이 규칙}

### 모션 (Motion)

| 요소 | 동작 | Token |
| :-- | :-- | :-- |
| {요소} | {slide/fade 등} | ⚠ 확인 필요 — Motion 컬렉션이 `gsshop-token-ver0813.json`에 아직 없다 |

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
| Web | HTML/ARIA 패턴을 따르고, CSS custom property로 토큰을 바인딩한다 |
| Android | Jetpack Compose 권장. Material 컴포넌트를 그대로 쓰지 않고 토큰으로 재구성한다 |
| iOS | 네이티브 컴포넌트 대신 자체 구현을 권장한다 (토큰 일관성 확보) |
| Flutter | 자체 위젯으로 토큰을 바인딩한다 |

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

<!-- Android / iOS / Flutter API는 code-connect가 확정되면 동일 표 형식으로 추가한다. 미구현이면 "TBD"로 남긴다. -->

### Android — TBD
### iOS — TBD
### Flutter — TBD

---

## 18. 관련 컴포넌트 (Related) <!-- 선택 -->

- **{컴포넌트}:** {언제 이것을 대신 쓰는지 한 줄}

---

## 19. References <!-- 선택 -->

외부 참고 문서·타 디자인시스템 링크를 남긴다. Tier 2 레퍼런스 캡처 문서가 있으면 함께 남긴다.

- [{디자인시스템명} — {컴포넌트명}]({URL})

---

## 20. 변경 이력 (Changelog)

<!-- 변경 타입: Added | Changed | Fixed | Deprecated | Removed | Security
     릴리즈 노트 자동 생성 시 이 표를 파싱한다. -->

| Date | Version | Type | 변경 내용 |
| :-- | :-- | :-- | :-- |
| YYYY-MM-DD | 0.1.0 | Added | 초안 작성 |

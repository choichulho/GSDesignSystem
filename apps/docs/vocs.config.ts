import { defineConfig } from 'vocs/config'

// gs-ds-navigation.html의 NAV 객체를 그대로 이식한 설정이다.
// 상단 탭 = topNav, 탭별 사이드바 = sidebar의 경로 매핑.
const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
const items = (base: string, names: string[]) =>
  names.map((n) => ({ text: n, link: `/${base}/${slug(n)}` }))

export default defineConfig({
  title: 'GS Design System',
  renderStrategy: 'full-static',
  description: 'GSSHOP AI-Ready 디자인 시스템',
  topNav: [
    { text: 'Get Started', link: '/get-started/overview', match: '/get-started' },
    { text: 'Foundations', link: '/foundations/design-tokens', match: '/foundations' },
    { text: 'Components', link: '/components/button', match: '/components' },
    { text: 'Develop', link: '/develop/overview', match: '/develop' },
    { text: 'AI & Tools', link: '/ai-tools/overview', match: '/ai-tools' },
    { text: 'Updates', link: '/updates/changelog', match: '/updates' },
  ],
  sidebar: {
    '/get-started': items('get-started', ['Overview', 'Installation', 'Design Principles', 'Contribution']),
    '/foundations': [
      { text: 'Style', items: items('foundations', ['Design Tokens', 'Color', 'Typography', 'Layout & Grids', 'Spacing', 'Radius', 'Border', 'Elevation', 'Opacity']) },
      ...items('foundations', ['Iconography', 'Motion', 'Haptics']),
      { text: 'UX Writing', items: items('foundations', ['Writing', 'Date & Time']) },
    ],
    '/components': [
      { text: 'Action', items: items('components', ['Button', 'Button Group', 'Link', 'Tile']) },
      { text: 'Input Control', collapsed: true, items: items('components', ['Checkbox', 'Date Picker', 'File Upload', 'Text Field', 'Select', 'PIN Code', 'Menu', 'Radio', 'Segmented Control', 'Slider', 'Star Rating', 'Stepper', 'Switch', 'Time Picker', 'Dropdown', 'Chip']) },
      { text: 'Data Display', collapsed: true, items: items('components', ['Accordion', 'Avatar', 'Badge', 'Card', 'Divider', 'Empty State', 'List Item', 'Popover', 'Progress Bar', 'Progress Circle', 'Progress Steps', 'Section Heading', 'Tag', 'Tooltip']) },
      { text: 'Feedback & Status', collapsed: true, items: items('components', ['Banner', 'Dialog', 'Snackbar', 'System Banner']) },
      { text: 'Navigation', collapsed: true, items: items('components', ['Bottom Navigation', 'Breadcrumbs', 'Navigation Header', 'Page Control', 'Pagination', 'Side Navigation', 'Tabs']) },
      { text: 'Data & Tables', collapsed: true, items: items('components', ['Charts', 'Data Table']) },
      { text: 'Patterns', collapsed: true, items: items('components', ['Loading', 'Modality']) },
    ],
    '/develop': [
      ...items('develop', ['Overview', 'Getting Started', 'Changelog']),
      { text: 'Packages', items: items('develop', ['Tokens', 'Icons']) },
      { text: 'Frameworks', items: items('develop', ['React', 'Vue', 'Flutter']) },
    ],
    '/ai-tools': items('ai-tools', ['Overview', 'llms.txt', 'AGENTS.md', 'Figma MCP', 'Claude Code']),
    '/updates': items('updates', ['Changelog', 'Roadmap', 'Releases']),
  },
  theme: {
    accentColor: { light: '#0f78ff', dark: '#5aa2ff' },
  },
})

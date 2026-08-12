'use client'

// IconGallery — 아이콘 파이프라인 산출물(icons.json)을 소비하는 갤러리다.
// gsiconlibrary.vercel.app의 검색·카테고리·그리드 UX를 문서 사이트 안에서 재현한다.
// 데이터 원천: docs/public/icons.json (실전에서는 packages/icons/icons.json을 복사해 둔다)
import { useEffect, useMemo, useState } from 'react'

type Icon = {
  id: string
  name: string
  category: string
  type: string
  keywords: string[]
  svg: string
}

type Manifest = { total: number; icons: Icon[] }

// SVG 안전 처리: 파이프라인이 3중 XSS 방어를 하지만, 렌더 직전에도 한 번 더 거른다.
function sanitizeSvg(svg: string): string {
  const doc = new DOMParser().parseFromString(svg, 'image/svg+xml')
  const root = doc.documentElement
  if (root.nodeName !== 'svg') return ''
  root.querySelectorAll('script, foreignObject').forEach((n) => n.remove())
  for (const el of root.querySelectorAll('*')) {
    for (const attr of [...el.attributes]) {
      if (/^on/i.test(attr.name)) el.removeAttribute(attr.name)
      if (attr.name === 'href' && !attr.value.startsWith('#')) el.removeAttribute(attr.name)
    }
  }
  return new XMLSerializer().serializeToString(root)
}

export function IconGallery() {
  const [manifest, setManifest] = useState<Manifest | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string>('전체')
  const [copied, setCopied] = useState<string | null>(null)

  useEffect(() => {
    fetch('/icons.json')
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(`HTTP ${r.status}`))))
      .then(setManifest)
      .catch((e) => setError(String(e)))
  }, [])

  const categories = useMemo(() => {
    if (!manifest) return []
    return ['전체', ...[...new Set(manifest.icons.map((i) => i.category))].sort()]
  }, [manifest])

  const filtered = useMemo(() => {
    if (!manifest) return []
    const q = query.trim().toLowerCase()
    return manifest.icons.filter((icon) => {
      if (category !== '전체' && icon.category !== category) return false
      if (!q) return true
      return (
        icon.id.includes(q) ||
        icon.name.includes(q) ||
        icon.keywords.some((k) => k.toLowerCase().includes(q))
      )
    })
  }, [manifest, query, category])

  const copyName = (icon: Icon) => {
    navigator.clipboard?.writeText(icon.name).then(() => {
      setCopied(icon.id)
      setTimeout(() => setCopied(null), 1200)
    })
  }

  if (error)
    return (
      <div style={{ padding: 24, textAlign: 'center', color: 'var(--vocs-color_text3)' }}>
        아이콘을 불러오지 못했다. ({error}) icons.json 경로를 확인하라.
      </div>
    )
  if (!manifest) return <div style={{ padding: 24, color: 'var(--vocs-color_text3)' }}>불러오는 중…</div>

  return (
    <div>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="person, car, 알파벳, etc..."
        style={{
          width: '100%', padding: '12px 16px', fontSize: 15,
          border: '1px solid var(--vocs-color_border, #EAECF5)', borderRadius: 12,
          background: 'var(--vocs-color_background, #FFF)', color: 'var(--vocs-color_text)',
          outline: 'none', marginBottom: 14,
        }}
      />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            style={{
              padding: '6px 14px', fontSize: 13.5, borderRadius: 999, cursor: 'pointer',
              border: '1px solid var(--vocs-color_border, #EAECF5)',
              background: c === category ? 'var(--vocs-color_text)' : 'transparent',
              color: c === category ? 'var(--vocs-color_background)' : 'var(--vocs-color_text2)',
            }}
          >
            {c}
          </button>
        ))}
      </div>
      <p style={{ fontSize: 14, color: 'var(--vocs-color_text3)', margin: '0 0 12px' }}>
        {filtered.length}개 아이콘
      </p>
      <div
        style={{
          display: 'grid', gap: 10,
          gridTemplateColumns: 'repeat(auto-fill, minmax(76px, 1fr))',
        }}
      >
        {filtered.map((icon) => (
          <button
            key={icon.id}
            onClick={() => copyName(icon)}
            title={`${icon.name} — 클릭해서 이름 복사`}
            style={{
              aspectRatio: '1', display: 'grid', placeItems: 'center', cursor: 'pointer',
              border: '1px solid var(--vocs-color_border, #EAECF5)', borderRadius: 14,
              background: copied === icon.id ? 'var(--vocs-color_backgroundAccent)' : 'var(--vocs-color_background)',
              color: 'var(--vocs-color_text)', padding: 0,
            }}
          >
            <span
              style={{ width: 24, height: 24, display: 'block' }}
              dangerouslySetInnerHTML={{ __html: sanitizeSvg(icon.svg) }}
            />
          </button>
        ))}
      </div>
    </div>
  )
}

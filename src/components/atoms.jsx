import React from 'react'

export const Icon = ({ d, size = 16, stroke = 1.5, fill = 'none', children, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill}
       stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round"
       style={{ flexShrink: 0, ...style }}>
    {d ? <path d={d} /> : children}
  </svg>
)

export const Icons = {
  FileText: ({ size = 16 }) => <Icon size={size}><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="14 3 14 9 20 9"/><line x1="8" y1="13" x2="16" y2="13"/><line x1="8" y1="17" x2="13" y2="17"/></Icon>,
  Home: ({ size = 16 }) => <Icon size={size}><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5"/></Icon>,
  Key: ({ size = 16 }) => <Icon size={size}><circle cx="8" cy="15" r="4"/><path d="M10.85 12.15 21 2"/><path d="m18 5 3 3"/><path d="m15 8 3 3"/></Icon>,
  Play: ({ size = 16 }) => <Icon size={size}><polygon points="6 4 20 12 6 20 6 4"/></Icon>,
  List: ({ size = 16 }) => <Icon size={size}><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><circle cx="4" cy="6" r=".9"/><circle cx="4" cy="12" r=".9"/><circle cx="4" cy="18" r=".9"/></Icon>,
  CreditCard: ({ size = 16 }) => <Icon size={size}><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></Icon>,
  Settings: ({ size = 16 }) => <Icon size={size}><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.36.16.67.42.9.75"/></Icon>,
  Book: ({ size = 16 }) => <Icon size={size}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></Icon>,
  Copy: ({ size = 16 }) => <Icon size={size}><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></Icon>,
  Check: ({ size = 16 }) => <Icon size={size}><polyline points="20 6 9 17 4 12"/></Icon>,
  Arrow: ({ size = 16 }) => <Icon size={size}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></Icon>,
  Upload: ({ size = 16 }) => <Icon size={size}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></Icon>,
  Download: ({ size = 16 }) => <Icon size={size}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></Icon>,
  Zap: ({ size = 16 }) => <Icon size={size} fill="currentColor" stroke="none"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></Icon>,
  Circle: ({ size = 10, color = 'currentColor' }) => <svg width={size} height={size} viewBox="0 0 10 10"><circle cx="5" cy="5" r="4" fill={color}/></svg>,
  Chevron: ({ size = 14 }) => <Icon size={size}><polyline points="9 18 15 12 9 6"/></Icon>,
  Search: ({ size = 16 }) => <Icon size={size}><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></Icon>,
  Plus: ({ size = 16 }) => <Icon size={size}><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></Icon>,
  Trash: ({ size = 16 }) => <Icon size={size}><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1.5 14a2 2 0 0 1-2 1.8H8.5a2 2 0 0 1-2-1.8L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/></Icon>,
  Eye: ({ size = 16 }) => <Icon size={size}><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></Icon>,
  Logo: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 22 22">
      <rect width="22" height="22" rx="6" fill="#0F2A1D"/>
      <text x="11" y="15.5" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="12" fontWeight="500" fill="#DDEAD8">M</text>
    </svg>
  ),
}

export const StatusDot = ({ color = 'var(--accent)', size = 6 }) => (
  <span style={{ display: 'inline-block', width: size, height: size, borderRadius: '50%', background: color, flexShrink: 0 }} />
)

export const Wordmark = ({ size = 16 }) => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-primary)' }}>
    <Icons.Logo size={20} />
    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: size, letterSpacing: '-0.01em' }}>Markly</span>
  </span>
)

export const Avatar = ({ name, size = 40, bg = 'var(--accent)' }) => {
  const initials = (name || '').split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase()
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: bg, color: '#fff',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontFamily: 'var(--font-ui)', fontWeight: 500, fontSize: size * 0.38, flexShrink: 0,
    }}>{initials}</div>
  )
}

export const Code = ({ children }) => (
  <code style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9em', background: 'var(--bg-muted)',
    padding: '1px 6px', borderRadius: 4, color: 'var(--text-primary)', border: '1px solid var(--border-soft)' }}>{children}</code>
)

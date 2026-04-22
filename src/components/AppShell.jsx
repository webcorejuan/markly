import React from 'react'
import { Icons, StatusDot, Avatar } from './atoms'

export default function AppShell({ active = 'dashboard', onNav, title, breadcrumb, children, searchPlaceholder = 'Search logs, keys, docs…' }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Icons.Home },
    { id: 'keys',      label: 'API Keys',  icon: Icons.Key },
    { id: 'playground',label: 'Playground',icon: Icons.Play },
    { id: 'logs',      label: 'Logs',      icon: Icons.List },
    { id: 'billing',   label: 'Billing',   icon: Icons.CreditCard },
    { id: 'settings',  label: 'Settings',  icon: Icons.Settings },
  ]
  return (
    <div className="markly-root" style={{ display: 'flex', height: '100%', minHeight: '100%' }}>
      {/* Sidebar */}
      <aside style={{
        width: 232, flexShrink: 0, padding: 16,
        borderRight: '1px solid var(--border-soft)',
        display: 'flex', flexDirection: 'column',
        background: 'var(--bg-canvas)',
      }}>
        <div style={{
          background: 'var(--bg-panel)', border: '1px solid var(--border-strong)',
          borderRadius: 'var(--radius-lg)', padding: 16, flex: 1, display: 'flex', flexDirection: 'column',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '2px 4px 16px', marginBottom: 4 }}>
            <Icons.Logo size={22} />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>Markly</span>
          </div>

          <div style={{ fontSize: 11, fontWeight: 500, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '8px 12px 4px' }}>Workspace</div>
          {navItems.slice(0, 5).map(n => {
            const I = n.icon
            return (
              <div key={n.id} className={`navitem ${active === n.id ? 'active' : ''}`} onClick={() => onNav && onNav(n.id)}>
                <I size={16} /> {n.label}
              </div>
            )
          })}

          <div style={{ fontSize: 11, fontWeight: 500, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '16px 12px 4px' }}>Account</div>
          {navItems.slice(5).map(n => {
            const I = n.icon
            return (
              <div key={n.id} className={`navitem ${active === n.id ? 'active' : ''}`} onClick={() => onNav && onNav(n.id)}>
                <I size={16} /> {n.label}
              </div>
            )
          })}
          <div className="navitem">
            <Icons.Book size={16} /> Docs
            <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)' }}>↗</span>
          </div>

          <div style={{ flex: 1 }} />

          <div style={{ padding: '12px 12px 4px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--text-muted)', marginBottom: 6 }}>
              <span>Pages this month</span>
              <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-primary)' }}>12,847</span>
            </div>
            <div style={{ height: 4, background: 'rgba(15,42,29,0.08)', borderRadius: 2, overflow: 'hidden' }}>
              <div style={{ width: '64%', height: '100%', background: 'var(--accent)' }} />
            </div>
            <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 6, fontFamily: 'var(--font-mono)' }}>64% of 20k · Pro</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 8px 4px', borderTop: '1px solid var(--border-strong)', marginTop: 12 }}>
            <Avatar name="Jordan Lee" size={32} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-primary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Jordan Lee</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>jordan@acme.co</div>
            </div>
            <Icons.Chevron size={12} />
          </div>
        </div>
      </aside>

      {/* Main */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        <header style={{
          height: 56, padding: '0 32px', display: 'flex', alignItems: 'center', gap: 16,
          borderBottom: '1px solid var(--border-soft)',
          background: 'var(--bg-canvas)',
        }}>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-muted)', fontSize: 14 }}>
            <Icons.Search size={14} />
            <span>{searchPlaceholder}</span>
            <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 11, padding: '2px 6px', border: '1px solid var(--border-soft)', borderRadius: 4 }}>⌘K</span>
          </div>
          <div style={{ width: 1, height: 24, background: 'var(--border-soft)' }} />
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--text-muted)' }}>
            <StatusDot color="var(--accent)" /> All systems normal
          </span>
          <button className="btn btn-secondary" style={{ padding: '6px 12px', fontSize: 13 }}>
            <Icons.Book size={14} /> Docs
          </button>
        </header>

        <div style={{ flex: 1, overflow: 'auto' }}>
          {breadcrumb && (
            <div style={{ padding: '24px 32px 0', fontSize: 13, color: 'var(--text-muted)' }}>{breadcrumb}</div>
          )}
          {title && (
            <div style={{ padding: '12px 32px 0' }}>
              <h1 style={{ fontSize: 32, fontWeight: 500 }}>{title}</h1>
            </div>
          )}
          <div style={{ padding: '24px 32px 48px' }}>
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}

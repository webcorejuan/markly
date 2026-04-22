import React from 'react'
import { Link } from 'react-router-dom'
import { Icons, Wordmark, Avatar, Code } from './atoms'

function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="markly-root" style={{ display: 'flex', minHeight: '100vh', height: '100%' }}>
      {/* Left: form */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '40px 56px' }}>
        <Wordmark size={17} />
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '100%', maxWidth: 360 }}>
            <h1 style={{ fontSize: 36, fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 8 }}>{title}</h1>
            <p style={{ fontSize: 15, color: 'var(--text-muted)', marginBottom: 32 }}>{subtitle}</p>
            {children}
          </div>
        </div>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', display: 'flex', gap: 20, fontFamily: 'var(--font-mono)' }}>
          <span>© 2026 Markly</span><span>Privacy</span><span>Terms</span>
        </div>
      </div>
      {/* Right: sidepanel */}
      <div style={{ flex: 1, background: 'var(--bg-panel)', borderLeft: '1px solid var(--border-strong)', padding: 40, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 24 }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>$ curl api.markly.dev/v1/parse</div>
        <blockquote style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 28, lineHeight: 1.25, fontWeight: 500, letterSpacing: '-0.015em', color: 'var(--text-primary)', maxWidth: 420 }}>
          "It replaced a 400-line parsing pipeline with one HTTP call. I deleted an entire repo."
        </blockquote>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Avatar name="Ada Hall" size={36} bg="var(--text-primary)" />
          <div>
            <div style={{ fontSize: 14, color: 'var(--text-primary)', fontWeight: 500 }}>Ada Hall</div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Staff engineer, Harbor AI</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SignUp() {
  return (
    <AuthLayout title="Create an account" subtitle="1,000 pages free each month. No card, no trial, no surprises.">
      <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', padding: '10px', marginBottom: 12 }}>
        <svg width="14" height="14" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="currentColor" opacity=".6" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/></svg>
        Continue with Google
      </button>
      <div style={{ textAlign: 'center', position: 'relative', margin: '20px 0', fontSize: 12, color: 'var(--text-muted)' }}>
        <span style={{ background: 'var(--bg-canvas)', padding: '0 12px', position: 'relative', zIndex: 1 }}>or with email</span>
        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, background: 'var(--border-soft)' }} />
      </div>
      <label style={{ display: 'block', fontSize: 12, color: 'var(--text-muted)', fontWeight: 500, marginBottom: 6 }}>Work email</label>
      <input className="input" placeholder="you@company.com" style={{ marginBottom: 14 }} />
      <label style={{ display: 'block', fontSize: 12, color: 'var(--text-muted)', fontWeight: 500, marginBottom: 6 }}>Password</label>
      <input className="input" type="password" placeholder="••••••••" style={{ marginBottom: 20 }} />
      <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '11px' }}>Create account <Icons.Arrow size={14} /></button>
      <p style={{ fontSize: 13, color: 'var(--text-muted)', textAlign: 'center', marginTop: 20 }}>
        Already have one? <Link to="/login" style={{ color: 'var(--accent)' }}>Log in</Link>
      </p>
    </AuthLayout>
  )
}

export function LogIn() {
  return (
    <AuthLayout title="Welcome back" subtitle="Log in to your Markly account.">
      <button className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center', padding: '10px', marginBottom: 12 }}>
        <svg width="14" height="14" viewBox="0 0 24 24"><path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="currentColor" opacity=".6" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/></svg>
        Continue with Google
      </button>
      <div style={{ textAlign: 'center', position: 'relative', margin: '20px 0', fontSize: 12, color: 'var(--text-muted)' }}>
        <span style={{ background: 'var(--bg-canvas)', padding: '0 12px', position: 'relative', zIndex: 1 }}>or with email</span>
        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, background: 'var(--border-soft)' }} />
      </div>
      <label style={{ display: 'block', fontSize: 12, color: 'var(--text-muted)', fontWeight: 500, marginBottom: 6 }}>Email</label>
      <input className="input" placeholder="you@company.com" style={{ marginBottom: 14 }} />
      <label style={{ display: 'block', fontSize: 12, color: 'var(--text-muted)', fontWeight: 500, marginBottom: 6 }}>Password</label>
      <input className="input" type="password" placeholder="••••••••" style={{ marginBottom: 20 }} />
      <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '11px' }}>Log in <Icons.Arrow size={14} /></button>
      <p style={{ fontSize: 13, color: 'var(--text-muted)', textAlign: 'center', marginTop: 20 }}>
        No account? <Link to="/signup" style={{ color: 'var(--accent)' }}>Sign up free</Link>
      </p>
    </AuthLayout>
  )
}

export function Docs() {
  return (
    <div className="markly-root" style={{ display: 'grid', gridTemplateColumns: '220px 1fr 220px', height: '100vh', minHeight: '100%' }}>
      <aside style={{ borderRight: '1px solid var(--border-soft)', padding: '28px 20px', overflow: 'auto' }}>
        <Wordmark size={15} />
        <div style={{ marginTop: 24, fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>Get started</div>
        {['Quickstart', 'Authentication', 'Your first parse'].map((x, i) => (
          <div key={x} className={`navitem ${i === 1 ? 'active' : ''}`} style={{ fontSize: 13, padding: '6px 10px' }}>{x}</div>
        ))}
        <div style={{ marginTop: 16, fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>API</div>
        {['POST /parse', 'GET /jobs', 'Streaming', 'Errors'].map(x => (
          <div key={x} className="navitem" style={{ fontSize: 13, padding: '6px 10px' }}>{x}</div>
        ))}
        <div style={{ marginTop: 16, fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 6 }}>Guides</div>
        {['Agent loops', 'RAG pipelines', 'Large PDFs', 'MCP server'].map(x => (
          <div key={x} className="navitem" style={{ fontSize: 13, padding: '6px 10px' }}>{x}</div>
        ))}
      </aside>

      <main style={{ padding: '44px 56px', overflow: 'auto', maxWidth: 760 }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginBottom: 8 }}>Get started / Authentication</div>
        <h1 style={{ fontSize: 40, fontWeight: 500, letterSpacing: '-0.025em', marginBottom: 12 }}>Authentication</h1>
        <p style={{ fontSize: 17, lineHeight: 1.5, color: 'var(--text-body)', marginBottom: 24 }}>
          Markly uses bearer tokens. Create a key in the dashboard, keep it on your server, and send it in the <Code>Authorization</Code> header. Keys are shown once and hashed after that, so copy them carefully.
        </p>

        <h2 style={{ fontSize: 22, fontWeight: 500, marginTop: 40, marginBottom: 12 }}>Send a request</h2>
        <div className="codeblock" style={{ marginBottom: 20 }}>
          <div><span className="cm"># Authenticated parse</span></div>
          <div><span className="fn">curl</span> https://api.markly.dev/v1/parse \</div>
          <div>{'  '}-H <span className="st">"Authorization: Bearer $MARKLY_KEY"</span> \</div>
          <div>{'  '}-F <span className="st">"file=@deck.pdf"</span></div>
        </div>

        <h2 style={{ fontSize: 22, fontWeight: 500, marginTop: 40, marginBottom: 12 }}>Error responses</h2>
        <p style={{ fontSize: 15, color: 'var(--text-body)', marginBottom: 16 }}>
          Every non-2xx response is JSON with a <Code>code</Code>, a <Code>message</Code>, and a <Code>request_id</Code>.
        </p>
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <table style={{ width: '100%', fontSize: 13, borderCollapse: 'collapse' }}>
            <thead><tr style={{ background: 'var(--bg-muted)' }}>
              {['Code', 'Meaning', 'What to do'].map(h => (
                <th key={h} style={{ textAlign: 'left', padding: '10px 16px', fontWeight: 500, fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{h}</th>
              ))}
            </tr></thead>
            <tbody>
              {[
                ['401', 'Missing or invalid key', 'Rotate and redeploy.'],
                ['413', 'File too large', 'Chunk or compress under 100 MB.'],
                ['429', 'Over quota', 'Upgrade plan, or wait it out.'],
                ['500', 'Our fault', 'Retry once. If it keeps happening, page us.'],
              ].map(([c, m, w]) => (
                <tr key={c} style={{ borderTop: '1px solid var(--border-soft)' }}>
                  <td style={{ padding: '10px 16px', fontFamily: 'var(--font-mono)', color: 'var(--accent)' }}>{c}</td>
                  <td style={{ padding: '10px 16px' }}>{m}</td>
                  <td style={{ padding: '10px 16px', color: 'var(--text-muted)' }}>{w}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: 48, padding: 20, background: 'var(--bg-panel)', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', gap: 16 }}>
          <Icons.Zap size={18} />
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 500, color: 'var(--text-primary)', marginBottom: 2 }}>Next: Your first parse</div>
            <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>Six lines of curl and a live response.</div>
          </div>
          <Icons.Arrow size={16} />
        </div>
      </main>

      <aside style={{ borderLeft: '1px solid var(--border-soft)', padding: '44px 20px', fontSize: 12 }}>
        <div style={{ color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8 }}>On this page</div>
        {['Send a request', 'Error responses', 'Rotating keys', 'Webhooks'].map((x, i) => (
          <div key={x} style={{ padding: '5px 0', color: i === 0 ? 'var(--accent)' : 'var(--text-muted)', cursor: 'pointer', borderLeft: i === 0 ? '2px solid var(--accent)' : '2px solid transparent', paddingLeft: 10 }}>{x}</div>
        ))}
      </aside>
    </div>
  )
}

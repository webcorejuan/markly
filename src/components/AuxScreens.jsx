import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Icons, Wordmark, Avatar, Code } from './atoms'
import { supabase } from '../lib/supabase'

function AuthLayout({ children }) {
  return (
    <div className="markly-root" style={{ display: 'flex', minHeight: '100vh' }}>
      {/* Left: form */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '40px 56px' }}>
        <Wordmark size={17} />
        <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '100%', maxWidth: 360 }}>
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

function OtpForm({ title, subtitle }) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [step, setStep] = useState('email') // 'email' | 'code'
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function sendOtp(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: true,
        emailRedirectTo: `${window.location.origin}/app/dashboard`,
      },
    })
    if (error) {
      setError(error.message)
    } else {
      setStep('code')
    }
    setLoading(false)
  }

  async function verifyOtp(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.verifyOtp({ email, token: code, type: 'email' })
    if (error) {
      setError(error.message)
    } else {
      navigate('/app/dashboard')
    }
    setLoading(false)
  }

  if (step === 'code') {
    return (
      <>
        <h1 style={{ fontSize: 36, fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 8 }}>Check your email</h1>
        <p style={{ fontSize: 15, color: 'var(--text-muted)', marginBottom: 32 }}>
          We sent a code to <strong style={{ color: 'var(--text-primary)' }}>{email}</strong>
        </p>
        <form onSubmit={verifyOtp}>
          <label style={{ display: 'block', fontSize: 12, color: 'var(--text-muted)', fontWeight: 500, marginBottom: 6 }}>Code</label>
          <input
            className="input"
            value={code}
            onChange={e => setCode(e.target.value.replace(/\D/g, ''))}
            placeholder="······"
            maxLength={8}
            autoFocus
            style={{ marginBottom: 20, fontSize: 24, letterSpacing: '0.3em', textAlign: 'center' }}
          />
          {error && <p style={{ fontSize: 13, color: 'var(--danger)', marginBottom: 16 }}>{error}</p>}
          <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '11px' }} disabled={loading || code.length < 4}>
            {loading ? 'Verifying…' : <>Verify <Icons.Arrow size={14} /></>}
          </button>
        </form>
        <button
          onClick={() => { setStep('email'); setCode(''); setError('') }}
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 13, color: 'var(--text-muted)', marginTop: 20, width: '100%', textAlign: 'center' }}
        >
          ← Use a different email
        </button>
      </>
    )
  }

  return (
    <>
      <h1 style={{ fontSize: 36, fontWeight: 500, letterSpacing: '-0.02em', marginBottom: 8 }}>{title}</h1>
      <p style={{ fontSize: 15, color: 'var(--text-muted)', marginBottom: 32 }}>{subtitle}</p>
      <form onSubmit={sendOtp}>
        <label style={{ display: 'block', fontSize: 12, color: 'var(--text-muted)', fontWeight: 500, marginBottom: 6 }}>Email</label>
        <input
          className="input"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="you@company.com"
          autoFocus
          required
          style={{ marginBottom: 20 }}
        />
        {error && <p style={{ fontSize: 13, color: 'var(--danger)', marginBottom: 16 }}>{error}</p>}
        <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', padding: '11px' }} disabled={loading || !email}>
          {loading ? 'Sending…' : <>Send code <Icons.Arrow size={14} /></>}
        </button>
      </form>
    </>
  )
}

export function SignUp() {
  return (
    <AuthLayout>
      <OtpForm
        title="Create an account"
        subtitle="1,000 pages free each month. No card, no trial, no surprises."
      />
    </AuthLayout>
  )
}

export function LogIn() {
  return (
    <AuthLayout>
      <OtpForm
        title="Welcome back"
        subtitle="Enter your email and we'll send you a one-time code."
      />
    </AuthLayout>
  )
}

export function Docs() {
  return (
    <div className="markly-root" style={{ display: 'grid', gridTemplateColumns: '220px 1fr 220px', height: '100vh' }}>
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
          Markly uses bearer tokens. Create a key in the dashboard, keep it on your server, and send it in the <Code>Authorization</Code> header.
        </p>
        <h2 style={{ fontSize: 22, fontWeight: 500, marginTop: 40, marginBottom: 12 }}>Send a request</h2>
        <div className="codeblock" style={{ marginBottom: 20 }}>
          <div><span className="cm"># Authenticated parse</span></div>
          <div><span className="fn">curl</span> https://api.markly.dev/v1/parse \</div>
          <div>{'  '}-H <span className="st">"Authorization: Bearer $MARKLY_KEY"</span> \</div>
          <div>{'  '}-F <span className="st">"file=@deck.pdf"</span></div>
        </div>
        <h2 style={{ fontSize: 22, fontWeight: 500, marginTop: 40, marginBottom: 12 }}>Error responses</h2>
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

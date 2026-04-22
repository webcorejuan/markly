import React from 'react'
import { Icons, StatusDot } from './atoms'

export default function Dashboard() {
  const data = [12, 18, 14, 22, 28, 24, 30, 26, 34, 40, 32, 38, 46, 42, 50, 48, 56, 62, 58, 66, 72, 68, 76, 70, 82, 88, 84, 92, 96, 104]
  const max = Math.max(...data)
  const w = 640, h = 140
  const stepX = w / (data.length - 1)
  const pts = data.map((v, i) => [i * stepX, h - (v / max) * (h - 10) - 5])
  const path = pts.map((p, i) => `${i === 0 ? 'M' : 'L'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ')
  const areaPath = path + ` L${w},${h} L0,${h} Z`

  const Stat = ({ label, value, sub, delta }) => (
    <div className="card" style={{ padding: 20 }}>
      <div style={{ fontSize: 12, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 8 }}>{label}</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 4 }}>
        <span style={{ fontFamily: 'var(--font-display)', fontSize: 32, fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>{value}</span>
        {delta && <span style={{ fontSize: 12, color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>{delta}</span>}
      </div>
      <div style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{sub}</div>
    </div>
  )

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
        <Stat label="Pages processed" value="12,847" sub="↑ from 9,014 last mo" delta="+42%" />
        <Stat label="API calls" value="3,402" sub="avg 3.8 pages / call" />
        <Stat label="p50 latency" value="1.41s" sub="per page, end-to-end" />
        <Stat label="This month" value="$12.84" sub="projected $19.40" />
      </div>

      <div className="card" style={{ padding: 24, marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 20 }}>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 500, marginBottom: 4 }}>Pages over time</h3>
            <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>Last 30 days · updated 2m ago</div>
          </div>
          <div style={{ display: 'flex', gap: 6, fontSize: 12 }}>
            {['24h', '7d', '30d', '90d'].map(p => (
              <button key={p} className={p === '30d' ? 'btn btn-secondary' : 'btn btn-ghost'} style={{ padding: '5px 12px', fontSize: 12, fontFamily: 'var(--font-mono)' }}>{p}</button>
            ))}
          </div>
        </div>
        <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="160" preserveAspectRatio="none">
          <defs>
            <linearGradient id="grad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#1F8A4C" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#1F8A4C" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[0.25, 0.5, 0.75, 1].map(f => (
            <line key={f} x1="0" y1={h * f} x2={w} y2={h * f} stroke="#E2DED2" strokeWidth="1" strokeDasharray="2 4" />
          ))}
          <path d={areaPath} fill="url(#grad)" />
          <path d={path} fill="none" stroke="#1F8A4C" strokeWidth="1.6" />
          {pts.map((p, i) => i === pts.length - 1 && <circle key={i} cx={p[0]} cy={p[1]} r="3" fill="#1F8A4C" />)}
        </svg>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: 8 }}>
          <span>Mar 22</span><span>Apr 06</span><span>Apr 21</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 24 }}>
        <div className="card" style={{ padding: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', padding: '18px 24px', borderBottom: '1px solid var(--border-soft)' }}>
            <h3 style={{ fontSize: 16, fontWeight: 500 }}>Recent requests</h3>
            <div style={{ flex: 1 }} />
            <a style={{ fontSize: 13, color: 'var(--accent)', cursor: 'pointer' }}>View all →</a>
          </div>
          <table style={{ width: '100%', fontSize: 13, borderCollapse: 'collapse', fontFamily: 'var(--font-mono)' }}>
            <tbody>
              {[
                { s: 200, f: 'annual-report-2025.pdf', p: 84, l: '2.1s', t: '2m ago' },
                { s: 200, f: 'invoice-q1.pdf',         p:  4, l: '0.9s', t: '7m ago' },
                { s: 200, f: 'onboarding-deck.pdf',    p: 22, l: '1.4s', t: '14m ago' },
                { s: 429, f: 'bulk-ocr.pdf',           p:  0, l: '—',    t: '22m ago' },
                { s: 200, f: 'handbook-v3.docx',       p: 56, l: '1.8s', t: '36m ago' },
                { s: 200, f: 'receipt.jpg',            p:  1, l: '0.4s', t: '1h ago' },
              ].map((r, i) => (
                <tr key={i} style={{ borderTop: i === 0 ? 'none' : '1px solid var(--border-soft)' }}>
                  <td style={{ padding: '12px 24px', width: 56 }}>
                    <span className={r.s === 200 ? 'badge badge-success' : 'badge badge-warning'} style={{ fontFamily: 'var(--font-mono)' }}>{r.s}</span>
                  </td>
                  <td style={{ padding: '12px 12px', color: 'var(--text-primary)', fontWeight: 500, maxWidth: 240, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{r.f}</td>
                  <td style={{ padding: '12px 12px', color: 'var(--text-muted)', textAlign: 'right' }}>{r.p} pp</td>
                  <td style={{ padding: '12px 12px', color: 'var(--text-muted)', textAlign: 'right' }}>{r.l}</td>
                  <td style={{ padding: '12px 24px', color: 'var(--text-muted)', textAlign: 'right' }}>{r.t}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div className="card" style={{ padding: 20 }}>
            <h3 style={{ fontSize: 16, fontWeight: 500, marginBottom: 16 }}>Quick start</h3>
            <div className="codeblock" style={{ padding: '14px 16px', fontSize: 12 }}>
              <div><span className="cm"># Your key is ready.</span></div>
              <div><span className="fn">curl</span> -H <span className="st">"Auth: Bearer sk_live_…"</span></div>
              <div>&nbsp;&nbsp;api.markly.dev/v1/parse -F file=@x.pdf</div>
            </div>
            <button className="btn btn-secondary" style={{ marginTop: 12, width: '100%', justifyContent: 'center' }}>
              <Icons.Play size={14} /> Open playground
            </button>
          </div>

          <div className="card" style={{ padding: 20, background: 'var(--bg-panel)', border: '1px solid var(--border-strong)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <Icons.Zap size={14} />
              <h3 style={{ fontSize: 15, fontWeight: 600 }}>Changelog</h3>
            </div>
            <div style={{ fontSize: 13, color: 'var(--text-body)', lineHeight: 1.55 }}>
              <div style={{ marginBottom: 10 }}><span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontSize: 11 }}>Apr 19 · v1.0.3</span><br/>Tables in scanned PDFs. 2× cheaper.</div>
              <div><span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontSize: 11 }}>Apr 12 · v1.0.2</span><br/>MCP server for Claude Desktop.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

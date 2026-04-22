// API Keys screen, Playground, Logs, Billing, Settings/Account.

// ─── API Keys ───────────────────────────────────────────────
const ApiKeys = () => {
  const [revealed, setRevealed] = React.useState(null);
  const keys = [
    { n: 'production',  p: 'sk_live_7a2f', c: 'Apr 02', u: 'Just now',    r: 9124, by: 'Jordan' },
    { n: 'staging',     p: 'sk_live_b91c', c: 'Mar 28', u: '2h ago',      r: 318,  by: 'Jordan' },
    { n: 'local-dev',   p: 'sk_live_4de0', c: 'Feb 14', u: '6 days ago',  r: 42,   by: 'Jordan' },
  ];
  return (
    <>
      <div className="card" style={{ padding: 20, marginBottom: 24, background: 'var(--bg-panel)', border: '1px solid var(--border-strong)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-primary)', marginBottom: 4 }}>Keys are shown once, then hashed.</div>
            <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>Rotate regularly. Revoke what you no longer use. We will never show a key a second time.</div>
          </div>
          <button className="btn btn-primary"><Icons.Plus size={14} /> New key</button>
        </div>
      </div>

      <div className="card" style={{ padding: 0 }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
          <thead>
            <tr style={{ background: 'var(--bg-muted)', borderBottom: '1px solid var(--border-soft)' }}>
              {['Name', 'Secret', 'Created', 'Last used', 'Requests', ''].map((h, i) => (
                <th key={h + i} style={{ textAlign: i > 3 && i < 5 ? 'right' : 'left', padding: '12px 20px', fontWeight: 500, color: 'var(--text-muted)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {keys.map((k, i) => (
              <tr key={k.n} style={{ borderTop: i === 0 ? 'none' : '1px solid var(--border-soft)' }}>
                <td style={{ padding: '16px 20px' }}>
                  <div style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{k.n}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Created by {k.by}</div>
                </td>
                <td style={{ padding: '16px 20px', fontFamily: 'var(--font-mono)', fontSize: 13 }}>
                  <span style={{ color: 'var(--text-primary)' }}>{k.p}</span>
                  <span style={{ color: 'var(--text-muted)' }}>{revealed === k.n ? 'x9k2mQ8vT4bR1zN' : '…'.repeat(4)}</span>
                  <button onClick={() => setRevealed(revealed === k.n ? null : k.n)} className="btn btn-ghost" style={{ padding: '2px 8px', marginLeft: 8, fontSize: 12 }}>
                    <Icons.Eye size={12} /> {revealed === k.n ? 'Hide' : 'Reveal'}
                  </button>
                </td>
                <td style={{ padding: '16px 20px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: 13 }}>{k.c}</td>
                <td style={{ padding: '16px 20px', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: 13 }}>{k.u}</td>
                <td style={{ padding: '16px 20px', textAlign: 'right', color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', fontSize: 13 }}>{k.r.toLocaleString()}</td>
                <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                  <button className="btn btn-ghost" style={{ padding: '4px 8px', color: 'var(--danger)' }}><Icons.Trash size={14} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

// ─── Playground ─────────────────────────────────────────────
const Playground = () => {
  const md = `# Q1 Shareholder Letter

**Fiscal 2026 · Ardent Industries**

Revenue reached **$184.2M**, up 31% year-over-year. Gross margin
expanded to 71.4%, driven by a favorable product mix and a full
quarter of the new distribution center in Reno.

## Segment performance

| Segment        | Revenue  | YoY    | Margin |
|----------------|---------:|-------:|-------:|
| Platform       | $112.4M  | +38%   | 78.2%  |
| Services       |  $48.1M  | +21%   | 62.0%  |
| Hardware       |  $23.7M  |  +9%   | 41.5%  |

## Looking ahead

We expect revenue of $198–204M next quarter. Q3 will include
the full cost of the Denver office expansion, which management
views as a one-time step-up.

> "The customer is not asking for more features. They are asking
> for more certainty." — CEO, earnings call, Apr 17

### Risk factors

1. Extended lead times for the Series-C sensor array.
2. FX exposure in the EU growth segment.
3. Open litigation with *Caldwell Dynamics* (see note 14).`;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, height: 'calc(100% - 8px)' }}>
      <div className="card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--border-soft)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <Icons.FileText size={16} />
          <span style={{ fontWeight: 500, fontSize: 14 }}>q1-shareholder-letter.pdf</span>
          <span className="badge badge-neutral" style={{ marginLeft: 6 }}>3 pp</span>
          <div style={{ flex: 1 }} />
          <button className="btn btn-ghost" style={{ padding: '4px 10px', fontSize: 12 }}>Replace</button>
        </div>
        <div style={{ flex: 1, padding: 24, background: '#fff', overflow: 'auto' }}>
          {/* Simulated PDF preview */}
          <div style={{ maxWidth: 380, margin: '0 auto', background: '#fff', border: '1px solid var(--border-soft)', padding: 32, boxShadow: 'var(--shadow-sm)', fontFamily: 'Georgia, serif' }}>
            <div style={{ fontSize: 10, color: '#999', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 24 }}>Fiscal 2026 · Ardent Industries</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: '#111', marginBottom: 16 }}>Q1 Shareholder Letter</div>
            <div style={{ fontSize: 11, lineHeight: 1.6, color: '#222', marginBottom: 16 }}>
              Revenue reached $184.2M, up 31% year-over-year. Gross margin expanded to 71.4%, driven by a favorable product mix and a full quarter of the new distribution center in Reno.
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#111', marginTop: 16, marginBottom: 8 }}>Segment performance</div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 10 }}>
              <thead><tr style={{ borderBottom: '1px solid #999' }}><th style={{ textAlign: 'left', padding: '4px 0' }}>Segment</th><th style={{ textAlign: 'right' }}>Revenue</th><th style={{ textAlign: 'right' }}>YoY</th><th style={{ textAlign: 'right' }}>Margin</th></tr></thead>
              <tbody>
                <tr><td style={{ padding: '3px 0' }}>Platform</td><td style={{ textAlign: 'right' }}>$112.4M</td><td style={{ textAlign: 'right' }}>+38%</td><td style={{ textAlign: 'right' }}>78.2%</td></tr>
                <tr><td style={{ padding: '3px 0' }}>Services</td><td style={{ textAlign: 'right' }}>$48.1M</td><td style={{ textAlign: 'right' }}>+21%</td><td style={{ textAlign: 'right' }}>62.0%</td></tr>
                <tr><td style={{ padding: '3px 0' }}>Hardware</td><td style={{ textAlign: 'right' }}>$23.7M</td><td style={{ textAlign: 'right' }}>+9%</td><td style={{ textAlign: 'right' }}>41.5%</td></tr>
              </tbody>
            </table>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#111', marginTop: 16, marginBottom: 8 }}>Looking ahead</div>
            <div style={{ fontSize: 11, lineHeight: 1.6, color: '#222' }}>
              We expect revenue of $198–204M next quarter. Q3 will include the full cost of the Denver office expansion.
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--border-soft)', display: 'flex', alignItems: 'center', gap: 10 }}>
          <Icons.Zap size={14} />
          <span style={{ fontWeight: 500, fontSize: 14 }}>Markdown output</span>
          <span className="badge badge-success" style={{ marginLeft: 6 }}>68k → 1.2k tokens</span>
          <div style={{ flex: 1 }} />
          <button className="btn btn-ghost" style={{ padding: '4px 10px', fontSize: 12 }}><Icons.Copy size={12} /> Copy</button>
          <button className="btn btn-secondary" style={{ padding: '4px 10px', fontSize: 12 }}><Icons.Download size={12} /> .md</button>
        </div>
        <pre style={{ flex: 1, margin: 0, padding: 24, background: 'var(--code-bg)', color: 'var(--code-text)', fontFamily: 'var(--font-mono)', fontSize: 12.5, lineHeight: 1.65, overflow: 'auto', whiteSpace: 'pre-wrap' }}>{md}</pre>
        <div style={{ padding: '12px 18px', borderTop: '1px solid var(--border-soft)', background: 'var(--bg-muted)', fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', display: 'flex', gap: 20 }}>
          <span>200 OK</span><span>3 pages</span><span>1.41s</span><span>$0.003</span>
          <div style={{ flex: 1 }} />
          <span><StatusDot size={5} color="var(--accent)" /> Complete</span>
        </div>
      </div>
    </div>
  );
};

// ─── Logs ───────────────────────────────────────────────────
const Logs = () => {
  const rows = [
    { s: 200, m: 'POST', p: '/v1/parse', f: 'annual-report-2025.pdf', pp: 84, l: '2.12s', c: '$0.084', k: 'production', t: '14:22:04' },
    { s: 200, m: 'POST', p: '/v1/parse', f: 'invoice-q1.pdf',          pp: 4,  l: '0.91s', c: '$0.004', k: 'production', t: '14:18:41' },
    { s: 200, m: 'POST', p: '/v1/parse', f: 'onboarding-deck.pdf',     pp: 22, l: '1.44s', c: '$0.022', k: 'staging',    t: '14:07:22' },
    { s: 429, m: 'POST', p: '/v1/parse', f: 'bulk-ocr.pdf',             pp: 0,  l: '—',     c: '$0.000', k: 'production', t: '13:58:02' },
    { s: 200, m: 'POST', p: '/v1/parse', f: 'handbook-v3.docx',         pp: 56, l: '1.81s', c: '$0.056', k: 'production', t: '13:44:18' },
    { s: 200, m: 'POST', p: '/v1/parse', f: 'receipt.jpg',              pp: 1,  l: '0.42s', c: '$0.001', k: 'local-dev',  t: '13:22:01' },
    { s: 200, m: 'GET',  p: '/v1/parse/j_7a2f', f: '—',                 pp: '', l: '0.08s', c: '$0.000', k: 'production', t: '13:20:00' },
    { s: 500, m: 'POST', p: '/v1/parse', f: 'scan-1970.pdf',            pp: 0,  l: '—',     c: '$0.000', k: 'production', t: '12:41:55' },
    { s: 200, m: 'POST', p: '/v1/parse', f: 'contract.pdf',             pp: 12, l: '1.05s', c: '$0.012', k: 'staging',    t: '12:33:20' },
  ];
  const statusClass = (s) => s >= 500 ? 'badge badge-danger' : s >= 400 ? 'badge badge-warning' : 'badge badge-success';
  return (
    <>
      <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
        <div className="input" style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', color: 'var(--text-muted)' }}>
          <Icons.Search size={14} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>status:200 key:production</span>
        </div>
        {['All keys', 'Last 24h', 'All statuses'].map(f => (
          <button key={f} className="btn btn-secondary" style={{ fontSize: 13 }}>{f} <Icons.Chevron size={12} /></button>
        ))}
        <button className="btn btn-ghost" style={{ fontSize: 13 }}><Icons.Download size={14} /> Export</button>
      </div>

      <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13, fontFamily: 'var(--font-mono)' }}>
          <thead>
            <tr style={{ background: 'var(--bg-muted)', borderBottom: '1px solid var(--border-soft)', fontFamily: 'var(--font-ui)' }}>
              {['Status', 'Method', 'Path', 'File', 'Pages', 'Latency', 'Cost', 'Key', 'Time'].map((h, i) => (
                <th key={h} style={{ textAlign: ['Pages', 'Latency', 'Cost'].includes(h) ? 'right' : 'left', padding: '12px 16px', fontWeight: 500, color: 'var(--text-muted)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} style={{ borderTop: i === 0 ? 'none' : '1px solid var(--border-soft)' }}>
                <td style={{ padding: '10px 16px' }}><span className={statusClass(r.s)} style={{ fontFamily: 'var(--font-mono)' }}>{r.s}</span></td>
                <td style={{ padding: '10px 16px', color: r.m === 'GET' ? 'var(--info)' : 'var(--accent)', fontWeight: 500 }}>{r.m}</td>
                <td style={{ padding: '10px 16px', color: 'var(--text-primary)' }}>{r.p}</td>
                <td style={{ padding: '10px 16px', color: 'var(--text-body)' }}>{r.f}</td>
                <td style={{ padding: '10px 16px', color: 'var(--text-muted)', textAlign: 'right' }}>{r.pp}</td>
                <td style={{ padding: '10px 16px', color: 'var(--text-muted)', textAlign: 'right' }}>{r.l}</td>
                <td style={{ padding: '10px 16px', color: 'var(--text-primary)', textAlign: 'right' }}>{r.c}</td>
                <td style={{ padding: '10px 16px' }}><span style={{ padding: '1px 8px', background: 'var(--bg-muted)', borderRadius: 4, border: '1px solid var(--border-soft)', fontSize: 11 }}>{r.k}</span></td>
                <td style={{ padding: '10px 16px', color: 'var(--text-muted)' }}>{r.t}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: 16, textAlign: 'center' }}>
        Showing 9 of 3,402 requests · Logs retained 30 days on Pro
      </div>
    </>
  );
};

// ─── Billing ────────────────────────────────────────────────
const Billing = () => (
  <>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24 }}>
      <div className="card" style={{ padding: 24 }}>
        <div style={{ display: 'flex', alignItems: 'start', justifyContent: 'space-between', marginBottom: 16 }}>
          <div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>Current plan</div>
            <h3 style={{ fontSize: 24, fontWeight: 500 }}>Pro</h3>
          </div>
          <span className="badge badge-success">Active</span>
        </div>
        <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 20 }}>
          $0.001 per page after the first 1,000. Renews May 1.
        </div>
        <div style={{ height: 6, background: 'rgba(15,42,29,0.08)', borderRadius: 3, overflow: 'hidden', marginBottom: 8 }}>
          <div style={{ width: '64%', height: '100%', background: 'var(--accent)' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          <span>12,847 / 20,000 pages</span><span>64%</span>
        </div>
        <div style={{ display: 'flex', gap: 8, marginTop: 20 }}>
          <button className="btn btn-secondary" style={{ fontSize: 13 }}>Change plan</button>
          <button className="btn btn-ghost" style={{ fontSize: 13 }}>Cancel</button>
        </div>
      </div>

      <div className="card" style={{ padding: 24 }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>Projected invoice</div>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 12 }}>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>$19.40</span>
          <span style={{ fontSize: 13, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>on May 1</span>
        </div>
        <div style={{ fontSize: 13, color: 'var(--text-body)', lineHeight: 1.7, fontFamily: 'var(--font-mono)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Base · Pro</span><span>$9.00</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}><span>Overage · 11,847 pp</span><span>$11.85</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--accent)' }}><span>Credit · referral</span><span>−$1.45</span></div>
        </div>
      </div>
    </div>

    <div className="card" style={{ padding: 0, marginBottom: 24 }}>
      <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--border-soft)', display: 'flex', alignItems: 'center' }}>
        <h3 style={{ fontSize: 16, fontWeight: 500 }}>Payment method</h3>
        <div style={{ flex: 1 }} />
        <button className="btn btn-ghost" style={{ fontSize: 13 }}>Update</button>
      </div>
      <div style={{ padding: 24, display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ width: 48, height: 32, borderRadius: 6, background: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 10, fontWeight: 500 }}>VISA</div>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--text-primary)' }}>•••• •••• •••• 4242</div>
          <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Expires 08 / 28 · Jordan Lee</div>
        </div>
      </div>
    </div>

    <div className="card" style={{ padding: 0 }}>
      <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--border-soft)' }}>
        <h3 style={{ fontSize: 16, fontWeight: 500 }}>Invoices</h3>
      </div>
      {[
        { d: 'Apr 01, 2026', a: '$12.84', s: 'Paid', n: 'INV-0118' },
        { d: 'Mar 01, 2026', a: '$9.42',  s: 'Paid', n: 'INV-0112' },
        { d: 'Feb 01, 2026', a: '$9.00',  s: 'Paid', n: 'INV-0105' },
        { d: 'Jan 01, 2026', a: '$3.28',  s: 'Paid', n: 'INV-0091' },
      ].map((inv, i) => (
        <div key={i} style={{ padding: '14px 24px', borderTop: '1px solid var(--border-soft)', display: 'flex', alignItems: 'center', fontSize: 14 }}>
          <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontSize: 12, width: 90 }}>{inv.n}</span>
          <span style={{ flex: 1, color: 'var(--text-primary)' }}>{inv.d}</span>
          <span className="badge badge-success" style={{ marginRight: 24 }}>{inv.s}</span>
          <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-primary)', width: 70, textAlign: 'right' }}>{inv.a}</span>
          <button className="btn btn-ghost" style={{ marginLeft: 20, padding: '4px 8px' }}><Icons.Download size={14} /></button>
        </div>
      ))}
    </div>
  </>
);

// ─── Settings / Account ─────────────────────────────────────
const SettingsAccount = () => (
  <div style={{ maxWidth: 720 }}>
    <div className="card" style={{ padding: 24, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 16 }}>
      <Avatar name="Jordan Lee" size={56} />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 18, fontWeight: 500, color: 'var(--text-primary)', fontFamily: 'var(--font-display)' }}>Jordan Lee</div>
        <div style={{ fontSize: 13, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>jordan@acme.co</div>
      </div>
      <button className="btn btn-secondary">Change photo</button>
    </div>

    <div className="card" style={{ padding: 24, marginBottom: 20 }}>
      <h3 style={{ fontSize: 16, fontWeight: 500, marginBottom: 4 }}>Profile</h3>
      <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 20 }}>Displayed on invoices and in support tickets.</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
        <div>
          <label style={{ display: 'block', fontSize: 12, color: 'var(--text-muted)', marginBottom: 6, fontWeight: 500 }}>Full name</label>
          <input className="input" defaultValue="Jordan Lee" />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: 12, color: 'var(--text-muted)', marginBottom: 6, fontWeight: 500 }}>Email</label>
          <input className="input" defaultValue="jordan@acme.co" />
        </div>
      </div>
      <button className="btn btn-primary" style={{ padding: '8px 14px' }}>Save changes</button>
    </div>

    <div className="card" style={{ padding: 24, marginBottom: 20 }}>
      <h3 style={{ fontSize: 16, fontWeight: 500, marginBottom: 4 }}>Password</h3>
      <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 20 }}>Last changed 74 days ago.</div>
      <div style={{ display: 'flex', gap: 8 }}>
        <button className="btn btn-secondary">Change password</button>
        <button className="btn btn-ghost">Send magic link instead</button>
      </div>
    </div>

    <div style={{ padding: 24, background: 'var(--danger-soft)', border: '1px solid var(--danger)', borderRadius: 'var(--radius-lg)' }}>
      <h3 style={{ color: 'var(--danger)', fontSize: 17, fontWeight: 500, marginBottom: 6 }}>Danger zone</h3>
      <p style={{ fontSize: 14, color: 'var(--text-body)', margin: 0, marginBottom: 16, maxWidth: 560 }}>
        This permanently removes your account, all API keys, and every parsed document in Logs. You'll be asked to confirm.
      </p>
      <button className="btn btn-danger">Delete account</button>
    </div>
  </div>
);

Object.assign(window, { ApiKeys, Playground, Logs, Billing, SettingsAccount });

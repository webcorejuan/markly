// Landing page for Markly
// Quiet Terminal aesthetic: cream + sage + deep forest + single accent green.

const Landing = () => {
  const [activeTab, setActiveTab] = React.useState('curl');
  const [copied, setCopied] = React.useState(false);
  const tabs = {
    curl: [
      { t: 'cm', s: '# POST a PDF, get Markdown back.' },
      { t: '', s: '' },
      { t: 'fn', s: 'curl' },
      { t: '',   s: ' https://api.markly.dev/v1/parse \\' },
      { t: '',   s: '  -H "Authorization: Bearer ' }, { t: 'nm', s: 'sk_live_7a2f…' }, { t: '', s: '" \\', br: true },
      { t: '',   s: '  -F "file=@invoice.pdf" \\' },
      { t: '',   s: '  -F "mode=markdown"' },
    ],
    node: [
      { t: 'cm', s: '// One import. One call.' },
      { t: '', s: '' },
      { t: 'ks', s: 'import' }, { t: '', s: ' { ' }, { t: 'nm', s: 'Markly' }, { t: '', s: ' } ' }, { t: 'ks', s: 'from' }, { t: '', s: ' ' }, { t: 'st', s: '"markly"' }, { t: '', s: ';', br: true },
      { t: '', s: '' },
      { t: 'ks', s: 'const' }, { t: '', s: ' md ' }, { t: 'ks', s: '=' }, { t: '', s: ' ' }, { t: 'ks', s: 'await' }, { t: '', s: ' ' },
      { t: 'fn', s: 'markly.parse' }, { t: '', s: '(' }, { t: 'st', s: '"./deck.pdf"' }, { t: '', s: ');' },
    ],
    python: [
      { t: 'cm', s: '# Works great in agent loops.' },
      { t: '', s: '' },
      { t: 'ks', s: 'from' }, { t: '', s: ' markly ' }, { t: 'ks', s: 'import' }, { t: '', s: ' Markly', br: true },
      { t: '', s: '' },
      { t: '',   s: 'md = Markly().' }, { t: 'fn', s: 'parse' }, { t: '', s: '(' }, { t: 'st', s: '"deck.pdf"' }, { t: '', s: ')' },
    ],
    mcp: [
      { t: 'cm', s: '// Drop into your MCP client config.' },
      { t: '', s: '' },
      { t: '', s: '{' },
      { t: '', s: '  ' }, { t: 'st', s: '"markly"' }, { t: '', s: ': {', br: true },
      { t: '', s: '    ' }, { t: 'st', s: '"command"' }, { t: '', s: ': ' }, { t: 'st', s: '"npx markly-mcp"' }, { t: '', s: ',', br: true },
      { t: '', s: '    ' }, { t: 'st', s: '"env"' }, { t: '', s: ': { ' }, { t: 'st', s: '"MARKLY_KEY"' }, { t: '', s: ': ' }, { t: 'st', s: '"sk_live_…"' }, { t: '', s: ' }', br: true },
      { t: '', s: '  }' },
      { t: '', s: '}' },
    ],
  };

  const renderTokens = (tokens) => {
    const lines = [[]];
    for (const tok of tokens) {
      if (tok.s === '' && tok.t === '') { lines.push([]); continue; }
      lines[lines.length - 1].push(tok);
      if (tok.br) lines.push([]);
    }
    return lines.map((line, i) => (
      <div key={i} style={{ minHeight: '1.65em' }}>
        {line.map((tok, j) => <span key={j} className={tok.t}>{tok.s}</span>)}
      </div>
    ));
  };

  const copy = () => { setCopied(true); setTimeout(() => setCopied(false), 1200); };

  return (
    <div className="markly-root" style={{ width: '100%' }}>
      {/* Nav */}
      <nav style={{
        display: 'flex', alignItems: 'center', gap: 32,
        padding: '20px 56px', borderBottom: '1px solid var(--border-soft)',
      }}>
        <Wordmark />
        <div style={{ display: 'flex', gap: 4, marginLeft: 16 }}>
          {['Docs', 'Pricing', 'Changelog', 'Status'].map(x => (
            <a key={x} style={{ padding: '6px 12px', color: 'var(--text-body)', fontSize: 14, cursor: 'pointer', borderRadius: 6 }}>{x}</a>
          ))}
        </div>
        <div style={{ flex: 1 }} />
        <a style={{ fontSize: 14, color: 'var(--text-body)', cursor: 'pointer', padding: '6px 12px' }}>Log in</a>
        <button className="btn btn-primary">Get an API key <Icons.Arrow size={14} /></button>
      </nav>

      {/* Hero */}
      <section style={{ padding: '80px 56px 56px', display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 64, alignItems: 'start' }}>
        <div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 12px', background: 'var(--bg-panel)', border: '1px solid var(--border-strong)', borderRadius: 999, fontSize: 12, color: 'var(--text-primary)', marginBottom: 28 }}>
            <StatusDot /> v1.0 · 0.001 USD / page
          </div>
          <h1 style={{ fontSize: 64, lineHeight: 1.02, fontFamily: 'var(--font-display)', fontWeight: 500, color: 'var(--text-primary)', letterSpacing: '-0.035em', marginBottom: 20 }}>
            Markdown for<br/>machines.
          </h1>
          <p style={{ fontSize: 20, lineHeight: 1.45, color: 'var(--text-body)', maxWidth: 520, marginBottom: 32 }}>
            PDFs in. Clean tokens out. One endpoint, per-page pricing in fractions of a cent, and a playground that feels like a text editor.
          </p>
          <div style={{ display: 'flex', gap: 12, marginBottom: 40 }}>
            <button className="btn btn-primary" style={{ padding: '12px 20px', fontSize: 15 }}>Get an API key <Icons.Arrow size={14} /></button>
            <button className="btn btn-secondary" style={{ padding: '12px 20px', fontSize: 15 }}>Read the docs</button>
          </div>
          <div style={{ display: 'flex', gap: 28, fontSize: 13, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            <span><span style={{ color: 'var(--text-primary)' }}>1k</span> pages free / mo</span>
            <span><span style={{ color: 'var(--text-primary)' }}>98.9%</span> 30d uptime</span>
            <span><span style={{ color: 'var(--text-primary)' }}>p50 1.4s</span> per page</span>
          </div>
        </div>

        {/* Code sample */}
        <div className="card" style={{ overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
          <div style={{ display: 'flex', borderBottom: '1px solid var(--border-soft)', padding: '0 8px', fontSize: 13 }}>
            {Object.keys(tabs).map(k => (
              <button key={k} onClick={() => setActiveTab(k)} style={{
                background: 'transparent', border: 'none', padding: '14px 14px',
                fontFamily: 'var(--font-mono)', fontSize: 12,
                color: activeTab === k ? 'var(--text-primary)' : 'var(--text-muted)',
                borderBottom: activeTab === k ? '1.5px solid var(--accent)' : '1.5px solid transparent',
                cursor: 'pointer', fontWeight: activeTab === k ? 500 : 400,
              }}>{k}</button>
            ))}
            <div style={{ flex: 1 }} />
            <button onClick={copy} className="btn-ghost" style={{ border: 'none', background: 'transparent', padding: '0 12px', color: copied ? 'var(--accent)' : 'var(--text-muted)', cursor: 'pointer', fontSize: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
              {copied ? <><Icons.Check size={12} /> Copied</> : <><Icons.Copy size={12} /> Copy</>}
            </button>
          </div>
          <div className="codeblock" style={{ borderRadius: 0, padding: '22px 24px', minHeight: 220, fontSize: 13 }}>
            {renderTokens(tabs[activeTab])}
          </div>
          <div style={{ padding: '14px 20px', background: 'var(--bg-muted)', borderTop: '1px solid var(--border-soft)', display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, color: 'var(--text-muted)' }}>
            <Icons.Arrow size={12} /> <span style={{ fontFamily: 'var(--font-mono)' }}>200 OK · 4 pages · 1.8s · $0.004</span>
            <div style={{ flex: 1 }} />
            <span className="badge badge-success"><StatusDot color="var(--accent)" size={5} /> Streaming</span>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div style={{ borderTop: '1px solid var(--border-soft)', margin: '0 56px' }} />

      {/* How it works */}
      <section style={{ padding: '72px 56px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 40 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)' }}>§ 01</span>
          <h2 style={{ fontSize: 32, fontWeight: 500, letterSpacing: '-0.02em' }}>Three steps. No pipeline.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {[
            { n: '01', i: Icons.Upload, t: 'Upload a file', d: 'POST any PDF, DOCX, PPTX, or image to /v1/parse. Up to 100 MB per request.' },
            { n: '02', i: Icons.Zap,    t: 'We parse it',   d: 'Layout-aware OCR and structure extraction. Tables stay as Markdown tables. Figures get captions.' },
            { n: '03', i: Icons.Download,t:'Stream Markdown',d: 'Tokens stream back as they are ready. Feed straight into your model. No post-processing.' },
          ].map(step => {
            const I = step.i;
            return (
              <div key={step.n} className="card" style={{ padding: 28 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{step.n}</span>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--accent-soft)', color: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: 'auto' }}>
                    <I size={18} />
                  </div>
                </div>
                <h3 style={{ fontSize: 20, fontWeight: 500, marginBottom: 8 }}>{step.t}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>{step.d}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Comparison */}
      <section style={{ padding: '24px 56px 72px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 28 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)' }}>§ 02</span>
          <h2 style={{ fontSize: 32, fontWeight: 500, letterSpacing: '-0.02em' }}>The math.</h2>
        </div>
        <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
            <thead>
              <tr style={{ background: 'var(--bg-muted)', borderBottom: '1px solid var(--border-soft)' }}>
                <th style={{ textAlign: 'left', padding: '14px 20px', fontWeight: 500, color: 'var(--text-muted)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>100-page PDF sent to…</th>
                <th style={{ textAlign: 'right', padding: '14px 20px', fontWeight: 500, color: 'var(--text-muted)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Tokens</th>
                <th style={{ textAlign: 'right', padding: '14px 20px', fontWeight: 500, color: 'var(--text-muted)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Cost</th>
                <th style={{ textAlign: 'right', padding: '14px 20px', fontWeight: 500, color: 'var(--text-muted)', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Vs. Markly</th>
              </tr>
            </thead>
            <tbody style={{ fontFamily: 'var(--font-mono)', fontSize: 13 }}>
              {[
                { a: 'A frontier model, as PDF input', t: '~480,000', c: '$1.44', v: '144×' },
                { a: 'Tesseract OCR → same model',     t: '~180,000', c: '$0.54', v: '54×' },
                { a: 'Markly → same model',             t: ' 68,000',  c: '$0.10 + $0.10 parse', v: '1×', hi: true },
              ].map((row, i) => (
                <tr key={i} style={{ borderTop: '1px solid var(--border-soft)', background: row.hi ? 'var(--accent-soft)' : 'transparent' }}>
                  <td style={{ padding: '16px 20px', fontFamily: 'var(--font-ui)', color: row.hi ? 'var(--text-primary)' : 'var(--text-body)', fontWeight: row.hi ? 500 : 400 }}>{row.a}</td>
                  <td style={{ padding: '16px 20px', textAlign: 'right' }}>{row.t}</td>
                  <td style={{ padding: '16px 20px', textAlign: 'right' }}>{row.c}</td>
                  <td style={{ padding: '16px 20px', textAlign: 'right', color: row.hi ? 'var(--accent)' : 'var(--text-muted)', fontWeight: row.hi ? 600 : 400 }}>{row.v}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 16, fontFamily: 'var(--font-mono)' }}>
          # Figures are for a dense 100-page report. Your mileage will vary, but not by much.
        </p>
      </section>

      {/* Pricing teaser */}
      <section style={{ padding: '24px 56px 88px', background: 'var(--bg-panel)', borderTop: '1px solid var(--border-strong)', borderBottom: '1px solid var(--border-strong)' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, margin: '48px 0 40px' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)' }}>§ 03</span>
          <h2 style={{ fontSize: 32, fontWeight: 500, letterSpacing: '-0.02em' }}>Priced per page. Not per token.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {[
            { n: 'Free',  p: '$0',      u: '1,000 pages / mo', f: ['Playground', 'One API key', 'Community support'], cta: 'Start free' },
            { n: 'Pro',   p: '$0.001', u: 'per page, after 1k free', f: ['Five keys', 'Logs for 30 days', 'Email support'], cta: 'Start Pro', hi: true },
            { n: 'Scale', p: 'Volume', u: 'from $0.0004 / page', f: ['Unlimited keys', 'Private models', 'DPA & SSO'], cta: 'Talk to founder' },
          ].map(tier => (
            <div key={tier.n} className="card" style={{ padding: 28, background: tier.hi ? 'var(--text-primary)' : 'var(--bg-card)', color: tier.hi ? 'var(--text-inverse)' : undefined, border: tier.hi ? '1px solid var(--text-primary)' : undefined }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                <h3 style={{ fontSize: 18, fontWeight: 500, color: tier.hi ? 'var(--text-inverse)' : 'var(--text-primary)' }}>{tier.n}</h3>
                {tier.hi && <span className="badge badge-success">Recommended</span>}
              </div>
              <div style={{ marginBottom: 6 }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 500, letterSpacing: '-0.02em', color: tier.hi ? 'var(--text-inverse)' : 'var(--text-primary)' }}>{tier.p}</span>
              </div>
              <div style={{ fontSize: 13, color: tier.hi ? 'rgba(247,245,239,0.6)' : 'var(--text-muted)', marginBottom: 20, fontFamily: 'var(--font-mono)' }}>{tier.u}</div>
              <div style={{ height: 1, background: tier.hi ? 'rgba(247,245,239,0.15)' : 'var(--border-soft)', margin: '0 0 20px' }} />
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {tier.f.map(f => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: tier.hi ? 'rgba(247,245,239,0.9)' : 'var(--text-body)' }}>
                    <Icons.Check size={14} /> {f}
                  </li>
                ))}
              </ul>
              <button className={tier.hi ? 'btn' : 'btn btn-secondary'} style={tier.hi ? { background: 'var(--accent)', color: '#fff', width: '100%', justifyContent: 'center', padding: '10px' } : { width: '100%', justifyContent: 'center', padding: '10px' }}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: '40px 56px 48px', display: 'flex', gap: 32, alignItems: 'center', fontSize: 13, color: 'var(--text-muted)' }}>
        <Wordmark />
        <span style={{ fontFamily: 'var(--font-mono)' }}>v1.0 · 2026</span>
        <div style={{ flex: 1 }} />
        <div style={{ display: 'flex', gap: 20 }}>
          {['Status', 'Docs', 'Pricing', 'Changelog', 'Privacy', 'Terms', 'GitHub'].map(x => (
            <a key={x} style={{ color: 'var(--text-muted)', cursor: 'pointer' }}>{x}</a>
          ))}
        </div>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)' }}>
          Built by
          <Avatar name="Jordan Lee" size={20} bg="var(--text-primary)" /> Jordan
        </span>
      </footer>
    </div>
  );
};

Object.assign(window, { Landing });

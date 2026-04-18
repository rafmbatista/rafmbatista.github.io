// Manuscript — shared mid-fi primitives for standalone screen pages.
// Minimal set: tokens exposed as JS, reusable pill/cell/panel atoms.
// Screens import this first, then declare their own layout.

const RA = {
  paper: '#EEF1EA',
  paper2: '#E4E8DE',
  paper3: '#D7DCD0',
  ink: '#16181A',
  ink2: '#24272A',
  ink3: '#4F544E',
  mute: '#6F746A',
  line: '#D7DCD0',
  lineSoft: '#D7DCD0',
  accent: '#2F6A4D',
  accentDeep: '#1F4D36',
  accentSoft: '#BCD3C6',
  pencil: '#2F6A4D',
  pencilSoft: '#BCD3C6',
  quant: '#2F6A4D',
  qual: '#4F544E',
  serif: "'Instrument Serif', Georgia, serif",
  sans: "'Instrument Sans', ui-sans-serif, system-ui, sans-serif",
  mono: "'JetBrains Mono', ui-monospace, Menlo, monospace",
};

// Top bar — reused on every screen page.
// Back-to-hub link, crumbs, cross-screen nav.
function ScreenBar({ current, label }) {
  const screens = [
    { id: 'manuscript', label: 'Paper' },
    { id: 'data',       label: 'Data' },
    { id: 'figures',    label: 'Figures' },
    { id: 'materials',  label: 'Materials' },
    { id: 'papers',     label: 'Library' },
  ];
  return (
    <div className="screen-bar">
      <div className="screen-bar-inner">
        <a className="back" href="../index.html" style={{ whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 10, height: 10, background: RA.accent, display: 'inline-block', transform: 'rotate(45deg)' }} />
          <span style={{ fontFamily: RA.serif, fontSize: 16 }}>Manuscript</span>
        </a>
        <div className="crumbs">
          <span>Screens</span><span className="sep">/</span><span style={{ color: RA.ink }}>{label}</span>
        </div>
        <div className="screen-nav">
          {screens.map(s => (
            <a key={s.id} href={`${s.id}.html`} className={s.id === current ? 'current' : ''}>
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function ConceptNote({ children }) {
  return (
    <div className="concept-note">
      <strong>Concept mock —</strong> {children}
    </div>
  );
}

function ScreenFooter({ prev, next }) {
  const all = {
    manuscript: { label: 'Paper',     href: 'manuscript.html' },
    data:       { label: 'Data',      href: 'data.html' },
    figures:    { label: 'Figures',   href: 'figures.html' },
    materials:  { label: 'Materials', href: 'materials.html' },
    papers:     { label: 'Library',   href: 'papers.html' },
  };
  return (
    <footer style={{ padding: '48px 0 72px', borderTop: `1px solid ${RA.line}`, marginTop: 72 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
        <a href="../index.html" style={{ color: RA.ink2, textDecoration: 'none', fontSize: 14 }}>
          ← All screens
        </a>
        <div style={{ display: 'flex', gap: 24 }}>
          {prev && (
            <a href={all[prev].href} style={{ color: RA.ink2, textDecoration: 'none', fontSize: 14 }}>
              <span style={{ fontFamily: RA.mono, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: RA.ink3, display: 'block' }}>Previous</span>
              ← {all[prev].label}
            </a>
          )}
          {next && (
            <a href={all[next].href} style={{ color: RA.ink2, textDecoration: 'none', fontSize: 14, textAlign: 'right' }}>
              <span style={{ fontFamily: RA.mono, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: RA.ink3, display: 'block' }}>Next</span>
              {all[next].label} →
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}

// Page-header block above each mock — kicker + serif title + one-line caption.
function ScreenIntro({ kicker, title, caption }) {
  return (
    <div className="container" style={{ padding: '64px 24px 40px' }}>
      <div style={{ fontFamily: RA.mono, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: RA.ink3, marginBottom: 16 }}>
        <span style={{ color: RA.accent }}>●</span>&nbsp;&nbsp;{kicker}
      </div>
      <h1 style={{
        fontFamily: RA.serif, fontWeight: 400,
        fontSize: 'clamp(40px, 6vw, 72px)', lineHeight: 1.08, letterSpacing: '-0.015em',
        margin: '0 0 32px', maxWidth: 900,
      }}>
        {title}
      </h1>
      <p style={{ fontFamily: RA.serif, fontSize: 'clamp(20px, 2vw, 24px)', color: RA.ink2, lineHeight: 1.45, margin: 0, maxWidth: 680 }}>
        {caption}
      </p>
    </div>
  );
}

// ── MOCK PRIMITIVES ──────────────────────────────────────────────────
// Mid-fi, same vocabulary as the low-fi wireframe screens, but with
// real type/color instead of sketchy strokes.

function MockFrame({ title, children, height = 720 }) {
  return (
    <div className="container" style={{ padding: '0 24px' }}>
      <div style={{
        background: RA.paper, border: `1px solid ${RA.line}`,
        borderRadius: 6, overflow: 'hidden', boxShadow: '0 2px 12px rgba(26,25,23,0.05)',
      }}>
        <div style={{
          height: 36, background: RA.paper2, borderBottom: `1px solid ${RA.line}`,
          display: 'flex', alignItems: 'center', padding: '0 14px', gap: 10,
        }}>
          <div style={{ display: 'flex', gap: 6 }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: RA.line }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: RA.line }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: RA.line }} />
          </div>
          <div style={{ flex: 1, textAlign: 'center', fontFamily: RA.mono, fontSize: 11, color: RA.ink3 }}>
            {title}
          </div>
        </div>
        <div style={{ height, display: 'flex', overflow: 'hidden' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

// Project sidebar — left rail shared across all screens.
function ProjectRail({ active = 'manuscript' }) {
  const files = {
    manuscript: [
      { k: 'manuscript.md', active: active === 'manuscript' },
      { k: 'abstract.md', dim: true },
      { k: 'cover_letter.md', dim: true },
      { k: 'supplement.md', dim: true },
    ],
    data: [
      { k: 'Raw', folder: true, count: 3, lock: true },
      { k: '  survey_raw.csv', sub: '2.1MB', indent: true },
      { k: '  interviews/', sub: '24', indent: true },
      { k: '  pilot_n40.csv', indent: true },
      { k: 'Clean', folder: true, open: true, link: true, active: active === 'data' },
      { k: '  survey_clean.csv', indent: true, active: active === 'data' },
      { k: '  interviews_coded.json', indent: true },
    ],
    materials: [
      { k: 'survey_instrument.qsf', active: active === 'materials' },
      { k: 'interview_protocol.md' },
      { k: 'consent_irb.pdf' },
      { k: 'stimuli/' },
      { k: 'analysis.R' },
    ],
    figures: [
      { k: 'fig1_flow.svg' },
      { k: 'fig2_main.png', active: active === 'figures' },
      { k: 'fig3_themes.svg' },
      { k: 'tab1_demog.tex' },
    ],
    papers: [
      { k: 'All references', count: 47, active: active === 'papers' },
      { k: '★ Core', count: 12 },
      { k: 'Recent reads', count: 8 },
      { k: 'To read', count: 27 },
    ],
  };

  return (
    <div style={{
      width: 240, borderRight: `1px solid ${RA.line}`, background: RA.paper2,
      display: 'flex', flexDirection: 'column',
    }}>
      {/* Project header */}
      <div style={{ padding: '16px 16px 12px', borderBottom: `1px solid ${RA.lineSoft}` }}>
        <div style={{ fontFamily: RA.mono, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: RA.ink3, marginBottom: 4 }}>Project</div>
        <div style={{ fontFamily: RA.serif, fontSize: 17, lineHeight: 1.2 }}>◆ Trust & AI — Study 3</div>
        <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
          <Pill mini>● draft</Pill>
          <Pill mini muted>mixed methods</Pill>
        </div>
      </div>

      {/* File groups */}
      <div style={{ flex: 1, overflow: 'auto', padding: '14px 0' }}>
        <FileGroup label="Manuscript" count={3} items={files.manuscript} />
        <FileGroup label="Data" count={7} items={files.data} />
        <FileGroup label="Materials" count={5} items={files.materials} />
        <FileGroup label="Figures" count={4} items={files.figures} />
        <FileGroup label="Papers" count={47} items={files.papers} />
      </div>

      {/* User footer */}
      <div style={{ padding: '12px 16px', borderTop: `1px solid ${RA.lineSoft}`, display: 'flex', alignItems: 'center', gap: 10, fontSize: 13 }}>
        <span style={{ width: 22, height: 22, borderRadius: '50%', background: RA.accent, color: RA.paper, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 600 }}>A</span>
        <span style={{ color: RA.ink2 }}>a.chen@lab.edu</span>
      </div>
    </div>
  );
}

function FileGroup({ label, count, items }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{
        padding: '4px 16px 6px',
        fontFamily: RA.mono, fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase',
        color: RA.ink3, display: 'flex', justifyContent: 'space-between',
      }}>
        <span>{label}</span><span style={{ opacity: 0.7 }}>{count}</span>
      </div>
      {items.map((item, i) => (
        <div key={i} style={{
          padding: '4px 16px',
          fontSize: 13,
          color: item.active ? RA.ink : (item.dim ? RA.ink3 : RA.ink2),
          background: item.active ? RA.paper : 'transparent',
          fontWeight: item.active ? 500 : 400,
          borderLeft: item.active ? `2px solid ${RA.accent}` : '2px solid transparent',
          paddingLeft: item.active ? 14 : 16,
          display: 'flex', justifyContent: 'space-between', gap: 6,
          fontFamily: RA.mono, fontSize: 12,
          whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
        }}>
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {item.folder && <span style={{ marginRight: 4, color: RA.ink3 }}>{item.open ? '▾' : '▸'}</span>}
            {item.k}
            {item.lock && <span style={{ marginLeft: 6, color: RA.ink3 }}>🔒</span>}
            {item.link && <span style={{ marginLeft: 6, color: RA.pencil }}>🔗</span>}
          </span>
          {item.sub && <span style={{ color: RA.mute, fontSize: 10, flexShrink: 0 }}>{item.sub}</span>}
          {item.count && <span style={{ color: RA.mute, fontSize: 10, flexShrink: 0 }}>{item.count}</span>}
        </div>
      ))}
    </div>
  );
}

// Pills
function Pill({ children, accent, data, material, live, mini, muted }) {
  const style = {
    display: 'inline-flex', alignItems: 'center', gap: 4,
    padding: mini ? '1px 6px' : '1px 8px',
    borderRadius: 3,
    fontFamily: RA.mono, fontSize: mini ? 10 : 12,
    border: `1px solid ${RA.line}`,
    background: RA.paper,
    color: RA.ink2,
    whiteSpace: 'nowrap',
  };
  if (accent || live) { style.borderColor = RA.accent; style.background = RA.accentSoft; style.color = RA.accentDeep; }
  if (data) { style.borderColor = RA.pencil; style.background = RA.pencilSoft; style.color = RA.pencil; }
  if (material) { style.borderColor = RA.qual; style.background = '#EFE2F2'; style.color = RA.qual; }
  if (muted) { style.borderStyle = 'dashed'; style.color = RA.ink3; }
  return <span style={style}>{children}</span>;
}

// Assistant rail (right side on most screens)
function ClaudeRail({ w = 320 }) {
  return (
    <div style={{
      width: w, borderLeft: `1px solid ${RA.line}`, background: RA.paper,
      display: 'flex', flexDirection: 'column', minHeight: 0,
    }}>
      <div style={{ padding: '14px 18px', borderBottom: `1px solid ${RA.lineSoft}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
          <span style={{ width: 18, height: 18, borderRadius: 4, background: RA.accent, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: RA.paper, fontSize: 11, fontWeight: 700 }}>★</span>
          <span style={{ fontSize: 14, fontWeight: 500 }}>Assistant</span>
        </div>
        <div style={{ fontFamily: RA.mono, fontSize: 10.5, color: RA.ink3 }}>
          context &middot; manuscript + 47 papers
        </div>
      </div>
      <div style={{ flex: 1, overflow: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
        <ChatBubble>
          Drafted a clean pipeline for <u style={{ textDecorationColor: RA.pencil, color: RA.pencil }}>survey_raw.csv</u>. Removed 3 straight-liners, reverse-coded 4 items, computed trust scale (α=.87).
        </ChatBubble>
        <div style={{ background: RA.paper2, border: `1px solid ${RA.line}`, borderRadius: 4, padding: 10 }}>
          <div style={{ fontFamily: RA.mono, fontSize: 11, color: RA.ink3, marginBottom: 6 }}>
            claude code &middot; <span style={{ color: RA.accent }}>clean_survey.R</span>
          </div>
          <div style={{ fontFamily: RA.mono, fontSize: 11, lineHeight: 1.55 }}>
            <div><span style={{ color: RA.ink3 }}>library</span>(<span style={{ color: RA.pencil }}>tidyverse</span>)</div>
            <div><span style={{ color: RA.qual }}>df</span> &lt;- read_csv(<span style={{ color: RA.accent }}>"survey_raw.csv"</span>) |&gt;</div>
            <div>&nbsp;&nbsp;filter(attention_check == <span style={{ color: RA.pencil }}>TRUE</span>) |&gt;</div>
            <div>&nbsp;&nbsp;mutate(trust = rowMeans(across(q1:q10)))</div>
          </div>
          <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
            <MiniBtn>run</MiniBtn>
            <MiniBtn>diff</MiniBtn>
            <MiniBtn accent>save →</MiniBtn>
          </div>
        </div>
        <ChatBubble user>Compare to Pilot N=40. What changed?</ChatBubble>
        <ChatBubble thinking>Thinking…</ChatBubble>
      </div>
      <div style={{ borderTop: `1px solid ${RA.lineSoft}`, padding: 12 }}>
        <div style={{
          border: `1px solid ${RA.line}`, borderRadius: 6, padding: '10px 12px',
          fontSize: 13, color: RA.ink3, background: RA.paper2,
        }}>
          Ask, run analysis, cite, or draft…
        </div>
        <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
          <Pill mini>@manuscript</Pill>
          <Pill mini>@data</Pill>
          <Pill mini>/code</Pill>
        </div>
      </div>
    </div>
  );
}

function ChatBubble({ user, thinking, children }) {
  return (
    <div style={{
      background: user ? RA.paper : RA.paper2,
      border: user ? `1px solid ${RA.line}` : 'none',
      borderRadius: 4,
      padding: user ? '8px 12px' : '10px 12px',
      fontSize: 13, lineHeight: 1.5,
      color: thinking ? RA.ink3 : RA.ink2,
      fontStyle: thinking ? 'italic' : 'normal',
      alignSelf: user ? 'flex-end' : 'flex-start',
      maxWidth: '90%',
    }}>
      {children}
    </div>
  );
}

function MiniBtn({ accent, children }) {
  return (
    <button style={{
      padding: '4px 10px',
      fontFamily: RA.sans, fontSize: 11, fontWeight: 500,
      border: `1px solid ${accent ? RA.accent : RA.line}`,
      background: accent ? RA.accent : 'transparent',
      color: accent ? RA.paper : RA.ink2,
      borderRadius: 3, cursor: 'pointer',
    }}>{children}</button>
  );
}

// Expose to global scope for Babel script files
Object.assign(window, {
  RA, ScreenBar, ConceptNote, ScreenFooter, ScreenIntro,
  MockFrame, ProjectRail, ClaudeRail, Pill, MiniBtn, ChatBubble, FileGroup,
});

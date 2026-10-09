'use client'
import { useRef } from 'react'
import Background from '@/components/Background'
import Loader from '@/components/Loader'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import ScrollReveal from '@/components/ScrollReveal'
import { SITE, DEFAULT_PROJECTS } from '@/constants'

const RESUME = '/Abdur_Rahman.pdf'

/* ── project presentation (visual type + grid span) ── */
const projectMeta: Record<string, { span: 'wide' | 'narrow' | 'half'; visual: 'erp' | 'pos' }> = {
  'Danube Bakery - Bin Dawood Group': { span: 'wide', visual: 'pos' },
  'Woov Club': { span: 'narrow', visual: 'erp' },
  'SAMS Assets Management': { span: 'half', visual: 'erp' },
  'LLM Agentic AI System': { span: 'half', visual: 'pos' },
}

/* ── about: skill categories ── */
const skillCats = [
  { label: 'Programming Languages', items: [['Python', true], ['JavaScript', false], ['TypeScript', false], ['SQL', false], ['C++', false]] },
  { label: 'Backend & APIs', items: [['Django', true], ['DRF', true], ['FastAPI', true], ['Flask', false], ['Node.js', false], ['REST APIs', false]] },
  { label: 'AI / LLM', items: [['LangChain', true], ['LangGraph', true], ['OpenAI API', false], ['RAG Pipelines', false], ['Prompt Engineering', false]] },
  { label: 'Data & DevOps', items: [['PostgreSQL', false], ['MongoDB', false], ['Redis & Celery', false], ['Docker', false], ['Git & Linux', false], ['AWS', false]] },
] as const

const aboutTags = ['Django · DRF · FastAPI', 'LLM Systems', 'REST APIs', 'PostgreSQL', 'Docker', 'Problem Solver', 'Team Collaborator']

/* ── experience ── */
const experienceCards = [
  { icon: 'fa-solid fa-brain', title: 'Tronic AI', desc: 'Backend Developer, Mar 2025 – Jun 2025. Built LLM-powered agentic systems with LangChain and LangGraph, plus RAG pipelines on FastAPI.' },
  { icon: 'fa-solid fa-laptop-code', title: 'Freelance', desc: 'Self-Employed, Jun 2023 – Present. Delivering REST APIs, Django/Flask apps and AI-integrated backends for clients across industries.' },
  { icon: 'fa-solid fa-graduation-cap', title: 'The Islamia University of Bahawalpur', desc: 'Bachelor of Science in Computer Science, 2021 – 2025. Strong foundation in software engineering, algorithms and data systems.' },
  { icon: 'fa-solid fa-certificate', title: 'Certifications & Learning', desc: 'Continuous upskilling in backend engineering, cloud deployment and applied AI — keeping pace with the modern Python ecosystem.' },
]

/* ── skill bars ── */
const skillBars = [
  { name: 'Django, DRF & FastAPI', pct: 92 },
  { name: 'Python & Backend Architecture', pct: 90 },
  { name: 'PostgreSQL & Data Modeling', pct: 85 },
  { name: 'LangChain, LangGraph & LLM Systems', pct: 82 },
  { name: 'REST APIs & Third-party Integrations', pct: 86 },
  { name: 'Docker, Linux & Deployment', pct: 78 },
]

const skillOrbs = [
  { icon: 'fab fa-python', name: 'Python' },
  { icon: 'fa-solid fa-leaf', name: 'Django' },
  { icon: 'fa-solid fa-bolt', name: 'FastAPI' },
  { icon: 'fa-solid fa-database', name: 'PostgreSQL' },
  { icon: 'fa-solid fa-robot', name: 'LangChain' },
  { icon: 'fa-solid fa-diagram-project', name: 'LangGraph' },
  { icon: 'fab fa-node-js', name: 'Node.js' },
  { icon: 'fab fa-docker', name: 'Docker' },
  { icon: 'fab fa-aws', name: 'AWS' },
]

/* ── visual helpers ── */
function ErpVisual() {
  return (
    <div className="erp-visual">
      <div className="erp-modules">
        <div className="erp-mod"><i className="fa-solid fa-server" />API</div>
        <div className="erp-mod"><i className="fa-solid fa-database" />Data</div>
        <div className="erp-mod"><i className="fa-solid fa-shield-halved" />Auth</div>
        <div className="erp-mod"><i className="fa-solid fa-brain" />AI</div>
        <div className="erp-mod"><i className="fa-solid fa-cloud" />Deploy</div>
        <div className="erp-mod"><i className="fa-solid fa-chart-simple" />Reports</div>
      </div>
      <div className="erp-conn-line" />
    </div>
  )
}

function PosVisual({ title, status, rows, totalLabel, totalValue, branches }: {
  title: string; status: string; rows: [string, string][]; totalLabel: string; totalValue: string; branches: { icon: string; label: string }[]
}) {
  return (
    <div className="pos-visual">
      <div className="pos-screen">
        <div className="pos-bar"><span>{title}</span><strong>{status}</strong></div>
        <div className="pos-items">
          {rows.map(([k, v]) => (
            <div className="pos-item" key={k}><span>{k}</span><span>{v}</span></div>
          ))}
        </div>
        <div className="pos-total"><span>{totalLabel}</span><strong>{totalValue}</strong></div>
      </div>
      <div className="pos-branches">
        {branches.map(b => (
          <div className="pos-branch" key={b.label}><i className={b.icon} /> {b.label}</div>
        ))}
      </div>
    </div>
  )
}

const posConfig: Record<string, Parameters<typeof PosVisual>[0]> = {
  'Danube Bakery - Bin Dawood Group': {
    title: 'Danube Bakery', status: 'LIVE',
    rows: [['App', 'React Native'], ['Admin', 'Django'], ['KDS', 'Chefs'], ['DB', 'PostgreSQL']],
    totalLabel: 'Stack', totalValue: 'DRF',
    branches: [
      { icon: 'fa-solid fa-birthday-cake', label: 'Cake App' },
      { icon: 'fa-solid fa-cash-register', label: 'Billing' },
      { icon: 'fa-solid fa-boxes-stacked', label: 'Inventory' },
    ],
  },
  'LLM Agentic AI System': {
    title: 'Agentic AI', status: 'ACTIVE',
    rows: [['Tools', 'Bound'], ['Memory', 'Vector'], ['Tasks', 'Autonomous']],
    totalLabel: 'Stack', totalValue: 'LangGraph',
    branches: [
      { icon: 'fa-solid fa-robot', label: 'Agents' },
      { icon: 'fa-solid fa-diagram-project', label: 'Graph' },
      { icon: 'fa-solid fa-brain', label: 'OpenAI' },
    ],
  },
}

/* ── contact form ── */
function ContactForm() {
  const btnRef = useRef<HTMLButtonElement>(null)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const btn = btnRef.current!
    const orig = btn.textContent
    btn.textContent = 'Sending...'
    btn.disabled = true
    setTimeout(() => {
      btn.textContent = '✓ Message Sent!'
      btn.style.background = '#10b981'
      setTimeout(() => {
        btn.textContent = orig
        btn.style.background = ''
        btn.disabled = false
        e.currentTarget.reset()
      }, 2500)
    }, 1500)
  }

  return (
    <form className="c-form" onSubmit={handleSubmit}>
      <div className="f-row">
        <div className="f-group">
          <label className="f-label">First Name</label>
          <input type="text" className="f-input" placeholder="Your first name" required />
        </div>
        <div className="f-group">
          <label className="f-label">Last Name</label>
          <input type="text" className="f-input" placeholder="Your last name" />
        </div>
      </div>
      <div className="f-group">
        <label className="f-label">Email</label>
        <input type="email" className="f-input" placeholder="you@company.com" required />
      </div>
      <div className="f-group">
        <label className="f-label">What do you need?</label>
        <select className="f-select" defaultValue="">
          <option value="">Select a service...</option>
          <option>Backend Development (Django / FastAPI)</option>
          <option>REST API Design & Integration</option>
          <option>LLM / Agentic AI Systems</option>
          <option>Full Stack Project</option>
          <option>Internship / Job Opportunity</option>
          <option>Collaboration</option>
        </select>
      </div>
      <div className="f-group">
        <label className="f-label">Message</label>
        <textarea className="f-textarea" placeholder="Tell me about your project..." />
      </div>
      <button ref={btnRef} type="submit" className="f-btn">Send Message →</button>
    </form>
  )
}

export default function Home() {
  return (
    <>
      <Background />
      <Loader />
      <Navbar />
      <ScrollReveal />
      <Hero />

      <div className="glow-line glow-line-anim" />

      {/* ═══ ABOUT ═══ */}
      <section id="about">
        <div className="section-inner">
          <div className="reveal"><span className="section-eyebrow">About Me</span></div>
          <h2 className="section-title reveal d1">Who I Am &amp;<br />What I Build</h2>
          <div className="about-grid">
            <div className="about-text reveal d2">
              <p>I&apos;m a <strong>Backend Developer</strong> focused on building practical, scalable systems — clean service layers, reliable databases, and APIs that hold up under real production load.</p>
              <p>My work spans <strong>Django, DRF, FastAPI, Flask, Node.js, Python, TypeScript</strong> and applied AI with <strong>LangChain and LangGraph</strong>. I enjoy turning complex requirements into dependable backends with authentication, integrations, dashboards and LLM-powered features.</p>
              <p>I&apos;m currently a Backend Developer at <strong>Enigmatix, Islamabad</strong>, and I hold a BSCS from <strong>The Islamia University of Bahawalpur</strong>. I care about clean code, performance and shipping things that work.</p>
              <div className="about-tags">
                {aboutTags.map(t => <span className="about-tag" key={t}>{t}</span>)}
              </div>
            </div>
            <div className="skill-cats reveal d3">
              {skillCats.map(cat => (
                <div className="skill-cat" key={cat.label}>
                  <div className="skill-cat-label">{cat.label}</div>
                  <div className="skill-cat-items">
                    {cat.items.map(([name, hi]) => (
                      <span className={`skill-pill${hi ? ' hi' : ''}`} key={name}>{name}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="glow-line glow-line-anim" />

      {/* ═══ EXPERIENCE ═══ */}
      <section id="experience">
        <div className="section-inner">
          <div className="reveal"><span className="section-eyebrow">Experience</span></div>
          <h2 className="section-title reveal d1">Experience &amp;<br />Education</h2>
          <div className="company-hero reveal d2">
            <div className="company-hero-top">
              <div>
                <div className="company-name"><span className="neon-text">Enigmatix</span> — Backend Developer</div>
                <p className="company-tagline">
                  Currently building production backends with Django, DRF and FastAPI — designing
                  scalable REST APIs, secure JWT authentication, PostgreSQL query optimization and
                  third-party integrations for enterprise products.
                  <strong style={{ color: 'var(--text)' }}> (Jan 2025 – Present, Islamabad)</strong>
                </p>
              </div>
              <div className="company-logo-box">
                <span style={{ fontFamily: 'var(--font-head)', fontSize: '1.2rem', fontWeight: 800, color: '#4169ff' }}>2025</span>
              </div>
            </div>
            <div className="company-divider" />
            <div className="company-services">
              {experienceCards.map((c, i) => (
                <div className={`svc-card reveal d${i + 1}`} key={c.title}>
                  <div className="svc-icon"><i className={c.icon} /></div>
                  <div className="svc-title">{c.title}</div>
                  <p className="svc-desc">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="glow-line glow-line-anim" />

      {/* ═══ PROJECTS ═══ */}
      <section id="projects">
        <div className="section-inner">
          <div className="reveal"><span className="section-eyebrow">Selected Work</span></div>
          <h2 className="section-title reveal d1">Projects &amp;<br />Case Studies</h2>
          <p className="section-sub reveal d2">Production apps, enterprise platforms and AI systems I&apos;ve designed, built and shipped.</p>
          <div className="projects-grid">
            {DEFAULT_PROJECTS.map((p, i) => {
              const meta = projectMeta[p.title] ?? { span: 'half', visual: 'erp' }
              const isLink = p.link !== '#' && p.status === 'published'
              return (
                <div className={`proj-card ${meta.span} reveal d${(i % 4) + 1}`} key={p.id}>
                  <div className="proj-thumb">
                    {meta.visual === 'pos'
                      ? <PosVisual {...posConfig[p.title]} />
                      : <ErpVisual />}
                  </div>
                  <div className="proj-body">
                    <div className="proj-tags">
                      {p.tags.map(t => <span className="proj-tag" key={t}>{t}</span>)}
                    </div>
                    <div className="proj-title">{p.title}</div>
                    <p className="proj-desc">{p.description}</p>
                    {isLink ? (
                      <a href={p.link} target="_blank" rel="noreferrer" className="proj-link">
                        {p.linkLabel?.replace(' →', '') ?? 'View Project'}
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M7 17L17 7M17 7H7M17 7v10" /></svg>
                      </a>
                    ) : (
                      <span className="proj-link" style={{ color: 'var(--text3)' }}>Coming Soon</span>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <div className="glow-line glow-line-anim" />

      {/* ═══ SKILLS ═══ */}
      <section id="skills">
        <div className="section-inner">
          <div className="reveal"><span className="section-eyebrow">Expertise</span></div>
          <h2 className="section-title reveal d1">Technical<br />Proficiency</h2>
          <div className="skills-grid">
            <div className="bars reveal d2">
              {skillBars.map(b => (
                <div className="bar-item" key={b.name}>
                  <div className="bar-head">
                    <span className="bar-name">{b.name}</span>
                    <span className="bar-pct">{b.pct}%</span>
                  </div>
                  <div className="bar-track"><div className="bar-fill" data-w={b.pct} /></div>
                </div>
              ))}
            </div>
            <div className="skill-orb-grid reveal d3">
              {skillOrbs.map(o => (
                <div className="sorb" key={o.name}>
                  <div className="sorb-icon"><i className={o.icon} /></div>
                  <div className="sorb-name">{o.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="glow-line glow-line-anim" />

      {/* ═══ CONTACT ═══ */}
      <section id="contact">
        <div className="section-inner">
          <div className="reveal"><span className="section-eyebrow">Let&apos;s Connect</span></div>
          <h2 className="section-title reveal d1">Start a<br />Conversation</h2>
          <div className="contact-grid">
            <div className="reveal d2">
              <p className="contact-intro">
                Available for backend development, Django/FastAPI projects, REST API work,
                LLM-powered systems and full-time or internship opportunities.
              </p>
              <div className="contact-links">
                <a href={`mailto:${SITE.email}`} className="c-link">
                  <div className="c-link-icon"><i className="fa-solid fa-envelope" /></div>
                  <div><div className="c-link-label">Email</div><div className="c-link-val">{SITE.email}</div></div>
                </a>
                <a href={`tel:${SITE.phone}`} className="c-link">
                  <div className="c-link-icon"><i className="fa-solid fa-phone" /></div>
                  <div><div className="c-link-label">Phone</div><div className="c-link-val">{SITE.phone}</div></div>
                </a>
                <a href={RESUME} target="_blank" rel="noreferrer" className="c-link">
                  <div className="c-link-icon"><i className="fa-solid fa-file-pdf" /></div>
                  <div><div className="c-link-label">Resume</div><div className="c-link-val">Download PDF</div></div>
                </a>
              </div>
              <div className="social-links">
                <a href={`https://github.com/${SITE.github}`} target="_blank" rel="noreferrer" className="social-link github">
                  <i className="fab fa-github" /> GitHub
                </a>
                <a href={SITE.linkedinUrl} target="_blank" rel="noreferrer" className="social-link linkedin">
                  <i className="fab fa-linkedin" /> LinkedIn
                </a>
                <a href={RESUME} target="_blank" rel="noreferrer" className="social-link resume">
                  <i className="fa-solid fa-file-pdf" /> Resume
                </a>
              </div>
            </div>
            <div className="reveal d3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

'use client'
import { useRef } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ScrollReveal from '@/components/ScrollReveal'
import { DEFAULT_PROJECTS, DEFAULT_SKILLS, EXPERIENCE, SITE } from '@/constants'

/* ── project card accent colors — warm, not AI-kit ── */
const projectAccents = [
  { color: '#d4845a', dim: 'rgba(212,132,90,0.10)',  line: 'rgba(212,132,90,0.6)'  },
  { color: '#5a8fd4', dim: 'rgba(90,143,212,0.10)',  line: 'rgba(90,143,212,0.6)'  },
  { color: '#6b9e7e', dim: 'rgba(107,158,126,0.10)', line: 'rgba(107,158,126,0.6)' },
  { color: '#8f6bbf', dim: 'rgba(143,107,191,0.10)', line: 'rgba(143,107,191,0.6)' },
]

/* ── CV highlight cards (mirrors CV PDF, styled like project cards) ── */
const cvCards = [
  {
    title: 'Professional Summary',
    icon: 'fas fa-code',
    desc: 'Python Backend Developer with 2+ years of experience building scalable backend applications and RESTful APIs using Python, Django, DRF, and FastAPI — including production-ready solutions for enterprise clients. Focused on clean, maintainable, high-performance backend code.',
    tags: ['2+ Years', 'Python', 'Django'],
  },
  {
    title: 'Professional Experience',
    icon: 'fas fa-briefcase',
    desc: 'Python Backend Developer at Enigmatix, Islamabad (Feb 2025 – Present). Building backends with Django & FastAPI, REST APIs with DRF, secure JWT auth, PostgreSQL query optimization, production debugging, and Agile code reviews.',
    tags: ['Enigmatix', 'Feb 2025 – Present', 'Agile'],
  },
  {
    title: 'Education',
    icon: 'fas fa-graduation-cap',
    desc: 'Bachelor of Science in Computer Science (BSCS) from The Islamia University of Bahawalpur (IUB), 2021 – 2025 — strong quantitative and logical foundation.',
    tags: ['BSCS', 'IUB', '2021 – 2025'],
  },
  {
    title: 'Core Competencies',
    icon: 'fas fa-lightbulb',
    desc: 'Django, DRF & FastAPI · PostgreSQL, MySQL, SQLite · Redis & Celery · JWT authentication · Git/GitHub, Linux, Nginx · performance optimization, debugging, and Agile development.',
    tags: ['DRF · FastAPI', 'PostgreSQL · Redis', 'JWT · Celery'],
  },
]

/* ── skill group config ── */
const skillGroups = [
  { label: 'Backend',   icon: 'fas fa-server',    cls: 'skill-backend', keys: ['Django','FastAPI','DRF','Flask','Node.js'] },
  { label: 'AI / LLM',  icon: 'fas fa-brain',     cls: 'skill-ai',      keys: ['LangChain','LangGraph','OpenAI API']       },
  { label: 'Database',  icon: 'fas fa-database',  cls: 'skill-db',      keys: ['PostgreSQL','MongoDB','Redis']              },
  { label: 'DevOps',    icon: 'fas fa-cogs',      cls: 'skill-devops',  keys: ['Docker','Git','AWS']                        },
]

/* skill group accent colors using CSS vars */
const groupColors: Record<string, string> = {
  'Backend':  'var(--accent)',
  'AI / LLM': 'var(--purple)',
  'Database': 'var(--teal)',
  'DevOps':   'var(--amber)',
}

/* ── Contact form ── */
function ContactForm() {
  const btnRef = useRef<HTMLButtonElement>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const btn = btnRef.current!
    const orig = btn.innerHTML
    btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>&nbsp; Sending…'
    btn.disabled = true
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-check"></i>&nbsp; Message sent!'
      setTimeout(() => {
        btn.innerHTML = orig
        btn.disabled = false
        ;(e.target as HTMLFormElement).reset()
      }, 2500)
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="contact-form-row">
        <div className="form-group">
          <label>Your name</label>
          <input type="text" placeholder="Abdur" required />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" placeholder="you@example.com" required />
        </div>
      </div>
      <div className="form-group">
        <label>What are you building?</label>
        <textarea placeholder="Tell me about your project, idea or just say hi…" required />
      </div>
      <button ref={btnRef} type="submit" className="btn-main" style={{ alignSelf: 'flex-start' }}>
        Send it <span style={{ fontSize: '1rem' }}>→</span>
      </button>
    </form>
  )
}

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollReveal />
      <Hero />

      {/* ═══════════════════════════════════════
          PROJECTS
      ═══════════════════════════════════════ */}
      <section id="projects" className="section-projects">
        <div className="section-inner">

          {/* heading */}
          <div className="section-head fade-in">
            <p className="section-eyebrow">— selected work</p>
            <h2 className="section-title">Things I&apos;ve<br />shipped.</h2>
            <p className="section-sub">Real products, real users, real impact.</p>
          </div>

          {/* cards */}
          <div className="projects-grid">
            {DEFAULT_PROJECTS.map((p, i) => {
              const ac = projectAccents[i] ?? projectAccents[0]
              return (
                <Link
                  key={p.title}
                  href={p.link}
                  className={`pj-card fade-in stagger-${i + 1}`}
                  target={p.link.startsWith('http') ? '_blank' : undefined}
                  rel={p.link.startsWith('http') ? 'noreferrer' : undefined}
                >
                  {/* colored left bar */}
                  <div className="pj-bar" style={{ background: ac.color }} />

                  {/* icon badge */}
                  <div className="pj-icon" style={{ background: ac.dim, color: ac.color }}>
                    <i className={p.icon} />
                  </div>

                  {/* number */}


                  <h3 className="pj-title">{p.title}</h3>
                  <p className="pj-desc">{p.description}</p>

                  <div className="pj-tags">
                    {p.tags.map(t => (
                      <span key={t} className="pj-tag" style={{ borderColor: ac.line, color: ac.color }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="pj-link" style={{ color: ac.color }}>
                    {p.status === 'published' ? (p.linkLabel ?? 'View project →') : 'Coming soon'}
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          SKILLS
      ═══════════════════════════════════════ */}
      <section id="skills" className="section-skills">
        <div className="section-inner">

          <div className="section-head fade-in">
            <p className="section-eyebrow">— tools of the trade</p>
            <h2 className="section-title">What I<br />work with.</h2>
          </div>

          <div className="skills-groups">
            {skillGroups.map((g, gi) => {
              const items = DEFAULT_SKILLS.filter(s => g.keys.includes(s.name))
              const col = groupColors[g.label]
              return (
                <div key={g.label} className={`sg-block fade-in stagger-${gi + 1}`}>
                  <div className="sg-header">
                    <span className="sg-emoji"><i className={g.icon} style={{ color: col }} /></span>
                    <span className="sg-label" style={{ color: col }}>{g.label}</span>
                  </div>
                  <div className="sg-items">
                    {items.map(s => (
                      <div key={s.name} className={`skill-item ${g.cls}`}>
                        <i className={s.icon} />
                        <span>{s.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          EXPERIENCE
      ═══════════════════════════════════════ */}
      <section id="experience" className="section-experience">
        <div className="section-inner">

          <div className="section-head fade-in">
            <p className="section-eyebrow">— where I&apos;ve been</p>
            <h2 className="section-title">Experience.</h2>
          </div>

          <div className="exp-list">
            {EXPERIENCE.map((e, i) => (
              <div key={e.title + i} className={`exp-item fade-in-left stagger-${i + 1}`}>

                {/* left: period + dot */}
                <div className="exp-period-col">
                  <span className="exp-period">{e.period}</span>
                  {e.current && <span className="exp-now">now</span>}
                </div>

                {/* connector dot */}
                <div className="exp-dot-col">
                  <div className="exp-dot" style={{ background: e.current ? 'var(--accent)' : 'var(--text-3)', boxShadow: e.current ? '0 0 12px var(--accent)' : 'none' }} />
                  {i < EXPERIENCE.length - 1 && <div className="exp-line" />}
                </div>

                {/* right: content */}
                <div className="exp-content">
                  <div className="exp-header">
                    <h3 className="exp-title">{e.title}</h3>
                    <span className="exp-company">{e.company}</span>
                  </div>
                  <p className="exp-desc">{e.desc}</p>
                  {e.projects && e.projects.length > 0 && (
                    <ul className="exp-projects">
                      {e.projects.map(pj => (
                        <li key={pj}>
                          <span className="exp-bullet">›</span>
                          {pj}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          CV
      ═══════════════════════════════════════ */}
      <section id="cv" className="section-cv">
        <div className="section-inner">

          <div className="section-head fade-in">
            <p className="section-eyebrow">— curriculum vitae</p>
            <h2 className="section-title">My CV.</h2>
            <p className="section-sub">The short version — download the full PDF for everything.</p>
          </div>

          <div className="projects-grid">
            {cvCards.map((c, i) => {
              const ac = projectAccents[i] ?? projectAccents[0]
              return (
                <div key={c.title} className={`pj-card fade-in stagger-${i + 1}`}>
                  <div className="pj-bar" style={{ background: ac.color }} />

                  <div className="pj-icon" style={{ background: ac.dim, color: ac.color }}>
                    <i className={c.icon} />
                  </div>

                  <h3 className="pj-title">{c.title}</h3>
                  <p className="pj-desc">{c.desc}</p>

                  <div className="pj-tags">
                    {c.tags.map(t => (
                      <span key={t} className="pj-tag" style={{ borderColor: ac.line, color: ac.color }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="cv-download fade-in">
            <a href="/Abdur_Rahman.pdf" download="Abdur_Rahman.pdf" className="btn-main">
              <i className="fas fa-download" /> Download CV
              <span className="btn-arrow">↓</span>
            </a>
            <a href="/Abdur_Rahman.pdf" target="_blank" rel="noreferrer" className="btn-ghost">
              <span className="cv-ico"><i className="fas fa-file-pdf" /></span> View CV
            </a>
            <span className="cv-note">PDF · 2 pages · 53 KB</span>
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════
          CONTACT
      ═══════════════════════════════════════ */}
      <section id="contact" className="section-contact">

        {/* background accent */}
        <div className="contact-glow" aria-hidden />

        <div className="section-inner">

          {/* full-width heading above the two columns */}
          <div className="section-head fade-in">
            <p className="section-eyebrow">— let&apos;s talk</p>
            <h2 className="section-title">Got a project<br />in mind?</h2>
            <p className="section-sub">
              Open to freelance work, full-time roles, and good conversations.
            </p>
          </div>

          <div className="contact-grid">

            {/* left: links only */}
            <div className="contact-info fade-in">
              <div className="contact-links">
                {[
                  { icon: 'fas fa-envelope',      label: 'Email me',     value: SITE.email,            href: `mailto:${SITE.email}` },
                  { icon: 'fab fa-github',         label: 'GitHub',       value: `@${SITE.github}`,     href: `https://github.com/${SITE.github}` },
                  { icon: 'fab fa-linkedin-in',    label: 'LinkedIn',     value: `in/${SITE.linkedin}`, href: SITE.linkedinUrl },
                  { icon: 'fas fa-phone',          label: 'Phone',        value: SITE.phone,            href: `tel:${SITE.phone}` },
                ].map(c => (
                  <a key={c.label} href={c.href}
                    target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    className="clink"
                  >
                    <span className="clink-icon"><i className={c.icon} /></span>
                    <span className="clink-text">
                      <span className="clink-label">{c.label}</span>
                      <span className="clink-value">{c.value}</span>
                    </span>
                    <span className="clink-arrow">→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* right: form */}
            <div className="contact-form-wrap fade-in">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

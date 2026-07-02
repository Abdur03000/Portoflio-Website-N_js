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
]

/* ── skill group config ── */
const skillGroups = [
  { label: 'Backend',   icon: '⚙️',  cls: 'skill-backend', keys: ['Django','FastAPI','DRF','Flask','Node.js'] },
  { label: 'AI / LLM',  icon: '🧠',  cls: 'skill-ai',      keys: ['LangChain','LangGraph','OpenAI API']       },
  { label: 'Database',  icon: '🗄️', cls: 'skill-db',       keys: ['PostgreSQL','MongoDB','Redis']              },
  { label: 'DevOps',    icon: '🚀',  cls: 'skill-devops',  keys: ['Docker','Git','AWS']                        },
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
                <Link key={p.title} href={p.link} className={`pj-card fade-in stagger-${i + 1}`}>
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
                    {p.status === 'published' ? 'View project →' : 'Coming soon'}
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
                    <span className="sg-emoji">{g.icon}</span>
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
                  { icon: 'fab fa-linkedin-in',    label: 'LinkedIn',     value: `in/${SITE.linkedin}`, href: `https://linkedin.com/in/${SITE.linkedin}` },
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

'use client'
import { useRef } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ScrollReveal from '@/components/ScrollReveal'
import { DEFAULT_PROJECTS, DEFAULT_SKILLS, EXPERIENCE, SITE } from '@/constants'

// Each project gets its own accent color
const projectThemes = [
  { color: '#f59e0b', bg: 'rgba(245,158,11,0.1)',  border: 'rgba(245,158,11,0.2)'  },
  { color: '#818cf8', bg: 'rgba(129,140,248,0.1)', border: 'rgba(129,140,248,0.2)' },
  { color: '#2dd4bf', bg: 'rgba(45,212,191,0.1)',  border: 'rgba(45,212,191,0.2)'  },
]

// Skill categories with color class
const skillGroups = [
  { label: 'Backend',  cls: 'skill-backend', keys: ['Django','FastAPI','DRF','Flask','Node.js'] },
  { label: 'AI / LLM', cls: 'skill-ai',      keys: ['LangChain','LangGraph','OpenAI API']       },
  { label: 'Database', cls: 'skill-db',       keys: ['PostgreSQL','MongoDB','Redis']              },
  { label: 'DevOps',   cls: 'skill-devops',   keys: ['Docker','Git','AWS']                       },
]

function ContactForm() {
  const btnRef = useRef<HTMLButtonElement>(null)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const btn = btnRef.current!
    const orig = btn.innerHTML
    btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Sending…'
    btn.disabled = true
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-check"></i> Sent!'
      setTimeout(() => { btn.innerHTML = orig; btn.disabled = false; (e.target as HTMLFormElement).reset() }, 2000)
    }, 1500)
  }
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div className="form-group"><label>Name</label><input type="text" placeholder="John Doe" required /></div>
        <div className="form-group"><label>Email</label><input type="email" placeholder="john@example.com" required /></div>
      </div>
      <div className="form-group"><label>Message</label><textarea placeholder="Tell me about your project…" required /></div>
      <button ref={btnRef} type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
        Send Message <i className="fas fa-paper-plane" style={{ fontSize: '0.75rem' }} />
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

      {/* ── Projects ──────────────────────────── */}
      <section id="projects" style={{ padding: '7rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="fade-in" style={{ marginBottom: '3.5rem' }}>
            <span className="section-tag">Portfolio</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.6rem' }}>Featured Projects</h2>
            <p style={{ color: 'var(--text-2)', maxWidth: 480, fontSize: '0.95rem' }}>A selection of work built with care and shipped to production.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: '1.25rem' }}>
            {DEFAULT_PROJECTS.map((p, i) => {
              const th = projectThemes[i] ?? projectThemes[0]
              return (
                <Link key={p.title} href={p.link} style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}>
                  <div className={`project-card fade-in stagger-${i + 1}`} style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                    {/* top accent line */}
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, ${th.color}, transparent)`, borderRadius: '14px 14px 0 0' }} />

                    <div style={{ width: 46, height: 46, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', background: th.bg, border: `1px solid ${th.border}`, marginBottom: '1.25rem', fontSize: '1.1rem', color: th.color }}>
                      <i className={p.icon} />
                    </div>

                    <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.6rem', lineHeight: 1.3 }}>{p.title}</h3>
                    <p style={{ color: 'var(--text-2)', fontSize: '0.875rem', lineHeight: 1.7, marginBottom: '1.25rem', flex: 1 }}>{p.description}</p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                      {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: th.color, fontSize: '0.8rem', fontWeight: 600 }}>
                      {p.status === 'published' ? 'View project' : 'Coming soon'}
                      <i className="fas fa-arrow-right" style={{ fontSize: '0.65rem' }} />
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Skills ────────────────────────────── */}
      <section id="skills" style={{ padding: '7rem 2rem', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="fade-in" style={{ marginBottom: '3.5rem' }}>
            <span className="section-tag">Expertise</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.6rem' }}>Skills &amp; Technologies</h2>
            <p style={{ color: 'var(--text-2)', fontSize: '0.95rem' }}>Tools I use every day to build things.</p>
          </div>

          {skillGroups.map((g, gi) => {
            const groupSkills = DEFAULT_SKILLS.filter(s => g.keys.includes(s.name))
            const labelColors: Record<string, string> = { 'Backend': 'var(--indigo)', 'AI / LLM': 'var(--purple)', 'Database': 'var(--teal)', 'DevOps': 'var(--amber)' }
            return (
              <div key={g.label} className={`fade-in stagger-${gi + 1}`} style={{ marginBottom: '2.5rem' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 700, color: labelColors[g.label], textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: 20, height: 2, background: labelColors[g.label], borderRadius: 2, display: 'inline-block' }} />
                  {g.label}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(110px,1fr))', gap: '0.75rem' }}>
                  {groupSkills.map(s => (
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
      </section>

      {/* ── Experience ────────────────────────── */}
      <section id="experience" style={{ padding: '7rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="fade-in" style={{ marginBottom: '3.5rem' }}>
            <span className="section-tag">Journey</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.6rem' }}>Experience</h2>
            <p style={{ color: 'var(--text-2)', fontSize: '0.95rem' }}>My professional journey and milestones.</p>
          </div>

          <div style={{ maxWidth: 700, position: 'relative', paddingLeft: '1.75rem' }}>
            <div style={{ position: 'absolute', left: 0, top: 6, bottom: 6, width: 1, background: 'linear-gradient(180deg,var(--indigo),var(--purple),rgba(255,255,255,0.05))' }} />

            {EXPERIENCE.map((e, i) => (
              <div key={e.title + i} className={`fade-in-left stagger-${i + 1}`} style={{ position: 'relative', paddingBottom: i < EXPERIENCE.length - 1 ? '2rem' : 0 }}>
                <div style={{ position: 'absolute', left: '-1.94rem', top: '0.45rem', width: 9, height: 9, background: e.current ? 'var(--indigo)' : 'var(--text-3)', borderRadius: '50%', border: '2px solid var(--bg)', boxShadow: e.current ? '0 0 10px rgba(129,140,248,0.6)' : 'none' }} />

                <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 12, padding: '1.3rem 1.5rem', transition: 'border-color 0.2s' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.3rem' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>{e.title}</h4>
                    <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                      {e.current && <span style={{ fontSize: '0.67rem', fontWeight: 700, background: 'rgba(74,222,128,0.12)', color: 'var(--green)', padding: '0.12rem 0.55rem', borderRadius: 4 }}>Present</span>}
                      <span style={{ fontSize: '0.73rem', color: 'var(--text-3)', background: 'var(--bg-2)', padding: '0.12rem 0.6rem', borderRadius: 4 }}>{e.period}</span>
                    </div>
                  </div>
                  <div style={{ color: 'var(--indigo)', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.55rem' }}>{e.company}</div>
                  <p style={{ color: 'var(--text-2)', fontSize: '0.85rem', lineHeight: 1.65, marginBottom: e.projects?.length ? '0.85rem' : 0 }}>{e.desc}</p>
                  {e.projects?.length && (
                    <div>
                      <div style={{ fontSize: '0.68rem', fontWeight: 700, color: 'var(--text-3)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>Projects</div>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.28rem' }}>
                        {e.projects.map(p => (
                          <li key={p} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--text-2)', alignItems: 'flex-start' }}>
                            <span style={{ color: 'var(--indigo)', flexShrink: 0, marginTop: '0.22rem' }}>›</span>{p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ───────────────────────────── */}
      <section id="contact" style={{ padding: '7rem 2rem', background: 'var(--bg-2)', position: 'relative', overflow: 'hidden' }}>
        {/* BG glow */}
        <div style={{ position: 'absolute', top: '-20%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(129,140,248,0.05) 0%, transparent 65%)', filter: 'blur(40px)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
          <div className="fade-in" style={{ marginBottom: '3.5rem' }}>
            <span className="section-tag">Contact</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.6rem' }}>Let&apos;s work together</h2>
            <p style={{ color: 'var(--text-2)', maxWidth: 480, fontSize: '0.95rem' }}>Open to freelance, full-time roles, or just a good conversation.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1.5rem', alignItems: 'stretch' }}>
            {/* Info */}
            <div className="fade-in-left" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 14, padding: '2rem', display: 'flex', flexDirection: 'column' }}>
              <p style={{ color: 'var(--text-2)', marginBottom: '1.75rem', lineHeight: 1.75, fontSize: '0.9rem' }}>
                I&apos;m always open to discussing new projects, ideas, or opportunities. Let&apos;s build something great together.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem', flex: 1 }}>
                {[
                  { icon: 'fas fa-envelope',      label: 'Email',    value: SITE.email,              href: `mailto:${SITE.email}`,                  color: 'var(--indigo)' },
                  { icon: 'fas fa-phone',          label: 'Phone',    value: SITE.phone,              href: `tel:${SITE.phone}`,                     color: 'var(--teal)'   },
                  { icon: 'fab fa-github',         label: 'GitHub',   value: `@${SITE.github}`,       href: `https://github.com/${SITE.github}`,      color: 'var(--purple)' },
                  { icon: 'fas fa-map-marker-alt', label: 'Location', value: SITE.location,           href: null,                                    color: 'var(--amber)'  },
                ].map(c => (
                  <div key={c.label} className="contact-item">
                    <div style={{ width: 36, height: 36, borderRadius: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `${c.color}18`, color: c.color, flexShrink: 0, fontSize: '0.88rem' }}>
                      <i className={c.icon} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--text-3)', marginBottom: '0.1rem', fontWeight: 500 }}>{c.label}</div>
                      {c.href
                        ? <a href={c.href} style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>{c.value}</a>
                        : <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>{c.value}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="fade-in-right" style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: 14, padding: '2rem' }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

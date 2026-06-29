'use client'
import { useRef } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ScrollReveal from '@/components/ScrollReveal'
import { DEFAULT_PROJECTS, DEFAULT_SKILLS, EXPERIENCE, SITE } from '@/constants'

const projectAccents = ['#e8a045', '#7c8cf8', '#5cb85c']

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
      setTimeout(() => {
        btn.innerHTML = orig
        btn.disabled = false
        ;(e.target as HTMLFormElement).reset()
      }, 2000)
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

      {/* ── Projects ─────────────────────────────── */}
      <section id="projects" style={{ padding: '7rem 2rem', maxWidth: 1100, margin: '0 auto' }}>
        <div className="fade-in" style={{ marginBottom: '3.5rem' }}>
          <span className="section-tag">Portfolio</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.6rem' }}>
            Featured Projects
          </h2>
          <p style={{ color: 'var(--text-2)', maxWidth: 480, fontSize: '0.95rem' }}>
            A selection of work I&apos;ve built with care and attention to detail.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))', gap: '1.25rem' }}>
          {DEFAULT_PROJECTS.map((p, i) => (
            <Link key={p.title} href={p.link} style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}>
              <div className={`project-card fade-in stagger-${i + 1}`} style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                {/* Icon */}
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'var(--bg-2)', marginBottom: '1.25rem',
                  fontSize: '1.1rem', color: projectAccents[i] ?? 'var(--amber)',
                  border: '1px solid var(--border)',
                }}>
                  <i className={p.icon} />
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.6rem', lineHeight: 1.3 }}>{p.title}</h3>
                <p style={{ color: 'var(--text-2)', fontSize: '0.875rem', lineHeight: 1.65, marginBottom: '1.25rem', flex: 1 }}>{p.description}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                  {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--amber)', fontSize: '0.8rem', fontWeight: 500 }}>
                  {p.status === 'published' ? 'View project' : 'Coming soon'}
                  <i className="fas fa-arrow-right" style={{ fontSize: '0.65rem' }} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Skills ──────────────────────────────── */}
      <section id="skills" style={{ padding: '7rem 2rem', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="fade-in" style={{ marginBottom: '3.5rem' }}>
            <span className="section-tag">Expertise</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.6rem' }}>
              Skills &amp; Technologies
            </h2>
            <p style={{ color: 'var(--text-2)', fontSize: '0.95rem' }}>Tools I use every day to build things.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(120px,1fr))', gap: '0.85rem' }}>
            {DEFAULT_SKILLS.map((s, i) => (
              <div key={s.name + i} className={`skill-item fade-in stagger-${(i % 4) + 1}`}>
                <i className={s.icon} />
                <span style={{ fontSize: '0.8rem', fontWeight: 500, color: 'var(--text-2)' }}>{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Experience ──────────────────────────── */}
      <section id="experience" style={{ padding: '7rem 2rem', maxWidth: 1100, margin: '0 auto' }}>
        <div className="fade-in" style={{ marginBottom: '3.5rem' }}>
          <span className="section-tag">Journey</span>
          <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.6rem' }}>
            Experience
          </h2>
          <p style={{ color: 'var(--text-2)', fontSize: '0.95rem' }}>My professional journey and milestones.</p>
        </div>

        <div style={{ maxWidth: 680, position: 'relative', paddingLeft: '1.75rem' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute', left: 0, top: 4, bottom: 4,
            width: 1, background: 'linear-gradient(180deg, var(--amber) 0%, var(--border) 100%)',
          }} />

          {EXPERIENCE.map((e, i) => (
            <div key={e.title} className={`fade-in-left stagger-${i + 1}`} style={{
              position: 'relative', paddingBottom: i < EXPERIENCE.length - 1 ? '2.5rem' : 0,
            }}>
              {/* Dot */}
              <div style={{
                position: 'absolute', left: '-1.95rem', top: '0.4rem',
                width: 9, height: 9, background: i === 0 ? 'var(--amber)' : 'var(--text-3)',
                borderRadius: '50%', border: '2px solid var(--bg)',
              }} />

              <div style={{
                background: 'var(--bg-card)', border: '1px solid var(--border)',
                borderRadius: 12, padding: '1.25rem 1.5rem',
                transition: 'border-color 0.2s',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '0.35rem' }}>
                  <h4 style={{ fontSize: '1rem', fontWeight: 600 }}>{e.title}</h4>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-3)', background: 'var(--bg-2)', padding: '0.15rem 0.6rem', borderRadius: 4 }}>{e.period}</span>
                </div>
                <div style={{ color: 'var(--amber)', fontSize: '0.82rem', fontWeight: 500, marginBottom: '0.5rem' }}>{e.company}</div>
                <p style={{ color: 'var(--text-2)', fontSize: '0.85rem', lineHeight: 1.65 }}>{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact ─────────────────────────────── */}
      <section id="contact" style={{ padding: '7rem 2rem', background: 'var(--bg-2)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="fade-in" style={{ marginBottom: '3.5rem' }}>
            <span className="section-tag">Contact</span>
            <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.6rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.6rem' }}>
              Let&apos;s work together
            </h2>
            <p style={{ color: 'var(--text-2)', maxWidth: 480, fontSize: '0.95rem' }}>
              Open to freelance, full-time roles, or just a good conversation.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '1.5rem', alignItems: 'stretch' }}>
            {/* Info column */}
            <div className="fade-in-left" style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 12, padding: '2rem',
              display: 'flex', flexDirection: 'column',
            }}>
              <p style={{ color: 'var(--text-2)', marginBottom: '2rem', lineHeight: 1.7, fontSize: '0.9rem' }}>
                I&apos;m always open to discussing new projects, ideas, or opportunities to be part of your vision.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', flex: 1 }}>
                {[
                  { icon: 'fas fa-envelope', label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
                  { icon: 'fas fa-phone', label: 'Phone', value: SITE.phone, href: `tel:${SITE.phone}` },
                  { icon: 'fab fa-github', label: 'GitHub', value: `@${SITE.github}`, href: `https://github.com/${SITE.github}` },
                  { icon: 'fas fa-map-marker-alt', label: 'Location', value: SITE.location, href: null },
                ].map(c => (
                  <div key={c.label} className="contact-item">
                    <div style={{
                      width: 36, height: 36, borderRadius: 8,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'var(--amber-dim)', color: 'var(--amber)', flexShrink: 0, fontSize: '0.9rem',
                    }}>
                      <i className={c.icon} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-3)', marginBottom: '0.1rem' }}>{c.label}</div>
                      {c.href
                        ? <a href={c.href} style={{ color: 'var(--text)', textDecoration: 'none', fontSize: '0.875rem', fontWeight: 500 }}>{c.value}</a>
                        : <div style={{ fontSize: '0.875rem', fontWeight: 500 }}>{c.value}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form column */}
            <div className="fade-in-right" style={{
              background: 'var(--bg-card)', border: '1px solid var(--border)',
              borderRadius: 12, padding: '2rem',
            }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

'use client'
import { useRef } from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CursorGlow from '@/components/CursorGlow'
import Hero from '@/components/Hero'
import ScrollReveal from '@/components/ScrollReveal'
import { DEFAULT_PROJECTS, DEFAULT_SKILLS, EXPERIENCE, SITE } from '@/constants'

const projectColors = [
  { iconBg: 'rgba(253,203,110,0.15)', iconColor: 'var(--accent-4)' },
  { iconBg: 'rgba(0,206,201,0.15)',   iconColor: 'var(--accent-2)' },
  { iconBg: 'rgba(108,92,231,0.15)', iconColor: 'var(--accent-1)' },
]

function ContactForm() {
  const btnRef = useRef<HTMLButtonElement>(null)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const btn = btnRef.current!
    const orig = btn.innerHTML
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
    btn.disabled = true
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-check"></i> Message Sent!'
      btn.style.background = 'linear-gradient(135deg,#00cec9,#00b894)'
      setTimeout(() => { btn.innerHTML = orig; btn.disabled = false; btn.style.background = ''; (e.target as HTMLFormElement).reset() }, 2000)
    }, 1500)
  }
  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {[{ label: 'Your Name', type: 'text', placeholder: 'John Doe' }, { label: 'Your Email', type: 'email', placeholder: 'john@example.com' }].map(f => (
        <div key={f.label} className="form-group"><label>{f.label}</label><input type={f.type} placeholder={f.placeholder} required /></div>
      ))}
      <div className="form-group"><label>Message</label><textarea placeholder="Tell me about your project..." required /></div>
      <button ref={btnRef} type="submit" className="btn btn-primary"><i className="fas fa-paper-plane" /> Send Message</button>
    </form>
  )
}

export default function Home() {
  return (
    <>
      <div className="grain-overlay" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 9999, opacity: 0.03, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }} />
      <CursorGlow />
      <Navbar />
      <ScrollReveal />
      <Hero />

      {/* Projects */}
      <section id="projects" style={{ padding: '6rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
        <div className="section-header fade-in" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-tag">Portfolio</span>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, margin: '0.5rem 0 1rem' }}>Featured Projects</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: 600, margin: '0 auto' }}>A showcase of my recent work and projects I&apos;ve built with passion.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(340px,1fr))', gap: '2rem' }}>
          {DEFAULT_PROJECTS.map((p, i) => (
            <Link key={p.title} href={p.link} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className={`project-card fade-in stagger-${i+1}`}>
                <div style={{ width: 48, height: 48, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.3rem', marginBottom: '1.2rem', background: projectColors[i]?.iconBg, color: projectColors[i]?.iconColor }}>
                  <i className={p.icon} />
                </div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.8rem' }}>{p.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.2rem' }}>{p.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.2rem' }}>
                  {p.tags.map(t => <span key={t} className="project-tag">{t}</span>)}
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  <i className="fas fa-arrow-right" /> {p.status === 'published' ? 'View Project' : 'Coming Soon'}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={{ padding: '6rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-tag">Expertise</span>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, margin: '0.5rem 0 1rem' }}>Skills &amp; Technologies</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Technologies I work with to bring ideas to life.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(140px,1fr))', gap: '1rem' }}>
          {DEFAULT_SKILLS.map((s, i) => (
            <div key={s.name + i} className={`skill-item fade-in stagger-${(i%4)+1}`}>
              <i className={s.icon} />
              <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>{s.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" style={{ padding: '6rem 2rem', maxWidth: 1200, margin: '0 auto' }}>
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-tag">Journey</span>
          <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, margin: '0.5rem 0 1rem' }}>Experience</h2>
          <p style={{ color: 'var(--text-secondary)' }}>My professional journey and milestones.</p>
        </div>
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, background: 'linear-gradient(180deg,var(--accent-1),var(--accent-2),transparent)' }} />
          {EXPERIENCE.map((e, i) => (
            <div key={e.title} className={`fade-in-left stagger-${i+1}`} style={{ position: 'relative', paddingBottom: '2.5rem' }}>
              <div style={{ position: 'absolute', left: '-2.1rem', top: '0.3rem', width: 12, height: 12, background: 'var(--accent-1)', borderRadius: '50%', border: '3px solid var(--bg-primary)', boxShadow: '0 0 20px var(--glow-1)' }} />
              <h4 style={{ fontSize: '1.05rem', marginBottom: '0.3rem' }}>{e.title}</h4>
              <div style={{ color: 'var(--accent-2)', fontSize: '0.85rem', marginBottom: '0.3rem' }}>{e.company}</div>
              <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>{e.period}</div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ padding: '6rem 2rem', background: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div className="fade-in" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="section-tag">Connect</span>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 700, margin: '0.5rem 0 1rem' }}>Get In Touch</h2>
            <p style={{ color: 'var(--text-secondary)' }}>Let&apos;s work together on your next project.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '3rem', alignItems: 'start' }}>
            <div className="fade-in-left">
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Let&apos;s talk about everything!</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  { icon: 'fas fa-envelope', label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
                  { icon: 'fas fa-phone', label: 'Phone', value: SITE.phone, href: `tel:${SITE.phone}` },
                  { icon: 'fab fa-github', label: 'GitHub', value: SITE.github, href: `https://github.com/${SITE.github}` },
                  { icon: 'fas fa-map-marker-alt', label: 'Location', value: SITE.location, href: null },
                ].map(c => (
                  <div key={c.label} className="contact-item">
                    <div style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(108,92,231,0.15)', borderRadius: 10, color: 'var(--accent-1)', flexShrink: 0 }}><i className={c.icon} /></div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{c.label}</div>
                      {c.href ? <a href={c.href} style={{ color: 'var(--text-primary)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>{c.value}</a> : <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>{c.value}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="fade-in-right">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

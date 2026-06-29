'use client'
import { useEffect, useRef } from 'react'

const techStack = ['Django', 'FastAPI', 'LangChain', 'PostgreSQL', 'Docker', 'OpenAI']

export default function Hero() {
  const titleRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    const text = 'Abdur Rahman'
    let i = 0
    el.textContent = ''
    const t = setInterval(() => {
      if (i < text.length) el.textContent += text[i++]
      else clearInterval(t)
    }, 75)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center',
      textAlign: 'center', padding: '6rem 2rem 5rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Mesh gradient bg */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '20%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(129,140,248,0.08) 0%, transparent 65%)', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', top: '30%', right: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(45,212,191,0.06) 0%, transparent 65%)', filter: 'blur(40px)' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '10%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 65%)', filter: 'blur(40px)' }} />
      </div>

      {/* Available badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
        padding: '0.4rem 1.1rem',
        background: 'rgba(74,222,128,0.08)', border: '1px solid rgba(74,222,128,0.2)',
        borderRadius: 50, fontSize: '0.78rem', fontWeight: 600, color: '#4ade80',
        marginBottom: '2rem', animation: 'fadeUp 0.6s ease both', letterSpacing: '0.02em',
      }}>
        <span style={{ width: 7, height: 7, background: '#4ade80', borderRadius: '50%', animation: 'breathe 2.5s ease-in-out infinite', display: 'inline-block' }} />
        Available for new projects
      </div>

      {/* Name */}
      <h1 style={{
        fontSize: 'clamp(2.8rem,9vw,6rem)', fontWeight: 800,
        lineHeight: 1.05, marginBottom: '1rem', letterSpacing: '-0.03em',
        animation: 'fadeUp 0.6s ease 0.1s both',
      }}>
        Hi, I&apos;m{' '}
        <span ref={titleRef} className="gradient-text" />
        <span style={{
          display: 'inline-block', width: 4, height: '0.8em',
          background: 'var(--indigo)', marginLeft: 4, verticalAlign: 'text-bottom',
          animation: 'blink 1.1s step-end infinite', borderRadius: 2,
        }} />
      </h1>

      {/* Role */}
      <p style={{
        fontSize: 'clamp(1rem,2.5vw,1.2rem)', fontWeight: 500,
        marginBottom: '0.75rem', animation: 'fadeUp 0.6s ease 0.18s both',
        background: 'linear-gradient(90deg, var(--indigo), var(--purple))',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
      }}>
        Backend Developer &amp; AI Engineer
      </p>

      {/* Tagline */}
      <p style={{
        fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'var(--text-2)',
        maxWidth: 500, marginBottom: '2.5rem', lineHeight: 1.75,
        animation: 'fadeUp 0.6s ease 0.24s both',
      }}>
        Building intelligent backends that power real products —
        from scalable REST APIs to multi-agent AI systems.
      </p>

      {/* CTAs */}
      <div style={{
        display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center',
        marginBottom: '3rem', animation: 'fadeUp 0.6s ease 0.32s both',
      }}>
        <a href="#projects" className="btn btn-primary">
          View Projects <i className="fas fa-arrow-right" style={{ fontSize: '0.75rem' }} />
        </a>
        <a href="#contact" className="btn btn-secondary">Get in touch</a>
        <a href="https://github.com/Abdur03000" target="_blank" rel="noreferrer" className="btn btn-glow">
          <i className="fab fa-github" /> GitHub
        </a>
      </div>

      {/* Tech stack pills */}
      <div style={{ animation: 'fadeUp 0.6s ease 0.42s both' }}>
        <div style={{ fontSize: '0.7rem', color: 'var(--text-3)', marginBottom: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Tech I work with</div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {techStack.map((t, i) => {
            const colors = ['var(--indigo)', 'var(--teal)', 'var(--purple)', 'var(--teal)', 'var(--amber)', 'var(--rose)']
            return (
              <span key={t} style={{
                padding: '0.3rem 0.8rem',
                background: 'var(--bg-card)', border: `1px solid ${colors[i]}33`,
                borderRadius: 6, fontSize: '0.75rem', color: colors[i], fontWeight: 500,
              }}>{t}</span>
            )
          })}
        </div>
      </div>
    </section>
  )
}

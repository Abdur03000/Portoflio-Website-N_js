'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const titleRef = useRef<HTMLSpanElement>(null)
  const cursorRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = titleRef.current
    const cursor = cursorRef.current
    if (!el || !cursor) return

    const text = 'Abdur Rahman'
    let i = 0
    el.textContent = ''

    const t = setInterval(() => {
      if (i < text.length) {
        el.textContent += text[i++]
      } else {
        clearInterval(t)
        // Keep blinking cursor after done
      }
    }, 75)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center',
      textAlign: 'center', padding: '6rem 2rem 4rem',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Subtle radial bg */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 70% 50% at 50% 40%, rgba(232,160,69,0.04) 0%, transparent 70%)',
      }} />

      {/* Status badge */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
        padding: '0.4rem 1rem',
        background: 'rgba(232,160,69,0.08)', border: '1px solid rgba(232,160,69,0.2)',
        borderRadius: 50, fontSize: '0.78rem', fontWeight: 500, color: '#e8a045',
        marginBottom: '2.5rem',
        animation: 'fadeUp 0.6s ease both',
      }}>
        <span style={{
          width: 7, height: 7, background: '#5cb85c', borderRadius: '50%',
          animation: 'breathe 2.5s ease-in-out infinite',
          display: 'inline-block', flexShrink: 0,
        }} />
        Available for new projects
      </div>

      {/* Heading */}
      <h1 style={{
        fontSize: 'clamp(2.6rem,8vw,5.5rem)', fontWeight: 700,
        lineHeight: 1.1, marginBottom: '1.2rem', letterSpacing: '-0.02em',
        animation: 'fadeUp 0.6s ease 0.1s both',
      }}>
        Hi, I&apos;m{' '}
        <span ref={titleRef} className="gradient-text" />
        <span ref={cursorRef} style={{
          display: 'inline-block', width: 3, height: '0.85em',
          background: '#e8a045', marginLeft: 3, verticalAlign: 'baseline',
          animation: 'blink 1.1s step-end infinite',
          borderRadius: 2,
        }} />
      </h1>

      {/* Role */}
      <p style={{
        fontSize: 'clamp(1rem,2.5vw,1.15rem)', color: 'var(--text-2)',
        marginBottom: '1rem', fontWeight: 500,
        animation: 'fadeUp 0.6s ease 0.2s both',
      }}>
        Backend Developer &amp; AI Engineer
      </p>

      {/* Tagline */}
      <p style={{
        fontSize: 'clamp(0.875rem,1.5vw,1rem)', color: 'var(--text-3)',
        maxWidth: 520, marginBottom: '2.8rem',
        animation: 'fadeUp 0.6s ease 0.28s both', lineHeight: 1.7,
      }}>
        Django · FastAPI · DRF · Flask · Node.js · LLM Agentic AI.
        Building intelligent backends that power real products.
      </p>

      {/* CTAs */}
      <div style={{
        display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center',
        animation: 'fadeUp 0.6s ease 0.36s both',
      }}>
        <a href="#projects" className="btn btn-primary">
          View Projects <i className="fas fa-arrow-right" style={{ fontSize: '0.75rem' }} />
        </a>
        <a href="#contact" className="btn btn-secondary">
          Get in touch
        </a>
        <a href="https://github.com/Abdur03000" target="_blank" rel="noreferrer" className="btn btn-glow">
          <i className="fab fa-github" /> GitHub
        </a>
      </div>


    </section>
  )
}

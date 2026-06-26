'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const titleRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    // Particles
    const container = document.querySelector('.hero-particles') as HTMLElement
    if (container) {
      for (let i = 0; i < 50; i++) {
        const p = document.createElement('div')
        p.style.cssText = `position:absolute;border-radius:50%;opacity:0.3;animation:float-particle linear infinite;
          left:${Math.random()*100}%;
          animation-duration:${15+Math.random()*25}s;
          animation-delay:${Math.random()*20}s;
          width:${2+Math.random()*4}px;height:${2+Math.random()*4}px;
          background:${['var(--accent-1)','var(--accent-2)','var(--accent-3)','var(--accent-4)'][Math.floor(Math.random()*4)]}`
        container.appendChild(p)
      }
    }
    // Typewriter
    const el = titleRef.current
    if (!el) return
    const text = 'Abdur Rahman'
    let i = 0
    el.textContent = ''
    const t = setInterval(() => {
      if (i < text.length) { el.textContent += text[i++] } else clearInterval(t)
    }, 60)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center', textAlign: 'center',
      padding: '2rem', position: 'relative', overflow: 'hidden',
    }}>
      <div className="hero-particles" style={{ position: 'absolute', inset: 0, overflow: 'hidden' }} />

      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
        padding: '0.5rem 1.2rem',
        background: 'rgba(108,92,231,0.1)', border: '1px solid rgba(108,92,231,0.3)',
        borderRadius: 50, fontSize: '0.8rem', color: 'var(--accent-1)',
        marginBottom: '2rem', animation: 'fadeInUp 0.8s ease',
      }}>
        <span style={{ width: 6, height: 6, background: 'var(--accent-2)', borderRadius: '50%', animation: 'pulse-dot 2s infinite', display: 'inline-block' }} />
        Backend Developer &amp; AI Engineer
      </div>

      <h1 style={{ fontSize: 'clamp(2.8rem,8vw,6rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem', animation: 'fadeInUp 0.8s ease 0.1s both' }}>
        Hi, I&apos;m <span ref={titleRef} className="gradient-text" />
      </h1>

      <p style={{ fontSize: 'clamp(1rem,2vw,1.3rem)', color: 'var(--text-secondary)', maxWidth: 600, marginBottom: '2.5rem', animation: 'fadeInUp 0.8s ease 0.2s both' }}>
        Django · FastAPI · DRF · Flask · Node.js · LLM Agentic AI. Building intelligent backends that power real products.
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', animation: 'fadeInUp 0.8s ease 0.3s both' }}>
        <a href="#projects" className="btn btn-primary"><i className="fas fa-rocket" /> View Projects</a>
        <a href="#contact" className="btn btn-secondary"><i className="fas fa-envelope" /> Contact</a>
        <a href="https://github.com/Abdur0300" target="_blank" rel="noreferrer" className="btn btn-glow"><i className="fab fa-github" /> GitHub</a>
      </div>

      <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.75rem', animation: 'fadeInUp 0.8s ease 0.5s both' }}>
        <div style={{ width: 24, height: 40, border: '2px solid var(--text-secondary)', borderRadius: 12, position: 'relative' }}>
          <div style={{ position: 'absolute', top: 6, left: '50%', width: 4, height: 8, background: 'var(--accent-2)', borderRadius: 2, animation: 'scroll-bounce 2s infinite' }} />
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  )
}

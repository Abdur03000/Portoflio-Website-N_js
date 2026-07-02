'use client'
import { useEffect, useRef, useState } from 'react'

const stack = [
  { label: 'Django',     color: '#e06c4f' },
  { label: 'FastAPI',    color: '#4fa3a8' },
  { label: 'LangChain',  color: '#c49a3c' },
  { label: 'PostgreSQL', color: '#5a8fd4' },
  { label: 'Docker',     color: '#4a90d9' },
  { label: 'OpenAI',     color: '#8f6bbf' },
]

const stats = [
  { value: '2+',  label: 'Years' },
  { value: '10+', label: 'Projects' },
  { value: '3',   label: 'AI systems' },
]

/*
  ┌─────────────────────────────────────────────────────┐
  │  HOW TO ADD YOUR PHOTO                              │
  │                                                     │
  │  1. Copy your photo into:                           │
  │     portfolio-next/public/images/profile.jpg        │
  │                                                     │
  │  2. Change PROFILE_IMAGE_PATH below if you          │
  │     used a different filename, e.g. "me.png"        │
  └─────────────────────────────────────────────────────┘
*/
const PROFILE_IMAGE_PATH = '/images/profile.jpeg'

export default function Hero() {
  const cursorRef = useRef<HTMLSpanElement>(null)
  const [imgOk, setImgOk] = useState(true)

  // typewriter
  useEffect(() => {
    const el = cursorRef.current
    if (!el) return
    const words = ['Abdur Rahman']
    const full = words[0]
    let i = 0
    el.textContent = ''
    const t = setInterval(() => {
      if (i < full.length) { el.textContent += full[i++] }
      else clearInterval(t)
    }, 80)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="home" className="hero-section">

      {/* background noise texture */}
      <div className="hero-noise" aria-hidden />

      {/* warm ambient glows */}
      <div className="hero-glow glow-a" aria-hidden />
      <div className="hero-glow glow-b" aria-hidden />

      <div className="hero-inner">

        {/* ── LEFT ── */}
        <div className="hero-left">

          <span className="avail-pill">
            <span className="avail-dot" />
            Open to work
          </span>

          <h1 className="hero-h1">
            Hi, I&apos;m{' '}
            <span className="name-text">
              <span ref={cursorRef} />
              <span className="type-cursor" />
            </span>
          </h1>

          <p className="hero-sub">Backend Developer &amp; AI Engineer</p>

          <p className="hero-desc">
            I build the backends nobody sees — scalable REST APIs, Django/FastAPI
            services, and multi-agent AI systems that actually ship.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn-main">
              See my work <span className="btn-arrow">→</span>
            </a>
            <a href="#contact" className="btn-ghost">Let&apos;s talk</a>
          </div>

          <div className="hero-stack">
            <span className="stack-lbl">Stack</span>
            <div className="stack-row">
              {stack.map(s => (
                <span
                  key={s.label}
                  className="stack-chip"
                  style={{ '--c': s.color } as React.CSSProperties}
                >
                  {s.label}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* ── RIGHT: profile card ── */}
        <div className="hero-right">
          <div className="pcard">

            {/* photo */}
            <div className="pcard-photo-wrap">
              <div className="pcard-photo-bg" />

              {imgOk ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={PROFILE_IMAGE_PATH}
                  alt="Abdur Rahman"
                  className="pcard-photo"
                  onError={() => setImgOk(false)}
                />
              ) : (
                <div className="pcard-initials">AR</div>
              )}

              <span className="pcard-dot" />
            </div>

            {/* name / role */}
            <div className="pcard-id">
              <h2 className="pcard-name">Abdur Rahman</h2>
              <p className="pcard-role">Backend · AI Engineer</p>
              <p className="pcard-loc">
                <svg width="11" height="13" viewBox="0 0 11 13" fill="none" aria-hidden>
                  <path d="M5.5 0C3.015 0 1 2.015 1 4.5c0 3.375 4.5 8.5 4.5 8.5S10 7.875 10 4.5C10 2.015 7.985 0 5.5 0z" fill="currentColor" opacity=".5"/>
                </svg>
                Islamabad, Pakistan
              </p>
            </div>

            {/* stats */}
            <div className="pcard-stats">
              {stats.map(s => (
                <div key={s.label} className="pstat">
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>

            {/* bio */}
            <p className="pcard-bio">
              Specializing in Django, FastAPI and LLM-powered systems.
              I write clean code and ship things that work.
            </p>

            {/* socials */}
            <div className="pcard-socials">
              <a href="https://github.com/Abdur03000" target="_blank" rel="noreferrer" className="psoc" title="GitHub">
                <i className="fab fa-github" />
              </a>
              <a href="https://linkedin.com/in/abdur0300" target="_blank" rel="noreferrer" className="psoc" title="LinkedIn">
                <i className="fab fa-linkedin-in" />
              </a>
              <a href="mailto:abdurrahmanios710@gmail.com" className="psoc" title="Email">
                <i className="fas fa-envelope" />
              </a>
            </div>

            <a href="#contact" className="pcard-cta">
              Hire Me →
            </a>

          </div>
        </div>

      </div>
    </section>
  )
}

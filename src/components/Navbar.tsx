'use client'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [open, setOpen]           = useState(false)
  const [active, setActive]       = useState('home')
  const [dark, setDark]           = useState(true)   // default dark

  // read persisted theme on mount
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    const isDark = saved ? saved === 'dark' : true
    setDark(isDark)
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light')
  }, [])

  // scroll spy
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = ['home', 'projects', 'skills', 'experience', 'contact']
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function toggleTheme() {
    const next = !dark
    setDark(next)
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light')
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  const links = ['home', 'projects', 'skills', 'experience', 'contact']

  const navBg = scrolled
    ? dark ? 'rgba(13,12,11,0.95)' : 'rgba(245,240,232,0.95)'
    : 'transparent'

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        height: 'var(--nav-height)', zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 clamp(1rem,4vw,2.5rem)',
        background: navBg,
        backdropFilter: scrolled ? 'blur(18px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'background 0.3s, border-color 0.3s',
      }}>

        {/* Logo */}
        <a href="#home" style={{
          fontSize: '1.15rem', fontWeight: 800, letterSpacing: '-0.03em',
          color: 'var(--text)', textDecoration: 'none',
        }}>
          AR<span style={{ color: 'var(--accent)' }}>.</span>
        </a>

        {/* Desktop nav links */}
        <ul style={{ display: 'flex', gap: '0.25rem', listStyle: 'none', alignItems: 'center' }} className="nav-links">
          {links.map(l => (
            <li key={l}>
              <a
                href={`#${l}`}
                style={{
                  padding: '0.4rem 0.75rem', borderRadius: 6,
                  color: active === l ? 'var(--text)' : 'var(--text-2)',
                  textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500,
                  background: active === l ? 'var(--bg-card)' : 'transparent',
                  transition: 'color 0.2s, background 0.2s',
                  display: 'block',
                }}
                onMouseEnter={e => { if (active !== l) (e.currentTarget as HTMLElement).style.color = 'var(--text)' }}
                onMouseLeave={e => { if (active !== l) (e.currentTarget as HTMLElement).style.color = 'var(--text-2)' }}
              >
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Right side: theme toggle + CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <button
            onClick={toggleTheme}
            className="theme-toggle nav-links"
            aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={dark ? 'Light mode' : 'Dark mode'}
          >
            {dark ? '☀️' : '🌙'}
          </button>

          <a href="#contact" className="btn btn-primary btn-sm nav-cta" style={{ fontWeight: 600 }}>
            Hire me
          </a>
        </div>

        {/* Mobile right side */}
        <div className="nav-mobile-right" style={{ display: 'none', alignItems: 'center', gap: '0.5rem' }}>
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
            style={{ width: 34, height: 34, fontSize: '0.9rem' }}
          >
            {dark ? '☀️' : '🌙'}
          </button>
          <button onClick={() => setOpen(!open)} style={{
            background: 'none', border: 'none',
            color: 'var(--text)', fontSize: '1.2rem', cursor: 'pointer', padding: '0.4rem',
          }}>
            <i className={`fas ${open ? 'fa-times' : 'fa-bars'}`} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          position: 'fixed', top: 'var(--nav-height)', left: 0, right: 0,
          background: dark ? 'rgba(13,12,11,0.98)' : 'rgba(245,240,232,0.98)',
          backdropFilter: 'blur(18px)',
          borderBottom: '1px solid var(--border)', zIndex: 999,
          padding: '1.5rem 1.5rem 2rem', animation: 'fadeUp 0.2s ease',
        }}>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {links.map(l => (
              <li key={l}>
                <a
                  href={`#${l}`} onClick={() => setOpen(false)}
                  style={{
                    display: 'block', padding: '0.7rem 0.9rem', borderRadius: 8,
                    color: active === l ? 'var(--text)' : 'var(--text-2)',
                    background: active === l ? 'var(--bg-card)' : 'transparent',
                    textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500,
                  }}
                >
                  {l.charAt(0).toUpperCase() + l.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-links  { display: none !important; }
          .nav-cta    { display: none !important; }
          .nav-mobile-right { display: flex !important; }
        }
      `}</style>
    </>
  )
}

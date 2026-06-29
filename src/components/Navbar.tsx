'use client'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = ['home', 'projects', 'skills', 'experience', 'contact']
      for (const id of sections.reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['home', 'projects', 'skills', 'experience', 'contact']

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        height: 'var(--nav-height)', zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 clamp(1rem,4vw,2.5rem)',
        background: scrolled ? 'rgba(15,15,15,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
      }}>
        {/* Logo */}
        <a href="#home" style={{
          fontSize: '1.15rem', fontWeight: 800, letterSpacing: '-0.03em',
          color: 'var(--text)', textDecoration: 'none',
        }}>
          ar<span style={{ color: 'var(--indigo)' }}>.</span>
        </a>

        {/* Desktop links */}
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
                onMouseEnter={e => { if (active !== l) e.currentTarget.style.color = 'var(--text)' }}
                onMouseLeave={e => { if (active !== l) e.currentTarget.style.color = 'var(--text-2)' }}
              >
                {l.charAt(0).toUpperCase() + l.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a href="#contact" className="btn btn-primary btn-sm nav-cta" style={{ fontWeight: 600 }}>
          Hire me
        </a>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="nav-toggle" style={{
          display: 'none', background: 'none', border: 'none',
          color: 'var(--text)', fontSize: '1.2rem', cursor: 'pointer', padding: '0.4rem',
        }}>
          <i className={`fas ${open ? 'fa-times' : 'fa-bars'}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          position: 'fixed', top: 'var(--nav-height)', left: 0, right: 0,
          background: 'rgba(15,15,15,0.98)', backdropFilter: 'blur(16px)',
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
          .nav-links { display: none !important; }
          .nav-cta   { display: none !important; }
          .nav-toggle { display: block !important; }
        }
      `}</style>
    </>
  )
}

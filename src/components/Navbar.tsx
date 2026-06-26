'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['home', 'projects', 'skills', 'experience', 'contact']

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0,
      height: 'var(--nav-height)', zIndex: 1000,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 2rem',
      background: scrolled ? 'rgba(10,10,15,0.95)' : 'rgba(10,10,15,0.8)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid var(--border-color)',
      boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.3)' : 'none',
      transition: 'all 0.3s',
    }}>
      <div style={{
        fontSize: '1.3rem', fontWeight: 700,
        background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
      }}>AR<span style={{ color: 'var(--accent-2)' }}>.</span></div>

      <ul style={{
        display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center',
        ...(open ? {
          position: 'fixed', top: 'var(--nav-height)', left: 0, right: 0,
          flexDirection: 'column', padding: '2rem',
          background: 'rgba(10,10,15,0.98)',
          borderBottom: '1px solid var(--border-color)', gap: '1.5rem',
        } : {}),
      } as React.CSSProperties}>
        {links.map(l => (
          <li key={l}>
            <a href={`#${l}`} onClick={() => setOpen(false)} style={{
              color: 'var(--text-secondary)', textDecoration: 'none',
              fontSize: '0.85rem', fontWeight: 500, transition: 'color 0.3s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >{l.charAt(0).toUpperCase() + l.slice(1)}</a>
          </li>
        ))}
      </ul>

      <button onClick={() => setOpen(!open)} style={{
        display: 'none', background: 'none', border: 'none',
        color: 'var(--text-primary)', fontSize: '1.4rem', cursor: 'pointer',
      }} className="nav-toggle">
        <i className={`fas ${open ? 'fa-times' : 'fa-bars'}`} />
      </button>

      <style>{`@media(max-width:768px){.nav-toggle{display:block!important}}`}</style>
    </nav>
  )
}

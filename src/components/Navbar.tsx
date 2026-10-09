'use client'
import { useEffect, useState } from 'react'
import { SITE } from '@/constants'

const LINKS = [
  { href: '#about', label: 'About', icon: 'fa-solid fa-user', sub: 'Know more about me' },
  { href: '#experience', label: 'Experience', icon: 'fa-solid fa-briefcase', sub: 'My professional journey' },
  { href: '#projects', label: 'Projects', icon: 'fa-solid fa-rocket', sub: 'Explore my work' },
  { href: '#skills', label: 'Skills', icon: 'fa-solid fa-bolt', sub: 'What I bring to the table' },
  { href: '#contact', label: 'Contact', icon: 'fa-solid fa-envelope', sub: 'Get in touch' },
]

const RESUME = '/Abdur_Rahman.pdf'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      if (window.innerWidth <= 992 && open) setOpen(false)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  return (
    <>
      <nav id="nav" className={`site-nav${scrolled ? ' scrolled' : ''}`}>
        <a href="#hero" className="nav-logo">
          <span className="nav-logo-text">AR.</span>
        </a>

        <ul className="nav-links">
          {LINKS.map(l => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a href={RESUME} target="_blank" rel="noreferrer" className="nav-cta">Resume</a>

        <div
          className={`hamburger${open ? ' open' : ''}`}
          role="button"
          aria-label="Toggle menu"
          tabIndex={0}
          onClick={() => setOpen(!open)}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(!open) } }}
        >
          <span />
          <span />
          <span />
        </div>
      </nav>

      <div
        className={`mobile-menu${open ? ' open' : ''}`}
        onClick={e => { if (e.target === e.currentTarget) setOpen(false) }}
      >
        <div className="mobile-menu-header">
          <div className="name">{SITE.name}</div>
          <div className="tagline">{SITE.title}</div>
        </div>

        <div className="mobile-menu-items">
          {LINKS.map(l => (
            <a key={l.href} href={l.href} className="mobile-menu-item" onClick={() => setOpen(false)}>
              <div className="mm-icon"><i className={l.icon} /></div>
              <div className="mm-text">
                <div className="mm-title">{l.label}</div>
                <div className="mm-sub">{l.sub}</div>
              </div>
              <div className="mm-arrow"><i className="fa-solid fa-chevron-right" /></div>
            </a>
          ))}
        </div>

        <div className="mobile-menu-footer">
          <div className="social-icons">
            <a href={`https://github.com/${SITE.github}`} target="_blank" rel="noreferrer" aria-label="GitHub"><i className="fab fa-github" /></a>
            <a href={SITE.linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin" /></a>
            <a href={`mailto:${SITE.email}`} aria-label="Email"><i className="fa-solid fa-envelope" /></a>
            <a href={RESUME} target="_blank" rel="noreferrer" aria-label="Resume"><i className="fa-solid fa-file-pdf" /></a>
          </div>
        </div>
      </div>
    </>
  )
}

import { SITE } from '@/constants'

export default function Footer() {
  const socials = [
    { href: `https://github.com/${SITE.github}`,    icon: 'fab fa-github',      title: 'GitHub'   },
    { href: `mailto:${SITE.email}`,                  icon: 'fas fa-envelope',    title: 'Email'    },
    { href: `https://linkedin.com/in/${SITE.linkedin}`, icon: 'fab fa-linkedin', title: 'LinkedIn' },
  ]

  return (
    <footer style={{
      padding: '2.5rem 2rem',
      borderTop: '1px solid var(--border)',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '1rem',
      }}>
        <span style={{ color: 'var(--text-3)', fontSize: '0.82rem' }}>
          © 2026 {SITE.name}. Built with care.
        </span>

        <div style={{ display: 'flex', gap: '0.25rem' }}>
          {socials.map(s => (
            <a
              key={s.title} href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer" title={s.title}
              style={{
                width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--text-3)', borderRadius: 8, border: '1px solid transparent',
                transition: 'color 0.2s, background 0.2s, border-color 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--text)'
                e.currentTarget.style.background = 'var(--bg-card)'
                e.currentTarget.style.borderColor = 'var(--border)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-3)'
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.borderColor = 'transparent'
              }}
            >
              <i className={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

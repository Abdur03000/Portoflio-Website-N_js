import { SITE } from '@/constants'

export default function Footer() {
  return (
    <footer style={{
      padding: '2rem', textAlign: 'center',
      borderTop: '1px solid var(--border-color)',
      color: 'var(--text-secondary)', fontSize: '0.85rem',
    }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem' }}>
        {[
          { href: `https://github.com/${SITE.github}`, icon: 'fab fa-github', title: 'GitHub' },
          { href: `mailto:${SITE.email}`, icon: 'fas fa-envelope', title: 'Email' },
          { href: `https://linkedin.com/in/${SITE.linkedin}`, icon: 'fab fa-linkedin-in', title: 'LinkedIn' },
        ].map(s => (
          <a key={s.title} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined}
            rel="noreferrer" title={s.title}
            style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', transition: 'all 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-1)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.transform = '' }}>
            <i className={s.icon} />
          </a>
        ))}
      </div>
      <p>&copy; 2026 {SITE.name}. Crafted with <span style={{ color: 'var(--accent-3)' }}>♥</span></p>
    </footer>
  )
}

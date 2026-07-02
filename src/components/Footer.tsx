import { SITE } from '@/constants'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-inner">

        {/* left */}
        <div className="footer-left">
          <a href="#home" className="footer-logo">
            AR<span>.</span>
          </a>
          <p className="footer-copy">
            Designed &amp; built by {SITE.name}.<br />
            <span>Islamabad, Pakistan · {year}</span>
          </p>
        </div>

        {/* center: nav */}
        <nav className="footer-nav" aria-label="Footer navigation">
          {['home', 'projects', 'skills', 'experience', 'contact'].map(l => (
            <a key={l} href={`#${l}`} className="footer-nav-link">
              {l.charAt(0).toUpperCase() + l.slice(1)}
            </a>
          ))}
        </nav>

        {/* right: socials */}
        <div className="footer-socials">
          <a href={`https://github.com/${SITE.github}`} target="_blank" rel="noreferrer" className="footer-soc" title="GitHub">
            <i className="fab fa-github" />
          </a>
          <a href={`https://linkedin.com/in/${SITE.linkedin}`} target="_blank" rel="noreferrer" className="footer-soc" title="LinkedIn">
            <i className="fab fa-linkedin-in" />
          </a>
          <a href={`mailto:${SITE.email}`} className="footer-soc" title="Email">
            <i className="fas fa-envelope" />
          </a>
        </div>

      </div>

      {/* bottom strip */}
      <div className="footer-bottom">
        <span>Made with coffee &amp; late nights ☕</span>
        <span>Open to opportunities</span>
      </div>
    </footer>
  )
}

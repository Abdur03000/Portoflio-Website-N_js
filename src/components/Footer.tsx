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

        {/* right: socials */}
        <div className="footer-socials">
          <a href={`https://github.com/${SITE.github}`} target="_blank" rel="noreferrer" className="footer-soc" title="GitHub">
            <i className="fab fa-github" />
          </a>
          <a href={SITE.linkedinUrl} target="_blank" rel="noreferrer" className="footer-soc" title="LinkedIn">
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

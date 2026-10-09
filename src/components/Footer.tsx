import { SITE } from '@/constants'

const RESUME = '/Abdur_Rahman.pdf'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="f-logo">{SITE.name}</div>
      <div className="f-copy">© {year} {SITE.name} · All rights reserved</div>
      <div className="f-socials">
        <a href={`mailto:${SITE.email}`} title="Email"><i className="fa-solid fa-envelope" /></a>
        <a href={`https://github.com/${SITE.github}`} target="_blank" rel="noreferrer" title="GitHub"><i className="fab fa-github" /></a>
        <a href={SITE.linkedinUrl} target="_blank" rel="noreferrer" title="LinkedIn"><i className="fab fa-linkedin" /></a>
        <a href={RESUME} target="_blank" rel="noreferrer" title="Resume"><i className="fa-solid fa-file-pdf" /></a>
      </div>
    </footer>
  )
}

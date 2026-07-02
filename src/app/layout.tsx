import type { Metadata } from 'next'
import { SITE } from '@/constants'
import './globals.css'

export const metadata: Metadata = {
  title: `${SITE.name} | Portfolio`,
  description: `${SITE.title} — ${SITE.bio}`,
}

// This script runs before React hydrates — prevents white flash on reload
const themeScript = `
  (function() {
    try {
      var t = localStorage.getItem('theme');
      document.documentElement.setAttribute('data-theme', t === 'light' ? 'light' : 'dark');
    } catch(e) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  })();
`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        {/* Inject theme before page paint — no flash */}
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import { SITE } from '@/constants'
import './globals.css'

export const metadata: Metadata = {
  title: `${SITE.name} | Portfolio`,
  description: `${SITE.title} — ${SITE.bio}`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='18' fill='%23e8a045'/><text x='50' y='68' font-size='52' font-family='Inter,sans-serif' font-weight='700' text-anchor='middle' fill='%230f0f0f'>ar</text></svg>" />
      </head>
      <body style={{ background: '#0f0f0f', color: '#f0ece4' }}>{children}</body>
    </html>
  )
}

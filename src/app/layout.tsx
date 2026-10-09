import type { Metadata } from 'next'
import { SITE } from '@/constants'
import './globals.css'

export const metadata: Metadata = {
  title: `${SITE.name} — Backend & AI Engineer`,
  description: `${SITE.title} — ${SITE.bio}`,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}

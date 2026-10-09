import type { Metadata } from 'next'
import { SITE } from '@/constants'
import './globals.css'

const SITE_URL = 'https://portoflio-website-n-js-abdur03000s-projects.vercel.app'
const TITLE = `${SITE.name} — Backend & AI Engineer`
const DESCRIPTION = `${SITE.title} — ${SITE.bio}`

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: SITE.name, url: SITE_URL }],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: SITE.name,
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: `${SITE.name} — Backend Developer & AI Engineer`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og.png'],
  },
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

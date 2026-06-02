import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/nav'
import { Footer } from '@/components/footer'
import { themeCss } from '@the-purposeful-design/themes'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'The Purposeful Design',
    template: '%s — The Purposeful Design',
  },
  description:
    'A design philosophy and component ecosystem for building interfaces that communicate, not decorate. Every element must justify its existence.',
  keywords: [
    'design system',
    'purposeful design',
    'minimal ui',
    'design philosophy',
    'intentional design',
    'ui components',
  ],
  authors: [{ name: 'The Purposeful Design' }],
  creator: 'The Purposeful Design',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://purposefuldesign.dev',
    siteName: 'The Purposeful Design',
    title: 'The Purposeful Design',
    description: 'Build interfaces that communicate, not decorate.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Purposeful Design',
    description: 'Build interfaces that communicate, not decorate.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: themeCss }} />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <Nav />
        <main className="page-enter">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

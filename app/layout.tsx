import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/theme.css'
import './globals.css'
import { Providers } from './providers'
import { PageTransition } from '@/components/layout/PageTransition'
import { SiteNav } from '@/components/layout/SiteNav'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Praava Legal',
  description: 'Built for modern legal work.',
  icons: {
    icon: '/icon.svg'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="font-sans antialiased">
        <Providers>
          <SiteNav />
          <PageTransition>{children}</PageTransition>
        </Providers>
      </body>
    </html>
  )
}

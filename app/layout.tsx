import type { Metadata, Viewport } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({ 
  subsets: ["latin"],
  variable: '--font-fraunces',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'TapLink | Smart NFC Business Cards for Modern Professionals',
  description: 'Transform your networking with TapLink smart NFC business cards. Share your contact info, digital profile, and personal website with a single tap. The future of business cards is here.',
  keywords: ['NFC business card', 'digital business card', 'smart card', 'networking', 'QR code', 'contact sharing'],
  openGraph: {
    title: 'TapLink | Smart NFC Business Cards',
    description: 'Share your contact info with a single tap. The future of business cards.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#001033',
  width: 'device-width',
  initialScale: 1,
}

import { CustomCursor } from '@/components/ui/custom-cursor'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased bg-ghost-canvas text-midnight-navy">
        <CustomCursor />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

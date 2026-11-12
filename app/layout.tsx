import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Muhammad Farooq | Agentic AI Developer & CS Student',
    template: '%s | Muhammad Farooq',
  },
  description:
    'Muhammad Farooq is a Computer Science student at Air University and Agentic AI Developer at IRAB Technologies, building intelligent applications with Generative AI, Agentic AI, and modern web technologies.',
  keywords: [
    'Muhammad Farooq',
    'Agentic AI Developer',
    'Generative AI',
    'AI Engineer',
    'Computer Science',
    'Air University',
    'IRAB Technologies',
    'React',
    'Next.js',
    'Python',
    'LangChain',
    'LangGraph',
  ],
  authors: [{ name: 'Muhammad Farooq', url: 'https://github.com/Farooq-21' }],
  creator: 'Muhammad Farooq',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'Muhammad Farooq | Agentic AI Developer & CS Student',
    description:
      'Muhammad Farooq is a Computer Science student and Agentic AI Developer building intelligent applications with Generative AI and Agentic AI.',
    siteName: 'Muhammad Farooq Portfolio',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Muhammad Farooq - Agentic AI Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Farooq | Agentic AI Developer & CS Student',
    description:
      'Computer Science student and Agentic AI Developer building intelligent applications with Generative AI and Agentic AI.',
    images: ['/opengraph-image'],
    creator: '@muhammad_farooq',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="canonical" href="/" />
      </head>
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

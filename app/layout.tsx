import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'
import './globals.css'
import { twMerge } from 'tailwind-merge'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chat Nova | Custom AI Chatbot',
  description:
    'Chat Nova will help you to build a custom AI Chatbot with full authentication and database management flow in a just few minutes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Chat Nova" />
        <meta
          property="og:description"
          content="Chat Nova will help you to build a custom AI Chatbot with full authentication and database management flow in a just few minutes"
        />
        <meta property="og:url" content="https://chatnova.co" />
        <meta property="og:site_name" content="Chat Nova" />
        <meta property="og:image" content="https://shipfa.st/shareMain.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://chatnova.co" />
        <meta name="twitter:title" content="Chat Nova" />
        <meta
          name="twitter:description"
          content="Chat Nova will help you to build a custom AI Chatbot with full authentication and database management flow in a just few minutes!"
        />
        <meta name="next-size-adjust" />
      </head>
      <body className={twMerge(inter.className)}>
        <Theme appearance="dark">
          <Navigation />
          {children}
          <Footer />
        </Theme>
      </body>
    </html>
  )
}

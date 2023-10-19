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
  title: 'ChatNova | Custom AI Chatbot',
  description:
    'ChatNova will help you to build a custom AI Chatbot with full authentication and database management flow in a just few minutes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="ChatNova" />
        <meta
          property="og:description"
          content="ChatNova will help you to build a custom AI Chatbot with full authentication and database management flow in a just few minutes"
        />
        <meta property="og:url" content="https://www.chatnova.co" />
        <meta property="og:site_name" content="ChatNova" />
        <meta property="og:image" content="/og.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://www.chatnova.co" />
        <meta name="twitter:title" content="ChatNova" />
        <meta
          name="twitter:description"
          content="ChatNova will help you to build a custom AI Chatbot with full authentication and database management flow in a just few minutes!"
        />
        <meta name="twitter:image" content="/og.png" />
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

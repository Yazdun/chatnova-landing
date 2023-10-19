import { LandingQaClient } from '@/components/faq'
import { Features } from '@/components/features'
import { Hero } from '@/components/hero'
import { Video } from '@/components/video'

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Video />
      <LandingQaClient />
    </main>
  )
}

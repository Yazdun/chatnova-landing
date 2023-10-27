import { Banner } from '@/components/banner'
import { Cards } from '@/components/cards'
import { LandingQaClient } from '@/components/faq'
import { Features } from '@/components/features'
import { Hero } from '@/components/hero'
import { Video } from '@/components/video'

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Cards />
      <Video />
      <LandingQaClient />
      <Banner />
    </main>
  )
}

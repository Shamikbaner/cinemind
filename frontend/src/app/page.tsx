import Navbar from '@/components/layout/Navbar'
import HeroBanner from '@/components/home/HeroBanner'

import { colors } from '@/styles'

export default function HomePage() {
  return (
    <main className="min-h-screen" style={{ background: colors.background }}>
      <Navbar />
      <HeroBanner />
    </main>
  )
}

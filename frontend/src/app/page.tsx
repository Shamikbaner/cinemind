import Navbar from '@/components/layout/Navbar'
import HeroBanner from '@/components/home/HeroBanner'
import Footer from '@/components/layout/Footer'
import MovieRow from '@/components/movie/MovieRow'
import PageTransition from '@/components/shared/PageTransition'

import { colors } from '@/styles'

export default function HomePage() {
  return (
    <main
      className="min-h-screen"
      style={{
        background: colors.background,
      }}
    >
      <PageTransition>
        <Navbar />
        <HeroBanner />
        <MovieRow title="Trending Now" />
        <MovieRow title="Popular Movies" />
        <MovieRow title="Top Rated Series" />
        <Footer />
      </PageTransition>
    </main>
  )
}

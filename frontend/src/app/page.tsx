'use client'
import Navbar from '@/components/layout/Navbar'
import HeroBanner from '@/components/home/HeroBanner'
import Footer from '@/components/layout/Footer'
import MovieRow from '@/components/movie/MovieRow'
import PageTransition from '@/components/shared/PageTransition'
import ProtectedRoute from '@/components/auth/ProtectedRoutes'
import { useAuthStore } from '@/store/auth.store'

import { colors } from '@/styles'

export default function HomePage() {
  const logout=useAuthStore(
    (state)=>state.logout
  )

  const handleLogout=()=>{
    logout()
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    window.location.href='/login'
  }
  return (
    <ProtectedRoute>
    <main
      className="min-h-screen"
      style={{
        background: colors.background,
      }}
    >
      <PageTransition>
        <Navbar />
        <button onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg m-4">
          Logout
        </button>
        <HeroBanner />
        <MovieRow title="Trending Now" />
        <MovieRow title="Popular Movies" />
        <MovieRow title="Top Rated Series" />
        <Footer />
      </PageTransition>
    </main>
    </ProtectedRoute>
  )
}

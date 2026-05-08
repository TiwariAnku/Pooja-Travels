import { Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Marquee from './component/Marquee'
import Features from './component/Features'
import Fleet from './component/Fleet'
import Services from './component/Services'
import TrustBanner from './component/TrustBanner'
import Testimonials from './component/Testimonials'
import Contact from './component/Contact'
import Footer from './component/Footer'
import FleetPage from './component/pages/fleet'
import ServicePage from './component/pages/service'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Marquee />
            <Features />
            <Fleet />
            <Services />
            <TrustBanner />
            <Testimonials />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/fleet" element={<FleetPage />} />
        <Route path="/service" element={<ServicePage />} />
      </Routes>
    </div>
  )
}

export default App
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

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <Features />
      <Fleet />
      <Services />
      <TrustBanner />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
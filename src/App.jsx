import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

// Layout & Home Core Components
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

// Dedicated Pages & System Features
import FleetPage from './component/pages/fleet'
import ServicePage from './component/pages/service'
import AboutPage from './component/pages/about'
import ContactPage from './component/pages/contact'
import Loading from './component/pages/loading' // Added Loading Screen

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Keeps the loading screen visible for 3 seconds to complete the system check simulation
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#0f1115]">
      {/* Handles smooth fade out of the loader overlay */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-50 pointer-events-auto"
          >
            <Loading />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Site Content Structure */}
      <>
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
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </>
    </div>
  )
}

export default App
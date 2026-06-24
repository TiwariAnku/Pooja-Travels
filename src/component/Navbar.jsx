import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../assets/logo.jpeg'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Fleet', href: '/fleet' },
  { name: 'Services', href: '/service' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu if window is resized to desktop size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled || menuOpen
        ? 'py-3 bg-slate-900/95 backdrop-blur-xl border-b border-white/5 shadow-2xl' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative flex items-center justify-between">

        {/* LOGO AREA */}
        <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-3 group cursor-pointer shrink-0 z-50">
          {/* Round Logo Container with Golden Outline */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#d4af37] p-0.5 bg-white flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 overflow-hidden">
            <img 
              src={logoImg}
              alt="Pooja Travels" 
              className="w-full h-full object-contain rounded-full"
            />
          </div>

          {/* Text Branding */}
          <div className="flex flex-col leading-none">
            <span className="font-playfair text-lg sm:text-2xl font-black tracking-tight text-white group-hover:text-amber-500 transition-colors">
              POOJA<span className="text-amber-500 group-hover:text-white">TRAVELS</span>
            </span>
            <span className="text-[8px] sm:text-[10px] font-bold tracking-[0.3em] uppercase text-amber-500/80 mt-1">
              Est. 2008
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <ul className="flex items-center gap-8 xl:gap-10">
            {navLinks.map(link => (
              <li key={link.name} className="relative group">
                <Link
                  to={link.href}
                  className="text-white/70 hover:text-white text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300"
                >
                  {link.name}
                </Link>
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-full" />
              </li>
            ))}
          </ul>
        </div>

        {/* ACTION AREA */}
        <div className="flex items-center justify-end gap-2 sm:gap-8 z-50">
          
          {/* Desktop Contact Info */}
          <div className="hidden xl:flex flex-col items-end border-r border-white/10 pr-6">
            <span className="text-[10px] font-bold text-amber-500 uppercase tracking-[0.2em] mb-1">
              Official Support
            </span>
            <a 
              href="tel:+919594917750" 
              className="text-white text-base font-medium tracking-tight hover:text-amber-500 transition-colors"
            >
              +91 95949 17750
            </a>
          </div>

          {/* PREMIUM WHATSAPP BUTTON */}
          <a 
            href="https://wa.me/919594917750?text=I%20want%20to%20inquire%20about%20a%20car%20booking"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-10 h-10 sm:w-auto sm:h-auto sm:px-5 sm:py-2.5 rounded-full sm:rounded-lg transition-all duration-500"
          >
            {/* Background Layer */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10 rounded-full sm:rounded-lg group-hover:bg-[#25D366]/20 group-hover:border-[#25D366]/50 transition-all duration-500" />
            
            {/* Glow Layer */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#25D366]/10 blur-xl transition-opacity duration-500 rounded-full sm:rounded-lg" />

            <div className="relative z-10 flex items-center gap-2">
              <svg 
                className="w-4 h-4 fill-[#25D366] drop-shadow-[0_0_8px_rgba(37,211,102,0.6)] group-hover:scale-110 transition-transform duration-500" 
                viewBox="0 0 24 24"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82c1.516.903 3.11 1.383 4.743 1.385 5.017 0 9.1-4.083 9.102-9.101 0-2.432-.946-4.719-2.665-6.438-1.72-1.72-4.005-2.665-6.435-2.665-5.018 0-9.102 4.084-9.104 9.102-.001 1.768.51 3.432 1.478 4.839l-1.042 3.811 3.923-1.033z"/>
              </svg>
              <span className="hidden sm:inline text-white text-[11px] font-bold tracking-[0.2em] uppercase">
                WhatsApp
              </span>
            </div>
          </a>

          {/* MOBILE TOGGLE (The "Three Bars" Menu) */}
          <button
            className="lg:hidden flex flex-col items-center justify-center gap-1.5 w-10 h-10 rounded-lg hover:bg-white/5 transition-colors focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <div className={`w-6 h-0.5 bg-amber-500 transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 scale-0' : ''}`} />
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* FIXED MOBILE OVERLAY MENU */}
      <div className={`lg:hidden fixed left-0 right-0 w-full bg-slate-950/98 backdrop-blur-2xl border-t border-white/5 transition-all duration-500 ease-in-out z-40 ${
        scrolled ? 'top-[65px]' : 'top-[73px]'
      } ${
        menuOpen 
          ? 'opacity-100 visible pointer-events-auto h-[calc(100vh-65px)]' 
          : 'opacity-0 invisible pointer-events-none h-0'
      }`}>
        <div className="px-6 py-8 flex flex-col gap-6 h-full overflow-y-auto">
          {navLinks.map(link => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-lg font-bold tracking-[0.1em] uppercase border-b border-white/5 pb-4 hover:text-amber-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          {/* Quick Context Details Inside Drawer */}
          <div className="mt-auto pt-6 border-t border-white/5 flex flex-col gap-2">
             <span className="text-amber-500 font-bold text-xs uppercase tracking-widest">Direct Support:</span>
             <a href="tel:+919594917750" className="text-white text-xl font-bold tracking-tight hover:text-amber-400 transition-colors">
               +91 95949 17750
             </a>
             <p className="text-slate-400 text-[10px] tracking-wider uppercase">Available 24/7 for immediate bookings</p>
          </div>
        </div>
      </div>
    </nav>
  )
}
import { useState, useEffect } from 'react'

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Fleet', href: '#fleet' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'py-3 bg-slate-900/90 backdrop-blur-xl border-b border-white/5 shadow-2xl' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">

        {/* LOGO: Sophisticated Serif */}
        <div className="flex flex-col leading-none group cursor-pointer">
          <span className="font-playfair text-2xl font-black tracking-tight text-white group-hover:text-amber-500 transition-colors">
            POOJA<span className="text-amber-500 group-hover:text-white">TRAVEL</span>
          </span>
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-500/80">
            Est. 2018
          </span>
        </div>

        {/* DESKTOP NAVIGATION: Minimal & Spaced */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map(link => (
            <li key={link.name} className="relative group">
              <a
                href={link.href}
                className="text-white/70 hover:text-white text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300"
              >
                {link.name}
              </a>
              {/* Animated Underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* ACTION AREA */}
        <div className="flex items-center gap-6">
          <div className="hidden xl:flex flex-col items-end mr-2">
            <span className="text-[9px] font-bold text-amber-500 uppercase tracking-widest">24/7 Concierge</span>
            <a href="tel:+918879854275" className="text-white text-sm font-bold hover:text-amber-500 transition-colors">
              +91 88798 54275
            </a>
          </div>

          <button className="relative group bg-amber-500 text-slate-900 font-black text-[10px] tracking-widest uppercase px-8 py-3 rounded-md overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:-translate-y-0.5">
            <span className="relative z-10">Book Now</span>
            <div className="absolute inset-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 opacity-20" />
          </button>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className={`w-6 h-0.5 bg-amber-500 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <div className={`w-4 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : 'ml-auto'}`} />
            <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* MOBILE MENU: Full Screen Overlay style */}
      <div className={`lg:hidden fixed inset-x-0 top-[100%] bg-slate-900/98 backdrop-blur-2xl border-t border-white/5 transition-all duration-500 ease-in-out overflow-hidden ${
        menuOpen ? 'max-h-screen opacity-100 py-8' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-8 flex flex-col gap-6">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-lg font-bold tracking-[0.1em] uppercase border-b border-white/5 pb-4 hover:text-amber-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-2">
             <span className="text-amber-500 font-bold text-xs">Direct Support:</span>
             <a href="tel:+918879854275" className="text-white text-xl font-bold">+91 88798 54275</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
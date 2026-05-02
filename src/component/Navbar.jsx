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
        ? 'py-3 bg-slate-900/95 backdrop-blur-xl border-b border-white/5 shadow-2xl' 
        : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">

        {/* LOGO: Corrected name and Est. Year */}
        <div className="flex flex-col leading-none group cursor-pointer">
          <span className="font-playfair text-2xl font-black tracking-tight text-white group-hover:text-amber-500 transition-colors">
            POOJA<span className="text-amber-500 group-hover:text-white">TRAVELS</span>
          </span>
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-500/80">
            Est. 2008
          </span>
        </div>

        {/* DESKTOP NAVIGATION */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map(link => (
            <li key={link.name} className="relative group">
              <a
                href={link.href}
                className="text-white/70 hover:text-white text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300"
              >
                {link.name}
              </a>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-amber-500 transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* ACTION AREA: WhatsApp Integration */}
        <div className="flex items-center gap-6">
          <div className="hidden xl:flex flex-col items-end mr-2">
            <span className="text-[9px] font-bold text-amber-500 uppercase tracking-widest">Official Support</span>
            <a href="tel:+919594917750" className="text-white text-sm font-bold hover:text-amber-500 transition-colors">
              +91 95949 17750
            </a>
          </div>

          <a 
            href="https://wa.me/919594917750?text=I%20want%20to%20inquire%20about%20a%20car%20booking"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-amber-500 text-slate-900 font-black text-[10px] tracking-widest uppercase px-6 py-3 rounded-md transition-all duration-300 hover:bg-[#25D366] hover:text-white hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:-translate-y-0.5"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.224-3.82c1.516.903 3.11 1.383 4.743 1.385 5.017 0 9.1-4.083 9.102-9.101 0-2.432-.946-4.719-2.665-6.438-1.72-1.72-4.005-2.665-6.435-2.665-5.018 0-9.102 4.084-9.104 9.102-.001 1.768.51 3.432 1.478 4.839l-1.042 3.811 3.923-1.033z"/>
            </svg>
            WhatsApp
          </a>

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

      {/* MOBILE MENU overlay */}
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
             <a href="tel:+919594917750" className="text-white text-xl font-bold">+91 95949 17750</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
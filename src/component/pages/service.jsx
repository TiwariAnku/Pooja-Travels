import { useState, useEffect, useRef } from "react"

const services = [
  {
    id: 1,
    icon: 'plane',
    title: 'Airport Transfers',
    subtitle: 'On-Time. Every Time.',
    desc: 'Seamless pick-up and drop-off at Mumbai, Pune & Nashik airports. Flight-tracked arrivals, meet & greet, and zero wait time — guaranteed.',
    features: ['Flight Tracking', 'Meet & Greet', 'All Terminals', '24/7 Available'],
    accent: 'amber',
    stat: '5000+',
    statLabel: 'Airport Trips',
  },
  {
    id: 2,
    icon: 'briefcase',
    title: 'Corporate Travel',
    subtitle: 'Executive. Reliable. Discreet.',
    desc: 'Dedicated fleet for corporates — employee shuttles, client transfers, and event logistics. Monthly billing, GST invoices, and a dedicated account manager.',
    features: ['GST Invoicing', 'Monthly Billing', 'Dedicated Fleet', 'Priority Support'],
    accent: 'blue',
    stat: '200+',
    statLabel: 'Corporate Clients',
  },
  {
    id: 3,
    icon: 'map',
    title: 'Outstation Tours',
    subtitle: 'Pan India. Pan Comfort.',
    desc: 'Long-haul journeys done right — Goa, Shirdi, Mahabaleshwar, Lonavala & beyond. One-way or round trip with experienced highway drivers.',
    features: ['One-Way Available', 'Experienced Drivers', 'All India Routes', 'Comfortable Rides'],
    accent: 'orange',
    stat: '50+',
    statLabel: 'Destinations',
  },
  {
    id: 4,
    icon: 'users',
    title: 'Group Bookings',
    subtitle: 'Tours. Events. Pilgrimages.',
    desc: 'From 8-seater Innovas to 17-seater Tempo Travellers — we handle group logistics for pilgrimages, office outings, weddings, and school tours.',
    features: ['Upto 17 Seater', 'Event Ready', 'Pilgrimage Routes', 'Luggage Racks'],
    accent: 'green',
    stat: '300+',
    statLabel: 'Group Tours Done',
  },
  {
    id: 5,
    icon: 'clock',
    title: 'Local Rentals',
    subtitle: 'By the Hour. By the Day.',
    desc: 'Cab at disposal for your local errands, city meetings, and day-long Mumbai trips. Driver stays with you — no extra booking, no hassle.',
    features: ['Hourly Packages', 'Driver Disposal', 'City-wide Coverage', 'Flexible Duration'],
    accent: 'gold',
    stat: '8hr',
    statLabel: 'Min Package',
  },
  {
    id: 6,
    icon: 'heart',
    title: 'Wedding & Events',
    subtitle: 'Your Big Day, Our Best Ride.',
    desc: 'Decorated vehicles, coordinated convoys, and immaculate timing for weddings, receptions, engagements, and corporate events across Mumbai.',
    features: ['Decorated Vehicles', 'Convoy Available', 'Formal Attire Drivers', 'Punctual Arrival'],
    accent: 'rose',
    stat: '150+',
    statLabel: 'Weddings Served',
  },
]

const accentStyles = {
  amber: { color: '#f59e0b', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.25)', glow: 'rgba(245,158,11,0.15)' },
  blue:  { color: '#60a5fa', bg: 'rgba(96,165,250,0.1)',  border: 'rgba(96,165,250,0.25)',  glow: 'rgba(96,165,250,0.15)' },
  orange:{ color: '#fb923c', bg: 'rgba(251,146,60,0.1)',  border: 'rgba(251,146,60,0.25)',  glow: 'rgba(251,146,60,0.15)' },
  green: { color: '#34d399', bg: 'rgba(52,211,153,0.1)',  border: 'rgba(52,211,153,0.25)',  glow: 'rgba(52,211,153,0.15)' },
  gold:  { color: '#fde047', bg: 'rgba(253,224,71,0.1)',  border: 'rgba(253,224,71,0.25)',  glow: 'rgba(253,224,71,0.15)' },
  rose:  { color: '#fb7185', bg: 'rgba(251,113,133,0.1)', border: 'rgba(251,113,133,0.25)', glow: 'rgba(251,113,133,0.15)' },
}

const icons = {
  plane: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2"/>
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
      <line x1="12" y1="12" x2="12" y2="12.01"/>
      <path d="M2 12h20"/>
    </svg>
  ),
  map: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/>
      <line x1="9" y1="3" x2="9" y2="18"/>
      <line x1="15" y1="6" x2="15" y2="21"/>
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  ),
  menu: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  ),
  close: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  )
}

function useInView(threshold = 0.1) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true) }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, inView]
}

function ServiceCard({ service, index }) {
  const a = accentStyles[service.accent]
  const [ref, inView] = useInView()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.6s ease ${index * 80}ms, transform 0.6s ease ${index * 80}ms, all 0.4s ease`,
        background: hovered ? `linear-gradient(135deg, rgba(255,255,255,0.05) 0%, ${a.glow} 100%)` : 'rgba(255,255,255,0.03)',
        border: `1px solid ${hovered ? a.border : 'rgba(255,255,255,0.07)'}`,
        borderRadius: 20,
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        boxShadow: hovered ? `0 20px 48px rgba(0,0,0,0.4), 0 0 30px ${a.glow}` : '0 4px 20px rgba(0,0,0,0.2)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }}
    >
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: a.color, opacity: hovered ? 1 : 0, transition: 'opacity 0.4s' }} />

      <div style={{ position: 'absolute', top: 24, right: 24, textAlign: 'right' }}>
        <div style={{ color: a.color, fontSize: 22, fontWeight: 900, fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em', lineHeight: 1 }}>{service.stat}</div>
        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: 2 }}>{service.statLabel}</div>
      </div>

      <div style={{ padding: '28px 24px 24px', display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div>
          <div style={{
            width: 52, height: 52, background: a.bg, border: `1px solid ${a.border}`, borderRadius: 14,
            display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20, color: a.color,
            transform: hovered ? 'scale(1.05) rotate(-2deg)' : 'scale(1)', transition: 'transform 0.3s ease',
          }}>
            <div style={{ width: 24, height: 24 }}>{icons[service.icon]}</div>
          </div>

          <div style={{ marginBottom: 6 }}>
            <h3 style={{ color: '#fff', fontSize: 22, fontWeight: 900, fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.04em', lineHeight: 1 }}>{service.title}</h3>
            <p style={{ color: a.color, fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginTop: 4 }}>{service.subtitle}</p>
          </div>

          <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '16px 0' }} />
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 13, lineHeight: 1.7, marginBottom: 20 }}>{service.desc}</p>
        </div>

        <div style={{ marginTop: 'auto' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 24 }}>
            {service.features.map(f => (
              <span key={f} style={{
                display: 'inline-flex', alignItems: 'center', gap: 5, background: a.bg, border: `1px solid ${a.border}`,
                color: a.color, fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '4px 8px', borderRadius: 6,
              }}>
                <span style={{ width: 10, height: 10, display: 'inline-flex' }}>{icons.check}</span>
                {f}
              </span>
            ))}
          </div>

          <button
            onClick={() => window.open(`https://wa.me/919594917750?text=${encodeURIComponent(`Hi, I'm interested in your ${service.title} service. Please share details.`)}`, '_blank')}
            style={{
              width: '100%', padding: '12px 0', borderRadius: 12, fontSize: 10, fontWeight: 900, letterSpacing: '0.2em', textTransform: 'uppercase',
              border: `1px solid ${hovered ? a.color : 'rgba(255,255,255,0.1)'}`, background: hovered ? a.color : 'rgba(255,255,255,0.04)',
              color: hovered ? '#0a0d14' : 'rgba(255,255,255,0.55)', cursor: 'pointer', transition: 'all 0.3s ease',
            }}
          >
            Enquire Now →
          </button>
        </div>
      </div>
    </div>
  )
}

function WhyItem({ icon, title, desc, delay }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(20px)',
      transition: `all 0.6s ease ${delay}ms`,
      display: 'flex', gap: 16, alignItems: 'flex-start',
    }}>
      <div style={{
        width: 44, height: 44, flexShrink: 0, background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)',
        borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f59e0b',
      }}>
        <div style={{ width: 20, height: 20 }}>{icon}</div>
      </div>
      <div>
        <p style={{ color: '#fff', fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{title}</p>
        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 12, lineHeight: 1.6 }}>{desc}</p>
      </div>
    </div>
  )
}

export default function Services() {
  const [heroRef, heroIn] = useInView(0.05)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const whyItems = [
    { icon: icons.check, title: 'GST Registered Business', desc: 'GSTIN: 27AICPT7468H1ZP — proper invoices for every booking.' },
    { icon: icons.clock, title: '15+ Years on the Road', desc: 'Established in 2008, trusted by thousands of Mumbai families & corporates.' },
    { icon: icons.users, title: 'Trained, Verified Drivers', desc: 'Police-verified, uniformed drivers with 5+ years highway experience.' },
    { icon: icons.map, title: 'GPS Tracked Fleet', desc: 'Real-time tracking on every vehicle, every trip, for your safety.' },
  ]

  return (
    <div style={{ background: '#0f1729', minHeight: '100vh', fontFamily: "'DM Sans', sans-serif", color: '#fff' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;700;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; scroll-behavior: smooth; }
        button, a { font-family: inherit; transition: all 0.3s ease; }
        
        /* Responsive Grid & Flex Rules */
        .pt-grid-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
          gap: 24px;
          margin-bottom: 80px;
        }
        .pt-why-section {
          border: 1px solid rgba(255,255,255,0.07);
          background: 'rgba(255,255,255,0.02)';
          border-radius: 24px;
          padding: 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        .pt-stat-bar {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 48px;
        }
        .pt-cta-box {
          margin-top: 40px;
          background: linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(245,158,11,0.02) 100%);
          border: 1px solid rgba(245,158,11,0.2);
          border-radius: 20px;
          padding: 36px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .pt-nav-links { display: flex; gap: 32px; align-items: center; }
        .pt-menu-btn { display: none; }

        /* Media Queries for Mobile responsiveness */
        @media (max-width: 991px) {
          .pt-why-section { grid-template-columns: 1fr; gap: 40px; padding: 32px 24px; }
          .pt-cta-box { flex-direction: column; text-align: center; padding: 32px 24px; }
          .pt-cta-box div { display: flex; flexDirection: column; align-items: center; }
        }
        
        @media (max-width: 768px) {
          .pt-nav-links { display: none; }
          .pt-menu-btn { display: block; }
          .pt-stat-bar { flex-direction: column; gap: 24px; }
          .pt-stat-divider { display: none !important; }
          .pt-stat-item { padding: 0 !important; }
        }
      `}</style>

      {/* ── STICKY NAVBAR ── */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: 72,
        background: 'rgba(15, 23, 41, 0.85)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.05)', zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px'
      }}>
        <div style={{ maxWidth: 1200, width: '100%', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 28, color: '#fff', letterSpacing: '0.05em', lineHeight: 1 }}>POOJA <span style={{ color: '#f59e0b' }}>TRAVELS</span></span>
            <span style={{ fontSize: 9, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.2em', marginTop: 2 }}>Premium Logistics</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="pt-nav-links">
            {['Services', 'Why Choose Us', 'Fleet'].map((link) => (
              <a key={link} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: 13, fontWeight: 500, letterSpacing: '0.05em' }}>{link}</a>
            ))}
            <a href="tel:9594917750" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', padding: '8px 16px', borderRadius: 10, fontSize: 12, fontWeight: 700, textDecoration: 'none' }}>Call Support</a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button className="pt-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', width: 24, height: 24 }}>
            {mobileMenuOpen ? icons.close : icons.menu}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay */}
      <div style={{
        position: 'fixed', top: 72, left: 0, right: 0, bottom: 0, background: '#0f1729', zIndex: 999,
        padding: 32, display: mobileMenuOpen ? 'block' : 'none', transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(-100%)', transition: 'all 0.4s ease'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'center', marginTop: 40 }}>
          {['Services', 'Why Choose Us', 'Fleet'].map((link) => (
            <a key={link} onClick={() => setMobileMenuOpen(false)} href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} style={{ color: '#fff', textDecoration: 'none', fontSize: 20, fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.1em' }}>{link}</a>
          ))}
          <a href="tel:9594917750" style={{ background: '#f59e0b', color: '#0a0d14', width: '100%', textAlign: 'center', padding: '12px', borderRadius: 12, fontWeight: 700, textDecoration: 'none', marginTop: 20 }}>Call Now</a>
        </div>
      </div>

      {/* ── MAIN CONTENT CONTAINER ── */}
      <section id="services" style={{ position: 'relative', overflow: 'hidden', padding: '120px 24px 80px' }}>
        {/* Background treatments */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.02, pointerEvents: 'none', backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div style={{ position: 'absolute', top: 0, right: -200, width: 600, height: 600, background: 'radial-gradient(ellipse, rgba(245,158,11,0.05) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative' }}>
          
          {/* ── HERO HEADER ── */}
          <div ref={heroRef} style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 16, opacity: heroIn ? 1 : 0, transform: heroIn ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease' }}>
              <div style={{ width: 32, height: 1, background: '#f59e0b' }} />
              <span style={{ color: '#f59e0b', fontSize: 10, fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase' }}>Our Offerings</span>
              <div style={{ width: 32, height: 1, background: '#f59e0b' }} />
            </div>

            <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(42px, 8vw, 84px)', lineHeight: 0.95, letterSpacing: '0.02em', color: '#fff', marginBottom: 16, opacity: heroIn ? 1 : 0, transform: heroIn ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease 0.1s' }}>
              Integrated <span style={{ color: '#f59e0b', fontStyle: 'italic' }}>Logistics</span> Solutions
            </h1>

            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11, fontWeight: 700, letterSpacing: '0.25em', textTransform: 'uppercase', opacity: heroIn ? 1 : 0, transform: heroIn ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease 0.2s' }}>
              Professional Excellence in Transit Since 2008
            </p>

            {/* Stat bar */}
            <div className="pt-stat-bar" style={{ opacity: heroIn ? 1 : 0, transition: 'all 0.6s ease 0.3s' }}>
              {[['10,000+', 'Happy Clients'], ['50+', 'Vehicles'], ['Pan India', 'Coverage'], ['24/7', 'Support']].map(([num, lbl], i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center' }} className="pt-stat-item">
                  <div style={{ padding: '0 28px', textAlign: 'center' }} className="pt-stat-item">
                    <div style={{ color: '#f59e0b', fontSize: 28, fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}>{num}</div>
                    <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: 2 }}>{lbl}</div>
                  </div>
                  {i < 3 && <div className="pt-stat-divider" style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.1)' }} />}
                </div>
              ))}
            </div>
          </div>

          {/* ── SERVICE GRID ── */}
          <div className="pt-grid-container">
            {services.map((s, i) => <ServiceCard key={s.id} service={s} index={i} />)}
          </div>

          {/* ── WHY POOJA TRAVELS ── */}
          <div id="why-choose-us" className="pt-why-section">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <div style={{ width: 32, height: 1, background: '#f59e0b' }} />
                <span style={{ color: '#f59e0b', fontSize: 10, fontWeight: 900, letterSpacing: '0.3em', textTransform: 'uppercase' }}>Why Choose Us</span>
              </div>
              <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 44, lineHeight: 1, letterSpacing: '0.02em', color: '#fff', marginBottom: 16 }}>
                Mumbai's Most<br /><span style={{ color: '#f59e0b' }}>Trusted</span> Fleet
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, lineHeight: 1.7, marginBottom: 28 }}>
                From a single cab to a full corporate fleet — Pooja Travels delivers on every promise. Office No. 194, Vishnu Nagar Society, L.U. Gadkari Marg, Chembur, Mumbai-400 074.
              </p>
              <button
                onClick={() => window.open('https://wa.me/919594917750?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services', '_blank')}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10, background: '#f59e0b', color: '#0a0d14',
                  fontSize: 10, fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '14px 24px', borderRadius: 12, border: 'none', cursor: 'pointer',
                }}
              >
                <div style={{ width: 18, height: 18 }}>{icons.whatsapp}</div>
                WhatsApp Us Now
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {whyItems.map((w, i) => <WhyItem key={i} {...w} delay={i * 80} />)}
            </div>
          </div>

          {/* ── BOTTOM CTA BAR ── */}
          <div id="fleet" className="pt-cta-box">
            <div>
              <p style={{ color: '#fff', fontWeight: 800, fontSize: 18, marginBottom: 6 }}>Ready to book your ride?</p>
              <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13, letterSpacing: '0.02em' }}>
                📞 9594917750 &nbsp;/&nbsp; 9702909087 &nbsp;·&nbsp; ✉️ poojatravels111@gmail.com
              </p>
            </div>
            <div style={{ display: 'flex', gap: 12, width: '100%', maxWidth: '280px', justifyContent: 'center' }}>
              <a href="tel:9594917750" style={{
                flex: 1, textAlign: 'center', padding: '12px 0', borderRadius: 12, border: '1px solid rgba(255,255,255,0.15)',
                background: 'rgba(255,255,255,0.05)', color: '#fff', fontSize: 10, fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', textDecoration: 'none'
              }}>Call Now</a>
              <button
                onClick={() => window.open('https://wa.me/919594917750', '_blank')}
                style={{
                  flex: 1, padding: '12px 0', borderRadius: 12, background: '#f59e0b', border: 'none',
                  color: '#0a0d14', fontSize: 10, fontWeight: 900, letterSpacing: '0.15em', textTransform: 'uppercase', cursor: 'pointer'
                }}
              >WhatsApp →</button>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
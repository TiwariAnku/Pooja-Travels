const fleet = [
  {
    id: 1,
    name: 'Innova Crysta',
    tag: 'Most Popular',
    type: 'Premium SUV',
    seats: 7,
    luggage: 'Large',
    ac: true,
    ideal: 'Corporate · Airport · Family',
    range: 'Mumbai · Pune · Nashik',
    features: ['GPS Tracked', 'USB Charging', 'Music System', 'Extra Legroom'],
    accent: 'amber',
  },
  {
    id: 2,
    name: 'Innova HyCross',
    tag: 'Eco Hybrid',
    type: 'Hybrid SUV',
    seats: 7,
    luggage: 'Large',
    ac: true,
    ideal: 'Long Distance · Executive',
    range: 'Pan India',
    features: ['Hybrid Engine', 'GPS Tracked', 'Premium Cabin', 'Fuel Efficient'],
    accent: 'green',
  },
  {
    id: 3,
    name: 'Toyota Fortuner',
    tag: 'VIP',
    type: 'Luxury SUV',
    seats: 7,
    luggage: 'XL',
    ac: true,
    ideal: 'VIP · Executive · Events',
    range: 'Pan India',
    features: ['Leather Seats', 'GPS Tracked', 'Premium Audio', 'Tinted Glass'],
    accent: 'gold',
  },
  {
    id: 4,
    name: 'Ertiga',
    tag: 'Best Value',
    type: 'MPV',
    seats: 6,
    luggage: 'Medium',
    ac: true,
    ideal: 'Small Groups · Daily Use',
    range: 'Mumbai Region',
    features: ['GPS Tracked', 'USB Charging', 'Comfortable', 'Economical'],
    accent: 'blue',
  },
  {
    id: 5,
    name: 'Swift Dzire',
    tag: 'City Ride',
    type: 'Sedan',
    seats: 4,
    luggage: 'Small',
    ac: true,
    ideal: 'Solo · Couple · Office',
    range: 'Mumbai · Navi Mumbai',
    features: ['GPS Tracked', 'Compact', 'Fuel Efficient', 'Easy Parking'],
    accent: 'slate',
  },
  {
    id: 6,
    name: 'Tempo Traveller',
    tag: 'Group Special',
    type: 'Mini Van',
    seats: 17,
    luggage: 'XL',
    ac: true,
    ideal: 'Tours · Pilgrimage · Events',
    range: 'Pan India',
    features: ['Push-back Seats', 'Luggage Rack', 'GPS Tracked', 'Group Comfort'],
    accent: 'orange',
  },
]

const accentMap = {
  amber:  { badge: 'bg-amber-400/15 text-amber-400 border-amber-400/30', dot: 'bg-amber-400', glow: 'group-hover:shadow-amber-500/10', line: 'bg-amber-400' },
  green:  { badge: 'bg-emerald-400/15 text-emerald-400 border-emerald-400/30', dot: 'bg-emerald-400', glow: 'group-hover:shadow-emerald-500/10', line: 'bg-emerald-400' },
  gold:   { badge: 'bg-yellow-400/15 text-yellow-300 border-yellow-400/30', dot: 'bg-yellow-400', glow: 'group-hover:shadow-yellow-500/10', line: 'bg-yellow-400' },
  blue:   { badge: 'bg-blue-400/15 text-blue-400 border-blue-400/30', dot: 'bg-blue-400', glow: 'group-hover:shadow-blue-500/10', line: 'bg-blue-400' },
  slate:  { badge: 'bg-slate-400/15 text-slate-300 border-slate-400/30', dot: 'bg-slate-400', glow: 'group-hover:shadow-slate-500/10', line: 'bg-slate-400' },
  orange: { badge: 'bg-orange-400/15 text-orange-400 border-orange-400/30', dot: 'bg-orange-400', glow: 'group-hover:shadow-orange-500/10', line: 'bg-orange-400' },
}

function CarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 64 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 22H56V26C56 27.1 55.1 28 54 28H10C8.9 28 8 27.1 8 26V22Z" fill="currentColor" opacity="0.3"/>
      <path d="M6 22L12 10H52L58 22H6Z" fill="currentColor" opacity="0.5"/>
      <path d="M14 10L18 4H46L50 10H14Z" fill="currentColor" opacity="0.8"/>
      <circle cx="18" cy="27" r="4" fill="currentColor"/>
      <circle cx="46" cy="27" r="4" fill="currentColor"/>
      <rect x="20" y="5" width="10" height="6" rx="1" fill="currentColor" opacity="0.4"/>
      <rect x="34" y="5" width="10" height="6" rx="1" fill="currentColor" opacity="0.4"/>
    </svg>
  )
}

function VanIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 80 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 22H76V26C76 27.1 75.1 28 74 28H6C4.9 28 4 27.1 4 26V22Z" fill="currentColor" opacity="0.3"/>
      <path d="M4 22L8 8H72L76 22H4Z" fill="currentColor" opacity="0.5"/>
      <path d="M10 8L13 3H67L70 8H10Z" fill="currentColor" opacity="0.8"/>
      <circle cx="18" cy="27" r="4" fill="currentColor"/>
      <circle cx="62" cy="27" r="4" fill="currentColor"/>
      <rect x="14" y="4" width="8" height="5" rx="1" fill="currentColor" opacity="0.4"/>
      <rect x="26" y="4" width="8" height="5" rx="1" fill="currentColor" opacity="0.4"/>
      <rect x="46" y="4" width="8" height="5" rx="1" fill="currentColor" opacity="0.4"/>
      <rect x="58" y="4" width="8" height="5" rx="1" fill="currentColor" opacity="0.4"/>
    </svg>
  )
}

export default function Fleet() {
  const handleBook = (carName) => {
    const msg = `Hi, I want to book a *${carName}*. Please share availability and pricing.`
    window.open(`https://wa.me/919594917750?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <section id="fleet" className="relative bg-[#0f1729]  py-28 px-4 sm:px-6 lg:px-12 overflow-hidden">

      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle, #f59e0b 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto">

        {/* SECTION HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-amber-400" />
              <span className="text-amber-400 text-[10px] font-black tracking-[0.4em] uppercase">Our Fleet</span>
            </div>
            <h2 className="text-white text-5xl sm:text-6xl font-black tracking-tight leading-none">
              Premium<br />
              <span className="text-amber-400">Vehicles</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-white/35 text-sm leading-relaxed">
              Every vehicle in our fleet is meticulously maintained, GPS-tracked, and driven by trained professionals. Choose the perfect ride for your journey.
            </p>
            <div className="flex items-center gap-6 mt-6">
              <div className="flex flex-col">
                <span className="text-amber-400 text-2xl font-black">50+</span>
                <span className="text-white/30 text-[10px] uppercase tracking-widest">Vehicles</span>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-amber-400 text-2xl font-black">15+</span>
                <span className="text-white/30 text-[10px] uppercase tracking-widest">Years</span>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-amber-400 text-2xl font-black">24/7</span>
                <span className="text-white/30 text-[10px] uppercase tracking-widest">Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* FLEET GRID */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {fleet.map((car, i) => {
            const a = accentMap[car.accent]
            const isLarge = car.seats >= 12
            return (
              <div
                key={car.id}
                className={`group relative bg-white/[0.03] border border-white/[0.07] hover:border-white/15 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl ${a.glow} cursor-pointer`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] ${a.line} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Card Body */}
                <div className="p-6">

                  {/* Top row: tag + seats */}
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-[9px] font-black tracking-[0.25em] uppercase px-2.5 py-1 rounded-md border ${a.badge}`}>
                      {car.tag}
                    </span>
                    <div className="flex items-center gap-1.5">
                      {/* Seat icons */}
                      {Array.from({ length: Math.min(car.seats, 6) }).map((_, i) => (
                        <div key={i} className={`w-2 h-2 rounded-full ${i < Math.min(car.seats, 6) ? a.dot : 'bg-white/10'} opacity-60`} />
                      ))}
                      {car.seats > 6 && <span className="text-white/40 text-[10px] font-bold ml-1">+{car.seats - 6}</span>}
                    </div>
                  </div>

                  {/* Car illustration area */}
                  <div className="relative flex items-center justify-center h-24 mb-5">
                    <div className={`absolute inset-0 ${a.line} opacity-[0.04] blur-2xl rounded-full`} />
                    {isLarge
                      ? <VanIcon className={`w-48 h-auto text-white/50 group-hover:text-white/70 transition-all duration-500 group-hover:scale-105`} />
                      : <CarIcon className={`w-36 h-auto text-white/50 group-hover:text-white/70 transition-all duration-500 group-hover:scale-105`} />
                    }
                  </div>

                  {/* Name & type */}
                  <div className="mb-4">
                    <h3 className="text-white text-xl font-black tracking-tight">{car.name}</h3>
                    <p className={`text-[11px] font-bold tracking-widest uppercase mt-0.5`}
                      style={{ color: car.accent === 'amber' ? '#f59e0b' : car.accent === 'green' ? '#34d399' : car.accent === 'gold' ? '#fde047' : car.accent === 'blue' ? '#60a5fa' : car.accent === 'orange' ? '#fb923c' : '#94a3b8' }}>
                      {car.type} · {car.seats} Seater
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="h-[1px] bg-white/5 mb-4" />

                  {/* Features */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {car.features.map(f => (
                      <span key={f} className="text-white/40 text-[9px] font-semibold tracking-wider uppercase bg-white/[0.04] border border-white/[0.06] px-2 py-1 rounded-md">
                        {f}
                      </span>
                    ))}
                  </div>

                  {/* Ideal for */}
                  <div className="flex flex-col gap-1.5 mb-5">
                    <div className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-wider">
                      <span>Ideal for</span>
                      <div className="flex-1 h-[1px] bg-white/5" />
                    </div>
                    <p className="text-white/55 text-xs font-medium">{car.ideal}</p>
                    <div className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-wider mt-1">
                      <span>Routes</span>
                      <div className="flex-1 h-[1px] bg-white/5" />
                    </div>
                    <p className="text-white/40 text-xs">{car.range}</p>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => handleBook(car.name)}
                    className={`w-full py-3 rounded-xl text-[11px] font-black tracking-[0.2em] uppercase transition-all duration-300 active:scale-95
                      bg-white/5 border border-white/10 text-white/60
                      hover:bg-amber-400 hover:border-amber-400 hover:text-slate-900
                    `}
                  >
                    Book via WhatsApp →
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* BOTTOM CTA STRIP */}
        <div className="mt-14 border border-white/[0.07] bg-white/[0.02] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-bold text-lg">Need a custom fleet arrangement?</p>
            <p className="text-white/35 text-sm mt-1">Corporate contracts · Event bookings · Monthly packages available</p>
          </div>
          <button
            onClick={() => window.open('https://wa.me/919594917750?text=Hi%2C%20I%20need%20a%20custom%20fleet%20arrangement', '_blank')}
            className="shrink-0 bg-amber-400 hover:bg-amber-300 active:scale-95 text-slate-900 font-black text-[11px] tracking-[0.2em] uppercase px-8 py-4 rounded-xl transition-all duration-300"
          >
            Contact Us Now
          </button>
        </div>

      </div>
    </section>
  )
}
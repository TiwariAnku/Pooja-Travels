// src/components/Marquee.jsx
export default function Marquee() {
  const items = [
    'Airport Transfers',
    'Outstation Logistics',
    'Wedding Luxury',
    'Corporate Fleet',
    'Local Sightseeing',
    'One-Way Drops',
    'Pilgrimage Tours',
    'VIP Concierge'
  ]
  
  // Quadruple the items to ensure a seamless loop on ultra-wide screens
  const doubled = [...items, ...items, ...items, ...items]

  return (
    <div className="relative bg-slate-900 py-6 overflow-hidden border-y border-white/5">
      
      {/* Premium Glass Fades: Makes text emerge and disappear softly at the edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-900 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-900 to-transparent z-10" />

      <div className="flex whitespace-nowrap">
        <div className="flex animate-marquee hover:pause-marquee cursor-default">
          {doubled.map((item, i) => (
            <div key={i} className="flex items-center group">
              <span className="text-white/70 group-hover:text-amber-500 text-[10px] font-black tracking-[0.35em] uppercase transition-colors duration-500">
                {item}
              </span>
              {/* Sleek Minimalist Divider */}
              <span className="mx-12 text-amber-500/20 font-light text-2xl group-hover:text-amber-500 transition-colors duration-500">
                /
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Global CSS for the animation logic */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 50s linear infinite;
        }
        .pause-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
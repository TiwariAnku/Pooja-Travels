// src/components/Services.jsx

const services = [
  { 
    num: '01', 
    title: 'Corporate Mobility', 
    desc: 'Structured logistics for enterprises—employee transit, priority client transfers, and executive airport dispatch.' 
  },
  { 
    num: '02', 
    title: 'Inter-City Logistics', 
    desc: 'Reliable outstation deployments across Maharashtra and Pan-India, optimized for comfort and timing.' 
  },
  { 
    num: '03', 
    title: 'Airport Concierge', 
    desc: 'Precision pickup and drop-off services with real-time flight telemetry to ensure zero-wait arrivals.' 
  },
  { 
    num: '04', 
    title: 'Elite Event Fleet', 
    desc: 'High-end vehicle coordination for weddings and galas, managed by our most experienced chauffeurs.' 
  },
  { 
    num: '05', 
    title: 'Pilgrimage Heritage', 
    desc: 'Curated itineraries to Shirdi, Pandharpur, and sacred hubs with a focus on peace of mind and safety.' 
  },
  { 
    num: '06', 
    title: 'Custom Local Hire', 
    desc: 'Flexible hourly deployments with professional navigators for city sightseeing or business meetings.' 
  },
]

export default function Services() {
  return (
    <section className="bg-slate-900 py-28 px-6 lg:px-12 relative overflow-hidden">
      
      {/* Structural Background Accents - No more "glow", more "clean lines" */}
      <div className="absolute top-0 right-0 w-[800px] h-[1px] bg-gradient-to-l from-amber-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[1px] bg-gradient-to-r from-amber-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header: Professional & Balanced */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
             <span className="w-8 h-[1px] bg-amber-500" />
             <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">Service Portfolio</span>
             <span className="w-8 h-[1px] bg-amber-500" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Integrated <span className="text-amber-500 italic font-medium">Logistics</span> Solutions
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto text-sm font-medium uppercase tracking-widest opacity-80">
            Professional excellence in transit since 2018
          </p>
        </div>

        {/* Grid: High-End Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-white/5 border border-white/5">
          {services.map((s) => (
            <div
              key={s.num}
              className="bg-slate-900 p-10 group cursor-pointer relative overflow-hidden transition-all duration-500"
            >
              {/* Subtle hover reveal background */}
              <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out opacity-[0.03]" />
              
              {/* Corner Number: Now cleaner and more technical */}
              <div className="text-5xl font-black text-white/[0.03] mb-6 group-hover:text-amber-500/20 transition-all duration-500 tracking-tighter">
                {s.num}
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-500 transition-colors duration-300 tracking-tight">
                {s.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300 font-medium">
                {s.desc}
              </p>

              {/* Functional bottom accent */}
              <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                <span className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">Inquire Now</span>
                <span className="w-6 h-[1px] bg-amber-500" />
              </div>

              {/* Decorative side border on hover */}
              <div className="absolute top-0 left-0 w-[1px] h-0 bg-amber-500 group-hover:h-full transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Support Banner */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-10">
            <div className="flex flex-col items-center sm:items-start">
                <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Standard Response Time</span>
                <span className="text-white font-bold text-lg">Under 15 Minutes</span>
            </div>
            <div className="hidden sm:block w-[1px] h-8 bg-white/10" />
            <div className="flex flex-col items-center sm:items-start">
                <span className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">Coverage Area</span>
                <span className="text-white font-bold text-lg">Pan-India Network</span>
            </div>
        </div>
      </div>
    </section>
  )
}
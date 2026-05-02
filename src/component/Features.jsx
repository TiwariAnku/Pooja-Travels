import { useState } from 'react'

const features = [
  { 
    id: '01',
    icon: '🛡️', 
    title: 'Certified Safety Protocols', 
    desc: 'Beyond standard insurance, our entire fleet undergoes rigorous 50-point safety inspections and daily sanitization cycles.' 
  },
  { 
    id: '02',
    icon: '🧑‍✈️', 
    title: 'Elite Chauffeur Corps', 
    desc: 'Our professionals are not just drivers; they are background-verified concierge experts trained in defensive driving and etiquette.' 
  },
  { 
    id: '03',
    icon: '📍', 
    title: 'Fleet Intelligence', 
    desc: 'Advanced GPS telemetry provides live tracking and encrypted trip-sharing capabilities for enhanced passenger security.' 
  },
  { 
    id: '04',
    icon: '🕐', 
    title: 'Precision Scheduling', 
    desc: 'Our 24/7 operations center ensures 99.9% on-time arrivals, managing real-time flight tracking and traffic rerouting.' 
  },
]

export default function Features() {
  return (
    <section className="bg-slate-50 py-28 px-6 lg:px-12 relative overflow-hidden">
      
      {/* Background brand watermark */}
      <div className="absolute top-10 left-10 text-[15rem] font-black text-slate-100 select-none pointer-events-none leading-none">
        2018
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header: Centered & Authoritative */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-[1px] w-10 bg-amber-500" />
            <span className="text-amber-600 text-xs font-bold tracking-[0.3em] uppercase">
              The Standard of Excellence
            </span>
            <span className="h-[1px] w-10 bg-amber-500" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
            The Pooja Travel <span className="text-amber-500 italic font-medium">Commitment</span>
          </h2>
          <p className="mt-6 text-slate-500 max-w-2xl text-lg font-light">
            Defining premium road travel since 2018 through meticulous maintenance, 
            professional integrity, and technological innovation.
          </p>
        </div>

        {/* Grid: Modern Executive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-white border border-slate-200 rounded-xl p-10 relative
                hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:border-amber-500/30
                transition-all duration-500 ease-in-out hover:-translate-y-2"
            >
              {/* Corner Index Number */}
              <div className="absolute top-6 right-8 text-slate-100 font-black text-4xl group-hover:text-amber-500/10 transition-colors">
                {f.id}
              </div>

              <div className="w-14 h-14 bg-slate-900 rounded-xl flex items-center justify-center text-3xl mb-8 
                group-hover:bg-amber-500 group-hover:rotate-[10deg] transition-all duration-500 shadow-lg shadow-slate-200">
                {f.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                {f.title}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed font-medium opacity-80 group-hover:opacity-100">
                {f.desc}
              </p>

              {/* Bottom Decorative Accent */}
              <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">Read Protocol</span>
                <span className="h-[1px] w-6 bg-amber-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="mt-20 py-10 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
                <div className="flex flex-col">
                    <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Established</span>
                    <span className="text-slate-900 font-bold text-xl">Since 2018</span>
                </div>
                <div className="w-[1px] h-10 bg-slate-200" />
                <div className="flex flex-col">
                    <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Availability</span>
                    <span className="text-slate-900 font-bold text-xl">24/7 Operations</span>
                </div>
            </div>
            <button className="bg-slate-900 text-white px-10 py-4 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-amber-600 transition-all shadow-xl shadow-slate-200">
                View Fleet Specifications
            </button>
        </div>
      </div>
    </section>
  )
}
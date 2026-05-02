import { useState } from 'react'

export default function Hero() {
  const [form, setForm] = useState({
    carType: '', pickup: '', pickupDate: '', pickupTime: '',
    dropDate: '', dropTime: '', name: '', mobile: '', email: ''
  })

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // Clean, high-contrast inputs for a professional business feel
  const inputCls = `w-full bg-white border border-slate-200 text-slate-900 px-4 py-3 text-sm focus:border-amber-500 outline-none transition-all rounded-md font-medium shadow-sm`
  
  const labelCls = `block text-[10px] font-bold text-slate-500 uppercase mb-1 ml-1 tracking-wider`

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden font-sans bg-[#0F172A]">
      
      {/* BACKGROUND IMAGE WITH SOPHISTICATED OVERLAY */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80" 
          className="w-full h-full object-cover opacity-60"
          alt="Luxury travel background"
        />
        {/* Deep navy to transparent gradient */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#0F172A]/90 via-[#0F172A]/60 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 pb-32 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT: PROFESSIONAL BRANDING (7 Cols) */}
        <div className="lg:col-span-7 text-white">
          <div className="flex flex-col items-start mb-8">
            <div className="flex items-center gap-3 mb-4">
               <span className="bg-amber-500 px-3 py-1 rounded text-slate-900 font-bold text-xs uppercase tracking-tighter">Official Helpline</span>
               <div className="text-xl font-bold tracking-tight text-amber-500 font-mono">+91 8879854275</div>
            </div>
            <div className="text-lg font-medium opacity-80">+91 7208328727</div>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold uppercase leading-[1.1] mb-6 drop-shadow-lg">
            POOJA TRAVEL <br />
            <span className="text-amber-500 italic font-medium lowercase normal-case">Executive</span> Logistics<br />
            <span className="text-3xl lg:text-4xl font-light tracking-[0.2em] opacity-90">Established 2018</span>
          </h1>

          <p className="max-w-xl text-lg text-slate-300 leading-relaxed mb-8">
            Providing seamless chauffeur-driven experiences and premium fleet solutions 
            tailored for corporate excellence and discerning private travelers.
          </p>

          {/* THE CAR IMAGE (Moved to left side to balance the form on right) */}
          <div className="relative mt-4 animate-bounce-slow hidden lg:block">
           
          </div>
        </div>

        {/* RIGHT: THE BOOKING FORM (5 Cols) */}
        <div className="lg:col-span-5 bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-100">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Secure Your Journey</h2>
            <p className="text-sm text-slate-500">Professional fleet dispatching in minutes.</p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelCls}>Vehicle Category</label>
                <select name="carType" className={inputCls} onChange={handle}>
                  <option>Prime Sedan</option>
                  <option>Executive SUV</option>
                  <option>Premium Luxury</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Pickup Point</label>
                <input name="pickup" placeholder="City or Address" className={inputCls} onChange={handle} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelCls}>Service Date</label>
                <input name="pickupdate" type="date" className={inputCls} onChange={handle} />
              </div>
              <div>
                <label className={labelCls}>Service Time</label>
                <input name="pickuptime" type="time" className={inputCls} onChange={handle} />
              </div>
            </div>

            <div className="space-y-3 pt-2 border-t border-slate-100">
              <input name="name" placeholder="Full Name" className={inputCls} onChange={handle} />
              <input name="mobile" placeholder="Contact Number" className={inputCls} onChange={handle} />
              <input name="email" placeholder="Email Address (Optional)" className={inputCls} onChange={handle} />
            </div>

            <button className="w-full bg-slate-900 text-white font-bold text-sm tracking-widest uppercase py-5 rounded-lg hover:bg-amber-600 transition-all duration-300 shadow-lg active:scale-[0.98]">
              Confirm Booking Request
            </button>
            <p className="text-[10px] text-center text-slate-400 uppercase tracking-tighter">
              Instant confirmation via WhatsApp & Email
            </p>
          </form>
        </div>
      </div>

      {/* REFINED BRANDED FOOTER CURVE */}
      <div className="absolute bottom-0 left-0 w-full h-24 z-20 pointer-events-none">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full h-full">
          <path d="M0 120L1440 120L1440 40C1440 40 1100 120 720 120C340 120 0 40 0 40L0 120Z" fill="#F59E0B" />
        </svg>
      </div>
    </section>
  )
}
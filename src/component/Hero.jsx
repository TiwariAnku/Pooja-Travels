import { useState } from 'react'

export default function Hero() {
  const [form, setForm] = useState({
    carType: 'Innova Crysta', pickup: '',
    startDate: '', endDate: '', inTime: '', outTime: '',
    name: '', mobile: '', email: ''
  })

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const inputCls = `w-full bg-white border border-slate-200 text-slate-900 px-4 py-3 text-sm focus:border-amber-500 outline-none transition-all rounded-md font-medium shadow-sm`
  const labelCls = `block text-[10px] font-bold text-slate-500 uppercase mb-1 ml-1 tracking-wider`

  const handleBooking = (e) => {
    e.preventDefault()

    const message =
`POOJA TRAVELS
Premium Car Rental Service
GSTIN: 27AICPT7468H1ZP
______________________________

CAB BOOKING FORMAT

Emp Name          : ${form.name || 'N/A'}
Cell No.          : ${form.mobile || 'N/A'}
Pick Up City
& Address         : ${form.pickup || 'N/A'}
Date & Time
of Pick up        : ${form.startDate || 'N/A'} at ${form.inTime || 'N/A'}
Drop City
& Address         : N/A
Date & Time
of drop           : ${form.endDate || 'N/A'} at ${form.outTime || 'N/A'}
Car Type          : ${form.carType}
Remarks           : N/A

______________________________
Chembur, Mumbai - 400 074
Contact : 9594917750 / 9702909087

Kindly confirm the booking at the earliest.
Thank you for choosing Pooja Travels.`

    const encoded = encodeURIComponent(message)
    window.open(`https://wa.me/919594917750?text=${encoded}`, '_blank')
  }

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden font-sans bg-[#0F172A]">
      
      {/* BACKGROUND IMAGE WITH SOPHISTICATED OVERLAY */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&q=80" 
          className="w-full h-full object-cover opacity-40"
          alt="Luxury travel background"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20 pb-32 grid lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT: BRANDING & BUSINESS DETAILS */}
        <div className="lg:col-span-6 text-white">
          <div className="mb-8">
            <span className="bg-amber-500 px-3 py-1 rounded text-slate-900 font-bold text-xs uppercase tracking-wider">
              Car Rental Service
            </span>
            <h1 className="text-6xl lg:text-8xl font-black uppercase leading-none mt-4 text-white">
              POOJA <span className="text-amber-500">TRAVELS</span>
            </h1>
          </div>

          <div className="space-y-4 text-slate-300 text-sm">
            <a
              href="https://maps.google.com/?q=Room+No.+194,+Vishnu+Nagar+Society,+L.U.+Gadkari+Marg,+Chembur,+Mumbai-400074"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 max-w-md hover:text-amber-400 transition-colors"
            >
              <span className="text-amber-500 font-bold">📍</span>
              <p>Room No. 194, Vishnu Nagar Society, L.U. Gadkari Marg, Chembur, Mumbai-400 074</p>
            </a>
            <div className="flex flex-wrap gap-6 items-center">
              <div className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">📞</span>
                <div className="flex gap-2 font-mono text-lg">
                  <a href="tel:+919594917750" className="text-white hover:text-amber-400 transition-colors">9594917750</a>
                  <span>/</span>
                  <a href="tel:+919702909087" className="text-white hover:text-amber-400 transition-colors">9702909087</a>
                </div>
              </div>
              <div className="flex items-center gap-2 border-l border-white/20 pl-6">
                <span className="text-amber-500 font-bold">✉️</span>
                <a href="mailto:poojatravels111@gmail.com" className="hover:text-amber-400 transition-colors">
                  poojatravels111@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: THE BOOKING FORM — compact horizontal layout */}
        <div className="lg:col-span-6 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-slate-900">Cab Booking Format</h2>
            <p className="text-xs text-slate-500">GST Registered · GSTIN: 27AICPT7468H1ZP</p>
          </div>

          <form className="space-y-3" onSubmit={handleBooking}>

            {/* Row 1: Emp Name + Cell No */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelCls}>Emp Name</label>
                <input name="name" placeholder="Full Name" className={inputCls} onChange={handle} />
              </div>
              <div>
                <label className={labelCls}>Cell No.</label>
                <input name="mobile" placeholder="Mobile Number" className={inputCls} onChange={handle} />
              </div>
            </div>

            {/* Row 2: Pickup Address */}
            <div>
              <label className={labelCls}>Pick Up City & Address</label>
              <input name="pickup" placeholder="e.g. B1002, Ravechi Heights, Kharghar, Navi Mumbai" className={inputCls} onChange={handle} />
            </div>

            {/* Row 3: Pickup Date + Pickup Time */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelCls}>Date of Pick Up</label>
                <input name="startDate" type="date" className={inputCls} onChange={handle} />
              </div>
              <div>
                <label className={labelCls}>Time of Pick Up</label>
                <input name="inTime" type="time" className={inputCls} onChange={handle} />
              </div>
            </div>

            {/* Row 4: Drop Address */}
            <div>
              <label className={labelCls}>Drop City & Address</label>
              <input name="endDate" placeholder="e.g. Pune site visits and back to Kharghar" className={inputCls} onChange={handle} />
            </div>

            {/* Row 5: Drop Date + Car Type */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className={labelCls}>Date of Drop</label>
                <input name="outTime" type="date" className={inputCls} onChange={handle} />
              </div>
              <div>
                <label className={labelCls}>Car Type</label>
                <select name="carType" className={inputCls} onChange={handle}>
                  <option>Innova Crysta</option>
                  <option>Innova</option>
                  <option>Etios</option>
                  <option>D'zire</option>
                  <option>Prime Sedan</option>
                  <option>Executive SUV</option>
                </select>
              </div>
            </div>

            {/* Row 6: Remarks */}
            <div>
              <label className={labelCls}>Remarks / Specific Requirements</label>
              <input name="email" placeholder="Cab at disposal / 1st pick / 2nd pick up person details, cell no. etc." className={inputCls} onChange={handle} />
            </div>

            <button
              type="submit"
              className="w-full bg-slate-900 text-white font-bold text-sm tracking-widest uppercase py-4 rounded-lg hover:bg-amber-600 transition-all duration-300 shadow-lg active:scale-[0.98]"
            >
              Send Booking via WhatsApp
            </button>
            
            <div className="flex justify-between items-center px-1">
              <p className="text-[10px] text-slate-400 uppercase font-bold">GSTIN: 27AICPT7468H1ZP</p>
              <p className="text-[10px] text-slate-400 uppercase font-bold">Mumbai-400 074</p>
            </div>
          </form>
        </div>
      </div>

      {/* BRANDED FOOTER CURVE */}
      <div className="absolute bottom-0 left-0 w-full h-16 z-20 pointer-events-none">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full h-full">
          <path d="M0 120L1440 120L1440 40C1440 40 1100 120 720 120C340 120 0 40 0 40L0 120Z" fill="#F59E0B" />
        </svg>
      </div>
    </section>
  )
}
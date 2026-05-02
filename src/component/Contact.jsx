import { useState } from 'react'

const contactItems = [
  { icon: '📞', label: 'Primary Contact', value: '+91 88798 54275' },
  { icon: '✉️', label: 'Dispatch Email', value: 'info@poojatravel.com' },
  { icon: '📍', label: 'Headquarters', value: 'Pune, Maharashtra, India' },
  { icon: '🕐', label: 'Operations', value: '24/7 Executive Support' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', date: '', message: '' })
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  // Sophisticated input style matching the Hero section
  const inputCls = `w-full bg-slate-50 border border-slate-200 focus:border-amber-500 text-slate-900 
    px-4 py-3 text-sm outline-none transition-all duration-300 rounded-md font-medium shadow-sm`
  
  const labelCls = `block text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-2 ml-1`

  return (
    <section className="bg-white py-24 px-6 lg:px-12 relative overflow-hidden">
      
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-20 z-0 hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.4fr] gap-16 items-start">

        {/* LEFT: CORPORATE IDENTITY */}
        <div>
          <div className="inline-flex items-center gap-2 mb-4">
             <span className="w-8 h-[1px] bg-amber-500" />
             <span className="text-amber-600 text-xs font-bold tracking-[0.2em] uppercase">Connect with Us</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
            Elite Fleet Dispatch &<br />
            <span className="text-amber-500 italic font-medium lowercase normal-case">Concierge</span> Support
          </h2>
          
          <p className="text-slate-500 text-base leading-relaxed mb-12 max-w-md">
            Established in 2018, Pooja Travel provides high-tier logistics for corporate and private clients. 
            Our dispatch team is available around the clock to manage your itinerary.
          </p>

          <div className="grid sm:grid-cols-2 gap-8 lg:grid-cols-1">
            {contactItems.map(item => (
              <div key={item.label} className="group flex gap-5 items-start">
                <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-amber-500 transition-colors duration-500 shadow-lg shadow-slate-200">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-amber-600 mb-1">{item.label}</div>
                  <div className="text-slate-900 font-bold text-base tracking-tight">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: INQUIRY PORTAL */}
        <div className="bg-white rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 p-8 lg:p-12 relative">
          <div className="absolute top-0 left-0 w-full h-1.5 bg-amber-500 rounded-t-2xl" />
          
          <div className="mb-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Service Inquiry</h3>
            <p className="text-sm text-slate-400">Request a custom quote for your upcoming journey.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelCls}>Client Name</label>
                <input name="name" value={form.name} onChange={handle}
                  type="text" placeholder="Full name" className={inputCls} />
              </div>
              <div>
                <label className={labelCls}>Mobile Number</label>
                <input name="phone" value={form.phone} onChange={handle}
                  type="tel" placeholder="+91" className={inputCls} />
              </div>
            </div>

            <div>
              <label className={labelCls}>Professional Email</label>
              <input name="email" value={form.email} onChange={handle}
                type="email" placeholder="email@address.com" className={inputCls} />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className={labelCls}>Logistics Type</label>
                <select name="service" value={form.service} onChange={handle} className={inputCls}>
                  <option value="">Choose Service</option>
                  <option>Airport Executive Transfer</option>
                  <option>Inter-City Logistics</option>
                  <option>Corporate Fleet Management</option>
                  <option>VIP Event Support</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Deployment Date</label>
                <input name="date" value={form.date} onChange={handle}
                  type="date" className={inputCls} />
              </div>
            </div>

            <div>
              <label className={labelCls}>Additional Requirements</label>
              <textarea name="message" value={form.message} onChange={handle}
                rows={3} placeholder="Itinerary details, specific vehicle requests..."
                className={inputCls + ' resize-none'} />
            </div>

            <button className="w-full bg-slate-900 text-white font-bold text-xs tracking-[0.2em] uppercase py-5 rounded-lg
              hover:bg-amber-600 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-200 transition-all duration-500 active:scale-95 shadow-xl shadow-slate-200">
              Submit Request →
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
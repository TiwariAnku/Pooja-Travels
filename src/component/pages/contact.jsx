import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Building2, 
  ShieldCheck, 
  Send, 
  MessageSquare, 
  Car, 
  Info
} from 'lucide-react';

const fleetRates = [
  { type: 'Swift Dzire / Toyota Etios', apt: '1,500', fullDay: '2,000', exKm: '14', exHr: '150', outstation: '14', da: '400' },
  { type: 'Innova / Ertiga or Similar', apt: '1,800', fullDay: '2,600', exKm: '16', exHr: '180', outstation: '16', da: '400' },
  { type: 'Innova Crysta', apt: '2,000', fullDay: '3,000', exKm: '20', exHr: '250', outstation: '20', da: '400' },
  { type: 'Honda City / Sunny Nissan', apt: '1,800', fullDay: '2,600', exKm: '18', exHr: '200', outstation: '18', da: '400' },
  { type: 'Innova Hycross', apt: '2500', fullDay: '4000', exKm: '30', exHr: '300', outstation: '30', da: '500' }
];

export default function ContactUs() {
  const [formType, setFormType] = useState('corporate');
  const [focusedInput, setFocusedInput] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    // 1. Define target WhatsApp number (Country code 91 + number, no spaces/special chars)
    const whatsappNumber = "919594917750"; 

    // 2. Build the structured text message
    let messageText = `*New Booking Request (${formType.toUpperCase()})*\n`;
    messageText += `----------------------------------\n`;
    messageText += `👤 *Name:* ${formData.name}\n`;
    messageText += `📞 *Phone:* ${formData.phone}\n`;
    messageText += `📧 *Email:* ${formData.email}\n`;
    
    if (formType === 'corporate' && formData.company) {
      messageText += `🏢 *Company:* ${formData.company}\n`;
    }
    
    messageText += `📝 *Scope:* ${formData.message}`;

    // 3. URL encode the text to make it safe for URLs
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    // 4. Handle smooth UI transitions before redirecting
    setTimeout(() => {
      window.open(whatsappUrl, '_blank'); // Opens WhatsApp in a new tab
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    }, 1000);
  };

  return (
    <div className="bg-[#0f1115] text-white min-h-screen font-sans overflow-x-hidden selection:bg-amber-500 selection:text-black relative">
      
      {/* Premium Backdrop Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-20 left-[-10%] w-[700px] h-[700px] bg-amber-500/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-32 pb-24 relative z-10">
        
        {/* HEADER SECTION */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-amber-500" />
            <span className="text-amber-500 text-[10px] font-black tracking-[0.4em] uppercase">Secured Channels</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-light tracking-tight leading-none mb-6">
            Initiate Secure <br />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40">
              Communications
            </span>
          </h1>
          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed max-w-xl">
            Connect directly with our 24/7 centralized priority logistics hub. View standard transit tariffs or dispatch custom RFPs instantly.
          </p>
        </div>

        {/* MAIN 3-COLUMN STRUCTURAL LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: CRITICAL DIRECT HOTLINES */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-2xl bg-[#13161c] border border-white/[0.04] space-y-6 shadow-2xl">
              <h3 className="text-xs uppercase tracking-widest text-slate-500 font-black mb-4">Direct Dispatch Hotlines</h3>
              
              <a href="tel:+919594917750" className="flex items-start gap-4 group block">
                <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block mb-0.5">Primary Logistics desk</span>
                  <span className="text-white font-bold tracking-tight group-hover:text-amber-500 transition-colors">+91 95949 17750</span>
                </div>
              </a>

              <a href="tel:+919967477411" className="flex items-start gap-4 group block pt-4 border-t border-white/[0.03]">
                <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block mb-0.5">Secondary Support desk</span>
                  <span className="text-white font-bold tracking-tight group-hover:text-amber-500 transition-colors">+91 996747 7411</span>
                </div>
              </a>

              <a href="mailto:poojatravels111@gmail.com" className="flex items-start gap-4 group block pt-4 border-t border-white/[0.03]">
                <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider block mb-0.5">Procurement & RFPs</span>
                  <span className="text-white text-sm font-bold tracking-tight group-hover:text-blue-400 transition-colors break-all">poojatravels111@gmail.com</span>
                </div>
              </a>
            </div>

            {/* Regional HQ Operating Hubs */}
            <div className="p-6 rounded-2xl bg-gradient-to-b from-white/[0.01] to-transparent border border-white/[0.03]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xs uppercase tracking-widest text-slate-500 font-black">Central Transit Corridors</h3>
                <span className="px-2 py-0.5 rounded text-[8px] font-black bg-emerald-500/10 text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse" /> Live Hub
                </span>
              </div>

              <div className="space-y-4 text-sm font-light text-slate-300">
                <div className="flex gap-3">
                  <MapPin size={16} className="text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white font-medium block text-xs uppercase tracking-wider">Mumbai Head Operations</strong>
                    <p className="text-xs text-slate-400 mt-0.5">Prime executive terminal transit networks & fleet logistics control.</p>
                  </div>
                </div>
                <div className="flex gap-3 pt-3 border-t border-white/[0.02]">
                  <Clock size={16} className="text-slate-500 shrink-0 mt-0.5" />
                  <p className="text-xs font-medium">Standard SLA Window: <span className="text-amber-500">Under 7 Minutes</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE COLUMN: SECURE ROUTING PORTAL FORM */}
          <div className="lg:col-span-4">
            <div className="p-6 rounded-2xl bg-[#13161c] border border-white/[0.04] shadow-2xl relative">
              <div className="flex gap-2 mb-6 bg-black/40 p-1 rounded-xl border border-white/[0.02]">
                <button
                  type="button"
                  onClick={() => setFormType('corporate')}
                  className={`flex-1 py-2 rounded-lg text-[9px] font-black tracking-widest uppercase transition-all flex items-center justify-center gap-1.5 ${
                    formType === 'corporate' ? 'bg-amber-500 text-black shadow-lg' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Building2 size={11} /> Corporate
                </button>
                <button
                  type="button"
                  onClick={() => setFormType('general')}
                  className={`flex-1 py-2 rounded-lg text-[9px] font-black tracking-widest uppercase transition-all flex items-center justify-center gap-1.5 ${
                    formType === 'general' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <MessageSquare size={11} /> General Booking
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-[9px] uppercase tracking-widest font-black text-slate-500 block mb-1.5">Authorized Full Name</label>
                  <input 
                    type="text" required value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    onFocus={() => setFocusedInput('name')} onBlur={() => setFocusedInput(null)}
                    className={`w-full bg-black/40 border rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none transition-all ${focusedInput === 'name' ? 'border-amber-500/50 bg-black/60 shadow-lg' : 'border-white/5'}`}
                    placeholder="e.g., Anirudh Sharma"
                  />
                </div>

                <div>
                  <label className="text-[9px] uppercase tracking-widest font-black text-slate-500 block mb-1.5">Direct Contact Vector</label>
                  <input 
                    type="tel" required value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    onFocus={() => setFocusedInput('phone')} onBlur={() => setFocusedInput(null)}
                    className={`w-full bg-black/40 border rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none transition-all ${focusedInput === 'phone' ? 'border-amber-500/50 bg-black/60 shadow-lg' : 'border-white/5'}`}
                    placeholder="+91 95949 XXXXX"
                  />
                </div>

                <div>
                  <label className="text-[9px] uppercase tracking-widest font-black text-slate-500 block mb-1.5">Official Email Address</label>
                  <input 
                    type="email" required value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    onFocus={() => setFocusedInput('email')} onBlur={() => setFocusedInput(null)}
                    className={`w-full bg-black/40 border rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none transition-all ${focusedInput === 'email' ? 'border-amber-500/50 bg-black/60 shadow-lg' : 'border-white/5'}`}
                    placeholder="name@company.com"
                  />
                </div>

                <AnimatePresence mode="popLayout">
                  {formType === 'corporate' && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
                      <label className="text-[9px] uppercase tracking-widest font-black text-slate-500 block mb-1.5">Corporate Entity</label>
                      <input 
                        type="text" required={formType === 'corporate'} value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        onFocus={() => setFocusedInput('company')} onBlur={() => setFocusedInput(null)}
                        className={`w-full bg-black/40 border rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none transition-all ${focusedInput === 'company' ? 'border-amber-500/50 bg-black/60' : 'border-white/5'}`}
                        placeholder="Enterprise registered name"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div>
                  <label className="text-[9px] uppercase tracking-widest font-black text-slate-500 block mb-1.5">Logistical Scope</label>
                  <textarea 
                    rows={3} required value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    onFocus={() => setFocusedInput('message')} onBlur={() => setFocusedInput(null)}
                    className={`w-full bg-black/40 border rounded-xl px-3 py-2.5 text-xs text-white focus:outline-none transition-all resize-none ${focusedInput === 'message' ? 'border-amber-500/50 bg-black/60' : 'border-white/5'}`}
                    placeholder="Outline routes, vehicle preferences, timeline specs..."
                  />
                </div>

                <button 
                  type="submit" disabled={isSubmitted}
                  className={`w-full py-3.5 rounded-xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-all duration-300 ${
                    isSubmitted ? 'bg-emerald-500 text-black' : formType === 'corporate' ? 'bg-white text-black hover:bg-amber-500' : 'bg-blue-600 text-white hover:bg-blue-500'
                  }`}
                >
                  {isSubmitted ? <>Connecting Dispatch Systems...</> : <><Send size={11} /> Transmit Request</>}
                </button>
              </form>

              <div className="mt-4 pt-4 border-t border-white/[0.03] flex items-center justify-between text-[8px] text-slate-500 font-bold uppercase tracking-widest">
                <span className="flex items-center gap-1 text-slate-400">
                  <ShieldCheck size={11} className="text-amber-500" /> Secure Protocol
                </span>
                <span>Est. 2008</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: HIGH-END DIGITAL RATE CARD (MUMBAI REGION) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-6 rounded-2xl bg-[#13161c] border border-white/[0.04] shadow-2xl relative overflow-hidden">
              
              {/* Header inside Card */}
              <div className="flex items-center justify-between border-b border-white/[0.04] pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                    <Car size={14} />
                  </div>
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wider text-white">Mumbai Tariff Index</h3>
                    <span className="text-[9px] text-slate-500 block font-semibold uppercase tracking-tight">Pooja Travels Rate Card</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[8px] font-black bg-blue-500/10 text-blue-400 border border-blue-500/10 uppercase tracking-widest">
                  2026/27 Live
                </span>
              </div>

              {/* Grid-based Content Layout for Luxury UI Scannability */}
              <div className="space-y-4 max-h-[460px] overflow-y-auto pr-1 custom-scrollbar">
                {fleetRates.map((fleet, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-black/30 border border-white/[0.02] hover:border-amber-500/20 transition-all group">
                    <div className="flex items-center justify-between mb-2.5">
                      <h4 className="text-xs font-bold text-amber-400 group-hover:text-white transition-colors">{fleet.type}</h4>
                    </div>
                    
                    {/* Local Use Specs */}
                    <div className="grid grid-cols-2 gap-2 border-b border-white/[0.03] pb-2 mb-2 text-[10px]">
                      <div>
                        <span className="text-slate-500 block uppercase text-[8px] font-black tracking-wider">PickUp / Drop (4h / 40km)</span>
                        <span className="text-white font-medium">₹ {fleet.apt}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block uppercase text-[8px] font-black tracking-wider">Full Day (8h / 80km)</span>
                        <span className="text-white font-medium">₹ {fleet.fullDay}</span>
                      </div>
                    </div>

                    {/* Outstation Specs */}
                    <div className="grid grid-cols-4 gap-1 text-[10px]">
                      <div>
                        <span className="text-slate-500 block text-[7px] uppercase font-bold">Ex / Km</span>
                        <span className="text-slate-300 font-semibold">₹{fleet.exKm}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[7px] uppercase font-bold">Ex / Hr</span>
                        <span className="text-slate-300 font-semibold">₹{fleet.exHr}</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[7px] uppercase font-bold">Out (Min 300)</span>
                        <span className="text-blue-400 font-semibold">₹{fleet.outstation}/km</span>
                      </div>
                      <div>
                        <span className="text-slate-500 block text-[7px] uppercase font-bold">DA / Day</span>
                        <span className="text-slate-300 font-semibold">₹{fleet.da}</span>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

              {/* Informative Note Footer */}
              <div className="mt-4 p-3 bg-white/[0.01] border border-white/5 rounded-xl flex items-start gap-2.5">
                <Info size={12} className="text-slate-400 shrink-0 mt-0.5" />
                <b> <p  className="text-[9px] text-slate-400 leading-normal font-light">
                    Negotiable Scaling Baselines.               </p> </b>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
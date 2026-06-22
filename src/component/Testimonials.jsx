import React from 'react';

const fleet = [
  {
    category: 'Executive Sedan',
    model: 'BMW 5 Series / Mercedes E-Class',
    capacity: '4+1 Seater',
    features: ['Leather Interior', 'Climate Control', 'Wifi'],
    image: '/path-to-sedan.jpg'
  },
  {
    category: 'Luxury SUV',
    model: 'Toyota Innova Hycross',
    capacity: '6+1 Seater',
    features: ['Ample Legroom', 'Captain Seats', 'Premium Audio'],
    image: '/path-to-suv.jpg'
  }
];

export default function FleetSection() {
  return (
    <section className="bg-[#0A1128] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[#FF9F1C] font-bold tracking-widest uppercase text-sm mb-3">Our Elite Fleet</h2>
            <h3 className="text-white text-4xl lg:text-5xl font-extrabold leading-tight">
              Premium Vehicles for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 italic">Corporate Excellence.</span>
            </h3>
          </div>
          <button className="bg-[#FF9F1C] hover:bg-[#e88f19] text-[#0A1128] font-bold px-8 py-4 rounded-md transition-all duration-300 uppercase text-xs tracking-widest">
            View Full Fleet
          </button>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {fleet.map((car, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-2xl bg-gradient-to-b from-[#151D35] to-[#0A1128] border border-white/5 p-1 transition-all">
              <div className="flex flex-col md:flex-row gap-6 p-6">
                
                {/* Vehicle Specs */}
                <div className="flex-1 order-2 md:order-1">
                  <div className="inline-block px-3 py-1 bg-[#FF9F1C]/10 text-[#FF9F1C] text-[10px] font-bold uppercase tracking-widest rounded mb-4">
                    {car.category}
                  </div>
                  <h4 className="text-white text-2xl font-bold mb-2">{car.model}</h4>
                  <p className="text-gray-400 text-sm mb-6">{car.capacity}</p>
                  
                  <ul className="space-y-2">
                    {car.features.map((feat, i) => (
                      <li key={i} className="flex items-center text-gray-300 text-sm">
                        <span className="w-1.5 h-1.5 bg-[#FF9F1C] rounded-full mr-3"></span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual Placeholder (Replace with vehicle images) */}
                <div className="flex-1 h-48 md:h-auto bg-[#1A243F] rounded-xl overflow-hidden order-1 md:order-2 border border-white/5 relative">
                   <div className="absolute inset-0 bg-gradient-to-tr from-[#0A1128]/80 to-transparent z-10"></div>
                   <div className="flex items-center justify-center h-full text-white/10 font-black text-4xl italic uppercase">
                     Pooja Travel
                   </div>
                </div>
              </div>

              {/* Hover Effect Bottom Border */}
              <div className="h-1 w-0 group-hover:w-full bg-[#FF9F1C] transition-all duration-500 absolute bottom-0 left-0"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
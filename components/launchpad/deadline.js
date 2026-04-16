import React from 'react';
import { CalendarDays, Hourglass, ArrowRight } from 'lucide-react';

const CompetitionsTimeline = () => {
  const competitions = [
    {
      name: 'Blue Ocean Competition',
      // Since I cannot use the actual image, I'll use a placeholder URL and descriptive Alt Text
      logoSrc: '/api/placeholder/180/60', 
      logoAlt: 'Blue Ocean Competition Logo',
      reg: 'Open for 2027',
      deadline: '22 Feb 2026',
      status: 'upcoming'
    },
    {
      name: 'Conrad Challenge',
      logoSrc: '/api/placeholder/180/60',
      logoAlt: 'Conrad Challenge Logo',
      reg: 'Aug – Sep 2026 (Expected)',
      deadline: 'Nov 2026 (Expected)',
      status: 'upcoming'
    },
    {
      name: 'Ashoka Young Changemakers',
      logoSrc: '/api/placeholder/180/60',
      logoAlt: 'Ashoka Young Changemakers Logo',
      reg: 'Typically Rolling',
      deadline: 'Not Specified (Rolling)',
      status: 'rolling'
    },
    {
      name: 'Varkey Foundation',
      logoSrc: '/api/placeholder/180/60',
      logoAlt: 'Varkey Foundation Logo',
      reg: 'Typically Mid-Year (May – June)',
      deadline: 'July – August (Expected)',
      status: 'upcoming'
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Modern Headline with Shimmer Accent (Matches premium theme) */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
             <h2 className="text-4xl md:text-5xl font-black text-[#011B3E] leading-tight uppercase tracking-tighter">
              Competitions <br /> <span className="bg-gradient-to-r from-[#011B3E] via-[#012E6A] to-[#011B3E] bg-clip-text text-transparent">Covered & Deadlines</span>
            </h2>
            <div className="w-20 h-2 bg-[#FFD700] mt-4 rounded-full"></div>
          </div>
          <div className="flex items-center gap-3 bg-[#011B3E] text-white px-5 py-3 rounded-xl font-bold text-sm tracking-widest uppercase shadow-lg">
             <CalendarDays className="w-5 h-5 text-[#FFD700]" /> Cycle Dashboard
          </div>
        </div>

        {/* The Timeline Hub */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Subtle connecting line (aesthetic only) */}
          <div className="hidden lg:block absolute left-4 right-4 top-1/2 -translate-y-1/2 h-0.5 bg-gray-100 -z-10 rounded-full"></div>

          {competitions.map((item, index) => (
            <div 
              key={index}
              className="relative group bg-white/60 p-8 rounded-[32px] border border-gray-100 hover:border-[#FFD700] backdrop-blur-sm transition-all duration-300 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-2xl hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Index Badge */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-[#011B3E] text-white flex items-center justify-center font-black text-xl border-4 border-white z-10 group-hover:bg-[#FFD700] group-hover:text-[#011B3E] transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Logo Area (Matches premium style) */}
              <div className="bg-[#F9FAFB] rounded-2xl h-24 flex items-center justify-center mb-8 p-4 border border-gray-100 transition duration-300 group-hover:bg-white">
                <img 
                  src={item.logoSrc} 
                  alt={item.logoAlt}
                  className="max-h-16 max-w-full object-contain grayscale transition duration-300 group-hover:grayscale-0"
                />
              </div>

              {/* Deadline Details (Using icons for scannability) */}
              <div className="space-y-6 flex-grow">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-[#FFF9E6] transition duration-300">
                     <Hourglass className="w-4 h-4 text-gray-400 group-hover:text-[#011B3E] transition duration-300" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Registration</span>
                    <p className="text-base font-semibold text-[#011B3E] leading-relaxed mt-0.5">{item.reg}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-[#FFF9E6] transition duration-300">
                     <CalendarDays className="w-4 h-4 text-gray-400 group-hover:text-[#011B3E] transition duration-300" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Application Deadline</span>
                    <p className={`text-base font-bold leading-relaxed mt-0.5 ${item.status === 'upcoming' ? 'text-[#011B3E]' : 'text-zinc-500'}`}>
                       {item.deadline}
                    </p>
                  </div>
                </div>
              </div>

               {/* Hover Accent (matches premium interactive feel) */}
               <ArrowRight className="absolute bottom-6 right-6 w-8 h-8 text-[#FFD700] opacity-0 group-hover:opacity-100 transition duration-300 -translate-x-2 group-hover:translate-x-0" />
            </div>
          ))}
        </div>

        {/* Animated Footer Note (Matchespremium interaction style) */}
        <div className="mt-16 bg-[#011B3E] rounded-[32px] p-8 md:p-12 text-white relative overflow-hidden transition-transform hover:scale-[1.01]">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700] opacity-10 rounded-full -mr-20 -mt-20"></div>
          <p className="relative z-10 text-xl font-medium leading-relaxed max-w-4xl italic">
            There are several <span className="text-[#FFD700] font-bold">additional competitions and awards</span> we can explore; we'll discuss these in detail during your strategy call based on your interests.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CompetitionsTimeline;
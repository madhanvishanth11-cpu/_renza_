import React, { useEffect, useRef, useState } from 'react';
import { Search, Settings, CheckCircle2 } from 'lucide-react';

// Lightweight Intersection Observer hook for scroll reveal animations
function useScrollReveal() {
  const [revealed, setRevealed] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, revealed];
}

export default function HowItWorks() {
  const [headerRef, headerRevealed] = useScrollReveal();
  const [journeyRef, journeyRevealed] = useScrollReveal();

  return (
    <section style={{ scrollMarginTop: '84px' }} className="w-full bg-[#0A0A0A] py-20 lg:py-32" id="how-it-works">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        
        {/* =========================================================================
            SECTION HEADER
           ========================================================================= */}
        <div 
          ref={headerRef}
          className={`text-left md:text-center mx-auto mb-20 lg:mb-32 max-w-[800px] flex flex-col items-start md:items-center transition-all duration-1000 transform ${
            headerRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00D2C4]/10 border border-[#00D2C4]/20 text-[#00D2C4] text-[11px] font-black tracking-widest uppercase mb-6 backdrop-blur-sm">
            How RENZA Works
          </span>
          <h2 className="font-sans font-black text-4xl md:text-6xl lg:text-[72px] text-white tracking-tight leading-[1.05] mb-8 drop-shadow-lg">
            From a Problem to a <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2C4] to-[#00f2e1]">Solved Outcome.</span>
          </h2>
          <p className="text-neutral-400 text-lg md:text-xl font-medium leading-relaxed max-w-[600px]">
            Tell RENZA what you need. We manage the service experience so you can focus on your day.
          </p>
        </div>

        {/* =========================================================================
            3-STEP FLOATING TIMELINE (NO CARDS)
           ========================================================================= */}
        <div 
          ref={journeyRef}
          className={`relative transition-all duration-1000 delay-200 transform ${
            journeyRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
        >
          {/* Subtle Background Glow connecting the entire journey */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[100px] bg-[#00D2C4]/5 rounded-full blur-[100px] pointer-events-none hidden lg:block" />

          {/* Horizontal Connecting Line (Desktop Only) */}
          <div className="absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-neutral-800 z-0 hidden lg:block">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-[#00D2C4]/40 to-transparent" />
          </div>

          {/* Vertical Connecting Line (Mobile/Tablet Only) */}
          <div className="absolute left-[39px] top-[40px] bottom-[40px] w-[1px] bg-neutral-800 z-0 lg:hidden">
             <div className="w-full h-full bg-gradient-to-b from-transparent via-[#00D2C4]/40 to-transparent" />
          </div>

          {/* Layout of Steps */}
          <div className="flex flex-col lg:grid lg:grid-cols-3 gap-16 lg:gap-8 relative z-10">
            
            {/* STEP 1 */}
            <div className="relative flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group cursor-pointer w-full">
              {/* Massive faded background number for visual hierarchy */}
              <div className="absolute -top-10 lg:-top-16 lg:left-1/2 lg:-translate-x-1/2 text-[80px] lg:text-[120px] font-black text-white/[0.03] select-none pointer-events-none group-hover:text-[#00D2C4]/[0.05] transition-colors duration-500">
                01
              </div>

              {/* Step Marker */}
              <div className="flex-shrink-0 w-[80px] h-[80px] lg:mb-12 rounded-full bg-[#111] flex items-center justify-center border border-neutral-800 z-20 group-hover:border-[#00D2C4]/50 group-hover:shadow-[0_0_30px_rgba(0,210,196,0.15)] transition-all duration-500 relative">
                <Search size={28} strokeWidth={2} className="text-white group-hover:text-[#00D2C4] transition-colors duration-500" />
                {/* Active Indicator dot */}
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#00D2C4] rounded-full border-[3px] border-[#0A0A0A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Content */}
              <div className="ml-8 lg:ml-0 flex-1 w-full pt-2 lg:pt-0 group-hover:-translate-y-2 transition-transform duration-500">
                <h3 className="font-sans font-black text-2xl md:text-3xl text-white mb-4 drop-shadow-md">Tell RENZA</h3>
                <p className="text-neutral-400 text-base md:text-lg font-medium leading-relaxed">
                  You have a need. Simply choose what you need help with in the RENZA app. For example: "My floor needs cleaning."
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="relative flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group cursor-pointer w-full">
              <div className="absolute -top-10 lg:-top-16 lg:left-1/2 lg:-translate-x-1/2 text-[80px] lg:text-[120px] font-black text-white/[0.03] select-none pointer-events-none group-hover:text-[#00D2C4]/[0.05] transition-colors duration-500">
                02
              </div>

              <div className="flex-shrink-0 w-[80px] h-[80px] lg:mb-12 rounded-full bg-[#111] flex items-center justify-center border border-neutral-800 z-20 group-hover:border-[#00D2C4]/50 group-hover:shadow-[0_0_30px_rgba(0,210,196,0.15)] transition-all duration-500 relative">
                <Settings size={28} strokeWidth={2} className="text-white group-hover:text-[#00D2C4] transition-colors duration-500" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#00D2C4] rounded-full border-[3px] border-[#0A0A0A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="ml-8 lg:ml-0 flex-1 w-full pt-2 lg:pt-0 group-hover:-translate-y-2 transition-transform duration-500">
                <h3 className="font-sans font-black text-2xl md:text-3xl text-white mb-4 drop-shadow-md">RENZA Handles It</h3>
                <p className="text-neutral-400 text-base md:text-lg font-medium leading-relaxed">
                  We manage the entire service experience, coordinating the workforce, ensuring quality standards, and providing clear pricing.
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="relative flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group cursor-pointer w-full">
              <div className="absolute -top-10 lg:-top-16 lg:left-1/2 lg:-translate-x-1/2 text-[80px] lg:text-[120px] font-black text-white/[0.03] select-none pointer-events-none group-hover:text-[#00D2C4]/[0.05] transition-colors duration-500">
                03
              </div>

              {/* The final step has a permanently active highlight state to signify completion */}
              <div className="flex-shrink-0 w-[80px] h-[80px] lg:mb-12 rounded-full bg-[#111] flex items-center justify-center border border-[#00D2C4]/50 shadow-[0_0_20px_rgba(0,210,196,0.1)] z-20 group-hover:shadow-[0_0_40px_rgba(0,210,196,0.25)] transition-all duration-500 relative">
                <CheckCircle2 size={28} strokeWidth={2} className="text-[#00D2C4]" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#00D2C4] rounded-full border-[3px] border-[#0A0A0A]" />
              </div>
              
              <div className="ml-8 lg:ml-0 flex-1 w-full pt-2 lg:pt-0 group-hover:-translate-y-2 transition-transform duration-500">
                <h3 className="font-sans font-black text-2xl md:text-3xl text-white mb-4 drop-shadow-md">Problem Handled</h3>
                <p className="text-neutral-400 text-base md:text-lg font-medium leading-relaxed">
                  The job is successfully completed. Your floor is cleaned, and you can get back to focusing on your day.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

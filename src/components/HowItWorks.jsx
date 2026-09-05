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
    <section style={{ scrollMarginTop: '84px' }} className="w-full bg-[#F7F7F5] dark:bg-bg-light transition-colors duration-300 py-16 lg:py-24 border-t border-gray-250/60" id="how-it-works">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* =========================================================================
            SECTION HEADER
           ========================================================================= */}
        <div 
          ref={headerRef}
          className={`text-center mx-auto mb-16 lg:mb-24 max-w-[700px] flex flex-col items-center transition-all duration-700 transform ${
            headerRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#00D2C4]/15 border border-[#00D2C4]/30 text-[#00D2C4] text-xs font-black tracking-widest uppercase mb-6 shadow-sm">
            How RENZA Works
          </span>
          <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl text-text-dark tracking-tight leading-[1.15] mb-6">
            From a Problem to a <br className="hidden sm:block" />
            <span className="text-[#00D2C4]">Solved Outcome.</span>
          </h2>
          <p className="text-text-secondary text-base md:text-lg font-medium leading-relaxed max-w-[560px]">
            Tell RENZA what you need. We manage the service experience so you can focus on your day.
          </p>
        </div>

        {/* =========================================================================
            3-STEP JOURNEY
           ========================================================================= */}
        <div 
          ref={journeyRef}
          className={`relative transition-all duration-1000 transform ${
            journeyRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Horizontal Line behind nodes (Desktop Only) */}
          <div className="absolute top-[36px] left-[15%] right-[15%] h-[2px] bg-gray-200 dark:bg-neutral-800 z-0 hidden lg:block">
            <div className="w-full h-full bg-[#00D2C4]/30" />
          </div>

          {/* Vertical connecting line for Mobile/Tablet layout */}
          <div className="absolute left-[35px] top-[36px] bottom-[36px] w-[2px] bg-gray-200 dark:bg-neutral-800 z-0 lg:hidden">
             <div className="w-full h-full bg-[#00D2C4]/30" />
          </div>

          {/* Grid Layout of Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 relative z-10">
            
            {/* STEP 1 */}
            <div className="relative flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group cursor-pointer">
              {/* Step Marker */}
              <div className="flex-shrink-0 w-[72px] h-[72px] lg:mb-8 rounded-full bg-white dark:bg-[#1a1a1a] flex items-center justify-center border-4 border-[#F7F7F5] dark:border-bg-light shadow-sm z-20 group-hover:scale-110 group-hover:shadow-[#00D2C4]/20 group-hover:border-[#00D2C4]/20 transition-all duration-300">
                <span className="font-sans font-black text-2xl text-deep-black dark:text-white">01</span>
              </div>
              
              {/* Content Box */}
              <div className="ml-8 lg:ml-0 flex-1 w-full bg-white dark:bg-[#1a1a1a] rounded-3xl p-8 shadow-sm group-hover:shadow-xl group-hover:shadow-[#00D2C4]/5 group-hover:-translate-y-2 transition-all duration-300 border border-transparent group-hover:border-[#00D2C4]/10">
                <div className="w-12 h-12 rounded-2xl bg-[#00D2C4]/10 flex items-center justify-center mb-6 lg:mx-auto">
                  <Search size={24} strokeWidth={2.5} className="text-[#00D2C4]" />
                </div>
                <h3 className="font-sans font-black text-2xl text-text-dark mb-4">Tell RENZA</h3>
                <p className="text-text-secondary text-base font-medium leading-relaxed">
                  You have a need. Simply choose what you need help with in the RENZA app. For example: "My floor needs cleaning."
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="relative flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group cursor-pointer">
              {/* Step Marker */}
              <div className="flex-shrink-0 w-[72px] h-[72px] lg:mb-8 rounded-full bg-white dark:bg-[#1a1a1a] flex items-center justify-center border-4 border-[#F7F7F5] dark:border-bg-light shadow-sm z-20 group-hover:scale-110 group-hover:shadow-[#00D2C4]/20 group-hover:border-[#00D2C4]/20 transition-all duration-300">
                <span className="font-sans font-black text-2xl text-deep-black dark:text-white">02</span>
              </div>
              
              {/* Content Box */}
              <div className="ml-8 lg:ml-0 flex-1 w-full bg-white dark:bg-[#1a1a1a] rounded-3xl p-8 shadow-sm group-hover:shadow-xl group-hover:shadow-[#00D2C4]/5 group-hover:-translate-y-2 transition-all duration-300 border border-transparent group-hover:border-[#00D2C4]/10">
                <div className="w-12 h-12 rounded-2xl bg-[#00D2C4]/10 flex items-center justify-center mb-6 lg:mx-auto">
                  <Settings size={24} strokeWidth={2.5} className="text-[#00D2C4]" />
                </div>
                <h3 className="font-sans font-black text-2xl text-text-dark mb-4">RENZA Handles It</h3>
                <p className="text-text-secondary text-base font-medium leading-relaxed">
                  We manage the entire service experience, coordinating the workforce, ensuring quality standards, and providing clear pricing.
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="relative flex flex-row lg:flex-col items-start lg:items-center text-left lg:text-center group cursor-pointer">
              {/* Step Marker */}
              <div className="flex-shrink-0 w-[72px] h-[72px] lg:mb-8 rounded-full bg-[#00D2C4] flex items-center justify-center border-4 border-[#F7F7F5] dark:border-bg-light shadow-md z-20 group-hover:scale-110 group-hover:shadow-[#00D2C4]/30 transition-all duration-300">
                <span className="font-sans font-black text-2xl text-white">03</span>
              </div>
              
              {/* Content Box */}
              <div className="ml-8 lg:ml-0 flex-1 w-full bg-white dark:bg-[#1a1a1a] rounded-3xl p-8 shadow-sm group-hover:shadow-xl group-hover:shadow-[#00D2C4]/5 group-hover:-translate-y-2 transition-all duration-300 border border-transparent group-hover:border-[#00D2C4]/10">
                <div className="w-12 h-12 rounded-2xl bg-[#00D2C4]/10 flex items-center justify-center mb-6 lg:mx-auto">
                  <CheckCircle2 size={24} strokeWidth={2.5} className="text-[#00D2C4]" />
                </div>
                <h3 className="font-sans font-black text-2xl text-text-dark mb-4">Problem Handled</h3>
                <p className="text-text-secondary text-base font-medium leading-relaxed">
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

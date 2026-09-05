import React, { useEffect, useRef, useState } from 'react';

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
      { threshold: 0.15 }
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
  const [sectionRef, sectionRevealed] = useScrollReveal();

  const steps = [
    {
      num: "01",
      title: "Tell RENZA",
      desc: "You have a need. Simply choose what you need help with in the RENZA app. For example: \"My floor needs cleaning.\""
    },
    {
      num: "02",
      title: "RENZA Handles It",
      desc: "We manage the entire service experience, coordinating the workforce, ensuring quality standards, and providing clear pricing."
    },
    {
      num: "03",
      title: "Problem Handled",
      desc: "The job is successfully completed. Your floor is cleaned, and you can get back to focusing on your day."
    }
  ];

  return (
    <section style={{ scrollMarginTop: '84px' }} className="w-full bg-[#0A0A0A] py-24 lg:py-36 border-t border-[#1a1a1a]" id="how-it-works">
      <div 
        ref={sectionRef}
        className={`w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 transition-all duration-1000 transform ${
          sectionRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        
        {/* Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* =========================================================================
              LEFT COLUMN: HEADER (Sticky)
             ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="lg:sticky lg:top-32">
              {/* Subtle Label & Accent Line */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-[#00D2C4]" />
                <span className="text-[#00D2C4] text-[10px] font-black tracking-[0.2em] uppercase">
                  HOW RENZA WORKS
                </span>
              </div>
              
              <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-[64px] text-white tracking-tight leading-[1.05] mb-8">
                From a Problem to a Solved Outcome.
              </h2>
              
              <p className="text-neutral-400 text-lg md:text-xl font-medium leading-relaxed max-w-[440px]">
                Tell RENZA what you need. We manage the service experience so you can focus on your day.
              </p>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: VERTICAL JOURNEY
             ========================================================================= */}
          <div className="lg:col-span-7 relative pt-4 lg:pt-0">
            
            {/* The Thin Vertical Connecting Line */}
            <div className="absolute left-[19px] top-[16px] bottom-[40px] w-[2px] bg-neutral-800 z-0">
               {/* Progress Fill Indicator */}
               <div className="w-full h-[60%] bg-gradient-to-b from-[#00D2C4]/40 via-transparent to-transparent" />
            </div>

            <div className="flex flex-col gap-16 lg:gap-20 relative z-10">
              {steps.map((step, idx) => {
                const isLast = idx === steps.length - 1;
                return (
                  <div key={idx} className="relative flex items-start group">
                    {/* Node on the line */}
                    <div className="flex-shrink-0 w-[40px] flex items-start justify-center relative mt-2.5">
                      <div className={`w-[10px] h-[10px] rounded-full transition-all duration-500 z-10 ${
                        isLast ? 'bg-[#00D2C4] shadow-[0_0_16px_rgba(0,210,196,0.6)]' : 'bg-neutral-600 group-hover:bg-[#00D2C4]'
                      }`} />
                    </div>
                    
                    {/* Step Content */}
                    <div className="ml-4 md:ml-8 flex-1 group-hover:-translate-y-1 transition-transform duration-500">
                      {/* Step Number */}
                      <span className="block text-lg md:text-xl font-black text-neutral-600 mb-2 transition-colors duration-500 group-hover:text-white">
                        {step.num}
                      </span>
                      
                      <h3 className="font-sans font-black text-2xl md:text-4xl text-white tracking-tight mb-4 transition-colors duration-300">
                        {step.title}
                      </h3>
                      
                      <p className="text-neutral-400 text-base md:text-lg font-medium leading-relaxed max-w-[500px]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            
          </div>

        </div>

      </div>
    </section>
  );
}

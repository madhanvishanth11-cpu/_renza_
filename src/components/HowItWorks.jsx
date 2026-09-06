import React, { useEffect, useRef, useState } from 'react';
import { Search, Settings, CheckCircle2 } from 'lucide-react';

// Lightweight Intersection Observer hook for scroll reveal animations
function useScrollReveal(threshold = 0.2) {
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
      { threshold, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, revealed];
}

export default function HowItWorks() {
  const [sectionRef, revealed] = useScrollReveal(0.15);

  const steps = [
    {
      num: "01",
      title: "Tell RENZA",
      desc: "You have a need. Simply choose what you need help with in the RENZA app. For example: \"My floor needs cleaning.\"",
      icon: <Search size={22} className="text-white group-hover:text-[#00D2C4] transition-colors duration-500" />
    },
    {
      num: "02",
      title: "RENZA Handles It",
      desc: "We manage the entire service experience, coordinating the workforce, ensuring quality standards, and providing clear pricing.",
      icon: <Settings size={22} className="text-white group-hover:text-[#00D2C4] transition-colors duration-500" />
    },
    {
      num: "03",
      title: "Problem Handled",
      desc: "The job is successfully completed. Your floor is cleaned, and you can get back to focusing on your day.",
      icon: <CheckCircle2 size={22} className="text-[#00D2C4]" />
    }
  ];

  return (
    <section style={{ scrollMarginTop: '84px' }} className="w-full bg-[#0A0A0A] py-24 lg:py-36 border-t border-[#1a1a1a] overflow-hidden" id="how-it-works">
      <div 
        ref={sectionRef}
        className="w-full max-w-5xl mx-auto px-6 md:px-12 lg:px-20 relative"
      >
        
        {/* =========================================================================
            HEADER (1. Fades in smoothly)
           ========================================================================= */}
        <div className={`transition-all duration-1000 transform ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Small teal accent line */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-[#00D2C4]" />
            <span className="text-[#00D2C4] text-[11px] md:text-xs font-black tracking-[0.2em] uppercase">HOW RENZA WORKS</span>
          </div>
          <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-[56px] text-white tracking-tight leading-[1.1] mb-16 lg:mb-24">
            From a Problem to a Solved Outcome.
          </h2>
        </div>

        {/* =========================================================================
            LARGE VERTICAL TIMELINE
           ========================================================================= */}
        <div className="relative pt-4">
          
          {/* 2. Connecting timeline line animates from top to bottom */}
          <div className="absolute left-[39px] md:left-[59px] top-6 bottom-12 w-[2px] bg-neutral-900 z-0">
             <div 
                className={`w-full bg-gradient-to-b from-[#00D2C4] via-[#00D2C4]/40 to-transparent transition-all duration-[1500ms] ease-out delay-300 ${revealed ? 'h-full opacity-100' : 'h-0 opacity-0'}`} 
             />
          </div>

          <div className="flex flex-col gap-20 md:gap-24 relative z-10">
            {steps.map((step, idx) => {
              const isLast = idx === steps.length - 1;
              const stepRevealDelay = 400 + idx * 300; // 3. Each step reveals one by one

              return (
                <div 
                  key={idx} 
                  className={`relative flex items-start group transition-all duration-1000 ease-out transform ${revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: `${stepRevealDelay}ms` }}
                >
                  
                  {/* NUMBER AND NODE AREA */}
                  <div className="flex-shrink-0 w-[80px] md:w-[120px] flex items-start justify-start relative mt-1">
                    
                    {/* Active Node on the line */}
                    <div className="absolute left-[35px] md:left-[55px] top-[14px]">
                       <div 
                        className={`w-[10px] h-[10px] rounded-full transition-all duration-700 z-10 ${
                          isLast 
                          ? 'bg-[#00D2C4] shadow-[0_0_20px_rgba(0,210,196,0.8)]' 
                          : 'bg-neutral-800 group-hover:bg-[#00D2C4] group-hover:shadow-[0_0_16px_rgba(0,210,196,0.6)]'
                        }`} 
                        style={{ transitionDelay: revealed ? `${stepRevealDelay + 300}ms` : '0ms' }}
                       />
                    </div>

                    {/* 4. Large step number scales up */}
                    <div 
                      className={`font-black text-4xl md:text-5xl lg:text-[64px] text-neutral-800 leading-none transition-all duration-1000 ease-out transform ${revealed ? 'scale-100 opacity-100' : 'scale-75 opacity-0'} group-hover:text-white`}
                      style={{ transitionDelay: `${stepRevealDelay + 200}ms` }}
                    >
                      {step.num}
                    </div>
                  </div>
                  
                  {/* 6. Step title and description slide in gently */}
                  <div 
                    className={`ml-4 md:ml-8 flex-1 group-hover:translate-x-2 transition-transform duration-500`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      {/* Icon with subtle teal border highlight */}
                      <div className={`p-3 rounded-xl bg-[#111] border border-neutral-800 transition-colors duration-500 ${isLast ? 'border-[#00D2C4]/40 bg-[#00D2C4]/10' : 'group-hover:border-[#00D2C4]/50 group-hover:bg-[#00D2C4]/5'}`}>
                        {step.icon}
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-sans font-black text-2xl md:text-3xl text-white tracking-tight transition-colors duration-300">
                        {step.title}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-neutral-400 text-base md:text-lg font-medium leading-relaxed max-w-[500px] pl-[60px]">
                      {step.desc}
                    </p>
                  </div>
                  
                </div>
              );
            })}
          </div>
          
        </div>

      </div>
    </section>
  );
}

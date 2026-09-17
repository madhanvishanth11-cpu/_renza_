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
      title: "Choose the task",
      desc: "You have a need. Simply choose what you need help with in the RENZA app. For example: \"My floor needs cleaning.\""
    },
    {
      num: "02",
      title: "RENZA manages the service",
      desc: "We manage the entire service experience, coordinating the workforce, ensuring quality standards, and providing clear pricing."
    },
    {
      num: "03",
      title: "Get it done",
      desc: "The job is successfully completed. Your floor is cleaned, and you can get back to focusing on your day."
    }
  ];

  return (
    <section style={{ scrollMarginTop: '84px' }} className="relative w-full bg-white py-12 lg:py-36 border-t border-gray-100 overflow-hidden" id="how-it-works">
      <style>{`
        @keyframes slow-drift-1 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.7; }
          33% { transform: translate(3%, 8%) scale(1.05); opacity: 1; }
          66% { transform: translate(-3%, 4%) scale(0.95); opacity: 0.8; }
        }
        @keyframes slow-drift-2 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.6; }
          33% { transform: translate(-4%, -8%) scale(0.95); opacity: 0.9; }
          66% { transform: translate(4%, -4%) scale(1.05); opacity: 0.7; }
        }
        @keyframes slow-drift-3 {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.5; }
          50% { transform: translate(8%, -8%) scale(1.1); opacity: 0.8; }
        }
        .animate-slow-drift-1 { animation: slow-drift-1 15s ease-in-out infinite; }
        .animate-slow-drift-2 { animation: slow-drift-2 18s ease-in-out infinite; }
        .animate-slow-drift-3 { animation: slow-drift-3 12s ease-in-out infinite; }
      `}</style>
      
      {/* Subtle Animated Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-5%] left-[-5%] w-[250px] h-[250px] md:w-[600px] md:h-[600px] bg-[#00D2C4]/[0.06] rounded-full blur-[60px] md:blur-[120px] animate-slow-drift-1" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[200px] h-[200px] md:w-[500px] md:h-[500px] bg-[#00D2C4]/[0.05] rounded-full blur-[60px] md:blur-[100px] animate-slow-drift-2" />
        <div className="absolute top-[30%] left-[40%] w-[150px] h-[150px] md:w-[400px] md:h-[400px] bg-[#00B3A6]/[0.04] rounded-full blur-[50px] md:blur-[90px] animate-slow-drift-3" />
      </div>
      <div 
        ref={sectionRef}
        className={`relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 transition-all duration-1000 transform ${
          sectionRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        
        {/* Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">
          
          {/* =========================================================================
              LEFT COLUMN: HEADER (Sticky)
             ========================================================================= */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="lg:sticky lg:top-32">
              {/* Subtle Label & Accent Line */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-[1px] bg-[#00D2C4]" />
                <span className="text-[#00D2C4] text-[17px] md:text-[20px] lg:text-[24px] font-black tracking-[0.2em] uppercase">
                  HOW RENZA WORKS
                </span>
              </div>
              
              <h2 className="font-sans font-black text-[52px] sm:text-[64px] md:text-[72px] lg:text-[80px] xl:text-[96px] text-[#111111] tracking-tight leading-[1.05] mb-8">
                How <br />
                <span className="relative inline-block my-2 md:my-3 max-w-full">
                  <span className="relative z-10 text-deep-black px-5 md:px-6 bg-[#00D2C4] rounded-[16px] md:rounded-[20px] inline-block py-1 md:py-2 shadow-sm whitespace-normal">
                    RENZA Works
                  </span>
                </span>
              </h2>
              
              <p className="text-text-secondary text-lg md:text-xl font-medium leading-relaxed max-w-[440px]">
                Tell RENZA what you need. We manage the service experience so you can focus on your day.
              </p>
            </div>
          </div>

          {/* =========================================================================
              RIGHT COLUMN: VERTICAL JOURNEY
             ========================================================================= */}
          <div className="lg:col-span-7 relative pt-4 lg:pt-0">
            
            {/* The Thin Vertical Connecting Line */}
            <div className="absolute left-[19px] top-[16px] bottom-[40px] w-[2px] bg-gray-200 z-0">
               {/* Progress Fill Indicator */}
               <div className="w-full h-[60%] bg-gradient-to-b from-[#00D2C4]/60 via-transparent to-transparent" />
            </div>

            <div className="flex flex-col gap-16 lg:gap-20 relative z-10">
              {steps.map((step, idx) => {
                const isLast = idx === steps.length - 1;
                return (
                  <div key={idx} className="relative flex items-start group">
                    {/* Node on the line */}
                    <div className="flex-shrink-0 w-[40px] flex items-start justify-center relative mt-2.5">
                      <div className={`w-[10px] h-[10px] rounded-full transition-all duration-500 z-10 ${
                        isLast ? 'bg-[#00D2C4] shadow-[0_0_16px_rgba(0,210,196,0.6)]' : 'bg-gray-300 group-hover:bg-[#00D2C4]'
                      }`} />
                    </div>
                    
                    {/* Step Content */}
                    <div className="ml-4 md:ml-8 flex-1 group-hover:-translate-y-1 transition-transform duration-500">
                      {/* Step Number */}
                      <span className="block text-lg md:text-xl font-black text-gray-400 mb-2 transition-colors duration-500 group-hover:text-[#00D2C4]">
                        {step.num}
                      </span>
                      
                      <h3 className="font-sans font-black text-3xl md:text-[42px] text-[#111111] tracking-tight mb-4 transition-colors duration-300">
                        {step.title}
                      </h3>
                      
                      <p className="text-text-secondary text-base md:text-lg font-medium leading-relaxed max-w-[500px]">
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

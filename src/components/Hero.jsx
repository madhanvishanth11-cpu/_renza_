import React, { useState, useEffect } from 'react';
import { Download, Check, Sparkles } from 'lucide-react';
import workforceImg from '../assets/workforce_full.png';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setImageLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[calc(100vh-84px)] flex items-center overflow-hidden bg-bg-light dark:bg-bg-dark pt-12 md:pt-24 lg:pt-0">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none z-0" />
      
      {/* Animated Teal Background Glows (behind workforce greeting image) */}
      <div className="absolute right-[-10%] bottom-[-10%] w-[450px] md:w-[700px] h-[450px] md:h-[700px] pointer-events-none z-0">
        <div className="absolute top-[20%] left-[20%] w-[350px] md:w-[450px] h-[350px] md:h-[450px] bg-[#00D2C4]/20 rounded-full blur-[100px] animate-blob-one" />
        <div className="absolute bottom-[20%] right-[10%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#00D2C4]/15 rounded-full blur-[90px] animate-blob-two" />
        <div className="absolute inset-0 bg-[#00D2C4]/5 rounded-full blur-[130px] animate-pulse-glow" />
      </div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 px-6 md:px-12 lg:px-20 h-full">
        {/* LEFT COLUMN: HERO CONTENT (7 columns on desktop) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left py-8 lg:py-16">
          
          {/* Pill Badge (Unified) */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00D2C4]/10 border border-[#00D2C4]/50 text-deep-black text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in self-center md:self-start">
            <Sparkles size={13} className="text-[#00B3A6] fill-[#00B3A6]" />
            <span>HOUSEHOLD TASKS, DONE FOR YOU</span>
          </div>

          {/* Heading */}
          <h1 className="font-sans font-black tracking-tight text-[#111111] text-[52px] sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[104px] leading-[1.05] mb-6 animate-fade-in-up">
            Get Any <br />
            <span className="relative inline-block my-2 md:my-3 max-w-full">
              <span className="relative z-10 text-deep-black px-5 md:px-6 bg-[#00D2C4] rounded-[16px] md:rounded-[20px] inline-block py-1 md:py-2 shadow-lg whitespace-normal">
                Household Works
              </span>
            </span> <br />
            Done Easily
          </h1>

          {/* Subtitle */}
          <p className="text-text-secondary text-lg md:text-xl font-normal leading-relaxed max-w-[620px] mb-8">
            Find trusted and verified people nearby to complete everyday tasks — from home services to errands and technical help.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6">
            <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#00D2C4] hover:bg-[#00B3A6] text-white font-extrabold text-base tracking-wide transition-all duration-300 shadow-[0_4px_14px_rgba(0,210,196,0.3)] hover:shadow-[0_6px_20px_rgba(0,210,196,0.4)] hover:-translate-y-1 active:translate-y-0 active:scale-95 cursor-pointer group">
              <Download size={18} strokeWidth={2.5} className="group-hover:translate-y-0.5 transition-transform" />
              Download
            </button>
          </div>

          {/* Availability Trust Check */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-yellow text-deep-black shadow-sm">
              <Check size={12} strokeWidth={3} />
            </div>
            <span className="text-text-secondary text-sm font-semibold">
              Available for customers and local skilled workers.
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: FULL BODY HERO IMAGE (5 columns on desktop) */}
        <div className={`lg:col-span-5 w-full flex items-end justify-center lg:justify-center mt-12 lg:mt-0 transition-all duration-[1200ms] ease-out transform ${
          imageLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-16 scale-95'
        }`}>
          {/* Unbounded container for natural alignment without cropping */}
          <div className="w-full flex justify-center h-full items-end pb-8">
            <img 
              src={workforceImg} 
              alt="RENZA Workforce showing Male and Female workers standing full body in uniform" 
              className="w-full max-w-[450px] md:max-w-[550px] lg:max-w-full h-auto object-contain select-none pointer-events-none animate-float"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

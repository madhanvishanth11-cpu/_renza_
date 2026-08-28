import React, { useState, useEffect } from 'react';
import { Download, Check, Sparkles } from 'lucide-react';
import workforceImg from '../assets/workforce.png';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setImageLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[calc(100vh-84px)] lg:h-[calc(100vh-84px)] flex flex-col justify-between px-6 md:px-12 lg:px-20 py-12 lg:py-0 overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center flex-1">
        {/* LEFT COLUMN: HERO CONTENT (55%) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10 py-8 lg:py-16">
          
          {/* Pill Badge (Unified) */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00D2C4]/10 border border-[#00D2C4]/50 text-deep-black text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in self-center md:self-start">
            <Sparkles size={13} className="text-[#00B3A6] fill-[#00B3A6]" />
            <span>On-Demand Local Task Marketplace</span>
          </div>

          {/* Heading */}
          <h1 className="font-sans font-black tracking-tight text-[#111111] text-5xl md:text-7xl lg:text-[76px] xl:text-[80px] leading-[1.05] mb-6">
            Get Any <br />
            <span className="relative inline-block my-2">
              <span className="relative z-10 text-deep-black px-4 bg-brand-yellow rounded-[4px] inline-block py-1 shadow-sm">
                Local Task
              </span>
            </span> <br />
            Done. <span className="text-[#00D2C4] drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">Easily.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-text-secondary text-lg md:text-xl font-normal leading-relaxed max-w-[620px] mb-8">
            Find trusted and verified people nearby to complete everyday tasks — from home services to errands and technical help.
          </p>

          {/* Mobile View: Premium Centered Worker Image Card (Placed above download button) */}
          <div className="w-full flex justify-center mb-6 md:hidden">
            <div className="w-[92%] max-w-[340px] sm:max-w-[380px] bg-[#00D2C4]/5 dark:bg-[#00D2C4]/10 backdrop-blur-md border border-[#00D2C4]/20 rounded-[24px] p-4 flex items-center justify-center shadow-md animate-fade-in-up-mobile animate-teal-glow-pulse">
              <img 
                src={workforceImg} 
                alt="RENZA Workforce showing Male and Female workers in black and teal uniforms offering a traditional greeting" 
                className="w-full h-auto object-contain select-none pointer-events-none block align-bottom animate-float-mobile-worker"
              />
            </div>
          </div>

          {/* CTA Buttons & Social Proof */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6">
            <button className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-yellow hover:bg-[#00B3A6] text-deep-black font-extrabold text-base tracking-wide transition-all duration-300 shadow-yellow-glow hover:shadow-yellow-glow-lg hover:-translate-y-1 active:translate-y-0 active:scale-98 cursor-pointer group">
              <Download size={18} strokeWidth={2.5} className="group-hover:translate-y-0.5 transition-transform" />
              Download RENZA App
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

        {/* RIGHT COLUMN FOR SPACING (lg only) */}
        <div className="hidden lg:block lg:col-span-5 h-full pointer-events-none" />
      </div>

      {/* Animated Teal Background Glows (behind workforce greeting image) */}
      <div className="absolute right-[-10%] bottom-[-10%] w-[450px] md:w-[700px] h-[450px] md:h-[700px] pointer-events-none z-0">
        {/* Blob One */}
        <div className="absolute top-[20%] left-[20%] w-[350px] md:w-[450px] h-[350px] md:h-[450px] bg-[#00D2C4]/20 rounded-full blur-[100px] animate-blob-one" />
        {/* Blob Two */}
        <div className="absolute bottom-[20%] right-[10%] w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-[#00D2C4]/15 rounded-full blur-[90px] animate-blob-two" />
        {/* Soft Ambient Base Glow */}
        <div className="absolute inset-0 bg-[#00D2C4]/5 rounded-full blur-[130px] animate-pulse-glow" />
      </div>

      <div 
        className={`hidden md:flex w-full lg:absolute lg:right-0 lg:bottom-0 items-end justify-center lg:justify-end z-10 transition-all duration-[1200ms] ease-out transform ${
          imageLoaded 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-16 scale-95'
        }`}
      >
        {/* Tablet/Desktop View: Static Image */}
        <img 
          src={workforceImg} 
          alt="RENZA Workforce showing Male and Female workers in black and teal uniforms offering a traditional greeting" 
          className="w-full md:max-w-[520px] lg:max-w-[650px] xl:max-w-[760px] h-auto object-contain select-none pointer-events-none hidden md:block align-bottom"
        />
      </div>
    </section>
  );
}

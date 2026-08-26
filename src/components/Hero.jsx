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
    <section className="relative w-full min-h-[calc(100vh-84px)] flex flex-col justify-between px-6 md:px-12 lg:px-20 py-12 lg:py-16 overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT COLUMN: HERO CONTENT (55%) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00D2C4]/10 border border-[#00D2C4]/50 text-deep-black text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in">
            <Sparkles size={13} className="text-[#00B3A6] fill-[#00B3A6]" />
            <span>On-Demand Local Task Marketplace</span>
          </div>

          {/* Heading */}
          <h1 className="font-sans font-black tracking-tight text-[#111111] text-5xl md:text-7xl lg:text-[80px] leading-[1.05] mb-6">
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

        {/* RIGHT COLUMN: WORKFORCE IMAGE (45%) */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-10 lg:py-0">
          
          {/* Yellow Pulsing Ambient Glow */}
          <div className="absolute w-[350px] md:w-[500px] h-[350px] md:h-[500px] bg-brand-yellow/20 rounded-full blur-[100px] pointer-events-none animate-pulse-glow z-0" />

          {/* Workforce Image wrapper with entrance and idle float animations */}
          <div 
            className={`relative z-10 w-full max-w-[490px] transition-all duration-[1500ms] ease-out transform ${
              imageLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
            }`}
          >
            <img 
              src={workforceImg} 
              alt="RENZA Workforce showing Male and Female workers in black and yellow uniforms offering a traditional Vanakkam greeting" 
              className="w-full h-auto rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.45)] border border-white/15 select-none pointer-events-none animate-float"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

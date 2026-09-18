import React, { useState, useEffect } from 'react';
import { Download, Check, Sparkles } from 'lucide-react';
import heroVisual from '../assets/hero_workforce_v2.jpg';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setImageLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full bg-bg-light dark:bg-bg-dark pt-24 md:pt-32 lg:pt-32 pb-16 lg:pb-24 flex items-center overflow-hidden">
      
      {/* Very Subtle Decorative Background Shapes */}
      <div className="absolute top-0 right-0 w-[50vw] h-[80vh] bg-[#00D2C4]/5 rounded-bl-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#00D2C4]/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center z-10 relative">
        
        {/* LEFT COLUMN: HERO CONTENT (50%) */}
        <div className="flex flex-col items-start text-left max-w-xl mx-auto lg:mx-0 w-full animate-fade-in-up">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm text-deep-black dark:text-white text-xs font-bold uppercase tracking-widest mb-6 md:mb-8">
            <Sparkles size={14} className="text-[#00D2C4]" />
            <span>HOUSEHOLD TASKS, DONE FOR YOU</span>
          </div>

          {/* Headline */}
          <h1 className="font-sans font-black tracking-tight text-[#111111] dark:text-white text-[44px] sm:text-[54px] md:text-[64px] lg:text-[72px] leading-[1.1] mb-6">
            Get Any <br />
            <span className="text-[#00D2C4]">Household Work</span> <br />
            Done Easily
          </h1>

          {/* Subtitle */}
          <p className="text-text-secondary text-lg md:text-xl font-medium leading-relaxed max-w-[520px] mb-8 lg:mb-10">
            Find trusted and verified people nearby to complete everyday tasks — from home services to errands and technical help.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6">
            <button className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#00D2C4] hover:bg-[#00B3A6] text-white font-bold text-base tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group">
              <Download size={18} strokeWidth={2.5} className="group-hover:translate-y-0.5 transition-transform" />
              Download App
            </button>
          </div>

          {/* Availability Trust Check */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-green-50 text-green-600 shadow-sm">
              <Check size={12} strokeWidth={3} />
            </div>
            <span className="text-text-secondary text-sm font-semibold">
              Available for customers and local skilled workers.
            </span>
          </div>
        </div>

        {/* RIGHT COLUMN: HERO VISUAL (50%) */}
        <div className={`w-full flex justify-center lg:justify-end transition-all duration-[1200ms] ease-out transform ${
          imageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Visual Container */}
          <div className="relative w-full max-w-[500px] lg:max-w-[560px] aspect-[4/5] rounded-[40px] md:rounded-[64px] bg-white dark:bg-gray-800 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-gray-700 p-3 md:p-4 animate-float overflow-hidden group">
            
            {/* Subtle Inner Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00D2C4]/10 rounded-bl-full pointer-events-none transition-transform duration-700 group-hover:scale-110" />
            
            {/* Main Image */}
            <div className="w-full h-full rounded-[32px] md:rounded-[52px] overflow-hidden relative bg-[#F7F9FA] dark:bg-gray-900">
              <img 
                src={heroVisual} 
                alt="Professional RENZA Service Team" 
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Floating Trust Badge (Optional detail for premium feel) */}
            <div className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 hidden md:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#00D2C4]/10 flex items-center justify-center">
                <Check size={20} strokeWidth={3} className="text-[#00D2C4]" />
              </div>
              <div className="flex flex-col pr-2">
                <span className="text-xs text-text-secondary font-bold">Verified</span>
                <span className="text-sm font-black text-deep-black dark:text-white">Professionals</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

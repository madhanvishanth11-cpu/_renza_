import React, { useState, useEffect } from 'react';
import { Download, Check, Sparkles } from 'lucide-react';
import heroVisual from '../assets/hero_indian_workforce_nobox.jpg';

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setImageLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full bg-bg-light dark:bg-bg-dark pt-16 md:pt-20 lg:pt-16 pb-4 lg:pb-8 flex items-center overflow-hidden">
      
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
            <span className="inline-block animate-hero-highlight transition-all duration-300 hover:brightness-125 hover:drop-shadow-[0_0_12px_rgba(0,210,196,0.6)] text-[#00D2C4] cursor-default" style={{ animationDelay: '100ms' }}>Household</span>{' '}
            <span className="inline-block animate-hero-highlight transition-all duration-300 hover:brightness-125 hover:drop-shadow-[0_0_12px_rgba(0,210,196,0.6)] text-[#00D2C4] cursor-default" style={{ animationDelay: '250ms' }}>Work</span> <br />
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

        {/* RIGHT COLUMN: HERO VISUAL (45%) */}
        <div className={`w-full flex justify-center lg:justify-end transition-all duration-[1200ms] ease-out transform ${
          imageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}>
          {/* Integrated Visual Container with Mask to blend naturally into the page */}
          <div className="relative w-full max-w-[480px] lg:max-w-[540px] animate-float flex justify-center">
            
            {/* Soft backdrop glow to anchor the image */}
            <div className="absolute inset-0 bg-white/20 dark:bg-black/20 rounded-full blur-[60px] -z-10" />

            <div 
              className="w-full overflow-hidden" 
              style={{ 
                WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)', 
                maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)' 
              }}
            >
              <img 
                src={heroVisual} 
                alt="Professional Indian RENZA Service Team" 
                className="w-full h-auto object-cover object-center scale-[1.05]"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

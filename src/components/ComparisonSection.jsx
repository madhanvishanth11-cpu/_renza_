import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, Check } from 'lucide-react';

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

export default function ComparisonSection() {
  const [headerRef, headerRevealed] = useScrollReveal();
  const [newRef, newRevealed] = useScrollReveal();

  const renzaWayItems = [
    { icon: "📱", text: "Open RENZA" },
    { icon: "✨", text: "Choose what you need" },
    { icon: "🛡️", text: "RENZA manages the service" },
    { icon: "✅", text: "Problem solved" },
  ];

  return (
    <section className="w-full bg-bg-light transition-colors duration-300 py-24 border-t border-gray-200" id="comparison-section">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* ── Section Header ──────────────────────────────────── */}
        <div 
          ref={headerRef}
          className={`text-left mb-16 max-w-3xl transition-all duration-700 transform ${
            headerRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-text-dark text-[11px] font-bold tracking-wider uppercase mb-4">
            <Sparkles size={11} className="text-amber-500 fill-amber-500" />
            THE RENZA DIFFERENCE
          </span>
          <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-[54px] text-text-dark tracking-tight leading-[1.1] mb-6">
            From Finding Workers to <br />
            <span className="relative inline-block my-1">
              <span className="relative z-10 text-deep-black px-4 bg-brand-yellow rounded-[4px] py-0.5 inline-block shadow-sm">
                Getting Things Done.
              </span>
            </span>
          </h2>
          <p className="text-text-secondary text-lg font-normal leading-relaxed">
            For everyday household work, customers shouldn't have to call different people, negotiate prices, or manage the service themselves.
          </p>
        </div>


        {/* ── THE RENZA WAY — Horizontal Strip ────────────────── */}
        <div
          ref={newRef}
          className={`mt-6 transition-all duration-1000 transform ${
            newRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="bg-white border-2 border-brand-yellow/50 rounded-[28px] p-6 md:p-8 shadow-yellow-glow/30 relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-brand-yellow/10 rounded-full blur-[80px] pointer-events-none" />

            {/* Header row */}
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <span className="text-xl">⚡</span>
              <h3 className="font-sans font-black text-lg md:text-xl text-text-dark">The RENZA Way</h3>
              <span className="px-2.5 py-0.5 bg-brand-yellow text-deep-black text-[10px] font-black tracking-wider uppercase rounded-full">Managed</span>
              <span className="text-text-secondary text-xs font-semibold hidden sm:inline">— Tell us what you need</span>
            </div>

            {/* Horizontal step flow */}
            <div className="flex flex-wrap lg:flex-nowrap items-center gap-3 relative z-10">
              {renzaWayItems.map((item, idx) => (
                <React.Fragment key={idx}>
                  {item.text === "Problem solved" ? (
                    /* Final success chip */
                    <div className="flex items-center gap-2.5 bg-brand-yellow px-5 py-3 rounded-2xl min-w-fit flex-shrink-0 shadow-yellow-glow/40 border border-brand-yellow group hover:shadow-yellow-glow transition-shadow">
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-sm font-black text-deep-black whitespace-nowrap">{item.text}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2.5 bg-brand-yellow/10 border border-brand-yellow/25 px-4 py-3 rounded-2xl min-w-fit flex-shrink-0 group hover:bg-brand-yellow/15 transition-colors">
                      <span className="text-lg">{item.icon}</span>
                      <span className="text-sm font-bold text-text-dark whitespace-nowrap">{item.text}</span>
                      <Check size={13} className="text-emerald-500 flex-shrink-0" strokeWidth={3} />
                    </div>
                  )}
                  {idx < renzaWayItems.length - 1 && (
                    <ArrowRight size={14} className="text-brand-yellow flex-shrink-0 hidden lg:block" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Bottom summary */}
            <div className="mt-5 pt-4 border-t border-brand-yellow/20 flex items-center gap-2 relative z-10">
              <span className="text-xs font-black text-text-dark tracking-wider uppercase">⚡ Less worker management. More problem solving.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, Sparkles, IndianRupee, HeartHandshake } from 'lucide-react';

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

export default function TrustSection() {
  const [headerRef, headerRevealed] = useScrollReveal();
  const [cardsRef, cardsRevealed] = useScrollReveal();


  const trustCards = [
    {
      icon: <ShieldCheck size={24} className="text-deep-black" />,
      title: "Trained & Managed Workforce",
      desc: "RENZA works with its own trained and managed workforce to create a more consistent service experience.",
      badge: "RENZA MANAGED"
    },
    {
      icon: <Sparkles size={24} className="text-deep-black" />,
      title: "Consistent Service Standards",
      desc: "We focus on maintaining clear standards for service quality and professional behaviour.",
      badge: "SERVICE STANDARDS"
    },
    {
      icon: <IndianRupee size={24} className="text-deep-black" />,
      title: "Clear Pricing",
      desc: "Customers don't have to negotiate with individual workers. RENZA aims to keep the service experience simple and transparent.",
      badge: "NO INDIVIDUAL NEGOTIATION"
    },
    {
      icon: <HeartHandshake size={24} className="text-deep-black" />,
      title: "RENZA Takes Responsibility",
      desc: "If something needs attention, RENZA stays involved in managing the service experience.",
      badge: "WE'RE WITH YOU"
    }
  ];

  return (
    <section style={{ scrollMarginTop: '84px' }} className="w-full bg-bg-light transition-colors duration-300 py-24 border-t border-gray-200" id="trust-section">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        {/* =========================================================================
            SECTION INTRODUCTION
           ========================================================================= */}
        <div 
          ref={headerRef}
          className={`text-left mb-16 max-w-3xl transition-all duration-700 transform ${
            headerRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-text-dark text-[11px] font-bold tracking-wider uppercase mb-4">
            <ShieldCheck size={11} className="text-amber-500 fill-amber-500" />
            WHY TRUST RENZA?
          </span>
          <h2 className="font-sans font-black text-4xl md:text-5xl lg:text-[54px] text-text-dark tracking-tight leading-[1.1] mb-6">
            Household Help You <br />
            <span className="relative inline-block my-1">
              <span className="relative z-10 text-deep-black px-4 bg-brand-yellow rounded-[4px] py-0.5 inline-block shadow-sm">
                Don't Have to Worry
              </span>
            </span> About.
          </h2>
          <p className="text-text-secondary text-lg font-normal leading-relaxed">
            When you need help at home, you shouldn't have to spend your time finding, calling, negotiating with, and managing different workers. RENZA is designed to take responsibility for the service experience.
          </p>
        </div>

        {/* =========================================================================
            MAIN TRUST CARDS GRID
           ========================================================================= */}
        <div 
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24 transition-all duration-1000 transform ${
            cardsRevealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {trustCards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-200 rounded-[28px] p-6 hover:border-brand-yellow shadow-sm hover:shadow-yellow-glow/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between text-left group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-brand-yellow flex items-center justify-center mb-5 shadow-sm group-hover:scale-105 transition-transform duration-300">
                  {card.icon}
                </div>
                
                <h3 className="font-sans font-black text-lg text-text-dark mb-2 leading-tight">
                  {card.title}
                </h3>
                
                <p className="text-text-secondary text-xs md:text-sm font-normal leading-relaxed mb-6">
                  {card.desc}
                </p>
              </div>

              <div>
                <span className="inline-flex px-2.5 py-1 rounded-full bg-bg-light border border-gray-200 text-text-secondary font-black text-[9px] uppercase tracking-wider">
                  {card.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

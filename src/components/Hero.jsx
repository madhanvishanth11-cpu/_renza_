import React, { useState } from 'react';
import { Download, Check, Sparkles, MapPin, Search, Star, ShieldCheck, Lock, ArrowRight, Shield } from 'lucide-react';
import Logo from './Logo';

export default function Hero() {
  const [activeChip, setActiveChip] = useState('electrician');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'electrician', label: 'Electrician', icon: '⚡' },
    { id: 'plumber', label: 'Plumber', icon: '🔧' },
    { id: 'errands', label: 'Errands', icon: '📦' },
    { id: 'tech', label: 'Tech Help', icon: '💻' }
  ];

  return (
    <section className="relative w-full min-h-[calc(100vh-84px)] flex flex-col justify-between px-6 md:px-12 lg:px-20 py-12 lg:py-16 overflow-hidden">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
      
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* LEFT COLUMN: HERO CONTENT (55%) */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFE500]/10 border border-[#FFE500]/50 text-deep-black text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in">
            <Sparkles size={13} className="text-[#E2C700] fill-[#E2C700]" />
            <span>⚡ On-Demand Local Task Marketplace</span>
          </div>

          {/* Heading */}
          <h1 className="font-sans font-black tracking-tight text-[#111111] text-5xl md:text-7xl lg:text-[80px] leading-[1.05] mb-6">
            Get Any <br />
            <span className="relative inline-block my-2">
              <span className="relative z-10 text-deep-black px-4 bg-brand-yellow rounded-[4px] inline-block py-1 shadow-sm">
                Local Task
              </span>
            </span> <br />
            Done. <span className="text-[#FFE500] drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]">Easily.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-text-secondary text-lg md:text-xl font-normal leading-relaxed max-w-[620px] mb-8">
            Find trusted and verified people nearby to complete everyday tasks — from home services to errands and technical help.
          </p>

          {/* CTA Buttons & Social Proof */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6">
            <button className="flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-brand-yellow hover:bg-[#F2D900] text-deep-black font-extrabold text-base tracking-wide transition-all duration-300 shadow-yellow-glow hover:shadow-yellow-glow-lg hover:-translate-y-1 active:translate-y-0 active:scale-98 cursor-pointer group">
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

        {/* RIGHT COLUMN: SMARTPHONE MOCKUP (45%) */}
        <div className="lg:col-span-5 flex justify-center items-center relative py-10 lg:py-0">
          
          {/* Yellow Pulsing Ambient Glow */}
          <div className="absolute w-[350px] md:w-[480px] h-[350px] md:h-[480px] bg-brand-yellow/30 rounded-full blur-[100px] pointer-events-none animate-pulse-glow z-0" />

          {/* Smartphone Shell Wrapper */}
          <div className="relative w-[340px] md:w-[360px] h-[720px] bg-[#000000] rounded-[52px] p-[10px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)] border-[3px] border-neutral-800/80 transition-all duration-700 hover:scale-[1.02] z-10 animate-float">
            
            {/* Glossy Reflection overlay */}
            <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-tr from-transparent via-white/5 to-white/10 rounded-[50px] pointer-events-none z-20" />
            
            {/* Dynamic Island / Notch */}
            <div className="absolute top-[16px] left-[50%] -translate-x-[50%] w-[110px] h-[28px] bg-black rounded-full z-30 flex items-center justify-center">
              {/* Speaker & Camera mesh details */}
              <div className="w-[4px] h-[4px] rounded-full bg-neutral-800 mr-12" />
              <div className="w-[12px] h-[3px] rounded-full bg-neutral-800" />
            </div>

            {/* Inner Phone Screen */}
            <div className="phone-screen w-full h-full bg-[#F7F7F5] rounded-[42px] overflow-hidden flex flex-col justify-between pt-7 pb-4 px-4 select-none relative">
              
              {/* Phone Content Header */}
              <div className="flex items-center justify-between mt-2 mb-3">
                <Logo className="px-2.5 py-1.5" size="small" />
                <div className="px-2.5 py-1 rounded-full bg-brand-yellow text-deep-black text-[9px] font-black tracking-wider flex items-center gap-1 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#111111] animate-ping" />
                  LIVE DEMO
                </div>
              </div>

              {/* Location Selector */}
              <div className="flex items-center gap-1 phone-text-dark text-[#111111] font-semibold text-xs mb-3 px-1">
                <MapPin size={12} className="text-brand-yellow fill-brand-yellow/30" />
                <span>Koramangala, Bengaluru</span>
                <span className="text-text-secondary font-normal">• Nearby Tasks</span>
              </div>

              {/* Interactive Search Bar / Post Form */}
              <div className="phone-card bg-white rounded-2xl p-3 shadow-[0_4px_16px_rgba(0,0,0,0.04)] border border-neutral-100 mb-3 flex flex-col gap-2">
                <div className="relative">
                  <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-text-secondary" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Need an electrician or errands done?"
                    className="phone-input w-full bg-[#F7F7F5] pl-8 pr-3 py-2 rounded-xl text-xs text-[#111111] placeholder-text-secondary border-none focus:outline-none focus:ring-1 focus:ring-brand-yellow/50 font-medium"
                  />
                </div>
                <button className="w-full py-2 bg-brand-yellow hover:bg-[#F2D900] text-deep-black font-extrabold text-xs rounded-xl shadow-sm transition-all hover:scale-[1.01] flex items-center justify-center gap-1 cursor-pointer">
                  Post Task Request
                  <ArrowRight size={12} strokeWidth={2.5} />
                </button>
              </div>

              {/* Category Chips */}
              <div className="flex gap-1.5 overflow-x-auto pb-1 mb-3 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveChip(cat.id)}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-[10px] font-bold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                      activeChip === cat.id
                        ? 'bg-brand-yellow text-deep-black shadow-sm'
                        : 'phone-chip bg-white text-text-secondary border border-neutral-200/60 hover:border-neutral-300 hover:text-text-dark'
                    }`}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>

              {/* Worker Feed / List */}
              <div className="flex-1 flex flex-col gap-2.5 overflow-y-auto max-h-[300px] scrollbar-none pr-0.5">
                
                {/* Worker Card 1 */}
                <div className="phone-card bg-white p-3 rounded-2xl border border-neutral-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col gap-2 relative group">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-brand-yellow/20 text-deep-black font-black text-xs flex items-center justify-center shadow-inner border border-brand-yellow/40">
                        RK
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="phone-text-dark font-extrabold text-xs text-[#111111]">Rajesh K.</span>
                          {/* Verified Badge */}
                          <div className="w-3.5 h-3.5 rounded-full bg-sky-500 text-white flex items-center justify-center" title="Verified Professional">
                            <Check size={8} strokeWidth={4} />
                          </div>
                        </div>
                        <span className="text-[10px] text-text-secondary font-medium block">Master Electrician</span>
                      </div>
                    </div>
                    {/* Status Pill */}
                    <div className="px-2 py-0.5 bg-[#4ADE80]/10 text-[#16A34A] text-[9px] font-bold rounded-full border border-[#4ADE80]/20 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
                      Available Now
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-1 border-t border-neutral-100/30 text-[10px]">
                    <div className="flex items-center gap-3 text-text-secondary font-semibold">
                      <span>📍 1.2 km away</span>
                      <span className="flex items-center gap-0.5 text-amber-500">
                        <Star size={10} className="fill-amber-500 text-amber-500" />
                        4.9 <span className="font-normal text-text-secondary">(142 tasks)</span>
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-text-secondary font-normal block text-[8px]">EST. RATE</span>
                      <span className="phone-text-dark font-extrabold text-[#111111] text-xs">₹350/hr</span>
                    </div>
                  </div>
                </div>

                {/* Worker Card 2 */}
                <div className="phone-card bg-white p-3 rounded-2xl border border-neutral-100 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col gap-2 relative group">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="phone-avatar w-9 h-9 rounded-full bg-neutral-100 text-deep-black font-black text-xs flex items-center justify-center shadow-inner border border-neutral-200">
                        MS
                      </div>
                      <div>
                        <div className="flex items-center gap-1">
                          <span className="phone-text-dark font-extrabold text-xs text-[#111111]">Manjunath S.</span>
                          <div className="w-3.5 h-3.5 rounded-full bg-sky-500 text-white flex items-center justify-center" title="Verified Professional">
                            <Check size={8} strokeWidth={4} />
                          </div>
                        </div>
                        <span className="text-[10px] text-text-secondary font-medium block">Errands & Bike Service</span>
                      </div>
                    </div>
                    {/* Status Pill */}
                    <div className="phone-badge px-2 py-0.5 bg-blue-50 text-blue-600 text-[9px] font-bold rounded-full border border-blue-100 flex items-center gap-1">
                      <ShieldCheck size={10} />
                      OTP Protected
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-1 border-t border-neutral-100/30 text-[10px]">
                    <div className="flex items-center gap-3 text-text-secondary font-semibold">
                      <span>📍 0.8 km away</span>
                      <span className="flex items-center gap-0.5 text-amber-500">
                        <Star size={10} className="fill-amber-500 text-amber-500" />
                        4.8 <span className="font-normal text-text-secondary">(89 tasks)</span>
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-text-secondary font-normal block text-[8px]">EST. RATE</span>
                      <span className="phone-text-dark font-extrabold text-[#111111] text-xs">₹250/hr</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Sticky Info Banner */}
              <div className="bg-brand-yellow/90 backdrop-blur-sm py-2 px-3 rounded-2xl flex items-center justify-center gap-1.5 shadow-[0_-4px_16px_rgba(255,229,0,0.15)] border border-brand-yellow">
                <Lock size={11} className="text-deep-black" />
                <span className="text-[9.5px] font-black text-deep-black tracking-wide text-center">
                  Bookings & Tracking active in RENZA mobile app
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

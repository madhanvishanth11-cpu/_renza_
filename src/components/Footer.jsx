import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null); // 'privacy' | 'terms' | null

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGetStarted = () => {
    window.dispatchEvent(new Event('open-login-modal'));
  };

  const handleContactClick = () => {
    window.location.href = 'mailto:support@renza.co';
  };

  return (
    <footer className="w-full" id="footer">
      
      {/* =========================================================================
          FOOTER TOP CTA (Yellow Panel)
         ========================================================================= */}
      <div className="w-full bg-brand-yellow py-16 text-deep-black text-center relative overflow-hidden px-6 md:px-12 lg:px-20 select-none">
        {/* Subtle accent blur circles */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-white/20 rounded-full blur-xl pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <h3 className="font-sans font-black text-3xl md:text-5xl tracking-tight leading-none mb-3 uppercase">
            Ready to Make Household Help Simpler?
          </h3>
          <p className="text-deep-black/90 text-sm md:text-base font-bold max-w-lg leading-relaxed mb-8">
            Tell RENZA what you need and focus on getting things done.
          </p>

          {/* CTA Action button */}
          <button 
            onClick={handleGetStarted}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-deep-black hover:bg-neutral-900 text-white font-extrabold text-base tracking-wide transition-all duration-300 shadow-lg hover:-translate-y-1 active:translate-y-0 active:scale-98 cursor-pointer group mb-4"
          >
            Get Started with RENZA
            <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-0.5 transition-transform" />
          </button>

          <span className="text-deep-black/75 text-xs font-black tracking-wider uppercase">
            Less searching. &bull; Less managing. &bull; More getting done.
          </span>
        </div>
      </div>

      {/* =========================================================================
          MAIN DARK FOOTER (Deep Black)
         ========================================================================= */}
      <div className="w-full bg-deep-black text-white py-16 px-6 md:px-12 lg:px-20 relative select-none">
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 items-start mb-8 lg:mb-10 text-left">
          
          {/* Logo Section */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4">
            <a href="#" onClick={handleLogoClick} aria-label="RENZA Home" className="transition-transform hover:scale-[1.02]">
              <Logo className="px-4 py-2 text-white bg-neutral-900 border border-neutral-800" />
            </a>
            <span className="text-brand-yellow font-extrabold text-xs tracking-wider uppercase block mt-1">
              Household help, made simpler.
            </span>
            <p className="text-neutral-400 text-sm font-semibold max-w-xs leading-relaxed">
              Tell RENZA what you need. We help manage the service experience so you can focus on what matters.
            </p>

            {/* Social Icons - Disabled placeholders with tooltips / hover indicator */}
            <div className="flex items-center gap-3 mt-2">
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="current-color">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  ),
                  label: "Instagram (Coming Soon)"
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="current-color">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  ),
                  label: "LinkedIn (Coming Soon)"
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className="current-color">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  ),
                  label: "Twitter (Coming Soon)"
                }
              ].map((soc, idx) => (
                <button 
                  key={idx}
                  disabled
                  title={soc.label}
                  aria-label={soc.label}
                  className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800/50 flex items-center justify-center text-neutral-600 cursor-not-allowed opacity-50"
                >
                  {soc.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Column 1: Explore */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="font-sans font-black text-sm tracking-wider uppercase text-neutral-300">
              Explore
            </h4>
            <div className="flex flex-col gap-2.5">
              {[
                { label: "How RENZA Works", id: "#how-it-works" },
                { label: "Household Services", id: "#services" },
                { label: "Why RENZA / Safety", id: "#safety" },
              ].map((link, idx) => (
                <a 
                  key={idx}
                  href={link.id}
                  onClick={(e) => handleSmoothScroll(e, link.id)}
                  className="text-neutral-400 hover:text-brand-yellow text-sm font-bold transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Support */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="font-sans font-black text-sm tracking-wider uppercase text-neutral-300">
              Support
            </h4>
            <div className="flex flex-col gap-2.5">
              <a 
                href="mailto:support@renza.co"
                className="text-neutral-400 hover:text-brand-yellow text-sm font-bold transition-colors duration-200"
              >
                Help &amp; Support
              </a>
              <a 
                href="#faq"
                onClick={(e) => handleSmoothScroll(e, '#faq')}
                className="text-neutral-400 hover:text-brand-yellow text-sm font-bold transition-colors duration-200"
              >
                Frequently Asked Questions
              </a>
              <a 
                href="mailto:support@renza.co"
                className="text-neutral-400 hover:text-brand-yellow text-sm font-bold transition-colors duration-200"
              >
                Contact RENZA
              </a>
            </div>
          </div>

          {/* Column 3: Contact/Get in Touch */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="font-sans font-black text-sm tracking-wider uppercase text-neutral-300">
              Get in Touch
            </h4>
            <p className="text-neutral-400 text-sm font-semibold max-w-[180px] leading-relaxed">
              Have a question about RENZA?
            </p>
            <button 
              onClick={handleContactClick}
              className="px-5 py-2.5 rounded-full border border-white/20 hover:border-brand-yellow text-white hover:text-deep-black hover:bg-brand-yellow font-extrabold text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer"
            >
              Contact Us
            </button>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800/80 my-8 w-full max-w-7xl mx-auto" />

        {/* Brand Promise Footer Banner */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-4">
          <div className="text-left">
            <span className="text-neutral-500 font-extrabold text-[10px] tracking-widest uppercase block mb-1">
              Final Brand Message
            </span>
            <span className="font-sans font-black text-base text-neutral-300 block uppercase leading-none">
              You Have a Problem.
            </span>
            <span className="font-sans font-black text-lg text-brand-yellow block uppercase leading-none mt-1">
              RENZA Helps Get It Done.
            </span>
          </div>

          <div className="flex flex-col items-start md:items-end gap-1.5 text-xs text-neutral-400 font-bold">
            <span className="italic text-neutral-500 text-[10px]">
              "Don't manage the worker. Tell RENZA what you need and focus on the outcome."
            </span>
            <div className="flex gap-4 mt-1">
              <button 
                onClick={() => setActiveModal('privacy')}
                className="hover:text-brand-yellow transition-colors font-bold text-xs cursor-pointer bg-transparent border-none"
              >
                Privacy Policy
              </button>
              <span>&bull;</span>
              <button 
                onClick={() => setActiveModal('terms')}
                className="hover:text-brand-yellow transition-colors font-bold text-xs cursor-pointer bg-transparent border-none"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright information row */}
        <div className="max-w-7xl mx-auto border-t border-neutral-900/60 pt-6 flex flex-col md:flex-row items-center justify-between text-neutral-500 text-[10px] font-bold tracking-wider uppercase gap-4">
          <span>&copy; 2026 RENZA. All rights reserved.</span>
          <span>Made for premium household managed outcomes.</span>
        </div>

      </div>

      {/* =========================================================================
          PRIVACY & TERMS POLICY MODAL OVERLAYS
         ========================================================================= */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setActiveModal(null)}
        >
          <div 
            className="bg-white dark:bg-[#1a1a1a] rounded-[28px] border border-gray-200 dark:border-neutral-800 max-w-lg w-full max-h-[80vh] overflow-hidden flex flex-col shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-200 dark:border-neutral-800 flex items-center justify-between">
              <h3 className="font-sans font-black text-xl text-deep-black dark:text-white uppercase tracking-tight">
                {activeModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h3>
              <button 
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 rounded-full border border-gray-250 dark:border-neutral-800 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-neutral-800 text-text-dark dark:text-white transition-colors cursor-pointer"
              >
                <X size={14} />
              </button>
            </div>

            {/* Scrollable content */}
            <div className="p-6 overflow-y-auto text-left text-sm text-text-secondary dark:text-neutral-300 leading-relaxed font-medium">
              {activeModal === 'privacy' ? (
                <div className="flex flex-col gap-4">
                  <p><strong>Effective Date: August 24, 2026</strong></p>
                  <p>RENZA respects your privacy and is committed to protecting your personal data. This privacy policy describes how we collect, use, and process your information when you use the RENZA app or website.</p>
                  <h4 className="font-extrabold text-deep-black dark:text-white mt-2">1. Information We Collect</h4>
                  <p>We collect information that you provide to us directly, such as when you sign up using your Google account (including name, email address, and profile picture), submit a task request, or communicate with support.</p>
                  <h4 className="font-extrabold text-deep-black dark:text-white mt-2">2. How We Use Your Information</h4>
                  <p>We use this information to create and verify your user profile, facilitate bookings and service coordination, ensure task security via OTP verification, and improve our managed service offerings.</p>
                  <h4 className="font-extrabold text-deep-black dark:text-white mt-2">3. Data Security</h4>
                  <p>We implement strict administrative, technical, and physical security measures to safeguard your personal profile information from unauthorized access, loss, or misuse.</p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <p><strong>Effective Date: August 24, 2026</strong></p>
                  <p>Welcome to RENZA. By accessing or using our platform, you agree to comply with and be bound by these Terms of Service. Please read them carefully.</p>
                  <h4 className="font-extrabold text-deep-black dark:text-white mt-2">1. The Managed Service Model</h4>
                  <p>RENZA operates as a managed service platform for household outcomes. When you request a service, RENZA coordinating teams manage the assignment and coordinate the service professionals.</p>
                  <h4 className="font-extrabold text-deep-black dark:text-white mt-2">2. User Accounts</h4>
                  <p>You must keep your account secure. Profile authentication is handled via Google login. You agree to immediately notify RENZA of any unauthorized access to your account.</p>
                  <h4 className="font-extrabold text-deep-black dark:text-white mt-2">3. Safety and Verification</h4>
                  <p>Every task booked on the platform is protected by a secure start-of-work OTP. You must only share this OTP with the coordinates once the service professional arrives at your location.</p>
                </div>
              )}
            </div>

            {/* Footer button */}
            <div className="p-4 border-t border-gray-200 dark:border-neutral-800 bg-gray-50 dark:bg-neutral-900/50 flex justify-end">
              <button 
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-xl bg-brand-yellow hover:bg-[#00B3A6] text-deep-black font-extrabold text-xs tracking-wider uppercase transition-colors shadow-sm cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

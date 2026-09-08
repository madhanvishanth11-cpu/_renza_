import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggleAnim() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div 
      onClick={toggleTheme}
      className={`relative w-[180px] h-[72px] rounded-full overflow-hidden cursor-pointer shadow-inner transition-colors duration-[800ms] ease-in-out border border-black/5 ${
        isDark ? 'bg-[#1E2342]' : 'bg-[#7EBAF8]'
      }`}
      style={{
        boxShadow: isDark 
          ? 'inset 0 4px 10px rgba(0,0,0,0.4), 0 2px 10px rgba(0,0,0,0.1)' 
          : 'inset 0 4px 10px rgba(255,255,255,0.4), inset 0 -4px 10px rgba(0,0,0,0.1), 0 2px 10px rgba(0,0,0,0.05)'
      }}
    >
      {/* ======================= */}
      {/* STARS BACKGROUND (NIGHT)*/}
      {/* ======================= */}
      <div 
        className="absolute inset-0 transition-opacity duration-[800ms] ease-in-out"
        style={{ opacity: isDark ? 1 : 0 }}
      >
        <div className="absolute top-[12px] left-[70px] w-[3px] h-[3px] bg-white rounded-full shadow-[0_0_4px_white] animate-star-twinkle"></div>
        <div className="absolute top-[24px] left-[90px] w-[2px] h-[2px] bg-white rounded-full animate-star-twinkle-delay"></div>
        <div className="absolute top-[16px] left-[110px] w-[4px] h-[4px] bg-white rounded-full shadow-[0_0_6px_white] animate-star-twinkle"></div>
        <div className="absolute top-[32px] left-[60px] w-[2px] h-[2px] bg-white rounded-full animate-star-twinkle-delay"></div>
        <div className="absolute top-[10px] left-[140px] w-[3px] h-[3px] bg-white rounded-full animate-star-twinkle"></div>
      </div>

      {/* ======================= */}
      {/* SECONDARY ORB (Yellow)  */}
      {/* ======================= */}
      <div 
        className="absolute top-[18px] w-[36px] h-[36px] rounded-full overflow-hidden transition-all duration-[800ms] ease-in-out z-10"
        style={{ transform: isDark ? 'translateX(18px)' : 'translateX(126px)' }}
      >
        <div className="w-full h-full bg-[#FCD34D] rounded-full" style={{ boxShadow: '0 0 15px rgba(253, 224, 71, 0.4)' }}>
          {/* Mask for crescent */}
          <div 
            className="absolute top-[-4px] w-full h-full rounded-full transition-all duration-[800ms] ease-in-out"
            style={{
              backgroundColor: isDark ? '#1E2342' : '#7EBAF8',
              transform: isDark ? 'translateX(12px)' : 'translateX(36px)',
              opacity: isDark ? 1 : 0
            }}
          />
        </div>
      </div>

      {/* ======================= */}
      {/* MAIN ORB (Glowing White)*/}
      {/* ======================= */}
      <div 
        className="absolute top-[6px] transition-transform duration-[800ms] ease-in-out z-20"
        style={{ transform: isDark ? 'translateX(114px)' : 'translateX(6px)' }}
      >
        <div 
          className="w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center animate-sun-pulse"
          style={{
            boxShadow: isDark 
              ? 'inset -4px -4px 10px rgba(0,0,0,0.1)' 
              : 'inset -4px -4px 10px rgba(0,0,0,0.05)'
          }}
        />

        {/* Pointer Cursor Icon attached to the main orb wrapper so it moves, but doesn't pulse! */}
        <svg 
          width="24" height="24" viewBox="0 0 24 24" fill="none" 
          className="absolute -bottom-3 -right-2 drop-shadow-md z-30 transition-transform duration-300 pointer-events-none"
          style={{ transform: 'rotate(-10deg)' }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.5 13V5.5C9.5 4.11929 10.6193 3 12 3C13.3807 3 14.5 4.11929 14.5 5.5V11.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="white"/>
          <path d="M14.5 11.5V10.5C14.5 9.11929 15.6193 8 17 8C18.3807 8 19.5 9.11929 19.5 10.5V13" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="white"/>
          <path d="M19.5 13V12C19.5 10.6193 20.6193 9.5 22 9.5C23.3807 9.5 24.5 10.6193 24.5 12V16.5C24.5 20.0899 21.5899 23 18 23H13.5C10.6433 23 8.12781 21.1444 7.23469 18.3962L5.80387 13.993C5.35824 12.6214 6.26429 11.1645 7.68369 10.9632L8.5 10.8475C9.28828 10.7357 10.0249 11.1415 10.4283 11.8475L12 14.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="white"/>
        </svg>
      </div>

      {/* ======================= */}
      {/* CONTINUOUS LOOP CLOUDS  */}
      {/* ======================= */}
      {/* Outer wrapper handles the day/night Y-axis shift and overall opacity */}
      <div 
        className="absolute bottom-[-5px] left-0 w-full h-[40px] z-10 transition-all duration-[800ms] ease-in-out"
        style={{ 
          transform: isDark ? 'translateY(8px)' : 'translateY(0)',
          opacity: isDark ? 0.8 : 1
        }}
      >
        {/* Inner wrapper handles the continuous horizontal scrolling */}
        <div className="absolute top-0 left-0 flex w-[360px] h-full animate-cloud-scroll">
          
          {/* Cluster 1 */}
          <div className="relative w-[180px] h-full flex-shrink-0">
            <div className={`absolute bottom-[-10px] left-[-10px] w-[60px] h-[60px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#5873A5]' : 'bg-white'}`}></div>
            <div className={`absolute bottom-[-15px] left-[30px] w-[80px] h-[80px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#4B6396]' : 'bg-[#f4f7fb]'}`}></div>
            <div className={`absolute bottom-[-20px] left-[80px] w-[90px] h-[90px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#6B8AC2]' : 'bg-white'}`}></div>
            <div className={`absolute bottom-[-10px] left-[140px] w-[70px] h-[70px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#4B6396]' : 'bg-[#e9f0f8]'}`}></div>
            <div className={`absolute bottom-[-5px] left-[10px] w-[40px] h-[40px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#3A5080]' : 'bg-[#f4f7fb]'}`}></div>
            <div className={`absolute bottom-[-5px] left-[120px] w-[50px] h-[50px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#3A5080]' : 'bg-white'}`}></div>
          </div>
          
          {/* Cluster 2 (Exact Clone of Cluster 1 for seamless looping) */}
          <div className="relative w-[180px] h-full flex-shrink-0">
            <div className={`absolute bottom-[-10px] left-[-10px] w-[60px] h-[60px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#5873A5]' : 'bg-white'}`}></div>
            <div className={`absolute bottom-[-15px] left-[30px] w-[80px] h-[80px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#4B6396]' : 'bg-[#f4f7fb]'}`}></div>
            <div className={`absolute bottom-[-20px] left-[80px] w-[90px] h-[90px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#6B8AC2]' : 'bg-white'}`}></div>
            <div className={`absolute bottom-[-10px] left-[140px] w-[70px] h-[70px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#4B6396]' : 'bg-[#e9f0f8]'}`}></div>
            <div className={`absolute bottom-[-5px] left-[10px] w-[40px] h-[40px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#3A5080]' : 'bg-[#f4f7fb]'}`}></div>
            <div className={`absolute bottom-[-5px] left-[120px] w-[50px] h-[50px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#3A5080]' : 'bg-white'}`}></div>
          </div>
          
        </div>
      </div>
      
    </div>
  );
}

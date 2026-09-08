import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggleAnim() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div 
      onClick={toggleTheme}
      className={`relative w-[120px] h-[44px] rounded-full overflow-hidden cursor-pointer shadow-inner transition-colors duration-[800ms] ease-in-out border border-black/10`}
      style={{
        background: isDark 
          ? 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)' 
          : 'linear-gradient(180deg, #4BA1FF 0%, #80C3FF 100%)',
        boxShadow: isDark 
          ? 'inset 0 2px 6px rgba(0,0,0,0.5), 0 1px 4px rgba(0,0,0,0.1)' 
          : 'inset 0 2px 6px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.05)'
      }}
    >
      {/* ======================= */}
      {/* STARS BACKGROUND (NIGHT)*/}
      {/* ======================= */}
      <div 
        className="absolute inset-0 transition-opacity duration-[800ms] ease-in-out"
        style={{ opacity: isDark ? 1 : 0 }}
      >
        <div className="absolute top-[8px] left-[35px] w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_3px_white] animate-star-twinkle"></div>
        <div className="absolute top-[14px] left-[55px] w-[1px] h-[1px] bg-white rounded-full animate-star-twinkle-delay"></div>
        <div className="absolute top-[10px] left-[20px] w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_4px_white] animate-star-twinkle"></div>
        <div className="absolute top-[22px] left-[45px] w-[1px] h-[1px] bg-white rounded-full animate-star-twinkle-delay"></div>
        <div className="absolute top-[6px] left-[15px] w-[2px] h-[2px] bg-white rounded-full animate-star-twinkle"></div>
      </div>

      {/* ======================= */}
      {/* MAIN ORB (Sun -> Moon)  */}
      {/* ======================= */}
      <div 
        className="absolute top-[4px] w-[36px] h-[36px] rounded-full overflow-hidden transition-transform duration-[800ms] ease-in-out z-20 shadow-sm"
        style={{ transform: isDark ? 'translateX(80px)' : 'translateX(4px)' }}
      >
        <div 
          className="w-full h-full rounded-full transition-colors duration-[800ms] ease-in-out"
          style={{ 
            backgroundColor: isDark ? '#E2E8F0' : '#FCD34D',
            boxShadow: isDark ? '0 0 15px rgba(226, 232, 240, 0.4)' : '0 0 15px rgba(253, 224, 71, 0.6)'
          }}
        >
          {/* Mask that slides in to create the crescent moon effect */}
          <div 
            className="absolute top-[-2px] w-full h-full rounded-full transition-all duration-[800ms] ease-in-out"
            style={{
              backgroundColor: isDark ? '#1E293B' : 'transparent',
              transform: isDark ? 'translateX(-10px)' : 'translateX(-36px)',
              opacity: isDark ? 1 : 0
            }}
          />
        </div>
      </div>

      {/* ======================= */}
      {/* CONTINUOUS LOOP CLOUDS  */}
      {/* ======================= */}
      <div 
        className="absolute bottom-[-2px] left-0 w-full h-[20px] z-10 transition-all duration-[800ms] ease-in-out"
        style={{ 
          transform: isDark ? 'translateY(2px)' : 'translateY(0)',
          opacity: isDark ? 0.75 : 1
        }}
      >
        {/* Inner wrapper handles the continuous horizontal scrolling */}
        <div className="absolute top-0 left-0 flex w-[240px] h-full animate-cloud-scroll">
          
          {/* Cluster 1 */}
          <div className="relative w-[120px] h-full flex-shrink-0">
            {/* White top layer */}
            <div className={`absolute bottom-[-5px] left-[-5px] w-[20px] h-[20px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#334155]' : 'bg-white'}`}></div>
            <div className={`absolute bottom-[-2px] left-[10px] w-[30px] h-[30px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#475569]' : 'bg-[#F8FAFC]'}`}></div>
            <div className={`absolute bottom-[-5px] left-[35px] w-[40px] h-[40px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#334155]' : 'bg-white'}`}></div>
            <div className={`absolute bottom-[0px] left-[65px] w-[25px] h-[25px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#475569]' : 'bg-[#F1F5F9]'}`}></div>
            <div className={`absolute bottom-[-2px] left-[85px] w-[35px] h-[35px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#334155]' : 'bg-white'}`}></div>
            <div className={`absolute bottom-[-5px] left-[110px] w-[20px] h-[20px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#475569]' : 'bg-[#F8FAFC]'}`}></div>
          </div>
          
          {/* Cluster 2 (Exact Clone of Cluster 1 for seamless looping) */}
          <div className="relative w-[120px] h-full flex-shrink-0">
            {/* White top layer */}
            <div className={`absolute bottom-[-5px] left-[-5px] w-[20px] h-[20px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#334155]' : 'bg-white'}`}></div>
            <div className={`absolute bottom-[-2px] left-[10px] w-[30px] h-[30px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#475569]' : 'bg-[#F8FAFC]'}`}></div>
            <div className={`absolute bottom-[-5px] left-[35px] w-[40px] h-[40px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#334155]' : 'bg-white'}`}></div>
            <div className={`absolute bottom-[0px] left-[65px] w-[25px] h-[25px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#475569]' : 'bg-[#F1F5F9]'}`}></div>
            <div className={`absolute bottom-[-2px] left-[85px] w-[35px] h-[35px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#334155]' : 'bg-white'}`}></div>
            <div className={`absolute bottom-[-5px] left-[110px] w-[20px] h-[20px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#475569]' : 'bg-[#F8FAFC]'}`}></div>
          </div>
          
        </div>
      </div>
      
    </div>
  );
}

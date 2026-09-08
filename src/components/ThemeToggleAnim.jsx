import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggleAnim() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div 
      onClick={toggleTheme}
      className="relative w-[120px] h-[44px] rounded-full overflow-hidden cursor-pointer shadow-inner transition-colors duration-[800ms] ease-in-out border-[2px] border-[#00D2C4]"
      style={{
        background: isDark 
          ? 'linear-gradient(180deg, #0B132B 0%, #1C2541 100%)' 
          : 'linear-gradient(180deg, #18B8D1 0%, #00D2C4 100%)',
        boxShadow: isDark 
          ? 'inset 0 4px 6px rgba(0,0,0,0.6), 0 2px 4px rgba(0,210,196,0.1)' 
          : 'inset 0 4px 6px rgba(0,0,0,0.1), 0 2px 4px rgba(0,210,196,0.2)'
      }}
    >
      {/* ======================= */}
      {/* STARS BACKGROUND (NIGHT)*/}
      {/* ======================= */}
      <div 
        className="absolute inset-0 transition-opacity duration-[800ms] ease-in-out"
        style={{ opacity: isDark ? 1 : 0 }}
      >
        <div className="absolute top-[6px] left-[30px] w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_3px_white] animate-star-twinkle"></div>
        <div className="absolute top-[12px] left-[50px] w-[1px] h-[1px] bg-white rounded-full animate-star-twinkle-delay"></div>
        <div className="absolute top-[8px] left-[20px] w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_4px_white] animate-star-twinkle"></div>
        <div className="absolute top-[18px] left-[40px] w-[1px] h-[1px] bg-white rounded-full animate-star-twinkle-delay"></div>
        <div className="absolute top-[5px] left-[15px] w-[2px] h-[2px] bg-white rounded-full animate-star-twinkle"></div>
        <div className="absolute top-[14px] left-[70px] w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_4px_white] animate-star-twinkle"></div>
      </div>

      {/* ======================= */}
      {/* MAIN ORB (Sun -> Moon)  */}
      {/* ======================= */}
      <div 
        className="absolute top-[4px] w-[32px] h-[32px] rounded-full overflow-hidden transition-transform duration-[800ms] ease-in-out z-20 shadow-sm"
        style={{ transform: isDark ? 'translateX(78px)' : 'translateX(6px)' }}
      >
        <div 
          className="w-full h-full rounded-full transition-colors duration-[800ms] ease-in-out animate-sun-pulse"
          style={{ 
            backgroundColor: isDark ? '#E2E8F0' : '#FFFFFF',
            boxShadow: isDark ? '0 0 10px rgba(226, 232, 240, 0.4)' : '0 0 15px rgba(255, 255, 255, 0.8)'
          }}
        >
          {/* Mask that slides in to create the crescent moon effect */}
          <div 
            className="absolute top-[-2px] w-full h-full rounded-full transition-all duration-[800ms] ease-in-out"
            style={{
              backgroundColor: isDark ? '#1C2541' : 'transparent',
              transform: isDark ? 'translateX(-8px)' : 'translateX(-32px)',
              opacity: isDark ? 1 : 0
            }}
          />
        </div>
      </div>

      {/* ======================= */}
      {/* CONTINUOUS LOOP CLOUDS  */}
      {/* ======================= */}
      <div 
        className="absolute bottom-[-1px] left-0 w-full h-[22px] z-10 transition-all duration-[800ms] ease-in-out"
        style={{ 
          transform: isDark ? 'translateY(4px)' : 'translateY(0)',
          opacity: isDark ? 0.7 : 1
        }}
      >
        {/* PARALLAX LAYER 1 (Back, slowest, darkest) */}
        <div className="absolute top-[4px] left-0 flex w-[240px] h-full animate-cloud-scroll-slow">
          <div className="relative w-[120px] h-full flex-shrink-0 opacity-70">
            <div className={`absolute bottom-0 left-[-5px] w-[24px] h-[24px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#1E293B]' : 'bg-[#00B3A6]'}`}></div>
            <div className={`absolute bottom-[2px] left-[15px] w-[32px] h-[32px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#1E293B]' : 'bg-[#00B3A6]'}`}></div>
            <div className={`absolute bottom-[0px] left-[45px] w-[40px] h-[40px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#1E293B]' : 'bg-[#00B3A6]'}`}></div>
            <div className={`absolute bottom-[2px] left-[75px] w-[32px] h-[32px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#1E293B]' : 'bg-[#00B3A6]'}`}></div>
            <div className={`absolute bottom-[0px] left-[105px] w-[24px] h-[24px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#1E293B]' : 'bg-[#00B3A6]'}`}></div>
          </div>
          <div className="relative w-[120px] h-full flex-shrink-0 opacity-70">
            <div className={`absolute bottom-0 left-[-5px] w-[24px] h-[24px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#1E293B]' : 'bg-[#00B3A6]'}`}></div>
            <div className={`absolute bottom-[2px] left-[15px] w-[32px] h-[32px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#1E293B]' : 'bg-[#00B3A6]'}`}></div>
            <div className={`absolute bottom-[0px] left-[45px] w-[40px] h-[40px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#1E293B]' : 'bg-[#00B3A6]'}`}></div>
            <div className={`absolute bottom-[2px] left-[75px] w-[32px] h-[32px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#1E293B]' : 'bg-[#00B3A6]'}`}></div>
            <div className={`absolute bottom-[0px] left-[105px] w-[24px] h-[24px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#1E293B]' : 'bg-[#00B3A6]'}`}></div>
          </div>
        </div>

        {/* PARALLAX LAYER 2 (Middle, medium speed) */}
        <div className="absolute top-[2px] left-0 flex w-[240px] h-full animate-cloud-scroll" style={{ animationDuration: '40s' }}>
          <div className="relative w-[120px] h-full flex-shrink-0 opacity-80">
            <div className={`absolute bottom-[-2px] left-[5px] w-[28px] h-[28px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#334155]' : 'bg-[#E6F9F8]'}`}></div>
            <div className={`absolute bottom-[0px] left-[30px] w-[36px] h-[36px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#334155]' : 'bg-[#E6F9F8]'}`}></div>
            <div className={`absolute bottom-[-2px] left-[65px] w-[36px] h-[36px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#334155]' : 'bg-[#E6F9F8]'}`}></div>
            <div className={`absolute bottom-[0px] left-[95px] w-[28px] h-[28px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#334155]' : 'bg-[#E6F9F8]'}`}></div>
          </div>
          <div className="relative w-[120px] h-full flex-shrink-0 opacity-80">
            <div className={`absolute bottom-[-2px] left-[5px] w-[28px] h-[28px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#334155]' : 'bg-[#E6F9F8]'}`}></div>
            <div className={`absolute bottom-[0px] left-[30px] w-[36px] h-[36px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#334155]' : 'bg-[#E6F9F8]'}`}></div>
            <div className={`absolute bottom-[-2px] left-[65px] w-[36px] h-[36px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#334155]' : 'bg-[#E6F9F8]'}`}></div>
            <div className={`absolute bottom-[0px] left-[95px] w-[28px] h-[28px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#334155]' : 'bg-[#E6F9F8]'}`}></div>
          </div>
        </div>

        {/* PARALLAX LAYER 3 (Front, fast, pure white) */}
        <div className="absolute top-[0px] left-0 flex w-[240px] h-full animate-cloud-scroll">
          <div className="relative w-[120px] h-full flex-shrink-0">
            <div className={`absolute bottom-[-5px] left-[-10px] w-[30px] h-[30px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#475569]' : 'bg-white'}`}></div>
            <div className={`absolute bottom-[-2px] left-[15px] w-[40px] h-[40px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#475569]' : 'bg-white'}`}></div>
            <div className={`absolute bottom-[-5px] left-[50px] w-[35px] h-[35px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#475569]' : 'bg-white'}`}></div>
            <div className={`absolute bottom-[0px] left-[80px] w-[30px] h-[30px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#475569]' : 'bg-white'}`}></div>
            <div className={`absolute bottom-[-2px] left-[105px] w-[25px] h-[25px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#475569]' : 'bg-white'}`}></div>
          </div>
          <div className="relative w-[120px] h-full flex-shrink-0">
            <div className={`absolute bottom-[-5px] left-[-10px] w-[30px] h-[30px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#475569]' : 'bg-white'}`}></div>
            <div className={`absolute bottom-[-2px] left-[15px] w-[40px] h-[40px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#475569]' : 'bg-white'}`}></div>
            <div className={`absolute bottom-[-5px] left-[50px] w-[35px] h-[35px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#475569]' : 'bg-white'}`}></div>
            <div className={`absolute bottom-[0px] left-[80px] w-[30px] h-[30px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#475569]' : 'bg-white'}`}></div>
            <div className={`absolute bottom-[-2px] left-[105px] w-[25px] h-[25px] rounded-full transition-colors duration-[800ms] ${isDark ? 'bg-[#475569]' : 'bg-white'}`}></div>
          </div>
        </div>

      </div>
    </div>
  );
}

import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggleAnim() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  // Helper to generate the puffy 3D cloud styles
  const getCloudStyle = (isFrontLayer) => {
    if (isFrontLayer) {
      return {
        backgroundColor: isDark ? '#334155' : '#FFFFFF',
        boxShadow: isDark 
          ? 'inset -2px -3px 6px rgba(15, 23, 42, 0.4), inset 2px 2px 4px rgba(255, 255, 255, 0.05)'
          : 'inset -2px -4px 6px rgba(56, 189, 248, 0.25), inset 2px 2px 4px rgba(255, 255, 255, 0.9)'
      };
    } else {
      // Back layer is slightly darker/tinted to recede
      return {
        backgroundColor: isDark ? '#1E293B' : '#BAE6FD',
        boxShadow: isDark 
          ? 'inset -2px -2px 4px rgba(0, 0, 0, 0.3)'
          : 'inset -2px -2px 5px rgba(56, 189, 248, 0.2)'
      };
    }
  };

  return (
    <div 
      onClick={toggleTheme}
      className={`relative w-[120px] h-[44px] rounded-full overflow-hidden cursor-pointer shadow-inner transition-colors duration-[800ms] ease-in-out border border-black/10`}
      style={{
        background: isDark 
          ? 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)' 
          : 'linear-gradient(180deg, #38BDF8 0%, #7DD3FC 100%)',
        boxShadow: isDark 
          ? 'inset 0 2px 8px rgba(0,0,0,0.6), 0 1px 4px rgba(0,0,0,0.1)' 
          : 'inset 0 2px 8px rgba(0,0,0,0.15), 0 1px 4px rgba(0,0,0,0.05)'
      }}
    >
      {/* ======================= */}
      {/* STARS BACKGROUND (NIGHT)*/}
      {/* ======================= */}
      <div 
        className="absolute inset-0 transition-opacity duration-[800ms] ease-in-out"
        style={{ opacity: isDark ? 1 : 0 }}
      >
        <div className="absolute top-[6px] left-[35px] w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_3px_white] animate-star-twinkle"></div>
        <div className="absolute top-[12px] left-[55px] w-[1px] h-[1px] bg-white rounded-full animate-star-twinkle-delay"></div>
        <div className="absolute top-[10px] left-[20px] w-[2px] h-[2px] bg-white rounded-full shadow-[0_0_4px_white] animate-star-twinkle"></div>
        <div className="absolute top-[18px] left-[45px] w-[1.5px] h-[1.5px] bg-white rounded-full animate-star-twinkle-delay"></div>
        <div className="absolute top-[6px] left-[15px] w-[1.5px] h-[1.5px] bg-white rounded-full animate-star-twinkle"></div>
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
            backgroundColor: isDark ? '#E2E8F0' : '#FEF08A',
            boxShadow: isDark 
              ? '0 0 12px rgba(226, 232, 240, 0.4), inset -2px -2px 6px rgba(0,0,0,0.1)' 
              : '0 0 15px rgba(253, 224, 71, 0.6), inset -2px -2px 6px rgba(217, 119, 6, 0.2)'
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
      <div className="absolute bottom-0 left-0 w-full h-[24px] z-10">
        
        {/* BACK CLOUD LAYER (Slow Parallax) */}
        <div className="absolute top-0 left-0 flex w-[240px] h-full animate-cloud-scroll-slow">
          {/* Cluster 1 */}
          <div className="relative w-[120px] h-full flex-shrink-0">
            <div className="absolute bottom-[2px] left-[-4px] w-[24px] h-[24px] rounded-full transition-all duration-[800ms]" style={getCloudStyle(false)}></div>
            <div className="absolute bottom-[4px] left-[18px] w-[28px] h-[28px] rounded-full transition-all duration-[800ms]" style={getCloudStyle(false)}></div>
            <div className="absolute bottom-[6px] left-[42px] w-[36px] h-[36px] rounded-full transition-all duration-[800ms]" style={getCloudStyle(false)}></div>
            <div className="absolute bottom-[3px] left-[70px] w-[30px] h-[30px] rounded-full transition-all duration-[800ms]" style={getCloudStyle(false)}></div>
            <div className="absolute bottom-[5px] left-[90px] w-[32px] h-[32px] rounded-full transition-all duration-[800ms]" style={getCloudStyle(false)}></div>
            <div className="absolute bottom-[2px] left-[116px] w-[20px] h-[20px] rounded-full transition-all duration-[800ms]" style={getCloudStyle(false)}></div>
          </div>
          {/* Cluster 2 */}
          <div className="relative w-[120px] h-full flex-shrink-0">
            <div className="absolute bottom-[2px] left-[-4px] w-[24px] h-[24px] rounded-full transition-all duration-[800ms]" style={getCloudStyle(false)}></div>
            <div className="absolute bottom-[4px] left-[18px] w-[28px] h-[28px] rounded-full transition-all duration-[800ms]" style={getCloudStyle(false)}></div>
            <div className="absolute bottom-[6px] left-[42px] w-[36px] h-[36px] rounded-full transition-all duration-[800ms]" style={getCloudStyle(false)}></div>
            <div className="absolute bottom-[3px] left-[70px] w-[30px] h-[30px] rounded-full transition-all duration-[800ms]" style={getCloudStyle(false)}></div>
            <div className="absolute bottom-[5px] left-[90px] w-[32px] h-[32px] rounded-full transition-all duration-[800ms]" style={getCloudStyle(false)}></div>
            <div className="absolute bottom-[2px] left-[116px] w-[20px] h-[20px] rounded-full transition-all duration-[800ms]" style={getCloudStyle(false)}></div>
          </div>
        </div>

        {/* FRONT CLOUD LAYER (Fast Parallax, Fluffy 3D) */}
        <div className="absolute top-[4px] left-0 flex w-[240px] h-full animate-cloud-scroll">
          {/* Cluster 1 */}
          <div className="relative w-[120px] h-full flex-shrink-0">
            <div className="absolute bottom-[-5px] left-[-8px] w-[28px] h-[28px] rounded-full transition-all duration-[800ms]" style={getCloudStyle(true)}></div>
            <div className="absolute bottom-[-2px] left-[10px] w-[36px] h-[36px] rounded-full transition-all duration-[800ms]" style={getCloudStyle(true)}></div>
            <div className="absolute bottom-[-4px] left-[35px] w-[44px] h-[44px] rounded-full transition-all duration-[800ms]" style={getCloudStyle(true)}></div>
            <div className="absolute bottom-[0px] left-[65px] w-[32px] h-[32px] rounded-full transition-all duration-[800ms]" style={getCloudStyle(true)}></div>
            <div className="absolute bottom-[-2px] left-[85px] w-[40px] h-[40px] rounded-full transition-all duration-[800ms]" style={getCloudStyle(true)}></div>
            <div className="absolute bottom-[-5px] left-[112px] w-[20px] h-[20px] rounded-full transition-all duration-[800ms]" style={getCloudStyle(true)}></div>
          </div>
          {/* Cluster 2 */}
          <div className="relative w-[120px] h-full flex-shrink-0">
            <div className="absolute bottom-[-5px] left-[-8px] w-[28px] h-[28px] rounded-full transition-all duration-[800ms]" style={getCloudStyle(true)}></div>
            <div className="absolute bottom-[-2px] left-[10px] w-[36px] h-[36px] rounded-full transition-all duration-[800ms]" style={getCloudStyle(true)}></div>
            <div className="absolute bottom-[-4px] left-[35px] w-[44px] h-[44px] rounded-full transition-all duration-[800ms]" style={getCloudStyle(true)}></div>
            <div className="absolute bottom-[0px] left-[65px] w-[32px] h-[32px] rounded-full transition-all duration-[800ms]" style={getCloudStyle(true)}></div>
            <div className="absolute bottom-[-2px] left-[85px] w-[40px] h-[40px] rounded-full transition-all duration-[800ms]" style={getCloudStyle(true)}></div>
            <div className="absolute bottom-[-5px] left-[112px] w-[20px] h-[20px] rounded-full transition-all duration-[800ms]" style={getCloudStyle(true)}></div>
          </div>
        </div>

      </div>
      
    </div>
  );
}

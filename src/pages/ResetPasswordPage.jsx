import React, { useState, useEffect } from 'react';
import { Lock, Eye, EyeOff, ArrowRight, Loader2, CheckCircle, ArrowLeft, Sun, Moon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useNavigate, Link } from 'react-router-dom';

export default function ResetPasswordPage() {
  const { updatePassword, user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [updating, setUpdating] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Animation states
  const [mounted, setMounted] = useState(false);
  const [scale, setScale] = useState(1);

  // Handle entry animation and responsive scaling
  useEffect(() => {
    setTimeout(() => setMounted(true), 50);

    const handleResize = () => {
      // 600px is our circle width (560px) plus padding (40px)
      const viewportWidth = window.innerWidth;
      const targetWidth = 600;
      if (viewportWidth < targetWidth) {
        setScale(viewportWidth / targetWidth);
      } else {
        setScale(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle case where user gets here without session
  useEffect(() => {
    const hasHashParams = window.location.hash && window.location.hash.includes('access_token');
    if (!user && !hasHashParams) {
      setErrorMsg('No active password reset session found. Please request a new password reset link.');
    }
  }, [user]);

  async function handleResetSubmit(e) {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    if (!password) { setErrorMsg('Please enter a new password.'); return; }
    if (password.length < 6) { setErrorMsg('Password must be at least 6 characters.'); return; }
    if (password !== confirmPassword) { setErrorMsg('Passwords do not match.'); return; }

    setUpdating(true);
    try {
      await updatePassword(password);
      setSuccessMsg('Your password has been successfully updated!');
      setPassword('');
      setConfirmPassword('');
      setTimeout(() => {
        navigate('/signin');
      }, 2000);
    } catch (err) {
      setErrorMsg(err.message || 'Failed to update password. Please request a new link.');
    } finally {
      setUpdating(false);
    }
  }

  const isDark = theme === 'dark';

  // Neumorphic style classes adapted for a perfect circle
  const neumorphOuter = isDark 
    ? "bg-[#1a1a1a] shadow-[18px_18px_36px_#121212,-18px_-18px_36px_#262626]" 
    : "bg-[#f0f2f5] shadow-[18px_18px_36px_#d1d9e6,-18px_-18px_36px_#ffffff]";
    
  const neumorphInner = isDark
    ? "bg-[#1a1a1a] shadow-[inset_8px_8px_16px_#121212,inset_-8px_-8px_16px_#262626]"
    : "bg-[#f0f2f5] shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff]";
    
  const neumorphInput = isDark
    ? "bg-[#1a1a1a] shadow-[inset_6px_6px_12px_#121212,inset_-6px_-6px_12px_#262626]"
    : "bg-[#f0f2f5] shadow-[inset_6px_6px_12px_#d1d9e6,inset_-6px_-6px_12px_#ffffff]";
    
  const neumorphButton = isDark
    ? "bg-[#1a1a1a] shadow-[6px_6px_12px_#121212,-6px_-6px_12px_#262626] active:shadow-[inset_4px_4px_8px_#121212,inset_-4px_-4px_8px_#262626] transition-all duration-200"
    : "bg-[#f0f2f5] shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] transition-all duration-200";
    
  const neumorphPrimary = isDark
    ? "bg-[#00D2C4] shadow-[6px_6px_12px_#121212,-6px_-6px_12px_#262626] hover:brightness-105 active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.3),inset_-4px_-4px_8px_rgba(255,255,255,0.1)] transition-all duration-200"
    : "bg-[#00D2C4] shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] hover:brightness-105 active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.15),inset_-4px_-4px_8px_rgba(255,255,255,0.3)] transition-all duration-200";

  const textColor = isDark ? "text-gray-100" : "text-gray-800";
  const textMuted = isDark ? "text-gray-400" : "text-gray-500";
  const bgMain = isDark ? "bg-[#0e0e0e]" : "bg-[#f0f2f5]";

  // Reusable Shared UI blocks
  const renderLogo = () => (
    <div className="flex justify-center mb-5">
      <div className="flex items-center gap-1.5 select-none">
        <div className="flex -space-x-2">
          <div className="w-5 h-5 rounded-full border-2 border-white bg-[#00D2C4] shadow-sm"></div>
          <div className="w-5 h-5 rounded-full border-2 border-white bg-gray-800 shadow-sm"></div>
        </div>
        <span className={`font-sans font-black text-xl tracking-tight ${isDark ? 'text-white' : 'text-gray-900'}`}>RENZA</span>
      </div>
    </div>
  );

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 ${bgMain} font-sans transition-colors duration-500 overflow-hidden relative`}>
      {/* Back Button */}
      <Link
        to="/signin"
        className={`absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold ${textMuted} hover:text-[#00D2C4] ${neumorphButton} z-50`}
      >
        <ArrowLeft size={14} strokeWidth={3} />
        Back to Sign In
      </Link>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleTheme}
        className={`absolute top-6 right-6 flex items-center gap-2 px-3 py-2 rounded-full text-xs font-bold ${textMuted} hover:text-[#00D2C4] ${neumorphButton} z-50`}
      >
        {isDark ? <Sun size={16} strokeWidth={2.5} /> : <Moon size={16} strokeWidth={2.5} />}
      </button>

      {/* DYNAMIC SCALING WRAPPER FOR MOBILE */}
      <div 
        className="relative flex items-center justify-center transition-transform duration-300 ease-out"
        style={{ transform: `scale(${scale})` }}
      >
        {/* ENTRANCE ANIMATION WRAPPER */}
        <div 
          className={`w-[560px] h-[560px] transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] transform ${
            mounted ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-12'
          }`}
        >
          {/* CIRCULAR CONTAINER */}
          <div className={`w-full h-full rounded-full p-5 ${neumorphOuter} flex items-center justify-center transition-colors duration-500`}>
            {/* Inner raised ring */}
            <div className={`w-full h-full rounded-full ${neumorphInner} flex items-center justify-center relative p-6 transition-colors duration-500`}>
              
              {/* Safe Content Area */}
              <div className="w-[340px] flex flex-col justify-center">
                
                {renderLogo()}

                {/* Heading */}
                <div className="text-center mb-6">
                  <h2 className={`font-black text-2xl ${textColor} tracking-tight`}>Set New Password</h2>
                  <p className={`${textMuted} text-xs font-bold mt-1.5 leading-relaxed`}>
                    Create a new secure password for your account
                  </p>
                </div>

                {/* Success Alert */}
                {successMsg ? (
                  <div className={`flex flex-col items-center justify-center gap-3 p-5 text-center ${neumorphInput} rounded-3xl mb-4 transition-colors`}>
                    <CheckCircle className="text-[#00D2C4] w-8 h-8" />
                    <p className={`text-xs ${textColor} font-bold leading-relaxed`}>
                      {successMsg}
                    </p>
                    <p className="text-[11px] text-gray-400 font-bold mt-1">
                      Redirecting to Sign In...
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleResetSubmit} className="flex flex-col gap-4">
                    {/* New Password */}
                    <div className={`flex items-center px-4 py-3 rounded-2xl ${neumorphInput} focus-within:shadow-[inset_8px_8px_16px_#00D2C433,inset_-8px_-8px_16px_#00D2C422,0_0_0_2px_#00D2C4] transition-all`}>
                      <Lock size={16} className={`${textMuted} mr-3`} />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="New Password"
                        className={`w-full bg-transparent border-none outline-none ${textColor} text-sm font-bold placeholder:${isDark ? 'text-gray-600' : 'text-gray-400'}`}
                      />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className={`${textMuted} hover:text-[#00D2C4] transition-colors focus:outline-none cursor-pointer ml-2`}>
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>

                    {/* Confirm Password */}
                    <div className={`flex items-center px-4 py-3 rounded-2xl ${neumorphInput} focus-within:shadow-[inset_8px_8px_16px_#00D2C433,inset_-8px_-8px_16px_#00D2C422,0_0_0_2px_#00D2C4] transition-all`}>
                      <Lock size={16} className={`${textMuted} mr-3`} />
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password"
                        className={`w-full bg-transparent border-none outline-none ${textColor} text-sm font-bold placeholder:${isDark ? 'text-gray-600' : 'text-gray-400'}`}
                      />
                      <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className={`${textMuted} hover:text-[#00D2C4] transition-colors focus:outline-none cursor-pointer ml-2`}>
                        {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>

                    {/* Error */}
                    {errorMsg && (
                      <p className="text-xs text-red-500 font-bold text-center animate-pulse">
                        {errorMsg}
                      </p>
                    )}

                    {/* Submit Button */}
                    <div className="mt-2">
                      <button
                        type="submit"
                        disabled={updating}
                        className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-black ${isDark ? 'text-black' : 'text-white'} text-sm tracking-wide ${neumorphPrimary} disabled:opacity-70 cursor-pointer`}
                      >
                        {updating ? (
                          <Loader2 size={18} className="animate-spin" />
                        ) : (
                          <>
                            Update Password
                            <ArrowRight size={16} strokeWidth={3} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { Mail, ArrowRight, Loader2, ArrowLeft, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function ForgotPasswordPage() {
  const { sendPasswordResetEmail } = useAuth();
  
  const [email, setEmail] = useState('');
  const [sendingReset, setSendingReset] = useState(false);
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

  async function handleResetSubmit(e) {
    e.preventDefault();
    if (!email) { setErrorMsg('Please enter your email address.'); return; }
    
    setSendingReset(true);
    setErrorMsg('');
    setSuccessMsg('');
    try {
      await sendPasswordResetEmail(email);
      setSuccessMsg('Reset instructions have been sent! Please check your email inbox.');
      setEmail('');
    } catch (err) {
      setErrorMsg(err.message || 'Failed to send password reset email. Please check the address and try again.');
    } finally {
      setSendingReset(false);
    }
  }

  // Neumorphic style classes adapted for a perfect circle
  const neumorphOuter = "bg-[#f0f2f5] shadow-[18px_18px_36px_#d1d9e6,-18px_-18px_36px_#ffffff]";
  const neumorphInner = "bg-[#f0f2f5] shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff]";
  const neumorphInput = "bg-[#f0f2f5] shadow-[inset_6px_6px_12px_#d1d9e6,inset_-6px_-6px_12px_#ffffff]";
  const neumorphButton = "bg-[#f0f2f5] shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] transition-all duration-200";
  const neumorphPrimary = "bg-[#00D2C4] shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] hover:brightness-105 active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.15),inset_-4px_-4px_8px_rgba(255,255,255,0.3)] transition-all duration-200";

  // Reusable Shared UI blocks
  const renderLogo = () => (
    <div className="flex justify-center mb-5">
      <div className="flex items-center gap-1.5 select-none">
        <div className="flex -space-x-2">
          <div className="w-5 h-5 rounded-full border-2 border-white bg-[#00D2C4] shadow-sm"></div>
          <div className="w-5 h-5 rounded-full border-2 border-white bg-gray-800 shadow-sm"></div>
        </div>
        <span className="font-sans font-black text-xl tracking-tight text-gray-900">RENZA</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#f0f2f5] font-sans text-gray-800 overflow-hidden relative">
      {/* Back to Sign In Button */}
      <Link
        to="/signin"
        className={`absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-gray-600 hover:text-[#00D2C4] ${neumorphButton} z-50`}
      >
        <ArrowLeft size={14} strokeWidth={3} />
        Back to Sign In
      </Link>

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
          <div className={`w-full h-full rounded-full p-5 ${neumorphOuter} flex items-center justify-center`}>
            {/* Inner raised ring */}
            <div className={`w-full h-full rounded-full ${neumorphInner} flex items-center justify-center relative p-6`}>
              
              {/* Safe Content Area */}
              <div className="w-[340px] flex flex-col justify-center">
                
                {renderLogo()}

                {/* Heading */}
                <div className="text-center mb-6">
                  <h2 className="font-black text-2xl text-gray-800 tracking-tight">Reset Password</h2>
                  <p className="text-gray-500 text-xs font-bold mt-1.5 leading-relaxed">
                    We will email you instructions to reset your password
                  </p>
                </div>

                {/* Success Alert */}
                {successMsg ? (
                  <div className={`flex flex-col items-center justify-center gap-3 p-5 text-center ${neumorphInput} rounded-3xl mb-4`}>
                    <CheckCircle className="text-[#00D2C4] w-8 h-8" />
                    <p className="text-xs text-gray-600 font-bold leading-relaxed">
                      {successMsg}
                    </p>
                    <Link to="/signin" className="mt-1 text-xs font-bold text-[#00D2C4] hover:text-[#00B3A6] transition-colors">
                      Go to Sign In Page
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleResetSubmit} className="flex flex-col gap-4">
                    {/* Email */}
                    <div className={`flex items-center px-4 py-3 rounded-2xl ${neumorphInput} focus-within:shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff,0_0_0_2px_#00D2C4] transition-all`}>
                      <Mail size={16} className="text-gray-400 mr-3" />
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        className="w-full bg-transparent border-none outline-none text-gray-700 text-sm font-bold placeholder:text-gray-400"
                      />
                    </div>

                    {/* Error */}
                    {errorMsg && (
                      <p className="text-xs text-red-500 font-bold text-center animate-pulse">
                        {errorMsg}
                      </p>
                    )}

                    {/* Reset Button */}
                    <div className="mt-2">
                      <button
                        type="submit"
                        disabled={sendingReset}
                        className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl font-black text-white text-sm tracking-wide ${neumorphPrimary} disabled:opacity-70 cursor-pointer`}
                      >
                        {sendingReset ? (
                          <Loader2 size={18} className="animate-spin text-white" />
                        ) : (
                          <>
                            Send Reset Link
                            <ArrowRight size={16} strokeWidth={3} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}

                {/* Footer link */}
                <p className="text-center text-xs text-gray-500 font-bold mt-6">
                  Remembered your password?{' '}
                  <Link to="/signin" className="text-[#00D2C4] hover:text-[#00B3A6] transition-colors ml-1 cursor-pointer">
                    Sign in
                  </Link>
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

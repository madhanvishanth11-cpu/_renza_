import React, { useState, useEffect } from 'react';
import { Mail, Lock, Eye, EyeOff, User, ArrowLeft, Loader2, Check } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import Logo from '../components/Logo';

export default function AuthPage() {
  const { loginWithGoogle, loginWithEmail, signUpWithEmail, user, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Initialize mode based on route
  const [mode, setMode] = useState(location.pathname === '/signup' ? 'signup' : 'signin');
  
  // Animation states
  const [mounted, setMounted] = useState(false);
  const [scale, setScale] = useState(1);
  
  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Handle entry animation and responsive scaling
  useEffect(() => {
    setTimeout(() => setMounted(true), 50);

    const handleResize = () => {
      // 680px is our circle width (640px) plus some padding (40px)
      const viewportWidth = window.innerWidth;
      const targetWidth = 680;
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

  useEffect(() => {
    if (!loading && user) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  // Sync route changes to mode
  useEffect(() => {
    if (location.pathname === '/signup') setMode('signup');
    if (location.pathname === '/signin') setMode('signin');
  }, [location.pathname]);

  const switchMode = (newMode) => {
    setMode(newMode);
    setErrorMsg('');
    setSuccessMsg('');
    window.history.pushState({}, '', `/${newMode}`);
  };

  const handleGoogle = async () => {
    setIsProcessing(true);
    setErrorMsg('');
    try {
      await loginWithGoogle();
    } catch (err) {
      setErrorMsg(err.message || 'Google authentication failed.');
      setIsProcessing(false);
    }
  };

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    
    if (!email || !password) {
      setErrorMsg('Please fill in all required fields.');
      return;
    }

    setIsProcessing(true);

    try {
      await loginWithEmail(email, password);
      navigate('/');
    } catch (err) {
      setErrorMsg(err.message || 'Authentication failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    
    if (!name.trim()) { setErrorMsg('Please enter your full name.'); return; }
    if (!email || !password) { setErrorMsg('Please fill in all required fields.'); return; }
    if (password.length < 6) { setErrorMsg('Password must be at least 6 characters.'); return; }
    if (password !== confirmPassword) { setErrorMsg('Passwords do not match.'); return; }
    
    setIsProcessing(true);

    try {
      const res = await signUpWithEmail(email, password, name);
      if (res && res.id) {
        setSuccessMsg('Account created successfully!');
        setTimeout(() => navigate('/'), 1500);
      } else {
        setSuccessMsg('Account created! Please check your email to verify.');
        setName(''); setEmail(''); setPassword(''); setConfirmPassword('');
      }
    } catch (err) {
      setErrorMsg(err.message || 'Sign up failed. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  // Neumorphic style classes adapted for a perfect circle
  const neumorphOuter = "bg-[#f0f2f5] shadow-[18px_18px_36px_#d1d9e6,-18px_-18px_36px_#ffffff]";
  const neumorphInner = "bg-[#f0f2f5] shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff]";
  
  // Input fields stay rectangular but rounded
  const neumorphInput = "bg-[#f0f2f5] shadow-[inset_6px_6px_12px_#d1d9e6,inset_-6px_-6px_12px_#ffffff]";
  const neumorphButton = "bg-[#f0f2f5] shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] active:shadow-[inset_4px_4px_8px_#d1d9e6,inset_-4px_-4px_8px_#ffffff] transition-all duration-200";
  const neumorphPrimary = "bg-[#00D2C4] shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] hover:brightness-105 active:shadow-[inset_4px_4px_8px_rgba(0,0,0,0.15),inset_-4px_-4px_8px_rgba(255,255,255,0.3)] transition-all duration-200";

  // Reusable Shared UI blocks
  const renderLogo = () => (
    <div className="flex justify-center mb-4">
      <div className="flex items-center gap-1.5 select-none">
        <div className="flex -space-x-2">
          <div className="w-5 h-5 rounded-full border-2 border-white bg-[#00D2C4] shadow-sm"></div>
          <div className="w-5 h-5 rounded-full border-2 border-white bg-gray-800 shadow-sm"></div>
        </div>
        <span className="font-sans font-black text-xl tracking-tight text-gray-900">RENZA</span>
      </div>
    </div>
  );

  const renderTabs = (activeMode) => (
    <div className={`flex p-1 rounded-2xl mb-5 ${neumorphInput}`}>
      <button
        type="button"
        onClick={() => switchMode('signin')}
        className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all duration-300 ${
          activeMode === 'signin' ? 'bg-[#f0f2f5] shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff] text-gray-900' : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        Sign In
      </button>
      <button
        type="button"
        onClick={() => switchMode('signup')}
        className={`flex-1 py-1.5 rounded-xl text-xs font-bold transition-all duration-300 ${
          activeMode === 'signup' ? 'bg-[#f0f2f5] shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff] text-gray-900' : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        Sign Up
      </button>
    </div>
  );

  const renderGoogleButton = () => (
    <div>
      <button
        type="button"
        onClick={handleGoogle}
        disabled={isProcessing}
        className={`w-full flex items-center justify-center gap-3 px-4 py-3 rounded-2xl mb-4 text-gray-700 font-bold text-sm ${neumorphButton} disabled:opacity-60 cursor-pointer`}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
        </svg>
        Continue with Google
      </button>

      <div className="flex items-center gap-4 mb-4 px-4">
        <div className="flex-1 h-[2px] bg-white rounded-full shadow-sm" />
        <span className="text-[10px] font-black text-gray-400 tracking-widest uppercase">Or</span>
        <div className="flex-1 h-[2px] bg-white rounded-full shadow-sm" />
      </div>
    </div>
  );

  return (
    // Force a light-theme styling context and hide overflow for clean scaling
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#f0f2f5] font-sans text-gray-800 overflow-hidden relative">
      
      {/* Back Button (Neumorphic) */}
      <Link
        to="/"
        className={`absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-gray-600 hover:text-[#00D2C4] ${neumorphButton} z-50`}
      >
        <ArrowLeft size={14} strokeWidth={3} />
        Back
      </Link>

      {/* DYNAMIC SCALING WRAPPER FOR MOBILE */}
      <div 
        className="relative flex items-center justify-center transition-transform duration-300 ease-out"
        style={{ transform: `scale(${scale})` }}
      >
        {/* 3D SCENE WRAPPER */}
        <div 
          className={`w-[640px] h-[640px] perspective-[2000px] transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] transform ${
            mounted ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-12'
          }`}
        >
          
          {/* 3D ROTATING CIRCULAR CONTAINER */}
          <div 
            className="relative w-full h-full grid rounded-full transition-transform duration-700 ease-in-out"
            style={{ 
              transformStyle: 'preserve-3d', 
              transform: mode === 'signup' ? 'rotateY(180deg)' : 'rotateY(0deg)' 
            }}
          >

            {/* ========================================================= */}
            {/* FRONT FACE: SIGN IN */}
            {/* ========================================================= */}
            <div 
              className={`col-start-1 row-start-1 w-full h-full rounded-full p-5 ${neumorphOuter} flex items-center justify-center`}
              style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
            >
              {/* Inner raised ring */}
              <div className={`w-full h-full rounded-full ${neumorphInner} flex items-center justify-center relative p-6`}>
                
                {/* Safe Content Area */}
                <div className="w-[360px] flex flex-col justify-center">
                  
                  {renderLogo()}
                  {renderTabs('signin')}
                  
                  <div className="text-center mb-5">
                    <h2 className="font-black text-2xl text-gray-800 tracking-tight">Welcome back</h2>
                    <p className="text-gray-500 text-xs font-bold mt-1">Sign in to continue to RENZA</p>
                  </div>

                  {renderGoogleButton()}

                  <form onSubmit={handleSignInSubmit} className="flex flex-col gap-3">
                    <div className="flex flex-col gap-3">
                      <div className={`flex items-center px-4 py-2.5 rounded-2xl ${neumorphInput} focus-within:shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff,0_0_0_2px_#00D2C4] transition-all`}>
                        <Mail size={16} className="text-gray-400 mr-3" />
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full bg-transparent border-none outline-none text-gray-700 text-sm font-bold placeholder:text-gray-400"
                        />
                      </div>

                      <div className={`flex items-center px-4 py-2.5 rounded-2xl ${neumorphInput} focus-within:shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff,0_0_0_2px_#00D2C4] transition-all`}>
                        <Lock size={16} className="text-gray-400 mr-3" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          className="w-full bg-transparent border-none outline-none text-gray-700 text-sm font-bold placeholder:text-gray-400"
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-400 hover:text-[#00D2C4] transition-colors focus:outline-none cursor-pointer">
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>

                      <div className="flex items-center justify-between px-1 mt-1">
                        <label className="flex items-center gap-2 cursor-pointer group select-none">
                          <div className={`w-4 h-4 rounded flex items-center justify-center transition-all ${rememberMe ? 'bg-[#00D2C4] shadow-sm' : neumorphInput}`}>
                            {rememberMe && <Check size={12} strokeWidth={4} className="text-white" />}
                          </div>
                          <span className="text-xs font-bold text-gray-500 group-hover:text-gray-800 transition-colors">Remember me</span>
                          <input type="checkbox" className="hidden" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
                        </label>
                        <Link to="/forgot-password" className="text-xs font-bold text-gray-500 hover:text-[#00D2C4] transition-colors">
                          Forgot password?
                        </Link>
                      </div>

                      {errorMsg && mode === 'signin' && (
                        <p className="text-xs text-red-500 font-bold text-center animate-pulse">{errorMsg}</p>
                      )}
                    </div>

                    <div className="mt-2">
                      <button
                        type="submit"
                        disabled={isProcessing}
                        className={`w-full py-3.5 rounded-2xl font-black text-white text-sm tracking-wide flex items-center justify-center gap-2 ${neumorphPrimary} disabled:opacity-70 cursor-pointer mb-5`}
                      >
                        {isProcessing ? <Loader2 size={18} className="animate-spin text-white" /> : 'Sign In'}
                      </button>

                      <p className="text-center text-xs font-bold text-gray-500">
                        Don't have an account? 
                        <button type="button" onClick={() => switchMode('signup')} className="text-[#00D2C4] hover:text-[#00B3A6] transition-colors cursor-pointer ml-1">
                          Sign Up
                        </button>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* ========================================================= */}
            {/* BACK FACE: SIGN UP */}
            {/* ========================================================= */}
            <div 
              className={`col-start-1 row-start-1 w-full h-full rounded-full p-5 ${neumorphOuter} flex items-center justify-center`}
              style={{ 
                backfaceVisibility: 'hidden', 
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
            >
              {/* Inner raised ring */}
              <div className={`w-full h-full rounded-full ${neumorphInner} flex items-center justify-center relative p-6`}>
                
                {/* Safe Content Area */}
                <div className="w-[360px] flex flex-col justify-center">
                  
                  {renderLogo()}
                  {renderTabs('signup')}

                  <div className="text-center mb-5">
                    <h2 className="font-black text-2xl text-gray-800 tracking-tight">Create account</h2>
                    <p className="text-gray-500 text-xs font-bold mt-1">Join RENZA and get started</p>
                  </div>

                  {renderGoogleButton()}

                  <form onSubmit={handleSignUpSubmit} className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2.5">
                      <div className={`flex items-center px-4 py-2.5 rounded-2xl ${neumorphInput} focus-within:shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff,0_0_0_2px_#00D2C4] transition-all`}>
                        <User size={16} className="text-gray-400 mr-3" />
                        <input
                          type="text"
                          placeholder="Full Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          required
                          className="w-full bg-transparent border-none outline-none text-gray-700 text-sm font-bold placeholder:text-gray-400"
                        />
                      </div>

                      <div className={`flex items-center px-4 py-2.5 rounded-2xl ${neumorphInput} focus-within:shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff,0_0_0_2px_#00D2C4] transition-all`}>
                        <Mail size={16} className="text-gray-400 mr-3" />
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full bg-transparent border-none outline-none text-gray-700 text-sm font-bold placeholder:text-gray-400"
                        />
                      </div>

                      <div className={`flex items-center px-4 py-2.5 rounded-2xl ${neumorphInput} focus-within:shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff,0_0_0_2px_#00D2C4] transition-all`}>
                        <Lock size={16} className="text-gray-400 mr-3" />
                        <input
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          className="w-full bg-transparent border-none outline-none text-gray-700 text-sm font-bold placeholder:text-gray-400"
                        />
                        <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-400 hover:text-[#00D2C4] transition-colors focus:outline-none cursor-pointer">
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>

                      <div className={`flex items-center px-4 py-2.5 rounded-2xl ${neumorphInput} focus-within:shadow-[inset_8px_8px_16px_#d1d9e6,inset_-8px_-8px_16px_#ffffff,0_0_0_2px_#00D2C4] transition-all`}>
                        <Lock size={16} className="text-gray-400 mr-3" />
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          placeholder="Confirm Password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                          className="w-full bg-transparent border-none outline-none text-gray-700 text-sm font-bold placeholder:text-gray-400"
                        />
                        <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="text-gray-400 hover:text-[#00D2C4] transition-colors focus:outline-none cursor-pointer">
                          {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>

                      {errorMsg && mode === 'signup' && (
                        <p className="text-xs text-red-500 font-bold text-center animate-pulse">{errorMsg}</p>
                      )}
                      {successMsg && mode === 'signup' && (
                        <p className="text-xs text-[#00D2C4] font-bold text-center">{successMsg}</p>
                      )}
                    </div>

                    <div className="mt-1">
                      <button
                        type="submit"
                        disabled={isProcessing}
                        className={`w-full py-3.5 rounded-2xl font-black text-white text-sm tracking-wide flex items-center justify-center gap-2 ${neumorphPrimary} disabled:opacity-70 cursor-pointer mb-5`}
                      >
                        {isProcessing ? <Loader2 size={18} className="animate-spin text-white" /> : 'Sign Up'}
                      </button>

                      <p className="text-center text-xs font-bold text-gray-500">
                        Already have an account? 
                        <button type="button" onClick={() => switchMode('signin')} className="text-[#00D2C4] hover:text-[#00B3A6] transition-colors cursor-pointer ml-1">
                          Sign In
                        </button>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

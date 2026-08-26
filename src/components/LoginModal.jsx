import React, { useState } from 'react';
import { X, Mail, Lock, Eye, EyeOff, ArrowRight, Loader2, User } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Logo from './Logo';

// Google "G" SVG Icon
function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

export default function LoginModal({ isOpen, onClose }) {
  const { loginWithGoogle, loginWithEmail, signUpWithEmail } = useAuth();

  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  
  const [signingInGoogle, setSigningInGoogle] = useState(false);
  const [signingInEmail, setSigningInEmail] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  async function handleGoogleLogin() {
    setSigningInGoogle(true);
    setErrorMsg('');
    try {
      await loginWithGoogle();
      onClose();
    } catch (err) {
      setErrorMsg(err.message || 'Google sign-in failed. Please try again.');
    } finally {
      setSigningInGoogle(false);
    }
  }

  async function handleAuthSubmit(e) {
    e.preventDefault();
    setErrorMsg('');

    if (isSignUp) {
      if (!name.trim()) { setErrorMsg('Please enter your full name.'); return; }
      if (!email || !password) { setErrorMsg('Please enter your email and password.'); return; }
      if (password !== confirmPassword) { setErrorMsg('Passwords do not match.'); return; }
      
      setSigningInEmail(true);
      try {
        await signUpWithEmail(email, password, name);
        onClose();
      } catch (err) {
        setErrorMsg(err.message || 'Sign-up failed. Please try again.');
      } finally {
        setSigningInEmail(false);
      }
    } else {
      if (!email || !password) { setErrorMsg('Please enter your email and password.'); return; }
      
      setSigningInEmail(true);
      try {
        await loginWithEmail(email, password);
        onClose();
      } catch (err) {
        setErrorMsg(err.message || 'Sign-in failed. Please try again.');
      } finally {
        setSigningInEmail(false);
      }
    }
  }

  const toggleMode = () => {
    setIsSignUp(prev => !prev);
    setErrorMsg('');
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Blurred dark overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-[420px] bg-white dark:bg-[#1a1a1a] rounded-[28px] border border-gray-200 dark:border-neutral-800 shadow-2xl overflow-hidden">
        <div className="px-8 pt-10 pb-8">

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full border border-gray-200 dark:border-neutral-800 bg-white dark:bg-[#242424] hover:bg-gray-50 dark:hover:bg-neutral-800 flex items-center justify-center transition-colors cursor-pointer shadow-sm text-text-dark dark:text-white"
            aria-label="Close"
          >
            <X size={16} />
          </button>

          {/* Logo pill */}
          <div className="flex justify-center mb-6">
            <Logo size="small" />
          </div>

          {/* Heading */}
          <h2 className="font-sans font-black text-[26px] text-deep-black dark:text-white text-center tracking-tight mb-1">
            {isSignUp ? 'Create Profile' : 'Welcome Back'}
          </h2>
          <p className="text-text-secondary text-sm font-medium text-center mb-7 leading-relaxed">
            {isSignUp ? 'Join RENZA for managed task services' : 'Access your RENZA account & managed tasks'}
          </p>

          {/* Google Button */}
          <button
            onClick={handleGoogleLogin}
            disabled={signingInGoogle || signingInEmail}
            className="w-full flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl border border-gray-250 dark:border-neutral-800 bg-white dark:bg-[#242424] hover:bg-gray-50 dark:hover:bg-neutral-800 transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed shadow-sm mb-5"
          >
            {signingInGoogle ? <Loader2 size={20} className="animate-spin text-text-secondary" /> : <GoogleIcon />}
            <span className="font-sans font-bold text-[15px] text-deep-black dark:text-white">
              {signingInGoogle ? 'Processing…' : 'Continue with Google'}
            </span>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-gray-200 dark:bg-neutral-850" />
            <span className="text-[11px] font-black text-text-secondary tracking-widest uppercase">Or with email</span>
            <div className="flex-1 h-px bg-gray-200 dark:bg-neutral-850" />
          </div>

          {/* Email / Password Form */}
          <form onSubmit={handleAuthSubmit} className="flex flex-col gap-4">

            {/* Name (Sign up only) */}
            {isSignUp && (
              <div>
                <label className="block text-sm font-bold text-deep-black dark:text-white mb-1.5">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <User size={16} className="text-text-secondary" />
                  </div>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter full name"
                    className="w-full pl-10 pr-4 py-3.5 rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-[#242424] text-text-dark dark:text-white text-sm font-medium placeholder:text-gray-400 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 transition-all"
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-deep-black dark:text-white mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Mail size={16} className="text-text-secondary" />
                </div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-3.5 rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-[#242424] text-text-dark dark:text-white text-sm font-medium placeholder:text-gray-400 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-bold text-deep-black dark:text-white mb-1.5">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Lock size={16} className="text-text-secondary" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={isSignUp ? 'Choose password (min 6 chars)' : 'Enter password'}
                  className="w-full pl-10 pr-12 py-3.5 rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-[#242424] text-text-dark dark:text-white text-sm font-medium placeholder:text-gray-400 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-dark transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {/* Confirm Password (Sign up only) */}
            {isSignUp && (
              <div>
                <label className="block text-sm font-bold text-deep-black dark:text-white mb-1.5">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    <Lock size={16} className="text-text-secondary" />
                  </div>
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Verify password"
                    className="w-full pl-10 pr-12 py-3.5 rounded-2xl border border-gray-200 dark:border-neutral-800 bg-white dark:bg-[#242424] text-text-dark dark:text-white text-sm font-medium placeholder:text-gray-400 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-dark transition-colors cursor-pointer"
                  >
                    {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
            )}

            {/* Remember me + Forgot password (Sign in only) */}
            {!isSignUp && (
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded accent-brand-yellow cursor-pointer"
                  />
                  <span className="text-sm text-text-secondary font-medium">Remember me</span>
                </label>
                <button type="button" className="text-sm font-bold text-deep-black dark:text-white hover:text-brand-yellow transition-colors cursor-pointer">
                  Forgot password?
                </button>
              </div>
            )}

            {/* Error */}
            {errorMsg && (
              <p className="text-sm text-red-500 font-semibold bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/35 rounded-xl px-4 py-2.5 text-center">
                {errorMsg}
              </p>
            )}

            {/* Action Button */}
            <button
              type="submit"
              disabled={signingInEmail || signingInGoogle}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-brand-yellow hover:bg-[#00B3A6] text-deep-black font-black text-base tracking-wide transition-all duration-300 shadow-yellow-glow hover:shadow-yellow-glow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed mt-1"
            >
              {signingInEmail ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <>
                  {isSignUp ? 'Create Profile & Sign Up' : 'Sign In to RENZA'}
                  <ArrowRight size={18} strokeWidth={2.5} />
                </>
              )}
            </button>
          </form>

          {/* Toggle View Link */}
          <p className="text-center text-sm text-text-secondary font-medium mt-6">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
            <button 
              onClick={toggleMode}
              className="font-black text-deep-black dark:text-white hover:text-brand-yellow transition-colors cursor-pointer"
            >
              {isSignUp ? 'Sign in' : 'Sign up'}
            </button>
          </p>

        </div>
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { X, Mail, Lock, Eye, EyeOff, ArrowRight, Loader2 } from 'lucide-react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuth } from '../context/AuthContext';

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
  const { loginWithGoogle } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
      if (err.code !== 'auth/popup-closed-by-user' && err.code !== 'auth/cancelled-popup-request') {
        setErrorMsg('Google sign-in failed. Please try again.');
      }
    } finally {
      setSigningInGoogle(false);
    }
  }

  async function handleEmailLogin(e) {
    e.preventDefault();
    if (!email || !password) { setErrorMsg('Please enter your email and password.'); return; }
    setSigningInEmail(true);
    setErrorMsg('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onClose();
    } catch (err) {
      const messages = {
        'auth/user-not-found': 'No account found with this email.',
        'auth/wrong-password': 'Incorrect password.',
        'auth/invalid-email': 'Please enter a valid email address.',
        'auth/too-many-requests': 'Too many attempts. Please try again later.',
      };
      setErrorMsg(messages[err.code] || 'Sign-in failed. Please try again.');
    } finally {
      setSigningInEmail(false);
    }
  }

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Blurred dark overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal Card */}
      <div className="relative z-10 w-full max-w-[420px] bg-white rounded-[28px] shadow-2xl overflow-hidden">
        <div className="px-8 pt-10 pb-8">

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center transition-colors cursor-pointer shadow-sm"
            aria-label="Close"
          >
            <X size={16} className="text-text-dark" />
          </button>

          {/* RENZA Logo pill */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2.5 bg-deep-black text-white px-5 py-2.5 rounded-full shadow-md">
              <div className="w-6 h-6 bg-brand-yellow rounded flex items-center justify-center">
                <span className="font-black text-deep-black text-xs">R</span>
              </div>
              <span className="font-sans font-black text-base tracking-tight">Renza</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="font-sans font-black text-[26px] text-deep-black text-center tracking-tight mb-1">
            Welcome Back
          </h2>
          <p className="text-text-secondary text-sm font-medium text-center mb-7 leading-relaxed">
            Access your RENZA account &amp; managed tasks
          </p>

          {/* Google Button */}
          <button
            onClick={handleGoogleLogin}
            disabled={signingInGoogle || signingInEmail}
            className="w-full flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl border border-gray-250 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed shadow-sm mb-5"
          >
            {signingInGoogle ? <Loader2 size={20} className="animate-spin text-text-secondary" /> : <GoogleIcon />}
            <span className="font-sans font-bold text-[15px] text-deep-black">
              {signingInGoogle ? 'Signing in…' : 'Continue with Google'}
            </span>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-[11px] font-black text-text-secondary tracking-widest uppercase">Or with email</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Email / Password Form */}
          <form onSubmit={handleEmailLogin} className="flex flex-col gap-4">

            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-deep-black mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Mail size={16} className="text-text-secondary" />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pl-10 pr-4 py-3.5 rounded-2xl border border-gray-200 bg-white text-text-dark text-sm font-medium placeholder:text-gray-400 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 transition-all"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-bold text-deep-black mb-1.5">
                Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Lock size={16} className="text-text-secondary" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full pl-10 pr-12 py-3.5 rounded-2xl border border-gray-200 bg-white text-text-dark text-sm font-medium placeholder:text-gray-400 focus:outline-none focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/20 transition-all"
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

            {/* Remember me + Forgot password */}
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
              <button type="button" className="text-sm font-bold text-deep-black hover:text-brand-yellow transition-colors cursor-pointer">
                Forgot password?
              </button>
            </div>

            {/* Error */}
            {errorMsg && (
              <p className="text-sm text-red-500 font-semibold bg-red-50 border border-red-100 rounded-xl px-4 py-2.5 text-center">
                {errorMsg}
              </p>
            )}

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={signingInEmail || signingInGoogle}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-brand-yellow hover:bg-[#F2D900] text-deep-black font-black text-base tracking-wide transition-all duration-300 shadow-yellow-glow hover:shadow-yellow-glow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed mt-1"
            >
              {signingInEmail ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                <>
                  Sign In to RENZA
                  <ArrowRight size={18} strokeWidth={2.5} />
                </>
              )}
            </button>
          </form>

          {/* Sign up link */}
          <p className="text-center text-sm text-text-secondary font-medium mt-6">
            Don't have an account?{' '}
            <button className="font-black text-deep-black hover:text-brand-yellow transition-colors cursor-pointer">
              Sign up
            </button>
          </p>

        </div>
      </div>
    </div>
  );
}

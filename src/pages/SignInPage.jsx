import React, { useState, useEffect } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Loader2, ArrowLeft } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../components/Logo';

export default function SignInPage() {
  const { loginWithGoogle, loginWithEmail, user, loading } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [signingInGoogle, setSigningInGoogle] = useState(false);
  const [signingInEmail, setSigningInEmail] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Redirect if already authenticated
  useEffect(() => {
    if (!loading && user) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  async function handleGoogleLogin() {
    setSigningInGoogle(true);
    setErrorMsg('');
    try {
      await loginWithGoogle();
    } catch (err) {
      setErrorMsg(err.message || 'Google sign-in failed. Please try again.');
      setSigningInGoogle(false);
    }
  }

  async function handleEmailLogin(e) {
    e.preventDefault();
    if (!email || !password) { setErrorMsg('Please enter your email and password.'); return; }
    setSigningInEmail(true);
    setErrorMsg('');
    try {
      await loginWithEmail(email, password);
      navigate('/');
    } catch (err) {
      setErrorMsg(err.message || 'Sign-in failed. Please try again.');
    } finally {
      setSigningInEmail(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#F7F7F5] dark:bg-[#0e0e0e] transition-colors duration-300">
      {/* Back to Home Button */}
      <Link
        to="/"
        className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-neutral-800 bg-white dark:bg-[#1a1a1a] hover:bg-gray-50 dark:hover:bg-neutral-800 text-sm font-bold text-text-dark dark:text-white transition-all shadow-sm cursor-pointer"
      >
        <ArrowLeft size={16} />
        Back to Home
      </Link>

      {/* Modal Card */}
      <div className="w-full max-w-[420px] bg-white dark:bg-[#1a1a1a] rounded-[28px] border border-gray-200 dark:border-neutral-800 shadow-2xl p-8 transition-colors duration-300">
        
        {/* Logo pill */}
        <div className="flex justify-center mb-6">
          <Logo size="small" />
        </div>

        {/* Heading */}
        <h2 className="font-sans font-black text-[26px] text-[#111111] dark:text-white text-center tracking-tight mb-1">
          Welcome Back
        </h2>
        <p className="text-text-secondary text-sm font-medium text-center mb-7 leading-relaxed">
          Access your RENZA account &amp; managed tasks
        </p>

        {/* Google Button */}
        <button
          onClick={handleGoogleLogin}
          disabled={signingInGoogle || signingInEmail}
          className="w-full flex items-center justify-center gap-3 px-5 py-3.5 rounded-2xl border border-gray-250 dark:border-neutral-800 bg-white dark:bg-[#242424] hover:bg-gray-50 dark:hover:bg-neutral-800 transition-all duration-200 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed shadow-sm mb-5 text-deep-black dark:text-white"
        >
          {signingInGoogle ? (
            <Loader2 size={20} className="animate-spin text-text-secondary" />
          ) : (
            <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
          )}
          <span className="font-sans font-bold text-[15px]">
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
        <form onSubmit={handleEmailLogin} className="flex flex-col gap-4">
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
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-sm font-bold text-deep-black dark:text-white">
                Password <span className="text-red-500">*</span>
              </label>
              <Link to="/forgot-password" className="text-xs font-bold text-[#111111] dark:text-white hover:text-brand-yellow transition-colors">
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <Lock size={16} className="text-text-secondary" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
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

          {/* Error */}
          {errorMsg && (
            <p className="text-sm text-red-500 font-semibold bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/35 rounded-xl px-4 py-2.5 text-center">
              {errorMsg}
            </p>
          )}

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={signingInEmail || signingInGoogle}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-brand-yellow hover:bg-[#00B3A6] text-deep-black font-black text-base tracking-wide transition-all duration-300 shadow-yellow-glow hover:shadow-yellow-glow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed mt-1"
          >
            {signingInEmail ? (
              <Loader2 size={18} className="animate-spin text-deep-black" />
            ) : (
              <>
                Sign In to RENZA
                <ArrowRight size={18} strokeWidth={2.5} />
              </>
            )}
          </button>
        </form>

        {/* Footer link */}
        <p className="text-center text-sm text-text-secondary font-medium mt-6">
          Don't have an account?{' '}
          <Link to="/signup" className="font-black text-[#111111] dark:text-white hover:text-brand-yellow transition-colors">
            Sign up
          </Link>
        </p>

      </div>
    </div>
  );
}

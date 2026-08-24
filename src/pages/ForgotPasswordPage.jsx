import React, { useState } from 'react';
import { Mail, ArrowRight, Loader2, ArrowLeft, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

export default function ForgotPasswordPage() {
  const { sendPasswordResetEmail } = useAuth();
  
  const [email, setEmail] = useState('');
  const [sendingReset, setSendingReset] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

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

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#F7F7F5] dark:bg-[#0e0e0e] transition-colors duration-300">
      {/* Back to Sign In Button */}
      <Link
        to="/signin"
        className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-neutral-800 bg-white dark:bg-[#1a1a1a] hover:bg-gray-50 dark:hover:bg-neutral-800 text-sm font-bold text-text-dark dark:text-white transition-all shadow-sm cursor-pointer"
      >
        <ArrowLeft size={16} />
        Back to Sign In
      </Link>

      {/* Modal Card */}
      <div className="w-full max-w-[420px] bg-white dark:bg-[#1a1a1a] rounded-[28px] border border-gray-200 dark:border-neutral-800 shadow-2xl p-8 transition-colors duration-300">
        
        {/* Logo pill */}
        <div className="flex justify-center mb-6">
          <Logo size="small" />
        </div>

        {/* Heading */}
        <h2 className="font-sans font-black text-[26px] text-[#111111] dark:text-white text-center tracking-tight mb-1">
          Reset Password
        </h2>
        <p className="text-text-secondary text-sm font-medium text-center mb-7 leading-relaxed">
          We will email you instructions to reset your password
        </p>

        {/* Success Alert */}
        {successMsg ? (
          <div className="flex flex-col items-center justify-center gap-3 p-6 text-center bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/50 rounded-2xl mb-4">
            <CheckCircle className="text-green-500 w-10 h-10" />
            <p className="text-sm text-green-700 dark:text-green-300 font-bold leading-relaxed">
              {successMsg}
            </p>
            <Link to="/signin" className="mt-2 text-xs font-bold text-green-700 dark:text-green-300 underline hover:text-brand-yellow">
              Go to Sign In Page
            </Link>
          </div>
        ) : (
          <form onSubmit={handleResetSubmit} className="flex flex-col gap-4">
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

            {/* Error */}
            {errorMsg && (
              <p className="text-sm text-red-500 font-semibold bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/35 rounded-xl px-4 py-2.5 text-center">
                {errorMsg}
              </p>
            )}

            {/* Reset Button */}
            <button
              type="submit"
              disabled={sendingReset}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-brand-yellow hover:bg-[#F2D900] text-deep-black font-black text-base tracking-wide transition-all duration-300 shadow-yellow-glow hover:shadow-yellow-glow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed mt-1"
            >
              {sendingReset ? (
                <Loader2 size={18} className="animate-spin text-deep-black" />
              ) : (
                <>
                  Send Reset Link
                  <ArrowRight size={18} strokeWidth={2.5} />
                </>
              )}
            </button>
          </form>
        )}

        {/* Footer link */}
        <p className="text-center text-sm text-text-secondary font-medium mt-6">
          Remembered your password?{' '}
          <Link to="/signin" className="font-black text-[#111111] dark:text-white hover:text-brand-yellow transition-colors">
            Sign in
          </Link>
        </p>

      </div>
    </div>
  );
}

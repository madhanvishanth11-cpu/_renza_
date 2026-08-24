import React, { useState, useEffect } from 'react';
import { Lock, Eye, EyeOff, ArrowRight, Loader2, CheckCircle } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../components/Logo';

export default function ResetPasswordPage() {
  const { updatePassword, user } = useAuth();
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [updating, setUpdating] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Handle case where user gets here without session (i.e. not authenticated)
  useEffect(() => {
    // Supabase will automatically set the session if the hash parameters are present in the URL,
    // which triggers useAuth() user loading. If there is no user and no URL hash parameters,
    // they shouldn't be on this page.
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
      confirmPassword('');
      setTimeout(() => {
        navigate('/signin');
      }, 2000);
    } catch (err) {
      setErrorMsg(err.message || 'Failed to update password. Please request a new link.');
    } finally {
      setUpdating(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#F7F7F5] dark:bg-[#0e0e0e] transition-colors duration-300">
      {/* Modal Card */}
      <div className="w-full max-w-[420px] bg-white dark:bg-[#1a1a1a] rounded-[28px] border border-gray-200 dark:border-neutral-800 shadow-2xl p-8 transition-colors duration-300">
        
        {/* Logo pill */}
        <div className="flex justify-center mb-6">
          <Logo size="small" />
        </div>

        {/* Heading */}
        <h2 className="font-sans font-black text-[26px] text-[#111111] dark:text-white text-center tracking-tight mb-1">
          Set New Password
        </h2>
        <p className="text-text-secondary text-sm font-medium text-center mb-7 leading-relaxed">
          Create a new secure password for your account
        </p>

        {/* Success Alert */}
        {successMsg ? (
          <div className="flex flex-col items-center justify-center gap-3 p-6 text-center bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-900/50 rounded-2xl mb-4">
            <CheckCircle className="text-green-500 w-10 h-10" />
            <p className="text-sm text-green-700 dark:text-green-300 font-bold leading-relaxed">
              {successMsg}
            </p>
            <p className="text-xs text-text-secondary mt-1">
              Redirecting to Sign In...
            </p>
          </div>
        ) : (
          <form onSubmit={handleResetSubmit} className="flex flex-col gap-4">
            {/* New Password */}
            <div>
              <label className="block text-sm font-bold text-deep-black dark:text-white mb-1.5">
                New Password <span className="text-red-500">*</span>
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
                  placeholder="Enter new password"
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

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-bold text-deep-black dark:text-white mb-1.5">
                Confirm New Password <span className="text-red-500">*</span>
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
                  placeholder="Confirm new password"
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

            {/* Error */}
            {errorMsg && (
              <p className="text-sm text-red-500 font-semibold bg-red-50 dark:bg-red-950/20 border border-red-100 dark:border-red-900/35 rounded-xl px-4 py-2.5 text-center">
                {errorMsg}
              </p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={updating}
              className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-brand-yellow hover:bg-[#F2D900] text-deep-black font-black text-base tracking-wide transition-all duration-300 shadow-yellow-glow hover:shadow-yellow-glow-lg hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed mt-1"
            >
              {updating ? (
                <Loader2 size={18} className="animate-spin text-deep-black" />
              ) : (
                <>
                  Update Password
                  <ArrowRight size={18} strokeWidth={2.5} />
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
}

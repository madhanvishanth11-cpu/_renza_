import React, { useState, useRef, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, Download, LogOut, User, ChevronDown, Sun, Moon } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useNavigate } from 'react-router-dom';

// ─── User Avatar Dropdown ───────────────────────────────────
function UserMenu({ user, profile, logout }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const displayName = profile?.name || user?.displayName || 'User';
  const photoURL = profile?.photoURL || user?.photoURL || null;
  const email = profile?.email || user?.email || '';
  const initials = displayName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);

  return (
    <div className="relative" ref={menuRef}>
      {/* Avatar Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2.5 px-3 py-2 rounded-full border border-gray-200 hover:border-brand-yellow bg-white hover:shadow-yellow-glow/10 transition-all duration-300 cursor-pointer group"
        aria-label="Open user menu"
      >
        {/* Avatar image or initials */}
        {photoURL ? (
          <img
            src={photoURL}
            alt={displayName}
            className="w-7 h-7 rounded-full object-cover border border-gray-100"
          />
        ) : (
          <div className="w-7 h-7 rounded-full bg-brand-yellow flex items-center justify-center text-deep-black font-black text-[10px]">
            {initials}
          </div>
        )}
        <span className="hidden md:block text-sm font-semibold text-text-dark max-w-[100px] truncate">
          {displayName.split(' ')[0]}
        </span>
        <ChevronDown
          size={14}
          className={`text-text-secondary transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-white border border-gray-200 rounded-[20px] shadow-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {/* Profile header */}
          <div className="px-5 py-4 border-b border-gray-100 flex items-center gap-3">
            {photoURL ? (
              <img src={photoURL} alt={displayName} className="w-10 h-10 rounded-full object-cover border border-gray-100 flex-shrink-0" />
            ) : (
              <div className="w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center text-deep-black font-black text-sm flex-shrink-0">
                {initials}
              </div>
            )}
            <div className="overflow-hidden">
              <p className="font-black text-sm text-text-dark truncate">{displayName}</p>
              <p className="text-[11px] text-text-secondary truncate">{email}</p>
            </div>
          </div>

          {/* Menu items */}
          <div className="py-2">
            <button
              className="w-full flex items-center gap-3 px-5 py-3 text-sm font-semibold text-text-secondary hover:text-text-dark hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <User size={15} />
              My Profile
            </button>
            <button
              onClick={() => { logout(); setOpen(false); }}
              className="w-full flex items-center gap-3 px-5 py-3 text-sm font-semibold text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
            >
              <LogOut size={15} />
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Navbar ─────────────────────────────────────────────────
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, profile, loading, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  React.useEffect(() => {
    const handleOpenLogin = () => navigate('/signin');
    window.addEventListener('open-login-modal', handleOpenLogin);
    return () => window.removeEventListener('open-login-modal', handleOpenLogin);
  }, [navigate]);

  const handleLogoClick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Services', href: '#services' },
    { label: 'Safety & Trust', href: '#safety' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header className={`sticky top-0 z-50 w-full h-[64px] md:h-[84px] backdrop-blur-md border-b transition-colors duration-300 flex items-center justify-between px-4 md:px-12 lg:px-20 ${isDark ? 'bg-[#0e0e0e]/95 border-neutral-800' : 'bg-white/95 border-gray-200/80'}`}>
        {/* LEFT: Logo */}
        <div className="flex-shrink-0">
          <a href="#" onClick={handleLogoClick} aria-label="RENZA Home" className="transition-transform hover:scale-[1.02]">
            <Logo size="large" />
          </a>
        </div>

        {/* CENTER: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`relative py-2 text-sm font-semibold tracking-wide transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-brand-yellow after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center ${isDark ? 'text-gray-300 hover:text-white' : 'text-text-secondary hover:text-text-dark'}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* RIGHT: Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Standard Day/Night Toggle */}
          <button
            onClick={toggleTheme}
            className={`flex items-center justify-center w-10 h-10 rounded-full transition-all duration-200 ${
              isDark 
                ? 'bg-neutral-800 text-neutral-300 hover:text-[#00D2C4] hover:bg-neutral-700' 
                : 'bg-gray-100 text-gray-600 hover:text-[#00D2C4] hover:bg-gray-200'
            }`}
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Auth: Login button OR User Avatar */}
          {!loading && (
            user ? (
              <UserMenu user={user} profile={profile} logout={logout} />
            ) : (
              <button
                onClick={() => navigate('/signin')}
                className={`px-6 py-2.5 rounded-full border font-semibold text-sm transition-all duration-300 hover:shadow-sm hover:scale-[1.02] active:scale-95 cursor-pointer ${isDark ? 'border-neutral-700 bg-neutral-800 text-neutral-200 hover:text-white hover:border-neutral-600' : 'border-gray-200 bg-white text-[#111111] hover:text-[#000000] hover:border-gray-400'}`}
              >
                Login
              </button>
            )
          )}


        </div>

        {/* Mobile Right Controls */}
        <div className="flex lg:hidden items-center gap-2 sm:gap-3">
          {/* Mobile Theme Toggle (Standard) */}
          <button
            onClick={toggleTheme}
            className={`flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 mr-1 ${
              isDark 
                ? 'bg-neutral-800 text-neutral-300 hover:text-[#00D2C4] hover:bg-neutral-700' 
                : 'bg-gray-100 text-gray-600 hover:text-[#00D2C4] hover:bg-gray-200'
            }`}
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile: show avatar or login icon */}
          {!loading && user && (
            <div className="flex items-center flex-shrink-0">
              {user.photoURL ? (
                <img src={user.photoURL} alt="profile" className="w-9 h-9 rounded-full border border-gray-200 object-cover" />
              ) : (
                <div className="w-9 h-9 rounded-full bg-brand-yellow flex items-center justify-center text-deep-black font-black text-xs border border-gray-200">
                  {(profile?.name || user.displayName || 'U')[0].toUpperCase()}
                </div>
              )}
            </div>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`w-9 h-9 rounded-full border flex items-center justify-center cursor-pointer transition-all duration-200 active:scale-95 ${isDark ? 'bg-neutral-800 border-neutral-700 text-neutral-300 hover:bg-neutral-700' : 'bg-white border-gray-200 text-text-dark hover:bg-gray-50'}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <div className={`absolute top-[64px] md:top-[84px] left-0 w-full border-b shadow-lg lg:hidden flex flex-col px-6 py-8 gap-6 z-40 transition-all duration-300 ease-in-out animate-in fade-in slide-in-from-top-5 ${isDark ? 'bg-[#0e0e0e] border-neutral-800' : 'bg-white border-gray-200'}`}>
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold py-2 transition-colors border-b ${isDark ? 'text-gray-300 hover:text-white border-neutral-800' : 'text-text-secondary hover:text-text-dark border-gray-50'}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="flex flex-col gap-3 pt-2">
              {user ? (
                <button
                  onClick={() => { logout(); setMobileMenuOpen(false); }}
                  className="w-full flex items-center justify-center gap-2 text-center px-6 py-3 rounded-full border border-red-200 bg-red-50 text-red-500 font-semibold text-sm cursor-pointer"
                >
                  <LogOut size={14} />
                  Sign Out
                </button>
              ) : (
                <button
                  onClick={() => { navigate('/signin'); setMobileMenuOpen(false); }}
                  className={`w-full text-center px-6 py-3 rounded-full border font-semibold text-sm cursor-pointer ${isDark ? 'border-neutral-700 bg-neutral-800 text-neutral-200 hover:text-white hover:bg-neutral-700' : 'border-gray-200 bg-white text-[#111111] hover:bg-gray-50'}`}
                >
                  Login
                </button>
              )}

            </div>
          </div>
        )}
      </header>

    </>
  );
}

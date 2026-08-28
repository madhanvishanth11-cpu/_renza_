import React, { useState, useRef, useEffect } from 'react';
import Logo from './Logo';
import { Moon, Sun, Download, Menu, X, LogOut, User, ChevronDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
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
export default function Navbar({ theme, toggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { user, profile, loading, logout } = useAuth();

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
      <header className="sticky top-0 z-50 w-full h-[64px] md:h-[84px] bg-white/95 backdrop-blur-md border-b border-gray-200/80 transition-colors duration-300 flex items-center justify-between px-4 md:px-12 lg:px-20">
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
              className="relative py-2 text-sm font-semibold tracking-wide text-text-secondary hover:text-text-dark transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-brand-yellow after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* RIGHT: Actions (Desktop) */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-gray-200 hover:border-gray-400 bg-white text-text-dark transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center cursor-pointer"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun size={18} className="text-[#00D2C4]" /> : <Moon size={18} className="text-[#111111]" />}
          </button>

          {/* Auth: Login button OR User Avatar */}
          {!loading && (
            user ? (
              <UserMenu user={user} profile={profile} logout={logout} />
            ) : (
              <button
                onClick={() => navigate('/signin')}
                className="px-6 py-2.5 rounded-full border border-gray-200 hover:border-gray-400 bg-white text-[#111111] hover:text-[#000000] font-semibold text-sm transition-all duration-300 hover:shadow-sm hover:scale-[1.02] active:scale-95 cursor-pointer"
              >
                Login
              </button>
            )
          )}

          {/* Download App Button */}
          <button className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-brand-yellow hover:bg-[#00B3A6] text-deep-black font-bold text-sm tracking-wide transition-all duration-300 shadow-yellow-glow hover:shadow-yellow-glow-lg hover:scale-[1.03] hover:-translate-y-0.5 active:scale-95 cursor-pointer">
            <Download size={16} strokeWidth={2.5} />
            Download App
          </button>
        </div>

        {/* Mobile Right Controls */}
        <div className="flex lg:hidden items-center gap-2 sm:gap-3">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full border border-gray-200 bg-white text-text-dark flex items-center justify-center cursor-pointer active:scale-95 transition-all duration-200"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} className="text-[#00D2C4]" /> : <Moon size={16} className="text-[#111111]" />}
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
            className="w-9 h-9 rounded-full border border-gray-200 bg-white text-text-dark flex items-center justify-center cursor-pointer transition-colors active:scale-95 transition-all duration-200 hover:bg-gray-50"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-[64px] md:top-[84px] left-0 w-full bg-white border-b border-gray-200 shadow-lg lg:hidden flex flex-col px-6 py-8 gap-6 z-40 transition-all duration-300 ease-in-out animate-in fade-in slide-in-from-top-5">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-text-secondary hover:text-text-dark py-2 transition-colors border-b border-gray-50"
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
                  className="w-full text-center px-6 py-3 rounded-full border border-gray-200 bg-white text-[#111111] font-semibold text-sm hover:bg-gray-50 cursor-pointer"
                >
                  Login
                </button>
              )}
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-brand-yellow text-deep-black font-bold text-sm shadow-yellow-glow cursor-pointer">
                <Download size={16} strokeWidth={2.5} />
                Download App
              </button>
            </div>
          </div>
        )}
      </header>

    </>
  );
}

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesRow from './components/FeaturesRow';
import ServicesSection from './components/ServicesSection';
import HowItWorks from './components/HowItWorks';
import TrustSection from './components/TrustSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';

// Import Auth Pages
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage';

function Home() {
  return (
    <main className="flex-1 flex flex-col justify-between">
      <Hero />
      <HowItWorks />
      <FeaturesRow />
      <ServicesSection />
      <TrustSection />
      <FAQSection />
      <Footer />
    </main>
  );
}

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <AuthProvider>
      <Router>
        <div className={`min-h-screen flex flex-col transition-colors duration-300 ${theme === 'dark' ? 'dark-theme bg-[#0e0e0e] text-[#f3f4f6]' : 'bg-[#F7F7F5] text-[#181818]'}`}>
          <Routes>
            {/* Landing page layout */}
            <Route path="/" element={
              <>
                <Navbar theme={theme} toggleTheme={toggleTheme} />
                <Home />
              </>
            } />
            
            {/* Auth page layouts */}
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            
            {/* Fallback redirect */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

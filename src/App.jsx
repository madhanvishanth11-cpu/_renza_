import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import FeaturesRow from './components/FeaturesRow';
import ServicesSection from './components/ServicesSection';
import TrustSection from './components/TrustSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';

// Import Auth Pages
import AuthPage from './pages/AuthPage';
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

// InnerApp component to consume useTheme from the provider above it
function InnerApp() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${theme === 'dark' ? 'dark-theme bg-[#0e0e0e] text-[#f3f4f6]' : 'bg-[#F7F7F5] text-[#181818]'}`}>
      <Routes>
        {/* Landing page layout */}
        <Route path="/" element={
          <>
            <Navbar />
            <Home />
          </>
        } />
        
        {/* Auth page layouts */}
        <Route path="/signin" element={<AuthPage />} />
        <Route path="/signup" element={<AuthPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        
        {/* Fallback redirect */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <InnerApp />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

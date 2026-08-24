import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesRow from './components/FeaturesRow';
import ComparisonSection from './components/ComparisonSection';
import ServicesSection from './components/ServicesSection';
import HowItWorks from './components/HowItWorks';
import TrustSection from './components/TrustSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <AuthProvider>
      <div className={`min-h-screen flex flex-col transition-colors duration-300 ${theme === 'dark' ? 'dark-theme bg-[#0e0e0e] text-[#f3f4f6]' : 'bg-[#F7F7F5] text-[#181818]'}`}>
        {/* Navigation Header */}
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        {/* Main Content */}
        <main className="flex-1 flex flex-col justify-between">
          <Hero />
          <HowItWorks />
          <FeaturesRow />
          <ComparisonSection />
          <ServicesSection />
          <TrustSection />
          <FAQSection />
          <Footer />
        </main>
      </div>
    </AuthProvider>
  );
}

export default App;

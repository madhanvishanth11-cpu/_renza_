import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // Initialize theme from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('renza-theme');
      if (savedTheme) {
        return savedTheme;
      }
      // Optional: check system preference
      // if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      //   return 'dark';
      // }
    } catch (e) {
      console.error("Error reading theme from localStorage", e);
    }
    return 'light';
  });

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  // Sync theme with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('renza-theme', theme);
    } catch (e) {
      console.error("Error saving theme to localStorage", e);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

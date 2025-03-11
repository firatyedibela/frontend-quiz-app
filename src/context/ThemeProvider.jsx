import { useState, createContext, useEffect } from 'react';

export const Theme = createContext();

function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' ? true : false
  );
  console.log(isDarkMode);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', !isDarkMode ? 'dark' : 'light');
  };

  useEffect(() => {
    if (isDarkMode) document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  }, [isDarkMode]);

  return (
    <Theme.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </Theme.Provider>
  );
}

export default ThemeProvider;

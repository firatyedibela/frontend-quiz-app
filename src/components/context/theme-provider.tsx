import React, { createContext, useEffect, useState } from 'react';

type ThemeProviderProps = {
  children: React.ReactNode;
};

const defaultContext = {
  isDarkMode: false,
  toggleTheme: () => {},
};

export const Theme = createContext(defaultContext);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(defaultContext.isDarkMode);

  return (
    <Theme.Provider
      value={{
        isDarkMode,
        toggleTheme: () => setIsDarkMode((isDark) => !isDark),
      }}
    >
      {children}
    </Theme.Provider>
  );
}

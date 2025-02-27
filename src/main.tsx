import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SubjectProvider } from './components/context/subject-provider.tsx';
import { ThemeProvider } from './components/context/theme-provider.tsx';
import App from './App.tsx';
import './sass/index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <SubjectProvider>
        <App />
      </SubjectProvider>
    </ThemeProvider>
  </StrictMode>
);

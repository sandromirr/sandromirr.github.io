import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { ThemeProvider } from './ThemeContext';
import './index.css';

const app = (
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>
);

if (typeof document !== 'undefined') {
  createRoot(document.getElementById('root')!).render(app);
}

export async function prerender() {
  const { renderToString } = await import('react-dom/server');
  return { html: renderToString(app) };
}
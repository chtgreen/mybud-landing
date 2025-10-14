import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import posthog from 'posthog-js';
import './index.css';
import './styles.css';
import App from './App.tsx';

posthog.init(import.meta.env.VITE_POSTHOG_KEY as string, {
  api_host: (import.meta.env.VITE_POSTHOG_HOST as string) || 'https://app.posthog.com',
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

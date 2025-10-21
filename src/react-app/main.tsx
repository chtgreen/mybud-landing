import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import posthog from 'posthog-js';
import ReactGA from 'react-ga4';
import './index.css';
import './styles.css';
import App from './App.tsx';

// Initialize PostHog
posthog.init(import.meta.env.VITE_POSTHOG_KEY as string, {
  api_host: (import.meta.env.VITE_POSTHOG_HOST as string) || 'https://app.posthog.com',
});

// Initialize Google Analytics 4
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string;
if (GA_MEASUREMENT_ID) {
  ReactGA.initialize(GA_MEASUREMENT_ID);
  // Track initial pageview
  ReactGA.send({ hitType: "pageview", page: window.location.pathname + window.location.search });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);

import { Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import LandingPage from './pages/LandingPage';
import B2BLandingPage from './pages/B2BLandingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pt" replace />} />
      <Route 
        path="/:lang/b2b" 
        element={
          <LanguageProvider>
            <B2BLandingPage />
          </LanguageProvider>
        } 
      />
      <Route 
        path="/b2b" 
        element={<Navigate to="/pt/b2b" replace />} 
      />
      <Route 
        path="/:lang" 
        element={
          <LanguageProvider>
            <LandingPage />
          </LanguageProvider>
        } 
      />
      <Route path="*" element={<Navigate to="/pt" replace />} />
    </Routes>
  );
}

export default App;
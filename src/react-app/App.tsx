import { Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/pt" replace />} />
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
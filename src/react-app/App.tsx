import { Routes, Route, Navigate, useLocation, useParams } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import LandingPage from './pages/LandingPage';
import CollectiveLandingPage from './pages/CollectiveLandingPage';
import IndustryLandingPage from './pages/IndustryLandingPage';
import CopyEditor from './components/CopyEditor';

function CopyEditorGate() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const show = params.get('edit') === '1';
  const enableCopyEditor =
    import.meta.env.DEV ||
    import.meta.env.VITE_ENABLE_COPY_EDITOR === '1' ||
    import.meta.env.VITE_ENABLE_COPY_EDITOR === 'true';
  if (!enableCopyEditor || !show) return null;
  return <CopyEditor />;
}

// Dynamic redirect component that preserves language
function DynamicRedirect({ to }: { to: string }) {
  const { lang } = useParams<{ lang: string }>();
  const targetPath = lang ? `/${lang}${to}` : `/pt${to}`;
  return <Navigate to={targetPath} replace />;
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/pt/grower" replace />} />
        
        {/* Grower (B2C) routes */}
        <Route 
          path="/:lang/grower" 
          element={
            <LanguageProvider>
              <LandingPage />
            </LanguageProvider>
          } 
        />
        <Route 
          path="/grower" 
          element={<Navigate to="/pt/grower" replace />} 
        />
        
        {/* Collective routes */}
        <Route 
          path="/:lang/collective" 
          element={
            <LanguageProvider>
              <CollectiveLandingPage />
            </LanguageProvider>
          } 
        />
        <Route 
          path="/collective" 
          element={<Navigate to="/pt/collective" replace />} 
        />
        
        {/* Industry routes */}
        <Route 
          path="/:lang/industry" 
          element={
            <LanguageProvider>
              <IndustryLandingPage />
            </LanguageProvider>
          } 
        />
        <Route 
          path="/industry" 
          element={<Navigate to="/pt/industry" replace />} 
        />
        
        {/* Legacy redirects */}
        <Route path="/b2c" element={<Navigate to="/pt/grower" replace />} />
        <Route path="/:lang/b2c" element={<DynamicRedirect to="/grower" />} />
        <Route path="/b2b" element={<Navigate to="/pt/collective" replace />} />
        <Route path="/:lang/b2b" element={<DynamicRedirect to="/collective" />} />
        <Route path="/enterprise" element={<Navigate to="/pt/collective" replace />} />
        <Route path="/:lang/enterprise" element={<DynamicRedirect to="/collective" />} />
        
        {/* Catch old lang-only routes and redirect to grower */}
        <Route 
          path=":lang" 
          element={<DynamicRedirect to="/grower" />} 
        />
        
        <Route path="*" element={<Navigate to="/pt/grower" replace />} />
      </Routes>
      <CopyEditorGate />
    </>
  );
}

export default App;

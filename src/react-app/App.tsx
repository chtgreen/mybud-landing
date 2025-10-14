import { useEffect } from 'react';
import { useAnalytics } from './hooks/useAnalytics';

function App() {
  const { trackPageView } = useAnalytics();

  useEffect(() => {
    trackPageView('home');
  }, [trackPageView]);

  return (
    <div>
      <h1>MyBud - Fresh Start</h1>
    </div>
  );
}

export default App;

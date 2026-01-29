import React, { useEffect } from 'react';
import Home from './pages/Home';
import AOS from 'aos';
import FabricAssistant from './components/Shared/FabricAssistant';

function App() {
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    // Force scroll to top on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
      // Initialize AOS after loading is done to ensure correct positions
      AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
        delay: 50,
      });
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <Home loading={loading} />
      <FabricAssistant loading={loading} />
    </div>
  );
}

export default App;
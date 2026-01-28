import React, { useEffect } from 'react';
import Home from './pages/Home';
import AOS from 'aos';
import FabricAssistant from './components/Shared/FabricAssistant';

function App() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 50,
    });
  }, []);

  return (
    <div className="App">
      <Home />
      <FabricAssistant />
    </div>
  );
}

export default App;
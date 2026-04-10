import React, { useEffect } from 'react';
import Home from './pages/Home';
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
      offset: 100, 
    });
  }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
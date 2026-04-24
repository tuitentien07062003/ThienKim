import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductsPage from './components/Home/ProductPage';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { Analytics } from '@vercel/analytics/react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, 
      offset: 100, 
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductsPage />} />
      </Routes>
      <Analytics />
    </Router>
  );
}

export default App;
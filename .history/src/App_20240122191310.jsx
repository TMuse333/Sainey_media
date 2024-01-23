import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loading from './components/loading';
import './App.css'
import Testimonials from './components/testimonials';
// Lazy-loaded components
const Layout2 = lazy(() => import('./components/layout2'));
const Overview = lazy(() => import('./components/overview'));
const Packages = lazy(() => import('./components/packages'));
const Portfolio = lazy(() => import('./components/portfolio'));
const Contact = lazy(()=> import('./components/contact'))
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (replace with actual loading logic)
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 0);

    // Cleanup function
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      {loading ? (
        <Loading />
      ) : (
   
          <Routes>
            <Route path="/" element={<Layout2 />} />
            <Route path="about-ceo" element={<Overview />} />
            <Route path="about-company" element={<Packages />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path='contact' 
          </Routes>
      
      )}
    </Suspense>
  );
}

export default App;

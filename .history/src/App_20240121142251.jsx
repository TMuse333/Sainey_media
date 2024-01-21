// App.js

import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout2 from './components/layout2';
import Overview from './components/overview';
import Packages from './components/packages';
import Portfolio from './components/portfolio';
import Loading from './components/Loading'; // Import the Loading component

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (replace with actual loading logic)
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup function
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <>
      {loading ? (
        <Loading /> // Display loading screen while waiting for assets to load
      ) : (
        <Routes>
          <Route path="/" element={<Layout2 />} />
          <Route path="about-ceo" element={<Overview />} />
          <Route path="about-company" element={<Packages />} />
          <Route path="portfolio" element={<Portfolio />} />
        </Routes>
      )}
    </>
  );
};

export default App;

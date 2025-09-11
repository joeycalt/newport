import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Budget from './pages/Budget';
import Recipe from './pages/Recipe';
import Goodvibes from './pages/Goodvibes'; 
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cursor from './components/cursor/Cursor';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    },4000);

    return () => clearTimeout(timer); // Cleanup function
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <Cursor />
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/mybudget" element={<Budget />} />
          <Route path="/recipebox" element={<Recipe />} /> 
          <Route path="/goodvibes" element={<Goodvibes />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
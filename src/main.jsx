import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { StrictMode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './index.css';
import { HomePage } from './pages/HomePage';
import { Rihsmybih } from './pages/work/Rihsmybih';
import { Drake } from './pages/work/Drake';
import { Footer } from './components/Footer';
import { ScrollToTop } from './utils/ScrollToTop';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    
    <AnimatePresence mode="wait">
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.6 }}
            >
              <HomePage />
              <Footer></Footer>
            </motion.div>
          }
        />
        <Route
          path="/rihsmybih"
          element={
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.6 }}
            >
              <Rihsmybih />
              <Footer></Footer>
            </motion.div>
          }
        />
        <Route
          path="/drake"
          element={
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ duration: 0.6 }}
            >
              <Drake />
              <Footer></Footer>
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className="relative min-h-screen">
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  </StrictMode>
);
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { Home } from './pages/Home';
import { Theatre } from './pages/Theatre';
import { FilmFest } from './pages/FilmFest';
import { Contest } from './pages/Contest';
import { About } from './pages/About';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Wrapper for routing logic to allow AnimatePresence to work with useLocation
const AnimatedRoutes: React.FC = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/theatre" element={<Theatre />} />
                <Route path="/film-fest" element={<FilmFest />} />
                <Route path="/contest" element={<Contest />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </AnimatePresence>
    );
};

const AppContent: React.FC = () => {
    const [loading, setLoading] = useState(true);

    // Disable scrolling when loading
    useEffect(() => {
        if (loading) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [loading]);

    return (
        <>
            {loading ? (
                <LoadingScreen onComplete={() => setLoading(false)} />
            ) : (
                <div className="flex flex-col min-h-screen bg-white text-roopantor-textDark bg-noise transition-opacity duration-1000">
                    <ScrollToTop />
                    <Navbar />
                    <main className="flex-grow">
                        <AnimatedRoutes />
                    </main>
                    <Footer />
                </div>
            )}
        </>
    )
}

function App() {
  return (
    <Router>
        <AppContent />
    </Router>
  );
}

export default App;
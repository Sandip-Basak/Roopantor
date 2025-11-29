import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-roopantor-black/95 backdrop-blur-sm py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="relative z-50 group">
              <div className="flex flex-col leading-none">
                  <span className="font-display text-3xl text-roopantor-gold tracking-widest">ROOPANTOR</span>
                  <span className="font-sans text-[0.6rem] text-roopantor-cream tracking-[0.4em] text-right group-hover:text-roopantor-green transition-colors">ART FESTIVAL</span>
              </div>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.2em] font-bold transition-colors duration-300 hover:text-roopantor-gold ${
                    isActive ? 'text-roopantor-gold border-b-2 border-roopantor-gold pb-1' : 'text-roopantor-cream'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-roopantor-cream z-50 hover:text-roopantor-gold transition-colors relative"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Moved outside nav to escape stacking context */}
      <div className={`fixed inset-0 z-40 bg-roopantor-black flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Background Noise for consistency */}
        <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
        
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `text-2xl font-display uppercase tracking-widest transition-colors relative z-10 ${
                isActive ? 'text-roopantor-gold' : 'text-roopantor-cream'
              }`
            }
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </>
  );
};
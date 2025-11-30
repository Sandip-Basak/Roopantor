import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

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

  // Determine text color based on scroll state and page
  // On Home: White when top (transparent), Black when scrolled (white bg)
  // On Other pages: Always Black (as they have white backgrounds)
  const textColorClass = isHome && !scrolled && !isOpen ? 'text-white' : 'text-roopantor-black';
  const logoSubTextColor = isHome && !scrolled && !isOpen ? 'text-white/80' : 'text-roopantor-textLight';
  const hoverColorClass = isHome && !scrolled && !isOpen ? 'hover:text-gray-300' : 'hover:text-gray-500';
  const activeBorderClass = isHome && !scrolled && !isOpen ? 'border-white' : 'border-roopantor-black';

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-sm py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="relative z-50 group">
              <div className="flex flex-col leading-none">
                  <span className={`font-display text-3xl tracking-widest transition-colors duration-300 ${textColorClass} ${hoverColorClass}`}>ROOPANTOR</span>
                  <span className={`font-sans text-[0.6rem] tracking-[0.4em] text-right transition-colors ${logoSubTextColor} group-hover:text-roopantor-black`}>ART FESTIVAL</span>
              </div>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-xs uppercase tracking-[0.2em] font-bold transition-colors duration-300 ${textColorClass} ${hoverColorClass} ${
                    isActive ? `border-b-2 pb-1 ${activeBorderClass}` : ''
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
            className={`md:hidden z-50 transition-colors relative ${textColorClass} ${hoverColorClass}`}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} className="text-roopantor-black" /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300 md:hidden">
          {/* Background Noise for consistency */}
          <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
          
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-2xl font-display uppercase tracking-widest transition-colors relative z-10 ${
                  isActive ? 'text-roopantor-black border-b-2 border-black' : 'text-gray-500'
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};
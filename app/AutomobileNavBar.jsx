"use client";
import React, { useEffect, useState } from "react";
import { 
  FaBars, 
  FaTimes, 
  FaHome, 
  FaInfoCircle, 
  FaUtensils, 
  FaBed, 
  FaCalendarAlt, 
  FaImages, 
  FaPhone,
  FaStar,
  FaChevronDown,
  FaMapMarkerAlt
} from "react-icons/fa";

// Updated color palette based on the provided image
const palette = {
  background: "#F5F2E8",      // Background / section fills (warm cream)
  headers: "#2C2C2C",         // Headers (charcoal black)
  descriptions: "#7A7A7A",    // Descriptions (medium gray)
  buttons: "#6B8E5A",         // Buttons / Accents (forest green)
  cards: "#F5F2E8",           // Cards / Dividers (warm cream)
  highlights: "#D4704A"       // Highlights / CTAs (terracotta orange)
};

const AutomobileNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = scrollTop / docHeight;
      setScrollProgress(scrollPercent);
      setIsScrolled(scrollTop > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', icon: FaHome, href: '/' },
    { 
      name: 'About Us', 
      icon: FaInfoCircle, 
      href: '/about',
    },
    
    { name: 'Ruhunu in Focus(Blog)', icon: FaCalendarAlt, href: '/blog' },
   
    { name: 'Contact', icon: FaPhone, href: '/contact' }
  ];

  return (
    <>
      <style jsx>{`
        :root {
          --background: ${palette.background};
          --header: ${palette.headers};
          --description: ${palette.descriptions};
          --button-accent: ${palette.buttons};
          --card-divider: ${palette.cards};
          --highlight-cta: ${palette.highlights};
        }
        @keyframes slideInDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.8);}
          to { opacity: 1; transform: scale(1);}
        }
        .navbar-enter {
          animation: slideInDown 0.6s ease-out;
        }
        .nav-item {
          position: relative;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          padding: 0.5rem 1rem;
          border-radius: 8px;
        }
        .nav-item:hover {
          background: var(--button-accent);
        }
        .nav-link {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 500;
          color: var(--header);
          transition: color 0.3s;
        }
        .nav-item:hover .nav-link {
          color: var(--highlight-cta);
        }
        .logo {
          color: var(--header);
          font-weight: bold;
          letter-spacing: 1px;
        }
        .logo-highlight {
          color: var(--highlight-cta);
        }
        .mobile-menu {
          animation: fadeInScale 0.3s ease-out;
        }
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: var(--card-divider);
          border: 1px solid var(--button-accent);
          border-radius: 12px;
          min-width: 200px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.3s ease;
          z-index: 50;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
        }
        .nav-item:hover .dropdown-menu {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        .dropdown-item {
          padding: 0.75rem 1rem;
          transition: all 0.3s;
          border-radius: 8px;
          margin: 0.25rem;
          color: var(--header);
        }
        .dropdown-item:hover {
          background: var(--button-accent);
          color: var(--highlight-cta);
        }
        .progress-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          background: var(--highlight-cta);
          transition: width 0.1s;
          border-radius: 0 3px 0 0;
        }
        .cta-button {
          background: var(--highlight-cta);
          color: var(--card-divider);
          padding: 0.5rem 1.5rem;
          border-radius: 50px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border: none;
          transition: all 0.3s;
          box-shadow: 0 4px 16px rgba(232,123,91,0.12);
        }
        .cta-button:hover {
          background: var(--button-accent);
          color: var(--header);
        }
        .mobile-menu-item {
          transition: all 0.3s;
          border-radius: 8px;
          margin: 0.25rem 0;
          color: var(--header);
        }
        .mobile-menu-item:hover {
          background: var(--button-accent);
          color: var(--highlight-cta);
        }
        nav {
          background: var(--background);
          border-bottom: 1px solid var(--button-accent);
        }
        .shadow-2xl {
          box-shadow: 0 6px 32px rgba(62,62,62,0.08);
        }
        .backdrop-blur {
          backdrop-filter: blur(12px);
        }
        @media (max-width: 768px) {
          .nav-item {
            padding: 0.75rem 1rem;
          }
        }
      `}</style>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 navbar-enter ${
        isScrolled 
          ? 'py-2 backdrop-blur shadow-2xl' 
          : 'py-4'
      }`}>
        {/* Progress Bar */}
        <div 
          className="progress-bar"
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full blur-2xl" 
               style={{ background: palette.buttons, opacity: 0.10 }}>
          </div>
          <div className="absolute top-0 right-1/4 w-24 h-24 rounded-full blur-2xl" 
               style={{ background: palette.highlights, opacity: 0.10 }}>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg" 
                   style={{ background: palette.highlights }}>
                <FaStar className="text-white text-lg" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl logo">
                  Ruhunu<span className="logo-highlight">group</span>
                </h1>
               
              </div>
            </div>

            {/* Hamburger Menu Button - always visible */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
              style={{ color: palette.highlights, background: palette.buttons }}
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - always used for all screen sizes */}
        {isMobileMenuOpen && (
          <div className="mobile-menu backdrop-blur border-t"
               style={{ 
                 background: palette.background, 
                 borderColor: palette.buttons 
               }}>
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="space-y-2">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    <a
                      href={item.href}
                      className="mobile-menu-item flex items-center space-x-3 px-4 py-3"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <item.icon className="text-lg" style={{ color: palette.highlights }} />
                      <span className="font-medium">{item.name}</span>
                      {item.dropdown && <FaChevronDown className="text-xs ml-auto" />}
                    </a>
                    {/* Mobile Dropdown */}
                    {item.dropdown && (
                      <div className="ml-12 space-y-1">
                        {item.dropdown.map((dropItem, dropIndex) => (
                          <a
                            key={dropIndex}
                            href="#"
                            className="block py-2 px-4 text-sm opacity-80 hover:opacity-100 transition-opacity"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropItem}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                {/* Mobile CTA */}
                
              </div>
            </div>
          </div>
        )}
      </nav>
      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default AutomobileNavbar;
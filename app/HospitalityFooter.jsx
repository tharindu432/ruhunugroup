"use client";
import React, { useEffect, useState } from "react";
import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedinIn, 
  FaYoutube,
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaArrowUp,
  FaHeart,
  FaStar
} from "react-icons/fa";

const HospitalityFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const footerElement = document.getElementById('hospitality-footer');
    if (footerElement) {
      observer.observe(footerElement);
    }

    // Scroll progress for back to top
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px);}
          to { opacity: 1; transform: translateX(0);}
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px);}
          to { opacity: 1; transform: translateX(0);}
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1);}
          50% { transform: scale(1.05);}
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px);}
          50% { transform: translateY(-10px);}
        }
        .animate-fade-in-up { opacity: 0; animation: fadeInUp 0.8s ease-out forwards;}
        .animate-fade-in-left { opacity: 0; animation: fadeInLeft 0.8s ease-out forwards;}
        .animate-fade-in-right { opacity: 0; animation: fadeInRight 0.8s ease-out forwards;}
        .stagger-1 { animation-delay: 0.1s;}
        .stagger-2 { animation-delay: 0.3s;}
        .stagger-3 { animation-delay: 0.5s;}
        .stagger-4 { animation-delay: 0.7s;}
        .stagger-5 { animation-delay: 0.9s;}
        .social-icon {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform: translateY(0);
        }
        .social-icon:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 10px 20px #B7D2A833;
        }
        .footer-link {
          position: relative;
          transition: all 0.3s ease;
          padding: 5px 0;
        }
        .footer-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 0;
          background: #C8A13D;
          transition: width 0.3s ease;
        }
        .footer-link:hover::after {
          width: 100%;
        }
        .footer-link:hover {
          color: #C8A13D;
          transform: translateX(5px);
        }
        .gradient-text {
          background: linear-gradient(90deg, #B7D2A8, #C8A13D);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .back-to-top {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #B7D2A8, #C8A13D);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 1000;
          box-shadow: 0 4px 20px #B7D2A833;
        }
        .back-to-top:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 8px 30px #C8A13D55;
        }
        .progress-ring {
          transform: rotate(-90deg);
        }
        .progress-ring-circle {
          stroke: #C8A13D;
          stroke-width: 3;
          fill: transparent;
          r: 25;
          cx: 30;
          cy: 30;
          stroke-dasharray: 157;
          stroke-dashoffset: ${157 - (scrollProgress * 157)};
          transition: stroke-dashoffset 0.1s ease;
        }
        .contact-item {
          transition: all 0.3s ease;
          padding: 10px;
          border-radius: 8px;
        }
        .contact-item:hover {
          background: #B7D2A822;
          transform: translateX(10px);
        }
        .newsletter-input {
          background: #FFFFFF;
          border: 1px solid #B7D2A8;
          color: #323232;
          transition: all 0.3s ease;
        }
        .newsletter-input:focus {
          background: #B7D2A822;
          border-color: #C8A13D;
          box-shadow: 0 0 0 3px #C8A13D33;
          outline: none;
        }
        .newsletter-input::placeholder {
          color: #6E6E6E99;
        }
        .subscribe-btn {
          background: linear-gradient(135deg, #C8A13D, #B7D2A8);
          color: #323232;
          transition: all 0.3s ease;
        }
        .subscribe-btn:hover {
          background: linear-gradient(135deg, #B7D2A8, #C8A13D);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px #C8A13D44;
        }
        .backdrop-blur {
          backdrop-filter: blur(10px);
        }
        .floating-element {
          animation: float 3s ease-in-out infinite;
        }
        .pulse-element {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>
      <footer 
        id="hospitality-footer"
        className="relative overflow-hidden"
        style={{ 
          background: "#F7F1E7",
          color: "#323232"
        }}
      >
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl floating-element"
            style={{ background: "#B7D2A822" }} />
          <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full blur-3xl floating-element"
            style={{ background: "#C8A13D22", animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pulse-element"
            style={{ background: "#FFFFFF33" }} />
        </div>
        {/* Main Footer Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info & Social Media */}
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in-left stagger-1' : ''}`}>
              <div>
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Ruhunugroup
                </h3>
                <p className="text-base leading-relaxed mb-4" style={{ color: "#6E6E6E", opacity: 0.9 }}>
                  Transforming experiences with world-class hospitality services across Sri Lanka. Where warmth meets excellence.
                </p>
                <div className="flex items-center space-x-2 text-sm" style={{ color: "#C8A13D" }}>
                  <FaStar />
                  <span>Rated 4.9/5 by our guests</span>
                </div>
              </div>
              {/* Social Media */}
              <div>
                <h4 className="text-lg font-semibold mb-4" style={{ color: "#C8A13D" }}>
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  {[
                    { icon: FaFacebookF, color: "#B7D2A8", url: "https://facebook.com" },
                    { icon: FaInstagram, color: "#C8A13D", url: "https://instagram.com" },
                    { icon: FaTwitter, color: "#B7D2A8", url: "https://twitter.com" },
                    { icon: FaLinkedinIn, color: "#C8A13D", url: "https://linkedin.com" },
                    { icon: FaYoutube, color: "#B7D2A8", url: "https://youtube.com" }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full backdrop-blur social-icon flex items-center justify-center"
                      style={{ 
                        background: `${social.color}22`,
                        border: `1px solid ${social.color}55`
                      }}
                    >
                      <social.icon style={{ color: social.color, fontSize: "1.1rem" }} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Navigation Paths */}
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up stagger-2' : ''}`}>
              <h4 className="text-lg font-semibold mb-4" style={{ color: "#C8A13D" }}>
                Quick Links
              </h4>
              <nav className="space-y-3">
                {[
                  { name: "Home", url: "/" },
                  { name: "About Us", url: "/about" },
                  { name: "Ruhunu in Focus (Blog)", url: "/blog" },
                  { name: "Contact", url: "/contact" }
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="block footer-link text-base"
                    style={{ color: "#6E6E6E" }}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div className={`space-y-6 ${isVisible ? 'animate-fade-in-up stagger-3' : ''}`}>
              <h4 className="text-lg font-semibold mb-4" style={{ color: "#C8A13D" }}>
                Contact Us
              </h4>
              <div className="space-y-4">
                <div className="contact-item flex items-start space-x-3">
                  <FaMapMarkerAlt className="mt-1 flex-shrink-0" style={{ color: "#C8A13D" }} />
                  <div>
                    <p className="text-sm font-medium" style={{ color: "#323232" }}>Head Office</p>
                    <p className="text-sm opacity-90" style={{ color: "#6E6E6E" }}>123 Hospitality Avenue, Colombo 07, Sri Lanka</p>
                  </div>
                </div>
                
                <div className="contact-item flex items-center space-x-3">
                  <FaPhone className="flex-shrink-0" style={{ color: "#C8A13D" }} />
                  <div>
                    <p className="text-sm" style={{ color: "#6E6E6E" }}>+94 11 234 5678</p>
                  </div>
                </div>
                
                <div className="contact-item flex items-center space-x-3">
                  <FaEnvelope className="flex-shrink-0" style={{ color: "#C8A13D" }} />
                  <div>
                    <p className="text-sm" style={{ color: "#6E6E6E" }}>info@ruhunugroup.lk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className={`relative z-10 border-t backdrop-blur ${isVisible ? 'animate-fade-in-up stagger-5' : ''}`}
          style={{ borderColor: "#B7D2A855", background: "#FFFFFF", color: "#6E6E6E" }}
        >
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4">
                <p className="text-sm opacity-80" style={{ color: "#6E6E6E" }}>
                  © 2025 Ruhunugroup. All rights reserved.
                </p>
                <div className="hidden md:flex items-center space-x-1 text-sm">
                  <span style={{ color: "#6E6E6E" }}>Made with</span>
                  <FaHeart className="pulse-element" style={{ color: "#C8A13D", fontSize: "0.8rem" }} />
                  <span style={{ color: "#6E6E6E" }}>in Sri Lanka</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="back-to-top" onClick={scrollToTop} title="Back to Top">
          <svg className="progress-ring" width="60" height="60">
            <circle
              className="progress-ring-circle"
              stroke="#C8A13D"
              strokeWidth="3"
              fill="transparent"
              r="25"
              cx="30"
              cy="30"
            />
          </svg>
          <FaArrowUp style={{ position: "absolute", left: 19, top: 19, color: "#323232", fontSize: "1.3rem" }} />
        </div>
      </footer>
    </>
  );
};

export default HospitalityFooter;

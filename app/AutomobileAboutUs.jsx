"use client";
import React, { useEffect, useState } from "react";
import { 
  FaStar, 
  FaAward, 
  FaUsers, 
  FaHeart,
  FaArrowRight,
  FaQuoteLeft,
  FaPlay,
  FaCheckCircle
} from "react-icons/fa";

const AutomobileAbout = () => {
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [activeStats, setActiveStats] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => new Set([...prev, entry.target.id]));
            if (entry.target.id === 'stats-section') {
              setActiveStats(true);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: 10000, suffix: '+', label: 'Happy Guests', icon: FaUsers },
    { number: 15, suffix: '+', label: 'Years Experience', icon: FaAward },
    { number: 50, suffix: '+', label: 'Team Members', icon: FaHeart },
    { number: 4.9, suffix: '/5', label: 'Guest Rating', icon: FaStar }
  ];

  const features = [
    'World-class amenities and facilities',
    'Personalized service for every guest',
    'Award-winning culinary experiences',
    'Sustainable hospitality practices'
  ];

  return (
    <>
      <style jsx>{`
        :root {
          --background: #F4F0E8;
          --header: #323232;
          --description: #707070;
          --button-accent: #7BA05B;
          --card-divider: #E8E2D5;
          --highlight-cta: #D2691E;
        }

        body, .main-bg, section {
          background: var(--background);
          color: var(--header);
        }

        h1, h2, h3, h4, h5, h6 {
          color: var(--header);
        }

        .description, p, .text-lg {
          color: var(--description);
        }

        .cta-button, .feature-item:hover {
          background: var(--highlight-cta);
          color: var(--header);
          border-color: var(--highlight-cta);
        }

        .stat-card, .card, .divider {
          background: var(--card-divider);
          color: var(--header);
        }

        .button, .accent, .feature-item {
          background: var(--button-accent);
          color: var(--header);
        }

        /* Animations and other styles remain unchanged */
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-60px);}
          to { opacity: 1; transform: translateX(0);}
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(60px);}
          to { opacity: 1; transform: translateX(0);}
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: translateY(0);}
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8);}
          to { opacity: 1; transform: scale(1);}
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px);}
          50% { transform: translateY(-10px);}
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1);}
          50% { transform: scale(1.05);}
        }
        @keyframes shimmer {
          0% { background-position: -200% 0;}
          100% { background-position: 200% 0;}
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(210, 105, 30, 0.3);}
          50% { box-shadow: 0 0 40px rgba(210, 105, 30, 0.6), 0 0 60px rgba(210, 105, 30, 0.3);}
        }
        @keyframes countUp {
          from { transform: translateY(20px); opacity: 0;}
          to { transform: translateY(0); opacity: 1;}
        }

        .animate-fade-in-left {
          opacity: 0;
          animation: fadeInLeft 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .animate-fade-in-right {
          opacity: 0;
          animation: fadeInRight 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .animate-fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .animate-scale-in {
          opacity: 0;
          animation: scaleIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.3s; }
        .stagger-3 { animation-delay: 0.5s; }
        .stagger-4 { animation-delay: 0.7s; }
        .stagger-5 { animation-delay: 0.9s; }

        .image-container {
          position: relative;
          transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform: translateY(0);
        }
        .image-container:hover {
          transform: translateY(-15px) scale(1.02);
        }
        .image-container::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(135deg, rgba(123, 160, 91, 0.1), rgba(210, 105, 30, 0.1));
          border-radius: 24px;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 1;
        }
        .image-container:hover::before {
          opacity: 1;
        }
        .gradient-border {
          background: linear-gradient(135deg, #7BA05B, #D2691E);
          padding: 4px;
          border-radius: 24px;
          position: relative;
          overflow: hidden;
        }
        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #7BA05B, #D2691E);
          animation: shimmer 3s linear infinite;
          background-size: 200% 100%;
        }
        .gradient-border-inner {
          background: var(--card-divider);
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          z-index: 2;
        }
        .play-button {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 80px; height: 80px;
          background: var(--highlight-cta);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 10;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.2);
        }
        .play-button:hover {
          transform: translate(-50%, -50%) scale(1.1);
          background: var(--button-accent);
          animation: pulse 2s ease-in-out infinite;
        }
        .text-glow {
          text-shadow: 0 0 30px rgba(210, 105, 30, 0.4);
        }
        .floating-element {
          animation: float 4s ease-in-out infinite;
        }
        .stat-card {
          background: var(--card-divider);
          backdrop-filter: blur(20px);
          border: 1px solid var(--button-accent);
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
        }
        .stat-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: var(--highlight-cta);
          box-shadow: 0 20px 40px rgba(210, 105, 30, 0.2);
        }
        .stat-number {
          font-size: 2.5rem;
          font-weight: bold;
          background: linear-gradient(135deg, #7BA05B, #D2691E);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 0.5rem;
          animation: ${activeStats ? 'countUp 1s ease-out' : 'none'};
        }
        .cta-button {
          background: var(--highlight-cta);
          color: var(--header);
          padding: 1rem 2rem;
          border-radius: 50px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          position: relative;
          overflow: hidden;
          border: 2px solid transparent;
          box-shadow: 0 8px 32px rgba(210, 105, 30, 0.3);
        }
        .cta-button:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 12px 40px rgba(210, 105, 30, 0.4);
          animation: glow 2s ease-in-out infinite;
          border-color: var(--button-accent);
        }
        .feature-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 0;
          transition: all 0.3s ease;
          border-radius: 8px;
          background: var(--button-accent);
          color: var(--header);
        }
        .feature-item:hover {
          background: var(--highlight-cta);
          transform: translateX(10px);
          padding-left: 1rem;
        }
        .quote-section {
          background: var(--card-divider);
          border-left: 4px solid var(--highlight-cta);
          padding: 2rem;
          border-radius: 0 16px 16px 0;
          margin: 2rem 0;
          position: relative;
          backdrop-filter: blur(10px);
          color: var(--description);
        }
        .shimmer-effect {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        .backdrop-blur {
          backdrop-filter: blur(20px);
        }
        @media (max-width: 768px) {
          .stat-number { font-size: 2rem; }
          .play-button { width: 60px; height: 60px; }
        }
      `}</style>

      <section
        className="relative overflow-hidden py-20 px-4 md:px-12"
        style={{
          background: "var(--background)",
          color: "var(--header)",
          minHeight: "80vh"
        }}
      >
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl floating-element" style={{ background: "var(--button-accent)", opacity: 0.15 }}></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full blur-3xl floating-element" style={{ background: "var(--highlight-cta)", opacity: 0.12, animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl floating-element" style={{ background: "var(--card-divider)", opacity: 0.10, animationDelay: '0.8s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Image Section */}
            <div 
              id="about-image"
              data-animate
              className={`${visibleElements.has('about-image') ? 'animate-fade-in-left' : ''}`}
            >
              <div className="image-container">
                <div className="gradient-border">
                  <div className="gradient-border-inner">
                    <img
                      src="/auto.JPG"
                      alt="Luxury Hotel Hospitality"
                      className="w-full h-134 object-cover relative z-2"
                    />
                    {/* Play button overlay */}
                    {/* <div className="play-button">
                      <FaPlay className="text-white text-xl ml-1" />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              {/* Title */}
              <div
                id="about-title"
                data-animate
                className={`${visibleElements.has('about-title') ? 'animate-fade-in-right stagger-1' : ''}`}
              >
                <h2 className="text-5xl md:text-6xl font-bold text-glow mb-4">
                  <span style={{ color: "var(--header)" }}>What We Are</span>
                  <br />
                  <span style={{ color: "var(--highlight-cta)" }}>All About</span>
                </h2>
                <div className="w-24 h-1 rounded-full mb-6" style={{ background: "var(--highlight-cta)" }}></div>
              </div>

              {/* Description */}
              <div
                id="about-description"
                data-animate
                className={`${visibleElements.has('about-description') ? 'animate-fade-in-right stagger-2' : ''}`}
              >
                <p className="text-lg leading-relaxed mb-6 description">
                  At <span style={{ color: "var(--highlight-cta)", fontWeight: "600" }}>Ruhunugroup</span>, 
                  Ruhunu Automotive powers mobility in the South with trusted solutions in fuel, vehicle parts, repairs and servicing. Our businesses cater to everyone — from everyday motorists to large-scale commercial clients. Whether it’s fueling major operations, providing expert guidance on spare parts, or delivering reliable vehicle care, we are driven by one purpose: to keep the region moving with integrity, efficiency, and expertise.

                </p>
              </div>

              {/* Features List */}
              {/* <div
                id="about-features"
                data-animate
                className={`${visibleElements.has('about-features') ? 'animate-fade-in-right stagger-3' : ''}`}
              >
                <div className="space-y-3">
                  {features.map((feature, index) => (
                    <div key={index} className="feature-item">
                      <FaCheckCircle style={{ color: "var(--highlight-cta)" }} className="flex-shrink-0" />
                      <span className="text-base">{feature}</span>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* Quote Section */}
             
            </div>
          </div>

          {/* Stats Section */}
          {/* <div
            id="stats-section"
            data-animate
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${visibleElements.has('stats-section') ? 'animate-fade-in-up stagger-5' : ''}`}
          >
            {stats.map((stat, idx) => (
              <div key={stat.label} className="stat-card">
                <stat.icon className="mx-auto mb-3" style={{ color: "var(--highlight-cta)", fontSize: "2rem" }} />
                <div className="stat-number">{stat.number}{stat.suffix}</div>
                <div className="text-sm description">{stat.label}</div>
              </div>
            ))}
          </div> */}

          {/* CTA Button */}
          {/* <div className="text-center mt-16">
            <a
              href="#"
              className="cta-button"
              style={{
                background: "var(--highlight-cta)",
                color: "var(--header)"
              }}
            >
              Discover More <FaArrowRight />
            </a>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default AutomobileAbout;
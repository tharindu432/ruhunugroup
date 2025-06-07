"use client";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";

// Replace with your actual logo path
const LOGO_URL = "/logo.jpg";

const palettes = {
  hospitality: {
    bg: "#F7F1E7",
    accent: "#C8A13D",
    text: "#323232",
    blob: "#B7D2A8",
    button: "#C8A13D",
    buttonText: "#323232",
    glow: "#fff5c3",
  },
  automobile: {
    bg: "#191D2B",
    accent: "#3E7FFF",
    text: "#F5F7FA",
    blob: "#25304B",
    button: "#3E7FFF",
    buttonText: "#F5F7FA",
    glow: "#3E7FFF99",
  },
};

const Home = () => {
  const router = useRouter();
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const logoRef = useRef(null);

  // Handles animated transition on section click
  const handleSectionClick = (section) => {
    const el = section === "hospitality" ? leftRef.current : rightRef.current;
    const other = section === "hospitality" ? rightRef.current : leftRef.current;
    const logo = logoRef.current;
    if (el && other && logo) {
      el.classList.add("section-expand");
      other.classList.add("section-shrink");
      logo.classList.add("logo-zoom");
      setTimeout(() => {
        router.push(section === "hospitality" ? "/hospitality" : "/automobile");
      }, 1200); // Match transition duration
    }
  };

  return (
    <div className="split-root">
      <style jsx>{`
        .split-root {
          min-height: 100vh;
          width: 100vw;
          display: flex;
          position: relative;
          overflow: hidden;
          font-family: 'Inter', 'IBM Plex Serif', sans-serif;
        }
        .section {
          flex: 1 1 0;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          transition:
            flex 1.2s cubic-bezier(0.7,0.2,0.2,1),
            box-shadow 0.6s cubic-bezier(0.7,0.2,0.2,1),
            filter 0.7s cubic-bezier(0.7,0.2,0.2,1),
            z-index 0.4s;
          cursor: pointer;
          z-index: 1;
          overflow: hidden;
          will-change: flex, box-shadow, filter;
        }
        .section-expand {
          flex: 10 1 0 !important;
          z-index: 10;
          /* Remove black backdrop! Use a subtle gold glow instead */
          box-shadow: 0 0 0 9999px rgba(200,161,61,0.05);
          filter: brightness(1.04) blur(0.5px);
        }
        .section-shrink {
          flex: 0.01 1 0 !important;
          filter: blur(5px) grayscale(0.6) brightness(0.7);
          pointer-events: none;
        }
        .left-section {
          background: ${palettes.hospitality.bg};
          color: ${palettes.hospitality.text};
          box-shadow: 0 0 80px 0 #C8A13D22 inset;
          animation: leftEnter 1.2s cubic-bezier(0.7,0.2,0.2,1);
        }
        .right-section {
          background: ${palettes.automobile.bg};
          color: ${palettes.automobile.text};
          box-shadow: 0 0 80px 0 #3E7FFF22 inset;
          animation: rightEnter 1.2s cubic-bezier(0.7,0.2,0.2,1);
        }
        @keyframes leftEnter {
          from { transform: translateX(-40px) scale(0.98); opacity: 0.6; }
          to { transform: none; opacity: 1; }
        }
        @keyframes rightEnter {
          from { transform: translateX(40px) scale(0.98); opacity: 0.6; }
          to { transform: none; opacity: 1; }
        }
        .section:hover:not(.section-shrink):not(.section-expand),
        .section:focus-visible:not(.section-shrink):not(.section-expand) {
          box-shadow: 0 0 0 6px #C8A13D44, 0 0 80px 0 #fff7 inset;
          z-index: 3;
          filter: brightness(1.06) drop-shadow(0 0 16px #C8A13D22);
        }
        .right-section:hover:not(.section-shrink):not(.section-expand),
        .right-section:focus-visible:not(.section-shrink):not(.section-expand) {
          box-shadow: 0 0 0 6px #3E7FFF44, 0 0 80px 0 #fff7 inset;
          filter: brightness(1.09) drop-shadow(0 0 16px #3E7FFF22);
        }
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          opacity: 0.54;
          pointer-events: none;
          animation: floatBlobs 18s ease-in-out infinite alternate;
        }
        .left-section .blob1 {
          background: ${palettes.hospitality.blob};
          width: 34vw; height: 34vw;
          top: 14vh; left: -10vw;
          animation-delay: 0s;
        }
        .left-section .blob2 {
          background: #fff9;
          width: 20vw; height: 20vw;
          bottom: 10vh; right: 2vw;
          animation-delay: 6s;
        }
        .right-section .blob1 {
          background: ${palettes.automobile.blob};
          width: 30vw; height: 30vw;
          bottom: 18vh; right: -8vw;
          animation-delay: 0s;
        }
        .right-section .blob2 {
          background: #3E7FFF44;
          width: 14vw; height: 14vw;
          top: 12vh; left: 4vw;
          animation-delay: 9s;
        }
        @keyframes floatBlobs {
          0% { transform: scale(1) translateY(0px);}
          50% { transform: scale(1.11) translateY(-32px) translateX(16px);}
          100% { transform: scale(1) translateY(0px);}
        }
        .sparkle {
          position: absolute;
          width: 18px; height: 18px;
          pointer-events: none;
          opacity: 0.6;
          animation: sparkleAnim 2.2s infinite linear;
        }
        .left-section .sparkle {
          color: #C8A13D;
          left: 18%; top: 22%;
          animation-delay: 0.6s;
        }
        .right-section .sparkle {
          color: #3E7FFF;
          right: 16%; bottom: 25%;
          animation-delay: 1.2s;
        }
        @keyframes sparkleAnim {
          0% { opacity: 0; transform: scale(0.7) rotate(0deg);}
          30% { opacity: 1; transform: scale(1.1) rotate(20deg);}
          60% { opacity: 1; transform: scale(1.2) rotate(-10deg);}
          100% { opacity: 0; transform: scale(0.7) rotate(0deg);}
        }
        .section-content {
          position: relative;
          z-index: 2;
          text-align: center;
          padding: 2rem;
          animation: fadeInUp 1.3s cubic-bezier(0.7,0.2,0.2,1);
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px);}
          to { opacity: 1; transform: none;}
        }
        .section-title {
          font-size: 2.9rem;
          font-weight: 800;
          margin-bottom: 1.2rem;
          letter-spacing: 1px;
          line-height: 1.08;
          text-shadow: 0 2px 24px #fff5, 0 1px 0 #0001;
        }
        .section-desc {
          font-size: 1.22rem;
          margin-bottom: 2.2rem;
          opacity: 0.85;
          font-weight: 500;
        }
        .section-btn {
          padding: 0.95rem 2.5rem;
          border-radius: 2rem;
          font-weight: 700;
          font-size: 1.18rem;
          border: none;
          outline: none;
          cursor: pointer;
          box-shadow: 0 4px 22px rgba(0,0,0,0.07);
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s, color 0.2s;
          filter: drop-shadow(0 2px 12px #fff5);
        }
        .left-section .section-btn {
          background: linear-gradient(90deg, #C8A13D 65%, #B7D2A8 100%);
          color: #323232;
        }
        .right-section .section-btn {
          background: linear-gradient(90deg, #3E7FFF 60%, #25304B 100%);
          color: #F5F7FA;
        }
        .section-btn:hover {
          transform: translateY(-4px) scale(1.07) rotate(-1deg);
          box-shadow: 0 8px 34px #fff8, 0 2px 8px #C8A13D33;
          background: #fff2;
        }
        .right-section .section-btn:hover {
          box-shadow: 0 8px 34px #3E7FFF33, 0 2px 8px #3E7FFF33;
        }
        .curved-divider {
          position: absolute;
          left: 50%;
          top: 0;
          height: 100%;
          width: 160px;
          transform: translateX(-50%);
          z-index: 4;
          pointer-events: none;
          animation: dividerGlow 2.5s infinite alternate;
        }
        @keyframes dividerGlow {
          0% { filter: drop-shadow(0 0 0 #C8A13D77);}
          100% { filter: drop-shadow(0 0 16px #C8A13D77);}
        }
        .logo-center-wrap {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%);
          z-index: 10;
          width: 144px;
          height: 144px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 60% 40%, #fff9 60%, #C8A13D44 100%);
          border-radius: 50%;
          box-shadow: 0 6px 40px #C8A13D22, 0 0 0 12px #fff2;
          transition: box-shadow 0.7s cubic-bezier(.7,.2,.2,1);
          animation: logoPulse 2.5s infinite alternate;
        }
        @keyframes logoPulse {
          0% { box-shadow: 0 6px 40px #C8A13D22, 0 0 0 12px #fff2;}
          100% { box-shadow: 0 12px 60px #C8A13D33, 0 0 0 24px #fff2;}
        }
        .logo-center {
          width: 98px;
          height: 98px;
          border-radius: 50%;
          background: linear-gradient(135deg, #fff 60%, #C8A13D22 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          animation: rotateLogo 3.5s linear infinite;
          box-shadow: 0 2px 18px #C8A13D22;
          transition: transform 1.1s cubic-bezier(.7,.2,.2,1);
        }
        .logo-zoom {
          animation: logoZoom 1.2s cubic-bezier(.7,.2,.2,1) forwards;
        }
        @keyframes logoZoom {
          0% { transform: scale(1) rotate(0deg);}
          60% { transform: scale(1.25) rotate(90deg);}
          100% { transform: scale(0.7) rotate(360deg);}
        }
        @keyframes rotateLogo {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
        @media (max-width: 1100px) {
          .logo-center-wrap { width: 90px; height: 90px; }
          .logo-center { width: 54px; height: 54px; }
          .curved-divider { width: 80px; }
          .section-title { font-size: 2.1rem; }
        }
        @media (max-width: 700px) {
          .split-root { flex-direction: column; }
          .section { min-height: 53vh; }
          .curved-divider { display: none; }
          .logo-center-wrap { top: 50%; left: 50%; }
        }
      `}</style>

      {/* Hospitality Section */}
      <div
        className="section left-section"
        ref={leftRef}
        tabIndex={0}
        onClick={() => handleSectionClick("hospitality")}
        onKeyDown={e => e.key === "Enter" && handleSectionClick("hospitality")}
        aria-label="Hospitality Section"
      >
        <span className="blob blob1" />
        <span className="blob blob2" />
        {/* Sparkle */}
        <svg className="sparkle" viewBox="0 0 20 20" fill="currentColor">
          <polygon points="10,2 12,8 18,10 12,12 10,18 8,12 2,10 8,8" />
        </svg>
        <div className="section-content">
          <h1 className="section-title">
            <span style={{
              background: "linear-gradient(90deg, #C8A13D 60%, #B7D2A8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              Hospitality
            </span>
          </h1>
          <p className="section-desc">
            Experience warmth and world-class service.<br />
            Discover our premium hotels, dining, and events.
          </p>
          <button className="section-btn">Explore Hospitality</button>
        </div>
      </div>

      {/* Automobile Section */}
      <div
        className="section right-section"
        ref={rightRef}
        tabIndex={0}
        onClick={() => handleSectionClick("automobile")}
        onKeyDown={e => e.key === "Enter" && handleSectionClick("automobile")}
        aria-label="Automobile Section"
      >
        <span className="blob blob1" />
        <span className="blob blob2" />
        {/* Sparkle */}
        <svg className="sparkle" viewBox="0 0 20 20" fill="currentColor">
          <polygon points="10,2 12,8 18,10 12,12 10,18 8,12 2,10 8,8" />
        </svg>
        <div className="section-content">
          <h1 className="section-title">
            <span style={{
              background: "linear-gradient(90deg, #3E7FFF 60%, #F5F7FA 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              Automobile
            </span>
          </h1>
          <p className="section-desc">
            Drive into innovation and reliability.<br />
            Explore our automotive excellence and services.
          </p>
          <button className="section-btn">Explore Automobile</button>
        </div>
      </div>

      {/* SVG Curved Divider */}
      <div className="curved-divider" aria-hidden>
        <svg width="100%" height="100%" viewBox="0 0 160 1000" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M80 0
               C 100 180, 60 320, 80 500
               C 100 680, 60 820, 80 1000"
            stroke="#C8A13D"
            strokeWidth="14"
            fill="none"
            opacity="0.83"
          />
        </svg>
      </div>

      {/* Rotating Logo at Center */}
      <div className="logo-center-wrap" ref={logoRef}>
        <div className="logo-center">
          <img
            src={LOGO_URL}
            alt="Company Logo"
            style={{ width: "70%", height: "70%", objectFit: "contain", userSelect: "none" }}
            draggable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

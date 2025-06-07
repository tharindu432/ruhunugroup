"use client";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import HospitalityNavbar from "../HospitalityNavbar";
import HospitalityFooter from "../HospitalityFooter";
import HospitalityAbout from "../HospitalityAbout";

const HospitalityPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleElements, setVisibleElements] = useState(new Set());

  useEffect(() => {
    setIsLoaded(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    const elements = document.querySelectorAll("[data-animate]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        background: "#F7F1E7", // fallback background
      }}
    >
      {/* Animated color blobs background */}
      <div className="animated-bg">
        <div className="blob blob1" />
        <div className="blob blob2" />
        <div className="blob blob3" />
        <div className="blob blob4" />
      </div>

      <style jsx>{`
        /* Animated background blobs using your palette */
        .animated-bg {
          position: absolute;
          inset: 0;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          z-index: 0;
          pointer-events: none;
        }
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(60px);
          opacity: 0.55;
          animation: floatBlobs 18s ease-in-out infinite alternate;
          mix-blend-mode: lighten;
        }
        .blob1 {
          width: 38vw;
          height: 38vw;
          left: -12vw;
          top: -10vw;
          background: #b7d2a8; /* Buttons / Accents */
          animation-delay: 0s;
        }
        .blob2 {
          width: 30vw;
          height: 30vw;
          right: -10vw;
          top: 10vw;
          background: #c8a13d; /* Highlights / CTAs */
          animation-delay: 4s;
        }
        .blob3 {
          width: 28vw;
          height: 28vw;
          left: 10vw;
          bottom: -8vw;
          background: #ffffff; /* Cards / Dividers */
          opacity: 0.35;
          animation-delay: 8s;
        }
        .blob4 {
          width: 22vw;
          height: 22vw;
          right: 8vw;
          bottom: 0vw;
          background: #6e6e6e; /* Descriptions (muted) */
          opacity: 0.18;
          animation-delay: 12s;
        }
        @keyframes floatBlobs {
          0% {
            transform: scale(1) translateY(0px);
          }
          50% {
            transform: scale(1.12) translateY(-32px) translateX(16px);
          }
          100% {
            transform: scale(1) translateY(0px);
          }
        }

        /* All your existing animation styles below (unchanged) */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slideInFromBottom {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
        }
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
        .animate-slide-in-bottom {
          animation: slideInFromBottom 1s ease-out forwards;
        }
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .animate-on-scroll.visible {
          opacity: 1;
          transform: translateY(0);
        }
        .button-hover {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform: translateY(0);
        }
        .button-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
        }
        .button-hover:active {
          transform: translateY(0);
        }
        .text-glow {
          text-shadow: 0 0 20px rgba(200, 161, 61, 0.3);
        }
        .backdrop-blur {
          backdrop-filter: blur(10px);
        }
        .hero-content {
          opacity: 0;
        }
        .hero-content.loaded {
          opacity: 1;
        }
        .stagger-1 {
          animation-delay: 0.1s;
        }
        .stagger-2 {
          animation-delay: 0.3s;
        }
        .stagger-3 {
          animation-delay: 0.5s;
        }
        .stagger-4 {
          animation-delay: 0.7s;
        }
        /* --- Image Card Section Styles --- */
        .image-card-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
        }
        @media (max-width: 900px) {
          .image-card-grid {
            grid-template-columns: 1fr;
          }
        }
        .image-card {
          position: relative;
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 8px 32px #32323222, 0 1.5px 0 #B7D2A8;
          background: #fff;
          min-height: 380px;
          cursor: pointer;
          transition: box-shadow 0.35s cubic-bezier(.7,.2,.2,1), transform 0.35s cubic-bezier(.7,.2,.2,1);
        }
        .image-card:hover {
          box-shadow: 0 18px 48px #C8A13D44, 0 4px 0 #B7D2A8;
          transform: scale(1.025) translateY(-4px);
        }
        .image-card-img {
          width: 100%;
          height: 270px;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(.7,.2,.2,1);
          display: block;
          filter: brightness(0.96) contrast(1.03);
        }
        .image-card:hover .image-card-img {
          transform: scale(1.06) rotate(-1deg);
          filter: brightness(0.93) contrast(1.05);
        }
        .image-card-title {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          padding: 1.2rem 1.4rem 1rem 1.4rem;
          background: linear-gradient(180deg, #B7D2A8ee 70%, #ffffff00 100%);
          color: #323232;
          font-size: 1.45rem;
          font-weight: 700;
          font-family: "IBM Plex Serif", serif;
          letter-spacing: 0.5px;
          z-index: 2;
          text-shadow: 0 2px 12px #fff8;
          border-bottom-right-radius: 1.2rem;
          border-bottom-left-radius: 1.2rem;
          pointer-events: none;
        }
        .image-card-desc-wrap {
          position: absolute;
          bottom: 0;
          width: 100%;
          background: linear-gradient(0deg, #fff 80%, #ffffff00 100%);
          padding: 1.4rem 1.4rem 1.2rem 1.4rem;
          z-index: 2;
          border-top-right-radius: 1.2rem;
          border-top-left-radius: 1.2rem;
          transition: background 0.35s;
        }
        .image-card:hover .image-card-desc-wrap {
          background: linear-gradient(0deg, #C8A13D55 80%, #ffffff00 100%);
        }
        .image-card-desc {
          color: #6E6E6E;
          font-size: 1.08rem;
          font-family: "Inter", sans-serif;
          font-weight: 500;
          text-shadow: 0 1px 8px #fff9;
        }
        .image-card-border {
          position: absolute;
          inset: 0;
          border-radius: 1.5rem;
          border: 2.5px solid #B7D2A8;
          pointer-events: none;
          opacity: 0.35;
          z-index: 10;
          transition: border-color 0.3s;
        }
        .image-card:hover .image-card-border {
          border-color: #C8A13D;
          opacity: 0.55;
        }
      `}</style>

      <HospitalityNavbar />

      {/* Hero Section */}
      <section className="relative h-[100vh] flex items-center overflow-hidden">
        {/* Animated background overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent transition-opacity duration-1000"
          style={{ opacity: isLoaded ? 1 : 0 }}
        />
        <div className="relative z-10 text-left mt-17 md:mt-20 px-4 container mx-auto max-w-6xl">
          <div className={`hero-content ${isLoaded ? "loaded" : ""}`}>
            {/* Subtitle */}
            <h2
              className={`text-2xl mb-2 text-glow ${
                isLoaded ? "animate-fade-in-up stagger-1" : ""
              }`}
              style={{
                color: "#C8A13D", // Highlight/CTA
                fontFamily: "IBM Plex Serif, serif",
                opacity: 0,
              }}
            >
              Ruhunugroup Hospitality – Sri Lanka
            </h2>
            {/* Main Title */}
            <h1
              className={`text-5xl font-semibold leading-snug mb-4 ${
                isLoaded ? "animate-fade-in-left stagger-2" : ""
              }`}
              style={{
                color: "#323232", // Headers
                fontFamily: "IBM Plex Serif, serif",
                opacity: 0,
              }}
            >
              Transforming Experiences with <br />
              <span className="text-glow">Better Hospitality</span>
            </h1>
            {/* Description */}
            <p
              className={`mb-6 text-base ${
                isLoaded ? "animate-fade-in-right stagger-3" : ""
              }`}
              style={{
                color: "#6E6E6E", // Descriptions
                fontFamily: "Inter, sans-serif",
                opacity: 0,
              }}
            >
              Powered by Ruhunugroup — Delivering world-class hospitality services with warmth and care.
            </p>
            {/* Buttons */}
            <div
              className={`flex flex-wrap gap-4 ${
                isLoaded ? "animate-scale-in stagger-4" : ""
              }`}
              style={{ opacity: 0 }}
            >
              <a
                href="/services"
                className="inline-flex items-center font-medium px-6 py-2 rounded-full button-hover backdrop-blur"
                style={{
                  background: "#B7D2A8", // Buttons / Accents
                  color: "#323232", // Headers for contrast
                  border: "1px solid #B7D2A8",
                }}
              >
                Learn More
                <span
                  className="ml-2 rounded-full w-6 h-6 flex items-center justify-center transition-transform duration-300 hover:rotate-45"
                  style={{ background: "#FFFFFF" }} // Cards / Dividers
                >
                  <FaArrowRight style={{ color: "#B7D2A8", fontSize: "0.9rem" }} />
                </span>
              </a>
              <a
                href="/contact"
                className="inline-flex items-center font-medium px-6 py-2 rounded-full button-hover backdrop-blur"
                style={{
                  background: "#C8A13D", // Highlights / CTAs
                  color: "#323232", // Headers
                  border: "1px solid #C8A13D",
                }}
              >
                Book an Inquiry
                <span
                  className="ml-2 rounded-full w-6 h-6 flex items-center justify-center transition-transform duration-300 hover:rotate-45"
                  style={{ background: "#323232" }} // Headers
                >
                  <FaArrowRight style={{ color: "#C8A13D", fontSize: "0.9rem" }} />
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* Floating elements for visual interest */}
        <div
          className="absolute top-20 right-10 w-20 h-20 rounded-full animate-pulse"
          style={{ background: "#C8A13D22" }}
        ></div>
        <div
          className="absolute bottom-32 left-10 w-16 h-16 rounded-full animate-pulse"
          style={{ background: "#B7D2A822", animationDelay: "1s" }}
        ></div>
      </section>

      {/* About Section with scroll animation */}
      <div
        id="about-section"
        data-animate
        className={`animate-on-scroll ${
          visibleElements.has("about-section") ? "visible" : ""
        }`}
      >
        <HospitalityAbout />
      </div>

      {/* --- Super-Styled Image Card Section --- */}
 <section className="py-20 px-4 bg-gradient-to-br from-[#fffbe6] to-[#f5e9d6]">
  <div className="container mx-auto max-w-6xl">
    <div
      id="services-title"
      data-animate
      className={`text-center mb-16 animate-on-scroll ${
        visibleElements.has("services-title") ? "visible" : ""
      }`}
    >
      <h2
        className="text-4xl font-bold mb-4 text-glow"
        style={{ color: "#323232", fontFamily: "IBM Plex Serif, serif" }}
      >
        Our Premium Outlets
      </h2>
      <p
        className="text-lg"
        style={{ color: "#C8A13D", fontFamily: "Inter, sans-serif" }}
      >
        Excellence in every detail
      </p>
    </div>
    {/* Two Large Image Cards in One Row */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {[
        {
          title: "Ruhunu Resort",
          image: "/resort.jpeg",
          link: "/hospitality/ruhunu-resort"
        },
        {
          title: "Bake & Brew",
          image: "/bake.jpeg",
          link: "/hospitality/bake-and-brew"
        },
         {
          title: "Nonagama Village",
          image: "/nonagama.jpg",
          link: "/hospitality/nonagama-village"
        },
        {
          title: "Rest House Matara",
          image: "/resort.jpeg",
          link: "/hospitality/rest-house-matara"
        },
      ].map((service, idx) => (
        <a
          key={idx}
          href={service.link}
          className="group block"
        >
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-[#f3e9c7] transition-all duration-300 hover:scale-105"
            style={{ minHeight: 420, height: 480 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              style={{ display: "block" }}
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#fffbe6ee] to-transparent p-8 text-center">
              <span className="text-2xl md:text-3xl font-bold text-[#C8A13D] drop-shadow-lg tracking-wide" style={{ fontFamily: "IBM Plex Serif, serif" }}>
                {service.title}
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>



      <HospitalityFooter />
    </div>
  );
};

export default HospitalityPage;

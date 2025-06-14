'use client';
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Play, Menu } from 'lucide-react';

const SplitLandingPage = () => {
  const [hoveredSide, setHoveredSide] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleNavigation = (page) => {
    // Navigate to the respective page
    window.location.href = `/${page}`;
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Header */}
    

      {/* Main Container */}
      <div className="flex h-full">
        {/* Hospitality Section - Left (Dark with teal accents) */}
        <div 
          className={`relative flex-1 transition-all duration-700 ease-out cursor-pointer ${
            hoveredSide === 'hospitality' ? 'flex-[1.3]' : hoveredSide === 'automobile' ? 'flex-[0.7]' : 'flex-1'
          }`}
          onMouseEnter={() => setHoveredSide('hospitality')}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={() => handleNavigation('hospitality')}
          style={{
            clipPath: 'polygon(0 0, calc(100% - 50px) 0, 100% 100%, 0 100%)'
          }}
        >
          {/* Background using color palette 1 - Headers (dark) */}
          <div className="absolute inset-0 bg-gray-800">
            {/* Animated geometric shapes */}
            <div className="absolute inset-0 overflow-hidden">
              {/* Large triangular shapes */}
              <div className="absolute top-0 left-0 w-full h-full">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <polygon 
                    points="0,0 60,0 45,40 0,25" 
                    fill="rgba(75, 85, 99, 0.8)" 
                    className="animate-pulse"
                  />
                  <polygon 
                    points="20,60 80,45 70,100 10,100" 
                    fill="rgba(55, 65, 81, 0.6)"
                    style={{animationDelay: '1s'}}
                    className="animate-pulse"
                  />
                  <polygon 
                    points="60,20 100,35 100,80 75,70" 
                    fill="rgba(107, 114, 128, 0.4)"
                    style={{animationDelay: '2s'}}
                    className="animate-pulse"
                  />
                </svg>
              </div>
              
              {/* Floating geometric elements with teal accents */}
              <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-teal-500 opacity-20 transform rotate-45 animate-spin" style={{animationDuration: '15s'}} />
              <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-teal-400 opacity-30 transform rotate-12 animate-bounce" />
              <div className="absolute top-2/3 left-1/5 w-8 h-8 bg-teal-600 opacity-40 rounded-full animate-ping" style={{animationDelay: '1s'}} />
              <div className="absolute bottom-1/4 left-2/3 w-6 h-6 bg-teal-300 opacity-50 transform rotate-45 animate-pulse" style={{animationDelay: '2s'}} />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-20 flex flex-col justify-center items-start h-full p-16">
            <div className={`transform transition-all duration-700 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-8xl font-black text-white mb-12 leading-none tracking-tight">
                <span className="block transform hover:scale-105 transition-transform duration-500 delay-100 drop-shadow-2xl">Hospitality</span>
              </h1>
              
              <button 
                className="flex items-center space-x-4 px-8 py-4 border-2 border-orange-400 text-orange-400 rounded-full hover:bg-orange-400 hover:text-white transition-all duration-500 transform hover:scale-110 group shadow-lg hover:shadow-orange-400/50"
                
              >
                <ChevronLeft size={24} className="group-hover:animate-pulse" />
                <a href='/hospitality' className="font-bold tracking-wider text-lg">Explore Us</a>
              </button>
            </div>

            {/* Animated dots */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-teal-400 rounded-full animate-ping opacity-30"
                  style={{
                    left: `${Math.random() * 80 + 10}%`,
                    top: `${Math.random() * 80 + 10}%`,
                    animationDelay: `${Math.random() * 4}s`,
                    animationDuration: `${2 + Math.random() * 3}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Hover effect overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r from-teal-600/20 to-transparent transition-opacity duration-500 ${hoveredSide === 'hospitality' ? 'opacity-100' : 'opacity-0'}`} />
        </div>



        {/* Automobile Section - Right (Light with orange/yellow accents) */}
        <div 
          className={`relative flex-1 transition-all duration-700 ease-out cursor-pointer ${
            hoveredSide === 'automobile' ? 'flex-[1.3]' : hoveredSide === 'hospitality' ? 'flex-[0.7]' : 'flex-1'
          }`}
          onMouseEnter={() => setHoveredSide('automobile')}
          onMouseLeave={() => setHoveredSide(null)}
          onClick={() => handleNavigation('automobile')}
          style={{
            clipPath: 'polygon(50px 0, 100% 0, 100% 100%, 0 100%)'
          }}
        >
          {/* Background using color palette 2 - Cards/Dividers (light) */}
          <div className="absolute inset-0 bg-gray-100">
            {/* Animated geometric shapes */}
            <div className="absolute inset-0 overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon 
                  points="100,0 40,0 55,40 100,25" 
                  fill="rgba(229, 231, 235, 0.8)" 
                  className="animate-pulse"
                />
                <polygon 
                  points="80,60 20,45 30,100 90,100" 
                  fill="rgba(243, 244, 246, 0.6)"
                  style={{animationDelay: '1s'}}
                  className="animate-pulse"
                />
                <polygon 
                  points="40,20 0,35 0,80 25,70" 
                  fill="rgba(249, 250, 251, 0.4)"
                  style={{animationDelay: '2s'}}
                  className="animate-pulse"
                />
              </svg>
              
              {/* Floating geometric elements with orange/yellow accents */}
              <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-orange-500 opacity-25 transform rotate-45 animate-spin" style={{animationDuration: '12s', animationDirection: 'reverse'}} />
              <div className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-yellow-400 opacity-35 transform rotate-12 animate-bounce" style={{animationDelay: '0.5s'}} />
              <div className="absolute top-2/3 right-1/5 w-8 h-8 bg-orange-600 opacity-30 rounded-full animate-ping" style={{animationDelay: '1.5s'}} />
              <div className="absolute bottom-1/4 right-2/3 w-6 h-6 bg-yellow-500 opacity-40 transform rotate-45 animate-pulse" style={{animationDelay: '2.5s'}} />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-20 flex flex-col justify-center items-end h-full p-16 text-right">
            <div className={`transform transition-all duration-700 ${isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`} style={{transitionDelay: '300ms'}}>
              <h1 className="text-4xl md:text-5xl lg:text-8xl font-black text-gray-800 mb-12 leading-none tracking-tight">
                <span className="block transform hover:scale-105 transition-transform duration-500 delay-100 drop-shadow-lg">Automobile</span>
              </h1>
              
              <div className="flex flex-col items-end space-y-6">
                <button 
                  className="flex items-center space-x-4 px-8 py-4 border-2 border-orange-500 text-orange-600 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-500 transform hover:scale-110 group shadow-lg hover:shadow-orange-500/50"
                  
                >
                  <a href='/automobile' className="font-bold tracking-wider text-lg">Explore Us</a>
                  <ChevronRight size={24} className="group-hover:animate-pulse" />
                </button>
                
                
              </div>
            </div>

            {/* Animated dots */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-orange-400 rounded-full animate-ping opacity-40"
                  style={{
                    left: `${Math.random() * 80 + 10}%`,
                    top: `${Math.random() * 80 + 10}%`,
                    animationDelay: `${Math.random() * 4}s`,
                    animationDuration: `${2 + Math.random() * 3}s`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Hover effect overlay */}
          <div className={`absolute inset-0 bg-gradient-to-l from-orange-500/20 to-transparent transition-opacity duration-500 ${hoveredSide === 'automobile' ? 'opacity-100' : 'opacity-0'}`} />
        </div>
      </div>

      {/* Center Logo */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40">
        <div className="relative">
          {/* Main logo circle */}
          <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-orange-400 animate-pulse">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 via-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-inner">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full animate-spin" />
              </div>
            </div>
          </div>
          
          {/* Rotating rings */}
          <div className="absolute -inset-4 border-4 border-orange-400 rounded-full animate-spin opacity-60" style={{animationDuration: '10s'}} />
          <div className="absolute -inset-8 border-2 border-teal-400 rounded-full animate-spin opacity-40" style={{animationDuration: '15s', animationDirection: 'reverse'}} />
          <div className="absolute -inset-12 border border-orange-300 rounded-full animate-spin opacity-20" style={{animationDuration: '20s'}} />
          
          {/* Pulsing glow effect */}
          <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-20" style={{animationDuration: '3s'}} />
        </div>
      </div>

      {/* Bottom Progress Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <div className="flex space-x-6 items-center">
          <div className={`h-2 rounded-full transition-all duration-500 ${hoveredSide === 'hospitality' ? 'bg-teal-400 w-20 shadow-lg shadow-teal-400/50' : 'bg-gray-400 w-12'}`} />
          <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse" />
          <div className={`h-2 rounded-full transition-all duration-500 ${hoveredSide === 'automobile' ? 'bg-orange-400 w-20 shadow-lg shadow-orange-400/50' : 'bg-gray-400 w-12'}`} />
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-pulse ${i % 2 === 0 ? 'bg-orange-400' : 'bg-teal-400'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(180deg); }
        }
        
        @keyframes slideInLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes morphShape {
          0%, 100% { border-radius: 50% 50% 50% 50%; }
          25% { border-radius: 60% 40% 60% 40%; }
          50% { border-radius: 40% 60% 40% 60%; }
          75% { border-radius: 50% 50% 60% 40%; }
        }
      `}</style>
    </div>
  );
};

export default SplitLandingPage;
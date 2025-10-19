"use client"
import { useEffect, useRef } from 'react';
import HoverableText from '../common/HoverText';

const HeroSection = () => {



  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-100">
      {/* Animated background canvas */}
    
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in lowercase" style={{fontFamily:'virtual', color: '#1f4668'}}>
          <HoverableText text={'PIXI'} color="#1f4668"/> <span style={{color: '#27AAE1'}}><HoverableText text={'GROUP'} color="#27AAE1"/></span>
        </h1>
        
        <div className="relative inline-block mb-8">
          <p className="text-2xl md:text-4xl font-medium mb-8 relative z-10 animate-slide-up" style={{fontFamily:'poppin', color: '#1f4668'}}>
            Your Vision, Our <span style={{color: '#27AAE1'}}>PIXI Magic!</span>
          </p>
          <div className="absolute -bottom-2 left-0 w-full h-3 bg-[#27AAE1]/30 rounded-full animate-pulse-slow"></div>
        </div>
        
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-10 text-gray-700 animate-slide-up delay-300" style={{fontFamily:'poppin'}}>
          Empowering brands with innovative design, strategic consulting, and transformative education.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
          <button className="px-8 py-3 bg-[#1f4668] rounded-full font-semibold text-white shadow-lg hover:shadow-cyan-500/30 transition-all hover:scale-105">
            Explore Services
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-[#1f4668]/30 rounded-full font-semibold text-[#1f4668] hover:bg-[#1f4668]/10 transition-all">
            Contact Us
          </button>
        </div>
      </div>
      
     
      
      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#27AAE1]/10 animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full bg-[#1f4668]/10 animate-pulse-slow delay-1000"></div>
      
      {/* Custom styles for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
        
        .animate-fade-in {
          animation: fadeIn 1.5s ease-out forwards;
        }
        
        .animate-slide-up {
          opacity: 0;
          animation: slideUp 1s ease-out forwards;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-500 {
          animation-delay: 0.5s;
        }
        
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
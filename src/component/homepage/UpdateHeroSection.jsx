'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import HoverableText from '../common/HoverText';
import ScrollButton from '../common/BusinessProfile';
import Lenis from 'lenis';

const UpdatedHeroSection = ({title}) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });
  const [currentService, setCurrentService] = useState(0);
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const mouseCircleRef = useRef(null);
const services = [
    "Web App Development",
    "Android App Development",
    "UI/UX Design",
    "Software Solutions",
    "API Integration",
    "Brand Identity & Logo Design",
    "Digital Marketing",
    "Business Automation",
];

  // Format service text for mobile - add line breaks for long text
  const formatServiceText = (text) => {
    if (isMobile && text === "Web and App Development") {
      return (
        <>
          Web and App<br />Development
        </>
      );
    }
    return text;
  };

  const { scrollY } = useScroll();
  const textScale = useTransform(scrollY, [0, 300], [1, 0.8]);

  // Check if mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Service rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [services.length]);

  // Get container dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  
  // Generate grid lines
  const generateGridLines = () => {
    const lines = [];
    const cellSize = 50; // Size of each grid cell
    
    // Calculate how many lines we need based on container dimensions
    const horizontalLines = Math.ceil(dimensions.height / cellSize) + 2;
    const verticalLines = Math.ceil(dimensions.width / cellSize) + 2;
    
    // Create horizontal lines
    for (let i = 0; i < horizontalLines; i++) {
      lines.push(
        <motion.div
          key={`h-${i}`}
          className="absolute left-0 right-0 h-px bg-white/10"
          style={{ top: `${i * cellSize}px` }}
          animate={{ 
            x: [0, -100],
          }}
          transition={{
            x: {
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }
          }}
        />
      );
    }
    
    // Create vertical lines
    for (let i = 0; i < verticalLines; i++) {
      lines.push(
        <motion.div
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-px bg-white/10"
          style={{ left: `${i * cellSize}px` }}
          animate={{ 
            x: [0, -100],
          }}
          transition={{
            x: {
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }
          }}
        />
      );
    }
    
    return lines;
  };



  return (
    <div 
      ref={containerRef}
      className="relative min-h-[60vh] md:min-h-screen font-sans bg-[#1f4668] z-20 overflow-hidden flex items-center py-8 md:py-12" 
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        {generateGridLines()}
      </div>

      {/* Improved Smooth Follow Circle - Only show on non-touch devices */}
      {!isMobile && (
        <div 
          ref={mouseCircleRef}
          className="fixed w-5 h-5 rounded-full bg-gray-400 pointer-events-none opacity-0 z-50 transition-opacity duration-300"
          style={{ left: 0, top: 0 }}
        />
      )}

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center w-full px-4 mx-auto">
        <motion.div style={{ scale: textScale }} className="relative max-w-4xl mx-auto w-full">
          <h1 className="text-6xl  sm:text-6xl md:text-7xl lg:text-8xl text-gray-900 leading-tight md:leading-none">
            <HoverableText color='text-white' text={title || "ByteSynq Solution"} />
            
            {/* Sliding Text Animation */}
            <div className="h-20 xs:h-20 md:h-24  flex items-center justify-center overflow-hidden relative uppercase" >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentService}
                  initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
                  transition={{ 
                    duration: 0.7,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="absolute w-full bottom-8 md:bottom-10"
                >
                  <span className="text-white text-3xl  sm:text-2xl md:text-3xl lg:text-4xl tracking-tight px-2 leading-tight" style={{letterSpacing:'1.5px'}}>
                    {formatServiceText(services[currentService])}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </h1>
        </motion.div>
      </main>

      <ScrollButton />
    </div>
  );
};

export default UpdatedHeroSection;
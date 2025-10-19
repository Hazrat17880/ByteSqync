'use client';
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const HoverableText = ({ text, color = 'text-white' }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`inline-block transition-all duration-300 ${color}`}
      style={{
        transform: isHovered ? 'scale(1.02)' : 'scale(1)',
      }}
    >
      {text}
    </span>
  );
};

const ScrollButton = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1.5, duration: 1 }}
    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
  >
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="flex flex-col items-center gap-2 cursor-pointer"
    >
      <span className="text-gray-400 text-sm">Scroll</span>
      <svg
        className="w-6 h-6 text-gray-400"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
      </svg>
    </motion.div>
  </motion.div>
);

const UpdatedHeroSection = ({ title }) => {
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

  const { scrollY } = useScroll();
  const textScale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const parallaxY = useTransform(scrollY, [0, 300], [0, 50]);

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
    }, 3000);
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

  // Mouse tracking for custom cursor
  useEffect(() => {
    if (isMobile) return;

    let animationFrameId;
    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      const dx = targetX - currentX;
      const dy = targetY - currentY;
      
      currentX += dx * 0.15;
      currentY += dy * 0.15;

      if (mouseCircleRef.current) {
        mouseCircleRef.current.style.transform = `translate(${currentX - 10}px, ${currentY - 10}px)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      if (mouseCircleRef.current) {
        mouseCircleRef.current.style.opacity = '0.6';
      }
    };

    const handleMouseLeave = () => {
      if (mouseCircleRef.current) {
        mouseCircleRef.current.style.opacity = '0';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    if (containerRef.current) {
      containerRef.current.addEventListener('mouseenter', handleMouseEnter);
      containerRef.current.addEventListener('mouseleave', handleMouseLeave);
    }
    
    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (containerRef.current) {
        containerRef.current.removeEventListener('mouseenter', handleMouseEnter);
        containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  // Generate diagonal lines pattern
  const generateDiagonalLines = () => {
    const lines = [];
    const spacing = 80;
    const numLines = Math.ceil((dimensions.width + dimensions.height) / spacing) + 5;
    
    for (let i = 0; i < numLines; i++) {
      lines.push(
        <div
          key={`line-${i}`}
          className="absolute h-px bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent"
          style={{
            width: '200%',
            top: `${i * spacing}px`,
            left: '-50%',
            transform: 'rotate(-45deg)',
            transformOrigin: 'center'
          }}
        />
      );
    }
    
    return lines;
  };

  // Format service text for better display
  const formatServiceText = (text) => {
    if (isMobile && text.length > 20) {
      const words = text.split(' ');
      const mid = Math.ceil(words.length / 2);
      return (
        <>
          {words.slice(0, mid).join(' ')}<br />
          {words.slice(mid).join(' ')}
        </>
      );
    }
    return text;
  };

  return (
    <div 
      ref={containerRef}
      className="relative min-h-[60vh] md:min-h-screen font-sans bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 z-20 overflow-hidden flex items-center py-8 md:py-12" 
    >
      {/* Diagonal Lines Pattern */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        {generateDiagonalLines()}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-950" />

      {/* Accent Glow - Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      
      {/* Subtle Corner Accent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-20 right-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl hidden md:block"
      />

    

      {/* Side Decorative Lines */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-12 md:w-20 space-y-3 pl-4 md:pl-8">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1, delay: 0.5 }}
          className="h-px bg-gradient-to-r from-emerald-500/50 to-transparent"
        />
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '70%' }}
          transition={{ duration: 1, delay: 0.7 }}
          className="h-px bg-gradient-to-r from-emerald-500/30 to-transparent"
        />
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: '40%' }}
          transition={{ duration: 1, delay: 0.9 }}
          className="h-px bg-gradient-to-r from-emerald-500/20 to-transparent"
        />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center mt-[10rem]  w-full px-4 mx-auto">
        <motion.div 
          style={{ scale: textScale, y: parallaxY }} 
          className="relative max-w-6xl mx-auto w-full space-y-6"
        >
          
          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight md:leading-none"
          >
            <HoverableText text={title || "ByteSynq Solution"} />
          </motion.h1>
          
          {/* Sliding Service Text Animation */}
          <div className="h-20 xs:h-20 md:h-28 flex items-center justify-center overflow-hidden relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentService}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
                transition={{ 
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="absolute w-full"
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight px-2 leading-tight">
                  {formatServiceText(services[currentService])}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="w-32 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent mx-auto"
          />

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Building tomorrow's technology today. We deliver scalable, secure, and innovative software solutions that transform businesses.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-wrap gap-4 justify-center pt-6"
          >
            <button className="group px-8 py-4 bg-emerald-500 text-slate-950 font-semibold rounded-lg hover:bg-emerald-400 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 flex items-center gap-2">
              <span>Get Started</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="px-8 py-4 bg-transparent text-gray-300 font-semibold rounded-lg border border-gray-700 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all duration-300">
              View Our Work
            </button>
          </motion.div>

          {/* Stats/Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="grid grid-cols-3 gap-6 md:gap-12 pt-12 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-white mb-1">200+</div>
              <div className="text-xs md:text-sm text-gray-500">Projects</div>
            </div>
            <div className="text-center border-x border-gray-800">
              <div className="text-2xl md:text-4xl font-bold text-white mb-1">50+</div>
              <div className="text-xs md:text-sm text-gray-500">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-white mb-1">99%</div>
              <div className="text-xs md:text-sm text-gray-500">Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </main>

      {/* <ScrollButton /> */}
    </div>
  );
};

export default UpdatedHeroSection;
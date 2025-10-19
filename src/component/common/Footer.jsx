"use client"
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail,
  MapPin,
  Phone,
  Heart,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Check if mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  // Generate grid lines (same as hero section)
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
    <footer 
      ref={containerRef}
      className="bg-primary text-white relative border-t border-gray-800 overflow-hidden hidden md:block"
    >
      {/* Animated Grid Background (same as hero) */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {generateGridLines()}
      </div>

      {/* Main Footer Content - Compact Design */}
      <div className="container mx-auto px-4 py-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <h3 className="text-lg font-semibold mr-2">ByteSynq Solution </h3>
           
          </motion.div>

          {/* Contact Info - Compact */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 text-xs text-white/80"
          >
            <a href="mailto:hi@pixigroup.co" className="flex items-center hover:text-white transition-colors">
              <Mail className="w-3 h-3 mr-1 text-white" />
              <span className="hidden sm:inline">Email</span>
            </a>
            <a href="tel:+93705155015" className="flex items-center hover:text-white transition-colors">
              <Phone className="w-3 h-3 mr-1 text-white" />
              <span className="hidden sm:inline">Call</span>
            </a>
            <div className="flex items-center">
              <MapPin className="w-3 h-3 mr-1 text-white" />
              <span>Islamabad & San Kabol</span>
            </div>
          </motion.div>

          {/* Copyright - Centered on mobile, right on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center text-xs text-white/60 order-first md:order-none text-center md:text-right"
          >
            <span>Copyright © {currentYear} ByteSqync Solution. All rights reserved.</span>
          </motion.div>
        </div>
      </div>

      {/* Go to Top Button - Positioned at the bottom right */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ once: true }}
        onClick={scrollToTop}
        className="absolute bottom-4 right-4 bg-white/20 p-2 rounded-full shadow-lg hover:bg-white/30 transition-colors z-50 backdrop-blur-sm"
        aria-label="Go to top"
      >
        <ArrowUp className="w-4 h-4 text-white" />
      </motion.button>
    </footer>
  );
};

export default Footer;
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Download } from 'lucide-react';

const ScrollButton = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [rotation, setRotation] = useState(0);
  const scrollTimeout = useRef(null);
  const animationFrame = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // User scrolled — start rotating
      setIsRotating(true);

      // Clear previous timeout
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

      // Set a timeout to detect scroll stop (300ms after last scroll)
      scrollTimeout.current = setTimeout(() => {
        setIsRotating(false); // Stop rotation
      }, 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  useEffect(() => {
    const animate = () => {
      setRotation((prev) => (prev + 4) % 360); // 4 degrees per frame, adjust speed here
      animationFrame.current = requestAnimationFrame(animate);
    };

    if (isRotating) {
      animate();
    } else {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    }

    // Cleanup on effect re-run or unmount
    return () => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, [isRotating]);

  const handleButtonClick = () => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = '/profile.pdf'; // Replace with your actual file path
    link.download = 'company_profile.pdf'; // The filename for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Optional: Add a small visual feedback
    const button = document.querySelector('[aria-label="Download profile"]');
    if (button) {
      button.classList.add('bg-[#EB5935]');
      setTimeout(() => {
        button.classList.remove('bg-[#EB5935]');
      }, 300);
    }
  };

  return (
    <div className="absolute bottom-10 left-20 z-10 hidden md:block shadow-xl rounded-full">
      <button
        onClick={handleButtonClick}
        aria-label="Download profile"
        className="relative w-28 h-28 flex items-center justify-center rounded-full bg-white  text-white font-bold text-xs uppercase overflow-hidden hover:cursor-pointer hover:scale-110 transition-colors duration-900 transition-all"
      >
        {/* Rotating circular text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              />
            </defs>
            <text className="font-sans" fontSize="8">
              <textPath href="#circlePath" fill="#1f4668" textLength="150">
                Download Profile
              </textPath>
            </text>
          </svg>
        </div>

        {/* Fixed Download icon and text */}
        <div className="relative z-10 pointer-events-none flex flex-col items-center justify-center border-b-2 ">
          <Download className="w-8 h-8 mb-1 text-primary" />
          
        </div>
      </button>
    </div>
  );
};

export default ScrollButton;
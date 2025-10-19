'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const floatTransition = {
  y: {
    duration: 3,
    repeat: Infinity,
    repeatType: 'reverse',
    ease: 'easeInOut',
  },
};

const HeroSection = () => {
  const { scrollY } = useScroll();
  const textScale = useTransform(scrollY, [0, 300], [1, 0.9]);
  const imageScale = useTransform(scrollY, [0, 300], [1, 1.12]);

  return (
    <section className="relative flex items-center justify-center h-[90vh] md:h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 overflow-hidden font-sans">
      {/* --- Floating Background Orbs / Tech Shapes --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.img
          src="/images/tech1.png"
          alt="Abstract Tech Shape"
          initial={{ y: 0 }}
          animate={{ y: -20 }}
          transition={floatTransition.y}
          style={{ scale: imageScale }}
          className="absolute -left-32 -bottom-20 md:-left-40 md:-bottom-10 lg:-left-60 w-64 h-64 md:w-96 md:h-96 opacity-40 blur-[2px]"
        />
        <motion.img
          src="/images/tech2.png"
          alt="Abstract Orb"
          initial={{ y: 0 }}
          animate={{ y: -30 }}
          transition={floatTransition.y}
          style={{ scale: imageScale }}
          className="absolute -right-24 -top-32 md:-right-40 md:-top-24 w-72 h-72 md:w-[28rem] md:h-[28rem] opacity-50 blur-[3px]"
        />
      </div>

      {/* --- Foreground Content --- */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 md:px-12">
        <motion.div style={{ scale: textScale }} className="max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 leading-tight drop-shadow-sm">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600">
              We Build Scalable & Stunning
            </span>
            <br />
            <span className="text-gray-900">Digital Products.</span>
          </h1>

          <p className="mt-6 text-gray-600 font-medium text-sm md:text-base max-w-2xl mx-auto">
            From <span className="font-semibold text-indigo-600">UI/UX</span> to full-stack development —
            we turn ideas into <span className="font-semibold text-purple-600">powerful experiences</span>.
          </p>
        </motion.div>

        {/* --- Buttons --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
            Get Started <ArrowRight size={18} />
          </button>

          <button className="px-8 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold shadow-sm hover:bg-gray-100 hover:scale-105 transition-all duration-300">
            View Portfolio
          </button>
        </motion.div>

        {/* --- Floating 3D Illustration / Mockup --- */}
        <motion.img
          src="/images/laptop-mockup.png"
          alt="Laptop Mockup"
          initial={{ y: 0 }}
          animate={{ y: -15 }}
          transition={floatTransition.y}
          className="mt-12 w-72 sm:w-96 md:w-[30rem] drop-shadow-2xl"
        />
      </div>
    </section>
  );
};

export default HeroSection;

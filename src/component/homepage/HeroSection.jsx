'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import HoverableText from '../common/HoverText';
import ScrollButton from '../common/BusinessProfile';

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
    <section className="relative flex items-center justify-center h-[90vh] md:h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden font-sans">
      {/* --- Floating Background Orbs --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.img
          src="/images/1.png"
          alt="Orb 1"
          initial={{ y: 0 }}
          animate={{ y: -20 }}
          transition={floatTransition.y}
          style={{ scale: imageScale }}
          className="absolute -left-32 -bottom-20 md:-left-40 md:-bottom-10 lg:-left-60 w-64 h-64 md:w-96 md:h-96 opacity-50 blur-[2px]"
        />
        <motion.img
          src="/images/2.png"
          alt="Orb 2"
          initial={{ y: 0 }}
          animate={{ y: -30 }}
          transition={floatTransition.y}
          style={{ scale: imageScale }}
          className="absolute -right-24 -top-32 md:-right-40 md:-top-24 w-72 h-72 md:w-[28rem] md:h-[28rem] opacity-60 blur-[3px]"
        />
        <motion.img
          src="/images/3.png"
          alt="Orb 3"
          initial={{ y: 0 }}
          animate={{ y: -25 }}
          transition={floatTransition.y}
          style={{ scale: imageScale }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-80 h-80 md:w-[32rem] md:h-[32rem] opacity-[0.15] blur-[4px]"
        />
      </div>

      {/* --- Foreground Content --- */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 md:px-12">
        <motion.div style={{ scale: textScale }} className="max-w-5xl mx-auto">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 leading-tight drop-shadow-sm">
            <HoverableText text="CREATIVE" />
            <br />
            <HoverableText text="DESIGN" />
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
              AGENCY.
            </span>
          </h1>

          <p className="mt-6 text-gray-500 font-medium tracking-[0.3em] text-xs md:text-sm uppercase">
            Since 2014 — We Craft Experiences, Not Just Designs.
          </p>

          {/* Floating Accents */}
          <motion.img
            src="/images/4.png"
            alt="Decorative Accent"
            initial={{ y: 0 }}
            animate={{ y: -20 }}
            transition={floatTransition.y}
            className="absolute -top-6 -left-10 md:-top-8 md:-left-14 w-16 h-16 md:w-24 md:h-24 opacity-80"
          />
          <motion.img
            src="/images/5.png"
            alt="Decorative Accent"
            initial={{ y: 0 }}
            animate={{ y: -30 }}
            transition={floatTransition.y}
            className="absolute -bottom-6 -right-10 md:-bottom-8 md:-right-16 w-16 h-16 md:w-24 md:h-24 opacity-80"
          />
        </motion.div>

        {/* --- CTA --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10"
        >
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Explore Our Work
          </button>
        </motion.div>
      </div>

      {/* --- Scroll Button --- */}
      <ScrollButton />
    </section>
  );
};

export default HeroSection;

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

  const textScale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const imageScale = useTransform(scrollY, [0, 300], [1, 1.15]);

  return (
    <div className="relative md:h-screen h-[80vh] font-sans bg-gray-100 z-20">

      {/* Background Floating Images */}
      <div className="absolute inset-0 w-full h-full z-50 pointer-events-none overflow-hidden">
        <motion.img
          src={'/images/1.png'}
          alt="Abstract background shape"
          width={800}
          height={800}
          initial={{ y: 0 }}
          animate={{ y: -20 }}
          transition={floatTransition.y}
          style={{ scale: imageScale }}
          className="absolute z-20 md:-left-40 -bottom-10 -left-20 rounded-full w-[11rem] h-[10rem] sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-[32rem] lg:h-[32rem]"
        />
        <motion.img
          src={'/images/2.png'}
          alt="Abstract background shape"
          width={800}
          height={800}
          initial={{ y: 0 }}
          animate={{ y: -30 }}
          transition={floatTransition.y}
          style={{ scale: imageScale }}
          className="absolute lg:-top-80 lg:-left-40 md:-top-60 md:-left-20 -left-10 -top-20 rounded-full w-[10rem] h-[10rem] sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-[32rem] lg:h-[32rem]"
        />
        <motion.img
          src={'/images/3.png'}
          alt="Abstract background shape"
          width={800}
          height={800}
          initial={{ y: 0 }}
          animate={{ y: -25 }}
          transition={floatTransition.y}
          style={{ scale: imageScale }}
          className="absolute z-90 md:-right-55 top-0 md:top-20 -right-20 rounded-full w-[10rem] h-[10rem] sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-[32rem] lg:h-[32rem]"
        />
      </div>

      {/* Main Hero Content */}
      <main className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
        <motion.div style={{ scale: textScale }} className="relative max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-8xl font-extrabold text-gray-900 leading-none">
            <HoverableText text="CREATIVE" />
            <br />
            <HoverableText text="DESIGN" />
            <br />
            <HoverableText text="AGENCY." />
          </h1>

          <p
            className="mt-6 text-gray-600 text-sm font-semibold tracking-widest"
            style={{ fontFamily: 'virtual, sans-serif' }}
          >
            SINCE 2014
          </p>

          {/* Small Floating Accent Images */}
          <motion.img
            src={'/images/4.png'}
            alt="Abstract background shape"
            width={100}
            height={100}
            initial={{ y: 0 }}
            animate={{ y: -30 }}
            transition={floatTransition.y}
            style={{ scale: imageScale }}
            className="absolute -top-2 md:-left-15 -left-10 md:w-[5rem] md:h-[5rem] w-[3rem] h-[3rem] rounded-full rotate-280"
          />
          <motion.img
            src={'/images/5.png'}
            alt="Abstract background shape"
            width={100}
            height={100}
            initial={{ y: 0 }}
            animate={{ y: -30 }}
            transition={floatTransition.y}
            style={{ scale: imageScale }}
            className="absolute -bottom-2 -right-10 md:w-[5rem] md:h-[5rem] w-[3rem] h-[3rem] rounded-full"
          />
        </motion.div>
      </main>

      {/* Scroll Down Button */}
      <ScrollButton />
    </div>
  );
};

export default HeroSection;

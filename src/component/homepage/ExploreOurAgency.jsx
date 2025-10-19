'use client';

import { motion } from 'framer-motion';
import HoverableText from '../common/HoverText';
import HoverableTextParagraph from '../common/HoverTextParagraph';

export default function ExploreOurBranch() {
  return (
    <section className="relative bg-gray-100 py-10 px-6 sm:px-12 lg:px-24 overflow-hidden md:min-h-screen flex items-center justify-center mb-30 md:mb-2">
      {/* Vertical Moving Line */}
      {/* <motion.div
        className="absolute top-1/2 bottom-0 w-0.5 bg-[#EB5935]/30 left-1/2 h-36"
        initial={{ x: '-50%' }}
        animate={{ 
          x: ['-50%', '-30%', '-70%', '-50%'],
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      /> */}
      
      {/* Rotating Rectangle */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 border-4 border-[#27AAE1]/20 -translate-x-1/2 -translate-y-1/2"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <div className="relative z-40 max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl  text-secondary tracking-wider lowercase"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ fontFamily: 'virtual' }}
        >
          Explore Our Branch
        </motion.h2>
        
        <motion.div
          className="text-3xl mt-2 md:text-4xl lg:text-4xl text-primary leading-tight "
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
            style={{ fontFamily: 'fantasy' }}
        >
         <HoverableTextParagraph color='text-primary' text={'ByteSyqnc  IS A  CREATIVE   AGENCY THAT TRANSFORMS IDEAS  INTO MASTERPIECES. WE CRAFT DESIGN  MAGIC, BREATHE NEW LIFE INTO BRANDS, AND MAKE THE IMPOSSIBLE POSSIBLE. CHOOSE PIXI BECAUSE WE ARE WORTH IT!'}/>
         
        </motion.div>
      </div>

      {/* Decorative floating elements */}
      {/* <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-[#EB5935]/20 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      /> */}
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 bg-secondary rounded-full"
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  );
}
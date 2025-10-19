'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay: i * 0.2 },
  }),
};

export default function AboutPixi() {
  return (
    <section className='relative bg-[#ececea] md:py-5 md:pt-20 md:h-screen flex justify-center items-center py-20'>
    
 
      <div
        style={{zIndex:0}}
        id="about-pixi"
        className="relative  px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto rounded-xl overflow-hidden "
      >
      
        <div className=" mt-2 md:pb-15 pb-5 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8 mt-2 md:pb-15 pb-5'">
           

           <motion.h2
  className="text-3xl md:text-5xl  text-[#1f4668] tracking-wider " 
  // style={{ fontFamily: 'fantasy' }}
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.2 }}
    style={{ fontFamily: 'virtual, sans-serif' }}
>
  discover <br className='hidden md:block'/> our <span className="text-[#27AAE1]">agency</span>
</motion.h2>

            <motion.div
              className="relative pl-6 border-l-4 border-[#27AAE1]"
              custom={1}
              variants={fadeUp}
            >
              <p className="text-lg  leading-relaxed text-gray-600"  style={{ fontFamily: 'poppin, sans-serif' }}>
                Welcome to <span className="font-semibold text-[#27AAE1]">ByteSqync</span> where your ideas come to life. 
                We specialize in crafting unique brands, captivating advertising campaigns, 
                and effective digital strategies.
              </p>
            </motion.div>
          </div>

          {/* Right Column */}
          <motion.div
            className="space-y-3"
            custom={2}
            variants={fadeUp}
          >
            <p
  className="text-lg text-gray-600 leading-relaxed"
  style={{ fontFamily: 'Poppins, sans-serif' }}
>
  <span className="font-semibold text-[#27AAE1]">ByteSynq</span> is a forward-thinking
  software development company dedicated to building intelligent digital solutions. We
  specialize in <span className="text-[#27AAE1] font-medium">custom software</span>,
  <span className="text-[#27AAE1] font-medium"> web applications</span>, and
  <span className="text-[#27AAE1] font-medium"> Android apps</span> that empower
  businesses to grow and innovate in the digital era.
</p>

<p
  className="text-lg text-gray-600 leading-relaxed mt-4"
  style={{ fontFamily: 'Poppins, sans-serif' }}
>
  Our expert team combines modern technology, design excellence, and strategic thinking
  to deliver scalable and user-centric solutions. At <span className="font-semibold text-[#27AAE1]">ByteSynq</span>,
  we don’t just develop, we craft seamless digital experiences that drive performance,
  efficiency, and long-term success for your brand.
</p>

          </motion.div>
        </div>

    
      </div>
    </section>
  );
}
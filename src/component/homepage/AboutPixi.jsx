'use client';

import { motion } from 'framer-motion';
import Image from 'next/image'; // ✅ Correct import for Next.js Image component
import aboutImg from '../../../public/images/1.png'; // ✅ Your actual image file

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut', delay: i * 0.25 },
  }),
};

export default function AboutPixi() {
  return (
    <section className="relative bg-gradient-to-b from-[#f5f5f4] to-[#eaeaea] py-24 md:py-32 flex justify-center items-center overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-5 bg-[url('/grid.svg')] bg-repeat"></div>

      <div
        id="about-pixi"
        className="relative z-10 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
      >
        {/* LEFT CONTENT */}
        <div className="space-y-8">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-[#1f4668] leading-tight"
            initial="hidden"
            animate="visible"
            custom={1}
            variants={fadeUp}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Discover <br className="hidden md:block" />
            Our <span className="text-[#27AAE1]">Creative Agency</span>
          </motion.h2>

          <motion.div
            className="relative pl-6 border-l-4 border-[#27AAE1]"
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <p
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Welcome to{' '}
              <span className="font-semibold text-[#27AAE1]">ByteSynq</span>, where
              creativity meets technology. We specialize in crafting distinctive brands,
              compelling campaigns, and tailored digital experiences that help businesses
              thrive in the modern era.
            </p>
          </motion.div>
        </div>

        {/* RIGHT CONTENT */}
        <motion.div
          className="relative space-y-6"
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <p
            className="text-lg text-gray-600 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            <span className="font-semibold text-[#27AAE1]">ByteSynq</span> is a
            forward-thinking software development studio delivering next-generation
            digital products. From{' '}
            <span className="text-[#27AAE1] font-medium">custom web solutions</span> to{' '}
            <span className="text-[#27AAE1] font-medium">mobile applications</span>, we
            combine innovation, scalability, and performance to empower our clients’
            growth.
          </p>

          <p
            className="text-lg text-gray-600 leading-relaxed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Our passionate team blends cutting-edge technologies with human-centered
            design principles, ensuring your digital presence is impactful, seamless, and
            future-ready. At{' '}
            <span className="font-semibold text-[#27AAE1]">ByteSynq</span>, we don’t just
            build — we <span className="text-[#27AAE1] font-medium">transform ideas</span>{' '}
            into timeless digital experiences.
          </p>

          {/* Right Image */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5 }}
            className="mt-6 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl"
          >
            <Image
              src={aboutImg} // ✅ using the imported image file
              alt="About ByteSynq"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

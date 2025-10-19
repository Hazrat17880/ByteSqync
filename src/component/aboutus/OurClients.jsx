'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const clientLogos = [
  '/client.jpg',
 '/client.jpg',
   '/client.jpg',
 '/client.jpg',
  '/client.jpg',
   '/client.jpg',
    '/client.jpg',
     '/client.jpg',
      '/client.jpg',
       '/client.jpg',
        '/client.jpg',
];

export default function OurClients() {
  const scrollRef = useRef(null);
 const clientImages =[
    "1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png"
  ]
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollInterval;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer) {
          scrollContainer.scrollLeft += 1;
        }
      }, 20); // Speed of auto-scroll
    };

    const stopAutoScroll = () => clearInterval(scrollInterval);

    if (scrollContainer) {
      scrollContainer.addEventListener('mouseenter', stopAutoScroll);
      scrollContainer.addEventListener('mouseleave', startAutoScroll);
      startAutoScroll();
    }

    return () => {
      stopAutoScroll();
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', stopAutoScroll);
        scrollContainer.removeEventListener('mouseleave', startAutoScroll);
      }
    };
  }, []);

  return (
    <section className="py-16 bg-gray-100 text-white flex justify-center items-center">
    
        <div className="relative  max-w-4xl px-4 overflow-hidden">
          {/* Left and right white gradient overlays */}
          {/* <div className="pointer-events-none absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-white dark:from-gray-950 to-transparent z-10" />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white dark:from-gray-950 to-transparent z-10" />
     */}
          {/* Scrolling logos */}
          <div className="max-w-7xl mx-auto overflow-hidden">
            <motion.div
              className="flex md:gap-10 gap-2 w-max"
              animate={{
                x: ['0%', '-50%'],
              }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: 'linear',
              }}
            >
              {[...clientImages, ...clientImages].map((src, index) => (
                <div
                  key={index}
                  className="md:w-30 md:h-18 w-20 h-12 flex items-center justify-center"
                >
                  <Image
                    src={`/images/clients/${src}`}
                    alt={`Client ${index + 1}`}
                    width={144}
                    height={64}
                    className="rounded-full object-contain h-full w-auto grayscale hover:grayscale-0 transition duration-300"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
    </section>
  );
}

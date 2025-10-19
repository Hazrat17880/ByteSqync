'use client';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const ROTATION_INTERVAL = 6000;
const IMAGE_TRANSITION_DURATION = 0.8;

const images = [
  { src: '/images/teamwork.JPG', title: 'Team Working Spaces', description: 'Designed for collaboration with flexible seating and brainstorming areas.', category: 'team' },
  { src: '/images/office.JPG', title: 'Academic Office', description: 'Administrative spaces for student enrollment, records management, and academic services.', category: 'academic-office' },
  { src: '/images/trining.jpg', title: 'Classroom Environment', description: 'Interactive learning spaces with comfortable seating and presentation equipment.', category: 'classroom' },
  { src: '/images/meeting.jpg', title: 'Meeting Room', description: 'Professional meeting spaces with video conferencing and presentation tools.', category: 'meeting' },
  { src: '/images/office2.jpg', title: 'Services Office', description: 'Functional workspace designed for client services and consultations.', category: 'services' },
  { src: '/images/studio.JPG', title: 'Creative Studio', description: 'Dedicated space for creative work with specialized equipment and lighting.', category: 'studio' },
];

const categories = {
  team: {
    title: 'Team Working Spaces',
    color: 'from-blue-500/20 to-cyan-500/20',
    features: ['Flexible seating', 'Whiteboards', 'Video conferencing', 'Brainstorming areas'],
    usage: 'Perfect for group projects, discussions, and collaborative innovation.',
  },
  'academic-office': {
    title: 'Academic Office',
    color: 'from-green-500/20 to-teal-500/20',
    features: ['Student records', 'Document verification', 'Admissions', 'Fee management'],
    usage: 'Ideal for academic management, student support, and documentation.',
  },
  classroom: {
    title: 'Classroom Environments',
    color: 'from-emerald-500/20 to-lime-500/20',
    features: ['Comfortable seating', 'Projection system', 'Smart board', 'Storage space'],
    usage: 'Optimized for teaching, student engagement, and interactive learning.',
  },
  meeting: {
    title: 'Meeting Rooms',
    color: 'from-indigo-500/20 to-blue-500/20',
    features: ['Conference table', 'Sound system', 'Video conferencing', 'Presentation tools'],
    usage: 'Great for corporate meetings, client discussions, and brainstorming.',
  },
  services: {
    title: 'Services Office',
    color: 'from-orange-400/20 to-amber-400/20',
    features: ['Client area', 'Service counter', 'Storage', 'Waiting space'],
    usage: 'Used for service consultations, administrative operations, and customer handling.',
  },
  studio: {
    title: 'Creative Studio',
    color: 'from-purple-500/20 to-pink-500/20',
    features: ['Lighting setup', 'Creative tools', 'Audio recording', 'Design workspace'],
    usage: 'Best suited for media production, content creation, and design projects.',
  },
};

export default function PremiumWorkspaceGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = useMemo(() => categories[images[activeIndex].category], [activeIndex]);

  useEffect(() => {
    const interval = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % images.length),
      ROTATION_INTERVAL
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-gray-100 via-white to-gray-200 py-20 px-6 md:px-16">
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-20 w-80 h-80 bg-purple-400 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-6xl font-semibold text-[#1f4668] tracking-tight"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            Future Workspace <span className="text-[#27AAE1]">Environments</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Immersive environments crafted for creativity, innovation, and teamwork.
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Image Showcase */}
          <div className="relative lg:col-span-2 h-[500px] rounded-3xl overflow-hidden shadow-2xl group">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: IMAGE_TRANSITION_DURATION }}
                className="absolute inset-0"
              >
                <Image
                  src={images[activeIndex].src}
                  alt={images[activeIndex].title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white backdrop-blur-sm">
                  <h3 className="text-2xl font-semibold">{images[activeIndex].title}</h3>
                  <p className="text-gray-200">{images[activeIndex].description}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <button
              onClick={() => setActiveIndex((prev) => (prev - 1 + images.length) % images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full backdrop-blur-md"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => setActiveIndex((prev) => (prev + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full backdrop-blur-md"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Info Panel */}
          <motion.div
            key={activeCategory.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`rounded-3xl p-8 border bg-gradient-to-br ${activeCategory.color} backdrop-blur-lg shadow-2xl`}
          >
            <h3 className="text-2xl font-semibold text-[#1f4668] mb-4">{activeCategory.title}</h3>
            <h4 className="font-semibold text-gray-700 mb-2">Key Features</h4>
            <ul className="space-y-2 mb-6">
              {activeCategory.features.map((f, i) => (
                <li key={i} className="flex items-center text-gray-800">
                  <span className="inline-block w-2 h-2 bg-[#27AAE1] rounded-full mr-3"></span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="border-t border-white/30 pt-4">
              <h5 className="text-sm uppercase font-medium text-gray-600 mb-2 tracking-wide">
                Optimal Usage
              </h5>
              <p className="text-gray-800 leading-relaxed">{activeCategory.usage}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

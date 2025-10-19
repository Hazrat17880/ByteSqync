'use client';
import React, { useState, useEffect, useRef, useMemo } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const ROTATION_INTERVAL = 6000;
const IMAGE_TRANSITION_DURATION = 0.8;

const images = [
  {
    src: '/images/teamwork.JPG',
    title: 'Team Working Spaces',
    description: 'Designed for collaboration with flexible seating and brainstorming areas.',
    category: 'team',
  },
{
    src: '/images/office.JPG',
    title: 'Academic Office',
    description: 'Administrative spaces for student enrollment, records management, and academic services.',
    category: 'academic-office',
  },
  {
    src: '/images/trining.jpg',
    title: 'Classroom Environment',
    description: 'Interactive learning spaces with comfortable seating and presentation equipment.',
    category: 'classroom',
  },
  {
    src: '/images/meeting.jpg',
    title: 'Meeting Room',
    description: 'Professional meeting spaces with video conferencing and presentation tools.',
    category: 'meeting',
  },
  {
    src: '/images/office2.jpg',
    title: 'Services Office',
    description: 'Functional workspace designed for client services and consultations.',
    category: 'services',
  },
  {
    src: '/images/studio.JPG',
    title: 'Creative Studio',
    description: 'Dedicated space for creative work with specialized equipment and lighting.',
    category: 'studio',
  },
];

const categories = [
  {
    id: 'team',
    title: 'Team Working Spaces',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    features: ['Flexible seating', 'Whiteboards', 'Video conferencing', 'Brainstorming areas'],
    color: 'from-blue-500/20 to-cyan-500/20',
    optimalUsage: 'Team meetings, collaborative projects, group brainstorming sessions',
  },
  {
    id: 'academy',
    title: 'Academy & Training',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v6l-9-5m9 5l9-5m-9 5v-6m9 5l-9-5m0 0l-9 5" />
      </svg>
    ),
    features: ['Interactive displays', 'Comfortable seating', 'Audio systems', 'Presentation equipment'],
    color: 'from-purple-500/20 to-pink-500/20',
    optimalUsage: 'Training sessions, workshops, educational programs, skill development',
  },
  {
    id: 'academic-office',
    title: 'Academic Office',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    features: [
      'Student admission processing', 
      'Fee payment systems', 
      'Document verification', 
      'Student records management',
      'Certificate issuance'
    ],
    color: 'from-teal-500/20 to-green-500/20',
    optimalUsage: 'Student enrollment, fee collection, academic administration, record keeping, student services',
  },
  {
    id: 'classroom',
    title: 'Classroom Environments',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    features: ['Student desks', 'Teacher station', 'Projection system', 'Learning materials storage'],
    color: 'from-green-500/20 to-emerald-500/20',
    optimalUsage: 'Educational instruction, group learning, lectures, student activities',
  },
  {
    id: 'meeting',
    title: 'Meeting Rooms',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    ),
    features: ['Conference table', 'Video conferencing', 'Presentation screen', 'Sound system'],
    color: 'from-indigo-500/20 to-blue-500/20',
    optimalUsage: 'Business meetings, client presentations, decision-making sessions, negotiations',
  },
  {
    id: 'services',
    title: 'Services Office',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    features: ['Client meeting area', 'Service counter', 'Document storage', 'Waiting area'],
    color: 'from-amber-500/20 to-orange-500/20',
    optimalUsage: 'Client consultations, service delivery, customer support, administrative tasks',
  },
  {
    id: 'studio',
    title: 'Creative Studio',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    features: ['Specialized lighting', 'Acoustic treatment', 'Equipment storage', 'Creative tools'],
    color: 'from-violet-500/20 to-purple-500/20',
    optimalUsage: 'Content creation, photography, video production, audio recording, design work',
  },
];

const PremiumWorkspaceGallery = () => {
  const [activeImage, setActiveImage] = useState(0);
  const containerRef = useRef(null);

  const activeCategory = useMemo(() => {
    const currentImage = images[activeImage];
    return categories.find((cat) => cat.id === currentImage.category) || categories[0];
  }, [activeImage]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div ref={containerRef} className="relative w-full md:min-h-screen h-fit py-16 px-4 bg-gray-100 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
        <div className="items-start">
          <div className='mt-2 md:pb-15 pb-5'>
            <motion.h2
              className="text-3xl md:text-5xl text-[#1f4668] tracking-wider lowercase"
              style={{ fontFamily: 'virtual, sans-serif' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Future Workspace <br className='hidden md:block'/>  <span className="text-[#27AAE1]">Environments</span>
            </motion.h2>
            <p className="max-w-3xl text-xl text-gray-900">
              Immersive environments designed to inspire creativity, productivity, and collaboration
            </p>
          </div>
        </div>

        {/* Main gallery area */}
        <div className="grid grid-cols-1 gap-8  lg:grid-cols-3">
          {/* 3D Image showcase */}
          <div className="relative h-96 md:h-[500px] lg:col-span-2 rounded-2xl overflow-hidden group perspective-1000">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={activeImage}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: IMAGE_TRANSITION_DURATION, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={images[activeImage].src}
                  alt={images[activeImage].title}
                  fill
                  className="object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                />

                {/* Holographic grid overlay */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute inset-0 bg-grid-pattern bg-cover mix-blend-overlay"></div>
                </div>

                {/* Floating info panel */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-500 transform group-hover:-translate-y-2">
                  <div className="p-4 rounded-xl border border-white/10 bg-black/30 backdrop-blur-md">
                    <h3 className="mb-2 text-2xl font-bold">{images[activeImage].title}</h3>
                    <p className="text-gray-200">{images[activeImage].description}</p>
                  </div>
                </div>

                {/* Floating indicator */}
                <div className="absolute top-4 right-4 px-3 py-1 text-sm font-medium text-white rounded-full border border-white/10 bg-black/50 backdrop-blur-md">
                  {activeImage + 1} / {images.length}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <button
              onClick={() => setActiveImage((prev) => (prev - 1 + images.length) % images.length)}
              className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white rounded-full border border-white/10 bg-black/50 backdrop-blur-md transition-all hover:bg-black/70 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={() => setActiveImage((prev) => (prev + 1) % images.length)}
              className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white rounded-full border border-white/10 bg-black/50 backdrop-blur-md transition-all hover:bg-black/70 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Holographic info panel */}
          <div className="hidden md:block h-full rounded-2xl p-6 shadow-2xl backdrop-blur-md border border-white/10 transform transition-all duration-500 hover:-translate-y-2 bg-[#1f4668]">
            <div className="flex items-center mb-6">
              <div className={`p-3 mr-4 rounded-lg text-white backdrop-blur-md bg-primary `}>
                {activeCategory.icon}
              </div>
              <h2 className="text-2xl font-bold text-white">{activeCategory.title}</h2>
            </div>

            <div className="mb-6">
              <h3 className="mb-3 text-lg font-semibold text-gray-300">Premium Features</h3>
              <ul className="space-y-3">
                {activeCategory.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-200">
                    <div className="flex items-center justify-center w-6 h-6 p-1 mr-3 rounded-full bg-primary">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Glass-like Optimal Usage section */}
            <div className="p-4 rounded-lg border border-white/20 bg-white/10 backdrop-blur-lg shadow-lg">
              <h4 className="mb-2 font-semibold text-white">Optimal Usage</h4>
              <p className="text-sm text-cyan-100">{activeCategory.optimalUsage}</p>
            </div>
          </div>
        </div>

      
      </div>
    </div>
  );
};

export default PremiumWorkspaceGallery;
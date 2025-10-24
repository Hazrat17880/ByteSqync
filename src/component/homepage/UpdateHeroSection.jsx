'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ITGenesisHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      title: "Web Development",
      description: "Our web developers are like computers that perform all the functions of a website. Web Developer profile is that of a technician or engineer who can analyze customer needs recorded earlier in specifications by the project manager. It recommends and implements a technical solution to design customized sites or adapt existing technical solutions.",
      background: "linear-gradient(50deg, rgba(0,122,221,1) 0%, rgba(11,47,82,1) 100%)",
      image: "/images/hero/web.png",
      imagePosition: "right",
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "AWS"]
    },
    {
      id: 2,
      title: "Android & IOS Development",
      description: "If you need an app for your business, we are here to make things ready for you. We are able to create apps that are well designed and user-friendly. We are working in latest technologies of mobile apps development like Flutter, React Native, Swift, and Kotlin which are perfect for both Android and IOS platforms.",
      background: "linear-gradient(50deg, rgba(0,158,226,1) 0%, rgba(11,47,82,1) 100%)",
      image: "/images/hero/mobile.png",
      imagePosition: "left",
      technologies: ["Flutter", "React Native", "Swift", "Kotlin", "Firebase"]
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "At IT Genesis, we create intuitive and engaging user experiences that drive conversion and user satisfaction. Our design team specializes in creating beautiful, functional interfaces that align with your brand identity while ensuring seamless user journeys across all platforms and devices.",
      background: "linear-gradient(50deg, rgba(141,115,221,1) 0%, rgba(11,47,82,1) 100%)",
      image: "/images/hero/ui.png",
      imagePosition: "right",
      technologies: ["Figma", "Adobe XD", "Sketch", "Prototyping", "User Research"]
    },
    {
      id: 4,
      title: "Software Testing",
      description: "Ensure your software performs flawlessly with our comprehensive testing services. We provide rigorous quality assurance, automated testing, and performance testing to deliver bug-free, reliable applications. Our testing methodologies cover functional, security, and usability testing across all platforms.",
      background: "linear-gradient(50deg, rgba(221,115,115,1) 0%, rgba(11,47,82,1) 100%)",
      image: "/images/hero/testin-pica.png",
      imagePosition: "left",
      technologies: ["Selenium", "Jest", "Cypress", "QA Automation", "Performance Testing"]
    },
    {
      id: 5,
      title: "Software Development",
      description: "At IT Genesis we transform your business needs into world class software solutions by leveraging the perfect tools and techniques with agility. From strategy to implementation to quality assurance to post production we support your entire journey.",
      background: "linear-gradient(50deg, rgba(115,221,141,1) 0%, rgba(11,47,82,1) 100%)",
      image: "/images/hero/software.jpg",
      imagePosition: "right",
      technologies: ["Python", "Java", "C#", "DevOps", "Cloud Solutions"]
    }
  ];

  // Auto slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Slider Container */}
      <div className="relative h-screen w-full">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => (
            index === currentSlide && (
              <motion.div
                key={slide.id}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0, x: index > currentSlide ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: index < currentSlide ? -100 : 100 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{ background: slide.background }}
              >
                {/* Content Container */}
                <div className="container mx-auto px-6 h-full flex items-center">
                  <div className={`flex flex-col lg:flex-row items-center justify-between w-full gap-12 ${
                    slide.imagePosition === 'left' ? 'lg:flex-row-reverse' : ''
                  }`}>
                    
                    {/* Text Content */}
                    <motion.div
                      className="lg:w-1/2 text-white"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      {/* <motion.h6
                        className="text-xs uppercase tracking-widest mb-4 font-light opacity-90"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                      >
                        Professional Services
                      </motion.h6> */}
                      
                      <motion.h1
                        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-snug"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        {slide.title}
                      </motion.h1>
                      
                      <motion.p
                        className="text-sm md:text-base lg:text-lg leading-relaxed mb-8 opacity-90 max-w-2xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        {slide.description}
                      </motion.p>

                      {/* Technologies Stack */}
                      <motion.div
                        className="mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                      >
                        <div className="flex flex-wrap gap-2">
                          {slide.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs border border-white/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                      
                      <motion.div
                        className="flex gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                      >
                        {/* <button className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 text-sm">
                          Get Started
                        </button>
                        <button className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors duration-300 text-sm">
                          Learn More
                        </button> */}
                      </motion.div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                      className="lg:w-1/2 flex justify-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                    >
                      <div className="relative">
                        <motion.img
                          src={slide.image}
                          alt={slide.title}
                          className="max-w-full h-auto max-h-80 object-contain"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                        {/* Subtle glow effect */}
                        <div className="absolute inset-0 bg-blue-400/20 blur-3xl -z-10 scale-110 rounded-full"></div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 z-10"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-300 z-10"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-110' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        {/* <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/20 z-10">
          <motion.div
            className="h-full bg-white"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, ease: "linear" }}
            key={currentSlide}
            onAnimationComplete={() => {
              if (isAutoPlaying) {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
              }
            }}
          />
        </div> */}
      </div>

      {/* Services Quick Overview */}
      {/* <div className="bg-white py-12 border-b">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Our Core Services
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital solutions to transform your business and drive growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "💻",
                title: "Web Development",
                description: "Custom web applications and responsive websites built with modern technologies"
              },
              {
                icon: "📱",
                title: "Android & IOS Apps",
                description: "Cross-platform and native mobile applications for both Android and iOS"
              },
              {
                icon: "🎨",
                title: "UI/UX Design",
                description: "User-centered design solutions that enhance engagement and conversion"
              },
              {
                icon: "🔍",
                title: "Software Testing",
                description: "Comprehensive QA and testing services to ensure flawless performance"
              },
              {
                icon: "⚙️",
                title: "Software Development",
                description: "End-to-end custom software solutions for your business needs"
              },
              {
                icon: "🚀",
                title: "Digital Transformation",
                description: "Strategic consulting to modernize and optimize your digital presence"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 rounded-lg p-5 text-center hover:shadow-md transition-all duration-300 border border-gray-200"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Trust Indicators Section */}
      {/* <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">16+</h3>
              <p className="text-xs text-gray-600 font-medium uppercase tracking-wide">Employee</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group cursor-pointer"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">300+</h3>
              <p className="text-xs text-gray-600 font-medium uppercase tracking-wide">Happy Clients</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group cursor-pointer"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">500+</h3>
              <p className="text-xs text-gray-600 font-medium uppercase tracking-wide">Work Done</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group cursor-pointer"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">10+</h3>
              <p className="text-xs text-gray-600 font-medium uppercase tracking-wide">Country Served</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group cursor-pointer"
            >
              <div className="w-12 h-12 mx-auto mb-3 bg-yellow-100 rounded-full flex items-center justify-center group-hover:bg-yellow-200 transition-colors duration-300">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">50+</h3>
              <p className="text-xs text-gray-600 font-medium uppercase tracking-wide">International Clients</p>
            </motion.div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default ITGenesisHero;
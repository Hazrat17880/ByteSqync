"use client"
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Users, Eye, Rocket, Sparkles, Zap, ArrowRight } from 'lucide-react';

const VisionMissionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCard, setActiveCard] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1 + 0.4,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gray-100">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-indigo-100/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl text-primary lowercase tracking-wider"
            style={{fontFamily:'virtual'}}
          >
            Our Guiding <span className='text-secondary'>
              Principles
            </span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-lg leading-relaxed text-gray-600"
          >
           Innovation and technology form the foundation of everything we do
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision Card */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ y: -8 }}
            onMouseEnter={() => setActiveCard('vision')}
            onMouseLeave={() => setActiveCard(null)}
            className="relative group"
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl h-full transition-all duration-500 group-hover:shadow-2xl overflow-hidden border border-white relative">
              {/* Premium accent elements */}
              <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
              
              {/* Floating icon background */}
              <div className="absolute -right-6 -top-6 opacity-5">
                <Target className="h-40 w-40 text-blue-500" />
              </div>
              
              {/* Animated highlight on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50/0 via-blue-100/30 to-blue-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="flex items-center mb-6 relative z-10">
                <div className="p-3 bg-primary rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl text-primary " style={{fontFamily:'virtual'}}>Our Vision</h3>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">
               To empower brands through cutting-edge web and Android applications, transforming ideas into intelligent digital experiences that drive growth and long-term success.
              </p>
              
              <div className="flex items-center justify-between relative z-10">
                {/* <div className="flex items-center text-white font-medium bg-primary px-4 py-2 rounded-full">
                  <Eye className="h-5 w-5 mr-2" />
                  <span>Future Focused</span>
                </div> */}
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ x: 5 }}
                  className="opacity-70 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-sm text-blue-600"
                >
                  <Sparkles className="h-4 w-4 mr-1" />
                  <span>Innovate</span>
                </motion.div>
              </div>
              
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiMxZjQ2NjgiIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvc3ZnPg==')]"></div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ y: -8 }}
            onMouseEnter={() => setActiveCard('mission')}
            onMouseLeave={() => setActiveCard(null)}
            className="relative group"
          >
            <div className="bg-white p-8 rounded-2xl shadow-xl h-full transition-all duration-500 group-hover:shadow-2xl overflow-hidden border border-white relative">
              {/* Premium accent elements */}
              <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
              
              {/* Floating icon background */}
              <div className="absolute -right-6 -top-6 opacity-5">
                <Users className="h-40 w-40 text-indigo-500" />
              </div>
              
              {/* Animated highlight on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/0 via-indigo-100/30 to-indigo-50/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="flex items-center mb-6 relative z-10">
                <div className="p-3 bg-primary rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl text-primary " style={{fontFamily:'virtual'}}>Our Mission</h3>
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-6 relative z-10">
                To deliver cutting-edge software, web, and Android solutions that empower businesses to grow, innovate, and stand out through technology and creative strategy.
              </p>
              
              <div className="flex items-center justify-between relative z-10">
                {/* <div className="flex items-center text-white font-medium bg-primary px-4 py-2 rounded-full">
                  <Rocket className="h-5 w-5 mr-2" />
                  <span>Results Driven</span>
                </div> */}
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ x: 5 }}
                  className="opacity-70 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-sm text-indigo-600"
                >
                  <Zap className="h-4 w-4 mr-1" />
                  <span>Execute</span>
                </motion.div>
              </div>
              
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiMxZjQ2NjgiIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvc3ZnPg==')]"></div>
            </div>
          </motion.div>
        </div>

     
      </div>
    </section>
  );
};

export default VisionMissionSection;
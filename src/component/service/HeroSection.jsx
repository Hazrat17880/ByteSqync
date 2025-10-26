"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Settings, 
  Palette, 
  Sparkles, 
  TrendingUp, 
  Network, 
  GraduationCap,
  ArrowRight,
  CheckCircle,
  Play,
  Target,
  Zap,
  Users,
  Shield,
  Clock
} from 'lucide-react';

const HeroSectionServices = () => {
  const primaryColor = "#0A66C2"; // Professional blue
  const secondaryColor = "#00BFA6"; // Professional teal
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const serviceHighlights = [
    {
      title: "Web Development",
      icon: Code,
      stats: "200+ Projects",
      description: "Scalable web applications"
    },
    {
      title: "Mobile Apps",
      icon: Smartphone,
      stats: "50+ Launched",
      description: "Native & cross-platform"
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      stats: "150+ Designs",
      description: "User-centered interfaces"
    },
    {
      title: "Digital Marketing",
      icon: TrendingUp,
      stats: "300% Avg Growth",
      description: "Data-driven strategies"
    }
  ];

  const trustMetrics = [
    { icon: Users, value: "100+", label: "Clients Worldwide" },
    { icon: Shield, value: "98%", label: "Client Retention" },
    { icon: Clock, value: "24/7", label: "Support Available" },
    { icon: Target, value: "150+", label: "Projects Delivered" }
  ];

  const { scrollY } = useScroll();
  const textScale = useTransform(scrollY, [0, 300], [1, 0.95]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative min-h-screen pt-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
    >
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 80%, ${primaryColor}15 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, ${secondaryColor}15 0%, transparent 50%),
              linear-gradient(45deg, transparent 48%, ${primaryColor}05 50%, transparent 52%)
            `,
            backgroundSize: '800px 800px, 600px 600px, 100px 100px'
          }}
        />
      </div>

      {/* Geometric Grid Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, ${primaryColor}20 1px, transparent 1px),
              linear-gradient(to bottom, ${primaryColor}20 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: `${primaryColor}08` }}
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl"
          style={{ backgroundColor: `${secondaryColor}08` }}
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 5
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/5 rounded-full backdrop-blur-sm border border-white/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 20 + 8}px`,
              height: `${Math.random() * 20 + 8}px`,
            }}
            animate={{
              y: [0, -60, 0],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 15 + Math.random() * 15,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <main className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl min-h-screen flex items-center">
        <motion.div 
          style={{ scale: textScale, opacity }}
          className="relative w-full py-20"
        >
          {/* Header Section */}
          <div className="text-center mb-20">
          

            <motion.h1 
              className="text-3xl md:text-4xl font-bold mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="block text-white">Professional</span>
              <span 
                className="block bg-clip-text text-transparent"
                style={{ 
                  backgroundImage: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` 
                }}
              >
                Digital Excellence
              </span>
              <span className="block text-white">For Your Business</span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We deliver enterprise-grade digital solutions that drive measurable results, 
              enhance user experiences, and accelerate business growth through innovative technology.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 text-white font-semibold rounded-2xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3 shadow-lg"
                style={{ 
                  background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` 
                }}
              >
                Start Your Project
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 border border-white/30 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center gap-3 backdrop-blur-sm"
              >
                <Play className="w-5 h-5" />
                View Case Studies
              </motion.button>
            </motion.div>
          </div>

          {/* Service Highlights */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {serviceHighlights.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-secondary/50 transition-all duration-500"
                >
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
                    style={{ 
                      background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` 
                    }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  {/* Content */}
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-secondary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">{service.description}</p>
                  <p 
                    className="text-lg font-bold"
                    style={{ color: secondaryColor }}
                  >
                    {service.stats}
                  </p>
                  
                  {/* Hover Glow Effect */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"
                    style={{ 
                      background: `radial-gradient(circle at center, ${secondaryColor}08, transparent 70%)` 
                    }}
                  />
                </motion.div>
              );
            })}
          </motion.div>

          {/* Trust Metrics */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {trustMetrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                        <Icon 
                          className="w-6 h-6" 
                          style={{ color: secondaryColor }} 
                        />
                      </div>
                    </div>
                    <div 
                      className="text-2xl font-bold mb-1"
                      style={{ color: primaryColor }}
                    >
                      {metric.value}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {metric.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
         
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default HeroSectionServices;
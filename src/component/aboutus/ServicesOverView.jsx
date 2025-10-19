"use client"
import { BookOpen, Briefcase, Palette, ChevronRight, ArrowRight} from 'lucide-react';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Services Overview Section Component
const ServicesOverviewSection = () => {
  const [activeService, setActiveService] = useState('creative');
  const [hoveredItem, setHoveredItem] = useState(null);

  // Service data organized for better maintainability
  const services = {
    creative: {
      icon: Palette,
      title: "Pixi Creative Services",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-r from-blue-500 to-cyan-500",
      items: [
        { 
          title: "Branding", 
          desc: "Crafting distinct and memorable brand identities",
          icon: "🎨"
        },
        { 
          title: "Graphic Design & Motion Graphics", 
          desc: "Creating visually compelling designs and animations",
          icon: "✏️"
        },
        { 
          title: "Website Design & Development", 
          desc: "Building responsive, user-friendly websites",
          icon: "🌐"
        },
        { 
          title: "Company Profile Design", 
          desc: "Designing professional, impactful company profiles",
          icon: "📊"
        },
        { 
          title: "Interior & Exterior Design", 
          desc: "Bespoke design solutions for spaces",
          icon: "🏢"
        },
      ]
    },
    consulting: {
      icon: Briefcase,
      title: "Pixi Business Consulting",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-r from-purple-500 to-pink-500",
      items: [
        { 
          title: "Proposal Writing", 
          desc: "Crafting professional, compelling proposals",
          icon: "📝"
        },
        { 
          title: "Business Plan Development", 
          desc: "Developing strategic business plans",
          icon: "📈"
        },
        { 
          title: "Digital Marketing (SEO, SEM & PPC)", 
          desc: "Data-driven strategies for traffic and conversions",
          icon: "🔍"
        },
        { 
          title: "Social Media Marketing", 
          desc: "Managing social media presence with engaging content",
          icon: "💬"
        },
      ]
    },
    academic: {
      icon: BookOpen,
      title: "Pixi Academy",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-gradient-to-r from-amber-500 to-orange-500",
      description: "Nurturing the next generation of digital creators with hands-on, project-based training.",
      items: [
        "Graphic Design",
        "Motion Graphics",
        "Freelancing",
        "Web Development",
        "3D Modeling & Visual Architecture"
      ]
    }
  };

  const ServiceButton = ({ serviceKey, children }) => {
    const isActive = activeService === serviceKey;
    const serviceData = services[serviceKey];
    
    return (
      <motion.button 
        onClick={() => setActiveService(serviceKey)}
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.98 }}
        className={`relative px-8 py-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center overflow-hidden group ${
          isActive 
            ? 'text-white shadow-lg bg-secondary' 
            : 'bg-primary text-white hover:bg-secondary shadow-md'
        }`}
       
      >
        
       
        
        <span className="relative z-10 flex items-center">
         
          {children}
        </span>
        
        {/* Bottom border indicator for active state */}
        {isActive && (
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-1 bg-white"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </motion.button>
    );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };


};

export default ServicesOverviewSection;
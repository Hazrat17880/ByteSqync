"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Palette, 
  FileText, 
  TrendingUp, 
  Globe, 
  Video, 
  Users, 
  BarChart3, 
  ClipboardList, 
  Briefcase, 
  BookOpen,
  Code,
  Smartphone,
  Database,
  Film,
  Edit3,
  ChevronRight,
  CheckCircle,
  X,
  ArrowRight,
  Filter,
  ChevronDown
} from 'lucide-react';

const ServicesOverviewGrid = () => {
  const [activeService, setActiveService] = useState(null);
  const [activeCategory, setActiveCategory] = useState("creative");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef(null);

  const services = [
    // Creative Services
    {
      id: 1,
      title: "Branding & Visual Identity",
      description: "Complete brand systems from logos to full brand guidelines for clarity and consistency",
      icon: <Palette className="w-8 h-8" />,
      features: ["Logo Design", "Brand Guidelines", "Stationery Design", "Visual Identity Systems"],
      category: "creative",
      details: "Our branding service creates cohesive visual identities that communicate your values and resonate with your audience across all touchpoints."
    },
    {
      id: 2,
      title: "Company Profile Design",
      description: "Profiles that tell your story and meet procurement, donor, or investor requirements",
      icon: <FileText className="w-8 h-8" />,
      features: ["Donor-Compliant Design", "Investor Presentations", "Procurement Documents", "Storytelling Design"],
      category: "creative",
      details: "We craft compelling company profiles that showcase your organization's strengths and meet the specific requirements of donors, investors, and procurement processes."
    },
    {
      id: 3,
      title: "Digital Marketing",
      description: "Social media, SEO, and paid campaigns focused on visibility that delivers results",
      icon: <TrendingUp className="w-8 h-8" />,
      features: ["Social Media Management", "SEO Optimization", "Paid Campaigns", "Performance Analytics"],
      category: "creative",
      details: "Our digital marketing strategies combine creativity with data-driven approaches to increase your online presence and drive meaningful engagement."
    },
    {
      id: 4,
      title: "Web Design & Development",
      description: "Responsive, secure websites that follow international accessibility standards",
      icon: <Globe className="w-8 h-8" />,
      features: ["Responsive Design", "CMS Integration", "E-commerce Solutions", "Mobile Optimization"],
      category: "creative",
      details: "We build modern, accessible websites that provide exceptional user experiences while meeting the highest standards of security and performance."
    },
    {
      id: 5,
      title: "Multimedia & Motion Graphics",
      description: "Animated and visual content from explainer videos to awareness campaigns",
      icon: <Video className="w-8 h-8" />,
      features: ["Explainer Videos", "Animation", "Awareness Campaigns", "Script-to-Screen Production"],
      category: "creative",
      details: "Our multimedia team creates engaging visual content that simplifies complex ideas and captures audience attention across platforms."
    },
    {
      id: 6,
      title: "Management Consulting",
      description: "Building better organizational structures, workflows, and operational procedures",
      icon: <Users className="w-8 h-8" />,
      features: ["HR Policies", "Operational Procedures", "Workflow Optimization", "Organizational Structure"],
      category: "creative",
      details: "We help organizations optimize their structures and processes to improve efficiency, employee satisfaction, and overall performance."
    },
    
    // Education Services
    {
      id: 7,
      title: "Web Development Course",
      description: "Comprehensive training in modern web development technologies and frameworks",
      icon: <Code className="w-8 h-8" />,
      features: ["HTML/CSS/JavaScript", "React.js", "Node.js", "Full-Stack Development"],
      category: "education",
      details: "Our web development course covers both frontend and backend technologies, preparing students for careers in modern web development with hands-on projects."
    },
    {
      id: 8,
      title: "Mobile Application Development",
      description: "Learn to build native and cross-platform mobile applications for iOS and Android",
      icon: <Smartphone className="w-8 h-8" />,
      features: ["React Native", "Flutter", "iOS Development", "Android Development"],
      category: "education",
      details: "Master mobile app development with our comprehensive course that covers both native and cross-platform approaches to build applications for all major platforms."
    },
    {
      id: 9,
      title: "Photoshop & Graphic Design",
      description: "Professional training in Adobe Photoshop and graphic design principles",
      icon: <Edit3 className="w-8 h-8" />,
      features: ["Photo Editing", "Digital Painting", "UI Design", "Print Design"],
      category: "education",
      details: "Learn industry-standard Photoshop techniques and graphic design principles to create stunning visual content for both digital and print media."
    },
    {
      id: 10,
      title: "MySQL Database Course",
      description: "Master database design, implementation, and management with MySQL",
      icon: <Database className="w-8 h-8" />,
      features: ["Database Design", "SQL Queries", "Database Administration", "Performance Optimization"],
      category: "education",
      details: "Our MySQL course teaches you how to design, implement, and manage relational databases, with a focus on practical, real-world applications."
    },
    {
      id: 11,
      title: "Motion Graphics & Animation",
      description: "Create dynamic animations and motion graphics for various media platforms",
      icon: <Film className="w-8 h-8" />,
      features: ["After Effects", "2D Animation", "3D Animation", "Visual Effects"],
      category: "education",
      details: "Learn to create professional motion graphics and animations using industry-standard tools, with a focus on storytelling and visual communication."
    },
    {
      id: 12,
      title: "Video Editing Masterclass",
      description: "Professional video editing techniques for film, television, and online content",
      icon: <Video className="w-8 h-8" />,
      features: ["Premiere Pro", "Color Grading", "Audio Editing", "Export Optimization"],
      category: "education",
      details: "Master the art of video editing with our comprehensive course that covers everything from basic cuts to advanced techniques used by professionals."
    }
  ];

  const categories = [
    { id: "creative", name: "Creative Services", count: services.filter(s => s.category === "creative").length },
    { id: "education", name: "Education & Courses", count: services.filter(s => s.category === "education").length }
  ];

  const filteredServices = services.filter(service => service.category === activeCategory);

  const selectedService = services.find(service => service.id === activeService);

  // Close filter dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white relative">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mt-2 md:pb-15 pb-5">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-virtual lowercase text-primary tracking-wider"
          >
            Our <span className="text-secondary">Comprehensive</span> Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Professional creative services and comprehensive education programs to meet all your needs
          </motion.p>
        </div>

        {/* Category Filter - Desktop */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex flex-wrap justify-center gap-3 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:border-gray-300'
              }`}
            >
              <span className="text-sm">{category.name}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                activeCategory === category.id ? 'bg-white/20' : 'bg-gray-100'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Category Filter - Mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:hidden mb-6 relative z-40"
          ref={filterRef}
        >
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 flex items-center justify-between text-gray-700 hover:border-gray-300 transition-colors"
          >
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              <span className="font-medium">
                {categories.find(cat => cat.id === activeCategory)?.name}
              </span>
            </div>
            <ChevronDown className={`w-4 h-4 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-10 overflow-hidden"
              >
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => {
                      setActiveCategory(category.id);
                      setIsFilterOpen(false);
                    }}
                    className={`w-full px-4 py-3 text-left flex items-center justify-between transition-colors ${
                      activeCategory === category.id
                        ? 'bg-primary text-white'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-sm font-medium">{category.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      activeCategory === category.id ? 'bg-white/20' : 'bg-gray-100'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Services Count */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mb-8"
        >
          <p className="text-gray-600 text-sm">
            Showing {filteredServices.length} {activeCategory === "creative" ? "creative services" : "education courses"}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-300 group cursor-pointer relative overflow-hidden"
                onClick={() => setActiveService(service.id)}
              >
                {/* Background Decorative Element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-bl-full transition-all duration-300 group-hover:bg-blue-200"></div>
                
                {/* Icon */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="bg-primary p-3 rounded-xl text-white w-fit mb-4 group-hover:shadow-lg transition-all duration-300 relative z-10"
                >
                  {service.icon}
                </motion.div>
                
                {/* Title & Description */}
                <h3 className="text-xl font-semibold mb-3 relative z-10  text-primary">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 relative z-10 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-2 mb-6 relative z-10">
                  {service.features.slice(0, 3).map((feature, index) => (
                    <motion.li 
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      <span className="truncate">{feature}</span>
                    </motion.li>
                  ))}
                  {service.features.length > 3 && (
                    <li className="text-sm text-primary font-medium flex items-center">
                      <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      +{service.features.length - 3} more {activeCategory === "education" ? "topics" : "features"}
                    </li>
                  )}
                </ul>
                
                {/* CTA */}
                <div className="flex items-center text-primary font-medium group-hover:text-blue-800 transition-colors duration-300 relative z-10">
                  <span className="mr-2 text-sm">{activeCategory === "education" ? "Course details" : "Learn more"}</span>
                  <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Service Detail Modal */}
        <AnimatePresence>
          {activeService && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
              onClick={() => setActiveService(null)}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="bg-primary p-3 rounded-xl text-white">
                    {selectedService.icon}
                  </div>
                  <button 
                    onClick={() => setActiveService(null)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <h3 className="text-2xl text-primary font-virtual mb-2 lowercase">{selectedService.title}</h3>
                <p className="text-gray-600 mb-4 text-lg">{selectedService.description}</p>
                <p className="text-gray-700 mb-6 leading-relaxed">{selectedService.details}</p>
                
                <h4 className="font-virtual lowercase text-gray-900 mb-4">
                  {selectedService.category === "education" ? "Course Topics:" : "Key Features:"}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {selectedService.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center text-gray-700 bg-gray-50 rounded-lg p-3"
                    >
                      <CheckCircle className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-200">
                  <button className="bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors flex items-center justify-center">
                    {selectedService.category === "education" ? "Enroll Now" : "Start Project"} 
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                  <button 
                    onClick={() => setActiveService(null)}
                    className="border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ServicesOverviewGrid;
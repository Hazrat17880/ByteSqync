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
  Code,
  Smartphone,
  Database,
  Film,
  Edit3,
  ChevronRight,
  CheckCircle,
  X,
  ArrowRight,
  Clock,
  Award,
  Target,
  Pause,
  Play
} from 'lucide-react';

const ServicesOverviewGrid = () => {
  const primaryColor = "#0A66C2"; // Professional Blue
  const secondaryColor = "#00BFA6"; // Professional Teal
  const [activeService, setActiveService] = useState(null);
  const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
  const [currentScrollIndex, setCurrentScrollIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const autoScrollRef = useRef(null);

  const services = [
    // Creative Services
    {
      id: 1,
      title: "Branding & Visual Identity",
      description: "Complete brand systems from logos to full brand guidelines for clarity and consistency",
      icon: <Palette className="w-8 h-8" />,
      features: ["Logo Design", "Brand Guidelines", "Stationery Design", "Visual Identity Systems"],
      category: "creative",
      details: "Our branding service creates cohesive visual identities that communicate your values and resonate with your audience across all touchpoints. We deliver comprehensive brand systems that establish strong market presence and build lasting customer relationships.",
      duration: "2-4 weeks",
      deliverables: ["Logo Package", "Brand Guidelines", "Stationery Set", "Social Media Kit"]
    },
    {
      id: 2,
      title: "Company Profile Design",
      description: "Profiles that tell your story and meet procurement, donor, or investor requirements",
      icon: <FileText className="w-8 h-8" />,
      features: ["Donor-Compliant Design", "Investor Presentations", "Procurement Documents", "Storytelling Design"],
      category: "creative",
      details: "We craft compelling company profiles that showcase your organization's strengths and meet the specific requirements of donors, investors, and procurement processes. Our designs effectively communicate your value proposition and organizational capabilities.",
      duration: "1-3 weeks",
      deliverables: ["Company Profile PDF", "Investor Deck", "Print-ready Files", "Digital Version"]
    },
    {
      id: 3,
      title: "Digital Marketing",
      description: "Social media, SEO, and paid campaigns focused on visibility that delivers results",
      icon: <TrendingUp className="w-8 h-8" />,
      features: ["Social Media Management", "SEO Optimization", "Paid Campaigns", "Performance Analytics"],
      category: "creative",
      details: "Our digital marketing strategies combine creativity with data-driven approaches to increase your online presence and drive meaningful engagement. We focus on measurable results and ROI-driven campaigns that grow your business.",
      duration: "Ongoing",
      deliverables: ["Marketing Strategy", "Content Calendar", "Analytics Reports", "Campaign Performance"]
    },
    {
      id: 4,
      title: "Web Design & Development",
      description: "Responsive, secure websites that follow international accessibility standards",
      icon: <Globe className="w-8 h-8" />,
      features: ["Responsive Design", "CMS Integration", "E-commerce Solutions", "Mobile Optimization"],
      category: "creative",
      details: "We build modern, accessible websites that provide exceptional user experiences while meeting the highest standards of security and performance. Our development process ensures scalable, maintainable, and future-proof solutions.",
      duration: "4-8 weeks",
      deliverables: ["Fully Responsive Website", "CMS Integration", "SEO Setup", "Performance Optimization"]
    },
    {
      id: 5,
      title: "Multimedia & Motion Graphics",
      description: "Animated and visual content from explainer videos to awareness campaigns",
      icon: <Video className="w-8 h-8" />,
      features: ["Explainer Videos", "Animation", "Awareness Campaigns", "Script-to-Screen Production"],
      category: "creative",
      details: "Our multimedia team creates engaging visual content that simplifies complex ideas and captures audience attention across platforms. We specialize in storytelling through motion graphics and video production.",
      duration: "2-6 weeks",
      deliverables: ["Final Video Files", "Social Media Versions", "Storyboard", "Voiceover Script"]
    },
    {
      id: 6,
      title: "Management Consulting",
      description: "Building better organizational structures, workflows, and operational procedures",
      icon: <Users className="w-8 h-8" />,
      features: ["HR Policies", "Operational Procedures", "Workflow Optimization", "Organizational Structure"],
      category: "creative",
      details: "We help organizations optimize their structures and processes to improve efficiency, employee satisfaction, and overall performance. Our consulting services are tailored to your specific organizational needs.",
      duration: "4-12 weeks",
      deliverables: ["Process Documentation", "Policy Manuals", "Implementation Plan", "Training Materials"]
    },
    
    // Education Services
    {
      id: 7,
      title: "Web Development Course",
      description: "Comprehensive training in modern web development technologies and frameworks",
      icon: <Code className="w-8 h-8" />,
      features: ["HTML/CSS/JavaScript", "React.js", "Node.js", "Full-Stack Development"],
      category: "education",
      details: "Our web development course covers both frontend and backend technologies, preparing students for careers in modern web development with hands-on projects. Learn industry-relevant skills from experienced instructors.",
      duration: "12 weeks",
      level: "Beginner to Advanced",
      projects: "5 Real-world Projects"
    },
    {
      id: 8,
      title: "Mobile Application Development",
      description: "Learn to build native and cross-platform mobile applications for iOS and Android",
      icon: <Smartphone className="w-8 h-8" />,
      features: ["React Native", "Flutter", "iOS Development", "Android Development"],
      category: "education",
      details: "Master mobile app development with our comprehensive course that covers both native and cross-platform approaches to build applications for all major platforms. Gain practical experience with real mobile projects.",
      duration: "10 weeks",
      level: "Intermediate",
      projects: "4 Mobile Apps"
    },
    {
      id: 9,
      title: "Photoshop & Graphic Design",
      description: "Professional training in Adobe Photoshop and graphic design principles",
      icon: <Edit3 className="w-8 h-8" />,
      features: ["Photo Editing", "Digital Painting", "UI Design", "Print Design"],
      category: "education",
      details: "Learn industry-standard Photoshop techniques and graphic design principles to create stunning visual content for both digital and print media. Develop a professional portfolio during the course.",
      duration: "8 weeks",
      level: "Beginner to Pro",
      projects: "6 Design Projects"
    },
    {
      id: 10,
      title: "MySQL Database Course",
      description: "Master database design, implementation, and management with MySQL",
      icon: <Database className="w-8 h-8" />,
      features: ["Database Design", "SQL Queries", "Database Administration", "Performance Optimization"],
      category: "education",
      details: "Our MySQL course teaches you how to design, implement, and manage relational databases, with a focus on practical, real-world applications. Perfect for developers and database administrators.",
      duration: "6 weeks",
      level: "Beginner to Intermediate",
      projects: "3 Database Projects"
    },
    {
      id: 11,
      title: "Motion Graphics & Animation",
      description: "Create dynamic animations and motion graphics for various media platforms",
      icon: <Film className="w-8 h-8" />,
      features: ["After Effects", "2D Animation", "3D Animation", "Visual Effects"],
      category: "education",
      details: "Learn to create professional motion graphics and animations using industry-standard tools, with a focus on storytelling and visual communication. Build a compelling showreel of your work.",
      duration: "10 weeks",
      level: "Beginner to Advanced",
      projects: "5 Animation Projects"
    },
    {
      id: 12,
      title: "Video Editing Masterclass",
      description: "Professional video editing techniques for film, television, and online content",
      icon: <Video className="w-8 h-8" />,
      features: ["Premiere Pro", "Color Grading", "Audio Editing", "Export Optimization"],
      category: "education",
      details: "Master the art of video editing with our comprehensive course that covers everything from basic cuts to advanced techniques used by professionals. Work with real footage and build your editing portfolio.",
      duration: "8 weeks",
      level: "All Levels",
      projects: "4 Editing Projects"
    }
  ];

  const selectedService = services.find(service => service.id === activeService);

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoScrollPaused) return;

    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const cardWidth = 320; // Approximate card width including gap
    const totalCards = services.length;
    let currentIndex = currentScrollIndex;

    autoScrollRef.current = setInterval(() => {
      currentIndex = (currentIndex + 1) % totalCards;
      setCurrentScrollIndex(currentIndex);

      scrollContainer.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
      });

      // Reset to start when reaching the end
      if (currentIndex === totalCards - 1) {
        setTimeout(() => {
          setCurrentScrollIndex(0);
          scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
        }, 3000);
      }
    }, 3000); // Change card every 3 seconds

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isAutoScrollPaused, currentScrollIndex, services.length]);

  const toggleAutoScroll = () => {
    setIsAutoScrollPaused(!isAutoScrollPaused);
  };

  const scrollToIndex = (index) => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const cardWidth = 320;
      scrollContainer.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setCurrentScrollIndex(index);
    }
  };

  return (
    <div className="py-12 px-4 bg-white relative">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
         

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
          >
            Complete <span style={{ color: primaryColor }}>Digital</span>{" "}
            <span style={{ color: secondaryColor }}>Solutions</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Explore our comprehensive range of professional creative services and educational programs 
            designed to transform your business and accelerate your digital journey.
          </motion.p>
        </div>

        {/* Auto-scroll Controls */}
        

        {/* Single Row Services Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-8 gap-6 scrollbar-hide scroll-smooth snap-x snap-mandatory"
            style={{ 
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
            onMouseEnter={() => setIsAutoScrollPaused(true)}
            onMouseLeave={() => setIsAutoScrollPaused(false)}
          >
            {/* Hide scrollbar for Webkit browsers */}
            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, scale: 0.9, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 cursor-pointer flex-shrink-0 w-80 lg:w-96 relative overflow-hidden snap-start"
                onClick={() => setActiveService(service.id)}
              >
                {/* Background Gradient on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ 
                    background: `linear-gradient(135deg, ${primaryColor}08, ${secondaryColor}08)` 
                  }}
                />

                {/* Service Type Badge */}
                <div className="absolute top-4 right-4">
                  <span 
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      service.category === 'creative' 
                        ? 'bg-blue-100 text-blue-800' 
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {service.category === 'creative' ? 'Service' : 'Course'}
                  </span>
                </div>

                {/* Current Card Indicator */}
                {currentScrollIndex === index && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-4 left-4 w-2 h-2 rounded-full bg-green-500"
                  />
                )}

                {/* Icon */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative z-10 p-4 rounded-2xl w-fit mb-4 shadow-lg"
                  style={{ 
                    background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` 
                  }}
                >
                  {service.icon}
                </motion.div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-gray-800 transition-colors duration-300 pr-12">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">
                    {service.description}
                  </p>

                  {/* Duration/Level Info */}
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="w-4 h-4" style={{ color: secondaryColor }} />
                    <span className="text-sm font-medium" style={{ color: primaryColor }}>
                      {service.category === "creative" ? service.duration : service.duration + " • " + service.level}
                    </span>
                  </div>
                  
                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" style={{ color: secondaryColor }} />
                        <span className="truncate">{feature}</span>
                      </motion.li>
                    ))}
                    {service.features.length > 3 && (
                      <li className="flex items-center text-sm font-medium" style={{ color: primaryColor }}>
                        <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0" style={{ color: secondaryColor }} />
                        +{service.features.length - 3} more
                      </li>
                    )}
                  </ul>
                  
                  {/* CTA */}
                  <div className="flex items-center font-semibold group-hover:translate-x-1 transition-transform duration-300" style={{ color: primaryColor }}>
                    <span className="mr-2 text-sm">
                      {service.category === "education" ? "View Course" : "Learn More"}
                    </span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator with Current Position */}
          <div className="flex justify-center mt-6 space-x-2">
            {services.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentScrollIndex === index 
                    ? 'bg-green-500 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => scrollToIndex(index)}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-1 mt-4 max-w-md mx-auto">
            <motion.div
              className="h-1 rounded-full"
              style={{ 
                backgroundColor: secondaryColor,
                width: `${((currentScrollIndex + 1) / services.length) * 100}%`
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Service Detail Modal */}
        <AnimatePresence>
          {activeService && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
              onClick={() => setActiveService(null)}
            >
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto mx-4 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div 
                    className="p-4 rounded-2xl text-white shadow-lg"
                    style={{ 
                      background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` 
                    }}
                  >
                    {selectedService.icon}
                  </div>
                  <button 
                    onClick={() => setActiveService(null)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    style={{ color: primaryColor }}
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                
                <h3 className="text-3xl font-bold mb-2 text-gray-900">{selectedService.title}</h3>
                <p className="text-lg text-gray-600 mb-4">{selectedService.description}</p>
                <p className="text-gray-700 mb-6 leading-relaxed">{selectedService.details}</p>

                {/* Additional Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <h4 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                      <Target className="w-5 h-5" style={{ color: primaryColor }} />
                      {selectedService.category === "education" ? "Course Details" : "Project Details"}
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 border-b border-gray-200">
                        <span className="text-gray-600">Duration:</span>
                        <span className="font-semibold" style={{ color: primaryColor }}>
                          {selectedService.duration}
                        </span>
                      </div>
                      {selectedService.level && (
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="text-gray-600">Level:</span>
                          <span className="font-semibold" style={{ color: primaryColor }}>
                            {selectedService.level}
                          </span>
                        </div>
                      )}
                      {selectedService.projects && (
                        <div className="flex justify-between items-center py-2 border-b border-gray-200">
                          <span className="text-gray-600">Projects:</span>
                          <span className="font-semibold" style={{ color: primaryColor }}>
                            {selectedService.projects}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5" style={{ color: primaryColor }} />
                      {selectedService.category === "education" ? "Course Topics" : "Key Features"}
                    </h4>
                    <div className="grid gap-3">
                      {selectedService.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center text-gray-700 bg-gray-50 rounded-lg p-3"
                        >
                          <CheckCircle className="h-4 w-4 mr-3 flex-shrink-0" style={{ color: secondaryColor }} />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                  <button 
                    className="px-8 py-3 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 flex-1"
                    style={{ 
                      background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` 
                    }}
                  >
                    {selectedService.category === "education" ? "Enroll Now" : "Start Project"} 
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => setActiveService(null)}
                    className="px-8 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
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
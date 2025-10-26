"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "A full-stack e-commerce solution with real-time inventory management, payment integration, and admin dashboard. Built with modern technologies for scalability and performance.",
    image: "/portfolio/ecommerce-platform.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS"],
    liveUrl: "https://example.com",
    featured: true,
    color: "from-[#0A66C2] to-[#00BFA6]",
    icon: "🛒"
  },
  {
    id: 2,
    title: "Health & Fitness App",
    category: "Mobile Development",
    description:
      "Cross-platform fitness tracking application with AI-powered workout recommendations, progress analytics, and social features. Supports both iOS and Android platforms.",
    image: "/portfolio/fitness-app.jpg",
    technologies: ["Flutter", "Firebase", "TensorFlow", "Google Fit API"],
    liveUrl: "https://example.com",
    featured: true,
    color: "from-[#0A66C2] to-[#00BFA6]",
    icon: "💪"
  },
  {
    id: 3,
    title: "Corporate Dashboard",
    category: "UI/UX Design",
    description:
      "Enterprise analytics dashboard with customizable widgets, real-time data visualization, and comprehensive reporting features for business intelligence.",
    image: "/portfolio/dashboard-ui.jpg",
    technologies: ["Figma", "React", "D3.js", "WebSocket", "Chart.js"],
    liveUrl: "https://example.com",
    featured: true,
    color: "from-[#0A66C2] to-[#00BFA6]",
    icon: "📊"
  },
  {
    id: 4,
    title: "Banking System",
    category: "Full Stack Development",
    description:
      "Secure banking application with multi-layer authentication, real-time transaction processing, and advanced security features for financial institutions.",
    image: "/portfolio/banking-system.jpg",
    technologies: ["Angular", "Spring Boot", "PostgreSQL", "Redis", "OAuth2"],
    liveUrl: "https://example.com",
    featured: true,
    color: "from-[#0A66C2] to-[#00BFA6]",
    icon: "🏦"
  },
];

const ProjectCard = ({ project, isActive, position }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getTransform = () => {
    if (position === 0) return { x: 0, scale: 1, opacity: 1, zIndex: 30 };
    if (position === 1) return { x: 100, scale: 0.85, opacity: 0.6, zIndex: 20 };
    if (position === -1) return { x: -100, scale: 0.85, opacity: 0.6, zIndex: 20 };
    return { x: 0, scale: 0.7, opacity: 0, zIndex: 10 };
  };

  const transform = getTransform();

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{
        x: transform.x,
        scale: transform.scale,
        opacity: transform.opacity,
        zIndex: transform.zIndex,
      }}
      transition={{ 
        duration: 0.6,
        ease: [0.32, 0.72, 0, 1]
      }}
      className="absolute"
      onMouseEnter={() => isActive && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        pointerEvents: isActive ? 'auto' : 'none'
      }}
    >
      <div
        className={`relative bg-white rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 ${
          isActive ? 'cursor-pointer' : ''
        }`}
        style={{
          width: '420px',
          height: '520px',
        }}
      >
        {/* Project Background with Primary/Secondary Gradient */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`}>
          <div className="absolute inset-0 bg-black/10" />
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-32 translate-x-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-32 -translate-x-32" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-8">
            <motion.div 
              className="text-7xl mb-6"
              animate={{ 
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? 5 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              {project.icon}
            </motion.div>
            <h3 className="text-3xl font-bold mb-3 drop-shadow-lg">{project.title}</h3>
            <p className="text-white/90 text-base font-medium">{project.category}</p>
          </div>
        </div>

        {/* Hover Overlay - Full Content */}
        <AnimatePresence>
          {isHovered && isActive && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-sm flex flex-col justify-between p-8"
            >
              {/* Top Section */}
              <div className="flex-1 overflow-y-auto">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-white"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{project.icon}</span>
                    <div>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <p className="text-sm text-white/70">{project.category}</p>
                    </div>
                  </div>
                  <p className="text-white/90 leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>
              </div>

              {/* Bottom Section */}
              <div className="space-y-4 pt-4 border-t border-white/10">
                {/* Technologies */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 bg-white/10 rounded-lg text-sm text-white border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Action Button */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white text-gray-900 text-center py-3.5 px-6 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                  >
                    <span>View Live Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Badges */}
       
      </div>
    </motion.div>
  );
};

export default function PortfolioPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
    
    return () => clearInterval(timer);
  }, []);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  const goToSlide = useCallback((index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, prevSlide]);

  const getPosition = (index) => {
    const diff = index - currentIndex;
    if (diff === 0) return 0;
    if (diff === 1 || diff === -(projects.length - 1)) return 1;
    if (diff === -1 || diff === projects.length - 1) return -1;
    return 2;
  };

  return (
    <section 
      className="relative bg-gradient-to-b from-gray-50 to-white py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0A66C2]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#00BFA6]/10 rounded-full blur-3xl" />
      </div>

      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-[#0A66C2]/10 text-[#0A66C2] rounded-full text-sm font-semibold">
              Portfolio Showcase
            </span>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-[#0A66C2] to-[#00BFA6] bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto leading-relaxed text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Explore our portfolio of innovative solutions. Hover over the active project to discover detailed information and technologies used.
          </motion.p>
        </div>

        {/* Slider Container */}
        <div className="relative h-[600px] flex items-center justify-center mb-8">
          {/* Navigation Arrows */}
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-4 z-40 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all duration-300 border-2 border-gray-100"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-7 h-7 text-gray-800" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-4 z-40 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center hover:bg-gray-50 transition-all duration-300 border-2 border-gray-100"
            aria-label="Next project"
          >
            <ChevronRight className="w-7 h-7 text-gray-800" />
          </motion.button>

          {/* Projects Slider */}
          <div className="relative w-full h-full flex items-center justify-center">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                isActive={index === currentIndex}
                position={getPosition(index)}
              />
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'bg-[#0A66C2] w-10 h-3'
                    : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          {/* Project Counter */}
         
        </div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          
        </motion.div>
      </div>
    </section>
  );
}
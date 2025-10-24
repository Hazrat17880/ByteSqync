"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A full-stack e-commerce solution with real-time inventory management and seamless payment integration.",
    image: "/portfolio/ecommerce-platform.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 2,
    title: "Health & Fitness App",
    category: "Mobile Development",
    description: "Cross-platform fitness tracking application with AI-powered workout recommendations and progress analytics.",
    image: "/portfolio/fitness-app.jpg",
    technologies: ["Flutter", "Firebase", "TensorFlow", "Google Fit API"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 3,
    title: "Corporate Dashboard",
    category: "UI/UX Design",
    description: "Enterprise analytics dashboard with customizable widgets and real-time data visualization.",
    image: "/portfolio/dashboard-ui.jpg",
    technologies: ["Figma", "React", "D3.js", "WebSocket"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 4,
    title: "Banking System",
    category: "Full Stack Development",
    description: "Secure banking application with multi-layer authentication and real-time transaction processing.",
    image: "/portfolio/banking-system.jpg",
    technologies: ["Angular", "Spring Boot", "PostgreSQL", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true
  }
];

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -8 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-80 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        {/* Placeholder for project image - replace with actual images */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1f4668] to-[#27AAE1] opacity-90 flex items-center justify-center">
          <div className="text-white text-center p-8">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-blue-100 text-sm">{project.category}</p>
          </div>
        </div>
        
        {/* Hover Overlay */}
        <motion.div
          initial={false}
          animate={{ 
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.95
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end"
        >
          <div className="p-6 text-white transform transition-transform duration-500">
            <motion.h3
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-xl font-bold mb-2"
            >
              {project.title}
            </motion.h3>
            
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-blue-100 text-sm mb-4 leading-relaxed"
            >
              {project.description}
            </motion.p>

            {/* Technologies */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="flex flex-wrap gap-2 mb-4"
            >
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs border border-white/30"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex gap-3"
            >
              <motion.a
                href={project.liveUrl}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-white text-[#1f4668] text-center py-2 px-4 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors duration-300"
              >
                Live Demo
              </motion.a>
              <motion.a
                href={project.githubUrl}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-transparent border border-white text-white text-center py-2 px-4 rounded-lg font-semibold text-sm hover:bg-white hover:text-[#1f4668] transition-all duration-300"
              >
                Code
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
            {project.category}
          </span>
        </div>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-[#27AAE1] text-white rounded-full text-xs font-semibold">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Bottom Content (Visible always) */}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#27AAE1] transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {project.technologies.slice(0, 2).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 2 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                +{project.technologies.length - 2}
              </span>
            )}
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-8 h-8 bg-[#27AAE1] rounded-full flex items-center justify-center text-white cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default function PortfolioPreview() {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'Web Development', 'Mobile Development', 'UI/UX Design', 'Full Stack Development'];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="relative bg-white py-16 md:py-24">
      <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-4 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Featured <span className="font-semibold text-[#1f4668]">Projects</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Explore our portfolio of innovative solutions that have helped businesses 
            transform their digital presence and achieve remarkable results.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                filter === category
                  ? 'bg-[#1f4668] text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? 'All Projects' : category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#1f4668] to-[#27AAE1] rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with cutting-edge technology and innovative design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#1f4668] font-semibold rounded-lg hover:shadow-xl transition-all duration-300 text-lg"
              >
                Start a Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#1f4668] transition-all duration-300 text-lg"
              >
                View Full Portfolio
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, Github, Smartphone, Globe, Palette, 
  Filter, ArrowRight, X, Calendar, Play, Users, Award,
  ChevronRight, Star, Zap, Clock, Target
} from "lucide-react";

const Portfolio = () => {
  const primaryColor = "#0A66C2";
  const secondaryColor = "#00BFA6";
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const filters = [
    { id: "all", label: "All Projects", icon: <Zap className="w-4 h-4" /> },
    { id: "web", label: "Web Development", icon: <Globe className="w-4 h-4" /> },
    { id: "mobile", label: "Mobile Apps", icon: <Smartphone className="w-4 h-4" /> },
    { id: "design", label: "UI/UX Design", icon: <Palette className="w-4 h-4" /> },
    { id: "ecommerce", label: "E-Commerce", icon: <Users className="w-4 h-4" /> }
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: ["web", "ecommerce"],
      description: "A full-stack e-commerce solution with real-time inventory, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Tracking"],
      liveUrl: "#",
      githubUrl: "#",
      client: "Fashion Retail Co.",
      duration: "4 months",
      results: "Increased sales by 45% and reduced cart abandonment by 60%",
      testimonial: "ByteSynq delivered beyond our expectations. The platform handles 10K+ daily users seamlessly.",
      rating: 5
    },
    {
      id: 2,
      title: "Fitness Mobile App",
      category: ["mobile", "design"],
      description: "A comprehensive fitness tracking application with workout plans, progress tracking, and social features.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      features: ["Workout Plans", "Progress Tracking", "Social Feed", "Nutrition Guide"],
      liveUrl: "#",
      githubUrl: "#",
      client: "FitLife Studios",
      duration: "3 months",
      results: "50K+ downloads with 4.8-star rating on Play Store",
      testimonial: "The app's user experience is exceptional. Our user retention increased by 70%.",
      rating: 5
    },
    {
      id: 3,
      title: "Healthcare Management System",
      category: ["web", "design"],
      description: "A complete healthcare management system for clinics with patient records and appointment scheduling.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      technologies: ["Next.js", "PostgreSQL", "Tailwind CSS", "AWS"],
      features: ["Patient Records", "Appointment System", "Billing", "Analytics"],
      liveUrl: "#",
      githubUrl: "#",
      client: "MediCare Group",
      duration: "6 months",
      results: "Streamlined operations saving 20+ hours weekly for staff",
      testimonial: "Professional, efficient, and delivered on time. Highly recommended!",
      rating: 5
    },
    {
      id: 4,
      title: "Food Delivery App",
      category: ["mobile", "web"],
      description: "A multi-vendor food delivery platform with real-time tracking and multiple payment options.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
      technologies: ["Flutter", "Node.js", "MongoDB", "Google Maps API"],
      features: ["Restaurant Listings", "Real-time Tracking", "Multiple Payments", "Reviews"],
      liveUrl: "#",
      githubUrl: "#",
      client: "QuickBite",
      duration: "5 months",
      results: "Processed 10K+ orders in first 3 months",
      testimonial: "Outstanding development team. They understood our vision perfectly.",
      rating: 5
    },
    {
      id: 5,
      title: "Corporate Website Redesign",
      category: ["design", "web"],
      description: "Complete redesign of corporate website focusing on user experience and conversion optimization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Figma", "React", "GSAP", "Contentful"],
      features: ["Responsive Design", "CMS Integration", "SEO Optimized", "Analytics"],
      liveUrl: "#",
      githubUrl: "#",
      client: "TechCorp Inc.",
      duration: "2 months",
      results: "Increased lead generation by 75% and improved bounce rate by 40%",
      testimonial: "The redesign transformed our online presence. Conversion rates skyrocketed!",
      rating: 5
    },
    {
      id: 6,
      title: "Inventory Management System",
      category: ["web"],
      description: "Custom inventory management solution with barcode scanning and automated reporting.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Python", "Django", "SQLite"],
      features: ["Barcode Scanning", "Stock Alerts", "Reporting", "Multi-location"],
      liveUrl: "#",
      githubUrl: "#",
      client: "SupplyChain Pro",
      duration: "4 months",
      results: "Reduced inventory errors by 90% and improved efficiency by 50%",
      testimonial: "Reliable and robust system. Exceeded all our expectations.",
      rating: 5
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "25+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "15+", label: "Industries Served", icon: <Globe className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> }
  ];

  const technologies = [
    { name: "React/Next.js", projects: 18, icon: "⚛️" },
    { name: "React Native", projects: 12, icon: "📱" },
    { name: "Node.js", projects: 22, icon: "🟢" },
    { name: "UI/UX Design", projects: 15, icon: "🎨" },
    { name: "Testing QA", projects: 20, icon: "🧪" },
    { name: "Cloud Services", projects: 18, icon: "☁️" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  const ProjectModal = ({ project, onClose }) => (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with Gradient */}
          <div 
            className="relative h-64 rounded-t-3xl overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${primaryColor}20, ${secondaryColor}20)`
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover mix-blend-overlay"
            />
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200"
            >
              <X className="w-5 h-5 text-gray-700" />
            </button>
            
            {/* Project Badges */}
            <div className="absolute bottom-6 left-6 flex gap-2">
              {project.category.map(cat => (
                <span
                  key={cat}
                  className="px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-white/20 text-white"
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </span>
              ))}
            </div>
          </div>
          
          <div className="p-8 lg:p-12">
            {/* Project Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
              <div>
                <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-xl text-gray-600 leading-relaxed">{project.description}</p>
              </div>
              
              {/* Client & Rating */}
              <div className="flex items-center gap-4 bg-gray-50 rounded-2xl p-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">{project.client}</div>
                  <div className="flex items-center gap-1 mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 fill-yellow-400 text-yellow-400" 
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 text-center">
                <Clock className="w-8 h-8 mx-auto mb-3" style={{ color: primaryColor }} />
                <div className="text-2xl font-bold text-gray-900">{project.duration}</div>
                <div className="text-gray-600">Duration</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center">
                <Target className="w-8 h-8 mx-auto mb-3" style={{ color: secondaryColor }} />
                <div className="text-lg font-semibold text-gray-900 leading-tight">{project.results}</div>
                <div className="text-gray-600">Results</div>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6">
                <div className="text-sm text-gray-600 mb-2">Client Testimonial</div>
                <div className="text-gray-700 italic">"{project.testimonial}"</div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Technologies */}
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Zap className="w-6 h-6" style={{ color: primaryColor }} />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-4 py-3 rounded-xl text-sm font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6" style={{ color: secondaryColor }} />
                  Key Features
                </h4>
                <div className="grid gap-3">
                  {project.features.map(feature => (
                    <div key={feature} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: secondaryColor }} />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-12 mt-12 border-t border-gray-200">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 flex-1 group"
                style={{ 
                  background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` 
                }}
              >
                <ExternalLink className="w-5 h-5" />
                View Live Demo
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-semibold border-2 transition-all duration-300 flex-1"
                style={{ 
                  borderColor: primaryColor,
                  color: primaryColor
                }}
              >
                <Github className="w-5 h-5" />
                Source Code
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      {/* Hero Section */}
      <section className="relative pt-[14rem] pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-green-500/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-200/20 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
          

            <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              Creative <span style={{ color: primaryColor }}>Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover our journey of transforming ideas into exceptional digital experiences 
              that drive results and create lasting impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="pt-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 mx-auto transition-all duration-300 group-hover:scale-110"
                     style={{ backgroundColor: `${primaryColor}15` }}>
                  <div style={{ color: primaryColor }}>
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Filters */}
      <section className="py-12 sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map(filter => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 border-2 ${
                  activeFilter === filter.id
                    ? "text-white shadow-lg"
                    : "text-gray-700 bg-white hover:bg-gray-50 border-gray-200"
                }`}
                style={{
                  background: activeFilter === filter.id 
                    ? `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`
                    : undefined,
                  borderColor: activeFilter === filter.id ? primaryColor : undefined
                }}
              >
                {filter.icon}
                {filter.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              layout
              className="grid md:grid-cols-2 xl:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 30 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer border border-gray-100"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-60">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Category Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      {project.category.map(cat => (
                        <span
                          key={cat}
                          className="px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-black/60 backdrop-blur-sm border border-white/20"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>

                    {/* Hover Action */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: hoveredProject === project.id ? 1 : 0, y: hoveredProject === project.id ? 0 : 20 }}
                      className="absolute bottom-4 left-4 right-4"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white font-semibold text-sm bg-black/40 backdrop-blur-sm rounded-full px-3 py-1.5">
                          View Case Study
                        </span>
                        <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                          <ArrowRight className="w-4 h-4 text-gray-700" />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map(tech => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg text-xs bg-gray-100 text-gray-700 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1.5 rounded-lg text-xs bg-gray-100 text-gray-700 font-medium">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Footer */}
                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-500">{project.client}</span>
                      </div>
                      <div className="flex items-center gap-1 text-sm font-semibold transition-all duration-300 group-hover:gap-2"
                           style={{ color: primaryColor }}>
                        View Details
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gray-100">
                <Filter className="w-8 h-8 text-gray-400" />
              </div>
              <p className="text-gray-500 text-lg">No projects found for the selected filter.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 bg-clip-text text-transparent">
              Our <span style={{ color: secondaryColor }}>Tech Stack</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We leverage cutting-edge technologies to build scalable, performant, and future-proof solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 group border border-gray-100"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{tech.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900">{tech.name}</h3>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    {tech.projects}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(tech.projects / 25) * 100}%` }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="h-3 rounded-full transition-all duration-1000 group-hover:shadow-lg"
                    style={{ 
                      background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` 
                    }}
                  />
                </div>
                <p className="text-gray-500 text-sm mt-3">Projects Completed</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 overflow-hidden">
              {/* Background Elements */}
              <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full opacity-20 blur-3xl" 
                   style={{ backgroundColor: primaryColor }} />
              <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full opacity-20 blur-3xl" 
                   style={{ backgroundColor: secondaryColor }} />
              
              <div className="relative z-10 text-center">
               

                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
                >
                  Ready to <span style={{ color: primaryColor }}>Create</span> Something{" "}
                  <span style={{ color: secondaryColor }}>Amazing</span>?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
                >
                  Let's discuss your project requirements and bring your vision to life with our expertise and innovative solutions.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 text-white font-semibold rounded-2xl transition-all duration-300 flex items-center gap-3 group relative overflow-hidden"
                    style={{ 
                      background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` 
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <span className="relative z-10">Start Your Project</span>
                    <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 font-semibold rounded-2xl transition-all duration-300 flex items-center gap-3 border-2"
                    style={{ 
                      borderColor: primaryColor,
                      color: primaryColor
                    }}
                  >
                    <Calendar className="w-5 h-5" />
                    Schedule Consultation
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </main>
  );
};

export default Portfolio;
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Smartphone, Globe, Palette, TestTube2, Filter, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const Portfolio = () => {
  const primaryColor = "#0A66C2";
  const secondaryColor = "#00BFA6";

  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "design", label: "UI/UX Design" },
    { id: "ecommerce", label: "E-Commerce" }
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
      results: "Increased sales by 45% and reduced cart abandonment by 60%"
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
      results: "50K+ downloads with 4.8-star rating on Play Store"
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
      results: "Streamlined operations saving 20+ hours weekly for staff"
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
      results: "Processed 10K+ orders in first 3 months"
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
      results: "Increased lead generation by 75% and improved bounce rate by 40%"
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
      results: "Reduced inventory errors by 90% and improved efficiency by 50%"
    },
    {
      id: 7,
      title: "Real Estate Portal",
      category: ["web", "design"],
      description: "Modern real estate platform with property listings, virtual tours, and agent management.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      technologies: ["React", "Firebase", "Google Maps API", "Stripe"],
      features: ["Property Search", "Virtual Tours", "Agent Profiles", "Booking System"],
      liveUrl: "#",
      githubUrl: "#",
      client: "Urban Properties",
      duration: "5 months",
      results: "Increased property inquiries by 120% and agent signups by 80%"
    },
    {
      id: 8,
      title: "Banking Mobile App",
      category: ["mobile", "design"],
      description: "Secure banking application with transaction tracking, bill payments, and investment features.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      technologies: ["Flutter", "Node.js", "MongoDB", "Plaid API"],
      features: ["Account Management", "Money Transfer", "Bill Payments", "Investment Tracking"],
      liveUrl: "#",
      githubUrl: "#",
      client: "Metro Bank",
      duration: "6 months",
      results: "100K+ users with 4.9-star rating and 99.9% uptime"
    },
    {
      id: 9,
      title: "Education Learning Platform",
      category: ["web", "mobile"],
      description: "Interactive learning platform with video courses, quizzes, and progress tracking for students.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
      technologies: ["Next.js", "MongoDB", "WebRTC", "Stripe"],
      features: ["Video Courses", "Interactive Quizzes", "Progress Tracking", "Certification"],
      liveUrl: "#",
      githubUrl: "#",
      client: "EduTech Solutions",
      duration: "4 months",
      results: "50K+ student enrollments and 95% course completion rate"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "15+", label: "Industries Served" },
    { number: "98%", label: "Client Satisfaction" }
  ];

  const technologies = [
    { name: "React/Next.js", projects: 18 },
    { name: "React Native", projects: 12 },
    { name: "Node.js", projects: 22 },
    { name: "UI/UX Design", projects: 15 },
    { name: "Testing QA", projects: 20 }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));

  const ProjectModal = ({ project, onClose }) => (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
          >
            ×
          </button>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
        </div>
        
        <div className="p-8">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.category.map(cat => (
              <span
                key={cat}
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </span>
            ))}
          </div>

          <h3 className="text-3xl font-bold text-[#111827] mb-4">{project.title}</h3>
          <p className="text-gray-600 text-lg mb-6">{project.description}</p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold text-[#111827] mb-3">Project Details</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Client:</span>
                  <span className="font-medium">{project.client}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{project.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Results:</span>
                  <span className="font-medium text-right" style={{ color: secondaryColor }}>
                    {project.results}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-[#111827] mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-lg font-semibold text-[#111827] mb-3">Key Features</h4>
            <div className="grid grid-cols-2 gap-3">
              {project.features.map(feature => (
                <div key={feature} className="flex items-center gap-2">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: secondaryColor }}
                  ></div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              style={{ backgroundColor: primaryColor, color: 'white' }}
            >
              <ExternalLink size={20} />
              View Live Demo
            </button>
            <button
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-300"
              style={{ borderColor: primaryColor, color: primaryColor }}
            >
              <Github size={20} />
              Source Code
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-6">
              Our <span style={{ color: primaryColor }}>Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our diverse range of successful projects across web development, 
              mobile applications, and UI/UX design that have helped businesses grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: primaryColor }}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Filters */}
      <section className="py-12 bg-gray-50 relative z-30">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-wrap justify-center gap-4">
      {filters.map(filter => (
        <button
          key={filter.id}
          onClick={() => setActiveFilter(filter.id)}
          className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            activeFilter === filter.id
              ? "text-white"
              : "text-gray-700 bg-white hover:bg-gray-100"
          }`}
          style={{
            backgroundColor: activeFilter === filter.id ? primaryColor : undefined
          }}
        >
          {filter.label}
        </button>
      ))}
    </div>
  </div>
</section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {project.category.map(cat => (
                      <span
                        key={cat}
                        className="px-2 py-1 rounded-full text-xs font-medium text-white bg-black/50 backdrop-blur-sm"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#111827] mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map(tech => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded text-xs bg-gray-100 text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 rounded text-xs bg-gray-100 text-gray-700">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{project.client}</span>
                    <button
                      className="flex items-center gap-1 text-sm font-semibold transition-all duration-300 hover:gap-2"
                      style={{ color: primaryColor }}
                    >
                      View Details
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No projects found for the selected filter.</p>
            </div>
          )}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-4">
              Technologies We <span style={{ color: secondaryColor }}>Excel In</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our expertise spans across modern technologies and frameworks to deliver cutting-edge solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-[#111827]">{tech.name}</h3>
                  <span className="text-2xl font-bold" style={{ color: primaryColor }}>
                    {tech.projects}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-1000"
                    style={{ 
                      backgroundColor: primaryColor,
                      width: `${(tech.projects / 25) * 100}%`
                    }}
                  ></div>
                </div>
                <p className="text-gray-500 text-sm mt-2">Projects Completed</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-900 to-[#111827] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your <span style={{ color: secondaryColor }}>Project</span>?
            </h2>
            <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                style={{ backgroundColor: primaryColor, color: 'white' }}
              >
                Start a Project
              </button>
              <button 
                className="px-8 py-4 rounded-xl font-semibold border-2 transition-all duration-300 transform hover:scale-105"
                style={{ borderColor: secondaryColor, color: secondaryColor }}
              >
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </main>
  );
};

export default Portfolio;
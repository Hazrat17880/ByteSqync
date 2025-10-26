"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, HeartHandshake, Shield, Clock, Star } from "lucide-react";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";

const TestimonialsTrust = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [feedbacks, setFeedbacks] = useState([]);
  const primaryColor = "#0A66C2"; // or your brand's main color
  const secondaryColor = "#00BFA6"; // your accent/secondary color

  // Mock data for demonstration (remove this when using real API)
  const mockFeedbacks = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO",
      company: "TechInnovate",
      feedback:
        "ByteSynq delivered beyond our expectations. Their team's technical expertise and attention to detail resulted in a product that has significantly improved our operational efficiency.",
      image: null,
      rating: 5,
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Product Manager",
      company: "GrowthLabs",
      feedback:
        "The collaboration with ByteSynq was seamless. They understood our vision and transformed it into a robust, scalable solution that our users love.",
      image: null,
      rating: 5,
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "CTO",
      company: "StartUp Ventures",
      feedback:
        "Outstanding work ethic and technical proficiency. ByteSynq's team delivered our project on time and within budget while maintaining excellent communication throughout.",
      image: null,
      rating: 5,
    },
  ];

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        // For now, using mock data. Replace with your actual API call
        setFeedbacks(mockFeedbacks);

        // Uncomment below when you have the real API
        /*
        const response = await fetch("/api/public/home");
        if (!response.ok) throw new Error("Failed to fetch homepage data");
        const result = await response.json();
        if (result.success) setFeedbacks(result.data);
        else throw new Error(result.message || "Failed to load data");
        */
      } catch (err) {
        console.error("Error fetching home data:", err);
        // Fallback to mock data
        setFeedbacks(mockFeedbacks);
      }
    };
    fetchHomeData();
  }, []);

  const stats = [
    {
      number: "50+",
      label: "Projects Delivered",
      icon: Award,
      color: "#0A66C2",
    },
    {
      number: "98%",
      label: "Client Satisfaction",
      icon: HeartHandshake,
      color: "#00BFA6",
    },
    {
      number: "100%",
      label: "On-Time Delivery",
      icon: Clock,
      color: "#0A66C2",
    },
    { number: "4.9/5", label: "Average Rating", icon: Star, color: "#00BFA6" },
  ];

  useEffect(() => {
    if (!isPlaying || !feedbacks?.length) return;
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % feedbacks.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPlaying, feedbacks]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % feedbacks.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + feedbacks.length) % feedbacks.length
    );
  };

  return (
    <section className="relative py-20 lg:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#111827] mb-6">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              Industry Leaders
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-500 rounded-full mx-auto mb-8"></div>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover why businesses choose ByteSynq for their digital
            transformation journey. Our commitment to excellence drives
            exceptional results.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Testimonials Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
            onMouseEnter={() => setIsPlaying(false)}
            onMouseLeave={() => setIsPlaying(true)}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden">
              {/* Gradient Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-green-500"></div>

              <AnimatePresence mode="wait">
                {feedbacks.length > 0 && (
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    {/* Quote */}
                    <div className="mb-8">
                      <svg
                        className="w-8 h-8 text-blue-500/20 mb-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                      </svg>
                      <p className="text-lg text-gray-700 leading-relaxed">
                        "{feedbacks[activeTestimonial]?.feedback}"
                      </p>
                    </div>

                    {/* Client Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {feedbacks[activeTestimonial]?.image ? (
                          <Image
                            src={feedbacks[activeTestimonial].image}
                            alt={feedbacks[activeTestimonial].name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover rounded-2xl"
                          />
                        ) : (
                          feedbacks[activeTestimonial]?.name
                            ?.charAt(0)
                            ?.toUpperCase()
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold text-gray-900 text-lg">
                            {feedbacks[activeTestimonial]?.name}
                          </h4>
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-1">
                          {feedbacks[activeTestimonial]?.position}
                        </p>
                        <p className="text-blue-600 font-medium text-sm">
                          {feedbacks[activeTestimonial]?.company}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Dots */}
              {feedbacks.length > 1 && (
                <div className="flex justify-center gap-2 mt-8">
                  {feedbacks.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === activeTestimonial
                          ? "bg-blue-600 w-6"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex justify-center mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${stat.color}15` }}
                    >
                      <IconComponent
                        className="w-6 h-6"
                        style={{ color: stat.color }}
                      />
                    </div>
                  </div>
                  <div
                    className="text-2xl md:text-3xl font-bold mb-2"
                    style={{ color: stat.color }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* CTA Section */}
        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative mt-24 mb-12"
        >
          <div className="relative bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-gray-100 overflow-hidden">
            {/* Background Gradient Orbs */}
            <div
              className="absolute -top-24 -left-24 w-48 h-48 rounded-full opacity-20 blur-3xl"
              style={{ backgroundColor: primaryColor }}
            />
            <div
              className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full opacity-20 blur-3xl"
              style={{ backgroundColor: secondaryColor }}
            />

            {/* Geometric Pattern Overlay */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
          linear-gradient(45deg, ${primaryColor} 1px, transparent 1px),
          linear-gradient(-45deg, ${secondaryColor} 1px, transparent 1px)
        `,
                  backgroundSize: "60px 60px",
                }}
              />
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center">
              {/* Badge */}
             

              {/* Heading */}
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold mb-6 text-gray-900"
              >
                Ready to <span style={{ color: primaryColor }}>Transform</span>{" "}
                Your{" "}
                <span style={{ color: secondaryColor }}>Digital Presence</span>?
              </motion.h3>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              >
                Join 100+ successful businesses that trust us to deliver
                exceptional digital solutions. Let's build something amazing
                together.
              </motion.p>

          

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    boxShadow: "0 20px 40px rgba(10, 102, 194, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 text-white font-semibold rounded-2xl transition-all duration-300 flex items-center gap-3 group relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
                  }}
                >
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                  <span className="relative z-10">Start Your Project</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    y: -2,
                    backgroundColor: "rgba(10, 102, 194, 0.05)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 font-semibold rounded-2xl transition-all duration-300 flex items-center gap-3 border-2"
                  style={{
                    borderColor: primaryColor,
                    color: primaryColor,
                  }}
                >
                  <span>Schedule Consultation</span>
                  <Calendar className="w-5 h-5" />
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
         
            </div>

            {/* Floating Elements */}
           
          
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsTrust;

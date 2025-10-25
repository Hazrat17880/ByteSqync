"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  HeartHandshake,
  Shield,
  Volume2,
} from "lucide-react";
import Image from "next/image";

const TestimonialsTrust = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [feedbacks, setFeedbacks] = useState(false);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await fetch("/api/public/home");
        if (!response.ok) throw new Error("Failed to fetch homepage data");
        const result = await response.json();
        if (result.success) setFeedbacks(result.data);
        else throw new Error(result.message || "Failed to load data");
      } catch (err) {
        console.error("Error fetching home data:", err);
      }
    };
    fetchHomeData();
  }, []);

  const stats = [
    { number: "50+", label: "Projects Delivered", icon: Award },
    { number: "98%", label: "Client Satisfaction", icon: HeartHandshake },
    { number: "$25K+", label: "Funding Secured", icon: Shield },
    { number: "100%", label: "On-Time Delivery", icon: Volume2 },
  ];

  useEffect(() => {
    if (!isPlaying || !feedbacks?.length) return;
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % feedbacks.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPlaying, feedbacks]);

  return (
    <section className="relative py-16 px-6 sm:px-12 lg:px-24 bg-gray-50 overflow-hidden">
      {/* Background Gradient Blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#1f4668]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#27AAE1]/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-start mb-10"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight text-[#1f4668]"
          >
            Voices of <span className="text-[#27AAE1]">Impact</span>
          </motion.h2>
          <p className="text-gray-600 mt-3 max-w-xl">
            Hear from organizations and innovators who’ve partnered with us to
            create meaningful digital transformation.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Testimonials */}
          {feedbacks && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 relative overflow-hidden">
                {/* Top Accent Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#1f4668] to-[#27AAE1]"></div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-lg text-gray-700 italic mb-8 leading-relaxed"
                    >
                      “{feedbacks[activeTestimonial]?.feedback}”
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex items-center gap-6"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05, rotate: 3 }}
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1f4668] to-[#27AAE1] flex items-center justify-center text-white font-bold text-xl shadow-lg"
                      >
                        {feedbacks[activeTestimonial]?.image ? (
                          <Image
                            src={feedbacks[activeTestimonial]?.image}
                            alt={feedbacks[activeTestimonial]?.name}
                            width={400}
                            height={400}
                            className="w-full h-full object-cover rounded-2xl"
                          />
                        ) : (
                          feedbacks[activeTestimonial]?.name
                            ?.charAt(0)
                            ?.toUpperCase()
                        )}
                      </motion.div>

                      <div>
                        <h4 className="text-[#1f4668] font-semibold text-lg mb-1">
                          {feedbacks[activeTestimonial]?.name}
                        </h4>
                        <p className="text-gray-600 text-sm mb-2">
                          {feedbacks[activeTestimonial]?.position}
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#27AAE1] rounded-full animate-pulse"></div>
                          <span className="text-sm text-[#27AAE1] font-medium">
                            {feedbacks[activeTestimonial]?.company}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center items-center"
          >
            <div className="grid grid-cols-2 gap-6 w-full">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white rounded-2xl p-6 text-center shadow-md border border-gray-100 hover:shadow-xl transition-all"
                  >
                    <div className="flex justify-center mb-3 text-[#1f4668]">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <div className="text-2xl font-semibold text-[#27AAE1] mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#1f4668] to-[#27AAE1] rounded-2xl p-10 text-white shadow-lg">
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
              Ready to Make an Impact?
            </h3>
            <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
              Let’s collaborate to craft your next success story with innovation
              and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-[#1f4668] font-semibold rounded-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#1f4668] transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsTrust;

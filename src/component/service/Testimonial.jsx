"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  Star,
  Award,
  Shield,
  HeartHandshake,
  Sparkles,
  Play,
  Pause,
  Volume2,
  Users,
  Globe,
  Building,
  School,
  Heart
} from 'lucide-react';
import Image from 'next/image';

const TestimonialsTrust = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Director, Global Aid Foundation",
      content: "Pixi Creative transformed our organizational branding and donor materials. Their strategic approach helped us secure a $2M grant. Exceptional partners who truly understand international development.",
      avatar: "SJ",
      rating: 5,
      project: "Brand Strategy & Donor Package"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CEO, TechInnovate Solutions",
      content: "The company profile designed by Pixi Creative was instrumental in our Series A funding. They captured our vision perfectly and presented it with stunning visual clarity that investors loved.",
      avatar: "MC",
      rating: 5,
      project: "Investor Pitch Design"
    },
    {
      id: 3,
      name: "Amina Said",
      role: "Program Manager, Education For All",
      content: "Their capacity building program revolutionized our team's digital skills. The training was practical, engaging, and immediately applicable. We saw a 40% increase in online engagement.",
      avatar: "AS",
      rating: 5,
      project: "Digital Transformation Training"
    }
  ];
const [feedbacks, setFeedbacks]= useState(false)
  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await fetch('/api/public/home');
        
        if (!response.ok) {
          throw new Error('Failed to fetch homepage data');
        }
        
        const result = await response.json();
        
        if (result.success) {
          setFeedbacks(result.data);
        } else {
          throw new Error(result.message || 'Failed to load data');
        }
      } catch (err) {
    
        console.error('Error fetching home data:', err);
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
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % feedbacks.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPlaying, feedbacks.length]);

  return (
    <section className="relative  py-10 px-6 sm:px-12 lg:px-24 bg-gray-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-start mt-2 md:pb-15 pb-5 "
        >
         
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl md:text-5xl  text-primary font-virtual tracking-wider lowercase "
          >
            Voices of <span className="text-secondary">Impact</span>
          </motion.h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Testimonials */}
         {feedbacks && (
           <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-10 shadow-2xl border border-white/20 relative overflow-hidden">
              {/* Gradient Accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/50"></div>
              
              {/* <Quote className="w-12 h-12 text-primary mb-8" /> */}
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  {/* Stars */}
                  {/* <div className="flex justify-center mb-6">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="mx-1"
                      > */}
                        {/* <Star className="w-6 h-6 fill-yellow-400 text-yellow-400 drop-shadow-lg" /> */}
                      {/* </motion.div> */}
                    {/* ))} */}
                  {/* </div> */}

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-gray-700 italic mb-8 leading-relaxed font-light"
                  >
                    "{feedbacks[activeTestimonial]?.feedback}"
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-6"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 5 }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-white font-bold text-xl shadow-lg border-2 border-white/20"
                    >
                      {
                        feedbacks[activeTestimonial]?.image && (
                          <Image src={feedbacks[activeTestimonial]?.image}
                      alt={feedbacks[activeTestimonial]?.name}
                      width={400} height={400}
                      className='w-full h-full object-cover'/>
                        )
                      }
                    </motion.div>
                    
                    <div>
                      <h4 className=" text-primary font-virtual text-lg mb-1">
                        {feedbacks[activeTestimonial]?.name}
                      </h4>
                      <p className="text-gray-600 text-sm mb-2">
                        {feedbacks[activeTestimonial]?.position}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-primary font-semibold">
                          {feedbacks[activeTestimonial]?.company}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              {/* <div className="flex justify-center gap-4 mt-10 hidden md:block">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-3 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 hover:text-primary transition-all shadow-md hover:shadow-lg"
                >
                  {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="p-3 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 hover:text-primary transition-all shadow-md hover:shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="p-3 rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 hover:text-primary transition-all shadow-md hover:shadow-lg"
                >
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div> */}
            </div>
          </motion.div>
         )}

          {/* Right Column - Stats & Sectors */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className=" flex justify-center items-center"
          >
            {/* Stats Grid */}
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
                    className="w-[100%] bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-xl border border-white/20 hover:shadow-2xl transition-all"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="text-primary mb-3 flex justify-center"
                    >
                      <IconComponent className="w-7 h-7" />
                    </motion.div>
                    
                    <div className="text-2xl font-virtual text-primary mb-1">
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
      </div>
    </section>
  );
};

export default TestimonialsTrust;
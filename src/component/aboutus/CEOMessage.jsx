"use client"
import { motion } from 'framer-motion';
import { Quote, Signature, Award, Target, Heart, Sparkles, Globe, Star, Zap } from 'lucide-react';
import Image from 'next/image/';

const FoundersMessage = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTIgMTJoNHY0aC00ek0yNCAyNGg0djRoLTR6TTM2IDM2aDR2NGgtNHoiIHN0cm9rZT0iIzFmNDY2OCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
   

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Founder Image & Bio - Enhanced with premium styling */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-2/5 flex flex-col items-center"
          >
            <div className="relative mb-8 group">
              {/* Main image container with elegant frame */}
              <div className="relative w-72 h-72 md:w-88 md:h-88 overflow-hidden rounded-2xl shadow-2xl transform group-hover:shadow-2xl transition-all duration-500">
                <Image
                  src="/images//team/ceo.png"
                  alt="Hazrat Usman  - Founder & President of ByteSynq"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-primary/10 rounded-full -z-10 group-hover:scale-110 transition-transform duration-700"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-secondary/10 rounded-full -z-10 group-hover:scale-110 transition-transform duration-700"></div>
              
              {/* Floating elements */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
              >
                <Star className="w-5 h-5 text-secondary fill-current" />
              </motion.div>
            </div>

            <div className="text-center mt-6">
              <div className="flex items-center justify-center mb-3">
                <Signature className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-2xl font-semibold text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Hazrat Usman
                </h3>
              </div>
              <p className="text-gray-600 mb-6">Founder & CEO, ByteSynq Solution</p>
              
              {/* Enhanced values indicators */}
              <div className="flex justify-center gap-6 mt-8">
                {[
                  { icon: Target, label: "Vision", color: "primary" },
                  { icon: Heart, label: "Passion", color: "secondary" },
                  { icon: Award, label: "Excellence", color: "primary" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="flex flex-col items-center group"
                  >
                    <div className={`p-3 bg-${item.color}/10 rounded-2xl mb-2 transform group-hover:scale-110 group-hover:bg-${item.color}/20 transition-all duration-300 shadow-sm`}>
                      <item.icon className={`w-5 h-5 text-${item.color}`} />
                    </div>
                    <span className="text-xs text-gray-500 font-medium">{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Founder's Message - Premium enhanced */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-3/5"
          >
            <div className="relative">
             

              {/* Premium message card */}
              <div className="bg-white/80 p-10 rounded-3xl shadow-lg backdrop-blur-sm border border-slate-100 relative overflow-hidden">
                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full"></div>
                
                <div className="relative z-10">
                  <p className="text-lg text-gray-700 leading-relaxed mb-8 relative pl-6 border-l-2 border-primary/30">
                    <span className="absolute -left-1 text-primary text-2xl">"</span>
                    When I started ByteSynq, the idea was simple: to help organizations present themselves with clarity and confidence. I believed then, as I do now, that every business, NGO, and initiative has a unique story — and that story deserves to be told in a way that inspires trust and drives impact.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    From working remotely in the early days to opening offices in Kabul and San Diego, our journey has been one of growth, learning, and staying true to quality. Each project we take on is personal — we invest ourselves fully because we know our work can make a real difference for the people and organizations we serve.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Today, ByteSynq is more than a service provider. We are a partner — listening, understanding, and working side by side with our clients to turn ideas into results.
                  </p>
                </div>

                {/* Highlighted mission statement */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-10 p-6 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border-l-4 border-secondary relative overflow-hidden"
                >
                  <div className="absolute -right-4 -bottom-4 opacity-10">
                    <Zap className="w-24 h-24 text-secondary" />
                  </div>
                  <p className="text-primary font-semibold text-lg italic relative z-10">
                    "Our mission: To transform how organizations tell their stories and connect with their audiences."
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Enhanced Stats / Achievements */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
            >
              {[
                { value: "10+", label: "Years Experience", icon: Award },
                { value: "500+", label: "Projects Delivered", icon: Target },
                { value: "2", label: "Global Offices", icon: Globe },
                { value: "98%", label: "Client Satisfaction", icon: Heart }
              ].map((stat, index) => (
                <div key={index} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 text-center group hover:shadow-md transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-3 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-2xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FoundersMessage;
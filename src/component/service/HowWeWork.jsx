"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  PenTool, 
  Users, 
  Rocket, 
  BarChart3,
  ArrowRight
} from 'lucide-react';

const HowWeWork = () => {
  const processSteps = [
    {
      id: 1,
      title: "Discover",
      description: "We immerse ourselves in your world through in-depth consultations and research to understand your core challenges, goals, and audience.",
      icon: <Search className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Design",
      description: "Our teams collaborate to craft tailored solutions, transforming strategy into actionable plans and compelling creative concepts.",
      icon: <PenTool className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "Refine",
      description: "We believe in true partnership. We present our work, integrate your feedback, and perfect every detail to meet the highest standards.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      id: 4,
      title: "Implement",
      description: "We ensure a seamless launch, providing the support and training needed to successfully activate your new solution or strategy.",
      icon: <Rocket className="w-6 h-6" />,
    },
    {
      id: 5,
      title: "Evolve",
      description: "We measure results, analyze impact, and plan for future growth, ensuring our work delivers lasting value and long-term success.",
      icon: <BarChart3 className="w-6 h-6" />,
    }
  ];

  return (
    <section className="py-16 px-4 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-2 md:pb-15 pb-5"
        >
          <h2 className="text-3xl md:text-5xl   tracking-wider font-virtual text-primary lowercase">
            Our <span className="text-secondary">Process</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A clear, collaborative framework designed to translate your vision into measurable impact.
          </p>
        </motion.div>

        {/* Process Steps - Horizontal Timeline Layout */}
        <div className="relative">
          {/* Connector Line */}
          <div className="absolute left-0 right-0 top-8 h-0.5 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Icon Circle */}
                <div className="relative mb-6">
                  {/* Animated Ring Effect on Hover */}
                  <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-125 transition-transform duration-500"></div>
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-primary flex items-center justify-center relative z-10 shadow-lg group-hover:shadow-primary/20 group-hover:scale-110 transition-all duration-300">
                    {step.icon}
                  </div>
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {step.id}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-virtual text-primary lowercase text-lg mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {/* {step.description} */}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      
      </div>

      {/* Background Decorations */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-secondary/5 blur-3xl"></div>
    </section>
  );
};

export default HowWeWork;
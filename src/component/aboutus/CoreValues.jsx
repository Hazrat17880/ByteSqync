"use client"
import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Lightbulb, Shield, TrendingUp, Users, Sparkles, Zap } from 'lucide-react';

const CoreValuesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState(null);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1 + 0.4,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const coreValues = [
    { 
      icon: <Lightbulb className="w-6 h-6" />, 
      title: "Innovation", 
      desc: "Staying at the forefront of industry trends", 
    },
    { 
      icon: <TrendingUp className="w-6 h-6" />, 
      title: "Empowerment", 
      desc: "Empowering clients and employees to achieve goals", 
    },
    { 
      icon: <Users className="w-6 h-6" />, 
      title: "Collaboration", 
      desc: "Working as an extension of our clients' teams", 
    },
    { 
      icon: <Heart className="w-6 h-6" />, 
      title: "Customer-Centric", 
      desc: "Creating tailored solutions for measurable success", 
    },
    { 
      icon: <Shield className="w-6 h-6" />, 
      title: "Adaptability", 
      desc: "Staying agile in changing markets", 
    },
  ];

  return (
    <section className="py-20 px-4 bg-slate-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-virtual text-primary mb-6 lowercase">
            Core <span className="text-secondary">Values</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do at PIXI Creative
          </p>
        </motion.div>

        {/* Values Cards - Horizontal Timeline Layout */}
        <div className="relative">
          {/* Connector Line */}
          <div className="absolute left-0 right-0 top-8 h-0.5 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Icon Circle */}
                <div className="relative mb-6">
                  {/* Animated Ring Effect on Hover */}
                  <div className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-125 transition-transform duration-500"></div>
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-primary flex items-center justify-center relative z-10 shadow-lg group-hover:shadow-primary/20 group-hover:scale-110 transition-all duration-300 text-primary">
                    {value.icon}
                  </div>
                  {/* Value Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-virtual text-primary lowercase text-lg mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.desc}
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

export default CoreValuesSection;
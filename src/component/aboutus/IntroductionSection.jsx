"use client"
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Users, Lightbulb, ArrowRight, Palette, Brush, Code, Zap, Camera, PenTool } from 'lucide-react';
 import {  Smartphone, Cpu, BookOpen, Rocket } from "lucide-react";


const IntroductionSection = () => {
  const ref = useRef(null);
  const canvasRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState(null);

  // Canvas animation for background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        this.color = `rgba(39, 170, 225, ${Math.random() * 0.1})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.speedY = -this.speedY;
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    const initParticles = () => {
      particles = [];
      const numberOfParticles = Math.min(canvas.width * canvas.height / 15000, 100);
      
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw subtle gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(236, 236, 234, 0.9)');
      gradient.addColorStop(1, 'rgba(236, 236, 234, 0.9)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Draw connecting lines
      ctx.strokeStyle = 'rgba(31, 70, 104, 0.2)';
      ctx.lineWidth = 0.5;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const primaryColor = "#0A66C2"; // or your brand's main color
const secondaryColor = "#00BFA6"; // your accent/secondary color


  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut', delay: i * 0.2 },
    }),
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

  // PIXI services data
  const pixiServices = [


  {
    icon: <Code className="h-6 w-6 text-[#27AAE1]" />,
    name: "Web Application Development",
  },
  {
    icon: <Smartphone className="h-6 w-6 text-[#27AAE1]" />,
    name: "Android App Development",
  },
  {
    icon: <Cpu className="h-6 w-6 text-[#27AAE1]" />,
    name: "Custom Software Solutions",
  },
  {
    icon: <Palette className="h-6 w-6 text-[#27AAE1]" />,
    name: "Branding & Creative Identity",
  },
  {
    icon: <Brush className="h-6 w-6 text-[#27AAE1]" />,
    name: "Graphic Design",
  },
  {
    icon: <PenTool className="h-6 w-6 text-[#27AAE1]" />,
    name: "UI/UX Design",
  },
  {
    icon: <Zap className="h-6 w-6 text-[#27AAE1]" />,
    name: "Digital Marketing & SEO",
  },
  {
    icon: <BookOpen className="h-6 w-6 text-[#27AAE1]" />,
    name: "Training & Workshops",
  },
  {
    icon: <Rocket className="h-6 w-6 text-[#27AAE1]" />,
    name: "System Integration & Deployment",
  },
];

  return (
    <section className='relative bg-gray-100 md:py-5 md:pt-12  md:min-h-screen flex justify-center items-center py-12'>
      {/* Animated canvas background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />
      
      <div
        style={{zIndex: 1}}
        id="introduction"
        className="relative px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto rounded-xl overflow-hidden"
      >
        <div className="mt-2 md:pb-15 pb-5 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8 mt-2 md:pb-15 pb-5">
            <motion.h2
              className="text-3xl md:text-5xl  text-primary lowercase font-virtual tracking-wider"
              style={{ fontFamily: 'virtual' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Where <span className="text-[#27AAE1]">creativity</span><br className='hidden md:block'/> meets Innovation
            </motion.h2>

            <motion.div
              className="relative pl-6 border-l-4 border-[#27AAE1]"
              custom={1}
              variants={fadeUp}
            >
              <p className="text-lg leading-relaxed text-gray-600" style={{ fontFamily: 'poppin, sans-serif' }}>
                Transforming visions into extraordinary digital experiences with a touch of <span className="font-semibold text-[#27AAE1]">ByteSqynq</span> magic.
              </p>
            </motion.div>
          </div>

          {/* Right Column */}
          <motion.div
            className="space-y-3"
            custom={2}
            variants={fadeUp}
          >
            <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'poppin, sans-serif' }}> 
              <span className="font-semibold text-[#27AAE1]">ByteSyncq</span> is a dynamic and innovative digital marketing and design agency that delivers 
              high-quality, tailored solutions for businesses looking to strengthen their brand presence and 
              engage their target audience.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: 'poppin, sans-serif' }}>
              With a passion for creativity and a focus on results, we specialize in branding, 
              graphic design, web development, and digital marketing strategies.
            </p>
          </motion.div>
        </div>

        {/* Additional content from original component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 } }
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-5"
        >
          {/* PIXI Services Grid */}
         <div className="mb-20 py-8 bg-gradient-to-br from-white to-gray-50 rounded-3xl border border-gray-200">
  {/* Header */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    

    <h3 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
      <span style={{ color: primaryColor }}>ByteSynq</span>{" "}
      <span style={{ color: secondaryColor }}>Services</span>
    </h3>
    
    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
      End-to-end digital solutions designed to transform your business through innovative technology.
    </p>
  </motion.div>

  {/* Services Grid */}
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {pixiServices.map((service, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          whileHover={{ 
            scale: 1.05, 
            y: -5,
            transition: { duration: 0.3 }
          }}
          className="group relative"
        >
          {/* Card */}
          <div 
            className="flex flex-col items-center p-6 rounded-2xl bg-white border border-gray-200 hover:border-gray-300 shadow-sm hover:shadow-lg transition-all duration-500 cursor-pointer h-full relative overflow-hidden"
          >
            {/* Hover Background Effect */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
              style={{ 
                background: `linear-gradient(135deg, ${primaryColor}08, ${secondaryColor}08)` 
              }}
            />
            
            {/* Icon Container */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-all duration-300"
              style={{ 
                background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` 
              }}
            >
              <div className="text-white text-lg">
                {service.icon}
              </div>
            </motion.div>
            
            {/* Service Name */}
            <span className="relative z-10 text-xs font-bold text-gray-800 text-center leading-tight group-hover:text-gray-900 transition-colors duration-300 uppercase tracking-wide">
              {service.name}
            </span>
            
            {/* Hover Effect Line */}
            <div 
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 group-hover:w-3/4 transition-all duration-500 rounded-full"
              style={{ backgroundColor: primaryColor }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Stats Bar */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 0.8 }}
    className="max-w-4xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 px-6"
  >
    {[
      { number: "50+", label: "Projects" },
      { number: "25+", label: "Clients" },
      { number: "15+", label: "Technologies" },
      { number: "98%", label: "Satisfaction" }
    ].map((stat, index) => (
      <motion.div 
        key={index}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
        className="text-center"
      >
        <div 
          className="text-2xl md:text-3xl font-bold mb-2"
          style={{ color: primaryColor }}
        >
          {stat.number}
        </div>
        <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
      </motion.div>
    ))}
  </motion.div>

  {/* CTA Section */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: 1.2 }}
    className="text-center mt-16"
  >
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="px-8 py-4 text-white font-semibold rounded-2xl hover:shadow-lg transition-all duration-300 flex items-center gap-3 mx-auto"
      style={{ 
        background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` 
      }}
    >
      <span>Start Your Project</span>
      <ArrowRight className="w-5 h-5" />
    </motion.button>
  </motion.div>
</div>
          
          {/* Values Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: <Target className="h-8 w-8" />,
                title: "Focused Approach",
                desc: "Tailored strategies that deliver measurable results",
             
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Client-Centric",
                desc: "Your success is at the heart of everything we do",
               
              },
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Innovative Solutions",
                desc: "Cutting-edge approaches for modern challenges",
               
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={ "visible" }
                whileHover={{ y: -5 }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                className="p-6 rounded-lg border border-gray-200 bg-white group cursor-pointer transition-all duration-300 hover:shadow-md"
              >
                <div className={`text-primary mb-4 transition-colors duration-300`}>
                  {card.icon}
                </div>
                
                <h4 className={` text-lg mb-3 text-gray-900 group-hover:text-primary transition-colors duration-300 text-primary`}  style={{fontFamily:'virtual'}}>
                  {card.title}
                </h4>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {card.desc}
                </p>
                
                {/* <div className="mt-4 flex items-center text-sm font-medium text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn more</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </div> */}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
    </section>
  );
};

export default IntroductionSection;
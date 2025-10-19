"use client"
import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Code, Globe, Heart, Lightbulb, Star, TrendingUp, Users, Sparkles, Zap, ArrowRight } from 'lucide-react';
import HoverableText from '../common/HoverText';

const USPSection = () => {
  const ref = useRef(null);
  const canvasRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

    // Particle class with subtle colors
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;
        
        // Subtle color variations
        const colorShades = [
          `rgba(156, 163, 175, ${Math.random() * 0.1})`,  // gray-400
          `rgba(107, 114, 128, ${Math.random() * 0.1})`,  // gray-500
          `rgba(75, 85, 99, ${Math.random() * 0.1})`,     // gray-600
        ];
        this.color = colorShades[Math.floor(Math.random() * colorShades.length)];
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
      gradient.addColorStop(0, 'rgba(249, 250, 251, 0.9)');  // gray-50
      gradient.addColorStop(1, 'rgba(243, 244, 246, 0.9)');  // gray-100
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      // Draw connecting lines
      ctx.strokeStyle = 'rgba(156, 163, 175, 0.1)';  // gray-400 with low opacity
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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const uspItems = [
    { icon: <Star className="h-7 w-7" />, title: "Creative Expertise", desc: "Proven results with skilled professionals", color: "yellow" },
    { icon: <Globe className="h-7 w-7" />, title: "End-to-End Solutions", desc: "Comprehensive services under one roof", color: "blue" },
    { icon: <Heart className="h-7 w-7" />, title: "Industry Partnerships", desc: "Strong partnerships with leading platforms", color: "pink" },
    { icon: <Users className="h-7 w-7" />, title: "Client-Centric Approach", desc: "Focus on understanding client needs", color: "green" },
    { icon: <Code className="h-7 w-7" />, title: "Cutting-Edge Technology", desc: "State-of-the-art tools and technologies", color: "purple" },
    { icon: <Award className="h-7 w-7" />, title: "Global Perspective", desc: "Blend of global expertise and local insights", color: "indigo" },
    { icon: <Lightbulb className="h-7 w-7" />, title: "Innovative Strategies", desc: "Memorable and enduring brand identities", color: "amber" },
    { icon: <TrendingUp className="h-7 w-7" />, title: "Scalable Solutions", desc: "Services designed to grow with your business", color: "teal" },
  ];

  const getColorClass = (color, type = "bg") => {
    const colorMap = {
      yellow: {
        bg: 'bg-yellow-100',
        text: 'text-yellow-600',
        hover: 'group-hover:bg-yellow-200',
        border: 'border-yellow-200'
      },
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-600',
        hover: 'group-hover:bg-blue-200',
        border: 'border-blue-200'
      },
      pink: {
        bg: 'bg-pink-100',
        text: 'text-pink-600',
        hover: 'group-hover:bg-pink-200',
        border: 'border-pink-200'
      },
      green: {
        bg: 'bg-green-100',
        text: 'text-green-600',
        hover: 'group-hover:bg-green-200',
        border: 'border-green-200'
      },
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-600',
        hover: 'group-hover:bg-purple-200',
        border: 'border-purple-200'
      },
      indigo: {
        bg: 'bg-indigo-100',
        text: 'text-indigo-600',
        hover: 'group-hover:bg-indigo-200',
        border: 'border-indigo-200'
      },
      amber: {
        bg: 'bg-amber-100',
        text: 'text-amber-600',
        hover: 'group-hover:bg-amber-200',
        border: 'border-amber-200'
      },
      teal: {
        bg: 'bg-teal-100',
        text: 'text-teal-600',
        hover: 'group-hover:bg-teal-200',
        border: 'border-teal-200'
      },
    };
    return colorMap[color][type] || colorMap.blue[type];
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden bg-gray-100">
      {/* Animated canvas background */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full"
      />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mt-2 md:pb-15 pb-5"
        >
        
          
          <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl  text-primary tracking-wider font-virtual lowercase">
           our unique <span className='text-secondary'>
          Advantages
           </span>
          
          </motion.h2>
           
          <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what sets us apart and makes PIXI the perfect partner for your creative journey
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {uspItems.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 group relative"
            >
              <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-primary text-white  mb-5 transition-colors duration-300`}>
                {item.icon}
              </div>
              
              <h3 className="font-bold text-lg mb-3 text-primary transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {item.desc}
              </p>
              
            
              
              {/* Hover effect element */}
              <div className={`absolute inset-0 rounded-xl ${getColorClass(item.color, "bg")} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`} />
            </motion.div>
          ))}
        </motion.div>

   
        
        {/* Decorative elements */}
        <div className="absolute -left-20 top-1/4 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -right-20 bottom-1/4 w-40 h-40 bg-indigo-200 rounded-full blur-3xl opacity-30"></div>
      </div>
    </section>
  );
};

export default USPSection;
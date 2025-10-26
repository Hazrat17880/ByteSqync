"use client"
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion'; // Add this import
import { 
  Phone, Mail, MapPin, Facebook, Instagram, 
  Linkedin, Clock, MessageCircle, Zap,
  ArrowRight, MessageSquare
} from 'lucide-react';
import HoverableText from '../common/HoverText';

export default function UltraPremiumContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const canvasRef = useRef(null);

  // Color constants - Using only primary and secondary
  const primaryColor = '#0A66C2'; // Professional Blue
  const secondaryColor = '#00BFA6'; // Professional Teal

  // Particle effect for background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    const particles = [];
    const particleCount = window.innerWidth < 768 ? 15 : 30;
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.3 + 0.1
      });
    }
    
    function drawParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#f8fafc';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(10, 102, 194, ${particle.opacity})`; // Using primary color
        ctx.fill();
        
        particle.y -= particle.speed;
        if (particle.y < 0) {
          particle.y = canvas.height;
          particle.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(drawParticles);
    }
    
    drawParticles();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      {/* Animated background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Premium header with animation */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-3 bg-white rounded-2xl px-6 py-3 mb-6 border border-gray-200 shadow-sm"
          >
            <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: secondaryColor }} />
            <span 
              className="text-sm font-semibold tracking-widest uppercase"
              style={{ color: primaryColor }}
            >
              Get In Touch
            </span>
          </motion.div>
           
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span style={{ color: primaryColor }}>Let's Create</span>{' '}
            <span style={{ color: secondaryColor }}>Magic</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your vision deserves our expertise. Let's start an extraordinary conversation about your next big project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Information */}
          <div className="space-y-8">
            {/* Premium contact card */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden">
              <div 
                className="absolute -top-6 -right-6 w-28 h-28 rounded-full filter blur-3xl opacity-10"
                style={{ backgroundColor: secondaryColor }}
              />
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div 
                  className="p-3 rounded-xl"
                  style={{ backgroundColor: `${primaryColor}15` }}
                >
                  <MessageCircle className="w-6 h-6" style={{ color: primaryColor }} />
                </div>
                <span style={{ color: primaryColor }}>Contact Information</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div 
                    className="p-3 rounded-xl mr-4 transform group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-700 mt-1">+93 315 944 92 46</p>
                    <p className="text-gray-700">+93 78 168 0769</p>
                    <p className="flex items-center mt-2 text-sm" style={{ color: secondaryColor }}>
                      <Clock className="w-4 h-4 mr-2" /> Available 24/7 for urgent matters
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div 
                    className="p-3 rounded-xl mr-4 transform group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-700 mt-1">bytesynq.tech@gmail.com</p>
                    <p className="flex items-center mt-2 text-sm" style={{ color: secondaryColor }}>
                      <Zap className="w-4 h-4 mr-2" /> We respond within 2 business hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div 
                    className="p-3 rounded-xl mr-4 transform group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundColor: primaryColor }}
                  >
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Visit Us</h3>
                    <p className="text-gray-700 mt-1 text-sm">Cinema Zainab Road, Shahr – Naw, Kabul</p>
                    <p className="text-gray-700 text-sm">Elanza Mall D-Block, Gulderberg Desidinca Islamabad</p>
                    <p className="flex items-center mt-2 text-sm" style={{ color: secondaryColor }}>
                      <Clock className="w-4 h-4 mr-2" /> Schedule an appointment first
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media - Premium Design */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden">
              <div 
                className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full filter blur-3xl opacity-10"
                style={{ backgroundColor: primaryColor }}
              />
              
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div 
                  className="p-3 rounded-xl"
                  style={{ backgroundColor: `${secondaryColor}15` }}
                >
                  <MessageSquare className="w-6 h-6" style={{ color: secondaryColor }} />
                </div>
                <span style={{ color: primaryColor }}>Connect With Us</span>
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Facebook, name: 'Facebook', color: primaryColor },
                  { icon: Instagram, name: 'Instagram', color: primaryColor },
                  { icon: MessageSquare, name: 'WhatsApp', color: secondaryColor },
                  { icon: Linkedin, name: 'LinkedIn', color: primaryColor }
                ].map((social, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="flex items-center justify-center p-4 rounded-xl transition-all transform hover:scale-105 hover:shadow-lg border-2"
                    style={{ 
                      borderColor: social.color,
                      color: social.color
                    }}
                  >
                    <social.icon className="w-5 h-5 mr-3" />
                    <span className="font-semibold">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Premium Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 relative overflow-hidden">
            <div 
              className="absolute -top-12 -right-12 w-40 h-40 rounded-full filter blur-3xl opacity-10"
              style={{ backgroundColor: secondaryColor }}
            />
            
            <div className="flex items-center mb-8">
              <div 
                className="p-4 rounded-xl mr-4"
                style={{ backgroundColor: primaryColor }}
              >
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold" style={{ color: primaryColor }}>
                  Send a Message
                </h2>
                <p className="text-gray-600">Tell us about your project and we'll craft the perfect solution</p>
              </div>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div 
                  className="inline-flex items-center justify-center p-4 rounded-full mb-4"
                  style={{ backgroundColor: `${secondaryColor}20` }}
                >
                  <svg className="w-8 h-8" style={{ color: secondaryColor }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-600">We'll get back to you within 2 business hours. Thank you!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:border-transparent transition-all bg-white"
                      style={{ focusRingColor: primaryColor }}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:border-transparent transition-all bg-white"
                      style={{ focusRingColor: primaryColor }}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:border-transparent transition-all bg-white"
                    style={{ focusRingColor: primaryColor }}
                    placeholder="What is this regarding?"
                    required
                  />
                </div>

                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:border-transparent transition-all bg-white resize-none"
                      style={{ focusRingColor: primaryColor }}
                      placeholder="Tell us about your project or inquiry..."
                      required
                    ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-xl font-semibold text-lg flex items-center justify-center transition-all transform hover:scale-105 group"
                  style={{ 
                    background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
                    color: 'white'
                  }}
                >
                  Send Message
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Trust Section */}
        <div className="text-center mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "50+", label: "Projects" },
              { number: "25+", label: "Clients" },
              { number: "15+", label: "Technologies" },
              { number: "98%", label: "Satisfaction" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div 
                  className="text-3xl font-bold mb-2"
                  style={{ color: primaryColor }}
                >
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
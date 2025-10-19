"use client"
import { useState, useRef, useEffect } from 'react';
import { 
  Phone, Mail, MapPin, Facebook, Instagram, 
  Linkedin, Clock, MessageCircle, Zap,
  ArrowRight, Globe, MessageSquare
} from 'lucide-react';
import HoverableText from '../common/HoverText';
import OurClients from '../aboutus/OurClients';

export default function UltraPremiumContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const canvasRef = useRef(null);

  // Color constants
  const primaryColor = '#1f4668';
  const accentColor = '#27AAE1';

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
        ctx.fillStyle = `rgba(39, 170, 225, ${particle.opacity})`;
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
    <div className="min-h-screen bg-slate-50 relative overflow-hidden md:py-12 py-16 px-4 sm:px-6 lg:px-8">
      {/* Animated background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      {/* Main content */}
      <div className="relative z-10 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Premium header with animation */}
          <div className="text-center mb-10 md:mb-16 relative">
           
            <h1 className="text-3xl md:text-5xl   mb-3">
                <HoverableText text={`Let's Create Magic`} color='text-[#1f4668]'/>
            </h1>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your vision deserves our <span className="font-semibold text-[#27AAE1]">
               ByteSynq magic
              </span>. 
              Let's start an extraordinary conversation about your next big project.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Left Column - Contact Information */}
            <div className="space-y-6 md:space-y-8">
              {/* Premium contact card */}
              <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg border border-gray-100 relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-20 h-20 md:-top-6 md:-right-6 md:w-28 md:h-28 bg-[#27AAE1] rounded-full filter blur-2xl opacity-15"></div>
                <h2 className="text-xl md:text-2xl text-[#1f4668] mb-5 md:mb-6 flex items-center lowercase" style={{fontFamily:'virtual'}}>
                  
                  Contact Information
                </h2>
                
                <div className="space-y-5 md:space-y-6">
                  <div className="flex items-start group">
                    <div className="bg-[#1f4668] p-2 md:p-3 rounded-lg mr-3 md:mr-4 transform group-hover:scale-105 transition-transform duration-300">
                      <Phone className="h-4 w-4 md:h-5 md:w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-gray-900">Call Us</h3>
                      <p className="text-gray-700 mt-1 text-sm md:text-base">+93 315 944 92 46</p>
                      <p className="text-gray-700 text-sm md:text-base">+93 78 168 0769</p>
                      <p className="text-[#27AAE1] text-xs mt-1 flex items-center">
                        <Clock className="h-3 w-3 mr-1" /> Available 24/7 for urgent matters
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="bg-[#1f4668] p-2 md:p-3 rounded-lg mr-3 md:mr-4 transform group-hover:scale-105 transition-transform duration-300">
                      <Mail className="h-4 w-4 md:h-5 md:w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-gray-900">Email Us</h3>
                      <p className="text-gray-700 mt-1 text-sm md:text-base">bytesynq.tech@gmail.com</p>
                      <p className="text-[#27AAE1] text-xs mt-1 flex items-center">
                        <Zap className="h-3 w-3 mr-1" /> We respond within 2 business hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start group">
                    <div className="bg-[#1f4668] p-2 md:p-3 rounded-lg mr-3 md:mr-4 transform group-hover:scale-105 transition-transform duration-300">
                      <MapPin className="h-4 w-4 md:h-5 md:w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-semibold text-gray-900">Visit Us</h3>
                      <p className="text-gray-700 mt-1 text-xs md:text-sm">Cinema Zainab Road, Shahr – Naw, Kabul</p>
                      <p className="text-gray-700 text-xs md:text-sm">Elanza Mall D-Block , Gulderberg Desidinca Islamabad</p>
                      <p className="text-[#27AAE1] text-xs mt-1 flex items-center">
                        <Clock className="h-3 w-3 mr-1" /> Schedule an appointment first
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media - Premium Design */}
              <div className="bg-primary rounded-xl md:rounded-2xl p-5 md:p-8 text-white shadow-lg relative overflow-hidden">
                <div className="absolute -bottom-4 -left-4 w-20 h-20 md:-bottom-6 md:-left-6 md:w-28 md:h-28 bg-[#27AAE1] rounded-full filter blur-2xl opacity-15"></div>
              
                
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {[
                    { icon: Facebook, name: 'Facebook' },
                    { icon: Instagram, name: 'Instagram' },
                    { icon: MessageSquare, name: 'WhatsApp' },
                    { icon: Linkedin, name: 'LinkedIn' }
                  ].map((social, index) => (
                    <a 
                      key={index} 
                      href="#" 
                      className="flex items-center justify-center p-2 md:p-3 bg-primary text-white rounded-lg transition-all transform hover:scale-105  text-xs md:text-sm"
                    >
                      <social.icon className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Premium Contact Form */}
            <div className="bg-white rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg border border-gray-100 relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-28 h-28 md:-top-12 md:-right-12 md:w-40 md:h-40 bg-[#27AAE1] rounded-full filter blur-2xl opacity-10"></div>
              
              <div className="flex items-center mb-5 md:mb-8">
                <div className="bg-[#1f4668] p-2 md:p-3 rounded-lg mr-3 md:mr-4">
                  <MessageCircle className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl text-[#1f4668] flex items-center lowercase" style={{fontFamily:'virtual'}}>
                    Send a Message
                  </h2>
                  <p className="text-gray-600 text-xs md:text-sm">Tell us about your project and we'll craft a magical solution</p>
                </div>
              </div>

              {isSubmitted ? (
                <div className="text-center py-8 md:py-12">
                  <div className="inline-flex items-center justify-center p-3 md:p-4 bg-green-100 rounded-full mb-3 md:mb-4">
                    <svg className="h-6 w-6 md:h-8 md:w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600 text-xs md:text-sm">We'll get back to you within 2 business hours. Thank you!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <div className="relative">
                      <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1 ml-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#27AAE1] focus:border-transparent transition-all bg-white"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div className="relative">
                      <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1 ml-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#27AAE1] focus:border-transparent transition-all bg-white"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="subject" className="block text-xs font-medium text-gray-700 mb-1 ml-1">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#27AAE1] focus:border-transparent transition-all bg-white"
                      placeholder="What is this regarding?"
                      required
                    />
                  </div>

                  <div className="relative">
                    <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1 ml-1">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-3 py-2 md:px-4 md:py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#27AAE1] focus:border-transparent transition-all bg-white"
                      placeholder="Tell us about your project or inquiry..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#1f4668] text-white py-2 md:py-3 px-4 rounded-lg font-semibold text-sm md:text-base flex items-center justify-center transition-all transform hover:bg-[#15324c] hover:shadow-md group"
                  >
                    Send Message
                    <ArrowRight className="h-3 w-3 md:h-4 md:w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Premium trust section */}
          
        </div>
      </div>
    </div>
  );
}
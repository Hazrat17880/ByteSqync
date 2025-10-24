'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'react-toastify';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay: i * 0.2 },
  }),
};

export default function ContactComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success(result.message || 'Message sent successfully!');
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        toast.error(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className='relative bg-gray-950 lg:h-screen h-full flex items-center py-12 md:py-16 lg:py-24 mb-4 md:mb-6 lg:mb-8'>
    
      
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Full-height background image */}
        <Image
          src="/images/office.JPG"
          alt="Contact background"
          fill
          className="object-cover opacity-20"
          quality={90}
          priority
        />
      </div>

      <div className="relative z-10 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-3 mt-2 md:pb-15 pb-5">
            <motion.h2
              className="text-2xl md:text-3xl lg:text-5xl  text-white tracking-wider lowercase"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{ fontFamily: 'virtual, sans-serif' }}
            >
              LET'S MAKE
              <br className='hidden md:block' /> MAKE IMPACT
              <br className='hidden md:block' /> <span className='text-secondary'>
                TOGETHER
              </span>
            </motion.h2>

            <motion.div
              className="relative pl-6 border-l-4 border-primary"
              custom={1}
              variants={fadeUp}
            >
              <p className="text-lg text-gray-300 leading-relaxed" style={{ fontFamily: 'poppin, sans-serif' }}>
                Welcome to <span className="font-semibold text-secondary">ByteSqnc</span> where your ideas come to life. 
                We specialize in crafting unique brands, captivating advertising campaigns, 
                and effective digital strategies.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Form */}
          <motion.div
            className="bg-gray-900/80 backdrop-blur-sm md:p-8 px-2 py-4 rounded-xl border border-gray-800 "
            custom={2}
            variants={fadeUp}
          >
            <h3 className="text-2xl lowercase text-white mb-6" style={{ fontFamily: 'virtual, sans-serif' }}>Get in Touch</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EB5935]"
                  style={{ fontFamily: 'poppin, sans-serif' }}
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EB5935]"
                  style={{ fontFamily: 'poppin, sans-serif' }}
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows={4}
                  value={formData.message}
                  minLength={10}
                  onChange={handleInputChange}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#EB5935]"
                  style={{ fontFamily: 'poppin, sans-serif' }}
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-[#d94c2e] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: 'poppin, sans-serif' }}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
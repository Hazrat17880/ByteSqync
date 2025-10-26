"use client";
import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Phone,
  ArrowUp,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Github
} from 'lucide-react';

const Footer = () => {
  const primaryColor = "#0A66C2";
  const secondaryColor = "#00BFA6";
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  const servicesLinks = [
    { name: 'UI/UX Design', href: '#services' },
    { name: 'Web Development', href: '#services' },
    { name: 'Mobile Development', href: '#services' },
    { name: 'Software Testing', href: '#services' },
    { name: 'Consulting', href: '#services' },
    { name: 'Digital Solutions', href: '#services' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-[#1F4668] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
            
            {/* Column 1: Brand Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center mb-4">
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-3"
                  style={{ background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})` }}
                >
                  BS
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  ByteSynq
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                Transforming ideas into innovative digital solutions. We deliver cutting-edge
                software development and consulting services to drive your business forward.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = secondaryColor;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Column 2: Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-300 transition-colors duration-300 flex items-center group"
                      style={{
                        color: 'rgb(209, 213, 219)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = secondaryColor;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgb(209, 213, 219)';
                      }}
                    >
                      <span 
                        className="w-1 h-1 rounded-full mr-3 transition-opacity duration-300"
                        style={{ 
                          backgroundColor: secondaryColor,
                          opacity: 0
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.opacity = '1';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.opacity = '0';
                        }}
                      />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Column 3: Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
              <ul className="space-y-3">
                {servicesLinks.map((service, index) => (
                  <motion.li
                    key={service.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={service.href}
                      className="text-gray-300 transition-colors duration-300 flex items-center group"
                      style={{
                        color: 'rgb(209, 213, 219)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = secondaryColor;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgb(209, 213, 219)';
                      }}
                    >
                      <span 
                        className="w-1 h-1 rounded-full mr-3 transition-opacity duration-300"
                        style={{ 
                          backgroundColor: secondaryColor,
                          opacity: 0
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.opacity = '1';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.opacity = '0';
                        }}
                      />
                      {service.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Column 4: Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <Mail 
                    className="w-5 h-5 mt-0.5 flex-shrink-0" 
                    style={{ color: secondaryColor }}
                  />
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a 
                      href="mailto:info@bytesynq.com" 
                      className="transition-colors duration-300"
                      style={{ color: 'white' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = secondaryColor;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'white';
                      }}
                    >
                      info@bytesynq.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <Phone 
                    className="w-5 h-5 mt-0.5 flex-shrink-0" 
                    style={{ color: secondaryColor }}
                  />
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <a 
                      href="tel:+93705155015" 
                      className="transition-colors duration-300"
                      style={{ color: 'white' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = secondaryColor;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'white';
                      }}
                    >
                      +93 705 155 015
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <MapPin 
                    className="w-5 h-5 mt-0.5 flex-shrink-0" 
                    style={{ color: secondaryColor }}
                  />
                  <div>
                    <p className="text-gray-300 text-sm">Location</p>
                    <p className="text-white text-sm">Islamabad & San Francisco</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-gray-400 text-sm text-center md:text-left"
              >
                © {currentYear} ByteSynq Solution. All rights reserved.
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-6 text-sm"
              >
                <a 
                  href="/privacy" 
                  className="transition-colors duration-300"
                  style={{ color: 'rgb(156, 163, 175)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = secondaryColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgb(156, 163, 175)';
                  }}
                >
                  Privacy Policy
                </a>
                <a 
                  href="/terms" 
                  className="transition-colors duration-300"
                  style={{ color: 'rgb(156, 163, 175)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = secondaryColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgb(156, 163, 175)';
                  }}
                >
                  Terms of Service
                </a>
                <a 
                  href="/cookies" 
                  className="transition-colors duration-300"
                  style={{ color: 'rgb(156, 163, 175)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = secondaryColor;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgb(156, 163, 175)';
                  }}
                >
                  Cookie Policy
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 0.6 }}
        viewport={{ once: true }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 z-50 group"
        style={{
          background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`
        }}
        aria-label="Scroll to top"
        whileHover={{ scale: 1.1, y: -2 }}
      >
        <ArrowUp className="w-5 h-5 text-white mx-auto group-hover:-translate-y-0.5 transition-transform duration-300" />
      </motion.button>
    </footer>
  );
};

export default Footer;
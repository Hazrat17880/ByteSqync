"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const AboutCompany = () => {
  const features = [
    "Highly innovative and flexible solutions",
    "Addresses technological and digital needs",
    "Professional and integrated processes",
    "Guiding customers to success"
  ];

  return (
    <section className="pt-12 md:pt-16 lg:pt-24  bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight"
            >
              About Our Company
            </motion.h1>

            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-semibold text-[#019ee8] mb-4 md:mb-6 leading-relaxed"
            >
              Your partner for Digital Innovation
            </motion.h4>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6 text-gray-700 leading-relaxed"
            >
              <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6">
                ByteSynq is an information technology & digital marketing agency that provides 
                highly innovative and flexible solutions to address the technological and digital 
                needs of businesses. Our creative solutions can address all your business 
                technological and digital needs.
              </p>

              <div className="mb-4 md:mb-6">
                <p className="text-sm md:text-base lg:text-lg">
                  We Strive To Become A Leading Performer, In Providing Quality Web And Software 
                  Development Solutions. Our Professional, Flexible And Integrated Process Reflects 
                  In What We Do. We Always Guide Our Customers To Success.
                </p>
              </div>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-4 md:mb-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-[#019ee8] flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 mb-4 md:mb-6"
            >
              <a
                href="/about-us"
                className="px-8 py-4 bg-[#019ee8] text-white font-semibold rounded-lg hover:bg-[#0288d1] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Learn More About Us
              </a>
              <a
                href="/contact-us"
                className="px-8 py-4 border-2 border-[#019ee8] text-[#019ee8] font-semibold rounded-lg hover:bg-[#019ee8] hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                Get In Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Image Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <img
                  src="https://itgenesis.net/wp-content/uploads/2022/08/about-2-415x450.png"
                  alt="About IT Genesis"
                  width={415}
                  height={450}
                  className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-2xl"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>

              {/* Background Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -top-6 -right-6 w-32 h-32 bg-blue-100 rounded-full -z-10"
              ></motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#019ee8]/10 rounded-full -z-10"
              ></motion.div>

              {/* Floating Elements */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                className="absolute -top-4 -left-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-600">Projects Done</div>
                  </div>
                </div>
              </motion.div> */}

              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">16+</div>
                    <div className="text-sm text-gray-600">Team Experts</div>
                  </div>
                </div>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
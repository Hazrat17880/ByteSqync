"use client";
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay: i * 0.2 },
  }),
};

const services = [
  {
    title: 'UI/UX Design',
    description: 'Crafting intuitive digital experiences that blend aesthetics with functionality to drive user engagement and business growth.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    stats: [{ number: '50+', label: 'Projects Delivered' }],
    gradient: 'from-purple-600 to-pink-600',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design']
  },
  {
    title: 'Web Development',
    description: 'Building scalable, high-performance web applications using cutting-edge technologies and industry best practices.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    stats: [{ number: '100+', label: 'Websites Built' }],
    gradient: 'from-blue-600 to-cyan-600',
    features: ['Frontend Development', 'Backend Systems', 'API Integration', 'Performance Optimization']
  },
  {
    title: 'Mobile Development',
    description: 'Creating seamless native and cross-platform mobile experiences that excel in performance and user satisfaction.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    stats: [{ number: '80+', label: 'Apps Developed' }],
    gradient: 'from-green-600 to-emerald-600',
    features: ['iOS & Android', 'Cross-Platform', 'App Store Deployment', 'Native Performance']
  },
  {
    title: 'Quality Assurance',
    description: 'Ensuring flawless software performance through comprehensive testing methodologies and quality assurance processes.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    stats: [{ number: '70+', label: 'Projects Tested' }],
    gradient: 'from-orange-600 to-red-600',
    features: ['Automated Testing', 'Manual Testing', 'Performance Testing', 'Security Audits']
  },
];

export default function OurServices() {
  return (
    <section className="relative bg-white pt-12 md:pt-16 lg:pt-24">
      <div className="relative px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-2xl md:text-3xl lg:text-5xl font-light text-gray-900 mb-4 tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Our <span className="font-semibold text-[#1f4668]">Services</span>
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-4 md:mb-6 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Comprehensive digital solutions tailored to drive your business forward. 
            We combine technical expertise with creative innovation.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-2xl p-8 h-full border border-gray-200 hover:border-transparent transition-all duration-500 overflow-hidden">
                
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                {/* Animated Border Gradient */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}>
                  <div className="absolute inset-[2px] rounded-2xl bg-white" />
                </div>

                <div className="relative z-10">
                  {/* Icon and Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-2xl bg-gradient-to-r ${service.gradient} text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className={`text-3xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                        {service.stats[0].number}
                      </div>
                      <div className="text-sm text-gray-500 font-medium">
                        {service.stats[0].label}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-[#1f4668] transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base lg:text-lg">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                          <span className="text-sm text-gray-500">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className={`flex items-center space-x-2 font-semibold text-sm text-gray-700 hover:text-[#1f4668] transition-all duration-300 group/btn`}
                  >
                    <span>Discover More</span>
                    <svg 
                      className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </motion.button>
                </div>

                {/* Subtle Pattern Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#1f4668] to-[#27AAE1] rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              Ready to Transform Your Digital Presence?
            </h3>
            <p className="text-blue-100 mb-6 text-lg max-w-2xl mx-auto">
              Let's discuss how our expertise can drive your business forward with innovative digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-[#1f4668] font-semibold rounded-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Project
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#1f4668] transition-all duration-300"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
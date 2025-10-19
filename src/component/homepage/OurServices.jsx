'use client';

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
    title: 'Creative & Digital Solutions',
    description: `We combine strategic thinking with creative execution to build powerful and consistent brands. Our services include complete Branding & Visual Identity systems, professionally designed Company Profiles, engaging Multimedia & Motion Graphics, and responsive Web Design & Development. We also manage tailored Digital Marketing campaigns to increase your visibility and reach.`,
    stats: [
      { number: '5+', label: 'Years Experience' },
    ],
  },
  {
    title: 'Consultancy & Advisory Services',
    description: `We empower organizations with robust operational frameworks and strategic insights. Our expertise covers Management & Administration consulting, Financial & Strategic Advisory, Project & Program Consulting, and proactive Business Development support. We ensure your operations are efficient, compliant, and aligned with long-term goals.`,
    stats: [
      { number: '300+', label: 'Projects Done' },
    ],
  },
  {
    title: 'Training & Capacity Building',
    description: `We offer comprehensive, hands-on training programs in essential creative software and digital skills. Master industry-standard tools like Adobe Photoshop for image editing, Adobe Illustrator for vector graphics, and motion video production for dynamic storytelling. Additionally, we provide foundational to advanced training in modern web and app development technologies.`,
    stats: [
      { number: '180+', label: 'Unique Customers' },
    ],
  },
];

export default function OurServices() {
  return (
    <section className="relative bg-[#ececea] py-10 md:py-20 flex justify-center items-center">
      <div
        id="our-services"
        className="relative px-4 sm:px-8 md:px-12 lg:px-24 max-w-7xl mx-auto rounded-xl overflow-hidden"
      >
        <motion.h2
          className="text-3xl md:text-5xl text-secondary tracking-wider mb-8 md:mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontFamily: 'virtual, sans-serif' }}
        >
          <span className="text-primary">what we</span>
          <br className="hidden md:block" /> Offer
        </motion.h2>

        <div className="space-y-16 md:space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-8 md:gap-12"
            >
              {/* Service Content - Left Side */}
              <div className="md:w-2/3">
                <div className="relative pl-6 border-l-4 border-[#27AAE1] h-full flex flex-col justify-center">
                  <h3 
                    className="text-xl md:text-2xl text-primary mb-3 md:mb-4 lowercase"
                    style={{ fontFamily: 'virtual, sans-serif' }}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className="text-base md:text-lg text-gray-600 leading-relaxed" 
                    style={{ fontFamily: 'poppin, sans-serif' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Stats - Right Side on desktop, below on mobile */}
              <div className="md:w-1/3 flex items-center justify-center md:justify-start">
                {service.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="w-full text-center md:text-left">
                    {/* Mobile Layout */}
                    <div className="md:hidden flex flex-col items-center justify-center w-full py-4">
                      <div className="mb-2">
                        <span 
                          className="text-primary text-5xl md:text-6xl leading-none" 
                          style={{ fontFamily: 'virtual, sans-serif' }}
                        >
                          {stat.number}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-medium text-primary text-center">
                        <span 
                          style={{ fontFamily: 'poppin, sans-serif' }}
                        >
                          {stat.label}
                        </span>
                      </h3>
                    </div>

                    {/* Desktop Layout - Centered with paragraph */}
                    <div className="hidden md:flex flex-col items-center md:items-start justify-center h-full ">
                      <div className="mb-2  w-full flex flex-col items-center text-center">
                        <span 
                          className="text-[#1f4668] text-5xl lg:text-6xl leading-none" 
                          style={{ fontFamily: 'virtual, sans-serif' }}
                        >
                          {stat.number}
                        </span>
                         <h3 className="text-lg font-medium text-[#1f4668] ">
                        <span  
                        >
                          {stat.label}
                        </span>
                      </h3>
                      </div>
                      
                     
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
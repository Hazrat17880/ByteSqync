'use client';

import { motion } from 'framer-motion';
import { Users, Lightbulb, Handshake } from 'lucide-react';

const features = [
  {
    title: 'Expert Development Team',
    description:
      'Our experienced developers and designers work collaboratively to craft high-quality web and mobile applications tailored to your business needs.',
    icon: <Users className="w-14 h-14 text-[#27AAE1]" />,
  },
  {
    title: 'Innovative & Scalable Solutions',
    description:
      'We leverage modern technologies and agile methodologies to build innovative, scalable, and future-ready digital solutions that grow with your business.',
    icon: <Lightbulb className="w-14 h-14 text-[#27AAE1]" />,
  },
  {
    title: 'Client-Centered Approach',
    description:
      'We prioritize your vision, ensuring clear communication, transparency, and collaboration throughout the development process to deliver outstanding results.',
    icon: <Handshake className="w-14 h-14 text-[#27AAE1]" />,
  },
];


export default function OurTeamExpertise() {
  return (
    <section className=" py-10 md:py-20 bg-[#ececea]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Feature Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="group   md:p-8 p-4 "
            >
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-2xl  text-primary  text-center lowercase" style={{ fontFamily: 'virtual, sans-serif' }}>
                {feature.title}
              </h3>
              <p className="mt-4 text-gray-600  text-center leading-relaxed" style={{ fontFamily: 'poppin, sans-serif' }}>
                {feature.description}
              </p>
              <span className="block mt-6 h-[3px] w-0 group-hover:w-full transition-all duration-500 bg-[#27AAE1] rounded-full mx-auto"></span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

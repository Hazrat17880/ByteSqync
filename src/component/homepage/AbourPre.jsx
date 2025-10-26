"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const AboutCompany = () => {
  const features = [
    "Highly innovative and flexible solutions",
    "Addresses technological and digital needs",
    "Professional and integrated processes",
    "Guiding customers to success",
  ];

  return (
    <section className="pt-8 md:pt-5 lg:pt-8 bg-[#F8F9FC] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            {/* Section Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl lg:text-5xl font-bold text-[#2D46B9] mb-4 md:mb-6 leading-tight"
            >
              About Our Company
            </motion.h1>

            {/* Subheading */}
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#00C6FF] mb-4 md:mb-6 leading-relaxed"
            >
              Your Partner for Digital Innovation
            </motion.h4>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4 md:space-y-6 text-gray-700 leading-relaxed"
            >
              <p className="text-sm md:text-base lg:text-lg">
                ByteSynq is an information technology & digital marketing agency
                that provides highly innovative and flexible solutions to
                address the technological and digital needs of businesses. Our
                creative solutions can address all your business technological
                and digital needs.
              </p>

              <p className="text-sm md:text-base lg:text-lg">
                We strive to become a leading performer in providing quality web
                and software development solutions. Our professional, flexible,
                and integrated process reflects in what we do. We always guide
                our customers to success.
              </p>
            </motion.div>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="my-6 md:my-8 space-y-3"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-[#00C6FF] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium text-sm md:text-base">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-6 md:mt-8"
            >
              <a
                href="/about-us"
                className="px-6 py-3 md:px-8 md:py-4 bg-[#2D46B9] text-white font-semibold rounded-lg hover:bg-[#24379A] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-center text-sm md:text-base"
              >
                Learn More About Us
              </a>
              <a
                href="/contact-us"
                className="px-6 py-3 md:px-8 md:py-4 border-2 border-[#00C6FF] text-[#00C6FF] font-semibold rounded-lg hover:bg-[#00C6FF] hover:text-white transition-all duration-300 transform hover:-translate-y-1 text-center text-sm md:text-base"
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
            className="lg:w-1/2 w-full flex justify-center lg:justify-end mt-8 lg:mt-0"
          >
            <div className="relative max-w-full">
              {/* Main Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="relative z-10 mx-auto"
              >
                <img
                  src="https://itgenesis.net/wp-content/uploads/2022/08/about-2-415x450.png"
                  alt="About ByteSynq"
                  width={415}
                  height={450}
                  className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[415px] object-contain drop-shadow-2xl"
                  loading="lazy"
                  decoding="async"
                  style={{
                    maxWidth: "min(415px, 100%)",
                    height: "auto"
                  }}
                />
              </motion.div>

              {/* Background Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="absolute -top-4 -right-4 w-20 h-20 md:w-32 md:h-32 bg-[#2D46B9]/10 rounded-full -z-10"
              ></motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 w-24 h-24 md:w-40 md:h-40 bg-[#00C6FF]/10 rounded-full -z-10"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
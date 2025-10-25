"use client";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#F8F9FC]  text-[#111827] flex flex-col justify-center md:mt-12 mt-16 items-center px-4 sm:px-6 md:px-16 lg:px-24 py-16 md:py-24">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-8">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-[#2D46B9]">
            Custom Software Solutions <br /> for Growing Businesses
          </h1>

          {/* Paragraph */}
          <p className="text-base md:text-lg text-gray-700 max-w-xl mx-auto md:mx-0 leading-relaxed">
            We empower companies to grow faster by building scalable, reliable, and future-ready digital products tailored to their unique needs.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            {/* Primary Button */}
            <button className="bg-[#2D46B9] hover:bg-[#24379A] text-white font-semibold text-sm md:text-base px-6 md:px-8 py-3 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg">
              See Projects
            </button>

            {/* Secondary Button */}
            <button className="border border-[#00C6FF] text-[#00C6FF] hover:bg-[#00C6FF] hover:text-white font-semibold text-sm md:text-base px-6 md:px-8 py-3 rounded-xl transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

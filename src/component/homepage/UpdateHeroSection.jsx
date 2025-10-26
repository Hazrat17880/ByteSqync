"use client";
import React from "react";

const Hero = () => {
  const primaryColor = "#0A66C2";
  const secondaryColor = "#00BFA6";

  return (
    <section className="text-white flex flex-col justify-center md:mt-12 mt-16 items-center px-4 sm:px-6 md:px-16 lg:px-24 py-16 md:py-24"
      style={{
        background: "linear-gradient(135deg, #0A2463 0%, #1E3A8A 25%, #065F46 75%, #047857 100%)",
        '--primary-color': primaryColor,
        '--primary-hover': '#0858a1',
        '--secondary-color': secondaryColor,
        '--secondary-hover': '#00a68c'
      }}
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left space-y-8">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white">
            Custom Software Solutions <br /> for Growing Businesses
          </h1>

          {/* Paragraph */}
          <p className="text-base md:text-lg text-gray-200 max-w-xl mx-auto md:mx-0 leading-relaxed">
            We empower companies to grow faster by building scalable, reliable, and future-ready digital products tailored to their unique needs.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            {/* Primary Button */}
            <button 
              className="bg-[var(--primary-color)] hover:bg-[var(--primary-hover)] text-white font-semibold text-sm md:text-base px-6 md:px-8 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              See Projects
            </button>

            {/* Secondary Button */}
            <button 
              className="border-2 border-[var(--secondary-color)] text-[var(--secondary-color)] hover:bg-[var(--secondary-color)] hover:text-white font-semibold text-sm md:text-base px-6 md:px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
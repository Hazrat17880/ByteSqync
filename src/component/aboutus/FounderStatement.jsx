import React from 'react';

// Founder Statement Component
const FounderStatement = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Message From Our Founder</h2>
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
          <div className="flex items-center mb-8">
            <div className="w-16 h-16 bg-gray-300 rounded-full mr-6"></div>
            <div>
              <h3 className="text-xl font-bold">Bilal Jilani</h3>
              <p className="text-gray-600">CEO/Founder</p>
            </div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            At Pixi, we believe in the power of creativity, strategy, and knowledge to shape the future. 
            From our early days, our mission has been clear: to empower businesses, individuals, and 
            entrepreneurs through innovative design, smart business consulting, and practical education.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We're proud to be building something meaningful in Afghanistan—something that stands for 
            excellence, opportunity, and forward-thinking. As CEO, I invite you to be part of this journey 
            with us. Let's create, build, and grow—together.
          </p>
        </div>
      </div>
    </section>
  );
};


export default FounderStatement;

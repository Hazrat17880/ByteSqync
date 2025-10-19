import React from 'react';

// Partners Section Component
const PartnersSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Partners and Clients</h2>
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <p className="text-center text-gray-600 mb-12">
            We have had the privilege of collaborating with leading companies, delivering tailored solutions 
            that have empowered them to achieve measurable growth and success.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Client Logo</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default PartnersSection;

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, X } from 'lucide-react';
import { useState, useEffect } from 'react';

const teamMembers = [
  {
    id: 1,
    name: 'Hazrat Usman',
    position: 'Founder & President',
    image: '/images/team/ceo.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/hazratusman17880/',
    }
  },
  {
    id: 2,
    name: 'Sadiq Hussain',
    position: 'Head of the Academic  Dept',
    image: '/images/team/shaher.jpeg',
    social: {
      linkedin: 'https://www.linkedin.com/in/sadiqnhussain/',
    }
  },
  {
    id: 3,
    name: 'Bilal Ul Haq',
    position: 'Instructor Motion Designer',
    image: '/images/team/mukhtar.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/bilal-khan-023114215/',
    }
  },
  {
    id: 4,
    name: 'Muhammad Osaid Iqbal',
    position: 'Senior UI/UX Designer',
    image: '/images/team/haseeb.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/muhammad-osaid-iqbal-277424242/',
    }
  },
  {
    id: 5,
    name: 'Shahid Jan Amin',
    position: 'Senior Full Stack Developer',
    image: '/images/team/sjamin.png',
    social: {
      linkedin: 'https://www.linkedin.com/in/shahidjanamin/',
    }
  }
];

export default function OurTeam() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIsMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIsMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const handleMemberClick = (member) => {
    if (isMobile) {
      setSelectedMember(member);
    }
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
  <section className="relative bg-[#ececea] py-12 md:py-16 lg:py-24 px-6 sm:px-12 lg:px-24 overflow-hidden z-0">
  {/* Background decorative elements */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-[#1f4668]/5 rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full translate-x-1/3 translate-y-1/3 z-0"></div>
  
  {/* Main content wrapper */}
  <div className="max-w-7xl mx-auto relative z-10">
    {/* Title Section */}
    <motion.div 
      className="text-center mb-16 relative z-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-2xl md:text-3xl lg:text-5xl text-primary tracking-wide lowercase mb-4" style={{ fontFamily: 'virtual, sans-serif' }}>
        Meet Our <span className="text-secondary">Dream Team</span>
      </h2>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: 'poppin, sans-serif' }}>
        Talented professionals dedicated to bringing your vision to life with creativity and technical excellence.
      </p>
    </motion.div>

    {/* Team Grid (Desktop) */}
    <div className="md:block hidden relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 relative z-10">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative md:h-80 h-100 z-10"
          >
            <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-xl cursor-pointer z-10">
              <motion.div 
                className="absolute inset-0 h-full w-full z-10"
                initial={false}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </motion.div>

              <motion.div 
                className="absolute inset-0 h-full w-full bg-[#1f4668] p-6 flex flex-col justify-center items-center text-center z-20"
                initial={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-white">
                  <h3 className="text-xl font-bold lowercase mb-2" style={{ fontFamily: 'virtual, sans-serif' }}>
                    {member.name}
                  </h3>
                  <p className="text-gray-300 mb-4" style={{ fontFamily: 'poppin, sans-serif' }}>
                    {member.position}
                  </p>
                  <div className="w-12 h-1 bg-secondary mx-auto mb-4"></div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a 
                      href={member.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block bg-white p-3 rounded-full text-[#1f4668] hover:bg-secondary hover:text-white transition-colors duration-300"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Linkedin size={20} />
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Mobile Grid */}
    <div className="md:hidden block grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 relative z-10">
      {teamMembers.map((member, index) => (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex items-center justify-center p-4 z-10"
          key={index}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-white rounded-2xl p-6 max-w-sm w-full relative z-10"
          >
            <div className="text-center">
              <div className="w-64 h-72 mx-auto mb-6 rounded-xl overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-2xl font-bold text-primary lowercase mb-2" style={{ fontFamily: 'virtual, sans-serif' }}>
                {member.name}
              </h3>
              <p className="text-gray-600 mb-4" style={{ fontFamily: 'poppin, sans-serif' }}>
                {member.position}
              </p>
              <div className="w-12 h-1 bg-secondary mx-auto mb-4"></div>
              <a 
                href={member.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#1f4668] p-3 rounded-full text-white hover:bg-secondary transition-colors duration-300"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
}
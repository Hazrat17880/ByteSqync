"use client"
import { useEffect, useState } from 'react';
import { 
  Target, Users, Lightbulb, Heart, Shield, Star, BookOpen, 
  Briefcase, Palette, Code, Video, Building, FileText, 
  TrendingUp, MessageCircle, Globe, Award, ChevronDown, 
  Phone, Mail, MapPin
} from 'lucide-react';
import HeroSection from '@/component/aboutus/HeroSection';
import IntroductionSection from '@/component/aboutus/IntroductionSection';
import VisionMissionSection from '@/component/aboutus/VissionAndMission';
import USPSection from '@/component/aboutus/UPSSection';
import CoreValuesSection from '@/component/aboutus/CoreValues';
import ServicesOverviewSection from '@/component/aboutus/ServicesOverView';
import PartnersSection from '@/component/aboutus/Partners';
import FounderStatement from '@/component/aboutus/FounderStatement';
import OurClients from '@/component/aboutus/OurClients';
import UpdatedHeroSection from '@/component/homepage/UpdateHeroSection';
import FoundersMessage from '@/component/aboutus/CEOMessage';
import Lenis from 'lenis';









// // Contact Section Component
// const ContactSection = () => {
//   return (
//     <section className="py-16 px-4 bg-blue-900 text-white">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Get In Touch</h2>
//         <div className="grid md:grid-cols-2 gap-12">
//           <div>
//             <h3 className="text-xl font-bold mb-6">Contact Information</h3>
//             <div className="space-y-4">
//               <div className="flex items-center">
//                 <Phone className="h-5 w-5 mr-4" />
//                 <div>
//                   <p>+93 705 15 50 15</p>
//                   <p>+1 619 960 42 42</p>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <Mail className="h-5 w-5 mr-4" />
//                 <p>hi@pixigrp.com</p>
//               </div>
//               <div className="flex items-start">
//                 <MapPin className="h-5 w-5 mr-4 mt-1" />
//                 <div>
//                   <p>Cinema Zainab Road, Shahr – Naw, Kabul</p>
//                   <p>Sunshine Eve, El Cajon, California 92020</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
//             <form className="space-y-4">
//               <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg bg-blue-800 border border-blue-700 text-white placeholder-blue-300" />
//               <input type="email" placeholder="Your Email" className="w-full p-3 rounded-lg bg-blue-800 border border-blue-700 text-white placeholder-blue-300" />
//               <textarea placeholder="Your Message" rows="4" className="w-full p-3 rounded-lg bg-blue-800 border border-blue-700 text-white placeholder-blue-300"></textarea>
//               <button type="submit" className="bg-white text-blue-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// Main About Page Component
const AboutPage = () => {
    // scrolling anmation
   useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2, // default 1
      easing: (t) => 1 - Math.pow(1 - t, 3), // cubic ease-out
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <div className="min-h-screen bg-white">
      {/* <HeroSection /> */}
      <UpdatedHeroSection title={"About Us"}/>
      <IntroductionSection />
      <OurClients/>

      <VisionMissionSection />
      <USPSection/>
      <CoreValuesSection />
      <ServicesOverviewSection />

      <FoundersMessage/>
      {/* <FounderStatement /> */}
      {/* <ContactSection /> */}
    </div>
  );
};

export default AboutPage;
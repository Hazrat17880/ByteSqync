
"use client"
import HeroSectionServices from '@/component/service/HeroSection';
import HowWeWork from '@/component/service/HowWeWork';
import ServicesOverviewGrid from '@/component/service/ServicesOverview';
import TestimonialsTrust from '@/component/service/Testimonial';
import Lenis from 'lenis';
import React, { useEffect } from 'react';

const Page = () => {
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
       <main className='md:mb-0 mb-20'>
       <HeroSectionServices/>
       <ServicesOverviewGrid/>
       {/* <USPSection/> */}
       <HowWeWork/>
       <TestimonialsTrust/>
       </main>
    );
}

export default Page;

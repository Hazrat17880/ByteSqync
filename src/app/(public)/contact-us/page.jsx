"use client"
import ContactInfoGrid from '@/component/contactus/ContactInfoGrid';
import ContactHeader from '@/component/contactus/HeaderComponent';
import LocationCards from '@/component/contactus/LocationCard';
import UpdatedHeroSection from '@/component/homepage/UpdateHeroSection';
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
       <>
       {/* <ContactHeader/> */}
       <UpdatedHeroSection title={"contact us"}/>
       <ContactInfoGrid/>
       <LocationCards/>
       </>
    );
}

export default Page;

"use client"
import AboutPixi from "@/component/homepage/AboutPixi";
import HeroSection from "@/component/homepage/HeroSection";
import ImageComponent from "@/component/homepage/ImageComponent";
import ContactComponent from "@/component/homepage/ContactComponent";
import OurServices from "@/component/homepage/OurServices";
import OurTeamExpertise from "@/component/homepage/TeamExpertise";
import OurTeam from "@/component/homepage/OurTeam";
import ExploreOurBranch from "@/component/homepage/ExploreOurAgency";
import UpdatedHeroSection from "@/component/homepage/UpdateHeroSection";
import TestimonialsTrust from "@/component/service/Testimonial";
import { useEffect } from "react";
import Lenis from "lenis";


export default function Home() {
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
 <main className="reltive ">
 {/* <HeroSection/> */}
 <UpdatedHeroSection title={"ByteSynq Solution"}/>
 <ImageComponent/>
 <AboutPixi/>
 <OurTeamExpertise/>
 <OurServices/>
 <ContactComponent/>
 <OurTeam/>
 <TestimonialsTrust/>
 <ExploreOurBranch/>
 </main>
  );
}

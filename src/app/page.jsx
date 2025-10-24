"use client";
import { useEffect } from "react";
import Lenis from "lenis";
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
import AboutCompany from "@/component/homepage/AbourPre";
import PortfolioPreview from "@/component/homepage/Project";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <main className="relative">
      {/* Hero Section */}
      <section className="relative">
        <UpdatedHeroSection title="ByteSynq Solution" />
      </section>

      {/* About Company Section */}
      <section id="about-company" className="relative bg-white">
        <AboutCompany />
      </section>
      <OurServices />
      <TestimonialsTrust/>
      <PortfolioPreview/>

     
   
      <ContactComponent />
      <OurTeam />
     
    </main>
  );
}
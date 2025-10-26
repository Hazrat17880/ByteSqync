"use client";
import React, { useEffect } from "react";
import HeroSectionServices from "@/component/service/HeroSection";
import ServicesOverviewGrid from "@/component/service/ServicesOverview";
import HowWeWork from "@/component/service/HowWeWork";
import TestimonialsTrust from "@/component/service/Testimonial";
import Lenis from "lenis";

const Page = () => {
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
    <main className="flex flex-col md:mb-0 mb-20">
      <HeroSectionServices />
      <ServicesOverviewGrid />
      <HowWeWork />
      <TestimonialsTrust />
    </main>
  );
};

export default Page;

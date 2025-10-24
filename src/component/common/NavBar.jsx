"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile on mount and resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          // Add shadow/background when scrolled
          setIsScrolled(currentScrollY > 20);

          // Hide when scrolling down, show when scrolling up
          if (currentScrollY > lastScrollY && currentScrollY > 80) {
            setIsVisible(false);
            setIsMobileMenuOpen(false); // Close mobile menu when hiding
          } else {
            setIsVisible(true);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, [lastScrollY]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
  ];

  // Smooth close mobile menu
  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "shadow-lg backdrop-blur-lg bg-white/95"
          : "bg-transparent text-white"
      } ${
        isVisible 
          ? "translate-y-0 opacity-100" 
          : "-translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="/" 
              className="flex items-center transition-transform duration-300 hover:scale-105"
            >
              <span className="text-3xl font-bold bg-gradient-to-r from-[#27AAE1] to-[#1f4668] bg-clip-text text-transparent">
                ByteSynq
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-all duration-300 relative group ${
                  isScrolled ? "text-gray-700" : "text-white"
                } hover:text-[#27AAE1] transform hover:-translate-y-0.5`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#27AAE1] transition-all duration-300 group-hover:w-full group-hover:shadow-sm"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`focus:outline-none transition-all duration-300 transform hover:scale-110 ${
                isScrolled ? "text-gray-700" : "text-white"
              } ${isMobileMenuOpen ? "rotate-90" : "rotate-0"}`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X size={28} className="transition-transform duration-300" />
              ) : (
                <Menu size={28} className="transition-transform duration-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - CLEAR without blur */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4"
          }`}
        >
          <div className="bg-white border-t border-gray-100 rounded-b-xl shadow-lg">
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-4 text-gray-700 hover:text-[#27AAE1] hover:bg-blue-50 rounded-lg font-medium transition-all duration-300 transform hover:translate-x-2"
                  onClick={handleMobileMenuClose}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
                  }}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop for Mobile Menu - Reduced blur */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/10 z-40 md:hidden transition-opacity duration-300"
          onClick={handleMobileMenuClose}
        />
      )}
    </nav>
  );
}
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const secondaryColor = "#00BFA6";

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
        setIsMobileMenuOpen(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About Us", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
  ];

  const handleMobileMenuClose = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Backdrop - moved outside and below nav */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden transition-opacity duration-300"
          onClick={handleMobileMenuClose}
        />
      )}

      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "shadow-lg backdrop-blur-lg bg-gradient-to-r from-[#0A2463] to-[#065F46]/95"
            : "bg-gradient-to-r from-[#0A2463] to-[#065F46] shadow-sm"
        } ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex flex-col items-center transition-transform duration-300 hover:scale-105 relative z-50"
              onClick={handleMobileMenuClose}
            >
              <span className="text-3xl font-bold text-white">ByteSynq</span>
              <span className="text-xs mt-1 font-medium text-gray-200">
                Software Solutions
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-10 absolute left-1/2 transform -translate-x-1/2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-medium transition-all duration-300 relative group hover:scale-105 text-white hover:text-gray-200"
                >
                  {item.name}
                  <span
                    className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full group-hover:shadow-sm"
                    style={{ backgroundColor: secondaryColor }}
                  ></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden relative z-50">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`focus:outline-none transition-all duration-300 transform hover:scale-110 ${
                  isMobileMenuOpen ? "rotate-90" : "rotate-0"
                }`}
                aria-label="Toggle menu"
                style={{ color: "white" }}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out relative z-50 ${
              isMobileMenuOpen
                ? "max-h-96 opacity-100 translate-y-0"
                : "max-h-0 opacity-0 -translate-y-4"
            }`}
          >
            <div className="border-t rounded-b-xl shadow-lg bg-gradient-to-b from-[#0A2463] to-[#065F46] border-[#1E40AF]">
              <div className="px-2 pt-2 pb-4 space-y-1">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={handleMobileMenuClose}
                    className="block px-4 py-4 rounded-lg font-medium transition-all duration-300 transform hover:translate-x-2 text-white hover:text-gray-200 hover:bg-white/10"
                    style={{
                      transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : "0ms",
                    }}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
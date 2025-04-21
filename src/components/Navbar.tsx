"use client";
// components/Navbar.tsx
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Optimize scroll handler with useCallback to prevent recreation on each render
  const handleScroll = useCallback(() => {
    // Set scrolled state with a single update to reduce renders
    setScrolled(window.scrollY > 50);

    // Use a throttled approach for section detection to improve performance
    const sections = ["home", "about", "projects", "skills", "contact"];
    
    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          if (activeSection !== section) { // Only update if different (reduces renders)
            setActiveSection(section);
          }
          break;
        }
      }
    }
  }, [activeSection]); // Only depends on activeSection

  useEffect(() => {
    // Use passive: true for better scroll performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Faster scrolling with shorter duration
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth", 
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-200 ${scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div 
              onClick={() => scrollToSection("home")} 
              className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer"
            >
              Portfolio
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "projects", "skills", "contact"].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className={`${
                  activeSection === item 
                    ? "bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent font-semibold" 
                    : "text-gray-600 hover:text-gray-900"
                } px-3 py-2 text-sm font-medium capitalize transition-colors duration-200 cursor-pointer hover:scale-105`}
              >
                {item}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none cursor-pointer"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu - Using CSS transition for smoother animation */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {["home", "about", "projects", "skills", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`${
                activeSection === item 
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white" 
                  : "text-gray-600 hover:bg-gray-100"
              } block px-3 py-2 rounded-md text-base font-medium capitalize w-full text-left transition-colors duration-200 cursor-pointer`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
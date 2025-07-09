"use client";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);

    const sections = ["home", "about", "services", "projects", "contact"];
    let nearestSection = null;
    let nearestDistance = Infinity;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const distance = Math.abs(rect.top - 100);
        if (distance < nearestDistance) {
          nearestDistance = distance;
          nearestSection = section;
        }
      }
    }

    if (nearestSection && activeSection !== nearestSection) {
      setActiveSection(nearestSection);
    }
  }, [activeSection]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 70,
        behavior: "smooth",
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Regular Navbar (hidden when menu is open on mobile) */}
      <nav
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out
        ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg px-6 py-3 rounded-full max-w-6xl border border-gray-100"
            : "bg-transparent px-4 py-2 max-w-screen-lg"
        } w-full ${isMenuOpen ? "hidden md:flex" : ""}`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "gap-6" : "gap-2"
          }`}
        >
          {/* Left Logo/Title */}
          <div
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
          >
            Abbas Qadir
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {["home", "about", "services", "projects", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-sm font-medium transition-all duration-200 relative ${
                    activeSection === section
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600 cursor-pointer"
                  }`}
                >
                  {section}
                  {activeSection === section && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                  )}
                </button>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle navigation menu"
            >
              <svg
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-start bg-white/95 backdrop-blur-md">
          <div className="w-full flex items-center justify-between px-6 pt-8 pb-4 border-b border-gray-100">
            {/* Logo */}
            <div
              onClick={() => {
                scrollToSection("home");
                setIsMenuOpen(false);
              }}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
            >
              Abbas Qadir
            </div>
            {/* Close Icon */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close menu"
            >
              <svg
                className="h-7 w-7 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col w-full max-w-sm mx-auto mt-8 space-y-4 px-6">
            {["home", "about", "services", "projects", "contact"].map(
              (section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`w-full text-left capitalize px-4 py-3 rounded-lg font-medium text-lg transition-all duration-200 ${
                    activeSection === section
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                >
                  {section}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

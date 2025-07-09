"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const roles = ["Web Designer", "Web Developer", "UI & UX Designer"];

const Typewriter = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index >= roles.length) setIndex(0);

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => (deleting ? prev - 1 : prev + 1));

        if (!deleting && subIndex === roles[index].length) {
          setTimeout(() => setDeleting(true), 1500);
        } else if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      },
      deleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <p className="text-2xl md:text-3xl text-blue-600 font-semibold">
      {roles[index].substring(0, subIndex)}
      <span
        className={`${blink ? "opacity-100" : "opacity-0"} transition-opacity`}
      >
        |
      </span>
    </p>
  );
};

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="pt-24 min-h-screen flex flex-col justify-center bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Abbas
                </span>
              </h1>

              {/* Animated Typewriter */}
              <Typewriter />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed max-w-lg"
            >
              Freelance web designer & developer, building beautiful websites using modern technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="bg-white text-gray-800 font-semibold py-4 px-8 rounded-full shadow-lg border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/pic-office.jpeg"
                    alt="Abbas Qadir - Web Designer & Developer"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-full"
                    priority
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-indigo-500/10 pointer-events-none"></div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg border border-gray-100"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg border border-gray-100"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  delay: 1.5,
                  ease: "easeInOut",
                }}
              >
                <svg
                  className="w-6 h-6 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

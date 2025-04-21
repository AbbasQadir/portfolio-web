"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const roles = [
  "Software Engineer",
  "Web Developer",
  "Full Stack Developer",
  "Tech Enthusiast",
];

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
          setTimeout(() => setDeleting(true), 1000);
        } else if (deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((prev) => (prev + 1) % roles.length);
        }
      },
      deleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <p className="text-xl md:text-2xl text-gray-600">
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
      className="pt-24 min-h-screen flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              Hello, I'm{" "}
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Abbas Qadir
              </span>
            </h1>

            {/* Animated Typewriter Line */}

            <Typewriter />

            <p className="text-lg text-gray-500">
              I help companies modernize their digital presence through custom
              web development. I transform slow, outdated websites into
              fast-loading applications that rank higher on Google, attract more
              clients, and convert visitors into paying customers.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <motion.button
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-2 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="bg-white text-gray-800 font-medium py-2 px-6 rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-80 h-80 md:w-90 md:h-90 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/hero-image.jpeg"
                    alt="Abbas Qadir"
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-full"
                    priority
                  />
                </div>

                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/10 to-indigo-500/10 pointer-events-none"></div>
                <div className="absolute inset-0 rounded-full border border-white/20 pointer-events-none"></div>
              </div>

              <motion.div
                className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-lg"
                animate={{
                  rotate: [0, 10, -10, 10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 5,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
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

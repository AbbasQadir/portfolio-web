"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed">
                I'm a passionate web designer and developer with a focus on
                creating intuitive and engaging digital experiences. With
                expertise in both design and development, I bridge the gap
                between aesthetics and functionality to deliver websites that
                not only look great but also perform exceptionally.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                My approach combines user-centered design principles with modern
                development practices. I believe that the best digital products
                come from understanding user needs, creating thoughtful designs,
                and implementing them with clean, efficient code.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Whether it's a simple landing page or a complex web application,
                I work closely with clients to understand their goals and create
                solutions that drive results and exceed expectations.
              </p>
            </div>

            <div className="pt-6">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Let's Connect
              </h3>
              <div className="flex space-x-6">
                <motion.a
                  href="https://github.com/AbbasQadir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-300 p-3 rounded-full hover:bg-gray-100"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302.537 9.8 4.207 11.387.3.1.63.2.64.3v-2.234c-2.338.726-3.033-1.416-3.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 3.765-1.589 7.199-5.086 7.199-9.386 0-5.627-4.373-10-9-10z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/abbas-qadir-b37676212/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-blue-600 transition-colors duration-300 p-3 rounded-full hover:bg-blue-50"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="/AbbasQ_cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View Resume"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-300 p-3 rounded-full hover:bg-gray-100"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="h-8 w-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/cafe-laptop.jpeg"
                  alt="Abbas Qadir - Web Designer & Developer"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Education
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-sm text-gray-500">2023 - 2026</p>
                    <h4 className="font-medium text-gray-900">
                      BSc Computer Science
                    </h4>
                    <p className="text-gray-600">Aston University</p>
                  </div>
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <p className="text-sm text-gray-500">2020 - 2022</p>
                    <h4 className="font-medium text-gray-900">
                      Business & Finance
                    </h4>
                    <p className="text-gray-600">
                      Dudley College of Technology
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Experience
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <p className="text-sm text-gray-500">2023</p>
                    <h4 className="font-medium text-gray-900">
                      Virtual Developer Program
                    </h4>
                    <p className="text-gray-600">
                      Bentley X Enactus ITwin4Good
                    </p>
                  </div>
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <p className="text-sm text-gray-500">2023 - 2024</p>
                    <h4 className="font-medium text-gray-900">Shift Manager</h4>
                    <p className="text-gray-600">Pizza Hut Delivery</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

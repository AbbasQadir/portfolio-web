"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <div className="mt-2 h-1 w-24 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg text-gray-700">
              I'm a full-stack developer with expertise in building robust
              applications, skilled in both front-end and back-end technologies
              to create seamless user experiences and efficient server-side
              logic.
            </p>
            <p className="text-lg text-gray-700">
              I specialize in JavaScript frameworks like React and Next.js,
              focusing on writing clean, maintainable code. I believe the best
              products come from a deep understanding of user needs combined
              with technical expertise.
            </p>
            <p className="text-lg text-gray-700">
              Outside of coding, I stay active by playing football twice a week
              and hitting the gym 4-5 times weekly, constantly pushing my
              fitness and mental resilience. I believe in balancing work,
              physical activity, and personal growth.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex space-x-4">
                {/* GitHub */}
                <a
                  href="https://github.com/AbbasQadir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
                >
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302.537 9.8 4.207 11.387.3.1.63.2.64.3v-2.234c-2.338.726-3.033-1.416-3.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 3.765-1.589 7.199-5.086 7.199-9.386 0-5.627-4.373-10-9-10z" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/abbas-qadir-b37676212/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
                >
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
                {/* Resume Icon - Document/CV Style */}
                <a
                  href="/AbbasQ-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View Resume"
                  className="text-gray-500 hover:text-gray-900 transition-colors duration-300"
                >
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM6 20V4h7v5h5v11H6zM8 12h8v1H8v-1zm0 2h8v1H8v-1zm0 2h8v1H8v-1zm0 2h5v1H8v-1z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              <ul className="space-y-6">
                <li className="border-l-4 border-purple-500 pl-4 transition-all duration-300 hover:border-indigo-500">
                  <p className="text-gray-500 text-sm">2023 - 2026</p>
                  <h4 className="font-medium">BSc in Computer Science</h4>
                  <p className="text-gray-600">Aston University</p>
                </li>
                <li className="border-l-4 border-purple-500 pl-4 transition-all duration-300 hover:border-indigo-500">
                  <p className="text-gray-500 text-sm">2020 - 2022</p>
                  <h4 className="font-medium">Business and Finance</h4>
                  <p className="text-gray-600">Dudley College of Technology</p>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Experience</h3>
              <ul className="space-y-6">
                <li className="border-l-4 border-purple-500 pl-4 transition-all duration-300 hover:border-indigo-500">
                  <p className="text-gray-500 text-sm">2023 - 2023</p>
                  <h4 className="font-medium">Virtual Developer Program</h4>
                  <p className="text-gray-600">Bentley X Enactus ITwin4Good</p>
                </li>
                <li className="border-l-4 border-purple-500 pl-4 transition-all duration-300 hover:border-indigo-500">
                  <p className="text-gray-500 text-sm">2023 - 2024</p>
                  <h4 className="font-medium">Shift Manager</h4>
                  <p className="text-gray-600">Pizza Hut Delivery.</p>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
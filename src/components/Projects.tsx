"use client";
// components/Projects.tsx
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  category: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A comprehensive admin dashboard for managing online store operations with real-time analytics.",
      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      image: "/project1.jpg", // Replace with your image path
      link: "#",
      category: "web"
    },
    {
      id: 2,
      title: "Travel Journal App",
      description: "Mobile-first application for travelers to document and share their adventures.",
      tech: ["Next.js", "Firebase", "Mapbox", "Tailwind CSS"],
      image: "/project2.jpg", // Replace with your image path
      link: "#",
      category: "mobile"
    },
    {
      id: 3,
      title: "AI Content Generator",
      description: "Tool that leverages machine learning to create engaging content for blogs and social media.",
      tech: ["Python", "TensorFlow", "FastAPI", "React"],
      image: "/project3.jpg", // Replace with your image path
      link: "#",
      category: "ai"
    },
    {
      id: 4,
      title: "Personal Finance Tracker",
      description: "Web application to track expenses, income, and investments with visualizations.",
      tech: ["Vue.js", "Express", "PostgreSQL", "Chart.js"],
      image: "/project4.jpg", // Replace with your image path
      link: "#",
      category: "web"
    },
    {
      id: 5,
      title: "Weather Forecast App",
      description: "Real-time weather forecasting application with interactive maps and alerts.",
      tech: ["React Native", "Redux", "Weather API", "Styled Components"],
      image: "/project5.jpg", // Replace with your image path
      link: "#",
      category: "mobile"
    },
    {
      id: 6,
      title: "Smart Home Control System",
      description: "IoT solution for controlling and monitoring home devices from a central dashboard.",
      tech: ["React", "Node.js", "MQTT", "WebSockets"],
      image: "/project6.jpg", // Replace with your image path
      link: "#",
      category: "iot"
    }
  ];

  const [filter, setFilter] = useState<string>("all");

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
          <div className="mt-2 h-1 w-24 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded"></div>
          <p className="mt-4 text-lg text-gray-600">Check out some of my recent work</p>
        </motion.div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["all", "web", "mobile", "ai", "iot"].map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === category 
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md" 
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              variants={item}
            >
              <div className="h-48 bg-gray-200 relative">
                {/* Replace with your image components */}
                <div className="w-full h-full bg-gradient-to-br from-purple-400 to-indigo-500 opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-gray-800">
                  {project.title}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <a 
                    href={project.link} 
                    className="text-purple-600 hover:text-purple-800 font-medium flex items-center transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/yourusername" 
            className="inline-flex items-center text-purple-600 hover:text-purple-800 font-medium transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Projects on GitHub
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
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
      title: "Solostack",
      description: "A startup company focused on providing solo developers with tools and resources to build and scale their business efficiently.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
      image: "/proj-1.png",
      link: "https://github.com/AbbasQadir/solostacked", // Add your Solostack link here
      category: "startup"
    },
    {
      id: 2,
      title: "Construction Company Website",
      description: "Modern and responsive website for a construction company, featuring project portfolios, service listings, and client testimonials.",
      tech: ["HTML", "CSS", "JS", "Bootstrap"],
      image: "/proj-2.png", // Replace with your image path
      link: "#", // Add your construction website link here
      category: "web"
    },
    {
      id: 3,
      title: "Mind & Motion E-commerce",
      description: "University Team Project- A e-commerce website that helps users achieve their health and fitness goals while supporting their hobbies, offering a wide range of products with all core functionalities of a typical e-commerce site.",
      tech: ["PHP", "HTML", "CSS", "JS", "MySQL"],
      image: "/proj-3.png", // Replace with your image path
      link: "https://github.com/AbbasQadir/Team-1", // Add your library link here
      category: "javascript"
    },
  
  ];

  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({});

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
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              variants={item}
            >
              <div className="h-48 relative overflow-hidden">
                {imageErrors[project.id] ? (
                  // Fallback gradient for when image fails to load
                  <div className="w-full h-full bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center">
                    <div className="text-white text-xl font-bold">{project.title}</div>
                  </div>
                ) : (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={project.id <= 3} // Load first 3 images immediately
                    onError={() => {
                      setImageErrors(prev => ({ ...prev, [project.id]: true }));
                    }}
                  />
                )}
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
                    View Project on GitHub
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
            href="https://github.com/AbbasQadir?tab=repositories" 
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
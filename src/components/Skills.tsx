"use client";
// components/Skills.tsx
import { motion } from "framer-motion";
import { useState } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills = () => {
  const skillsData: Skill[] = [
    // Frontend
    { name: "HTML/CSS", level: 95, category: "frontend" },
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "TypeScript", level: 85, category: "frontend" },
    { name: "React.js", level: 90, category: "frontend" },
    { name: "Next.js", level: 85, category: "frontend" },
    { name: "Tailwind CSS", level: 90, category: "frontend" },
    { name: "Framer Motion", level: 75, category: "frontend" },
    { name: "shadcn/UI", level: 80, category: "frontend" },
    
    // Backend
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Express.js", level: 75, category: "backend" },
    { name: "PostgreSQL", level: 85, category: "backend" },
    { name: "Python", level: 80, category: "backend" },
    { name: "PHP", level: 75, category: "backend" },
    { name: "MySql", level: 75, category: "backend" },
    
    // Tools & Others
    { name: "Git & GitHub", level: 85, category: "tools" },
    { name: "Figma", level: 80, category: "tools" },
    { name: "UI/UX Design", level: 75, category: "tools" },
    { name: "VS Code", level: 90, category: "tools" },
    { name: "Vercel", level: 85, category: "tools" },
    { name: "Trello", level: 82, category: "tools" },
  ];

  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  const filteredSkills = activeCategory === "all" 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
          <div className="mt-2 h-1 w-24 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded"></div>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {["all", "frontend", "backend", "tools"].map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category 
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
        
        {/* Skills Grid - More compact with 3 columns on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="flex justify-between mb-1">
                <span className="font-medium text-sm">{skill.name}</span>
                <span className="text-gray-500 text-xs">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <motion.div 
                  className="h-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600" 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Skills - More compact horizontal display */}
        <motion.div 
          className="mt-8 bg-white p-4 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold mb-3">Other Skills & Interests</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Responsive Design", "PWA", "SEO", "Accessibility", 
              "Performance Optimization", "Web Animation", "RESTful APIs",
              "State Management", "Cloud Services", "Agile Methodology"
            ].map((item, index) => (
              <motion.span 
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium"
                whileHover={{ scale: 1.05, backgroundColor: "#EDE9FE", color: "#5B21B6" }}
                transition={{ duration: 0.2 }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
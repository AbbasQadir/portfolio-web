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
    <section id="skills" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">My Skills</h2>
          <div className="mt-2 h-1 w-24 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded"></div>
          <p className="mt-4 text-lg text-gray-600">Technologies and tools I work with</p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
          {filteredSkills.map((skill, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <motion.div 
                  className="h-2.5 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600" 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Other Skills & Interests</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Responsive Design", "PWA", "SEO", "Accessibility", 
              "Performance Optimization", "Web Animation", "RESTful APIs",
              "State Management", "Cloud Services", "Agile Methodology"
            ].map((item, index) => (
              <motion.span 
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
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
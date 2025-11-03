"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaDatabase,
  FaTools,
  FaServer,
  FaDesktop,
  FaCodeBranch,
} from "react-icons/fa";

const skillCategories = [
  {
    id: 1,
    icon: <FaCode className="text-3xl text-indigo-600 mb-4" />,
    title: "Programming Languages",
    skills: [
      "C++",
      "Java",
      "C",
      "Python",
      "JavaScript",
      "HTML/CSS",
      "Prolog",
      "Clojure",
      "Lisp",
    ],
  },
  {
    id: 2,
    icon: <FaDesktop className="text-3xl text-indigo-600 mb-4" />,
    title: "Frontend Development",
    skills: ["React", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
  },
  {
    id: 3,
    icon: <FaServer className="text-3xl text-indigo-600 mb-4" />,
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "Next.js"],
  },
  {
    id: 4,
    icon: <FaDatabase className="text-3xl text-indigo-600 mb-4" />,
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "Neo4j", "MongoDB"],
  },
  {
    id: 5,
    icon: <FaCodeBranch className="text-3xl text-indigo-600 mb-4" />,
    title: "Version Control",
    skills: ["Git", "GitHub", "GitLab"],
  },
  {
    id: 6,
    icon: <FaTools className="text-3xl text-indigo-600 mb-4" />,
    title: "Tools & Others",
    skills: [
      "Docker",
      "OpenGL",
      "Data Structures",
      "Algorithms",
      "CMake",
      "Microsoft Suite",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Skills</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and competencies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 text-sm font-medium py-1 px-3 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 bg-white dark:bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Technical Proficiency
          </h3>

          <div className="space-y-6">
            <SkillBar skill="Frontend Development" percentage={85} />
            <SkillBar skill="Backend Development" percentage={80} />
            <SkillBar skill="Database Management" percentage={75} />
            <SkillBar skill="Object-Oriented Programming" percentage={90} />
            <SkillBar skill="Problem Solving" percentage={85} />
            <SkillBar skill="Version Control" percentage={80} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SkillBar({
  skill,
  percentage,
}: {
  skill: string;
  percentage: number;
}) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium text-gray-700 dark:text-gray-300">
          {skill}
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {percentage}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <motion.div
          className="bg-indigo-600 h-2.5 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>
    </div>
  );
}

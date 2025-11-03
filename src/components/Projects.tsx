"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Farm2Go",
    description:
      "A digital marketplace connecting local farmers directly with conscious consumers, enabling transparent, sustainable food shopping while supporting local agriculture and reducing food miles.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadcnUI",
      "SQLite",
      "Drizzle ORM",
    ],
    githubLink: "https://github.com/OGHO-SAYE/SOEN357-Farm2Go",
    liveLink: "https://www.loom.com/share/763c5cc6ae04445ba5a6016403ed0e85",
    imagePath: "/images/farm2GoHomePage.png",
  },
  {
    id: 2,
    title: "Rentaroo",
    description:
      "A comprehensive web application designed for travelers and individuals in Canada needing vehicle rentals. Features include a detailed car catalog, seamless reservation process, secure payment system, and user feedback functionality.",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "MERN Stack"],
    githubLink: "https://github.com/samjamhen/Watermelons-soen341projectW2024",
    liveLink: "https://www.loom.com/share/6d2af05264cb4b38a1cadd11e0b09a14",
    imagePath: "/images/rentarooLogo.png",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with Next.js, React, and Tailwind CSS to showcase my projects and skills.",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/OGHO-SAYE/portfolio",
    liveLink: "#",
    imagePath: "/images/portfoliopage.png",
  },
  {
    id: 4,
    title: "Omnifood Website",
    description:
      "A modern, fully responsive food delivery website built from scratch using HTML5, CSS3, and JavaScript. Created as part of a comprehensive web development course, featuring smooth animations, responsive design, and interactive elements for an optimal user experience across all devices.",
    tags: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
      "Web Development",
    ],
    githubLink: "https://github.com/OGHO-SAYE/omnifood", // You'll need to update this with your actual GitHub repo
    liveLink: "https://omnifood-oghosaye.netlify.app/",
    imagePath: "/images/omnifood.png",
  },
  {
    id: 5,
    title: "Campus Compass",
    description:
      "A cross-platform across iOS and Android devices. mobile navigation application built for Concordia University students and visitors to easily navigate both the SGW and Loyola campuses. Campus Compass provides detailed route guidance across various transportation modes,while also displaying information about campus buildings, and nearby points of interest such as cafés and restaurants.",
    tags: [
      "React Native",
      "TypeScript",
      "Expo",
      "Android",
      "iOS",
      "Google Maps API",
      "Cross-Platform Development",
      "UI/UX Design",
    ],
    githubLink:
      "https://github.com/Campus-Compass-SOEN-390/Watermelons_SOEN390",
    liveLink: "",
    imagePath: "/images/campusCompass.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my personal and academic projects that demonstrate my
            skills and interests.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700">
                {/* Replace with actual image when available */}
                <div className="absolute inset-0 flex items-center justify-center text-xl font-medium text-gray-500 dark:text-gray-400">
                  <Image
                    src={project.imagePath}
                    alt={project.title}
                    className="object-cover w-full h-full"
                    width={500}
                    height={300}
                  />
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-800 dark:text-indigo-200 text-xs font-medium py-1 px-2 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between mt-auto">
                  <a
                    href={project.githubLink}
                    className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="mr-1" /> Code
                  </a>
                  <a
                    href={project.liveLink}
                    className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="mr-1" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="https://github.com/OGHO-SAYE"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

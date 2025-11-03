"use client";

import { motion } from "framer-motion";
import { HiBriefcase, HiCalendar, HiLocationMarker } from "react-icons/hi";

const experiences = [
  {
    id: 1,
    role: "AI Solutions Developer",
    company: "Zetane Systems",
    location: "Montreal, QC",
    duration: "May 2024 - May 2025",
    description: [
      "Worked on AI solution projects for various applications",
      "Collaborated with cross-functional teams to deliver AI-powered solutions",
      "Implemented and optimized machine learning models for production environments",
      "Participated in research and development of new AI technologies",
    ],
  },
  {
    id: 2,
    role: "Software Developer",
    company: "CheckSammy",
    location: "Montreal, QC",
    duration: "2021 - 2022",
    description: [
      "Contributed to the development of sustainable junk removal operations platform",
      "Built and maintained web applications using modern JavaScript frameworks",
      "Implemented database solutions for tracking and managing customer data",
      "Collaborated with product team to develop new features and improvements",
    ],
  },
  {
    id: 3,
    role: "Call Center Manager",
    company: "Pragma",
    location: "Montreal, QC",
    duration: "2019 - 2021",
    description: [
      "Promoted from call center agent to manager based on performance",
      "Supervised a team of call center agents, providing coaching and performance feedback",
      "Implemented process improvements that increased customer satisfaction by 20%",
      "Collaborated with leadership team on strategic initiatives",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and the companies I have had the pleasure to
            work with.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg border border-gray-200 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-center mb-4">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <HiBriefcase className="mr-1" />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center">
                      <HiLocationMarker className="mr-1" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center">
                      <HiCalendar className="mr-1" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <span className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm font-medium py-1 px-3 rounded-full">
                    {index === 0 ? "Current" : "Previous"}
                  </span>
                </div>
              </div>

              <div className="mt-4">
                <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-400">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

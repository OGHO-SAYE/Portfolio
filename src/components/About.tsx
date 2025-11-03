"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know more about me, my background, and what drives me.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-72 md:w-80 md:h-96 overflow-hidden rounded-xl shadow-xl">
              {/* Using Next.js Image component with the SVG profile image */}
              <Image
                src="/images/profilephoto.png"
                alt="Profile"
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Software Engineering Student
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I am a 5th-year software engineering student passionate about
              creating efficient, scalable, and user-friendly applications. My
              journey in software development has equipped me with strong
              problem-solving skills and a keen eye for detail.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Throughout my academic career, I have worked on various projects
              that have helped me develop expertise in multiple programming
              languages and frameworks. I am particularly interested in web
              development, AI applications, and creating solutions that make a
              positive impact.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-bold text-indigo-600 dark:text-indigo-400">
                  Name:
                </h4>
                <p className="text-gray-600 dark:text-gray-400">Uyi Oronsaye</p>
              </div>
              <div>
                <h4 className="font-bold text-indigo-600 dark:text-indigo-400">
                  Email:
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  uoronsaye@gmail.com
                </p>
              </div>
              <div>
                <h4 className="font-bold text-indigo-600 dark:text-indigo-400">
                  Location:
                </h4>
                <p className="text-gray-600 dark:text-gray-400">Montreal, QC</p>
              </div>
              <div>
                <h4 className="font-bold text-indigo-600 dark:text-indigo-400">
                  Availability:
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Open to opportunities
                </p>
              </div>
            </div>

            <a
              href="/resume.pdf"
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

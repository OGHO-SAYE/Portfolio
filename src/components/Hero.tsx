"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowDown, HiDownload } from "react-icons/hi";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-20"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, I am{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            Uyi Oronsaye
          </span>
        </motion.h1>

        <motion.h2
          className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Software Developer | Problem Solver | Tech Enthusiast
        </motion.h2>

        <motion.p
          className="text-lg mb-12 max-w-2xl mx-auto text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          I build modern, efficient, and user-friendly applications. Currently a
          5th year software engineering student with experience in full-stack
          development.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <Link
            href="#projects"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            className="bg-transparent border border-indigo-600 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600/10 px-8 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            Contact Me
          </Link>
          <a
            href="/resume.pdf"
            className="bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 px-8 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <HiDownload className="ml-1" />
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        <Link
          href="#about"
          className="flex flex-col items-center text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          <span className="mb-1">Scroll Down</span>
          <HiArrowDown className="animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
}

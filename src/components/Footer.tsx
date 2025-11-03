import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="text-2xl font-bold">
              Portfolio
            </Link>
            <p className="mt-2 text-gray-400 max-w-md">
              Software engineering Student focused on building beautiful,
              functional, and user-friendly applications.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/OGHO-SAYE"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://linkedin.com/in/ogho-saye"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Uyi Oronsaye All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link
              href="#home"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="#experience"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Experience
            </Link>
            <Link
              href="#skills"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

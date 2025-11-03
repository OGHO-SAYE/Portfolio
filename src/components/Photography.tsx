"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const defaultPhotos = [
  // Replace these with files you add under /public/photos (e.g., "/photos/sunrise.jpg")
  "/images/DSC04687.JPG",
  "/images/DSC04272.JPG",
  "/images/2898535F-E7E8-4E5F-923F-EF34C9EFF274.JPG",
  "/images/DSC01810.JPG",
  "/images/DSC04266.JPG",
  "/images/B9225467-7197-4C94-BAF4-638CBA4DB9EF.JPG",
];

export default function Photography() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = defaultPhotos; // swap with your own list if desired
  const total = photos.length;

  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + total) % total);
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % total);

  if (total === 0) return null;

  return (
    <section id="photography" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Photography</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A small window into moments I captured. I enjoy framing stories
            through light and perspective.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
            <div className="relative h-[380px] sm:h-[460px] md:h-[520px]">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0.4, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <Image
                  src={photos[currentIndex]}
                  alt={`Photo ${currentIndex + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                  className="object-cover"
                  priority={currentIndex === 0}
                />
              </motion.div>
            </div>
          </div>

          {/* Controls */}
          <button
            type="button"
            aria-label="Previous photo"
            onClick={goPrev}
            className="absolute top-1/2 -translate-y-1/2 left-3 md:left-4 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-full p-2 shadow transition"
          >
            <HiChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={goNext}
            className="absolute top-1/2 -translate-y-1/2 right-3 md:right-4 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 rounded-full p-2 shadow transition"
          >
            <HiChevronRight className="h-6 w-6" />
          </button>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {photos.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to photo ${i + 1}`}
                onClick={() => setCurrentIndex(i)}
                className={`h-2.5 rounded-full transition-all ${
                  i === currentIndex
                    ? "w-6 bg-indigo-600"
                    : "w-2.5 bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-6">
          View the world through my lens, Photos taken by me with a Sony A7 III.
        </p>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import {
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";

const Vision = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const visionImages = [
    {
      src: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=800&h=600&fit=crop",
      caption: "Teaching underprivileged children in our community center",
    },
    {
      src: "/images/batch.jpg",
      caption: "Interactive learning sessions with local students",
    },
    {
      src: "images/group.jpg",
      caption: "Providing free educational resources and materials",
    },
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % visionImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + visionImages.length) % visionImages.length
    );
  };

  return (
    <div className="relative bg-gradient-to-b from-white via-yellow-50 to-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900"
        >
          The <span className="text-secondary">Vision Batch</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-600"
        >
          Empowering underprivileged students through{" "}
          <span className="font-semibold text-secondary">free, quality education</span>
        </motion.p>
        <div className="mt-6 w-20 h-1 bg-secondary mx-auto rounded-full"></div>
      </section>

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto px-6 py-12 md:py-20">
        <div className="bg-white shadow-xl rounded-2xl p-8 md:p-12 flex flex-col items-center text-center">
          <div className="w-16 h-16 flex items-center justify-center bg-secondary rounded-2xl shadow-lg mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Education for All
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            Our Vision Batch was born from the belief that education should not
            be a privilege, but a <span className="text-secondary font-semibold">
              fundamental right
            </span>. We’re breaking barriers and creating opportunities for
            underprivileged students to thrive.
          </p>
        </div>
      </section>


      {/* Gallery Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Journey in Pictures
          </h2>
          <p className="mt-2 text-gray-600">
            Witness the impact of our Vision Batch through these memorable
            moments
          </p>
        </div>

        <div className="relative rounded-xl overflow-hidden shadow-xl bg-white">
          <motion.img
            key={currentImageIndex}
            src={visionImages[currentImageIndex].src}
            alt={visionImages[currentImageIndex].caption}
            initial={{ opacity: 0.5, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full h-72 md:h-[500px] object-cover"
          />

          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 text-center text-sm md:text-base">
            {visionImages[currentImageIndex].caption}
          </div>

          {/* Controls */}
          <button
            onClick={prevImage}
            className="absolute top-1/2 hover:cursor-pointer left-4 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow hover:bg-white transition"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 hover:cursor-pointer right-4 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow hover:bg-white transition"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Indicators - moved outside */}
        <div className="flex justify-center mt-6 gap-2">
          {visionImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-3 h-3 hover:cursor-pointer rounded-full transition ${index === currentImageIndex
                ? "bg-secondary scale-110 shadow-md"
                : "bg-gray-300 hover:bg-gray-400"
                }`}
            ></button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Vision;

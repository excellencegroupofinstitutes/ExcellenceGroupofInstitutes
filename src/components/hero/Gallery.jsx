import React from "react";

// Sample core-tuition images (replace with your own)
import core1 from "../../assets/core-tuition.jpeg";
import core2 from "../../assets/core-tuition.jpeg";
import core3 from "../../assets/core-tuition.jpeg";
import core4 from "../../assets/core-tuition.jpeg";
import core5 from "../../assets/core-tuition.jpeg";
import core6 from "../../assets/core-tuition.jpeg";

const images = [
  { src: core1, col: "col-span-2", row: "row-span-2" },
  { src: core2, col: "col-span-1", row: "row-span-1" },
  { src: core3, col: "col-span-1", row: "row-span-2" },
  { src: core4, col: "col-span-2", row: "row-span-1" },
  { src: core5, col: "col-span-1", row: "row-span-1" },
  { src: core6, col: "col-span-1", row: "row-span-1" },
];

const core_tuition = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Our Gallery</h2>
        <p className="text-gray-500 mt-3">
          A glimpse of our journey, events, and achievements captured in frames.
        </p>
      </div>

      {/* Non-uniform Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]">
        {images.map((core, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-xl shadow-lg group cursor-pointer ${core.col} ${core.row}`}
          >
            <img
              src={core.src}
              alt={`core-tuition ${index + 1}`}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-500">
              <span className="text-white font-semibold text-lg">
                View Photo
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default core_tuition;

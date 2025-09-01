import React from "react";
import { FaQuoteLeft, FaRegUser } from "react-icons/fa";

// Sample testimonials data
const testimonials = [
  {
    name: "Sourav",
    role: "Student",
    text: "This institute changed my life! The teaching style, the support, and the resources were all beyond my expectations.",
  },
  {
    name: "Sushil Kumar",
    role: "Parent",
    text: "I’ve seen tremendous growth in my child’s confidence and performance. Highly recommend to all parents!",
  },
  {
    name: "Deepanshu",
    role: "Student",
    text: "The best place to learn and grow. The mentors are inspiring, and the community feels like family.",
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonial"
      className="bg-gradient-to-r max-w-[1560px] mx-auto from-yellow-50 via-white to-yellow-50 py-16 px-4 sm:px-6"
    >
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          What Our Students Say
        </h2>
        <p className="text-gray-600 mt-3 text-sm sm:text-base">
          Real experiences from people who have been part of our journey.
        </p>
      </div>

      {/* Testimonials Grid / Scrollable */}
      <div
        className="flex md:grid md:grid-cols-3 gap-6 md:gap-8
        overflow-x-auto md:overflow-visible p-4
        snap-x snap-mandatory scrollbar-hide"
      >
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl
              transition duration-500 group
              flex-shrink-0 w-[85%] sm:w-[80%] md:w-auto
              snap-center p-6 md:p-8
              min-h-[300px] flex flex-col justify-between"
          >
            {/* Quote Icon */}
            <FaQuoteLeft className="text-yellow-400 text-2xl sm:text-3xl absolute -top-4 -left-4 opacity-80 group-hover:scale-110 transition duration-300" />

            {/* User Image / Icon */}
            <div className="flex justify-center -mt-10">
              <FaRegUser className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 p-3 border-yellow-400 shadow-md bg-white" />
            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 mt-6 text-base sm:text-lg italic leading-relaxed flex-grow">
              "{t.text}"
            </p>

            {/* User Info */}
            <div className="mt-6 text-center">
              <h3 className="font-bold text-gray-900 text-lg sm:text-xl">{t.name}</h3>
              <p className="text-yellow-500 font-medium text-sm sm:text-base">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

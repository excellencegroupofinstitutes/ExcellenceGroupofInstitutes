import React from "react";
import { FaQuoteLeft,FaRegUser } from "react-icons/fa";

// Sample testimonials data
const testimonials = [
  {
    name: "Sourav",
    role: "Student",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    text: "This institute changed my life! The teaching style, the support, and the resources were all beyond my expectations.",
  },
  {
    name: "Sushil Kumar",
    role: "Parent",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "I’ve seen tremendous growth in my child’s confidence and performance. Highly recommend to all parents!",
  },
  {
    name: "Deepanshu",
    role: "Student",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "The best place to learn and grow. The mentors are inspiring, and the community feels like family.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonial" className="bg-gradient-to-r max-w-[1560px] mx-auto from-yellow-50 via-white to-yellow-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-extrabold text-gray-900">
          What Our Students Say
        </h2>
        <p className="text-gray-600 mt-3">
          Real experiences from people who have been part of our journey.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className=" md:grid md:grid-cols-3 md:gap-8
    flex md:flex-none overflow-x-auto  p-7
    snap-x snap-mandatory scrollbar-hide">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="rrelative bg-white rounded-2xl shadow-lg hover:shadow-2xl
              transition duration-500 group
              md:p-8 md:transform-none md:scale-100
              flex-shrink-0 w-[85%] sm:w-[90%]
              snap-center p-6
              transform scale-95 opacity-80
              first:ml-4 last:mr-4"
          >
            {/* Quote Icon */}
            <FaQuoteLeft className="text-yellow-400 text-3xl absolute -top-5 -left-5 opacity-80 group-hover:scale-110 transition duration-300" />

            {/* User Image */}
            <div className="flex justify-center -mt-12">
              {/* <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full border-4 border-yellow-400 shadow-md"
              /> */}
              <FaRegUser className="w-20 h-20 rounded-full border-3 p-4 border-yellow-400 shadow-md" />

            </div>

            {/* Testimonial Text */}
            <p className="text-gray-700 mt-6 text-lg italic leading-relaxed">
              "{t.text}"
            </p>

            {/* User Info */}
            <div className="mt-6 text-center">
              <h3 className="font-bold text-gray-900 text-xl">{t.name}</h3>
              <p className="text-yellow-500 font-medium">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;


import React, { useRef, useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";

const points = [
  {
    title: "ISO Certified Excellence",
    description:
      "An IAF ISO 9001:2015 certified institute ensuring quality education and credibility.",
  },
  {
    title: "Expert Faculty",
    description:
      "Learn under the guidance of highly experienced teachers and professionals.",
  },
  {
    title: "Comprehensive Tuitions",
    description:
      "From 1st to 10th, +1, +2 Commerce, Non-Medical & Medical subjects.",
  },
  {
    title: "Advanced Computer Courses",
    description:
      "Basic MS Office, Coding (Python/C/C++), Tally/GST, Photoshop, CorelDraw, IELTS, PTE, Spoken English.",
  },
  {
    title: "Modern Web Services",
    description:
      "Offering Web Designing, Web Development, and Web Hosting solutions.",
  },
];

const ChooseUsCard = () => {
  const cardRefs = useRef([]);
  const [readCards, setReadCards] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      cardRefs.current.forEach((el, index) => {
        if (el && !readCards.includes(index)) {
          const rect = el.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          const screenCenter = window.innerHeight / 1.3;

          if (elementCenter < screenCenter) {
            setReadCards((prev) => [...prev, index]);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [readCards]);

  return (
    <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-br from-secondary/50 to-white max-w-[1560px] mx-auto">
      <div className="max-w-7xl mx-auto text-center mb-10 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
          Why Choose Us?
        </h2>
        <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-2">
          At <span className="font-semibold">Suryansh Sir’s Institute</span>, we
          go beyond traditional teaching. With certified quality, expert
          faculty, and a wide range of academic and professional courses, we
          prepare you for real-world success.
        </p>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 sm:gap-12 max-w-7xl mx-auto">
        {/* Points List */}
        <div className="flex-1 grid gap-4 sm:gap-6">
          {points.map((point, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`group transition-all duration-700 ease-in-out transform rounded-lg sm:rounded-xl p-4 sm:p-6 border-l-4 shadow-md hover:shadow-lg hover:scale-[1.02] bg-white 
            ${
              readCards.includes(index)
                ? "border-secondary bg-gradient-to-r from-yellow-100 to-white"
                : "border-gray-300"
            }`}
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <FaCheckCircle
                  className={`text-xl sm:text-2xl mt-0.5 sm:mt-1 transition-colors duration-300 ${
                    readCards.includes(index)
                      ? "text-secondary"
                      : "text-gray-400"
                  }`}
                />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {point.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-700 mt-1">
                    {point.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Director Image (only visible on md+) */}
        <div className="hidden md:flex flex-1 relative justify-center items-center">
          <img
            src="/images/salesman3.png"
            alt="Director"
            className="z-10 relative w-60 sm:w-80 lg:w-120 h-auto rounded-xl"
          />
          <div className="absolute bottom-0 w-28 sm:w-40 h-3 sm:h-4 bg-black/30 rounded-full blur-md" />
        </div>
      </div>
    </section>
  );
};

export default ChooseUsCard;

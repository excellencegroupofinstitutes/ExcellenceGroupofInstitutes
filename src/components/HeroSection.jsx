import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    heading: "Expert Tuition Centers",
    paragraph: "Personalized tutoring for academic excellence and growth.",
    imgSrc: "https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg",
    imgAlt: "Tuition Center Image",
  },
  {
    heading: "Professional Web Services",
    paragraph: "Responsive web design and development for your business.",
    imgSrc: "https://images.pexels.com/photos/162622/facebook-login-office-laptop-business-162622.jpeg",
    imgAlt: "Web Services Image",
  },
  {
    heading: "Advanced Computer Centers",
    paragraph: "Modern tech courses in programming and IT skills.",
    imgSrc: "https://images.pexels.com/photos/5538618/pexels-photo-5538618.jpeg",
    imgAlt: "Computer Center Image",
  },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const { heading, paragraph, imgSrc, imgAlt } = slides[currentIndex];

  return (
    <section
      className="relative h-[80vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${imgSrc})` }}
      aria-label={imgAlt}
    >
      <div className="max-w-[1560px] mx-auto backdrop-blur-[2px] flex items-center justify-center h-full px-4 md:px-20 py-10">
        <div className="text-center bg-black/50 py-8 px-12 rounded-lg w-fit">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-10">
            {heading}
          </h1>
          <p className="text-base md:text-lg text-white">{paragraph}</p>
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 cursor-pointer transform -translate-y-1/2 bg-white bg-opacity-70 p-3 rounded-full text-primary hover:bg-opacity-90 hover:scale-[1.1] transition"
        aria-label="Previous slide"
      >
        <FaChevronLeft size={18} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 cursor-pointer transform -translate-y-1/2 bg-white bg-opacity-70 p-3 rounded-full text-primary hover:bg-opacity-90 hover:scale-[1.1] transition"
        aria-label="Next slide"
      >
        <FaChevronRight size={18} />
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
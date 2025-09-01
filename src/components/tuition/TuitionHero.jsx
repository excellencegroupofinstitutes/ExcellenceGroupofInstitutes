import {
  MdOutlineScience,
  MdCalculate,
  MdOutlineBook,
  MdOutlineHistory,
  MdOutlinePublic,
  MdOutlineComputer,
  MdAccountBalanceWallet,
} from "react-icons/md";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

const TuitionHero = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -200 : 200,
        behavior: "smooth",
      });
    }
  };

  const subjects = [
    { name: "Science", Icon: MdOutlineScience },
    { name: "Mathematics", Icon: MdCalculate },
    { name: "English", Icon: MdOutlineBook },
    { name: "History", Icon: MdOutlineHistory },
    { name: "Geography", Icon: MdOutlinePublic },
    { name: "Computer", Icon: MdOutlineComputer },
    { name: "Accounts", Icon: MdAccountBalanceWallet },
  ];

  return (
    <section className="bg-gradient-to-b max-w-[1560px] mx-auto from-white to-secondary-hover pb-15 px-9">
      <div className="mb-8">
        <h2 className="text-4xl md:text-6xl lg:text-7xl py-10 text-center font-[300]">
          Strive for excellence <br /> success will follow
        </h2>
        <p className="text-center md:text-lg text-gray-700 font-[300]">
          We believe every student has the potential to excel. Our mission is to
          nurture that potential with personalized tuition for lasting success
        </p>
      </div>

 {/* Subjects container */}
<div className="relative max-w-[960px] mx-auto bg-white/70 rounded-[40px] sm:rounded-[100px] p-2 sm:p-3">
  {/* Left Button */}
  <button
    onClick={() => scroll("left")}
    className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-1.5 sm:p-2 z-10"
  >
    <FaChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
  </button>

  {/* Scrollable subjects */}
  <div
    ref={scrollRef}
    className="flex gap-4 sm:gap-10 overflow-x-auto scrollbar-hide scroll-smooth px-4 sm:px-8"
  >
    {subjects.map((subject, i) => (
      <div
        key={i}
        className="flex flex-col items-center justify-center rounded-2xl sm:rounded-4xl px-3 sm:px-5 py-2 sm:py-3 hover:bg-white cursor-pointer transition-colors duration-300 shrink-0"
      >
        {/* Icon with responsive size */}
        <subject.Icon className="w-5 h-5 sm:w-8 sm:h-8 mb-1 sm:mb-2" />
        <p className="text-xs sm:text-lg font-medium">{subject.name}</p>
      </div>
    ))}
  </div>

  {/* Right Button */}
  <button
    onClick={() => scroll("right")}
    className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-1.5 sm:p-2 z-10"
  >
    <FaChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
  </button>
</div>


    </section>
  );
};

export default TuitionHero;

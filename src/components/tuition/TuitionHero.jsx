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
    <section className="bg-gradient-to-b max-w-[1560px] mx-auto from-white to-secondary-hover min-h-[500px] pb-15 px-9">
      <div className="mb-8">
        <h2 className="text-5xl md:text-6xl lg:text-7xl py-10 text-center font-[200]">
          Strive for excellence <br /> success will follow
        </h2>
        <p className="text-center text-2xl text-gray-700 font-[200]">
          Primary Text Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
      </div>

      {/* Subjects container */}
      <div className="relative max-w-[960px] mx-auto bg-white/70 rounded-[100px] p-3">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 z-10"
        >
          <FaChevronLeft />
        </button>

        {/* Scrollable subjects */}
        <div
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto scrollbar-hide scroll-smooth px-8"
        >
          {subjects.map((subject, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center rounded-4xl px-5 py-3 hover:bg-white cursor-pointer transition-colors duration-300 shrink-0"
            >
              <subject.Icon size={30} className="mb-2" />
              <p className="text-lg font-medium">{subject.name}</p>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white shadow-lg rounded-full p-2 z-10"
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default TuitionHero;

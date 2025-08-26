import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";

const Course = () => {
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Learn to build modern web applications",
      modules: 12,
      rating: 4.8,
      reviews: 120,
      chapters: [
        "Chapter 1: Introduction to Web Development",
        "Chapter 2: HTML Fundamentals",
        "Chapter 3: CSS Basics",
        "Chapter 4: JavaScript Essentials",
        "Chapter 5: Front-End Frameworks",
        "Chapter 6: Back-End Development with Node.js",
        "Chapter 7: Databases and SQL",
        "Chapter 8: RESTful APIs",
        "Chapter 9: Authentication and Security",
        "Chapter 10: Deployment and Hosting",
        "Chapter 11: Testing and Debugging",
        "Chapter 12: Advanced Topics"
      ]
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      description: "Learn to build modern web applications",
      modules: 12,
      rating: 4.8,
      reviews: 120,
      chapters: [
        "Chapter 1: Introduction to Web Development",
        "Chapter 2: HTML Fundamentals",
        "Chapter 3: CSS Basics",
        "Chapter 4: JavaScript Essentials",
        "Chapter 5: Front-End Frameworks",
        "Chapter 6: Back-End Development with Node.js",
        "Chapter 7: Databases and SQL",
        "Chapter 8: RESTful APIs",
        "Chapter 9: Authentication and Security",
        "Chapter 10: Deployment and Hosting",
        "Chapter 11: Testing and Debugging",
        "Chapter 12: Advanced Topics"
      ]
    },
    {
      id: 3,
      title: "Full Stack Web Development",
      description: "Learn to build modern web applications",
      modules: 12,
      rating: 4.8,
      reviews: 120,
      chapters: [
        "Chapter 1: Introduction to Web Development",
        "Chapter 2: HTML Fundamentals",
        "Chapter 3: CSS Basics",
        "Chapter 4: JavaScript Essentials",
        "Chapter 5: Front-End Frameworks",
        "Chapter 6: Back-End Development with Node.js",
        "Chapter 7: Databases and SQL",
        "Chapter 8: RESTful APIs",
        "Chapter 9: Authentication and Security",
        "Chapter 10: Deployment and Hosting",
        "Chapter 11: Testing and Debugging",
        "Chapter 12: Advanced Topics"
      ]
    },
    {
      id: 4,
      title: "Full Stack Web Development",
      description: "Learn to build modern web applications",
      modules: 12,
      rating: 4.8,
      reviews: 120,
      chapters: [
        "Chapter 1: Introduction to Web Development",
        "Chapter 2: HTML Fundamentals",
        "Chapter 3: CSS Basics",
        "Chapter 4: JavaScript Essentials",
        "Chapter 5: Front-End Frameworks",
        "Chapter 6: Back-End Development with Node.js",
        "Chapter 7: Databases and SQL",
        "Chapter 8: RESTful APIs",
        "Chapter 9: Authentication and Security",
        "Chapter 10: Deployment and Hosting",
        "Chapter 11: Testing and Debugging",
        "Chapter 12: Advanced Topics"
      ]
    }
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  const openModal = (course) => {
    setSelectedCourse(course);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCourse(null);
  };

  return (
    <section className="relative mt-20 px-4">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="flex rounded-sm overflow-hidden shadow-md">
              <div className="bg-white w-2/3 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-gray-500 uppercase">Course</p>
                  <h3 className="text-xl font-bold text-gray-800">{course.title}</h3>
                </div>
                <p
                  className="text-blue-600 mt-5 hover:underline cursor-pointer"
                  onClick={() => openModal(course)}
                >
                  View Details
                </p>
              </div>
              <div className="bg-yellow-400 w-1/3 p-6 flex flex-col justify-between">
                <div>
                  <p className="text-sm hidden lg:block text-gray-800 mb-3">{course.description}</p>
                  <p className="text-sm font-semibold mb-3 text-gray-800">{course.modules} Modules</p>
                </div>
                <div className="text-sm flex flex-col text-gray-800">
                  <span>{course.rating} ({course.reviews} Reviews)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

     {isModalOpen && selectedCourse && (
  <div
    className="fixed inset-0 bg-black/40 backdrop-blur-2xl flex items-center justify-center z-50"
    onClick={closeModal}
  >
    <div
      className="bg-white p-8 rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto relative"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Icon */}
      <button
        className="absolute top-3 right-3 text-gray-600 hover:text-black"
        onClick={closeModal}
      >
        <IoMdClose size={24} className='cursor-pointer' />
      </button>

      <h2 className="text-2xl font-bold mb-4">{selectedCourse.title} Chapters</h2>
      <ul className="list-disc pl-5">
        {selectedCourse.chapters.map((chapter, index) => (
          <li key={index} className="mb-2">{chapter}</li>
        ))}
      </ul>
    </div>
  </div>
)}

    </section>
  );
};

export default Course;
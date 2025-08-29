import { MdOutlineLibraryBooks } from "react-icons/md";
import { RiEnglishInput } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { useState } from "react";

const courses = [
  {
    icon: <MdOutlineLibraryBooks className="text-secondary w-full h-full" />,
    title: "Class 1st to 10th",
    desc: "All Subjects of Class 1st to 10th, PSEB and CBSE",
  },
  {
    icon: <FaReact className="text-secondary w-full h-full" />,
    title: "+1 & +2",
    desc: "All subjects of Medical, Non-Medical & Commerce",
  },
  {
    icon: <RiEnglishInput className="text-secondary w-full h-full" />,
    title: "Spoken English Classes",
    desc: "Improve fluency, grammar, and communication skills for daily and professional use.",
  },
  {
    icon: <RiEnglishInput className="text-secondary w-full h-full" />,
    title: "IELTS and PTE",
    desc: "Comprehensive training for IELTS & PTE exams with expert guidance and practice.",
  },
];

const TuitionCourses = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");

  const openModal = (title) => {
    setSelectedCourse(title);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCourse("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    closeModal();
  };

  return (
    <section className="relative p-4 mt-15">
      <div className="max-w-[1080px] grid place-items-center gap-9 md:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto">
        {courses.map((course, index) => (
          <div
            key={index}
            className="w-[250px] h-[280px] shadow-lg flex flex-col justify-between py-3 pb-7 px-5 transform transition-transform duration-300 hover:scale-105"
          >
            <div>
              <div className="w-[45px] h-[45px] rounded-full bg-secondary-light p-3 mb-4">
                {course.icon}
              </div>
              <h3 className="text-[17px] font-[500] mb-2">{course.title}</h3>
              <p className="text-gray-400 text-sm">{course.desc}</p>
            </div>
            <div>
              <hr className="text-gray-300 my-4" />
              <button
                onClick={() => openModal(course.title)}
                className="text-white bg-secondary transform transition-all rounded-sm duration-300 font-[500] py-[5px] hover:translate-y-1 hover:cursor-pointer w-full"
              >
                Enquire Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-lg z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Enquiry Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                required
                className="w-full border rounded p-2"
              />
              <input
                type="email"
                placeholder="Email"
                required
                className="w-full border rounded p-2"
              />
              <input
                type="tel"
                placeholder="Contact"
                required
                className="w-full border rounded p-2"
              />
              <input
                type="text"
                value={selectedCourse}
                readOnly
                className="w-full border rounded p-2 bg-gray-100"
              />
              <textarea
                placeholder="Message"
                rows="3"
                className="w-full border rounded p-2 resize-none"
              ></textarea>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 hover:cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-secondary text-white rounded hover:bg-secondary-hover hover:cursor-pointer"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default TuitionCourses;

import { MdOutlineLibraryBooks } from "react-icons/md";
import { RiEnglishInput } from "react-icons/ri";
import { FaReact } from "react-icons/fa6";
import { useState } from "react";
import { toast } from "react-toastify";
import api from "../../service/api";
import { motion } from "framer-motion";


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
  const [loading, setLoading] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    requirement: selectedCourse,
    preferredTiming: null,
    reason: "Tuition",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, contactNumber, message } = formData;

    if (!name.trim()) {
      toast.error("Name is required");
      return false;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(contactNumber)) {
      toast.error("Please enter a valid 10-digit contact number");
      return false;
    }

    if (!message) {
      toast.error("Tell us something about enquiry in message field")
      return false
    }

    return true;
  };


  const openModal = (title) => {
    setSelectedCourse(title);
    setFormData((prev) => ({ ...prev, requirement: title }));
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setFormData({
      name: "",
      email: "",
      contactNumber: "",
      requirement: selectedCourse,
      preferredTiming: null,
      reason: "Tuition",
      message: ""
    })
    setSelectedCourse("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setLoading(true);
    try {
      await api.post("/book-demo", formData);
      toast.success("Demo booked successfully!");

      setFormData({
        name: "",
        email: "",
        contactNumber: "",
        requirement: selectedCourse,
        preferredTiming: null,
        reason: "Tuition",
        message: ""
      })
      setSelectedCourse("");
      closeModal()
    } catch (error) {
      console.error("Enquiry error :", error);
      toast.error(
        error.response?.data?.message || "Failed to submit enquiry. Try again."
      );
    } finally {
      setLoading(false)
    }

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
              <h3 className="text-[17px] font-[500] mb davranış: 2">{course.title}</h3>
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


        {/* <div className="max-w-[1080px] grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto">
          {courses.map((course, index) => (
            <div
              key={index}
              className="w-full h-[280px] shadow-lg flex flex-col justify-between py-3 pb-7 px-5 transform transition-transform duration-300 hover:scale-105"
            >
              <div>
                <div className="w-[45px] h-[45px] rounded-full bg-secondary-light p-3 mb-4 flex items-center justify-center">
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
        </div> */}



      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-lg z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg">
            <h2 className="text-2xl font-semibold mb-8">Enquiry Form</h2>
            <form onSubmit={handleSubmit} className="space-y-9">
              {/* Name Input */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  required
                  className="w-full px-4 py-2 border-b border-gray-300  focus:outline-none focus:border-secondary peer"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-2 text-gray-500 transition-all duration-300 transform origin-left peer-focus:-top-6 peer-focus:left-2 peer-focus:text-sm peer-focus:text-secondary peer-valid:-top-6 peer-valid:text-sm "
                >
                  Name
                </label>
              </div>

              {/* Email Input */}
              <div className="relative">
                <input
                  type="text"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}
                  required
                  className="w-full px-4 py-2 border-b border-gray-300  focus:outline-none focus:border-secondary peer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-2 text-gray-500 transition-all duration-300 transform origin-left peer-focus:-top-6 peer-focus:left-2 peer-focus:text-sm peer-focus:text-secondary peer-valid:-top-6 peer-valid:text-sm"
                >
                  Email
                </label>
              </div>

              {/* Contact Input */}
              <div className="relative">
                <input
                  type="tel"
                  id="contact"
                  name="contactNumber"
                  onChange={handleChange}
                  value={formData.contactNumber}
                  required
                  className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-secondary peer"
                  placeholder=" "
                />
                <label
                  htmlFor="contact"
                  className="absolute left-4 top-2 text-gray-500 transition-all duration-300 transform origin-left peer-focus:-top-6 peer-focus:left-2 peer-focus:text-sm peer-focus:text-secondary peer-valid:-top-6 peer-valid:text-sm"
                >
                  Contact
                </label>
              </div>

              {/* Selected Course (Read-only) */}
              <div className="relative">
                <input
                  type="text"
                  id="course"
                  value={selectedCourse}
                  readOnly
                  className="w-full px-4 py-2 border-b border-gray-300  bg-gray-100 focus:outline-none"
                  placeholder=" "
                />
                <label
                  htmlFor="course"
                  className="absolute left-4 -top-6 text-sm text-gray-500"
                >
                  Selected Course
                </label>
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <textarea
                  id="message"
                  rows="3"
                  name="message"
                  onChange={handleChange}
                  value={formData.message}
                  className="w-full px-4 py-2 border-b border-gray-300  focus:outline-none focus:border-secondary peer resize-none"
                  placeholder=" "
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 top-2 text-gray-500 transition-all duration-300 transform origin-left peer-focus:-top-6 peer-focus:left-2 peer-focus:text-sm peer-focus:text-secondary peer-valid:-top-6 peer-valid:text-sm"
                >
                  Message
                </label>
              </div>

              <div className="flex gap-3">
                <motion.button
                  type="button"
                  onClick={closeModal}
                  className="px-4 py-2 flex-1 bg-gray-300 rounded hover:bg-gray-400 hover:cursor-pointer"
                  disabled={loading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Cancel
                </motion.button>
                <motion.button
                  type="submit"
                  className="px-4 py-2 flex-1 bg-secondary text-white rounded hover:bg-secondary-hover hover:cursor-pointer"
                  disabled={loading}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {loading ? "Submitting..." : "Submit"}
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      )}


    </section>
  );
};

export default TuitionCourses;
// import React, { useState } from 'react';
// import { FaDatabase, FaFileInvoiceDollar, FaCode } from "react-icons/fa";
// import { SiAdobephotoshop, SiCoreldraw, SiAutodesk } from "react-icons/si";
// import { MdComputer, MdOutlineWeb } from "react-icons/md";
// import { RiMicrosoftFill } from "react-icons/ri";
// const Course = () => {
//   const courses = [
//     {
//       icon: <FaFileInvoiceDollar className="text-secondary w-full h-full" />,
//       title: "Tally Software / GST",
//       desc: "Learn Tally with GST for accounting and taxation.",
//     },
//     {
//       icon: <SiAdobephotoshop className="text-secondary w-full h-full" />,
//       title: "Photoshop",
//       desc: "Master photo editing and creative design tools.",
//     },
//     {
//       icon: <SiCoreldraw className="text-secondary w-full h-full" />,
//       title: "CorelDraw",
//       desc: "Design logos, layouts, and vector graphics.",
//     },
//     {
//       icon: <MdComputer className="text-secondary w-full h-full" />,
//       title: "All Computer Courses",
//       desc: "Complete training in essential computer skills.",
//     },
//     {
//       icon: <RiMicrosoftFill className="text-secondary w-full h-full" />,
//       title: "Basic (MS Office)",
//       desc: "Learn MS Word, Excel, and PowerPoint basics.",
//     },
//     {
//       icon: <FaCode className="text-secondary w-full h-full" />,
//       title: "Coding (Python / C / C++)",
//       desc: "Programming fundamentals in Python, C, and C++.",
//     },
//     {
//       icon: <SiAutodesk className="text-secondary w-full h-full" />,
//       title: "AutoCAD",
//       desc: "2D drafting and 3D design for engineering work.",
//     },
//     {
//       icon: <FaDatabase className="text-secondary w-full h-full" />,
//       title: "Microsoft Power BI",
//       desc: "Create reports and dashboards with Power BI.",
//     },
//     {
//       icon: <MdOutlineWeb className="text-secondary w-full h-full" />,
//       title: "Web Designing & Development",
//       desc: "Build modern, responsive, and user-friendly websites.",
//     },
//   ];
//   const [loading, setLoading] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedCourse, setSelectedCourse] = useState("");
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     contactNumber: "",
//     requirement: selectedCourse,
//     preferredTiming: null,
//     reason: "Computer center",
//     message: ""
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateForm = () => {
//     const { name, email, contactNumber, message } = formData;

//     if (!name.trim()) {
//       toast.error("Name is required");
//       return false;
//     }

//     const emailRegex = /^\S+@\S+\.\S+$/;
//     if (!emailRegex.test(email)) {
//       toast.error("Please enter a valid email address");
//       return false;
//     }

//     const phoneRegex = /^[0-9]{10}$/;
//     if (!phoneRegex.test(contactNumber)) {
//       toast.error("Please enter a valid 10-digit contact number");
//       return false;
//     }

//     if (!message) {
//       toast.error("Tell us something about enquiry in message field")
//       return false
//     }

//     return true;
//   };

//   const openModal = (title) => {
//     setSelectedCourse(title);
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//     setSelectedCourse("");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert("Form submitted!");
//     closeModal();
//   };
//   return (
//     <section className="relative p-4 mt-15">
//       <div className="max-w-[1080px] grid place-items-center space-y-6 gap-9 md:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto">
//         {courses.map((course, index) => (
//           <div
//             key={index}
//             className="w-[250px] h-[280px] shadow-lg flex flex-col justify-between py-3 pb-7 px-5 transform transition-transform duration-300 hover:scale-105"
//           >
//             <div>
//               <div className="w-[45px] h-[45px] rounded-full bg-secondary-light p-3 mb-4">
//                 {course.icon}
//               </div>
//               <h3 className="text-[17px] font-[500] mb davranış: 2">{course.title}</h3>
//               <p className="text-gray-400 text-sm">{course.desc}</p>
//             </div>
//             <div>
//               <hr className="text-gray-300 my-4" />
//               <button
//                 onClick={() => openModal(course.title)}
//                 className="text-white bg-secondary transform transition-all rounded-sm duration-300 font-[500] py-[5px] hover:translate-y-1 hover:cursor-pointer w-full"
//               >
//                 Enquire Now
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal */}
//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-lg z-50">
//           <div className="bg-white rounded-lg p-6 w-[90%] max-w-md shadow-lg">
//             <h2 className="text-2xl font-semibold mb-8">Enquiry Form</h2>
//             <form onSubmit={handleSubmit} className="space-y-9">
//               {/* Name Input */}
//               <div className="relative">
//                 <input
//                   type="text"
//                   id="name"
//                   required
//                   className="w-full px-4 py-2 border-b border-gray-300  focus:outline-none focus:border-secondary peer"
//                   placeholder=" "
//                 />
//                 <label
//                   htmlFor="name"
//                   className="absolute left-4 top-2 text-gray-500 transition-all duration-300 transform origin-left peer-focus:-top-6 peer-focus:left-2 peer-focus:text-sm peer-focus:text-secondary peer-valid:-top-6 peer-valid:text-sm "
//                 >
//                   Name
//                 </label>
//               </div>

//               {/* Email Input */}
//               <div className="relative">
//                 <input
//                   type="email"
//                   id="email"
//                   required
//                   className="w-full px-4 py-2 border-b border-gray-300  focus:outline-none focus:border-secondary peer"
//                   placeholder=" "
//                 />
//                 <label
//                   htmlFor="email"
//                   className="absolute left-4 top-2 text-gray-500 transition-all duration-300 transform origin-left peer-focus:-top-6 peer-focus:left-2 peer-focus:text-sm peer-focus:text-secondary peer-valid:-top-6 peer-valid:text-sm"
//                 >
//                   Email
//                 </label>
//               </div>

//               {/* Contact Input */}
//               <div className="relative">
//                 <input
//                   type="tel"
//                   id="contact"
//                   required
//                   className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-secondary peer"
//                   placeholder=" "
//                 />
//                 <label
//                   htmlFor="contact"
//                   className="absolute left-4 top-2 text-gray-500 transition-all duration-300 transform origin-left peer-focus:-top-6 peer-focus:left-2 peer-focus:text-sm peer-focus:text-secondary peer-valid:-top-6 peer-valid:text-sm"
//                 >
//                   Contact
//                 </label>
//               </div>

//               {/* Selected Course (Read-only) */}
//               <div className="relative">
//                 <input
//                   type="text"
//                   id="course"
//                   value={selectedCourse}
//                   readOnly
//                   className="w-full px-4 py-2 border-b border-gray-300  bg-gray-100 focus:outline-none"
//                   placeholder=" "
//                 />
//                 <label
//                   htmlFor="course"
//                   className="absolute left-4 -top-6 text-sm text-gray-500"
//                 >
//                   Selected Course
//                 </label>
//               </div>

//               {/* Message Textarea */}
//               <div className="relative">
//                 <textarea
//                   id="message"
//                   rows="3"
//                   className="w-full px-4 py-2 border-b border-gray-300  focus:outline-none focus:border-secondary peer resize-none"
//                   placeholder=" "
//                 ></textarea>
//                 <label
//                   htmlFor="message"
//                   className="absolute left-4 top-2 text-gray-500 transition-all duration-300 transform origin-left peer-focus:-top-6 peer-focus:left-2 peer-focus:text-sm peer-focus:text-secondary peer-valid:-top-6 peer-valid:text-sm"
//                 >
//                   Message
//                 </label>
//               </div>

//               <div className="flex gap-3">
//                 <button
//                   type="button"
//                   onClick={closeModal}
//                   className="px-4 py-2 flex-1 bg-gray-300 rounded hover:bg-gray-400 hover:cursor-pointer"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 flex-1 bg-secondary text-white rounded hover:bg-secondary-hover hover:cursor-pointer"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}


//     </section>
//   );
// };

// export default Course;

import React, { useState } from "react";
import { FaDatabase, FaFileInvoiceDollar, FaCode } from "react-icons/fa";
import { SiAdobephotoshop, SiCoreldraw, SiAutodesk } from "react-icons/si";
import { MdComputer, MdOutlineWeb } from "react-icons/md";
import { RiMicrosoftFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import api from "../../service/api";

const Course = () => {
  const courses = [
    {
      icon: <FaFileInvoiceDollar className="text-secondary w-full h-full" />,
      title: "Tally Software / GST",
      desc: "Learn Tally with GST for accounting and taxation.",
    },
    {
      icon: <SiAdobephotoshop className="text-secondary w-full h-full" />,
      title: "Photoshop",
      desc: "Master photo editing and creative design tools.",
    },
    {
      icon: <SiCoreldraw className="text-secondary w-full h-full" />,
      title: "CorelDraw",
      desc: "Design logos, layouts, and vector graphics.",
    },
    {
      icon: <MdComputer className="text-secondary w-full h-full" />,
      title: "All Computer Courses",
      desc: "Complete training in essential computer skills.",
    },
    {
      icon: <RiMicrosoftFill className="text-secondary w-full h-full" />,
      title: "Basic (MS Office)",
      desc: "Learn MS Word, Excel, and PowerPoint basics.",
    },
    {
      icon: <FaCode className="text-secondary w-full h-full" />,
      title: "Coding (Python / C / C++)",
      desc: "Programming fundamentals in Python, C, and C++.",
    },
    {
      icon: <SiAutodesk className="text-secondary w-full h-full" />,
      title: "AutoCAD",
      desc: "2D drafting and 3D design for engineering work.",
    },
    {
      icon: <FaDatabase className="text-secondary w-full h-full" />,
      title: "Microsoft Power BI",
      desc: "Create reports and dashboards with Power BI.",
    },
    {
      icon: <MdOutlineWeb className="text-secondary w-full h-full" />,
      title: "Web Designing & Development",
      desc: "Build modern, responsive, and user-friendly websites.",
    },
  ];

  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    requirement: selectedCourse,
    preferredTiming: null,
    reason: "Computer center",
    message: "",
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

    if (!message.trim()) {
      toast.error("Tell us something about enquiry in message field");
      return false;
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
    setSelectedCourse("");
    setFormData({
      name: "",
      email: "",
      contactNumber: "",
      requirement: "",
      preferredTiming: null,
      reason: "Computer center",
      message: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await api.post("/book-demo", formData);
      toast.success("Demo booked successfully!");

      closeModal(); // reset after success
    } catch (error) {
      console.error("Enquiry error:", error);
      toast.error(
        error.response?.data?.message || "Failed to submit enquiry. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="computer-courses" className="relative p-4 mt-15">
      <div className="max-w-[1080px] grid place-items-center space-y-6 gap-9 md:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto">
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
            <h2 className="text-2xl font-semibold mb-8">Enquiry Form</h2>
            <form onSubmit={handleSubmit} className="space-y-9">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-secondary peer"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-2 text-gray-500 transition-all duration-300 transform origin-left peer-focus:-top-6 peer-focus:text-sm peer-focus:text-secondary peer-valid:-top-6 peer-valid:text-sm"
                >
                  Name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-secondary peer"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-2 text-gray-500 transition-all duration-300 transform origin-left peer-focus:-top-6 peer-focus:text-sm peer-focus:text-secondary peer-valid:-top-6 peer-valid:text-sm"
                >
                  Email
                </label>
              </div>

              {/* Contact */}
              <div className="relative">
                <input
                  type="tel"
                  id="contact"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-secondary peer"
                  placeholder=" "
                />
                <label
                  htmlFor="contact"
                  className="absolute left-4 top-2 text-gray-500 transition-all duration-300 transform origin-left peer-focus:-top-6 peer-focus:text-sm peer-focus:text-secondary peer-valid:-top-6 peer-valid:text-sm"
                >
                  Contact
                </label>
              </div>

              {/* Selected Course */}
              <div className="relative">
                <input
                  type="text"
                  id="course"
                  value={selectedCourse}
                  readOnly
                  className="w-full px-4 py-2 border-b border-gray-300 bg-gray-100 focus:outline-none"
                  placeholder=" "
                />
                <label
                  htmlFor="course"
                  className="absolute left-4 -top-6 text-sm text-gray-500"
                >
                  Selected Course
                </label>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-secondary peer resize-none"
                  placeholder=" "
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 top-2 text-gray-500 transition-all duration-300 transform origin-left peer-focus:-top-6 peer-focus:text-sm peer-focus:text-secondary peer-valid:-top-6 peer-valid:text-sm"
                >
                  Message
                </label>
              </div>

              {/* Buttons */}
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

export default Course;

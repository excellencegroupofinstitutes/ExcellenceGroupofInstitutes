import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../service/api";

export default function BookDemoForm() {
  const timingOptions = [
    "Morning (9 AM - 12 PM)",
    "Afternoon (12 PM - 4 PM)",
    "Evening (4 PM - 8 PM)",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    preferredTiming: "",
    reason: "Demo Class",
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate inputs
  const validateForm = () => {
    const { name, email, contactNumber, preferredTiming } = formData;

    if (!name.trim()) {
      toast.error("Name is required");
      return false;
    }

    // Email validation regex
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    // Contact number validation (10 digits only)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(contactNumber)) {
      toast.error("Please enter a valid 10-digit contact number");
      return false;
    }

    if (!preferredTiming) {
      toast.error("Please select a preferred timing");
      return false;
    }

    return true;
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // stop if validation fails

    setLoading(true);
    try {
      await api.post("/book-demo", formData);
      toast.success("Demo booked successfully!");
      setFormData({
        name: "",
        email: "",
        contactNumber: "",
        preferredTiming: "",
        reason: "Demo Class",
      });
    } catch (error) {
      console.error("Error booking demo:", error);
      toast.error(
        error.response?.data?.message || "Failed to book demo. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      id="book-demo"
      className="relative max-w-[1560px] mx-auto py-40 flex items-center justify-center bg-gray-50 overflow-hidden"
    >
      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Curved Gradient Background */}
      <div className="absolute inset-0">
        <svg
          className="absolute right-0 top-0 h-full w-1/2 z-10"
          viewBox="0 0 500 800"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,200 300,600 0,800 L500,800 L500,0 Z"
            fill="url(#gradient)"
          />
          <defs>
            <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#f8cb21" />
              <stop offset="100%" stopColor="#00000" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-11/12 max-w-6xl rounded-2xl shadow-2xl bg-white overflow-hidden">
        {/* Left - Form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Book a Free Demo Class
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Contact Number
              </label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Your contact number"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Preferred Timing
              </label>
              <select
                name="preferredTiming"
                value={formData.preferredTiming}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:outline-none"
              >
                <option value="">Select an option</option>
                {timingOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-primary text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-primary-hover transition disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit"}
            </motion.button>
          </form>
        </div>

        {/* Right - Gradient Area with Text */}
        <div className="hidden md:flex w-1/2 items-center justify-center text-gray-600 p-10 relative z-50">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold break-words">SURYANSH SIR’S</h2>
            <p className="text-[17px] mt-1 text-gray-700 break-words text-left">Excellence Group of Institutes</p>
            <p className="mt-4 text-lg">
              An IAF ISO 9001:2015 Certified Institute
            </p>
            <p className="mt-2">Tuitions • Computer Courses • Web Services</p>
          </div>
        </div>
      </div>
    </div>
  );
}

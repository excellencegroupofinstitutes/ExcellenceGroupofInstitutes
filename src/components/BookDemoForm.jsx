import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../service/api";
import { useNavigate } from "react-router-dom";

export default function BookDemoForm({ demoReason }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    message: "",
    reason: demoReason,
    consent: false, // ✅ added
  });

  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Validate inputs
  const validateForm = () => {
    const { name, email, contactNumber, consent } = formData;

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

    if (!consent) {
      toast.error("Please agree to the Privacy Policy");
      return false;
    }

    return true;
  };

  // Handle submit
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
        message: "",
        reason: demoReason,
        consent: false,
      });
    } catch (error) {
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
      className="relative max-w-[1560px] mx-auto py-20 sm:py-40 flex items-center justify-center bg-gray-50 overflow-hidden"
    >
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Background */}
      <div className="absolute inset-0">
        <div className="sm:hidden w-full h-full bg-gradient-to-b from-yellow-200/40 via-yellow-100/30 to-gray-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row w-11/12 max-w-6xl rounded-2xl shadow-2xl bg-white overflow-hidden">
        
        {/* Left - Form */}
        <div className="w-full md:w-1/2 p-6 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Book a Free Demo
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary"
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
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 resize-none border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary"
              />
            </div>

            {/* ✅ Privacy Policy Checkbox (NO DESIGN CHANGE) */}
            <div className="flex items-start gap-2 text-xs text-gray-500">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 accent-primary"
              />
              <span>
                By submitting this form, you agree to our{" "}
                <button
                  type="button"
                  onClick={() => navigate("/privacy-policy")}
                  className="underline hover:text-secondary"
                >
                  Privacy Policy
                </button>.
              </span>
            </div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-primary text-white font-semibold py-3 rounded-lg shadow-lg disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit"}
            </motion.button>
          </form>
        </div>

        {/* Right - Info */}
        <div className="hidden md:flex w-1/2 items-center justify-center p-10 text-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold">
              SURYANSH SIR’S
            </h2>
            <p className="mt-1">Excellence Group of Institutes</p>
            <p className="mt-4">An IAF ISO 9001:2015 Certified Institute</p>
            <p className="mt-2 text-sm">
              Tuitions • Computer Courses • Web Services
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";

export default function BookDemoForm() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gray-50 overflow-hidden">
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
            Book a Free Demo
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
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
                placeholder="Your contact number"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Preferred Timing
              </label>
              <select className="w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:outline-none">
                <option>Morning (9 AM - 12 PM)</option>
                <option>Afternoon (12 PM - 4 PM)</option>
                <option>Evening (4 PM - 8 PM)</option>
              </select>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-primary text-white font-semibold py-3 rounded-lg shadow-lg hover:bg-primary-hover transition"
            >
              Submit
            </motion.button>
          </form>
        </div>

        {/* Right - Gradient Area with Text */}
        <div className="hidden md:flex w-1/2 items-center justify-center text-gray-600 p-10 relative z-50">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold">SURYANSH SIR’S</h2>
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

import React from "react";
import { motion } from "framer-motion";

const OurVision = () => {
  return (
    <section className="relative bg-yellow-400 py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2 gap-10 p-6 sm:p-10">
        
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center space-y-5 text-center md:text-left"
        >
          <h3 className="uppercase text-sm font-bold text-yellow-500 tracking-wider">
            Logo
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900">
            Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed
            sapien metus, scelerisque nec pharetra id, tempor a tortor.
            Pellentesque non dignissim.
          </p>
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam
            volutpat aliquam. Integer et elit eget elit facilisis tristique. 
            Sed ullamcorper tellus erat, non ultrices sem tincidunt euismod.
          </p>
        </motion.div>

        {/* Right Side - Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center items-center"
        >
          <div className="relative w-full max-w-sm sm:max-w-md">
            {/* Big yellow panel */}
            <div className="w-full h-48 sm:h-56 bg-yellow-300 rounded-lg shadow-lg"></div>
            
            {/* Illustration */}
            <img
              src="/images/vision-illustration.png"
              alt="vision illustration"
              className="absolute inset-0 m-auto w-4/5 sm:w-[90%] h-auto max-w-xs sm:max-w-sm"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurVision;


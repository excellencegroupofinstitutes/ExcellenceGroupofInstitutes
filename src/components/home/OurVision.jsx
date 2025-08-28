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
          <h2 className="text-3xl sm:text-4xl mb-10 py-2 md:text-5xl font-extrabold text-gray-900">
            Our Vision
          </h2>
          <p className="text-gray-600 leading-relaxed text-justify sm:text-lg">
            At Excellence Group of Institutes, we believe that <b className="font-[700]" >you</b> are the center of everything we do. Our vision is to be a leader in providing top-tier educational and technological services, setting a benchmark for quality and customer satisfaction. We strive to create an environment where every client feels valued and respected, treating each one with the reverence of <b className="font-[700]" >royalty</b>. We believe that by providing exceptional service and building strong, lasting relationships, we can contribute to the success of our clients and the community as a whole.
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
          <div className="relative w-full max-w-sm sm:max-w-md mt-5 md:mt-0">
  {/* Big yellow panel */}
  <div className="absolute bottom-[22%] w-full h-48 sm:h-56 bg-yellow-300 rounded-lg shadow-lg z-0"></div>

  {/* Illustration */}
  <img
    src="/images/image.png"
    alt="vision illustration"
    className="relative m-auto w-4/5 sm:w-[90%] h-auto max-w-xs sm:max-w-sm z-10"
  />
</div>

        </motion.div>
      </div>
    </section>
  );
};

export default OurVision;

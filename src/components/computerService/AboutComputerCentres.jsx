import { motion } from "framer-motion";

const AboutComputerCentres = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Background gradient + patterns */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(255,200,0,0.5) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255,119,198,0.5) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120,200,255,0.5) 0%, transparent 50%)
          `,
        }}
      />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(30deg, transparent 40%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.05) 60%, transparent 60%),
            linear-gradient(-30deg, transparent 40%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.05) 60%, transparent 60%)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-secondary relative">
            About Excellence Computer Centre
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed backdrop-blur-sm bg-white/30 p-5 rounded-xl border border-white/20">
            At <b>Excellence Computer Centre</b>, we believe that the best way
            to learn is by <b>doing</b>. As a proud vertical of the{" "}
            <b>Excellence Group of Institutes</b>, we are committed to providing
            you with the practical, hands-on skills you need to succeed in
            today&apos;s fast-paced digital world.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed backdrop-blur-sm bg-white/30 p-5 rounded-xl border border-white/20">
            Our courses go far beyond simple theory. We immerse you in{" "}
            <b>real-world, industry-demanding projects </b>
            from day one. Instead of just memorizing concepts from a book,
            you&apos;ll be coding, designing, and troubleshooting, gaining the
            essential practical knowledge that employers are looking for.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed backdrop-blur-sm bg-white/30 p-5 rounded-xl border border-white/20">
            We are also proud to announce that our institute is{" "}
            <b>IAF and ISO 9001:2015 certified</b>. This means that the
            certificates you earn with us are <b>accepted internationally</b>,
            opening up a world of opportunities for you. With a certification
            from Excellence Computer Centre, you are not only prepared to work
            in the domestic market but are also eligible for the{" "}
            <b>international job market</b>.
          </p>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 flex justify-center"
        >
          <div className="relative w-full max-w-md">
            {/* Background card accent */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-yellow-300 rounded-2xl shadow-xl z-0"></div>
            <img
              src="/images/image.png"
              alt="Excellence Tuitions"
              className="relative z-10 w-full h-[380px] object-cover rounded-2xl shadow-2xl border-4 border-white/40"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutComputerCentres;

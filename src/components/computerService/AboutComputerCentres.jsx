import { motion } from "framer-motion";

const AboutComputerCentres = () => {
  return (
    <section className="relative max-w-[1560px] mx-auto py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
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
          className="flex-1 space-y-4 md:space-y-6 text-left"
        >
          <h2 className="text-3xl md:text-4xl pl-5 md:p-0 font-extrabold text-secondary relative">
            About Excellence Computer Centre
          </h2>

          <p className="text-gray-700 md:text-lg leading-relaxed backdrop-blur-sm bg-white/30 pl-5 py-3 rounded-xl border border-white/20">
            At <b>Excellence Computer Centre</b>, a proud vertical of the{" "}
            <b>Excellence Group of Institutes</b>, we believe the best way to
            learn is by <b>doing</b>. Our focus is on practical, hands-on skills
            for today’s fast-paced digital world.
          {/* </p>

          <p className="text-gray-700 md:text-lg leading-relaxed backdrop-blur-sm bg-white/30 pl-5 py-3 rounded-xl border border-white/20"> */}
            From day one, you’ll work on <b>real-world projects</b>—coding,
            designing, and troubleshooting—so you gain the practical knowledge
            employers seek.
          {/* </p>

          <p className="text-gray-700 md:text-lg leading-relaxed backdrop-blur-sm bg-white/30 pl-5 py-3 rounded-xl border border-white/20"> */}
            As an <b>IAF and ISO 9001:2015 certified</b> institute, our
            internationally accepted certificates open doors to both domestic
            and <b>global opportunities</b>.
          </p>
        </motion.div>

        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-1 pl-5 md:pl-0 flex justify-center"
        >
          <div className="relative w-full max-w-md">
            {/* Background card accent */}
            <div className="absolute -top-6 -left-6 w-full h-full bg-yellow-300 rounded-2xl shadow-xl z-0"></div>
            <img
              src="/images/director_office.jpg"
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

import { motion } from "framer-motion";

const AboutWebServices = () => {
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
            About Excellence Web Services
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed backdrop-blur-sm bg-white/30 p-5 rounded-xl border border-white/20">
            Welcome to <b>Excellence Web Services</b>, a trusted vertical of the
            <b> Excellence Group of Institutes</b>, based in the heart of
            Ludhiana with a physical office in the prominent{" "}
            <b>Rajguru Nagar Market</b>, Punjab, India. We are your dedicated
            partner for all things digital.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed backdrop-blur-sm bg-white/30 p-5 rounded-xl border border-white/20">
            Our mission is simple: to provide <b>high-quality web services</b>{" "}
            with complete
            <b> transparency and trust</b>. We proudly operate on a unique
            <b> 'Pay after Service is Completed'</b> model, ensuring you only
            pay once we deliver results. This approach reflects the confidence
            and trust we want to build with you from the very beginning.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed backdrop-blur-sm bg-white/30 p-5 rounded-xl border border-white/20">
            From <b>stunning websites</b> to <b>robust e-commerce platforms</b>{" "}
            and
            <b> effective digital marketing strategies</b>, we don’t just create
            solutions — we build lasting partnerships. With us, you gain the{" "}
            <b>peace of mind</b> that comes from working with true
            professionals.
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
              src="/images/director2.jpg"
              alt="Excellence Tuitions"
              className="relative z-10 w-full h-[380px] object-cover rounded-2xl shadow-2xl border-4 border-white/40"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutWebServices;

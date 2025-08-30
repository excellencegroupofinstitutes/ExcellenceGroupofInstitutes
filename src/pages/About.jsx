import ContactUs from "../components/ContactUs";

const About = () => {
  return (
    <>
    <section className="mt-42 md:mt-55 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(120,119,198,0.6) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255,119,198,0.6) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, rgba(120,200,255,0.6) 0%, transparent 50%)
          `,
          animation: "float 25s ease-in-out infinite",
        }}
      />

      {/* Colorful geometric pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(30deg, transparent 40%, rgba(255,0,150,0.2) 40%, rgba(0,200,255,0.15) 60%, transparent 60%),
            linear-gradient(-30deg, transparent 40%, rgba(0,200,255,0.15) 40%, rgba(255,200,0,0.2) 60%, transparent 60%)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.25) 2px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Subtle flowing SVG pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10C70 10 90 30 90 50C90 70 70 90 50 90C30 90 10 70 10 50C10 30 30 10 50 10Z' stroke='%23ff007f' stroke-width='0.6' fill='none' opacity='0.3'/%3E%3C/svg%3E")`,
          backgroundSize: "160px 160px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 py-16">
        <h2
          className="text-center text-4xl md:text-5xl font-extrabold text-secondary mb-12 relative"
        >
          <span className="relative z-10">ABOUT US</span>
          <span
            className="absolute inset-0 text-secondary opacity-10 blur-sm"
            style={{ fontSize: "clamp(65px,10vw,100px)" }}
          >
            ABOUT US
          </span>
        </h2>

        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10">
          {/* Text Section */}
          <div className="md:w-1/2 pt-10 text-gray-800 text-lg leading-relaxed text-justify space-y-6">
            <p className="max-w-[600px] mx-auto backdrop-blur-sm p-5 rounded-xl border border-white/20">
              <b>Excellence Group of Institutes</b> is a premier educational and technical
              enterprise with its headquarters in Ludhiana, Punjab. We are dedicated to providing
              high-quality services through our three distinct verticals:{" "}
              <b>Excellence Tuitions, Excellence Computer Centre</b> and{" "}
              <b>Excellence Web Services</b>. With offices in Basant City, Ludhiana and Rajguru Nagar
              Market, Ludhiana, we cater to the diverse needs of our clients with a commitment to
              excellence.
            </p>
            <p className="backdrop-blur-sm p-5 rounded-xl border border-white/20">
              Our group is built on a foundation of integrity and a passion for providing the
              highest-quality services. <b>Estd. 2020</b>
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 w-full flex justify-center">
            <div className="relative">
              <img
                src="/images/about-us.jpg"
                alt="About Excellence Group"
                className="w-full max-w-[600px] h-[400px] object-cover shadow-xl rounded-2xl border-4 border-white/40"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translate(0, 0) rotate(0deg);
          }
          33% {
            transform: translate(40px, -40px) rotate(120deg);
          }
          66% {
            transform: translate(-25px, 25px) rotate(240deg);
          }
        }
      `}</style>
    </section>
    <ContactUs/>
        </>
  );
};

export default About;

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const handleBookDemoClick = () => {
    navigate("/");
    setTimeout(() => {
      document
        .getElementById("book-demo")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  const contactUsClick = () => {
    navigate("/about");
    setTimeout(() => {
      document
        .getElementById("contact-form")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <footer className="relative max-w-[1560px] mx-auto bg-gradient-to-r from-secondary via-secondary/40 to-secondary text-primary py-10 md:py-12 shadow-2xl">
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10"></div>

      {/* Footer Content */}
      <div className="container max-w-[1380px] mx-auto px-4 sm:px-6 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Branding */}
        <div className="text-left">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">
            Excellence Group of Institutes
          </h2>
          <p className="text-xs sm:text-sm italic">
            An IAF ISO 9001:2015 Certified Institute
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-left">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm sm:text-base">
            <li>
              <button
                onClick={() => navigate("/web-services")}
                className="hover:text-yellow-700 transition"
              >
                Web Services
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/tuitions")}
                className="hover:text-yellow-700 transition"
              >
                Excellence Tuitions
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/compute-services")}
                className="hover:text-yellow-700 transition"
              >
                Computer Centre
              </button>
            </li>
            <li>
              <button
                onClick={handleBookDemoClick}
                className="hover:text-yellow-700 transition"
              >
                Book a Demo
              </button>
            </li>
            <li>
              <button
                onClick={contactUsClick}
                className="hover:text-yellow-700 transition"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-left">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">
            Contact Us
          </h3>
          <div className="space-y-3 text-sm sm:text-base">
            <a
              href="https://maps.app.goo.gl/kAi1JzwnoEbWRmtQ9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 hover:text-yellow-700 transition"
            >
              <FaMapMarkerAlt className="mt-1" />
              JK Center, Basant City, Near Keys Hotel, Ludhiana, Punjab
            </a>

            <a
              href="https://maps.app.goo.gl/LXGbiW62Q8qvyaPY9"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 hover:text-yellow-700 transition"
            >
              <FaMapMarkerAlt className="mt-1" />
              SCO 44-C, Rajguru Nagar Market, D Block, Ludhiana, Punjab
            </a>

            <p className="flex items-center gap-2">
              <FaPhoneAlt /> +91 8557081922, +91 9115112585
            </p>

            <p className="flex items-center gap-2 break-all">
              <FaEnvelope /> excellencegroupofinstitutes@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-500 mt-8 pt-4 text-center text-xs sm:text-sm text-primary relative z-10 space-y-2">
        
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigate("/privacy-policy")}
            className="hover:text-yellow-700 transition cursor-pointer"
          >
            Privacy Policy
          </button>

          <span className="hidden sm:inline">|</span>

          <button
            onClick={() => navigate("/terms-and-conditions")}
            className="hover:text-yellow-700 transition cursor-pointer"
          >
            Terms & Conditions
          </button>
        </div>

        <p>
          © {new Date().getFullYear()} Excellence Group Of Institutes. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

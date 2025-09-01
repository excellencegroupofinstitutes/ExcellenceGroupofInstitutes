import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const handleBookDemoClick = () => {

    navigate("/");
    setTimeout(() => {
      document.getElementById("book-demo")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };
  const contactUsClick = () => {

    navigate("/about");
    setTimeout(() => {
      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };
  const testimonialClick = () => {

    navigate("/");
    setTimeout(() => {
      document.getElementById("testimonial")?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };


  return (
    <footer className="relative max-w-[1560px] mx-auto bg-gradient-to-r from-secondary via-secondary/40 to-secondary text-primary py-12  shadow-2xl">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10"></div>

      <div className="container max-w-[1380px] mx-auto px-6 relative z-10 grid md:place-items-center grid-cols-1 md:grid-cols-3 gap-10">
        {/* Branding */}
        <div className="self-start" >
          <h2 className="text-2xl font-bold mb-2">Excellence Group of Institutes</h2>
          <p className="text-sm italic">An IAF ISO 9001:2015 Certified Institute</p>
          <p className="mt-4 text-sm text-primary">
            Empowering students with education, skills, and career-oriented training.
          </p>
        </div>

        {/* Quick Links */}
        <div className="self-start">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-base text-primary">
            <li>
              <button onClick={() => navigate('/web-services')} className="hover:text-yellow-700 hover:cursor-pointer transition"
              >Web Services</button>
            </li>
            <li>
              <button onClick={() => navigate('/tuition')} className="hover:text-yellow-700 transition hover:cursor-pointer">Excellence Institutes</button >
            </li>
            <li>
              <button onClick={() => navigate('/compute-services')} className="hover:text-yellow-700 transition hover:cursor-pointer">Computer Centre</button >
            </li>
            {/* <li>
              <button onClick={testimonialClick} className="hover:text-yellow-700 transition hover:cursor-pointer"
              >Testimonials</button>
            </li> */}
            <li>
              <button onClick={handleBookDemoClick} className="hover:text-yellow-700 transition hover:cursor-pointer"
              >Book a Demo</button>
            </li>
            <li>
              <button onClick={contactUsClick} className="hover:text-yellow-700 transition hover:cursor-pointer">Contact</button >
            </li>
          </ul>

        </div>

        {/* Contact Info */}
        <div className="self-start">
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <div className="space-y-3 text-primary ">
            <p className="flex items-center gap-2 break-words"><FaMapMarkerAlt /> JK Center, Basant City, Near Keys Hotel, Ludhiana, Punjab</p>
            <p className="flex items-center gap-2 break-all"><FaPhoneAlt /> +91 8557081922, +91 9115112585</p>
            <p className="flex items-center gap-2 break-all"><FaEnvelope /> excellencegroupofinstitutes@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-500 mt-10 pt-6 text-center text-primary text-sm relative z-10">
        © {new Date().getFullYear()} Excellence Group Of Institutes. All rights reserved.
      </div>
    </footer>
  );
}

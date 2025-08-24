import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-secondary via-secondary/40 to-secondary text-primary py-12 mt-16 rounded-t-[3rem] shadow-2xl">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Excellence Group of Institutes</h2>
          <p className="text-sm italic">An IAF ISO 9001:2015 Certified Institute</p>
          <p className="mt-4 text-sm text-primary">
            Empowering students with education, skills, and career-oriented training.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-primary">
            <li><a href="#services" className="hover:text-yellow-300 transition">Services</a></li>
            <li><a href="#about" className="hover:text-yellow-300 transition">About Us</a></li>
            <li><a href="#testimonials" className="hover:text-yellow-300 transition">Testimonials</a></li>
            <li><a href="#book-demo" className="hover:text-yellow-300 transition">Book a Demo</a></li>
            <li><a href="#contact" className="hover:text-yellow-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <div className="space-y-3 text-primary">
            <p className="flex items-center gap-2"><FaMapMarkerAlt /> Near XYZ Road, City, State</p>
            <p className="flex items-center gap-2"><FaPhoneAlt /> +91 98765 43210</p>
            <p className="flex items-center gap-2"><FaEnvelope /> info@suryanshsirs.com</p>
          </div>
          <div className="flex gap-4 mt-5">
            <a href="#" className="hover:text-yellow-300 transition"><FaFacebookF size={22} /></a>
            <a href="#" className="hover:text-yellow-300 transition"><FaInstagram size={22} /></a>
            <a href="#" className="hover:text-yellow-300 transition"><FaLinkedinIn size={22} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-500 mt-10 pt-6 text-center text-primary text-sm relative z-10">
        © {new Date().getFullYear()} Excellence Group Of Institute. All rights reserved.
      </div>
    </footer>
  );
}

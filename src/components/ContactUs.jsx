import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="bg-gradient-to-br from-yellow-50 to-white pt-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Contact Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Get in Touch With 
          </h2>
          <p className="text-gray-600 mb-8">
            We’re here to answer your queries and guide you. Whether you’re a student, parent, or partner — feel free to reach out.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <Phone className="text-secondary" />
              <p className="text-gray-700">+91 98765 43210</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-secondary" />
              <p className="text-gray-700">info@institutesgroup.com</p>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-secondary" />
              <p className="text-gray-700">123 Education Lane, City, State</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-8">
            <a href="#" className="p-3 bg-secondary text-white rounded-full hover:bg-blue-700 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-3 bg-secondary text-white rounded-full hover:bg-blue-700 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-3 bg-secondary text-white rounded-full hover:bg-blue-700 transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h3>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="phone"
              placeholder="Your phone number"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-xl font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;

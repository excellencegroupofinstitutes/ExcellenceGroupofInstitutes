import React, { useState } from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from "lucide-react";
import api from "../service/api";
import { toast } from "react-toastify";
const ContactUs = () => {
  const [loading,setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    preferredTiming: null,
    reason: "Contact",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, contactNumber, message } = formData;

    if (!name.trim()) {
      toast.error("Name is required");
      return false;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(contactNumber)) {
      toast.error("Please enter a valid 10-digit contact number");
      return false;
    }

    if (!message) {
      toast.error("Please fill message field")
      return false
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return; // stop if validation fails


    setLoading(true);
    try {
      await api.post("/book-demo", formData);
      toast.success("We will contact you shortly!");
      setFormData({
        name: "",
        email: "",
        contactNumber: "",
        preferredTiming: null,
        reason: "Contact",
        message: ""
      });
    } catch (error) {
      console.error("Error booking demo:", error);
      toast.error(
        error.response?.data?.message || "Failed to book demo. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id='contact-form' className="bg-gradient-to-br from-yellow-50 to-white py-16 px-6 ">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left: Contact Info */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8">
            We’re here to answer your queries and guide you. Whether you’re a student, parent, or partner — feel free to reach out.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <Phone className="text-secondary" />
              <p className="text-gray-700">+91 8557081922, +91 9914179771 </p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-secondary" />
              <p className="text-gray-700">excellencegroupofinstitutes@gmail.com</p>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-secondary" />
              <p className="text-gray-700">Kashish Colony, Basant City, Near Keys Hotel, Ludhiana, Punjab</p>
            </div>
          </div>

          {/* Social Links */}
          {/* <div className="flex gap-4 mt-8">
            <a href="#" className="p-3 bg-secondary text-white rounded-full hover:bg-blue-700 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-3 bg-secondary text-white rounded-full hover:bg-blue-700 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="p-3 bg-secondary text-white rounded-full hover:bg-blue-700 transition">
              <Linkedin size={20} />
            </a>
          </div> */}
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h3>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              name="name"
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              value={formData.email}
              name="email"
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="tel"
              value={formData.contactNumber}
              name="contactNumber"
              onChange={handleChange}
              placeholder="Your phone number"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              name="message"
              onChange={handleChange}
              className="w-full px-4 py-3 resize-none border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
            <button
              type="submit"
              disabled={loading}
              className="w-full hover:cursor-pointer bg-primary text-white py-3 rounded-xl font-semibold transition"
            >
              {
                loading?"Submitting":"Submit"
              }
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;

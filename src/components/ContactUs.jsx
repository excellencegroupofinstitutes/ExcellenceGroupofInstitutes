import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import api from "../service/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    reason: "Contact",
    message: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    const { name, email, contactNumber, message, consent } = formData;

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

    if (!message.trim()) {
      toast.error("Please fill message field");
      return false;
    }

    if (!consent) {
      toast.error("You must agree to the Privacy Policy");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      await api.post("/book-demo", formData);
      toast.success("We will contact you shortly!");
      setFormData({
        name: "",
        email: "",
        contactNumber: "",
        reason: "Contact",
        message: "",
        consent: false,
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to submit. Try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact-form"
      className="bg-gradient-to-br max-w-[1560px] mx-auto from-yellow-50 to-white py-16 px-6"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-8">
            We’re here to answer your queries and guide you.
          </p>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <Phone className="md:size-8 text-secondary" strokeWidth={1.5} />
              <p>+91 8557081922, +91 9115112585</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="md:size-8 text-secondary" strokeWidth={1.5} />
              <p>excellencegroupofinstitutes@gmail.com</p>
            </div>
            <a
              className="flex items-center gap-4"
              href="https://maps.app.goo.gl/kAi1JzwnoEbWRmtQ9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="md:size-8 text-secondary" strokeWidth={1.5} />
              <p>JK Center, Basant City, Ludhiana</p>
            </a>
            <a
              className="flex items-center gap-4"
              href="https://maps.app.goo.gl/LXGbiW62Q8qvyaPY9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin className="md:size-8 text-secondary" strokeWidth={1.5} />
              <p>SCO 44-C, Rajguru Nagar Market, Ludhiana</p>
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="bg-white shadow-xl rounded-2xl p-8 ">
          <h3 className="text-3xl font-semibold mb-8">Send Us a Message</h3>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl"
            />

            <input
              type="tel"
              name="contactNumber"
              placeholder="Your Phone Number"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl"
            />

            <textarea
              rows="4"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl resize-none"
            />

            {/* ✅ Privacy Consent */}
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 accent-primary"
              />
              <p>
                By submitting this form, you agree to our{" "}
                <button
                  type="button"
                  onClick={() => navigate("/privacy-policy")}
                  className="text-primary underline hover:text-secondary"
                >
                  Privacy Policy
                </button>.
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white py-3 rounded-xl font-semibold"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

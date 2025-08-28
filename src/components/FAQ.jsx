import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const faqsData = [
  {
    question: "Do I need to know how to code?",
    answer:
      "Yes, having a good grasp of programming fundamentals (HTML/CSS, JavaScript, or any relevant tech stack) will help you make the most of Startup Chaser's industrial-grade projects.",
  },
  {
    question: "Can I use the project experience on my resume?",
    answer:
      "Absolutely! Projects on Startup Chaser are designed to match industry standards, making them a great addition to your resume and portfolio.",
  },
  {
    question: "Will I receive a certificate for completing projects?",
    answer:
      "Yes, you will receive a verifiable certificate upon successful completion of each project, boosting your credibility and visibility to hiring partners.",
  },
  {
    question: "Can I get hired through Startup Chaser?",
    answer:
      "Yes! Top performers are referred to our hiring partners, including Unicorn startups. Completing projects with consistency improves your chances significantly.",
  },
  {
    question: "Is there any refund policy?",
    answer:
      "Since our platform offers access to real-time, high-value industrial projects and certifications instantly upon enrollment, we currently do not support refunds.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Faqs({ ctaParentClass = "bg-gradient-to-br from-brand-cream via-white to-brand-muted/30 py-20" }) {
  // Store which FAQs are open (multiple allowed)
  const [openIndexes, setOpenIndexes] = useState(new Set([0]));

  // Create refs for each answer to measure height
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    const newOpen = new Set(openIndexes);
    if (newOpen.has(index)) {
      newOpen.delete(index);
    } else {
      newOpen.add(index);
    }
    setOpenIndexes(newOpen);
  };

  return (
    <section id="faq" className={ctaParentClass}>
      <div className="container-app">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Heading */}
          <motion.div 
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center px-4 py-2 bg-brand-muted text-brand-dark rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              FAQ
            </div>
            <h2 className="section-title mt-4 text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <p className="section-subtitle text-xl text-gray-500  max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about Startup Chaser
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-brand to-brand-light mx-auto mt-6 rounded-full"></div>
          </motion.div>

          {/* Accordion */}
          <motion.div 
            variants={fadeInUp}
            className="max-w-4xl mx-auto"
          >
            <div className="space-y-4">
              {faqsData.map((faq, index) => {
                const isOpen = openIndexes.has(index);

                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ y: -2 }}
                    className="
                      rounded-2xl 
                      border border-orange-100 dark:border-orange-200/20
                      shadow-lg hover:shadow-2xl
                      bg-white/80 backdrop-blur-sm dark:bg-zinc-800/90 
                      hover:border-orange-200 dark:hover:border-orange-300/30
                      transition-all duration-300
                      overflow-hidden
                      relative
                    "
                  >
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-muted/20 to-orange-50/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <button
                      className="relative w-full text-left p-8 focus:outline-none focus:ring-2 focus:ring-brand/20 rounded-2xl"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      id={`faq-question-${index}`}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white pr-4 group-hover:text-brand-dark transition-colors duration-300">
                          {faq.question}
                        </h3>
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-r from-brand to-brand-light flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                          <ChevronDown className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </button>

                    <div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      ref={(el) => (contentRefs.current[index] = el)}
                      className="overflow-hidden transition-all duration-500 ease-in-out"
                      style={{
                        height: isOpen
                          ? contentRefs.current[index]?.scrollHeight
                            ? contentRefs.current[index].scrollHeight + "px"
                            : "auto"
                          : "0px",
                      }}
                    >
                      <div className="px-8 pb-8 relative">
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent mb-6"></div>
                        <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand to-brand-light transform scale-x-0 hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            className="
              mt-16 
              rounded-2xl 
              border border-orange-100 dark:border-orange-200/30
              p-10 
              shadow-lg hover:shadow-2xl
              bg-gradient-to-r from-brand to-brand-light text-white
              transition-all duration-300
              max-w-4xl mx-auto
              text-center
              relative overflow-hidden
            "
          >
            {/* Background pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-light/20 to-brand-dark/20 opacity-50"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
              <p className="text-white/90 mb-8 text-lg">
                Can't find the answer you're looking for? Please chat with our
                friendly team.
              </p>
              <div className="flex justify-center gap-4 mb-8">
                <img
                  alt="Avatar 1"
                  src="/02.jpg"
                  width={64}
                  height={64}
                  className="rounded-full border-4 border-white shadow-lg hover:scale-110 transition-transform duration-300"
                />
                <img
                  alt="Avatar 2"
                  src="/01.jpg"
                  width={64}
                  height={64}
                  className="rounded-full border-4 border-white shadow-lg hover:scale-110 transition-transform duration-300"
                />
              </div>
              <a
                href="#footer"
                className="
                  inline-flex items-center gap-2 
                  px-8 py-4
                  bg-white text-brand-dark
                  font-bold rounded-full 
                  hover:bg-brand-cream hover:text-brand-dark
                  transition-all duration-300
                  shadow-lg hover:shadow-xl
                  group
                "
              >
                Get in touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
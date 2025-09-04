import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const faqsData = [
  {
    question: "Where is Excellence Web Services located?",
    answer:
      "We provide services pan India. Our headquarters are based in Ludhiana, Punjab, with a physical office in the prominent Rajguru Nagar Market. You can visit us directly for any assistance.",
  },
  {
    question: "Do I need to pay in advance for services?",
    answer:
      "No. We follow a unique 'Pay after Service is Completed' model, which means you only pay once we deliver the promised results.",
  },
  {
    question: "What services do you provide?",
    answer:
      "We offer Website Designing, Web Development, IT Services, SEO, Digital Marketing, Google Listing, Social Media Marketing, and targeted ad campaigns including Facebook, Instagram, and YouTube.",
  },
  {
    question: "Do you provide custom solutions for businesses?",
    answer:
      "Yes. Every business is different, and we tailor our strategies—whether it’s a website, e-commerce platform, or marketing campaign—to suit your specific goals.",
  },
  {
    question: "How can digital marketing help my business?",
    answer:
      "Digital marketing boosts your brand visibility, helps you reach your target audience effectively, and increases customer engagement, trust, and conversions.",
  },
  {
    question: "Do you provide SEO services?",
    answer:
      "Yes. Our SEO experts use proven strategies to improve your search rankings, bring organic traffic, and establish credibility for your website.",
  },
  {
    question: "Can you manage my social media campaigns?",
    answer:
      "Absolutely. We design and run engaging campaigns on Facebook, Instagram, and YouTube that help grow your audience and maximize conversions.",
  },
  {
    question: "Why should I choose Excellence Web Services?",
    answer:
      "We believe in transparency, trust, and results. Our pay-after-service model, industry expertise, and client-focused approach make us a reliable digital partner.",
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

export default function Faqs({ ctaParentClass = "bg-gradient-to-br from-brand-cream via-white to-brand-muted/30 mb-10 py-10 px-4" }) {
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
          <motion.div
            variants={fadeInUp}
            className="text-center mb-10"
          >
            <h2 className="section-title mt-4 text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="section-subtitle text-base md:text-lg text-gray-500  max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about Excellence WebServices
            </p>
          </motion.div>

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
                      rounded-lg 
                      border border-secondary 
                      shadow-lg hover:shadow-2xl
                      bg-white/80 backdrop-blur-sm 
                      hover:border-orange-200
                      transition-all duration-300
                      overflow-hidden
                      relative
                    "
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-muted/20 to-orange-50/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

                    <button
                      className="relative w-full text-left p-5 md:p-7"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      id={`faq-question-${index}`}
                    >
                      <div className="flex items-center justify-between hover:cursor-pointer">
                        <h3 className="text-base md:text-xl font-bold text-gray-900 pr-4 transition-colors duration-300">
                          {faq.question}
                        </h3>
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-r from-brand to-brand-light flex items-center justify-center flex-shrink-0 transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                          <ChevronDown className="w-5 h-5 text-secondary " />
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
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
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
        </motion.div>
      </div>
    </section>
  );
}
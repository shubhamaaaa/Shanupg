import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What type of accommodations does your-space offer?",
      answer:
        "Your-space offers a variety of accommodations including single, double, and triple occupancy rooms, all designed for comfort and convenience. Each room is fully furnished with modern amenities.",
    },
    {
      question: "How do I book a room at your-space?",
      answer:
        "Booking a room at Your-space is easy. Simply visit our website, choose your desired accommodation type, and fill out the booking form. Our team will confirm your booking and provide further details.",
    },
    {
      question: "What amenities are available at your-space?",
      answer:
        "At Your-space, we offer various amenities including high-speed Wi-Fi, 24/7 water supply, air conditioning, housekeeping, laundry services, and more to ensure a comfortable stay.",
    },
    {
      question: "Is your-space provides a safe and secure place to stay?",
      answer:
        "Yes, Your-space prioritizes safety and security. Our premises are equipped with CCTV cameras, fire safety measures, and controlled entry and exit points to ensure a safe environment.",
    },
    {
      question: "How is your-space different from other PG?",
      answer:
        "Your-space offers a unique blend of comfort, convenience, and community. We focus on creating a homely environment with top-notch amenities, a focus on cleanliness, and 24/7 security.",
    },
    {
      question: "What is the minimum duration of stay?",
      answer:
        "The minimum duration of stay at Your-space is one month. We offer flexible packages based on the duration of stay to suit your needs.",
    },
    {
      question: "How can I book a room for myself?",
      answer:
        "To book a room, simply visit our website, choose your preferred accommodation type, and fill out the booking form. Our team will get in touch to confirm the booking details.",
    },
    {
      question: "Who will keep my room and the common areas clean?",
      answer:
        "Our dedicated housekeeping staff ensures that your room and common areas are cleaned regularly, maintaining a hygienic and comfortable environment for all residents.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-5">
        <div className="text-center border border-gray-600 px-6 py-5 text-white  bg-[#36454f]">
          <h1 className="text-4xl font-semibold text-yellow-500 mb-5">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white">
            Here are answers to some of the most commonly asked questions about Your-Space.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-yellow-300 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <p className="text-xl font-semibold text-gray-800">{faq.question}</p>
                <span
                  className={`text-2xl text-gray-600 transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  &#9660;
                </span>
              </div>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === index ? "auto" : 0,
                  opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                {activeIndex === index && (
                  <motion.p
                    className="mt-4 text-lg text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

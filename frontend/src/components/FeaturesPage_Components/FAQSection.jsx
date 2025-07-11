// components/FeaturesPage/FAQSection.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is my data safe and private?",
    answer: "Absolutely! All your notes are encrypted and stored securely in the cloud. Only you have access to them.",
  },
  {
    question: "Can I access my notes offline?",
    answer: "Yes, you can view recently accessed notes offline. Full offline support is coming soon.",
  },
  {
    question: "How do I categorize my notes?",
    answer: "You can use tags like Work, Personal, or Study to keep your notes organized and searchable.",
  },
  {
    question: "Is this app free to use?",
    answer: "Yes, our core features are completely free. Premium features may be added later with optional plans.",
  },
  {
    question: "Can I use this on multiple devices?",
    answer: "Yes, your notes sync in real-time across your phone, tablet, and desktop.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <section className="bg-violet-50 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Frequently Asked Questions ❓
        </h2>

        <div className="space-y-4 text-left">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md p-6">
              <button
                className="flex justify-between items-center w-full text-lg font-medium text-left"
                onClick={() => toggleIndex(i)}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`transition-transform ${
                    openIndex === i ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.p
                    className="mt-4 text-gray-600"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

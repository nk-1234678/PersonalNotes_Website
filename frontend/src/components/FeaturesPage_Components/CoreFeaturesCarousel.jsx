// components/FeaturesPage/CoreFeaturesCarousel.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const features = [
  {
    title: "Quick Note Creation",
    description: "Create and edit notes instantly with a sleek editor.",
    icon: "📝",
  },
  {
    title: "Tag-Based Organization",
    description: "Categorize your notes with tags like Work, Personal, or Study.",
    icon: "🏷️",
  },
  {
    title: "Auto Save & Sync",
    description: "Never lose progress with real-time save and cloud sync.",
    icon: "☁️",
  },
  {
    title: "Powerful Search",
    description: "Find any note with keywords, tags, or titles.",
    icon: "🔍",
  },
  {
    title: "Secure and Private",
    description: "Your data is encrypted and safe.",
    icon: "🔒",
  },
];

const CoreFeaturesCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCards = 3;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + visibleCards) % features.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - visibleCards + features.length) % features.length);
  };

  const visibleFeatures = [];
  for (let i = 0; i < visibleCards; i++) {
    visibleFeatures.push(features[(startIndex + i) % features.length]);
  }

  return (
    <section className="bg-gradient-to-br from-violet-50 via-white to-violet-100 py-16 px-4 md:px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
        Core Features 🚀
      </h2>

      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={startIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {visibleFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-tr from-purple-200 via-white to-indigo-100 backdrop-blur-xl bg-opacity-30 rounded-2xl shadow-xl p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-violet-200"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center items-center gap-10 mt-10">
          <button
            onClick={prevSlide}
            className="text-violet-600 hover:text-violet-800 transition"
          >
            <ChevronLeft size={36} />
          </button>
          <button
            onClick={nextSlide}
            className="text-violet-600 hover:text-violet-800 transition"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CoreFeaturesCarousel;

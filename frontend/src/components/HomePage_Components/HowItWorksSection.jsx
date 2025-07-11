
import { FaUserPlus, FaPenFancy, FaTags } from "react-icons/fa";
import { motion } from "framer-motion";

const steps = [
  {
    icon: <FaUserPlus className="text-white text-xl" />,
    title: "Sign Up",
    description: "Create your free PersonalNotes account in seconds.",
  },
  {
    icon: <FaPenFancy className="text-white text-xl" />,
    title: "Start Writing",
    description: "Quickly create notes using our distraction-free editor.",
  },
  {
    icon: <FaTags className="text-white text-xl" />,
    title: "Organize & Access",
    description: "Add tags, pin important notes, and access anytime.",
  },
];

// Slower stagger and animation settings
const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.6, // slower between children
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2, // slower item animation
      ease: "easeInOut",
      type: "spring",
      stiffness: 60,
    },
  },
};

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-white to-violet-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold text-center text-violet-700 mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          How It Works
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative border-l-4 border-violet-600 pl-6 space-y-16"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={item} className="relative">
              {/* Icon Circle */}
              <div className="absolute -left-10 top-0 w-10 h-10 flex items-center justify-center rounded-full bg-violet-600 shadow-md ring-4 ring-white">
                {step.icon}
              </div>

              {/* Card Content */}
              <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-6 border border-violet-200 hover:shadow-violet-300 hover:scale-[1.02] transition duration-300 ease-in-out">
                <h3 className="text-xl font-semibold text-violet-800 mb-2">
                  Step {index + 1}: {step.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

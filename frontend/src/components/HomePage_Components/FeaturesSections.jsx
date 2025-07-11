import {
  FaPenFancy,
  FaTags,
  FaThumbtack,
  FaCloud,
  FaLock,
  FaMoon,
} from "react-icons/fa";

const features = [
  {
    icon: <FaPenFancy />,
    title: "Create & Edit Notes",
    description: "Write notes with a clean, distraction-free editor.",
    animation: "fade-up",
  },
  {
    icon: <FaTags />,
    title: "Organize with Tags",
    description: "Add tags to easily categorize and find notes.",
    animation: "zoom-in",
  },
  {
    icon: <FaThumbtack />,
    title: "Pin Important Notes",
    description: "Keep your most important notes at the top.",
    animation: "flip-left",
  },
  {
    icon: <FaCloud />,
    title: "Access Anywhere",
    description: "View your notes from any device, anytime.",
    animation: "fade-right",
  },
  {
    icon: <FaLock />,
    title: "Secure & Private",
    description: "Your data is safe and private with us.",
    animation: "flip-up",
  },
  {
    icon: <FaMoon />,
    title: "Dark Mode",
    description: "Switch to a dark theme to reduce eye strain.",
    animation: "fade-left",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 via-violet-900 to-pink-800 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-16">
          Features that make note-taking easier
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-md hover:shadow-xl transition-all duration-300 hover:bg-white/10"
              data-aos={feature.animation}
              data-aos-delay={index * 100}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-violet-500/20 text-violet-300 text-2xl group-hover:bg-white group-hover:text-violet-800 transition-colors duration-300 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white group-hover:text-pink-300 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-300 text-sm mt-2 group-hover:text-white">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

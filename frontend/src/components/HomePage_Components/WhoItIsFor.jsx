
import { FaUserGraduate, FaBriefcase, FaLaptop, FaGlobe } from "react-icons/fa";

const WhoItIsFor = () => {
  const userTypes = [
    {
      icon: <FaUserGraduate className="text-white text-4xl" />,
      title: "Students",
      description: "Take smart notes during classes and study hours.",
    },
    {
      icon: <FaBriefcase className="text-white text-4xl" />,
      title: "Professionals",
      description: "Summarize meeting outcomes & project insights.",
    },
    {
      icon: <FaLaptop className="text-white text-4xl" />,
      title: "Academics",
      description: "Organize your research notes efficiently.",
    },
    {
      icon: <FaGlobe className="text-white text-4xl" />,
      title: "Writers",
      description: "Capture article ideas & storylines on the go.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#ede9fe] to-[#f5f3ff]">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-14"
          data-aos="fade-down"
        >
          Our Notepad is Perfect For
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {userTypes.map((user, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 200}
              className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-xl transition-all duration-500 transform hover:scale-105 hover:shadow-violet-300 border-t-4 border-slate-900"
            >
              <div className="bg-slate-900 p-5 rounded-full mb-4 shadow-lg">
                {user.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{user.title}</h3>
              <p className="text-gray-600 text-sm">{user.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItIsFor;

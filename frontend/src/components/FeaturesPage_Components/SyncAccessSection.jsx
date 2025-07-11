import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaLaptop, FaMobileAlt, FaTabletAlt, FaCloudUploadAlt } from "react-icons/fa";

const deviceVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
    },
  }),
};

const SyncAccessSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-br  from-violet-50 via-white to-violet-100 py-20 px-4 md:px-20"
    >
      <div className="max-w-6xl mx-auto text-center text-slate-900">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Sync & Access Anywhere 🌐
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto text-lg mb-12 text-slate-800"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Your notes are saved in the cloud and available across all your devices. Seamlessly switch between mobile, tablet, and desktop—your work stays with you.
        </motion.p>

        <div className="relative flex justify-center items-center gap-10 flex-wrap">
          {/* Central Cloud Icon */}
          <motion.div
            className="bg-white text-pink-600 p-6 rounded-full shadow-2xl text-4xl"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
          >
            <FaCloudUploadAlt />
          </motion.div>

          {/* Devices */}
          {[
            { Icon: FaLaptop, label: "Laptop" },
            { Icon: FaTabletAlt, label: "Tablet" },
            { Icon: FaMobileAlt, label: "Mobile" },
          ].map((device, i) => (
            <motion.div
              key={device.label}
              className="flex flex-col items-center gap-2"
              variants={deviceVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={i}
            >
              <div className="bg-white p-6 rounded-full shadow-md text-3xl text-violet-700 hover:scale-110 transition-transform">
                <device.Icon />
              </div>
              <span className="text-sm font-medium text-white">{device.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SyncAccessSection;

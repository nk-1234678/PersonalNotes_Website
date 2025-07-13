import { motion } from "framer-motion";


const WelcomeSection = ({ userInfo }) => {
  return (
    <motion.div
      className="flex flex-col items-start gap-1 mb-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-2">
        
        <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">
          Welcome back,{" "}
          <span className="text-indigo-600">{userInfo?.username || "User"}</span>! 🚀
        </h1>
      </div>

      <motion.p
        className="text-sm sm:text-base text-gray-500 mt-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
                Hope you're crushing it today! Let’s dive into your notes 📓
      </motion.p>
    </motion.div>
  );
};

export default WelcomeSection;

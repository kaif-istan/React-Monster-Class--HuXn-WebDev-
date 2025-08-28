import { motion } from "motion/react";
const AnimatedButton = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <motion.div
        className="px-6 py-3 bg-blue-500 text-white rounded-lg md:px-10 md:py-4 cursor-pointer text-2xl"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
    transition={{
      type: 'spring',
      stiffness: 300
    }}
      >
        Click Me
      </motion.div>
    </div>
  );
};

export default AnimatedButton;

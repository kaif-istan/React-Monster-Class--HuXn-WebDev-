import { motion } from "motion/react";
const PulsatingButton = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-amber-300 w-screen ">
      <motion.button className="px-6 py-3 bg-green-500 text-white rounded-lg text-lg font-semibold cursor-pointer"
      animate={{
        scale: [1, 1.2, 1]
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        ease: 'easeInOut'
      }}
      >
        Clike Me!
      </motion.button>
    </div>
  );
};

export default PulsatingButton;

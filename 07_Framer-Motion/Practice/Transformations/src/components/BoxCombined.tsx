import { motion } from "motion/react";
const BoxCombined = () => {
  return (
    <motion.div
      className="w-40 h-40 bg-purple-500 rounded-lg"
      animate={{
        x: 200,
        y: -200,
        rotate: 360,
        scale: 1.5,
      }}
      transition={{ duration: 3, ease: "easeInOut" }}
    />
  );
};

export default BoxCombined;

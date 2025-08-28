import { motion } from "motion/react";
const ColorChangeBox = () => {
  return (
    <motion.div
      className="w-32 h-32"
      animate={{
        backgroundColor: [
          "#f87171",
          "#60a5fa",
          "#34d399",
          "#fbbf24",
          "#f87171",
        ],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'linear'
      }}
    ></motion.div>
  );
};

export default ColorChangeBox;

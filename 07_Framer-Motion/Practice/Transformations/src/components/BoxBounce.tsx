import { motion } from "motion/react";
const BoxBounce = () => {
  return (
    <motion.div
      className="h-50 w-50 bg-amber-700"
      animate={{
        y: [0, -150, 0]
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }}
    />
  );
};

export default BoxBounce;

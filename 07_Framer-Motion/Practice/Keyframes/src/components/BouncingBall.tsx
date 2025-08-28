import { motion } from "motion/react";
const BouncingBall = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        className="w-30 h-30 bg-black rounded-full"
        animate={{ y: [0, -150, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
          type: 'spring',
          stiffness: 100
        }}
      />
    </div>
  );
};

export default BouncingBall;

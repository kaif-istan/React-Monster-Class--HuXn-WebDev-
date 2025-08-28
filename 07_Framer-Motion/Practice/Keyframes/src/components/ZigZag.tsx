import { motion } from "motion/react";
const ZigZag = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-amber-100">
      <motion.div
        className="w-25 h-25 bg-purple-500"
        animate={{
          x: [0, 100, 200, 300, 400],
          y: [0, -50, 50, -50, 0],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default ZigZag;

import { motion } from "motion/react";
const WaveEffect = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screenf gap-4">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="w-8 h-8 bg-amber-700"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default WaveEffect;

import { motion } from "motion/react";
const SlidingText = () => {
  return (
    <div className="flex w-screen items-center justify-center h-screen bg-amber-600 overflow-hidden">
        <motion.h1
        className="text-4xl font-bold"
        initial={{
            x: '-100'
        }}
        animate={{
            x: ['-100%', 0, '10%', 0]
        }}
        transition={{
            duration: 2,
            ease: 'easeOut'
        }}
        
        >
            Hello Framer Motion!
        </motion.h1>
    </div>
  );
};

export default SlidingText;

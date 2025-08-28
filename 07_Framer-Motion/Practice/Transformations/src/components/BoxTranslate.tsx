import { motion } from "motion/react";
const BoxTranslate = () => {
  return (
    <motion.div
      animate={{ x: [0, 300, 300, 0] }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="h-100 w-100 rounded-full bg-amber-600 flex justify-center items-center text-4xl text-blue-800 "
    >
      Hello
    </motion.div>
  );
};

export default BoxTranslate;

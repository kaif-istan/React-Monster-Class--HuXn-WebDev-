import { motion } from "framer-motion";

const containerVariants = {
  animate: {
    transition: {
      staggerChildren: 1,
    },
  },
};

const boxVariants = {
  initial: { x: 0 },
  animate: {
    x: 200,
    rotate: 180,
  },
};

const BoxSequentialAnimations = () => {
  return (
    <motion.div
      className="flex gap-10 p-2"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="w-20 h-20 bg-orange-500"
          variants={boxVariants}
          transition={{
            duration: 2,
          }}
        />
      ))}
    </motion.div>
  );
};

export default BoxSequentialAnimations;

import { motion } from "motion/react";

const BoxRotate = () => {
  return (
    <motion.img 
        src="https://plus.unsplash.com/premium_photo-1752551500520-9fe123115c6b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-40 h-40"
        animate={{rotate: 360}}
        transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
        }}
    />
  );
};

export default BoxRotate;

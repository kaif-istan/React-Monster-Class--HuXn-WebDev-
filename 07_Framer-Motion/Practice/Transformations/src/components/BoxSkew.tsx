import { useState } from "react";
import { motion } from "motion/react";
const BoxSkew = () => {
  const [skewed, setSkewed] = useState<boolean>(false);
  return (
    <motion.div
      onClick={() => setSkewed(!skewed)}
      className="w-40 h-40 bg-amber-500"
      animate={{
        skewX: skewed ? 20 : 0
      }}
      transition={{
        duration: 0.5
      }}
    ></motion.div>
  );
};

export default BoxSkew;

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const FadeComponents = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        onClick={() => setShow(!show)}
        className="mb-4 px-8 py-2 bg-blue-500 text-white rounded"
      >
        {show ? "Hide" : "Show"}
      </button>

      <AnimatePresence>
        {show && (
          <motion.div
            className="p-8 bg-green-500 text-white rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            Fading Content
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FadeComponents;

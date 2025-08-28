import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
const FadingSidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="m-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Toggle Sidebar
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-6"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8 }}
          >
            Sidebar Content
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FadingSidebar;

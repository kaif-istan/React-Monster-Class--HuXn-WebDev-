import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const Notification = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => setShow(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    <div className="p-6">
      <button
        onClick={() => setShow(!show)}
        className="px-4 py-2 bg-green-500 text-white rounded"
      >
        Show Toast
      </button>

      <AnimatePresence>
        {show && (
          <motion.div
            className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            ✅ Notification sent!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Notification;

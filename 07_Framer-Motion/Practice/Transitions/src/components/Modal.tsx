import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
const Modal = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-screen flex items-center justify-center">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-purple-600 text-white rounded"
      >
        Toggle Modal
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black opacity-80"
              onClick={() => setOpen(!open)}
            />
            {/* Modal */}
            <motion.div
              className="fixed top-1/4 lef-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg"
              initial={{ y: "-100%", opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: "-100%",
                opacity: 0,
              }}
              transition={{
                duration: 0.4,
              }}
            >
              <h2 className="text-xl font-bold mb-4">Modal Title</h2>
              <p>This is the modal content</p>
              <button
                onClick={() => setOpen(!open)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
              >
                Close
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Modal;

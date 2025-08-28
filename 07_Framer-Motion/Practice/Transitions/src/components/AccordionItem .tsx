import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const AccordionItem = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="border-b">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-4 font-semibold"
      >
        <h1>{title}</h1>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
          >
            {content}
          </motion.div>

        )}
      </AnimatePresence>
    </div>
  );
};

export default AccordionItem;

import { motion } from "motion/react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1446034295857-c39f8844fad4?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Forest",
  },
  {
    src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Mountains",
  },
  {
    src: "https://images.unsplash.com/photo-1559666126-84f389727b9a?q=80&w=3877&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Snow",
  },
];

const App = () => {
  return (
    <div className="min-h-screen bg-gray-400 flex items-center justify-center">
      <div className="w-[80%] flex gap-5">
        {images.map((image, index) => (
          <motion.div key={index}
          className="relative m-[1rem] overflow-hidden rounded-lg shadow-lg"
          whileHover={{scale: 1.05}}
          >
            <img
              src={image.src}
              alt={image.caption}
              className="w-full h-auto"
            />
            <motion.div 
            className="absolute inset-0 flex items-center justify-center bg-black opacity-0 text-white duration-300 cursor-pointer"
            whileHover={{opacity: 0.5}}
            transition={{duration: 0.2, ease: 'easeInOut'}}
            >
              <p className="text-lg">{image.caption}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default App;

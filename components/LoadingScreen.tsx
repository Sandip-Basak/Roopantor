import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 1000); // Wait for exit animation
    }, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white overflow-hidden"
          exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
        >
          {/* Background Noise & Vignette */}
          <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-radial from-transparent to-gray-100 pointer-events-none" />

          {/* Text Container */}
          <div className="relative z-10 flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="mb-4"
            >
              <h1 className="font-display text-4xl md:text-7xl text-roopantor-black tracking-[0.2em]">
                ROOPANTOR
              </h1>
            </motion.div>

            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100px" }}
                transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
                className="h-[1px] bg-roopantor-black mb-4"
            />

            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="font-serif text-roopantor-textLight italic text-sm md:text-lg tracking-widest"
            >
              From Bengal To Bharat
            </motion.span>
          </div>

          {/* Loading Progress Line */}
          <motion.div
            className="absolute bottom-20 w-64 h-[2px] bg-gray-200 overflow-hidden rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="h-full bg-roopantor-black"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
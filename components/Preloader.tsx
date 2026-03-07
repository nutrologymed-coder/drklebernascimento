import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[10000] bg-obsidian flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Logo Animation */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="text-center space-y-4"
            >
              <h1 className="text-matteGold text-4xl md:text-6xl font-serif italic tracking-tighter">
                Nurture
              </h1>
              <div className="h-px w-0 bg-matteGold/50 mx-auto animate-[expand_2s_ease-in-out_forwards]"></div>
              <p className="text-silkWhite/40 text-[10px] uppercase tracking-[0.5em] font-black">
                Nutrologia de Alta Performance
              </p>
            </motion.div>
          </div>

          {/* Background Elements */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0.05 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
            className="absolute w-[800px] h-[800px] bg-matteGold rounded-full blur-[150px] -z-10"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;

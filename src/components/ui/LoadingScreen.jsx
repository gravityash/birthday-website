import React from 'react';
import { motion } from 'framer-motion';
import { Cake } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-pastel-pink">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [0.8, 1.1, 1], opacity: 1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
      >
        <Cake size={64} className="text-rose-gold drop-shadow-md" />
      </motion.div>
      <motion.p
        className="mt-6 font-serif text-2xl text-gray-800 tracking-wider"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Preparing a surprise...
      </motion.p>
    </div>
  );
};

export default LoadingScreen;

import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('memory-gallery');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 pt-10">
      
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="relative mb-8"
      >
        {/* Glowing border effect */}
        <div className="absolute inset-0 rounded-full bg-white opacity-50 blur-xl animate-pulse"></div>
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative h-64 w-64 md:h-80 md:w-80 rounded-full border-4 border-white/80 p-2 shadow-2xl glass"
        >
          <img
            src="/images/WhatsApp%20Image%202026-05-18%20at%202.04.25%20AM.jpeg"
            alt="Main Birthday Cover"
            className="rounded-full w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-purple-600 drop-shadow-sm"
      >
        Happy Birthday, Beautiful Soul 🎂✨
      </motion.h1>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="max-w-2xl text-lg md:text-xl text-gray-700 mb-10 leading-relaxed font-light"
      >
        Today is all about celebrating your smile, your kindness, and the happiness you bring into everyone's life.
      </motion.p>

      <motion.button
        onClick={scrollToNext}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,255,255,0.5)' }}
        whileTap={{ scale: 0.95 }}
        className="glass-card px-8 py-4 rounded-full text-lg md:text-xl font-medium text-gray-800 shadow-xl transition-all duration-300 hover:bg-white/80"
      >
        Open Birthday Surprise 💝
      </motion.button>

    </section>
  );
};

export default Hero;

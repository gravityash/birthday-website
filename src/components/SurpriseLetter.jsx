import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart } from 'lucide-react';

const SurpriseLetter = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-24 px-4 flex flex-col items-center justify-center min-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          A Secret For You 💌
        </h2>
        <div className="h-1 w-24 bg-purple-300 mx-auto rounded-full"></div>
      </motion.div>

      <div className="relative w-full max-w-md h-64 md:h-80 perspective-1000">
        <AnimatePresence>
          {!isOpen ? (
            <motion.div
              key="envelope"
              initial={{ rotateX: 0 }}
              exit={{ rotateX: 90, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card w-full h-full rounded-xl flex flex-col items-center justify-center border-4 border-white/60 relative overflow-hidden"
              >
                {/* Envelope Flap visual */}
                <div className="absolute top-0 w-0 h-0 border-l-[150px] md:border-l-[200px] border-l-transparent border-r-[150px] md:border-r-[200px] border-r-transparent border-t-[100px] md:border-t-[150px] border-t-white/40"></div>
                
                <Mail size={64} className="text-rose-gold mb-4 mt-8 z-10" />
                <button className="bg-white/80 px-6 py-2 rounded-full font-medium text-gray-700 shadow-md z-10 hover:bg-white transition-colors">
                  Open Secret Letter 💌
                </button>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial={{ rotateX: -90, opacity: 0, y: 50 }}
              animate={{ rotateX: 0, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
              className="absolute inset-0"
            >
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border-2 border-rose-100">
                {/* Heavily blurred background image */}
                <div className="absolute inset-0">
                  <img 
                    src="/images/WhatsApp%20Image%202026-05-18%20at%202.04.26%20AM.jpeg" 
                    alt="Background"
                    className="w-full h-full object-cover blur-md scale-110 opacity-70"
                  />
                  <div className="absolute inset-0 bg-white/60"></div>
                </div>

                <div className="relative z-10 p-8 h-full flex flex-col items-center justify-center text-center">
                  <Heart className="absolute top-4 right-4 text-rose-400 animate-pulse" size={24} fill="#fda4af" />
                  <Heart className="absolute bottom-4 left-4 text-rose-400 animate-pulse" size={24} fill="#fda4af" />
                  
                  <p className="font-serif text-lg md:text-xl text-gray-900 leading-relaxed font-medium drop-shadow-sm">
                    "Some friendships are special because they turn ordinary days into memories. Thank you for all the random conversations, laughs and moments. Stay happy always 🌸✨"
                  </p>
                  <div className="mt-6 flex gap-2 justify-center w-full">
                     <div className="w-12 h-0.5 bg-rose-400"></div>
                     <div className="w-2 h-2 rounded-full bg-rose-500 -mt-0.5"></div>
                     <div className="w-12 h-0.5 bg-rose-400"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SurpriseLetter;

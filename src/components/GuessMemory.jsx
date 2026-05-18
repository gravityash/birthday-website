import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, Heart } from 'lucide-react';

const memoryImages = [
  "/images/WhatsApp%20Image%202026-05-18%20at%202.04.25%20AM%20(2).jpeg",
  "/images/WhatsApp%20Image%202026-05-18%20at%202.04.25%20AM.jpeg",
  "/images/WhatsApp%20Image%202026-05-18%20at%202.04.26%20AM%20(1).jpeg"
];

const GuessMemory = () => {
  const [revealed, setRevealed] = useState([false, false, false]);

  const toggleReveal = (index) => {
    const newRevealed = [...revealed];
    newRevealed[index] = true;
    setRevealed(newRevealed);
  };

  return (
    <section className="py-24 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Guess The Memory 🎲
        </h2>
        <div className="h-1 w-24 bg-rose-300 mx-auto rounded-full mb-4"></div>
        <p className="text-gray-600 font-sans text-lg">Click on the blurred images to unlock them!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {memoryImages.map((src, index) => (
          <div key={index} className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden glass shadow-lg">
            
            <img 
              src={src} 
              alt="Memory" 
              className={`w-full h-full object-cover transition-all duration-1000 ease-out ${revealed[index] ? 'blur-0 scale-100' : 'blur-xl scale-110'}`}
            />
            
            <AnimatePresence>
              {!revealed[index] && (
                <motion.div 
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 1.5 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => toggleReveal(index)}
                  className="absolute inset-0 bg-white/20 flex flex-col items-center justify-center cursor-pointer hover:bg-white/30 transition-colors"
                >
                  <HelpCircle size={64} className="text-white drop-shadow-lg mb-2 animate-bounce" />
                  <p className="text-white font-bold text-xl drop-shadow-md">Click to Reveal</p>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {revealed[index] && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md p-3 rounded-xl shadow-lg flex items-center justify-center gap-2"
                >
                  <Heart className="text-rose-400" size={20} fill="#fb7185" />
                  <p className="font-sans font-bold text-gray-800 text-sm text-center">
                    Unlocked a favorite memory ❤️
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        ))}
      </div>
    </section>
  );
};

export default GuessMemory;

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const reasonsList = [
  "Your smile brightens everything",
  "Your kindness is beautiful",
  "You make people feel special",
  "Your energy is unforgettable",
  "You deserve endless happiness"
];

const Reasons = () => {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl font-bold text-gray-800 mb-4"
        >
          Reasons You're Amazing 🌸
        </motion.h2>
        <div className="h-1 w-24 bg-purple-300 mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-col gap-6">
        {reasonsList.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.02, 
              y: -5,
              boxShadow: '0 10px 30px rgba(195, 177, 225, 0.4)' 
            }}
            className="glass-card p-6 rounded-2xl flex items-center gap-4 cursor-default relative overflow-hidden group"
          >
            <div className="bg-white/50 p-3 rounded-full group-hover:rotate-12 transition-transform duration-300">
              <Sparkles className="text-rose-gold" size={24} />
            </div>
            <p className="font-sans text-xl text-gray-700 font-medium">
              ✨ {reason}
            </p>
            
            {/* Hover particles effect (simplified using CSS) */}
            <div className="absolute right-0 top-0 w-32 h-32 bg-white opacity-0 group-hover:opacity-20 blur-2xl rounded-full transition-opacity duration-300 pointer-events-none"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Reasons;

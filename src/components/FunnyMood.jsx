import React from 'react';
import { motion } from 'framer-motion';

const FunnyMood = () => {
  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl font-bold text-gray-800 mb-4"
        >
          Mood: I Don't Care 😌
        </motion.h2>
        <div className="h-1 w-24 bg-rose-300 mx-auto rounded-full"></div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: -2 }}
          whileHover={{ scale: 1.05, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="glass-card p-4 rounded-2xl w-full max-w-sm shadow-xl"
        >
          <img 
            src="/images/WhatsApp%20Image%202026-05-18%20at%202.04.26%20AM.jpeg" 
            alt="I don't care 1" 
            className="w-full h-80 object-cover rounded-xl mb-4"
          />
          <p className="font-sans text-lg text-center text-gray-700 font-medium">
            "Birthday attitude level: Expert"
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 2 }}
          whileHover={{ scale: 1.05, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-4 rounded-2xl w-full max-w-sm shadow-xl"
        >
          <img 
            src="/images/WhatsApp%20Image%202026-05-18%20at%202.04.26%20AM%20(1).jpeg" 
            alt="I don't care 2" 
            className="w-full h-80 object-cover rounded-xl mb-4"
          />
          <p className="font-sans text-lg text-center text-gray-700 font-medium">
            "Too cool for ordinary birthdays"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FunnyMood;

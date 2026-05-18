import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const memories = [
  { src: '/images/WhatsApp%20Image%202026-05-18%20at%202.02.23%20AM.jpeg', caption: "Main character energy ✨" },
  { src: '/images/WhatsApp%20Image%202026-05-18%20at%202.02.24%20AM%20(1).jpeg', caption: "Too many good vibes in one frame 🌸" },
  { src: '/images/WhatsApp%20Image%202026-05-18%20at%202.02.24%20AM.jpeg', caption: "Aesthetic level = impossible" },
  { src: '/images/WhatsApp%20Image%202026-05-18%20at%202.02.25%20AM%20(1).jpeg', caption: "Main character energy ✨" },
  { src: '/images/WhatsApp%20Image%202026-05-18%20at%202.02.25%20AM%20(2).jpeg', caption: "Too many good vibes in one frame 🌸" },
  { src: '/images/WhatsApp%20Image%202026-05-18%20at%202.02.25%20AM.jpeg', caption: "Aesthetic level = impossible" },
];

const MemoryGallery = () => {
  return (
    <section id="memory-gallery" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Our Beautiful Memories 📸
        </h2>
        <div className="h-1 w-24 bg-rose-300 mx-auto rounded-full"></div>
      </motion.div>

      <div className="columns-2 md:columns-3 gap-6 space-y-6">
        {memories.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-2xl break-inside-avoid group cursor-pointer glass p-2 shadow-lg"
          >
            <div className="relative overflow-hidden rounded-xl w-full">
              <img
                src={item.src}
                alt={`Memory ${index + 1}`}
                className="w-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
              />
              {/* Hover overlay with heart and caption */}
              <div className="absolute inset-0 bg-white/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-4 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.5 }}
                  whileHover={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                >
                  <Heart className="text-rose-500 drop-shadow-md mb-2 mx-auto" size={40} fill="#f43f5e" />
                  <p className="font-sans font-bold text-gray-900 text-sm md:text-lg drop-shadow-md">{item.caption}</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MemoryGallery;

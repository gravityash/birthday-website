import React from 'react';
import { motion } from 'framer-motion';

const friendshipEvents = [
  { 
    title: "The accidental friendship chapter 📖", 
    image: "/images/WhatsApp%20Image%202026-05-18%20at%202.04.24%20AM.jpeg",
    position: "object-center"
  },
  { 
    title: "Random moments became memories 🌸", 
    image: "/images/WhatsApp%20Image%202026-05-18%20at%202.04.24%20AM%20(1).jpeg",
    position: "object-center"
  },
  { 
    title: "Proof that chaos creates memories 😂", 
    image: "/images/WhatsApp%20Image%202026-05-18%20at%202.04.24%20AM%20(2).jpeg",
    position: "object-center"
  },
  { 
    title: "Still one of my favorite humans ✨", 
    image: "/images/WhatsApp%20Image%202026-05-18%20at%202.04.25%20AM%20(1).jpeg",
    position: "object-top"
  }
];

const FriendshipMemories = () => {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Some Random Yet Favorite Memories
        </h2>
        <div className="h-1 w-32 bg-purple-300 mx-auto rounded-full"></div>
      </div>

      <div className="relative">
        {/* Animated Vertical Line */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white/60 rounded-full"
        ></motion.div>

        <div className="space-y-16 pt-4 pb-4">
          {friendshipEvents.map((event, index) => (
            <div key={index} className={`flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className={`w-[45%] flex flex-col ${index % 2 === 0 ? 'items-end text-right' : 'items-start text-left'}`}
              >
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-3 rounded-2xl w-full max-w-sm"
                >
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className={`w-full h-64 rounded-xl object-cover ${event.position || 'object-center'} shadow-sm mb-4`}
                  />
                  <h3 className="font-sans text-lg font-bold text-gray-800 px-2 pb-2">
                    {event.title}
                  </h3>
                </motion.div>
              </motion.div>
              
              {/* Center Node */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-purple-400 rounded-full border-4 border-white shadow-md z-10"
              ></motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FriendshipMemories;

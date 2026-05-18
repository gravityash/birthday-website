import React from 'react';
import { motion } from 'framer-motion';

const timelineEvents = [
  { title: "The day you were born", desc: "A beautiful soul entered the world.", image: "/images/WhatsApp%20Image%202026-05-18%20at%202.04.23%20AM.jpeg" },
  { title: "Childhood memories", desc: "Innocence, laughter, and growing up.", image: "/images/WhatsApp%20Image%202026-05-18%20at%202.04.24%20AM%20(1).jpeg" },
  { title: "Becoming amazing", desc: "Discovering your passions and strengths.", image: "/images/WhatsApp%20Image%202026-05-18%20at%202.04.24%20AM%20(2).jpeg" },
  { title: "Making everyone smile", desc: "Touching lives with your kindness.", image: "/images/WhatsApp%20Image%202026-05-18%20at%202.04.24%20AM.jpeg" },
  { title: "Today's special birthday", desc: "Celebrating the wonderful person you are.", image: "/images/WhatsApp%20Image%202026-05-18%20at%202.04.25%20AM%20(1).jpeg" }
];

const Timeline = () => {
  return (
    <section className="py-20 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-800 mb-4">
          Birthday Journey 🎈
        </h2>
        <div className="h-1 w-24 bg-rose-300 mx-auto rounded-full"></div>
      </div>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-white/50 rounded-full"></div>

        <div className="space-y-12">
          {timelineEvents.map((event, index) => (
            <div key={index} className={`flex items-center w-full ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className={`w-5/12 flex flex-col ${index % 2 === 0 ? 'items-end text-right' : 'items-start text-left'}`}
              >
                <div className="glass-card p-4 rounded-xl w-full max-w-sm hover:scale-105 transition-transform duration-300">
                  <h3 className="font-serif text-xl font-bold text-gray-800 mb-2">🌸 {event.title}</h3>
                  <p className="text-gray-600 font-sans text-sm mb-4">{event.desc}</p>
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full rounded-lg object-cover shadow-sm"
                  />
                </div>
              </motion.div>
              
              {/* Center Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-rose-400 rounded-full border-4 border-white shadow-md z-10"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;

import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const MessageSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayedText, setDisplayedText] = useState('');

  const fullText = ` Happy Birthday 🎂✨💖

I just want you to know that you're genuinely one of those people who make life feel a little softer and a little brighter 🌸😊 You may not realize it, but your smile, your presence, and even your little habits have a way of making people around you happy.

And somewhere between all our conversations and moments, I started caring about you more than I expected ❤️ Not in a loud way… but in the quiet kind of way where I simply wish for your happiness, your peace, and all the beautiful things life can give you 🫶✨

Also, a little wordplay for today 😄 — if happiness had a favorite person, I'm pretty sure it would have your contact saved already 📱💫

Stay happy, stay cared for, and please keep being the amazing person you are 🌷🎈`;

  useEffect(() => {
    if (isInView) {
      let i = 0;
      const timer = setInterval(() => {
        if (i < fullText.length) {
          setDisplayedText(prev => prev + fullText.charAt(i));
          i++;
        } else {
          clearInterval(timer);
        }
      }, 50); // Adjust typing speed here
      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <section className="relative py-24 px-4 overflow-hidden flex items-center justify-center">
      {/* Background Stars (simple CSS animation approach) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] opacity-30 animate-[spin_60s_linear_infinite]"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2px)',
            backgroundSize: '100px 100px',
            backgroundPosition: '0 0, 50px 50px'
          }}>
        </div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8 }}
        className="glass-card max-w-3xl w-full p-8 md:p-12 rounded-3xl relative z-10 text-center shadow-2xl"
      >
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          A Little Message For You ❤️
        </h2>

        <div className="min-h-[150px]">
          <p className="font-sans text-lg md:text-xl text-gray-700 leading-relaxed font-light whitespace-pre-wrap text-left">
            {displayedText}
            <span className="animate-pulse">|</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default MessageSection;

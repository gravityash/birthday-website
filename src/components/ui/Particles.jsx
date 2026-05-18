import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Star } from 'lucide-react';

const icons = [Heart, Sparkles, Star];
const colors = ['text-rose-gold', 'text-white', 'text-gold'];

const Particles = ({ count = 20 }) => {
  const particles = Array.from({ length: count }).map((_, i) => {
    const Icon = icons[Math.floor(Math.random() * icons.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 16 + 8; // 8px to 24px
    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const duration = Math.random() * 20 + 10; // 10s to 30s
    const delay = Math.random() * 5;

    return (
      <motion.div
        key={i}
        className={`absolute ${color} opacity-40`}
        style={{
          left: `${startX}vw`,
          top: `${startY}vh`,
        }}
        initial={{ y: 0, x: 0, opacity: 0, rotate: 0 }}
        animate={{
          y: [0, -100, -200, -300],
          x: [0, Math.random() * 50 - 25, Math.random() * 50 - 25],
          opacity: [0, 0.6, 0.6, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: 'linear',
          delay: delay,
        }}
      >
        <Icon size={size} fill={Icon === Heart ? 'currentColor' : 'none'} />
      </motion.div>
    );
  });

  return <>{particles}</>;
};

export default Particles;

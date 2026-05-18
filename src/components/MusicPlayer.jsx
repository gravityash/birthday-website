import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, SkipForward, Music } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const current = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setProgress((current / duration) * 100);
  };

  const handleSeek = (e) => {
    const time = (e.target.value / 100) * audioRef.current.duration;
    audioRef.current.currentTime = time;
    setProgress(e.target.value);
  };

  return (
    <section className="py-20 px-4 flex justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass-card p-6 md:p-8 rounded-3xl w-full max-w-md shadow-xl flex flex-col items-center relative overflow-hidden"
      >
        {/* Background glow when playing */}
        <div className={`absolute inset-0 bg-rose-200/20 blur-3xl transition-opacity duration-1000 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}></div>
        
        <h2 className="font-serif text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2 relative z-10">
          <Music size={24} className="text-purple-400" />
          Birthday Vibes 🎵
        </h2>

        {/* Album Art */}
        <div className="relative w-48 h-48 mb-8 z-10">
          <div className={`absolute inset-0 rounded-full bg-gradient-to-tr from-purple-300 to-rose-300 blur-md transition-all duration-1000 ${isPlaying ? 'opacity-100 scale-110 animate-spin-slow' : 'opacity-50 scale-100'}`}></div>
          <img 
            src="/images/WhatsApp%20Image%202026-05-18%20at%202.02.26%20AM.jpeg" 
            alt="Album Cover" 
            className={`w-full h-full object-cover rounded-full border-4 border-white shadow-lg relative z-10 transition-transform duration-[10s] ease-linear ${isPlaying ? 'rotate-[360deg] infinite' : ''}`}
            style={{ animation: isPlaying ? 'spin 10s linear infinite' : 'none' }}
          />
          {/* Center hole of record */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full z-20 border border-gray-200 shadow-inner"></div>
        </div>

        {/* Audio Element */}
        <audio 
          ref={audioRef}
          src="/song.mp3"
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
          loop
        />

        {/* Controls */}
        <div className="w-full relative z-10">
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={progress || 0} 
            onChange={handleSeek}
            className="w-full h-1 bg-gray-300 rounded-lg appearance-none cursor-pointer mb-6 accent-rose-400"
          />
          
          <div className="flex justify-center items-center gap-6">
            <button className="text-gray-500 hover:text-gray-800 transition-colors">
              <SkipForward size={24} className="rotate-180" />
            </button>
            
            <button 
              onClick={togglePlay}
              className="bg-white p-4 rounded-full shadow-md text-rose-400 hover:scale-110 transition-transform focus:outline-none"
            >
              {isPlaying ? <Pause size={28} fill="currentColor" /> : <Play size={28} fill="currentColor" className="ml-1" />}
            </button>
            
            <button className="text-gray-500 hover:text-gray-800 transition-colors">
              <SkipForward size={24} />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default MusicPlayer;

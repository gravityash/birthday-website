import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import MemoryGallery from './components/MemoryGallery';
import MessageSection from './components/MessageSection';
import FunnyMood from './components/FunnyMood';
import Reasons from './components/Reasons';
import FriendshipMemories from './components/FriendshipMemories';
import GuessMemory from './components/GuessMemory';
import SurpriseLetter from './components/SurpriseLetter';
import FinalCelebration from './components/FinalCelebration';
import LoadingScreen from './components/ui/LoadingScreen';
import Particles from './components/ui/Particles';
import IntroAnimation from './components/IntroAnimation';

function App() {
  const [loading, setLoading] = useState(true);
  const [introDone, setIntroDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleIntroComplete = () => {
    setIntroDone(true);
    // Play music on first interaction
    const audio = document.getElementById('bg-music');
    if (audio) {
      audio.play().catch(e => console.log("Audio play failed:", e));
      // Dispatch a custom event to notify MusicPlayer
      window.dispatchEvent(new Event('audio-started'));
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Global Background Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Particles count={30} />
      </div>

      <audio id="bg-music" src="/song.mp3" loop />

      {!introDone ? (
        <IntroAnimation onComplete={handleIntroComplete} />
      ) : (
        <main className="relative z-10">
          <Hero />
          <FunnyMood />
          <MemoryGallery />
          <MessageSection />
          <FriendshipMemories />
          <Reasons />
          <GuessMemory />
          <SurpriseLetter />
          <FinalCelebration />
        </main>
      )}
    </div>
  );
}

export default App;

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Music, VolumeX } from 'lucide-react';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  // Using a royalty-free romantic track placeholder. 
  // In a real scenario, the user would replace this URL with their specific song choice.
  const audioUrl = "https://cdn.pixabay.com/download/audio/2022/10/25/audio_24921fb9b6.mp3?filename=sweet-love-123838.mp3";
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(audioUrl);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.error("Playback failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={togglePlay}
      className="fixed top-4 right-4 z-50 p-3 bg-white/80 backdrop-blur-sm shadow-lg rounded-full text-pink-500 border-2 border-pink-200"
    >
      {isPlaying ? (
        <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
        >
            <Music size={24} fill="currentColor" />
        </motion.div>
      ) : (
        <VolumeX size={24} />
      )}
    </motion.button>
  );
};

export default MusicPlayer;

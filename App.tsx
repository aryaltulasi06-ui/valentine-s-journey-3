import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import MusicPlayer from './components/MusicPlayer';
import { Page } from './types';
import SceneIntro from './components/scenes/SceneIntro';
import ScenePunishment from './components/scenes/ScenePunishment';
import SceneAffirmation from './components/scenes/SceneAffirmation';
import SceneProposal from './components/scenes/SceneProposal';
import SceneGift from './components/scenes/SceneGift';
import SceneLetter from './components/scenes/SceneLetter';
import { Home } from 'lucide-react';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.INTRO);

  const renderPage = () => {
    const props = {
      onNext: () => {}, // Handled locally in components
      setPage: setCurrentPage,
    };

    switch (currentPage) {
      case Page.INTRO:
        return <SceneIntro {...props} />;
      case Page.PUNISHMENT:
        return <ScenePunishment {...props} />;
      case Page.AFFIRMATION:
        return <SceneAffirmation {...props} />;
      case Page.PROPOSAL:
        return <SceneProposal {...props} />;
      case Page.GIFT:
        return <SceneGift {...props} />;
      case Page.LETTER:
        return <SceneLetter {...props} />;
      default:
        return <SceneIntro {...props} />;
    }
  };

  return (
    <div className="w-full h-screen relative overflow-hidden bg-pink-50 text-gray-900">
      <MusicPlayer />

      {/* Home Button - Only on the Letter page */}
      {currentPage === Page.LETTER && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setCurrentPage(Page.INTRO)}
          className="fixed top-4 left-4 z-50 p-3 bg-white/80 backdrop-blur-sm shadow-lg rounded-full text-pink-500 border-2 border-pink-200 hover:bg-pink-50 transition-colors flex items-center justify-center"
          title="Go to Start"
        >
          <Home size={24} />
        </motion.button>
      )}
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full relative z-10"
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      {/* Animated Floating Background Hearts */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: "120vh", x: Math.random() * 100 - 50, opacity: 0, rotate: 0 }}
            animate={{ 
              y: "-20vh", 
              x: Math.random() * 100 - 50, 
              opacity: [0, 0.4, 0],
              rotate: Math.random() * 360
            }}
            transition={{ 
              duration: Math.random() * 10 + 15, 
              repeat: Infinity, 
              delay: Math.random() * 20, 
              ease: "linear" 
            }}
            className="absolute text-pink-300 select-none"
            style={{ 
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 3 + 1}rem`
            }}
          >
            ♥
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default App;
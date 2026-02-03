import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SceneProps, Page } from '../../types';
import confetti from 'canvas-confetti';

const SceneProposal: React.FC<SceneProps> = ({ setPage }) => {
  const [noCount, setNoCount] = useState(0);
  const [yesSize, setYesSize] = useState(1);
  const [noPosition, setNoPosition] = useState({ top: '60%', left: '60%' });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const moveNoButton = () => {
    const randomTop = Math.floor(Math.random() * 80) + 10;
    const randomLeft = Math.floor(Math.random() * 80) + 10;
    setNoPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
    setNoCount(prev => prev + 1);
    setYesSize(prev => prev + 0.3); // Grow YES button
  };

  const handleYesClick = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    // Launch confetti
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff69b4', '#ff1493', '#ffb6c1', '#ffffff'] // Pink and white theme
    });

    // Fire a few random bursts for extra effect
    const interval: any = setInterval(function() {
      if (Date.now() > end) {
        return clearInterval(interval);
      }
      confetti({
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 0,
        particleCount: 50,
        origin: {
          x: Math.random(),
          // since they fall down, start a bit higher than random
          y: Math.random() - 0.2
        },
        colors: ['#ff69b4', '#ff1493', '#ffb6c1', '#ffffff']
      });
    }, 250);

    setPage(Page.GIFT);
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="z-10 text-center mb-20 pointer-events-none"
      >
        <img 
            src="https://media.tenor.com/7vUxTNiGzksAAAAj/birbhaus-gojill.gif$0" 
            className="w-40 mx-auto mb-4" 
            alt="Please"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-pink-600 drop-shadow-sm font-handwriting">
          will you be my valentine?
        </h1>
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center">
        {/* YES BUTTON */}
        <motion.button
          onClick={handleYesClick}
          whileHover={{ scale: yesSize + 0.1 }}
          animate={{ scale: yesSize }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="bg-green-500 text-white font-bold rounded-lg shadow-xl z-20"
          style={{
            padding: `${20 * Math.max(1, yesSize * 0.5)}px ${40 * Math.max(1, yesSize * 0.5)}px`,
            fontSize: `${1.5 * Math.max(1, yesSize * 0.5)}rem`,
            // Ensure it doesn't get completely off screen if it gets huge
            maxWidth: '90vw',
            maxHeight: '90vh'
          }}
        >
          YES
        </motion.button>

        {/* NO BUTTON */}
        <motion.button
          onMouseEnter={moveNoButton}
          onClick={moveNoButton}
          animate={{ 
            top: noPosition.top, 
            left: noPosition.left,
            position: 'absolute' 
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="px-8 py-3 bg-red-500 text-white text-xl font-bold rounded-lg shadow-lg z-30"
        >
          {noCount === 0 ? "NO" : 
           noCount === 1 ? "Are you sure?" :
           noCount === 2 ? "Please?" :
           noCount === 3 ? "Don't do this!" :
           noCount === 4 ? "You're breaking my heart!" :
           "I'm gonna cry..."}
        </motion.button>
      </div>
    </div>
  );
};

export default SceneProposal;
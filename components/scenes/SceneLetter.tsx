import React from 'react';
import { motion } from 'framer-motion';
import { SceneProps } from '../../types';

const SceneLetter: React.FC<SceneProps> = () => {
  const letterContent = "I know it’s not Valentine’s Day yet, but I couldn’t wait to ask: Saanu, will you be my Valentine this year? 🌹 Being apart like this is the hardest thing I’ve ever done, but it only makes me want to fulfill every single wish we’ve ever made that much more. ✨ I’m dreaming of the day there’s no more distance between us. ☁️ I love you meri saanu, mero baccha. ❤️❤️❤️ 🧿";

  return (
    <div className="flex flex-col items-center justify-center min-h-full py-10 px-4 bg-pink-50">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", duration: 1 }}
        className="relative max-w-md w-full bg-white p-8 rounded-sm shadow-xl transform rotate-1 border-8 border-white"
        style={{
            boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
        }}
      >
        {/* Tape Effect */}
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-yellow-100/50 rotate-2 shadow-sm z-10"></div>

        <div className="mb-6 overflow-hidden rounded-md border-2 border-pink-100">
            <motion.img 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 2 }}
                src="https://media1.tenor.com/m/uJZDe916GaAAAAAC/kiss-i-love-you.gif$0" 
                alt="Milk and Mocha Hug" 
                className="w-full h-48 object-contain bg-white"
            />
        </div>

        <div className="font-handwriting text-2xl md:text-3xl text-gray-800 leading-relaxed min-h-[200px] flex items-center justify-center">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="text-center"
            >
              {letterContent}
            </motion.p>
        </div>
        
        <div className="mt-8 text-right font-handwriting text-xl text-pink-500">
            - Forever Yours
        </div>
      </motion.div>
      
      <div className="mt-8 text-gray-400 text-sm">
        Screenshotted? Good. ❤️
      </div>
    </div>
  );
};

export default SceneLetter;

import { FC, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: FC<SplashScreenProps> = ({ onComplete }) => {
  const [isAnimating, setIsAnimating] = useState(true);
  
  useEffect(() => {
    // Set a timer to complete the splash screen
    const timer = setTimeout(() => {
      setIsAnimating(false);
      
      // Add a small delay before calling onComplete to allow exit animation
      setTimeout(onComplete, 800);
    }, 3000); // Show splash for 3 seconds
    
    return () => clearTimeout(timer);
  }, [onComplete]);
  
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-sky-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <motion.div
          className="glassmorphic-container rounded-full p-6"
          animate={{ 
            boxShadow: [
              "0 0 20px rgba(255, 165, 0, 0.3)", 
              "0 0 40px rgba(255, 165, 0, 0.5)", 
              "0 0 20px rgba(255, 165, 0, 0.3)"
            ]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <motion.img 
            src="/lovable-uploads/23622778-abef-46bf-a9d8-f5287ec3c86b.png" 
            alt="Mood Tunes Balloon" 
            className="h-48 md:h-64 object-contain"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
      
      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold font-heading text-gradient mb-4">
          Mood Tunes
        </h1>
        <p className="text-sky-700/80 text-lg glassmorphic-text">
          Transforming images into melodies
        </p>
      </motion.div>
      
      <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="flex space-x-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-orange-400 rounded-full glassmorphic-dot"
              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                delay: index * 0.2,
                repeatType: "reverse",
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;

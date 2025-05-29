
import { FC } from 'react';

export const WaveSpinner: FC = () => {
  return (
    <div className="relative h-20 flex items-center justify-center gap-1 mb-2">
      {[...Array(7)].map((_, i) => (
        <div 
          key={i}
          className="glassmorphic-container w-2 md:w-3 rounded-full transform origin-bottom"
          style={{ 
            animationDelay: `${i * 0.1}s`,
            height: `${30 + Math.sin(i * 0.8) * 20}px`,
            animation: `wave ${1 + i * 0.1}s linear infinite`,
            background: `linear-gradient(to top, rgba(255, 126, 0, 0.8) ${i * 5}%, rgba(255, 185, 100, 0.6))`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default WaveSpinner;

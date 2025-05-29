
import { FC } from 'react';
import { WaveSpinner } from '@/components/WaveSpinner';

const LoadingState: FC = () => {
  return (
    <div className="w-full flex flex-col items-center py-8 animate-fade-in">
      <div className="glassmorphic-container p-4 rounded-full mb-2">
        <WaveSpinner />
      </div>
      <p className="text-lg font-medium text-orange-500 animate-pulse-slow mt-6 glassmorphic-text">Analyzing mood and composing music...</p>
      <div className="glassmorphic-container text-sm text-sky-700/70 mt-4 max-w-md text-center p-4 rounded-lg">
        <p>We're detecting colors, patterns, and emotional cues in your image</p>
        <p className="mt-1 text-xs opacity-75">This usually takes 5-10 seconds</p>
      </div>
    </div>
  );
};

export default LoadingState;

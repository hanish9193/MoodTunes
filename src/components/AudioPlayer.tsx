
import { FC, useState } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

interface AudioPlayerProps {
  // This would normally take an audio URL, but for now we'll mock it
  // audioUrl?: string;
}

const AudioPlayer: FC<AudioPlayerProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState([75]);
  
  // This would normally control actual audio playback
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };
  
  return (
    <div className="w-full p-6 bg-secondary rounded-xl animate-fade-in">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <Button 
            variant="secondary"
            size="icon" 
            className="rounded-full bg-primary text-white hover:bg-primary/90 h-12 w-12 flex-shrink-0"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </Button>
          <div className="w-full space-y-1">
            <h3 className="font-medium">Your Mood Composition</h3>
            <p className="text-sm text-muted-foreground">Based on your image's mood</p>
          </div>
        </div>
        
        <div className="w-full h-16 bg-black/5 rounded-lg overflow-hidden">
          {/* Audio waveform visualization (static for now) */}
          <div className="w-full h-full flex items-center justify-around px-2">
            {Array.from({ length: 50 }).map((_, i) => (
              <div 
                key={i} 
                className="w-1 bg-primary/70 rounded-full h-full transform scale-y-[0.2]"
                style={{ 
                  height: `${20 + Math.sin(i * 0.2) * 15 + Math.cos(i * 0.3) * 15}%`,
                  opacity: isPlaying ? 1 : 0.5,
                  transition: 'all 0.2s ease'
                }}
              ></div>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Volume2 size={18} className="text-muted-foreground" />
          <Slider
            value={volume}
            onValueChange={setVolume}
            max={100}
            step={1}
            className="w-24"
          />
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;

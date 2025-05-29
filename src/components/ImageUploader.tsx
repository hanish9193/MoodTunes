
import { FC, useState, useRef, ChangeEvent, DragEvent } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Upload, FileType, Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
}

const ImageUploader: FC<ImageUploaderProps> = ({ onImageUpload }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };
  
  const handleDragLeave = () => {
    setIsDragging(false);
  };
  
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  };
  
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  };
  
  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  const handleFile = (file: File) => {
    // Check if file is an image
    if (!file.type.match('image/jpeg') && !file.type.match('image/png')) {
      toast.error('Please upload a valid image file (JPG or PNG)');
      return;
    }
    
    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File is too large. Please upload an image smaller than 5MB.');
      return;
    }
    
    onImageUpload(file);
    toast.success('Image uploaded successfully!');
  };

  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);
  
  return (
    <div className="space-y-4">
      <div className="text-center">
        <h2 className="text-xl font-medium text-gradient font-heading animate-float">
          Upload an image and we'll turn it into a melody 🎵
        </h2>
      </div>
      
      <div
        className={`glassmorphic-container relative w-full h-64 border-2 border-dashed rounded-xl flex flex-col items-center justify-center p-6 transition-all cursor-pointer animate-tilt
          ${isDragging 
            ? 'border-orange-400 bg-sky-100/70 shadow-[0_0_20px_rgba(251,146,60,0.6)] animate-pulse-glow' 
            : isHovering
              ? 'border-orange-400/70 bg-sky-100/30 animate-glow'
              : 'border-sky-300/50 hover:border-orange-400/50'}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`w-16 h-16 rounded-full glassmorphic-container flex items-center justify-center mb-4 border border-orange-500/30 transition-transform ${isHovering ? 'scale-110' : ''}`}>
          <Upload className={`w-8 h-8 text-orange-500 ${isHovering ? 'animate-bounce' : 'animate-bounce-subtle'}`} />
        </div>
        <h3 className="text-lg font-semibold mb-2 text-orange-500 transition-colors glassmorphic-text">Upload an image</h3>
        <p className="text-sm text-sky-700/80 text-center mb-4">
          Drag and drop your image here, or click to browse
        </p>
        <div className="flex items-center gap-2 glassmorphic-container px-3 py-1 rounded-full">
          <FileType size={14} className="text-sky-700/60" />
          <p className="text-xs text-sky-700/60">
            Supports: JPG, PNG (max 5MB)
          </p>
          <Tooltip>
            <TooltipTrigger asChild>
              <span><Info size={14} className="text-sky-700/60 cursor-help" /></span>
            </TooltipTrigger>
            <TooltipContent className="glassmorphic-container border-none">
              <p className="text-xs">For best results, use clear images with distinct moods</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <input 
          type="file" 
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/jpeg, image/png" 
          className="hidden" 
        />
      </div>
    </div>
  );
};

export default ImageUploader;

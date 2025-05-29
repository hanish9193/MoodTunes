
import { FC } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ImagePreviewProps {
  imageUrl: string;
  onRemove: () => void;
}

const ImagePreview: FC<ImagePreviewProps> = ({ imageUrl, onRemove }) => {
  return (
    <div className="relative w-full animate-fade-in">
      <div className="absolute top-2 right-2 z-10">
        <Button 
          variant="secondary" 
          size="icon" 
          onClick={onRemove}
          className="rounded-full bg-sky-100/70 hover:bg-sky-200/80 text-sky-700 border border-sky-200/50"
        >
          <X size={18} />
        </Button>
      </div>
      <div className="w-full overflow-hidden rounded-xl border border-sky-200/50 shadow-lg neo-blur">
        <img 
          src={imageUrl} 
          alt="Uploaded image" 
          className="w-full h-auto object-cover" 
        />
      </div>
    </div>
  );
};

export default ImagePreview;

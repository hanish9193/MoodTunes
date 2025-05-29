
import { useState, useEffect } from "react";
import Spline from '@splinetool/react-spline';
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import ImageUploader from "@/components/ImageUploader";
import ImagePreview from "@/components/ImagePreview";
import LoadingState from "@/components/LoadingState";
import AudioPlayer from "@/components/AudioPlayer";
import { Music } from "lucide-react";

const Index = () => {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);
  const [dominantColor, setDominantColor] = useState<string | null>(null);

  const handleImageUpload = (file: File) => {
    // Create URL for the uploaded file
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage(imageUrl);
    
    // Simulate extracting a dominant color (in a real app, you'd use an image processing library)
    simulateColorExtraction();
    
    // Simulate the analysis process
    setIsAnalyzing(true);
    
    // After a delay, complete the process
    setTimeout(() => {
      setIsAnalyzing(false);
      setIsComplete(true);
    }, 5000); // 5 seconds delay
  };

  const simulateColorExtraction = () => {
    // This is a simulation - in a real app you'd analyze the actual image
    const mockColors = [
      'rgba(255, 100, 100, 0.05)', // red tint
      'rgba(100, 255, 100, 0.05)', // green tint
      'rgba(100, 100, 255, 0.05)', // blue tint
      'rgba(255, 255, 100, 0.05)', // yellow tint
      'rgba(255, 100, 255, 0.05)', // purple tint
    ];
    const randomColor = mockColors[Math.floor(Math.random() * mockColors.length)];
    setDominantColor(randomColor);
  };

  const handleRemoveImage = () => {
    if (uploadedImage) {
      URL.revokeObjectURL(uploadedImage);
    }
    setUploadedImage(null);
    setIsAnalyzing(false);
    setIsComplete(false);
    setDominantColor(null);
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setScrolledDown(scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    const contentSection = document.getElementById('content-section');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Add Google Fonts to document head
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&family=Quicksand:wght@400;500;600&display=swap';
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="min-h-screen font-melody" style={dominantColor ? { backgroundColor: dominantColor } : {}}>
      {/* Header - always visible */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolledDown ? 'bg-sky-100/80 backdrop-blur-md shadow-md' : ''}`}>
        <div className="container mx-auto">
          <Header />
        </div>
      </div>

      {/* Hero section with Spline - interactive */}
      <div className="h-screen w-full relative overflow-hidden">
        <Spline
          scene="https://prod.spline.design/01pcyNBkVFGOIHsr/scene.splinecode"
          className="absolute inset-0 w-full h-full"
        />
        
        {/* Cloud to cover watermark - increased size and moved lower */}
        <div className="absolute bottom-0 right-0 z-20 w-96 h-60">
          <img 
            src="/lovable-uploads/fbeb9d63-aaee-4d6e-aea7-37e5ca9b322d.png" 
            alt="Cloud" 
            className="w-full h-full object-contain opacity-90"
          />
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10" onClick={scrollToContent}>
          <div className="text-white drop-shadow-md text-sm flex flex-col items-center cursor-pointer font-heading">
            <p>Scroll Down</p>
            <svg className="w-6 h-6 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Content section */}
      <div id="content-section" className={`py-8 bg-sky-50/90 transition-all duration-1000 ${dominantColor ? 'bg-opacity-95' : ''}`} style={dominantColor ? { backgroundColor: dominantColor } : {}}>
        <div className="container mx-auto max-w-5xl px-4 md:px-8">
          <main className="py-10">
            {!uploadedImage && (
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center p-2 rounded-full bg-orange-100/50 mb-4">
                  <Music size={24} className="text-orange-500" />
                </div>
                <h1 className="text-3xl font-bold font-heading text-gradient mb-2">Transform Images Into Music</h1>
                <p className="text-sky-700/80 max-w-lg mx-auto">
                  Our AI analyzes the emotions and elements in your image to create a unique melody that matches its mood
                </p>
              </div>
            )}

            <Card className={`neo-blur mx-auto max-w-2xl mb-10 transition-all duration-500 ${uploadedImage ? 'scale-100' : 'hover:scale-105'}`}>
              <CardContent className="p-6">
                {!uploadedImage ? (
                  <ImageUploader onImageUpload={handleImageUpload} />
                ) : (
                  <ImagePreview imageUrl={uploadedImage} onRemove={handleRemoveImage} />
                )}
              </CardContent>
            </Card>
            
            {isAnalyzing && (
              <div className="max-w-2xl mx-auto">
                <LoadingState />
              </div>
            )}
            
            {isComplete && (
              <div className="max-w-2xl mx-auto animate-fade-in">
                <AudioPlayer />
              </div>
            )}
          </main>
          
          <footer className="py-8 px-4 md:px-8 text-center text-sm text-sky-700/70">
            <p>© 2025 MoodTunes. All rights reserved.</p>
            <p className="mt-2">Turning visuals into sound through the power of AI.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;

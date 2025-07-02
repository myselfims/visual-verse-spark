import { useState, useEffect } from "react";
import { Sparkles, Wand2, Zap } from "lucide-react";

const tips = [
  "✨ Creating magical animations just for you...",
  "🎨 Bringing your ideas to life with AI...", 
  "🚀 Generating stunning 3D visuals...",
  "💫 Almost there! Adding finishing touches...",
  "🎬 Your educational masterpiece is ready!"
];

const LoadingView = () => {
  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-gradient-soft flex items-center justify-center z-50">
      {/* Floating sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary-glow rounded-full animate-sparkle"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-accent rounded-full animate-sparkle delay-500"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-primary rounded-full animate-sparkle delay-1000"></div>
        <div className="absolute bottom-48 right-20 w-2 h-2 bg-accent rounded-full animate-sparkle delay-700"></div>
      </div>

      <div className="text-center max-w-md mx-auto px-4">
        {/* Loading animation */}
        <div className="relative mb-8">
          <div className="w-32 h-32 mx-auto relative">
            <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
            <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
            <div className="absolute inset-4 rounded-full bg-gradient-magic flex items-center justify-center animate-glow">
              <Wand2 className="w-8 h-8 text-white animate-bounce" />
            </div>
          </div>
          
          {/* Floating icons */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <Sparkles className="absolute top-2 right-8 w-6 h-6 text-primary animate-float" />
            <Zap className="absolute bottom-4 left-4 w-5 h-5 text-accent animate-float delay-500" />
          </div>
        </div>

        {/* Loading text */}
        <h2 className="text-2xl font-bold text-foreground mb-4">
          Creating Your Magic
        </h2>
        
        {/* Tips carousel */}
        <div className="h-12 flex items-center justify-center">
          <p className="text-lg text-muted-foreground animate-fade-in" key={currentTip}>
            {tips[currentTip]}
          </p>
        </div>

        {/* Progress dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {tips.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentTip ? 'bg-primary' : 'bg-primary/30'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingView;
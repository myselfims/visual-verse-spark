import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles, Play } from "lucide-react";
import aiMascot from "@/assets/ai-mascot.png";
import LoadingView from "./LoadingView";
import ResultViewer from "./ResultViewer";

const HeroSection = () => {
  const [prompt, setPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [originalPrompt, setOriginalPrompt] = useState("");

  const handleGenerate = () => {
    if (prompt.trim()) {
      setOriginalPrompt(prompt);
      setIsLoading(true);
      
      // Simulate loading time
      setTimeout(() => {
        setIsLoading(false);
        setShowResult(true);
      }, 8000); // 8 seconds to show all tips
    }
  };

  const handleBackToHome = () => {
    setShowResult(false);
    setPrompt("");
    setOriginalPrompt("");
  };

  if (isLoading) {
    return <LoadingView />;
  }

  if (showResult) {
    return <ResultViewer onBack={handleBackToHome} originalPrompt={originalPrompt} />;
  }

  return (
    <section className="relative min-h-[600px] bg-gradient-soft flex items-center justify-center px-4 overflow-hidden">
      {/* Floating sparkles for magical effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary-glow rounded-full animate-sparkle"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-accent rounded-full animate-sparkle delay-500"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-primary rounded-full animate-sparkle delay-1000"></div>
        <div className="absolute bottom-48 right-20 w-2 h-2 bg-accent rounded-full animate-sparkle delay-700"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* AI Mascot */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img 
              src={aiMascot} 
              alt="AI Mascot" 
              className="w-32 h-32 animate-float drop-shadow-lg"
            />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full animate-glow"></div>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          Transform Ideas into
          <span className="bg-gradient-magic bg-clip-text text-transparent ml-3">
            Magic
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Create stunning educational animations with just a simple prompt. 
          Watch your ideas come to life in seconds!
        </p>

        {/* Prompt input section */}
        <div className="bg-card rounded-3xl p-8 shadow-card border border-border max-w-2xl mx-auto mb-8">
          <div className="relative">
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe what you want to visualize... e.g., 'show how the solar system works'"
              className="w-full h-32 p-4 bg-background border border-border rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-foreground placeholder:text-muted-foreground"
            />
            <div className="absolute bottom-4 right-4 flex items-center space-x-2 text-muted-foreground">
              <Sparkles size={16} />
              <span className="text-sm">Be creative!</span>
            </div>
          </div>
          
          <Button 
            onClick={handleGenerate}
            variant="magical" 
            size="lg" 
            className="w-full mt-6 h-14 text-lg"
            disabled={!prompt.trim()}
          >
            <Play className="mr-2" size={20} />
            Generate Video Magic
          </Button>
        </div>

        {/* Preview section placeholder */}
        <div className="bg-card rounded-3xl p-8 shadow-card border border-border max-w-2xl mx-auto">
          <div className="aspect-video bg-gradient-soft rounded-2xl flex items-center justify-center border-2 border-dashed border-border">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="text-primary" size={24} />
              </div>
              <p className="text-muted-foreground">Your generated video will appear here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
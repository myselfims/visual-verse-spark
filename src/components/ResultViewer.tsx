import { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Download, Share2, RefreshCw, Home } from "lucide-react";

interface ResultViewerProps {
  onBack: () => void;
  originalPrompt: string;
}

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh>
      <OrbitControls />
    </>
  );
};

const ResultViewer = ({ onBack, originalPrompt }: ResultViewerProps) => {
  const [modifyPrompt, setModifyPrompt] = useState("");

  const handleModify = () => {
    if (modifyPrompt.trim()) {
      console.log("Modifying with:", modifyPrompt);
      // Here you would integrate with your modification service
      setModifyPrompt("");
    }
  };

  const handleDownload = () => {
    console.log("Downloading result...");
    // Download functionality
  };

  const handleShare = () => {
    console.log("Sharing result...");
    // Share functionality
  };

  const handleRegenerate = () => {
    console.log("Regenerating...");
    // Regenerate functionality
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="bg-card border-b border-border p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Button
              variant="soft"
              size="sm"
              onClick={onBack}
              className="flex items-center space-x-2"
            >
              <Home size={16} />
              <span>Back to Home</span>
            </Button>
            <div className="text-sm text-muted-foreground">
              Original: "{originalPrompt}"
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm" onClick={handleRegenerate}>
              <RefreshCw size={16} />
            </Button>
            <Button variant="outline" size="sm" onClick={handleDownload}>
              <Download size={16} />
            </Button>
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Main viewer */}
      <div className="flex-1 p-4">
        <div className="max-w-7xl mx-auto h-full">
          <div className="bg-card rounded-3xl shadow-card border border-border h-full overflow-hidden">
            <Canvas className="w-full h-full">
              <Scene />
            </Canvas>
          </div>
        </div>
      </div>

      {/* Bottom modification bar */}
      <div className="bg-card border-t border-border p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-2xl p-4 border border-border">
            <div className="flex space-x-3">
              <Input
                value={modifyPrompt}
                onChange={(e) => setModifyPrompt(e.target.value)}
                placeholder="Modify your creation... e.g., 'make it rotate faster' or 'add more planets'"
                className="flex-1 bg-card"
                onKeyPress={(e) => e.key === 'Enter' && handleModify()}
              />
              <Button 
                onClick={handleModify}
                variant="magical"
                disabled={!modifyPrompt.trim()}
                className="px-6"
              >
                <Send size={16} />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Describe how you'd like to modify your creation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultViewer;
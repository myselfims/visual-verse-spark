import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExamplePrompts from "@/components/ExamplePrompts";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ExamplePrompts />
    </div>
  );
};

export default Index;

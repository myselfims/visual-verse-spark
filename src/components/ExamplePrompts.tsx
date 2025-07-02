import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Lightbulb, Atom, Droplets, Calculator, Dna, Globe } from "lucide-react";

const ExamplePrompts = () => {
  const examples = [
    {
      icon: Calculator,
      title: "Visualize Pythagoras Theorem",
      description: "Show the mathematical relationship in a triangle",
      prompt: "visualize pythagoras theorem with animated squares"
    },
    {
      icon: Droplets,
      title: "Animate Water Cycle",
      description: "Demonstrate evaporation, condensation, and precipitation",
      prompt: "animate the water cycle with clouds and rain"
    },
    {
      icon: Atom,
      title: "Atomic Structure",
      description: "Explore electrons orbiting around the nucleus",
      prompt: "show how electrons orbit around an atomic nucleus"
    },
    {
      icon: Dna,
      title: "DNA Replication",
      description: "Watch DNA strands unzip and replicate",
      prompt: "animate DNA replication process step by step"
    },
    {
      icon: Globe,
      title: "Solar System Motion",
      description: "See planets orbiting around the sun",
      prompt: "show how planets orbit around the sun in our solar system"
    },
    {
      icon: Lightbulb,
      title: "How Electricity Works",
      description: "Visualize electrical current flow",
      prompt: "explain how electricity flows through a circuit"
    }
  ];

  const handleExampleClick = (prompt: string) => {
    // This would set the prompt in the main input
    console.log("Selected example:", prompt);
  };

  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get Inspired
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Not sure what to create? Try these popular prompts and watch the magic happen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((example, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-magical transition-all duration-300 hover:scale-105 cursor-pointer border border-border bg-card"
              onClick={() => handleExampleClick(example.prompt)}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-magic rounded-xl flex items-center justify-center flex-shrink-0">
                  <example.icon className="text-white" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">{example.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{example.description}</p>
                  <Button variant="soft" size="sm" className="text-xs">
                    Try This Prompt
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View More Examples
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ExamplePrompts;
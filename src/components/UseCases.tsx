import { Card } from "./ui/card";
import { Calculator, Cpu, Binary, Zap } from "lucide-react";

const useCases = [
  {
    icon: Calculator,
    title: "Arithmetic Logic Units (ALU)",
    description: "Full adders form the foundation of ALUs in CPUs, performing addition and subtraction operations on binary numbers.",
    color: "primary"
  },
  {
    icon: Cpu,
    title: "Processors & Microcontrollers",
    description: "Every modern processor uses chains of full adders to perform mathematical computations at incredible speeds.",
    color: "secondary"
  },
  {
    icon: Binary,
    title: "Digital Signal Processing",
    description: "Used in DSP applications for filtering, encoding, and processing digital audio and video signals.",
    color: "accent"
  },
  {
    icon: Zap,
    title: "Memory Address Calculation",
    description: "Essential for calculating memory addresses and offsets in computer memory systems.",
    color: "primary"
  }
];

export const UseCases = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-6 text-center">
          <span className="text-gradient">Real-World Applications</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Half and full adders are the building blocks of modern computing, used in countless applications.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {useCases.map((useCase, i) => {
            const Icon = useCase.icon;
            return (
              <Card 
                key={i}
                className="p-6 bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all hover:scale-105"
              >
                <div className={`w-12 h-12 rounded-lg bg-${useCase.color}/20 flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 text-${useCase.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-muted-foreground">{useCase.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4 text-center text-primary">
            Why Are They Important?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">Billions</div>
              <p className="text-sm text-muted-foreground">of operations per second in modern CPUs</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">Foundation</div>
              <p className="text-sm text-muted-foreground">of all digital arithmetic operations</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Universal</div>
              <p className="text-sm text-muted-foreground">used in every digital computing device</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

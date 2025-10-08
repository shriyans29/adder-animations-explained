import { useState, useEffect } from "react";
import { TruthTable } from "./TruthTable";
import { Card } from "./ui/card";

export const HalfAdder = () => {
  const [activeRow, setActiveRow] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRow((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const truthTableData = [
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [1, 0, 1, 0],
    [1, 1, 0, 1],
  ];

  const currentInputs = truthTableData[activeRow];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-6 text-center">
          <span className="text-gradient">Half Adder</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A half adder adds two single binary digits and outputs a sum (S) and carry (C). 
          It uses an XOR gate for the sum and an AND gate for the carry.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Truth Table</h3>
            <TruthTable 
              headers={["A", "B", "Sum", "Carry"]}
              rows={truthTableData}
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-secondary">Animated Circuit</h3>
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-secondary/20">
              <div className="relative h-64 flex items-center justify-center">
                {/* Inputs */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-12">
                  <div className={`px-4 py-2 rounded-lg font-mono font-bold transition-all ${
                    currentInputs[0] ? 'bg-accent text-background glow-accent' : 'bg-muted text-muted-foreground'
                  }`}>
                    A: {currentInputs[0]}
                  </div>
                  <div className={`px-4 py-2 rounded-lg font-mono font-bold transition-all ${
                    currentInputs[1] ? 'bg-accent text-background glow-accent' : 'bg-muted text-muted-foreground'
                  }`}>
                    B: {currentInputs[1]}
                  </div>
                </div>

                {/* Logic Gates */}
                <div className="flex flex-col gap-8">
                  <div className="relative">
                    <div className={`px-6 py-4 rounded-lg border-2 font-mono font-bold transition-all ${
                      currentInputs[2] ? 'border-accent bg-accent/20 glow-accent' : 'border-primary/30 bg-card'
                    }`}>
                      XOR
                    </div>
                    {currentInputs[2] === 1 && (
                      <div className="absolute inset-0 animate-pulse-glow rounded-lg bg-accent/20"></div>
                    )}
                  </div>
                  
                  <div className="relative">
                    <div className={`px-6 py-4 rounded-lg border-2 font-mono font-bold transition-all ${
                      currentInputs[3] ? 'border-accent bg-accent/20 glow-accent' : 'border-primary/30 bg-card'
                    }`}>
                      AND
                    </div>
                    {currentInputs[3] === 1 && (
                      <div className="absolute inset-0 animate-pulse-glow rounded-lg bg-accent/20"></div>
                    )}
                  </div>
                </div>

                {/* Outputs */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-12">
                  <div className={`px-4 py-2 rounded-lg font-mono font-bold transition-all ${
                    currentInputs[2] ? 'bg-accent text-background glow-accent' : 'bg-muted text-muted-foreground'
                  }`}>
                    S: {currentInputs[2]}
                  </div>
                  <div className={`px-4 py-2 rounded-lg font-mono font-bold transition-all ${
                    currentInputs[3] ? 'bg-accent text-background glow-accent' : 'bg-muted text-muted-foreground'
                  }`}>
                    C: {currentInputs[3]}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

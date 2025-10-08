import { useState, useEffect } from "react";
import { TruthTable } from "./TruthTable";
import { Card } from "./ui/card";

export const FullAdder = () => {
  const [activeRow, setActiveRow] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRow((prev) => (prev + 1) % 8);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const truthTableData = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 1, 0, 1],
    [1, 0, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [1, 1, 0, 0, 1],
    [1, 1, 1, 1, 1],
  ];

  const currentInputs = truthTableData[activeRow];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold mb-6 text-center">
          <span className="text-gradient">Full Adder</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A full adder adds three binary digits (two inputs plus carry-in) and produces a sum and carry-out. 
          It's constructed using two half adders and an OR gate.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-primary">Truth Table</h3>
            <TruthTable 
              headers={["A", "B", "Cin", "Sum", "Cout"]}
              rows={truthTableData}
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-secondary">Animated Circuit</h3>
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-secondary/20">
              <div className="relative h-80 flex items-center justify-center">
                {/* Inputs */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 space-y-8">
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
                  <div className={`px-4 py-2 rounded-lg font-mono font-bold transition-all ${
                    currentInputs[2] ? 'bg-accent text-background glow-accent' : 'bg-muted text-muted-foreground'
                  }`}>
                    Cin: {currentInputs[2]}
                  </div>
                </div>

                {/* Logic representation */}
                <div className="flex flex-col gap-6 items-center">
                  <div className="flex gap-4">
                    <div className={`px-4 py-3 rounded-lg border-2 font-mono text-sm transition-all ${
                      (currentInputs[0] ^ currentInputs[1]) ? 'border-accent bg-accent/20' : 'border-primary/30 bg-card'
                    }`}>
                      HA1
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className={`px-4 py-3 rounded-lg border-2 font-mono text-sm transition-all ${
                      currentInputs[3] ? 'border-accent bg-accent/20 glow-accent' : 'border-primary/30 bg-card'
                    }`}>
                      HA2
                    </div>
                  </div>

                  <div className={`px-4 py-3 rounded-lg border-2 font-mono text-sm transition-all ${
                    currentInputs[4] ? 'border-accent bg-accent/20 glow-accent' : 'border-primary/30 bg-card'
                  }`}>
                    OR
                  </div>
                </div>

                {/* Outputs */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 space-y-12">
                  <div className={`px-4 py-2 rounded-lg font-mono font-bold transition-all ${
                    currentInputs[3] ? 'bg-accent text-background glow-accent' : 'bg-muted text-muted-foreground'
                  }`}>
                    Sum: {currentInputs[3]}
                  </div>
                  <div className={`px-4 py-2 rounded-lg font-mono font-bold transition-all ${
                    currentInputs[4] ? 'bg-accent text-background glow-accent' : 'bg-muted text-muted-foreground'
                  }`}>
                    Cout: {currentInputs[4]}
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

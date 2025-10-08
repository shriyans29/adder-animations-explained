import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export const BinaryCalculator = () => {
  const [num1, setNum1] = useState("0000");
  const [num2, setNum2] = useState("0000");
  const [showCarry, setShowCarry] = useState(false);

  const calculateSum = () => {
    const n1 = parseInt(num1, 2);
    const n2 = parseInt(num2, 2);
    const sum = n1 + n2;
    return sum.toString(2).padStart(5, '0');
  };

  const fullAdderStep = (a: string, b: string, cin: string) => {
    const aBit = parseInt(a);
    const bBit = parseInt(b);
    const cinBit = parseInt(cin);
    
    const sum = (aBit ^ bBit ^ cinBit).toString();
    const cout = ((aBit && bBit) || (aBit && cinBit) || (bBit && cinBit)) ? '1' : '0';
    
    return { sum, cout };
  };

  const calculateWithSteps = () => {
    const steps = [];
    let carry = '0';
    
    for (let i = 3; i >= 0; i--) {
      const result = fullAdderStep(num1[i], num2[i], carry);
      steps.push({
        position: 3 - i,
        a: num1[i],
        b: num2[i],
        cin: carry,
        sum: result.sum,
        cout: result.cout
      });
      carry = result.cout;
    }
    
    return { steps: steps.reverse(), finalCarry: carry };
  };

  const toggleBit = (number: 'num1' | 'num2', position: number) => {
    const current = number === 'num1' ? num1 : num2;
    const newValue = current.split('').map((bit, i) => 
      i === position ? (bit === '0' ? '1' : '0') : bit
    ).join('');
    
    if (number === 'num1') setNum1(newValue);
    else setNum2(newValue);
  };

  const result = calculateSum();
  const steps = calculateWithSteps();

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl font-bold mb-6 text-center">
          <span className="text-gradient">Interactive Binary Calculator</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Click on the bits to toggle them and see how full adders work together to perform binary addition.
        </p>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-primary/20 mb-8">
          <div className="space-y-8">
            {/* Input A */}
            <div className="flex items-center gap-4">
              <span className="text-lg font-semibold w-24">Number A:</span>
              <div className="flex gap-2">
                {num1.split('').map((bit, i) => (
                  <button
                    key={i}
                    onClick={() => toggleBit('num1', i)}
                    className={`w-16 h-16 rounded-lg font-mono text-xl font-bold transition-all ${
                      bit === '1' 
                        ? 'bg-accent text-background glow-accent' 
                        : 'bg-muted text-muted-foreground hover:bg-muted/70'
                    }`}
                  >
                    {bit}
                  </button>
                ))}
              </div>
              <span className="text-muted-foreground ml-4">
                = {parseInt(num1, 2)}
              </span>
            </div>

            {/* Input B */}
            <div className="flex items-center gap-4">
              <span className="text-lg font-semibold w-24">Number B:</span>
              <div className="flex gap-2">
                {num2.split('').map((bit, i) => (
                  <button
                    key={i}
                    onClick={() => toggleBit('num2', i)}
                    className={`w-16 h-16 rounded-lg font-mono text-xl font-bold transition-all ${
                      bit === '1' 
                        ? 'bg-accent text-background glow-accent' 
                        : 'bg-muted text-muted-foreground hover:bg-muted/70'
                    }`}
                  >
                    {bit}
                  </button>
                ))}
              </div>
              <span className="text-muted-foreground ml-4">
                = {parseInt(num2, 2)}
              </span>
            </div>

            <div className="border-t border-primary/20 pt-4"></div>

            {/* Result */}
            <div className="flex items-center gap-4">
              <span className="text-lg font-semibold w-24">Sum:</span>
              <div className="flex gap-2">
                {result.split('').map((bit, i) => (
                  <div
                    key={i}
                    className={`w-16 h-16 rounded-lg font-mono text-xl font-bold flex items-center justify-center ${
                      bit === '1' 
                        ? 'bg-primary text-primary-foreground glow-primary' 
                        : 'bg-card border border-border text-foreground'
                    }`}
                  >
                    {bit}
                  </div>
                ))}
              </div>
              <span className="text-muted-foreground ml-4">
                = {parseInt(result, 2)}
              </span>
            </div>

            <Button 
              onClick={() => setShowCarry(!showCarry)}
              variant="outline"
              className="w-full border-secondary/30 hover:bg-secondary/10"
            >
              {showCarry ? 'Hide' : 'Show'} Step-by-Step Process
            </Button>

            {showCarry && (
              <div className="mt-6 p-6 bg-background/50 rounded-lg border border-secondary/20">
                <h3 className="text-xl font-semibold mb-4 text-secondary">Full Adder Chain</h3>
                <div className="space-y-4">
                  {steps.steps.map((step, i) => (
                    <div key={i} className="grid grid-cols-6 gap-4 items-center text-center">
                      <div className="font-mono">
                        <div className="text-sm text-muted-foreground">Bit {step.position}</div>
                      </div>
                      <div className={`px-3 py-2 rounded ${step.a === '1' ? 'bg-accent/20 text-accent' : 'bg-muted/20'}`}>
                        A: {step.a}
                      </div>
                      <div className={`px-3 py-2 rounded ${step.b === '1' ? 'bg-accent/20 text-accent' : 'bg-muted/20'}`}>
                        B: {step.b}
                      </div>
                      <div className={`px-3 py-2 rounded ${step.cin === '1' ? 'bg-secondary/20 text-secondary' : 'bg-muted/20'}`}>
                        Cin: {step.cin}
                      </div>
                      <div className={`px-3 py-2 rounded ${step.sum === '1' ? 'bg-primary/20 text-primary' : 'bg-muted/20'}`}>
                        Sum: {step.sum}
                      </div>
                      <div className={`px-3 py-2 rounded ${step.cout === '1' ? 'bg-secondary/20 text-secondary' : 'bg-muted/20'}`}>
                        Cout: {step.cout}
                      </div>
                    </div>
                  ))}
                  <div className="text-sm text-muted-foreground text-center mt-4">
                    Final Carry Out: <span className={steps.finalCarry === '1' ? 'text-secondary font-bold' : ''}>{steps.finalCarry}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};

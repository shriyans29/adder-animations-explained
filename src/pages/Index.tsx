import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HalfAdder } from "@/components/HalfAdder";
import { FullAdder } from "@/components/FullAdder";
import { BinaryCalculator } from "@/components/BinaryCalculator";
import { UseCases } from "@/components/UseCases";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HalfAdder />
      <FullAdder />
      <BinaryCalculator />
      <UseCases />
      
      <footer className="py-8 border-t border-primary/20 text-center">
        <p className="text-muted-foreground">
          Understanding the fundamentals of digital logic circuits
        </p>
      </footer>
    </main>
  );
};

export default Index;

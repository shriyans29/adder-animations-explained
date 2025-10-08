import heroImage from "@/assets/hero-circuit.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Digital circuit board" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Digital Adders</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Explore the fundamental building blocks of digital computing through interactive visualizations
          </p>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <div className="px-6 py-3 bg-card/50 border border-primary/30 rounded-lg backdrop-blur-sm glow-primary">
              <code className="text-primary font-mono">0 + 0 = 0</code>
            </div>
            <div className="px-6 py-3 bg-card/50 border border-secondary/30 rounded-lg backdrop-blur-sm">
              <code className="text-secondary font-mono">0 + 1 = 1</code>
            </div>
            <div className="px-6 py-3 bg-card/50 border border-accent/30 rounded-lg backdrop-blur-sm glow-accent">
              <code className="text-accent font-mono">1 + 1 = 10</code>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse-glow"></div>
        </div>
      </div>
    </section>
  );
};

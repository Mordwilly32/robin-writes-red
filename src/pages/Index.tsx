import { Hero } from "@/components/Hero";
import { TextGenerator } from "@/components/TextGenerator";
import { TextChecker } from "@/components/TextChecker";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <TextGenerator />
          <TextChecker />
        </div>
      </main>

      <footer className="border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm text-muted-foreground">
            Powered by robinAI • Your personal AI writing assistant
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

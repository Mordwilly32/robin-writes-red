import { Sparkles } from "lucide-react";
import robinMascot from "@/assets/robin-mascot.png";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <img 
              src={robinMascot} 
              alt="Robin AI Mascot" 
              className="w-32 h-32 sm:w-40 sm:h-40 animate-float drop-shadow-2xl"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight">
            robinAI
          </h1>
          
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-4 font-medium">
            Your Personal AI Writing Assistant
          </p>
          
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Generate creative content and polish your writing with the power of AI. 
            Fast, intelligent, and always ready to help.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base text-white/90">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span>Fast & Reliable</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4" />
              <span>Always Free</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

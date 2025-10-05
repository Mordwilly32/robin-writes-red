import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Sparkles, Copy, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const TextGenerator = () => {
  const [prompt, setPrompt] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationType, setGenerationType] = useState("creative");

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error("Please enter a prompt");
      return;
    }

    setIsGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-text', {
        body: { prompt, type: generationType }
      });

      if (error) throw error;

      setGeneratedText(data.text);
      toast.success("Text generated successfully!");
    } catch (error: any) {
      console.error('Error generating text:', error);
      toast.error(error.message || "Failed to generate text");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedText);
    toast.success("Copied to clipboard!");
  };

  return (
    <Card className="p-6 bg-gradient-card shadow-soft hover:shadow-hover transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Sparkles className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-card-foreground">Text Generator</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2 text-muted-foreground">
            Generation Type
          </label>
          <Select value={generationType} onValueChange={setGenerationType}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="creative">Creative Writing</SelectItem>
              <SelectItem value="professional">Professional</SelectItem>
              <SelectItem value="casual">Casual</SelectItem>
              <SelectItem value="academic">Academic</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-muted-foreground">
            What would you like to create?
          </label>
          <Textarea
            placeholder="E.g., Write a blog post about sustainable living..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-[120px] resize-none"
          />
        </div>

        <Button 
          onClick={handleGenerate} 
          disabled={isGenerating}
          className="w-full bg-primary hover:bg-primary/90"
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4 mr-2" />
              Generate Text
            </>
          )}
        </Button>

        {generatedText && (
          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-medium text-muted-foreground">
                Generated Text
              </label>
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopy}
                className="gap-2"
              >
                <Copy className="w-4 h-4" />
                Copy
              </Button>
            </div>
            <div className="p-4 bg-muted/50 rounded-lg border border-border">
              <p className="whitespace-pre-wrap text-sm leading-relaxed">{generatedText}</p>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

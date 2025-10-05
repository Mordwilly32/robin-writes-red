import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const TextChecker = () => {
  const [inputText, setInputText] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isChecking, setIsChecking] = useState(false);

  const handleCheck = async () => {
    if (!inputText.trim()) {
      toast.error("Please enter some text to check");
      return;
    }

    setIsChecking(true);
    try {
      const { data, error } = await supabase.functions.invoke('check-text', {
        body: { text: inputText }
      });

      if (error) throw error;

      setFeedback(data.feedback);
      toast.success("Text checked successfully!");
    } catch (error: any) {
      console.error('Error checking text:', error);
      toast.error(error.message || "Failed to check text");
    } finally {
      setIsChecking(false);
    }
  };

  return (
    <Card className="p-6 bg-gradient-card shadow-soft hover:shadow-hover transition-all duration-300">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-secondary/10 rounded-lg">
          <CheckCircle2 className="w-6 h-6 text-secondary" />
        </div>
        <h2 className="text-2xl font-bold text-card-foreground">Text Checker</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2 text-muted-foreground">
            Paste your text here
          </label>
          <Textarea
            placeholder="Enter the text you want to check and improve..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="min-h-[200px] resize-none"
          />
        </div>

        <Button 
          onClick={handleCheck} 
          disabled={isChecking}
          className="w-full bg-secondary hover:bg-secondary/90"
        >
          {isChecking ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Checking...
            </>
          ) : (
            <>
              <CheckCircle2 className="w-4 h-4 mr-2" />
              Check & Improve
            </>
          )}
        </Button>

        {feedback && (
          <div className="mt-6 space-y-3">
            <label className="text-sm font-medium text-muted-foreground">
              AI Feedback & Suggestions
            </label>
            <div className="p-4 bg-muted/50 rounded-lg border border-border">
              <p className="whitespace-pre-wrap text-sm leading-relaxed">{feedback}</p>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

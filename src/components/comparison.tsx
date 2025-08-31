import { ScrollTriggeredText } from "./ui/scroll-triggered-text";
import { CheckCircle2 } from "lucide-react";

const advantages = [
  "Stop wasting weeks on content that might not even work.",
  "Launch campaigns in hours, not months.",
  "Get infinite variations, not just one 'final' version.",
  "Focus on strategy while AI handles the execution."
];

export function Comparison() {
  return (
    <section className="w-full py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollTriggeredText as="h2" per="word" preset="slide" className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary text-glow">
            The Cost of "Organic" Isn't Just Money
          </ScrollTriggeredText>
          <ScrollTriggeredText as="p" per="word" preset="slide" delay={0.3} className="mt-4 text-muted-foreground md:text-xl/relaxed">
            Your most valuable asset is time. While you're manually creating content, your competition is already launching, learning, and iterating with AI. Don't get left behind.
          </ScrollTriggeredText>
        </div>
        <div className="max-w-2xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-lg text-foreground/90">{advantage}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

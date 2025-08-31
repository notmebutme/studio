import { Card, CardContent } from "@/components/ui/card";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";

const aiQuotes = [
  {
    quote: "AI is the new electricity.",
    author: "Andrew Ng",
  },
  {
    quote: "The pace of progress in artificial intelligence is incredibly fast. Unless you have direct exposure to groups like Deepmind, you have no idea how fast—it is growing at a pace close to exponential.",
    author: "Elon Musk",
  },
  {
    quote: "What's happening is that we're moving from a mobile-first to an AI-first world.",
    author: "Sundar Pichai",
  },
];

export function Quotes() {
  return (
    <section className="w-full py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollTriggeredText as="h2" per="word" preset="slide" className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary text-glow">
            Voices of the Future
          </ScrollTriggeredText>
          <ScrollTriggeredText as="p" per="word" preset="slide" delay={0.3} className="mt-4 text-muted-foreground md:text-xl/relaxed">
            Perspectives on the AI revolution from leading minds in technology.
          </ScrollTriggeredText>
        </div>
        <div className="grid gap-8 md:grid-cols-3 mt-12">
          {aiQuotes.map((item, index) => (
            <Card key={index} className="flex flex-col justify-between bg-card/80 border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 glow-shadow">
              <CardContent className="p-6">
                <blockquote className="text-lg italic text-glow">“{item.quote}”</blockquote>
              </CardContent>
              <footer className="p-6 pt-0 text-right">
                <p className="font-semibold text-accent">- {item.author}</p>
              </footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

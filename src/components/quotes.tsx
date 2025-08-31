import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";

const aiQuotes = [
  {
    quote: "AI is the new electricity.",
    author: "Andrew Ng",
  },
  {
    quote: "The pace of progress in artificial intelligence is incredibly fast... it is growing at a pace close to exponential.",
    author: "Elon Musk",
  },
  {
    quote: "Generative AI is the most important technology of our lifetime.",
    author: "Jensen Huang, NVIDIA",
  },
  {
    quote: "AI will be the most transformative technology of our lifetimes. It has the potential to solve some of the world's biggest challenges.",
    author: "Sundar Pichai, Google",
  },
  {
    quote: "AI is a fundamental risk to the existence of human civilization.",
    author: "Elon Musk",
  },
  {
    quote: "AI will probably most likely lead to the end of the world, but in the meantime, there'll be great companies.",
    author: "Sam Altman, OpenAI",
  },
   {
    quote: "We are moving from a mobile-first to an AI-first world.",
    author: "Sundar Pichai, Google",
  },
  {
    quote: "The development of full artificial intelligence could spell the end of the human race.",
    author: "Stephen Hawking",
  },
];

export function Quotes() {
  return (
    <section className="w-full py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto flex max-w-container flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
            <ScrollTriggeredText as="h2" per="word" preset="slide" className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary text-glow">
                Perspectives from Tech Leaders
            </ScrollTriggeredText>
            <ScrollTriggeredText as="p" per="word" preset="slide" delay={0.3} className="mt-4 text-muted-foreground md:text-xl/relaxed">
                Insights on the AI revolution from the minds shaping our future.
            </ScrollTriggeredText>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <div className="flex w-full overflow-hidden p-2 [--gap:1.5rem] [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <div className="flex w-max shrink-0 animate-marquee [gap:var(--gap)]">
                    {[...aiQuotes, ...aiQuotes].map((item, index) => (
                        <Card key={index} className="flex flex-col justify-between bg-card/80 border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 glow-shadow w-[320px] sm:w-[380px] shrink-0">
                            <CardContent className="p-6">
                                <blockquote className="text-lg italic text-glow">“{item.quote}”</blockquote>
                            </CardContent>
                            <footer className="p-6 pt-0 text-right">
                                <p className="font-semibold text-primary/80">- {item.author}</p>
                            </footer>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

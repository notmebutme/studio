import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";

const aiQuotes = [
  {
    quote: "AI is not just a technology; it's a new method of invention. It will be the most powerful engine for progress that humanity has ever created.",
    author: "Jensen Huang, NVIDIA",
  },
  {
    quote: "Every industry will be transformed by AI. Businesses that don't adapt won't just be left behind; they'll become obsolete.",
    author: "Marc Benioff, Salesforce",
  },
  {
    quote: "The B2B world is about to be completely reshaped by generative AI. The ability to create personalized content at scale is the new competitive advantage.",
    author: "Paul Roetzer, Marketing AI Institute",
  },
  {
    quote: "AI will automate the mundane, freeing humans to focus on the strategic, the creative, and the interpersonal. It's the ultimate productivity tool.",
    author: "Satya Nadella, Microsoft",
  },
  {
    quote: "Companies that embrace AI to augment their workforce will see exponential gains in efficiency and innovation.",
    author: "Ginni Rometty, former CEO of IBM",
  },
  {
    quote: "The role of the marketer in an AI world is not to create 10 pieces of content, but to create the one brilliant prompt that allows the AI to generate 10,000.",
    author: "Sam Altman, OpenAI",
  },
   {
    quote: "We are moving from a mobile-first to an AI-first world. The businesses built on this principle will be the giants of tomorrow.",
    author: "Sundar Pichai, Google",
  },
  {
    quote: "Data is the new oil, and AI is the refinery. Without both, you're just sitting on an untapped asset.",
    author: "Peter Sondergaard, Gartner",
  },
];

export function Quotes() {
  return (
    <section className="w-full py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto flex max-w-container flex-col items-center gap-12 md:gap-16 text-center">
        <div className="flex flex-col items-center gap-4 md:gap-8 px-4">
            <ScrollTriggeredText as="h2" per="word" preset="slide" className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary text-glow">
                Perspectives from Industry Leaders
            </ScrollTriggeredText>
            <ScrollTriggeredText as="p" per="word" preset="slide" delay={0.3} className="mt-4 text-muted-foreground md:text-xl/relaxed">
                Insights on the AI revolution from the minds shaping the future of business.
            </ScrollTriggeredText>
        </div>

        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
            <div className="flex w-full overflow-hidden p-2 [--gap:1.5rem] [mask-image:_linear-gradient(to_right,transparent_0,_black_16px,_black_calc(100%-16px),transparent_100%)] sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
                <div className="flex w-max shrink-0 animate-marquee [gap:var(--gap)]">
                    {[...aiQuotes, ...aiQuotes].map((item, index) => (
                        <Card key={index} className="flex w-[80vw] max-w-[340px] shrink-0 flex-col justify-between bg-card/80 border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 glow-shadow md:max-w-[380px]">
                            <CardContent className="p-6">
                                <blockquote className="text-base md:text-lg italic text-glow">“{item.quote}”</blockquote>
                            </CardContent>
                            <footer className="p-6 pt-0 text-right">
                                <p className="font-semibold text-sm md:text-base text-primary/80">- {item.author}</p>
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

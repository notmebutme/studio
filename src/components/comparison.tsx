import { ScrollTriggeredText } from "./ui/scroll-triggered-text";
import { BrainCircuit, Combine, BarChart } from "lucide-react";

const advantages = [
  {
    icon: <BrainCircuit className="h-8 w-8 text-primary" />,
    title: "Expertise",
    description: "We are expert AI prompt engineers. We know how to get commercially viable results that you can't get from a simple text box."
  },
  {
    icon: <Combine className="h-8 w-8 text-primary" />,
    title: "Process",
    description: "We combine multiple AI tools and human oversight for a polished, brand-aligned final product that's ready for the market."
  },
  {
    icon: <BarChart className="h-8 w-8 text-primary" />,
    title: "Strategy",
    description: "We don't just generate content; we generate it based on market data and conversion principles to achieve your business goals."
  }
];

export function Comparison() {
  return (
    <section className="w-full py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollTriggeredText as="h2" per="word" preset="slide" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary text-glow">
            Why Not Just Use ChatGPT or Midjourney Yourself?
          </ScrollTriggeredText>
          <ScrollTriggeredText as="p" per="word" preset="slide" delay={0.3} className="mt-4 text-muted-foreground text-base md:text-xl/relaxed">
            Because getting professional, conversion-focused results requires more than just a prompt. It requires expertise, a refined process, and a strategy. Here's how we're different.
          </ScrollTriggeredText>
        </div>
        <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
                <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg bg-card/50">
                    <div className="mb-4">{advantage.icon}</div>
                    <h3 className="text-lg md:text-xl font-bold mb-2 font-headline">{advantage.title}</h3>
                    <p className="text-sm md:text-base text-foreground/90">{advantage.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}

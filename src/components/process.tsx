import { ScrollTriggeredText } from "./ui/scroll-triggered-text";
import { Calendar, WandSparkles, Upload } from "lucide-react";
import { GlowCard } from "./ui/spotlight-card";

const processSteps = [
  {
    title: "1. Book Appointment",
    description: "Choose a time that works for you. We'll discuss your goals and how Intrix can help.",
    icon: <Calendar />,
  },
  {
    title: "2. We Create Your Content",
    description: "Our team, powered by cutting-edge AI, gets to work crafting your custom content.",
    icon: <WandSparkles />,
  },
  {
    title: "3. Upload & Review Results",
    description: "Receive your content instantly. Review, request revisions, and deploy with ease.",
    icon: <Upload />,
  },
];

export function Process() {
  return (
    <section className="w-full py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollTriggeredText as="h2" per="word" preset="slide" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary text-glow">
            Our 3-Step Flow
          </ScrollTriggeredText>
          <ScrollTriggeredText as="p" per="word" preset="slide" delay={0.3} className="mt-4 text-muted-foreground md:text-xl/relaxed">
            From booking to delivery, our process is designed for speed and efficiency.
          </ScrollTriggeredText>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
                <GlowCard key={index} glowColor="blue" className="p-6 flex flex-col items-center text-center">
                    <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-4 mb-4 text-primary">
                        {step.icon}
                    </div>
                    <h3 className="text-lg font-semibold font-headline text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                </GlowCard>
            ))}
        </div>
      </div>
    </section>
  );
}

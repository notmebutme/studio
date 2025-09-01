import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, WandSparkles, Upload } from "lucide-react";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";
import { GlowCard } from "./ui/spotlight-card";

const processSteps = [
  {
    icon: <Calendar className="h-8 w-8 text-primary icon-glow" />,
    title: "1. Book Appointment",
    description: "Choose a time that works for you. We'll discuss your goals and how Intrix can help.",
  },
  {
    icon: <WandSparkles className="h-8 w-8 text-primary icon-glow" />,
    title: "2. We Create Your Content",
    description: "Our team, powered by cutting-edge AI, gets to work crafting your custom content.",
  },
  {
    icon: <Upload className="h-8 w-8 text-primary icon-glow" />,
    title: "3. Upload & Review Results",
    description: "Receive your content instantly. Review, request revisions, and deploy with ease.",
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
        <div className="grid gap-8 md:grid-cols-3 mt-12">
          {processSteps.map((step, index) => (
            <GlowCard key={index} className="p-6 flex flex-col items-center justify-center text-center" customSize={true}>
                <div className="mb-4">
                    {step.icon}
                </div>
                <h3 className="text-2xl font-headline mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Card3DList } from "@/components/ui/animated-3d-card";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";
import { Calendar, WandSparkles, Upload } from "lucide-react";

const processSteps = [
  {
    id: "step-1",
    title: "1. Book Appointment",
    description: "Choose a time that works for you. We'll discuss your goals and how Intrix can help.",
    icon: <Calendar />,
    theme: "primary" as const,
  },
  {
    id: "step-2",
    title: "2. We Create Your Content",
    description: "Our team, powered by cutting-edge AI, gets to work crafting your custom content.",
    icon: <WandSparkles />,
    theme: "secondary" as const,
  },
  {
    id: "step-3",
    title: "3. Upload & Review Results",
    description: "Receive your content instantly. Review, request revisions, and deploy with ease.",
    icon: <Upload />,
    theme: "accent" as const,
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
        <div className="mt-12">
            <Card3DList cards={processSteps} columns={3} size="md" variant="premium" />
        </div>
      </div>
    </section>
  );
}

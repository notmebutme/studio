import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, WandSparkles, Upload } from "lucide-react";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";

const processSteps = [
  {
    icon: <Calendar className="h-6 w-6 md:h-8 md:w-8 text-primary icon-glow" />,
    title: "1. Book Appointment",
    description: "Choose a time that works for you. We'll discuss your goals and how Intrix can help.",
  },
  {
    icon: <WandSparkles className="h-6 w-6 md:h-8 md:w-8 text-primary icon-glow" />,
    title: "2. We Create Your Content",
    description: "Our team, powered by cutting-edge AI, gets to work crafting your custom content.",
  },
  {
    icon: <Upload className="h-6 w-6 md:h-8 md:w-8 text-primary icon-glow" />,
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
        <div className="grid gap-4 md:gap-8 grid-cols-3 mt-12">
          {processSteps.map((step, index) => (
            <Card key={index} className="text-center bg-card/80 border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 glow-shadow p-4 md:p-6">
              <CardHeader className="flex flex-col items-center gap-2 md:gap-4">
                {step.icon}
                <CardTitle className="font-headline text-base md:text-2xl">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="hidden md:block">
                <p className="text-muted-foreground text-sm md:text-base">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

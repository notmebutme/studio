import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";

export function Founder() {
  return (
    <section className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <ScrollTriggeredText as="h2" per="word" preset="slide" className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary text-glow">
                From the Founder's Desk
            </ScrollTriggeredText>
        </div>
        <Card className="max-w-4xl mx-auto bg-transparent border-none shadow-none">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <div className="relative w-full max-w-sm mx-auto">
                <div className="absolute inset-0 bg-secondary/30 rounded-3xl transform -rotate-12" />
                <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-12" />
                <div className="absolute inset-0 bg-accent/20 rounded-3xl transform" />
                <div className="relative w-full h-auto bg-card rounded-3xl shadow-lg overflow-hidden">
                  <Image
                    src="/founder.jpg"
                    alt="Veer Shah, Founder of Intrix AI"
                    width={400}
                    height={400}
                    className="relative w-full h-full object-cover"
                    data-ai-hint="founder portrait"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-3xl font-bold font-headline text-foreground">Veer Shah</h3>
                  <p className="text-muted-foreground text-lg">Founder & CEO, Intrix AI</p>
                </div>
                <blockquote className="text-xl italic text-foreground/90 border-l-4 border-primary pl-6">
                  “We're not just building tools; we're building the next generation of creators. We're here to usher in an era where your imagination is the only bottleneck.”
                </blockquote>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

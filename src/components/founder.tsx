import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";

export function Founder() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <ScrollTriggeredText as="h2" per="word" preset="slide" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary text-glow">
                From the Founder's Desk
            </ScrollTriggeredText>
        </div>
        <Card className="max-w-4xl mx-auto bg-transparent border-none shadow-none">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="w-full max-w-sm mx-auto">
                <div className="relative w-full h-auto bg-card rounded-2xl shadow-lg overflow-hidden aspect-square">
                  <Image
                    src="/founder.jpg"
                    alt="Veer Shah, Founder of Intrix AI"
                    fill
                    className="object-cover"
                    data-ai-hint="founder portrait"
                  />
                </div>
              </div>
              <div className="space-y-4 text-center md:text-left">
                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold font-headline text-foreground">Veer Shah</h3>
                  <p className="text-muted-foreground text-base sm:text-lg">Founder & CEO, Intrix AI</p>
                </div>
                <blockquote className="text-base sm:text-lg italic text-foreground/90 border-l-4 border-primary pl-4 md:pl-6">
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

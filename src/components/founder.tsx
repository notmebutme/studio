import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";

export function Founder() {
  return (
    <section className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <ScrollTriggeredText as="h2" per="word" preset="slide" className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary text-glow">
            From the Founder
          </ScrollTriggeredText>
        </div>
        <Card className="max-w-4xl mx-auto bg-card/80 border-2 border-primary/10 glow-shadow">
            <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-1">
                        <Image 
                            src="/founder.jpg" 
                            alt="Veer Shah, Founder of Intrix AI"
                            width={400}
                            height={400}
                            className="rounded-full aspect-square object-cover border-4 border-primary/20 shadow-lg"
                            data-ai-hint="founder portrait"
                        />
                    </div>
                    <div className="md:col-span-2 space-y-4">
                        <blockquote className="text-lg italic text-foreground/90">
                        “We're not just building tools; we're building the next generation of creators. For too long, brilliant ideas have been trapped by the limitations of budget and time. We're breaking those barriers. Intrix AI is more than software—it's a partner that amplifies your team's creative potential, turning 'what if' into 'what's next' at the speed of thought. We're here to usher in an era where your imagination is the only bottleneck.”
                        </blockquote>
                        <div>
                            <p className="font-bold text-lg text-primary">Veer Shah</p>
                            <p className="text-muted-foreground">Founder, Intrix AI</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0 wavy-bg" />
      <div className="container relative px-4 md:px-6 z-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl font-headline text-foreground">
            What if AI could create your content <span className="text-primary text-glow">faster, smarter,</span> and at a <span className="text-primary text-glow">fraction of the cost?</span>
          </h1>

          <ScrollTriggeredText as="p" per="word" preset="slide" delay={0.5} className="mt-6 text-lg text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Intrix AI helps you scale ads, content, and product visuals with cutting-edge AI tools.
          </ScrollTriggeredText>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="glow-shadow font-bold text-lg py-7 px-8 bg-primary hover:bg-primary/90">
              <Link href="#booking">Book an Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="glow-shadow font-bold text-lg py-7 px-8 border-2 border-primary/50">
              <Link href="#showcase">See a Demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

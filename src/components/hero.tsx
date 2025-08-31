import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TextEffect } from "./ui/text-effect";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-start text-left overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-background z-10" />
      <div className="container relative px-4 md:px-6 z-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6 border border-primary/20 glow-shadow">
            <Sparkles className="h-4 w-4 mr-2" />
            <span>New Generative AI Engine</span>
          </div>

          <h1 className="text-5xl font-bold tracking-tighter sm:text-7xl md:text-8xl font-headline text-foreground">
            <span className="text-primary text-glow">Beautiful</span>
            <br />
            Shader
            <br />
            <span className="font-light text-foreground/80">Experiences</span>
          </h1>

          <ScrollTriggeredText as="p" per="word" preset="slide" delay={0.5} className="mt-6 text-lg text-muted-foreground md:text-xl max-w-2xl">
            Create stunning visual experiences with our advanced shader technology. Interactive lighting, smooth animations, and beautiful effects that respond to your every move.
          </ScrollTriggeredText>

          <div className="mt-8 flex flex-col sm:flex-row justify-start gap-4">
            <Button asChild size="lg" variant="outline" className="glow-shadow font-bold text-lg py-7 px-8 border-2 border-primary/50">
              <Link href="#showcase">View Pricing</Link>
            </Button>
            <Button asChild size="lg" className="glow-shadow font-bold text-lg py-7 px-8 bg-gradient-to-r from-primary to-accent">
              <Link href="#booking">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TextEffect } from "./ui/text-effect";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";

export function Hero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background"></div>
        <div className="container relative px-4 md:px-6 z-10">
            <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl font-headline text-glow bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
                <TextEffect per="char" preset="slide">
                    What if AI could create your content faster, smarter, and at a fraction of the cost?
                </TextEffect>
            </h1>
            <ScrollTriggeredText as="p" per="word" preset="slide" delay={0.5} className="mt-6 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
                Intrix AI helps you scale ads, content, and product visuals with cutting-edge AI tools.
            </ScrollTriggeredText>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="glow-shadow font-bold text-lg py-7 px-8">
                <Link href="#booking">Book an Appointment</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="glow-shadow font-bold text-lg py-7 px-8 border-2 border-primary/50">
                <Link href="#showcase">See a Demo</Link>
                </Button>
            </div>
            </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
}

const GridPattern = () => (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full fill-primary/10 stroke-primary/20 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]"
    >
      <defs>
        <pattern
          id="grid-pattern"
          width="72"
          height="72"
          patternUnits="userSpaceOnUse"
          x="50%"
          y="50%"
          patternTransform="translate(-36 -36)"
        >
          <path d="M0 72V0h72" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" pattern="url(#grid-pattern)" />
    </svg>
)

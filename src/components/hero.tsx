import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0 wavy-bg" />
      <div className="container relative px-4 md:px-6 z-20">
        <div className="max-w-2xl text-left">
          <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl font-headline text-foreground">
            What if AI could create your content?
          </h1>

          <p className="mt-6 text-3xl font-thin italic text-muted-foreground md:text-4xl">
            Faster. Smarter. Cheaper.
          </p>
          
          <p className="mt-4 text-lg text-foreground/80">
            Generate ads, blogs, and campaigns in minutes—not days.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-start gap-4">
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

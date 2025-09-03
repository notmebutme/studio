
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollTriggeredText } from "@/components/ui/scroll-triggered-text";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 bg-secondary/20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <ScrollTriggeredText as="h1" per="word" preset="slide" className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline text-primary text-glow">
              About Us
            </ScrollTriggeredText>
            <ScrollTriggeredText as="p" per="word" preset="slide" delay={0.3} className="mt-4 max-w-3xl mx-auto text-muted-foreground text-base sm:text-lg md:text-xl/relaxed">
              The minds and mission behind the AI revolution.
            </ScrollTriggeredText>
          </div>
        </section>
        
        <section className="w-full py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary text-glow">Our Story</h2>
                <p className="text-muted-foreground text-base md:text-lg/relaxed">
                  Intrix AI wasn't born in a boardroom; it was born from real-world marketing pain points. Our founder, Veer Shah, spent years in the trenches of digital marketing, working with businesses in Surat and beyond. He saw firsthand the immense effort, time, and cost that went into creating content, ads, and product visuals.
                </p>
                <p className="text-muted-foreground text-base md:text-lg/relaxed">
                  The traditional process was slow, expensive, and often a gamble. A single photoshoot could drain budgets, and a campaign's success was never guaranteed. Veer knew there had to be a better way.
                </p>
                <p className="text-muted-foreground text-base md:text-lg/relaxed">
                  He became fascinated with the rapid advancements in generative AI and saw its potential to revolutionize the creative industry. He envisioned a future where businesses of all sizes could access world-class creative power, not in weeks, but in minutes. That vision became Intrix AI.
                </p>
              </div>
              <div className="relative w-full h-80 rounded-2xl shadow-lg overflow-hidden glow-shadow">
                 <Image
                    src="https://picsum.photos/seed/journey/800/600"
                    alt="Abstract image representing the journey of Intrix AI"
                    fill
                    className="object-cover"
                    data-ai-hint="innovation journey"
                  />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

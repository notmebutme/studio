
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Founder } from "@/components/founder";
import { ScrollTriggeredText } from "@/components/ui/scroll-triggered-text";

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
        <Founder />
      </main>
      <Footer />
    </div>
  );
}


import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ScrollTriggeredText } from "@/components/ui/scroll-triggered-text";

export default function OurWorkPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto py-12 md:py-24">
        <ScrollTriggeredText as="h1" per="word" preset="slide" className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline text-center text-primary text-glow">
          Our Work
        </ScrollTriggeredText>
        <ScrollTriggeredText as="p" per="word" preset="slide" delay={0.3} className="mt-4 text-center text-muted-foreground md:text-xl/relaxed">
          Here's a showcase of our projects. Coming soon!
        </ScrollTriggeredText>
      </main>
      <Footer />
    </div>
  );
}

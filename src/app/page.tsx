import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { Comparison } from "@/components/comparison";
import { Founder } from "@/components/founder";
import { Quotes } from "@/components/quotes";
import { Booking } from "@/components/booking";
import { Footer } from "@/components/footer";
import { FadeIn } from "@/components/ui/fade-in";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <FadeIn>
          <Hero />
        </FadeIn>
        <FadeIn>
          <Services />
        </FadeIn>
        <FadeIn>
          <Process />
        </FadeIn>
        <FadeIn>
          <Comparison />
        </FadeIn>
        <FadeIn>
          <Founder />
        </FadeIn>
        <FadeIn>
          <Quotes />
        </FadeIn>
        <FadeIn>
          <Booking />
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}

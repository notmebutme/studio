import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Showcase } from "@/components/showcase";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { Comparison } from "@/components/comparison";
import { Founder } from "@/components/founder";
import { Quotes } from "@/components/quotes";
import { Booking } from "@/components/booking";
import { Footer } from "@/components/footer";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <Process />
        <Services />
        <Testimonials />
        <Comparison />
        <Founder />
        <Quotes />
        <Showcase />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { ServiceShowcase } from "@/components/service-showcase";
import { Comparison } from "@/components/comparison";
import { Founder } from "@/components/founder";
import { Quotes } from "@/components/quotes";
import { Booking } from "@/components/booking";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <ServiceShowcase />
        <Process />
        <Comparison />
        <Founder />
        <Quotes />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

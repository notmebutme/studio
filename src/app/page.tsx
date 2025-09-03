
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { ServiceShowcase } from "@/components/service-showcase";
import { Comparison } from "@/components/comparison";
import { Founder } from "@/components/founder";
import { Quotes } from "@/components/quotes";
import { Booking } from "@/components/booking";
import { Footer } from "@/components/footer";
import { OtherServices } from "@/components/other-services";
import { Audience } from "@/components/audience";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Hero />
        <div id="services" className="scroll-mt-24">
          <ServiceShowcase />
        </div>
        <OtherServices />
        <Process />
        <Audience />
        <Comparison />
        <Founder />
        <Quotes />
        <div id="booking" className="scroll-mt-24">
          <Booking />
        </div>
      </main>      
      <Footer />
    </div>
  );
}

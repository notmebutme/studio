
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Pricing } from "@/components/blocks/pricing";
import { pricingPlans } from "@/lib/services-data";

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Pricing plans={pricingPlans} />
      </main>
      <Footer />
    </div>
  );
}

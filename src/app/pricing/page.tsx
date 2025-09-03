
"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { servicesData } from "@/lib/services-data";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ScrollTriggeredText } from "@/components/ui/scroll-triggered-text";
import type { PricingPlan } from "@/lib/services-data";
import { PricingCard } from "@/components/ui/animated-glassy-pricing";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  const servicesWithPricing = servicesData.filter(
    service => service.pricingPlans && Array.isArray(service.pricingPlans) && service.pricingPlans.length > 0
  );

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 bg-secondary/20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <ScrollTriggeredText as="h1" per="word" preset="slide" className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline text-primary text-glow">
              Our Pricing
            </ScrollTriggeredText>
            <ScrollTriggeredText as="p" per="word" preset="slide" delay={0.3} className="mt-4 max-w-3xl mx-auto text-muted-foreground text-base sm:text-lg md:text-xl/relaxed">
              Simple, transparent pricing for every service. Find the plan that fits your needs.
            </ScrollTriggeredText>
          </div>
        </section>

        <div className="flex justify-center my-10 items-center gap-4">
          <Label htmlFor="billing-switch">Monthly</Label>
          <Switch
            id="billing-switch"
            checked={isYearly}
            onCheckedChange={setIsYearly}
            aria-label="Toggle between monthly and yearly billing"
          />
          <Label htmlFor="billing-switch" className="flex items-center">
            Yearly <span className="ml-2 text-primary font-semibold">(Save 20%)</span>
          </Label>
        </div>

        <div className="container mx-auto px-4 md:px-6 py-12 space-y-16">
          {servicesWithPricing.map(service => (
            <div key={service.slug}>
              <h2 className="text-3xl font-bold text-center mb-2 font-headline text-primary/90">{service.title} Pricing</h2>
              <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">{service.detailedDescription}</p>
              <div className="flex flex-wrap gap-8 justify-center items-center w-full">
                {(service.pricingPlans as PricingPlan[]).map((plan) => {
                  const monthlyPrice = plan.price;
                  const yearlyPrice = plan.yearlyPrice || (Number.isNaN(parseFloat(monthlyPrice)) ? monthlyPrice : (parseFloat(monthlyPrice) * 12 * 0.8).toFixed(0));

                  const displayPlan = {
                    ...plan,
                    planName: plan.name || (plan as any).planName,
                    price: isYearly ? yearlyPrice : monthlyPrice,
                    buttonVariant: plan.isPopular ? 'primary' : 'secondary',
                  };

                  return <PricingCard key={displayPlan.planName} {...displayPlan} />;
                })}
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

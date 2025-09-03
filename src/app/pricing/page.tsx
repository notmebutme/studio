
"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { pricingPlans, Service, servicesData } from "@/lib/services-data";
import { ModernPricingPage } from "@/components/ui/animated-glassy-pricing";
import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { ScrollTriggeredText } from "@/components/ui/scroll-triggered-text";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);

  const allServicePlans = servicesData
    .filter(service => service.pricingPlans && service.pricingPlans.length > 0)
    .flatMap(service => 
        (service.pricingPlans || []).map(plan => ({
            ...plan,
            planName: `${plan.name || (plan as any).planName} (${service.title})`,
            price: isYearly ? (plan as any).yearlyPrice || plan.price : plan.price,
        }))
    );

  const plansForDisplay = allServicePlans.map(plan => ({
    ...plan,
    buttonVariant: plan.isPopular ? 'primary' : 'secondary',
  }));
  
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
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

       <ModernPricingPage
            title={<>Find the <span className="text-cyan-400">Perfect Plan</span> for Your Business</>}
            subtitle="Start for free, then grow with us. Flexible plans for projects of all sizes."
            plans={plansForDisplay}
            showAnimatedBackground={true}
        />
      <Footer />
    </div>
  );
}

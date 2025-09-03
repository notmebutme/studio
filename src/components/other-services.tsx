
"use client";

import { servicesData } from "@/lib/services-data";
import { BentoGrid } from "@/components/ui/bento-grid";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";

export function OtherServices() {
  const otherServices = servicesData.slice(4).map(service => ({
    title: service.title,
    description: service.description,
    icon: service.icon,
    href: `/services/${service.slug}`,
    cta: 'Learn More',
  }));

  return (
    <section className="w-full py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <ScrollTriggeredText as="h2" per="word" preset="slide" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary text-glow">
                We Also Serve
            </ScrollTriggeredText>
        </div>
        <BentoGrid items={otherServices} />
      </div>
    </section>
  );
}

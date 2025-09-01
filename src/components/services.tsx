
"use client"

import Link from "next/link";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";
import { servicesData, Service } from "@/lib/services-data";
import React from "react";
import { BentoGrid } from "./ui/bento-grid";
import type { BentoItem } from "./ui/bento-grid";

export function Services() {

  const serviceItems: BentoItem[] = servicesData.map(service => ({
    title: service.title,
    description: service.description,
    icon: service.icon,
    cta: "Learn More",
    href: `/services/${service.slug}`,
    colSpan: 1
  }));


  return (
    <section>
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollTriggeredText as="h2" per="word" preset="slide" className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary text-glow">
            Our Services
          </ScrollTriggeredText>
          <ScrollTriggeredText as="p" per="word" preset="slide" delay={0.3} className="mt-4 text-muted-foreground md:text-xl/relaxed">
            Cutting-edge AI solutions tailored to supercharge your brand's content strategy. Click a service to learn more.
          </ScrollTriggeredText>
        </div>
        <div className="mt-12">
            <BentoGrid items={serviceItems} />
        </div>
      </div>
    </section>
  );
}

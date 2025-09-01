
"use client"

import Link from "next/link";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";
import { servicesData, Service } from "@/lib/services-data";
import React from "react";
import { Card } from "@/components/ui/card";

export function Services() {
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
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {servicesData.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
        </ul>
      </div>
    </section>
  );
}

function ServiceCard(service: Service) {
    return (
        <li className="list-none h-full">
            <Link href={`/services/${service.slug}`} className="group block h-full">
                 <Card className="h-full p-6 flex flex-col items-start text-left bg-card/80 border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 glow-shadow">
                    <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-3 mb-4 text-primary">
                        {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold font-headline text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                </Card>
            </Link>
        </li>
    )
}

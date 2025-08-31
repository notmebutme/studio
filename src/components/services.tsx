
"use client"

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";
import { servicesData, Service } from "@/lib/services-data";
import { ChevronDown } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

export function Services() {
  const [showAll, setShowAll] = useState(false);
  const initialServices = servicesData.slice(0, 4);
  const additionalServices = servicesData.slice(4);

  return (
    <section className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollTriggeredText as="h2" per="word" preset="slide" className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary text-glow">
            Our Services
          </ScrollTriggeredText>
          <ScrollTriggeredText as="p" per="word" preset="slide" delay={0.3} className="mt-4 text-muted-foreground md:text-xl/relaxed">
            Cutting-edge AI solutions tailored to supercharge your brand's content strategy. Click a service to learn more.
          </ScrollTriggeredText>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-2 gap-4 mt-12">
          {initialServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
          {showAll && additionalServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </ul>
        {!showAll && servicesData.length > 4 && (
          <div className="mt-12 text-center">
            <Button
              onClick={() => setShowAll(true)}
              variant="outline"
              size="lg"
              className="glow-shadow font-bold border-2 border-primary/50"
            >
              View More Services <ChevronDown className="ml-2 h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}

function ServiceCard(service: Service) {
    return (
        <li className="list-none h-full">
            <Link href={`/services/${service.slug}`} className="group block h-full">
                <div className="relative h-full rounded-[1rem] border-[0.75px] border-border p-2">
                    <GlowingEffect
                        glow={true}
                        disabled={false}
                        proximity={64}
                        inactiveZone={0.01}
                        borderWidth={3}
                    />
                    <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-lg border-[0.75px] bg-background p-4 md:p-6 shadow-sm">
                        <div className="relative flex flex-1 flex-col justify-between gap-3">
                            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2 md:p-3">
                                {service.icon}
                            </div>
                            <div className="space-y-2">
                                <h3 className="text-sm md:text-xl font-semibold font-sans text-foreground">
                                    {service.title}
                                </h3>
                                <p className="text-xs md:text-sm text-muted-foreground hidden md:block">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    )
}

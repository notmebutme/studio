
"use client"

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";
import { servicesData, Service } from "@/lib/services-data";
import { ChevronDown } from "lucide-react";
import { CursorCard } from "./ui/cursor-cards";

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
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
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
        <li className="list-none">
            <Link href={`/services/${service.slug}`} className="group block h-full">
                <CursorCard className="h-full rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:border-primary/30 glow-shadow">
                    <div className="flex flex-col items-center text-center gap-4">
                        <div className="bg-primary/10 text-primary p-4 rounded-full">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold font-headline text-primary">{service.title}</h3>
                        <p className="text-muted-foreground">{service.description}</p>
                    </div>
                </CursorCard>
            </Link>
        </li>
    )
}

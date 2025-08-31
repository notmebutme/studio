
"use client"

import Link from "next/link";
import { useState } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";
import { servicesData, Service } from "@/lib/services-data";
import { ChevronDown } from "lucide-react";

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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {initialServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
          {showAll && additionalServices.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        {!showAll && (
          <div className="mt-12 text-center">
            <Button
              onClick={() => setShowAll(true)}
              variant="outline"
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
      <Link href={`/services/${service.slug}`} className="group">
        <Card className="h-full flex flex-col text-center bg-card/80 border-2 border-primary/10 group-hover:border-primary/30 transition-all duration-300 glow-shadow p-6 justify-center items-center">
            <CardHeader className="flex flex-col items-center gap-4">
              <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <CardTitle className="font-headline text-2xl group-hover:text-primary transition-colors duration-300">{service.title}</CardTitle>
            </CardHeader>
        </Card>
      </Link>
    )
}

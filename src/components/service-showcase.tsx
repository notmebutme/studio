
"use client";

import { servicesData } from "@/lib/services-data";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ServiceShowcase() {
  const showcaseServices = servicesData.slice(0, 4);

  return (
    <section id="services" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollTriggeredText as="h2" per="word" preset="slide" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary text-glow">
            Our Services
          </ScrollTriggeredText>
          <ScrollTriggeredText as="p" per="word" preset="slide" delay={0.3} className="mt-4 text-muted-foreground md:text-xl/relaxed">
            Cutting-edge AI solutions tailored to supercharge your brand's content strategy. See what we can create for you.
          </ScrollTriggeredText>
        </div>

        <div className="mt-12 md:mt-20 space-y-16 md:space-y-24">
          {showcaseServices.map((service, index) => (
            <div key={service.slug} className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className={`space-y-4 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <h3 className="text-2xl md:text-3xl font-bold font-headline text-primary text-glow">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
                <Button asChild variant="outline" className="group">
                  <Link href={`/services/${service.slug}`}>
                    Learn More <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
              <div className={`aspect-video rounded-xl overflow-hidden glow-shadow ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <video
                    src={service.demo.videos[0]}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

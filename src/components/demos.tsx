
"use client"
import { useState } from "react";
import { servicesData } from "@/lib/services-data";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";
import { Card, CardContent } from "@/components/ui/card";
import { InteractiveMenu, type InteractiveMenuItem } from "./ui/modern-mobile-menu";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

export function Demos() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = servicesData[activeIndex];

  const menuItems: InteractiveMenuItem[] = servicesData.map(service => ({
    label: service.title,
    icon: service.icon 
  }));

  const handleMenuItemChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollTriggeredText as="h2" per="word" preset="slide" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary text-glow">
            See Our Work
          </ScrollTriggeredText>
          <ScrollTriggeredText as="p" per="word" preset="slide" delay={0.3} className="mt-4 text-muted-foreground md:text-xl/relaxed">
            Explore examples of how Intrix AI transforms ideas into stunning, effective assets. Select a service to see it in action.
          </ScrollTriggeredText>
        </div>
        <div className="mt-12 max-w-5xl mx-auto flex flex-col items-center">
           <InteractiveMenu items={menuItems} activeIndex={activeIndex} onActiveChange={handleMenuItemChange} />
           <Card className="border-2 border-primary/10 glow-shadow mt-8 w-full">
             <CardContent className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold mb-4 text-center font-headline">{activeService.demo.title}</h3>
                <Carousel className="w-full max-w-3xl mx-auto">
                  <CarouselContent>
                    {(activeService.demo.videos || []).map((videoSrc, index) => (
                      <CarouselItem key={index}>
                         <div className="aspect-video">
                            <video
                                src={videoSrc}
                                className="w-full h-full object-cover rounded-lg"
                                controls
                                loop
                                autoPlay
                                muted
                            />
                         </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
             </CardContent>
           </Card>
        </div>
      </div>
    </section>
  );
}

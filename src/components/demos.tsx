
"use client"
import { useState, useEffect } from "react";
import { servicesData } from "@/lib/services-data";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";
import { Card, CardContent } from "@/components/ui/card";
import { InteractiveMenu, type InteractiveMenuItem } from "./ui/modern-mobile-menu";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import React from "react";

export function Demos() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const activeService = servicesData[activeIndex];
  const videoRefs = React.useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
    });

    if (api) {
        api.scrollTo(0, true);
        setCurrent(0);
    }
  }, [activeIndex, api]);


  useEffect(() => {
     videoRefs.current.forEach((video, index) => {
        if(video) {
            if (index === current) {
                video.currentTime = 0; // Restart video
                video.play();
            } else {
                video.pause();
            }
        }
     });
  }, [current, api]);


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
                <Carousel setApi={setApi} opts={{ loop: true }} className="w-full max-w-3xl mx-auto">
                  <CarouselContent>
                    {(activeService.demo.videos || []).map((videoSrc, index) => (
                      <CarouselItem key={`${activeIndex}-${index}`}>
                         <div className="aspect-video">
                            <video
                                ref={el => videoRefs.current[index] = el}
                                src={videoSrc}
                                className="w-full h-full object-cover rounded-lg"
                                controls
                                loop
                                muted
                                playsInline
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

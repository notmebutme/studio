
"use client";

import { servicesData } from "@/lib/services-data";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRight, Play, Pause } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { GlowCard } from "./ui/spotlight-card";

export function ServiceShowcase() {
  const showcaseServices = servicesData.slice(0, 4);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [isPlaying, setIsPlaying] = useState<boolean[]>(showcaseServices.map(() => true));

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (isPlaying[index]) {
          video.play().catch(error => console.log("Autoplay prevented:", error));
        } else {
          video.pause();
        }
      }
    });
  }, [isPlaying]);

  const togglePlay = (index: number) => {
    setIsPlaying(prev => {
        const newIsPlaying = [...prev];
        newIsPlaying[index] = !newIsPlaying[index];
        return newIsPlaying;
    });
  };

  return (
    <section id="services" className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollTriggeredText as="h2" per="word" preset="slide" className="text-3xl sm:text-4xl md:text-5xl font-headline text-primary text-glow">
            Our Services
          </ScrollTriggeredText>
          <ScrollTriggeredText as="p" per="word" preset="slide" delay={0.3} className="mt-4 text-muted-foreground text-sm sm:text-base md:text-xl/relaxed">
            Cutting-edge AI solutions tailored to supercharge your brand's content strategy. See what we can create for you.
          </ScrollTriggeredText>
        </div>

        <div className="mt-12 md:mt-20 space-y-12 md:space-y-24">
          {showcaseServices.map((service, index) => (
            <div key={service.slug} className="grid grid-cols-2 gap-4 md:gap-12 items-center">
              <GlowCard customSize={true} className={`p-4 md:p-6 rounded-2xl ${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                <div className="space-y-2">
                  <h3 className="text-base md:text-3xl font-bold font-headline text-primary text-glow">{service.title}</h3>
                  <p className="text-muted-foreground text-[10px] leading-tight md:text-base">{service.description}</p>
                  <Button asChild variant="outline" size="sm" className="group text-xs h-7 mt-2">
                    <Link href={`/services/${service.slug}`}>
                      Learn More <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </GlowCard>
              <div className={`relative group aspect-video rounded-xl overflow-hidden ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                  <video
                      ref={el => videoRefs.current[index] = el}
                      src={service.demo.videos[0]}
                      className="w-full h-full object-cover"
                      loop
                      muted
                      playsInline
                      autoPlay
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-10 w-10 md:h-14 md:w-14 rounded-full bg-white/20 hover:bg-white/30 text-white"
                        onClick={() => togglePlay(index)}
                    >
                        {isPlaying[index] ? <Pause className="h-6 w-6 md:h-8 md:w-8" /> : <Play className="h-6 w-6 md:h-8 md:w-8" />}
                    </Button>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

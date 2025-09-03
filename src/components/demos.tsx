
import Image from "next/image";
import { servicesData } from "@/lib/services-data";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Demos() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollTriggeredText as="h2" per="word" preset="slide" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary text-glow">
            See the Difference
          </ScrollTriggeredText>
          <ScrollTriggeredText as="p" per="word" preset="slide" delay={0.3} className="mt-4 text-muted-foreground md:text-xl/relaxed">
            Explore interactive demos to see how Intrix AI transforms traditional content into stunning, effective assets.
          </ScrollTriggeredText>
        </div>
        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {servicesData.map((service, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <Card className="border-2 border-primary/10 glow-shadow">
                      <CardContent className="p-4 md:p-6">
                        <h3 className="text-lg md:text-xl font-semibold mb-4 text-center font-headline">{service.demo.title}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                          <div className="space-y-2">
                            <Badge variant="secondary" className="w-fit">Traditional</Badge>
                            <Image
                              src={service.demo.traditionalImg}
                              alt={`Traditional example for ${service.title}`}
                              width={400}
                              height={300}
                              className="rounded-lg aspect-[4/3] object-cover"
                              data-ai-hint={service.demo.traditionalHint}
                            />
                          </div>
                          <div className="space-y-2">
                            <Badge variant="default" className="w-fit">Intrix AI</Badge>
                             <Image
                              src={service.demo.aiImg}
                              alt={`AI example for ${service.title}`}
                              width={400}
                              height={300}
                              className="rounded-lg aspect-[4/3] object-cover"
                              data-ai-hint={service.demo.aiHint}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

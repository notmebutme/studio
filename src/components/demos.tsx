
import Image from "next/image";
import { servicesData } from "@/lib/services-data";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function Demos() {
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
        <div className="mt-12 max-w-5xl mx-auto">
           <Tabs defaultValue={servicesData[0].slug} className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-6 h-auto">
                {servicesData.map((service) => (
                    <TabsTrigger key={service.slug} value={service.slug} className="text-xs md:text-sm">{service.title}</TabsTrigger>
                ))}
            </TabsList>
            {servicesData.map((service) => (
                <TabsContent key={service.slug} value={service.slug}>
                    <Card className="border-2 border-primary/10 glow-shadow mt-4">
                      <CardContent className="p-4 md:p-6">
                        <h3 className="text-lg md:text-xl font-semibold mb-4 text-center font-headline">{service.demo.title}</h3>
                        <div className="flex justify-center">
                            <Image
                              src={service.demo.aiImg}
                              alt={`AI example for ${service.title}`}
                              width={800}
                              height={600}
                              className="rounded-lg aspect-video object-cover"
                              data-ai-hint={service.demo.aiHint}
                            />
                        </div>
                      </CardContent>
                    </Card>
                </TabsContent>
            ))}
           </Tabs>
        </div>
      </div>
    </section>
  );
}

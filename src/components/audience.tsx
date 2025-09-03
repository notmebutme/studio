import { ScrollTriggeredText } from "./ui/scroll-triggered-text";
import { Store, Briefcase, Monitor } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const targetAudiences = [
  {
    icon: <Store className="h-8 w-8 text-primary" />,
    title: "E-commerce Brands",
    description: "Scale your product visuals and ad creatives without expensive photoshoots.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "Marketing Agencies",
    description: "Fulfill client content needs instantly and increase your agency's profit margins.",
  },
  {
    icon: <Monitor className="h-8 w-8 text-primary" />,
    title: "SaaS Companies",
    description: "Generate high-quality blog content and video ads to dominate your niche.",
  }
];

export function Audience() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollTriggeredText as="h2" per="word" preset="slide" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary text-glow">
            Built for the Ambitious.
          </ScrollTriggeredText>
          <ScrollTriggeredText as="p" per="word" preset="slide" delay={0.3} className="mt-4 text-muted-foreground md:text-xl/relaxed">
            We're the secret weapon for forward-thinking companies that demand speed, scale, and results.
          </ScrollTriggeredText>
        </div>
        <div className="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {targetAudiences.map((audience, index) => (
              <Card key={index} className="text-center bg-card/80 border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 glow-shadow p-4 md:p-6 flex flex-col items-center justify-start rounded-2xl">
                <CardHeader className="p-2">
                  <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-4 mb-4">
                    {audience.icon}
                  </div>
                  <CardTitle className="text-xl font-bold font-headline">{audience.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-2">
                  <p className="text-muted-foreground">{audience.description}</p>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
}

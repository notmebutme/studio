
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";
import { Store, ShoppingCart, Briefcase, Rocket, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const targetAudiences = [
  {
    icon: <Store className="h-8 w-8 text-primary" />,
    title: "A Local Shopkeeper",
    description: "We'll make your products look world-class online and write your social media posts so you can focus on your customers.",
  },
  {
    icon: <ShoppingCart className="h-8 w-8 text-primary" />,
    title: "An E-commerce Brand",
    description: "We'll give you unlimited ad creatives and lifestyle images to scale your sales, without the cost of photoshoots.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "A Marketing Agency",
    description: "We'll be your secret backend, delivering high-quality content for all your clients at lightning speed.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "A Tech Startup",
    description: "We'll write your blogs and create your product ads so you can build authority and acquire users on a budget.",
  },
  {
    icon: <Building2 className="h-8 w-8 text-primary" />,
    title: "An Established Company",
    description: "We'll help you scale content production for every department, from marketing to customer service, with unmatched speed and efficiency.",
  }
];

export function Audience() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                <span className="block">
                    <span className="text-foreground">If You're </span>
                    <span className="text-primary text-glow">Ambitious,</span>
                </span>
                <span className="block">
                    <span className="text-foreground">You're in the </span>
                    <span className="text-primary text-glow">Right Place.</span>
                </span>
            </h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            We partner with winners. Whether you're a local hero or a global leader, our AI is your unfair advantage.
          </p>
        </div>
        <div className="max-w-7xl mx-auto mt-12 flex flex-wrap justify-center gap-6 md:gap-8">
            {targetAudiences.map((audience, index) => (
              <Card key={index} className="text-center bg-card/80 border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 glow-shadow p-4 md:p-6 flex flex-col items-center justify-start rounded-2xl basis-full sm:basis-[calc(50%-1rem)] md:basis-[calc(33.33%-1.5rem)] lg:basis-[calc(20%-1.5rem)] max-w-sm">
                <CardHeader className="p-2 flex flex-col items-center">
                  <div className="w-16 h-16 flex items-center justify-center rounded-full border-[0.75px] border-border bg-muted p-4 mb-4">
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

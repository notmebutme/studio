"use client"

import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Bot, Clapperboard, MonitorSmartphone, Voicemail, MessageCircle, Film } from "lucide-react";

const servicesList = [
  {
    icon: <Bot className="h-8 w-8 text-primary" />,
    title: "AI-Generated Content",
    description: "Scale your blog posts, social media updates, and website copy effortlessly.",
    benefits: ["SEO Optimization", "Consistent Brand Voice", "Rapid Content Creation"],
    plans: { starter: "$499/mo", growth: "$999/mo", enterprise: "Custom" }
  },
  {
    icon: <Clapperboard className="h-8 w-8 text-primary" />,
    title: "AI-Generated Ads",
    description: "Create high-performing ad creatives for any platform in minutes.",
    benefits: ["A/B Test Variations", "Platform-Specific Formats", "Performance Analytics"],
    plans: { starter: "$799/mo", growth: "$1499/mo", enterprise: "Custom" }
  },
  {
    icon: <MonitorSmartphone className="h-8 w-8 text-primary" />,
    title: "AI Product Mockups",
    description: "Visualize your products in any setting without expensive photoshoots.",
    benefits: ["Realistic Environments", "Infinite Customization", "Lifestyle Imagery"],
    plans: { starter: "$399/mo", growth: "$899/mo", enterprise: "Custom" }
  },
  {
    icon: <Film className="h-8 w-8 text-primary" />,
    title: "AI CGI Ads",
    description: "Produce stunning, photorealistic CGI video ads without physical shoots.",
    benefits: ["Hyper-Realistic Visuals", "Limitless Creative Freedom", "Drastically Reduced Costs"],
    plans: { starter: "$1599/mo", growth: "$2999/mo", enterprise: "Custom" }
  },
];

const moreServicesList = [
    {
      icon: <Voicemail className="h-8 w-8 text-primary" />,
      title: "AI Voice Agent",
      description: "Automate customer service calls with a human-like voice agent.",
      benefits: ["24/7 Availability", "Multi-language Support", "Reduced Wait Times"],
      plans: { starter: "$1299/mo", growth: "$2499/mo", enterprise: "Custom" }
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-primary" />,
      title: "AI Chatbot",
      description: "Deploy an intelligent chatbot on your website to handle inquiries.",
      benefits: ["Instant Responses", "Lead Capture", "Seamless Handoff"],
      plans: { starter: "$599/mo", growth: "$1199/mo", enterprise: "Custom" }
    }
  ];

export function Services() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary text-glow">
            Our Services
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl/relaxed">
            Cutting-edge AI solutions tailored to supercharge your brand's content strategy.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mt-12">
          {servicesList.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
          {showMore && moreServicesList.map((service) => (
             <ServiceCard key={service.title} {...service} />
          ))}
        </div>
        {!showMore && moreServicesList.length > 0 && (
            <div className="mt-12 text-center">
                <Button size="lg" variant="outline" className="glow-shadow border-2" onClick={() => setShowMore(true)}>
                    View More Services
                </Button>
            </div>
        )}
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description, benefits, plans }: typeof servicesList[0] | typeof moreServicesList[0]) {
    return (
        <Card className="flex flex-col bg-card/80 border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 glow-shadow">
            <CardHeader className="flex-row items-start gap-4 space-y-0">
                <div className="mt-1">{icon}</div>
                <div className="flex-1">
                    <CardTitle className="font-headline text-2xl">{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </div>
            </CardHeader>
            <CardContent className="flex-1">
                <h4 className="font-semibold mb-2 text-accent">Benefits:</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    {benefits.map(benefit => (
                        <li key={benefit} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary" />
                            <span>{benefit}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter>
                <div className="w-full">
                    <h4 className="font-semibold mb-3 text-center">Pricing Plans</h4>
                    <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="p-2 rounded-md bg-muted/50">
                            <p className="text-xs font-semibold">STARTER</p>
                            <p className="font-bold text-primary">{plans.starter}</p>
                        </div>
                        <div className="p-2 rounded-md bg-muted/50">
                             <p className="text-xs font-semibold">GROWTH</p>
                            <p className="font-bold text-primary">{plans.growth}</p>
                        </div>
                        <div className="p-2 rounded-md bg-muted/50">
                             <p className="text-xs font-semibold">ENTERPRISE</p>
                            <p className="font-bold text-primary">{plans.enterprise}</p>
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}

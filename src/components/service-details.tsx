
"use client";

import type { Service } from "@/lib/services-data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ComparisonTable } from "./comparison-table";
import { Pricing } from "./blocks/pricing";
import { RainbowButton } from "./ui/rainbow-button";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";
import { Badge } from "@/components/ui/badge";

const pricingPlans = [
    {
        name: "STARTER",
        price: "50",
        yearlyPrice: "40",
        period: "per month",
        features: [
            "Up to 1,000 interactions/mo",
            "Basic conversation flows",
            "Website widget integration",
            "48-hour support response time",
        ],
        description: "Perfect for individuals and small projects",
        buttonText: "Start Free Trial",
        href: "/#booking",
        isPopular: false,
    },
    {
        name: "PROFESSIONAL",
        price: "99",
        yearlyPrice: "79",
        period: "per month",
        features: [
            "Up to 5,000 interactions/mo",
            "Advanced conversation flows with conditional logic",
            "CRM & multi-platform integration",
            "Priority support",
            "Basic analytics dashboard"
        ],
        description: "Ideal for growing teams and businesses",
        buttonText: "Get Started",
        href: "/#booking",
        isPopular: true,
    },
    {
        name: "ENTERPRISE",
        price: "299",
        yearlyPrice: "239",
        period: "per month",
        features: [
            "Unlimited interactions",
            "Custom-built conversation flows",
            "Dedicated account manager",
            "1-hour support response time & SLAs",
            "Advanced security & compliance",
        ],
        description: "For large organizations with specific needs",
        buttonText: "Contact Sales",
        href: "/#booking",
        isPopular: false,
    },
];

export function ServiceDetails({ service }: { service: Service }) {
    const showPricing = service.slug === 'ai-voice-agent' || service.slug === 'ai-chatbot';

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-1">
                <section className="w-full py-20 md:py-32 bg-secondary/20">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <ScrollTriggeredText as="h1" per="word" preset="slide" className="text-4xl font-bold tracking-tighter sm:text-6xl font-headline text-primary text-glow">
                            {service.title}
                        </ScrollTriggeredText>
                        <ScrollTriggeredText as="p" per="word" preset="slide" delay={0.3} className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl/relaxed">
                            {service.detailedDescription}
                        </ScrollTriggeredText>
                    </div>
                </section>
                
                <section className="w-full py-20 md:py-24">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold font-headline mb-2 text-primary text-glow">Use Cases</h2>
                                <p className="text-muted-foreground mb-6">How our clients leverage this technology.</p>
                                <div className="space-y-4">
                                    {service.useCases.map((useCase, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                                            <p className="text-sm md:text-base">{useCase}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <Card className="bg-card/80 border-2 border-primary/10 glow-shadow">
                                    <CardHeader>
                                        <CardTitle className="font-headline text-2xl">How It Works</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        {service.howItWorks.map((step, index) => (
                                            <div key={index}>
                                                <h4 className="font-semibold text-sm md:text-base">{index + 1}. {step.title}</h4>
                                                <p className="text-muted-foreground text-sm md:text-base">{step.description}</p>
                                            </div>
                                        ))}
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-20 md:py-24 bg-secondary/20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary text-glow">Key Features</h2>
                            <p className="mt-4 text-muted-foreground md:text-xl/relaxed">The core functionalities that set our service apart.</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                             {service.keyFeatures.map((feature, index) => (
                                <Card key={index} className="text-center bg-card/80 border-2 border-primary/10 hover:border-primary/30 transition-all duration-300 glow-shadow p-4 md:p-6 flex flex-col items-center justify-start rounded-2xl">
                                    <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-3 mb-4">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-base md:text-lg font-semibold font-sans text-foreground mb-2">{feature.title}</h3>
                                    <p className="text-xs md:text-sm text-muted-foreground">{feature.description}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="w-full py-20 md:py-24">
                     <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary text-glow">Comparison</h2>
                            <p className="mt-4 text-muted-foreground md:text-xl/relaxed">See how we stack up against traditional methods.</p>
                        </div>
                        <ComparisonTable data={service.comparison} />
                    </div>
                </section>
                
                {showPricing && (
                    <section id="pricing" className="w-full py-20 md:py-24 bg-secondary/20">
                        <Pricing 
                            plans={pricingPlans} 
                            title="Find the Perfect Plan"
                            description={`Choose the right tier for your needs. All our ${service.title} plans are backed by our dedicated support team.`}
                        />
                    </section>
                )}

                 <section className="w-full py-20 md:py-32 text-center">
                    <div className="container mx-auto px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline mb-6">Ready to get started?</h2>
                        <RainbowButton asChild href="/#booking" size="lg">
                           <Link href="/#booking">Book a Free Consultation</Link>
                        </RainbowButton>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}

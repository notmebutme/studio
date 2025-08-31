import type { Service } from "@/lib/services-data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { ComparisonTable } from "./comparison-table";
import { Pricing } from "./blocks/pricing";
import { RainbowButton } from "./ui/rainbow-button";

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
                {/* Hero Section */}
                <section className="w-full py-20 md:py-32 bg-secondary/20">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid gap-12 md:grid-cols-2 items-center">
                            <div className="space-y-6">
                                <div className="inline-block rounded-lg bg-primary/10 p-3 text-primary">
                                    {service.icon}
                                </div>
                                <h1 className="text-4xl sm:text-5xl font-bold font-headline text-primary">
                                    {service.title}
                                </h1>
                                <p className="text-lg text-muted-foreground">
                                    {service.detailedDescription}
                                </p>
                                <RainbowButton asChild>
                                    <Link href="/#booking">Get Started <ArrowRight className="ml-2" /></Link>
                                </RainbowButton>
                            </div>
                            <div className="bg-muted p-8 rounded-lg">
                                <h3 className="text-2xl font-bold mb-4">Key Use Cases</h3>
                                <ul className="space-y-3">
                                    {service.useCases.map((useCase, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <Check className="h-5 w-5 text-primary mt-1 shrink-0" />
                                            <span>{useCase}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                
                {/* Pricing Section - Conditional */}
                {showPricing && (
                    <section className="w-full py-20 md:py-24 bg-background">
                         <Pricing plans={pricingPlans} />
                    </section>
                )}

                {/* Key Features Section */}
                <section className="w-full py-20 md:py-24 bg-secondary/20">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold font-headline mb-12">
                            Key Features
                        </h2>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {service.keyFeatures.map((feature, index) => (
                                <Card key={index} className="text-left p-6 border-2 hover:border-primary/50 transition-all bg-background">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="bg-primary/10 text-primary p-3 rounded-full">
                                            {feature.icon}
                                        </div>
                                        <h3 className="text-xl font-bold">{feature.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="w-full py-20 md:py-24 bg-background">
                    <div className="container mx-auto px-4 md:px-6 text-center">
                        <h2 className="text-3xl sm:text-4xl font-bold font-headline mb-12">
                            How It Works
                        </h2>
                        <div className="relative grid gap-8 md:grid-cols-3">
                            <div className="absolute top-12 left-0 w-full h-0.5 bg-border hidden md:block" />
                            {service.howItWorks.map((step, index) => (
                                <div key={index} className="relative flex flex-col items-center text-center p-6">
                                    <div className="bg-background border-2 border-primary rounded-full h-16 w-16 flex items-center justify-center mb-4 z-10">
                                        <span className="text-2xl font-bold text-primary">{index + 1}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                
                {/* Comparison Section */}
                {service.comparison && (
                    <section className="w-full py-20 md:py-24 bg-secondary/20">
                        <div className="container mx-auto px-4 md:px-6">
                            <h2 className="text-3xl sm:text-4xl font-bold font-headline text-center mb-12">
                                Traditional vs. Intrix AI
                            </h2>
                            <ComparisonTable data={service.comparison} />
                        </div>
                    </section>
                )}

                {/* CTA Section */}
                <section className="w-full py-20 md:py-32 bg-primary/5">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">Ready to revolutionize your content?</h2>
                        <p className="mt-4 text-muted-foreground md:text-xl/relaxed max-w-2xl mx-auto">
                            Let's discuss how our {service.title} solution can be tailored to your specific needs.
                        </p>
                        <div className="mt-8">
                            <RainbowButton asChild>
                                <Link href="/#booking">Book an Appointment</Link>
                            </RainbowButton>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}

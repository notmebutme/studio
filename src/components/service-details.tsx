"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import type { Service } from "@/lib/services-data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
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
    const router = useRouter();

    useEffect(() => {
        router.push('/');
    }, [router]);

    const showPricing = service.slug === 'ai-voice-agent' || service.slug === 'ai-chatbot';

    // Render a loading state or null while redirecting
    return (
        <div className="flex flex-col min-h-screen bg-background animate-pulse">
            <Header />
            <main className="flex-1">
                 <div className="w-full py-20 md:py-32">
                    <div className="container mx-auto text-center">
                        <p className="text-xl text-muted-foreground">Redirecting...</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
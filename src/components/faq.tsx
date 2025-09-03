
"use client";

import * as React from "react";
import { useState } from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";


const Tabs = TabsPrimitive.Root;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      "inline-flex h-auto items-center justify-center rounded-md p-1 text-muted-foreground flex-wrap",
      className,
    )}
    {...props}
  />
));
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "inline-flex h-10 items-center justify-center whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border data-[state=active]:text-foreground data-[state=active]:bg-card",
      className,
    )}
    {...props}
  />
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
));
TabsContent.displayName = TabsPrimitive.Content.displayName;

type ViewType = "services" | "process" | "technical";

interface FAQItem {
  question: string;
  answer: string;
  id: string;
}

interface FAQSection {
  category: string;
  items: FAQItem[];
}

interface FAQAccordionProps {
  items: FAQItem[];
}

const FAQ_SECTIONS: Record<ViewType, FAQSection> = {
  services: {
    category: "About Our Services",
    items: [
      {
        id: "what-is-agency",
        question: "What exactly is an AI content creation agency?",
        answer:
          "An AI content creation agency like Intrix AI uses advanced artificial intelligence, guided by human experts, to produce high-quality content at scale. We create everything from SEO-optimized articles and social media posts to high-converting AI-generated ads and product mockups, helping businesses in Surat and across India grow faster.",
      },
      {
        id: "how-better-chatgpt",
        question: "How is your AI content better than just using ChatGPT myself?",
        answer:
          "While tools like ChatGPT are powerful, our value is in the strategy and expertise. We use a combination of advanced AI models and professional prompt engineering, followed by human review and optimization. This ensures the content is not only well-written but also on-brand, factually accurate, and strategically designed to meet your business goals.",
      },
      {
        id: "who-owns-rights",
        question: "Who owns the rights to the AI-generated content?",
        answer:
          "You do. Once our service is complete and paid for, you receive 100% commercial ownership and rights to all content and visuals we create for you.",
      },
      {
        id: "how-seo-optimized",
        question: "How do you ensure the articles you write are SEO-optimized?",
        answer:
          "Our process begins with keyword research for your industry. We then instruct our AI to structure the content with proper headings (H1, H2, H3), meta descriptions, and naturally integrated keywords. Finally, our human team reviews the content to ensure it meets the latest Google SEO best practices.",
      },
    ],
  },
  process: {
    category: "Process & Pricing",
    items: [
        {
            id: "turnaround-time",
            question: "What is the typical turnaround time for a project?",
            answer:
              "It depends on the service. A batch of AI product mockups can be delivered in as little as 48 hours, while a full month of SEO articles might take a week. We confirm the timeline for every project before we begin.",
          },
          {
            id: "is-it-affordable",
            question: "I'm a local shopkeeper in Surat. Are your services affordable for me?",
            answer:
              "Absolutely. Our 'Starter' packages are specifically designed for small businesses and local retailers. We aim to provide affordable AI marketing solutions that deliver a real return on investment, whether you're in Surat, Gujarat, or anywhere else.",
          },
          {
            id: "how-many-revisions",
            question: "How many revisions are included in your pricing?",
            answer:
              "All our packages and projects include two rounds of revisions to ensure you are completely satisfied with the final result.",
          },
    ],
  },
  technical: {
    category: "Technical Questions",
    items: [
        {
            id: "what-data-needed",
            question: "What kind of data do you need from me to create effective AI ads?",
            answer: "To create high-performing ads, we typically need to know your target audience (age, location, interests), your unique selling proposition, and any brand guidelines you have. The more we know about your business, the better our AI can perform.",
          },
          {
            id: "regional-languages",
            question: "Can your AI chatbot be trained to speak in Gujarati or other regional languages?",
            answer: "Yes. We can train and deploy AI chatbots and voice agents that are fluent in multiple languages, including Gujarati, Hindi, and English, to serve your specific customer base.",
          },
    ],
  },
};

const FAQAccordion: React.FC<FAQAccordionProps> = ({ items }) => (
  <Accordion type="single" collapsible className="w-full">
    {items.map((faq) => (
      <AccordionItem key={faq.id} value={faq.id}>
        <AccordionTrigger className="text-left hover:no-underline text-base md:text-lg">
          {faq.question}
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground text-sm md:text-base">{faq.answer}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export function FAQ() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <header className="text-center mb-12">
            <ScrollTriggeredText as="h2" per="word" preset="slide" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary text-glow">
                Frequently Asked Questions
            </ScrollTriggeredText>
        </header>

        <Tabs defaultValue="services" className="w-full">
            <div className="flex justify-center mb-8">
                <TabsList className="w-full justify-center h-auto p-1 max-w-md border rounded-xl bg-secondary/30">
                    <TabsTrigger value="services">Services</TabsTrigger>
                    <TabsTrigger value="process">Process & Pricing</TabsTrigger>
                    <TabsTrigger value="technical">Technical</TabsTrigger>
                </TabsList>
            </div>
            
            <TabsContent value="services">
                <FAQAccordion items={FAQ_SECTIONS["services"].items} />
            </TabsContent>
            <TabsContent value="process">
                <FAQAccordion items={FAQ_SECTIONS["process"].items} />
            </TabsContent>
            <TabsContent value="technical">
                <FAQAccordion items={FAQ_SECTIONS["technical"].items} />
            </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

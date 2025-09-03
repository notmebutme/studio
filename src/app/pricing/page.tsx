
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { servicesData, Service } from "@/lib/services-data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Check, Star } from "lucide-react";
import { ScrollTriggeredText } from "@/components/ui/scroll-triggered-text";
import { cn } from "@/lib/utils";

export default function PricingPage() {
  const servicesWithPricing = servicesData.filter(
    (service) => service.pricingPlans && service.pricingPlans.length > 0
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 bg-secondary/20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <ScrollTriggeredText as="h1" per="word" preset="slide" className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline text-primary text-glow">
              Our Pricing
            </ScrollTriggeredText>
            <ScrollTriggeredText as="p" per="word" preset="slide" delay={0.3} className="mt-4 max-w-3xl mx-auto text-muted-foreground text-base sm:text-lg md:text-xl/relaxed">
              Simple, transparent pricing for every service. Find the plan that fits your needs.
            </ScrollTriggeredText>
          </div>
        </section>

        <section className="w-full py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <Accordion type="single" collapsible className="w-full" defaultValue={servicesWithPricing.length > 0 ? servicesWithPricing[0].slug : undefined}>
              {servicesWithPricing.map((service: Service) => (
                <AccordionItem key={service.slug} value={service.slug}>
                  <AccordionTrigger className="text-2xl font-headline hover:no-underline">
                    <div className="flex items-center gap-4">
                      {service.icon}
                      {service.title} Pricing
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-1/4">Plan</TableHead>
                            <TableHead className="w-1/2">Features</TableHead>
                            <TableHead className="text-right">Price (monthly)</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {service.pricingPlans && service.pricingPlans.map((plan: any, index: number) => (
                            <TableRow key={index} className={cn(plan.isPopular && "bg-primary/10")}>
                              <TableCell className="font-medium">
                                <div className="flex items-center gap-2">
                                  {plan.isPopular && <Star className="h-4 w-4 text-primary fill-primary" />}
                                  <span>{plan.planName || plan.name}</span>
                                </div>
                              </TableCell>
                              <TableCell>
                                <ul className="space-y-2">
                                  {plan.features.map((feature: string, fIndex: number) => (
                                    <li key={fIndex} className="flex items-start gap-2 text-sm">
                                      <Check className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </TableCell>
                              <TableCell className="text-right font-semibold text-lg">
                                {typeof plan.price === 'string' && plan.price.toLowerCase() === 'custom' 
                                  ? 'Custom'
                                  : `₹${Number(plan.price).toLocaleString('en-IN')}`}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

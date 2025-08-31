
import type { Service } from "@/lib/services-data";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export function ServiceDetails({ service }: { service: Service }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 md:grid-cols-2 md:gap-24 items-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary/10 p-3 text-primary icon-glow">
                  {service.icon}
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold font-headline text-primary text-glow">
                  {service.title}
                </h1>
                <p className="text-lg text-muted-foreground">
                  {service.description}
                </p>
                <Button asChild size="lg" className="glow-shadow font-bold">
                  <Link href="/#booking">Book a Demo</Link>
                </Button>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold font-headline text-accent">Key Advantages</h2>
                <ul className="space-y-4 text-lg">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-4">
                      <Check className="h-6 w-6 text-primary mt-1 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-20 md:py-32 bg-secondary/20">
          <div className="container mx-auto text-center">
             <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary text-glow">Ready to revolutionize your content?</h2>
             <p className="mt-4 text-muted-foreground md:text-xl/relaxed max-w-2xl mx-auto">
                Let's discuss how our {service.title} solution can be tailored to your specific needs.
             </p>
             <div className="mt-8">
                <Button asChild size="lg" className="glow-shadow font-bold text-lg py-7 px-8">
                  <Link href="/#booking">Book an Appointment</Link>
                </Button>
             </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

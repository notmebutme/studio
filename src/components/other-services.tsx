
"use client";

import { servicesData } from "@/lib/services-data";
import { BentoGrid } from "@/components/ui/bento-grid";

export function OtherServices() {
  const otherServices = servicesData.slice(4).map(service => ({
    title: service.title,
    description: service.description,
    icon: service.icon,
    href: `/services/${service.slug}`,
    cta: 'Learn More',
  }));

  return (
    <section className="w-full py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <BentoGrid items={otherServices} />
      </div>
    </section>
  );
}

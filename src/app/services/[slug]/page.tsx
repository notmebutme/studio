
import { servicesData, Service } from "@/lib/services-data";
import { ServiceDetails } from "@/components/service-details";

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    return <div className="container mx-auto py-24 text-center">Service not found</div>;
  }

  return <ServiceDetails service={service} />;
}

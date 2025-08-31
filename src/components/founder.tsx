
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";

const founderTestimonial = [
  {
    quote: "I started Intrix AI with a simple vision: to democratize creativity. For too long, high-quality content has been the exclusive domain of those with deep pockets and extensive resources. We're changing that. By harnessing the power of generative AI, we empower businesses of all sizes to produce stunning visuals, compelling ads, and engaging content at scale. Our goal is not to replace human creativity, but to amplify it, making it faster, smarter, and more accessible than ever before.",
    name: "Veer Shah",
    designation: "Founder, Intrix AI",
    src: "/founder.jpg",
  },
];

export function Founder() {
  return (
    <section className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
            <ScrollTriggeredText as="h2" per="word" preset="slide" className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary text-glow">
                From the Founder
            </ScrollTriggeredText>
        </div>
        <AnimatedTestimonials testimonials={founderTestimonial} />
      </div>
    </section>
  );
}

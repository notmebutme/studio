import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export function Founder() {
  return (
    <section className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <Image
              src="https://picsum.photos/600/600"
              alt="Veer Shah, Founder of Intrix AI"
              width={600}
              height={600}
              className="rounded-lg relative"
              data-ai-hint="founder portrait"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary text-glow">
              From the Founder
            </h2>
            <h3 className="text-2xl font-semibold font-headline">Veer Shah</h3>
            <p className="text-muted-foreground md:text-lg">
              "I started Intrix AI with a simple vision: to democratize creativity. For too long, high-quality content has been the exclusive domain of those with deep pockets and extensive resources. We're changing that. By harnessing the power of generative AI, we empower businesses of all sizes to produce stunning visuals, compelling ads, and engaging content at scale. Our goal is not to replace human creativity, but to amplify it, making it faster, smarter, and more accessible than ever before."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

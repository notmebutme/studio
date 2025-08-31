import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";

export function Founder() {
  return (
    <section className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <ScrollTriggeredText as="h2" per="word" preset="slide" className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary text-glow">
            From the Founder
          </ScrollTriggeredText>
        </div>
        <Card className="max-w-4xl mx-auto bg-card/80 border-2 border-primary/10 glow-shadow">
            <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-1">
                        <Image 
                            src="https://picsum.photos/400/400" 
                            alt="Veer Shah, Founder of Intrix AI"
                            width={400}
                            height={400}
                            className="rounded-full aspect-square object-cover border-4 border-primary/20 shadow-lg"
                            data-ai-hint="founder portrait"
                        />
                    </div>
                    <div className="md:col-span-2 space-y-4">
                        <blockquote className="text-lg italic text-foreground/90">
                        “I started Intrix AI with a simple vision: to democratize creativity. For too long, high-quality content has been the exclusive domain of those with deep pockets and extensive resources. We're changing that. By harnessing the power of generative AI, we empower businesses of all sizes to produce stunning visuals, compelling ads, and engaging content at scale. Our goal is not to replace human creativity, but to amplify it, making it faster, smarter, and more accessible than ever before.”
                        </blockquote>
                        <div>
                            <p className="font-bold text-lg text-primary">Veer Shah</p>
                            <p className="text-muted-foreground">Founder, Intrix AI</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
    </section>
  );
}

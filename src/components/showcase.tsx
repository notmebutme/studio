
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";

export function Showcase() {
  return (
    <section id="showcase" className="w-full py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollTriggeredText as="h2" per="word" preset="slide" className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary text-glow">
            AI-Generated Content Showcase
          </ScrollTriggeredText>
          <ScrollTriggeredText as="p" per="word" preset="slide" delay={0.3} className="mt-4 text-muted-foreground md:text-xl/relaxed">
            An interactive demo carousel that lets you preview AI-generated ads, UGC content, and product mockups.
          </ScrollTriggeredText>
        </div>
        <Tabs defaultValue="ads" className="w-full max-w-5xl mx-auto mt-12">
          <TabsList className="grid w-full grid-cols-3 bg-muted/50">
            <TabsTrigger value="ads" className="text-xs sm:text-sm">AI-Generated Ads</TabsTrigger>
            <TabsTrigger value="ugc" className="text-xs sm:text-sm">UGC Content</TabsTrigger>
            <TabsTrigger value="mockups" className="text-xs sm:text-sm">Product Mockups</TabsTrigger>
          </TabsList>
          <TabsContent value="ads">
            <ShowcaseItem
              title="AI-Generated Ad Creatives"
              traditionalHint="traditional ad"
              aiHint="futuristic ad"
              traditionalImg="https://picsum.photos/800/600?random=1"
              aiImg="https://picsum.photos/800/600?random=2"
            />
          </TabsContent>
          <TabsContent value="ugc">
            <ShowcaseItem
              title="AI-Powered User-Generated Content"
              traditionalHint="user photo"
              aiHint="influencer style"
              traditionalImg="https://picsum.photos/800/600?random=3"
              aiImg="https://picsum.photos/800/600?random=4"
            />
          </TabsContent>
          <TabsContent value="mockups">
            <ShowcaseItem
              title="AI-Enhanced Product Mockups"
              traditionalHint="product studio"
              aiHint="product lifestyle"
              traditionalImg="https://picsum.photos/800/600?random=5"
              aiImg="https://picsum.photos/800/600?random=6"
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

interface ShowcaseItemProps {
  title: string;
  traditionalImg: string;
  aiImg: string;
  traditionalHint: string;
  aiHint: string;
}

export function ShowcaseItem({ title, traditionalImg, aiImg, traditionalHint, aiHint }: ShowcaseItemProps) {
  return (
    <Card className="mt-6 border-2 border-primary/20 bg-card/80 glow-shadow">
      <CardContent className="p-4 md:p-6">
        <h3 className="text-lg md:text-2xl font-semibold mb-4 text-center font-headline">{title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="space-y-2">
            <h4 className="text-sm md:text-lg font-semibold text-center text-muted-foreground">Traditional Content</h4>
            <div className="relative">
                <Image
                    src={traditionalImg}
                    alt="Traditional Content"
                    width={800}
                    height={600}
                    className="rounded-md"
                    data-ai-hint={traditionalHint}
                />
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-sm md:text-lg font-semibold text-center text-primary text-glow">Intrix AI Content</h4>
            <div className="relative border-2 border-primary/50 rounded-lg p-1 shadow-[0_0_15px_0px_hsl(var(--primary)/0.4)]">
                <Image
                    src={aiImg}
                    alt="Intrix AI Content"
                    width={800}
                    height={600}
                    className="rounded-md"
                    data-ai-hint={aiHint}
                />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

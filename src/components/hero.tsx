
'use client';
import { RainbowButton } from "./ui/rainbow-button";
import { ScrollTriggeredText } from "./ui/scroll-triggered-text";

export function Hero() {

  return (
    <section 
      className="w-full bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center py-12 md:py-24"
    >
      <div 
        className="absolute inset-0 z-0"
        style={{ backgroundImage: "url('/hero-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="container relative px-4 md:px-6 z-10">
        <div className="flex flex-col justify-center items-center space-y-6 md:space-y-8 text-center">
          <div className="space-y-4 flex flex-col items-center">
            <ScrollTriggeredText 
              as="h1" 
              per="word" 
              preset="slide" 
              className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-white"
            >
              Your Entire Creative Team, Powered by AI.
            </ScrollTriggeredText>
            <ScrollTriggeredText 
              as="p" 
              per="word" 
              preset="slide" 
              delay={0.5} 
              className="max-w-[700px] text-base text-white/80 sm:text-lg md:text-xl"
            >
              Get unlimited, data-driven content that scales your brand—from stunning product mockups to ad campaigns that actually perform. All at a fraction of the cost.
            </ScrollTriggeredText>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <RainbowButton asChild href="#booking">
              Start Scaling Now
            </RainbowButton>
          </div>
        </div>
      </div>
    </section>
  );
}

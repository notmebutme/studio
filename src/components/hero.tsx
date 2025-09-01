'use client';
import { RainbowButton } from "./ui/rainbow-button";

export function Hero() {

  return (
    <section 
      className="w-full bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
    >
      <div 
        className="absolute inset-0 z-0"
        style={{ backgroundImage: "url('/hero-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="container relative px-4 md:px-6 z-10">
        <div className="flex flex-col justify-center items-center space-y-8 text-center">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold tracking-tighter md:text-7xl lg:text-8xl font-headline text-white">
              What if AI could create your content faster, smarter, and at a fraction of the cost?
            </h1>
            <p className="max-w-[600px] text-lg text-white/80 md:text-xl">
              Intrix AI helps you scale ads, content, and product visuals with cutting-edge AI tools.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <RainbowButton asChild href="#booking">
              Book an Appointment
            </RainbowButton>
          </div>
        </div>
      </div>
    </section>
  );
}

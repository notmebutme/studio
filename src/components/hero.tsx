import Link from "next/link";
import { RainbowButton } from "./ui/rainbow-button";

export function Hero() {
  return (
    <section 
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      <div className="container px-4 md:px-6 z-10 py-20 md:py-32 lg:py-40">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline text-black">
                Stop wasting hours. <br /> Let AI build content in minutes.
              </h1>
              <p className="max-w-[600px] text-black/80 md:text-xl mx-auto">
                Stop wasting time and money on content that doesn't deliver. Intrix AI generates high-performing ads, social media posts, product mockups, and more in minutes.
              </p>
            </div>
            <div className="flex justify-center">
              <RainbowButton asChild>
                <Link href="#booking">Book an Appointment</Link>
              </RainbowButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

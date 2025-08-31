import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { RainbowButton } from "./ui/rainbow-button";

export function Hero() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40">
       <div className="absolute inset-0 z-0 wavy-bg" />
      <div className="container relative px-4 md:px-6 z-10">
        <div className="grid gap-6 items-center">
          <div className="flex flex-col justify-center space-y-4 text-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-glow font-headline">
                Create Content Faster, Smarter, and at a Fraction of the Cost
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto">
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

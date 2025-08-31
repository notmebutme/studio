import Link from "next/link";
import Image from "next/image";
import { RainbowButton } from "./ui/rainbow-button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between mx-auto px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 md:gap-3" prefetch={false}>
          <Image 
            src="/logo.png" 
            alt="Intrix AI Logo" 
            width={28} 
            height={28}
            className="rounded-md w-7 h-7 md:w-10 md:h-10"
          />
          <span className="text-xl md:text-2xl font-bold font-headline">Intrix AI</span>
        </Link>
        <RainbowButton asChild className="text-xs h-9 md:h-11 md:text-base px-4 md:px-8">
          <Link href="#booking">Book an Appointment</Link>
        </RainbowButton>
      </div>
    </header>
  );
}

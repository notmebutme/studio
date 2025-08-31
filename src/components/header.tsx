import Link from "next/link";
import Image from "next/image";
import { RainbowButton } from "./ui/rainbow-button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 md:h-20 items-center justify-between mx-auto px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 md:gap-3" prefetch={false}>
          <Image 
            src="/logo.png" 
            alt="Intrix AI Logo" 
            width={24} 
            height={24}
            className="rounded-md md:w-7 md:h-7"
          />
          <span className="text-lg md:text-xl font-bold font-headline">Intrix AI</span>
        </Link>
        <RainbowButton asChild className="h-9 px-4 text-xs md:h-11 md:px-8 md:text-sm">
          <Link href="#booking">Book an Appointment</Link>
        </RainbowButton>
      </div>
    </header>
  );
}

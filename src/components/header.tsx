import Link from "next/link";
import Image from "next/image";
import { RainbowButton } from "./ui/rainbow-button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
      <div className="container flex h-20 items-center justify-between mx-auto px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3" prefetch={false}>
          <Image 
            src="/logo.png" 
            alt="Intrix AI Logo" 
            width={40} 
            height={40} 
            className="rounded-md"
          />
          <span className="text-2xl font-bold font-headline">Intrix AI</span>
        </Link>
        <RainbowButton asChild>
          <Link href="#booking">Book an Appointment</Link>
        </RainbowButton>
      </div>
    </header>
  );
}

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-4 md:px-6">
        <Link href="#" className="flex items-center gap-3" prefetch={false}>
          <Image 
            src="/logo.png" 
            alt="Intrix AI Logo" 
            width={40} 
            height={40} 
            className="rounded-md icon-glow"
          />
          <span className="text-2xl font-bold font-headline">Intrix AI</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
            {/* Future nav links can go here */}
        </nav>
        <Button asChild className="glow-shadow font-bold">
          <Link href="#booking">Book an Appointment</Link>
        </Button>
      </div>
    </header>
  );
}

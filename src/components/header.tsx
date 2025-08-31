import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent">
      <div className="container flex h-24 items-center justify-between mx-auto px-4 md:px-6">
        <Link href="#" className="flex items-center gap-3" prefetch={false}>
          <Image 
            src="/logo.png" 
            alt="Intrix AI Logo" 
            width={40} 
            height={40} 
            className="rounded-md"
          />
          <span className="text-2xl font-bold font-headline">Intrix AI</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
            <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
            <Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link>
            <Link href="#docs" className="hover:text-primary transition-colors">Docs</Link>
        </nav>
        <Button asChild className="rounded-full font-bold bg-secondary text-secondary-foreground hover:bg-secondary/80">
          <Link href="#login">Login</Link>
        </Button>
      </div>
    </header>
  );
}

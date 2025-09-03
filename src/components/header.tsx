
import Link from "next/link";
import Image from "next/image";
import { RainbowButton } from "./ui/rainbow-button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { servicesData } from "@/lib/services-data";

export function Header() {
  const navItems = [
    { name: "Pricing", href: "/pricing" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 md:h-20 items-center justify-between mx-auto px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 md:gap-3" prefetch={false}>
          <Image 
            src="/logo.png" 
            alt="Intrix AI Logo" 
            width={32} 
            height={32}
            className="rounded-md w-8 h-8 md:w-10 md:h-10"
          />
          <span className="text-lg md:text-xl font-bold font-headline">Intrix AI</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-primary transition-colors focus:outline-none">
              Services
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {servicesData.map((service) => (
                <DropdownMenuItem key={service.slug} asChild>
                  <Link href={`/services/${service.slug}`} className="gap-2">
                    {service.icon}
                    <span>{service.title}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="hover:text-primary transition-colors">
              {item.name}
            </Link>
          ))}
        </nav>

        <RainbowButton asChild href="/#booking" className="h-9 px-4 text-xs md:h-10 md:px-6 md:text-sm">
          Book a Demo
        </RainbowButton>
      </div>
    </header>
  );
}

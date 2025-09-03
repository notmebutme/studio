
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
    <header className="w-full bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between mx-auto px-2 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image 
            src="/logo.png" 
            alt="Intrix AI Logo" 
            width={28} 
            height={28}
            className="rounded-md w-7 h-7"
          />
          <span className="text-sm font-bold font-headline">Intrix AI</span>
        </Link>
        
        <nav className="hidden sm:flex items-center gap-3 text-xs">
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

        <RainbowButton asChild href="/#booking" className="h-8 px-3 text-[10px] md:h-10 md:px-6 md:text-sm">
          Book a Demo
        </RainbowButton>
      </div>
    </header>
  );
}

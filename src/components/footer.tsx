import Link from "next/link"
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full py-6 px-4 md:px-6 border-t border-primary/10 bg-background">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3" prefetch={false}>
          <Image 
            src="/logo.png" 
            alt="Intrix AI Logo" 
            width={28} 
            height={28} 
            className="rounded-md icon-glow"
          />
          <span className="text-lg font-semibold font-headline">Intrix AI</span>
        </Link>
        <p className="text-sm text-muted-foreground text-center md:text-left">© {new Date().getFullYear()} Intrix AI. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors" prefetch={false}>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}

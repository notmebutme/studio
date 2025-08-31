import Link from "next/link"
import { Rocket } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full py-6 px-4 md:px-6 border-t border-primary/10 bg-background">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Rocket className="h-6 w-6 text-primary icon-glow" />
          <span className="text-lg font-semibold font-headline">Intrix AI</span>
        </div>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Intrix AI. All rights reserved.</p>
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

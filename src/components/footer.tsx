
import Link from "next/link"
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full py-6 px-4 md:px-6 bg-white dark:bg-black">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image 
            src="/logo.png" 
            alt="Intrix AI Logo" 
            width={24} 
            height={24} 
            className="rounded-md icon-glow"
          />
          <span className="text-base font-semibold font-headline text-black dark:text-white">Intrix AI</span>
        </Link>
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center md:text-left">© {new Date().getFullYear()} Intrix AI. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-xs text-gray-500 hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-primary" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs text-gray-500 hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-primary" prefetch={false}>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}

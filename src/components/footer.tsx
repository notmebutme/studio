import Link from "next/link"
import Image from "next/image";

export function Footer() {
  return (
    <footer className="w-full py-6 px-4 md:px-6 border-t border-gray-200 bg-white text-black">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image 
            src="/logo.png" 
            alt="Intrix AI Logo" 
            width={24} 
            height={24} 
            className="rounded-md"
          />
          <span className="text-base font-semibold font-headline">Intrix AI</span>
        </Link>
        <p className="text-xs text-gray-600 text-center md:text-left">© {new Date().getFullYear()} Intrix AI. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="#" className="text-xs text-gray-600 hover:text-black transition-colors" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="text-xs text-gray-600 hover:text-black transition-colors" prefetch={false}>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}

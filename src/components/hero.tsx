import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Send } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-purple-200 via-pink-200 to-orange-200 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-orange-900/30">
       <div className="absolute inset-0 z-0 wavy-bg opacity-30" />
      <div className="container relative px-4 md:px-6 z-10 grid md:grid-cols-2 gap-8 items-center min-h-screen py-20">
        <div className="max-w-xl text-left space-y-6">
          <p className="text-lg font-bold text-primary uppercase">DO MORE WITH AI</p>
          <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl font-headline text-foreground">
            Supercharge Your Workflow
          </h1>
          
          <p className="text-lg text-muted-foreground">
            Stop wasting time on manual tasks. Intrix AI handles content creation, ad generation, and customer support, so you can focus on what matters most: growing your business.
          </p>

          <form className="space-y-4">
            <Input type="email" placeholder="Your email address..." className="max-w-lg bg-background/80" />
            <Button type="submit" size="lg" className="w-full max-w-lg font-bold">SIGN UP</Button>
            <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-muted-foreground">Remember me</Label>
            </div>
          </form>

          <div className="flex items-center space-x-4 pt-4">
            <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary"><Send /></Link>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
            <Image 
                src="https://picsum.photos/800/800"
                alt="3D illustration of a person using VR and interacting with floating UI elements"
                width={800}
                height={800}
                className="rounded-lg"
                data-ai-hint="3d character VR"
            />
        </div>
      </div>
    </section>
  );
}

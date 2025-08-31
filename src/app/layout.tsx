"use client"

import type { Metadata } from 'next';
import './globals.css';
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import DemoOne from '@/components/ui/demo';
import { useState, useEffect } from 'react';
import { ParticleTextEffect } from '@/components/ui/particle-text-effect';


// Since we're using a client component for the preloader, we can't export metadata directly.
// We'll set the title in the <head> tag below.
// export const metadata: Metadata = {
//   title: 'Intrix AI',
//   description: 'Create your content faster, smarter, and at a fraction of the cost.',
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);
  const [currentWord, setCurrentWord] = useState("WELCOME");
  const words = ["WELCOME", "TO", "INTRIX AI"];

  useEffect(() => {
    const timers = [
      setTimeout(() => setCurrentWord("TO"), 2000), // Show "TO" after 2 seconds
      setTimeout(() => setCurrentWord("INTRIX AI"), 4000), // Show "INTRIX AI" after 4 seconds
      setTimeout(() => setLoading(false), 6000) // End loading after 6 seconds
    ];

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Intrix AI</title>
        <meta name="description" content="Create your content faster, smarter, and at a fraction of the cost." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased", "min-h-screen bg-background font-sans")}>
        {loading ? (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
            <ParticleTextEffect word={currentWord} />
          </div>
        ) : (
          <>
            <DemoOne />
            <div className="relative z-10 animate-fade-in">
              {children}
            </div>
            <Toaster />
          </>
        )}
      </body>
    </html>
  );
}

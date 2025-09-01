"use client"

import type { Metadata } from 'next';
import './globals.css';
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { useState, useEffect } from 'react';
import { ParticleTextEffect } from '@/components/ui/particle-text-effect';
import { useRouter } from 'next/navigation';
import { CursorProvider } from '@/components/cursor-provider';


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
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
    const navigationEntries = performance.getEntriesByType('navigation');
    if (navigationEntries.length > 0 && (navigationEntries[0] as PerformanceNavigationTiming).type === 'reload') {
      if (window.location.pathname !== '/') {
        router.replace('/');
      }
    }
  }, [router]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000); // Total duration for the preloader
    return () => clearTimeout(timer);
  }, []);
  
  const [showPreloader, setShowPreloader] = useState(true);
  useEffect(() => {
    if (isClient) {
      if (window.location.pathname !== '/') {
        setShowPreloader(false);
        setLoading(false);
      }
    }
  }, [isClient]);

  if (isClient && loading && showPreloader) {
    return (
      <html lang="en" className="dark">
        <head>
          <title>Intrix AI</title>
          <meta name="description" content="Create your content faster, smarter, and at a fraction of the cost." />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
        </head>
        <body className={cn("font-body antialiased", "min-h-screen bg-background font-sans")}>
           <ParticleTextEffect words={["INTRIX AI"]} />
        </body>
      </html>
    );
  }

  return (
    <html lang="en" className="dark">
      <head>
        <title>Intrix AI</title>
        <meta name="description" content="Create your content faster, smarter, and at a fraction of the cost." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased", "min-h-screen bg-background font-sans")}>
          <>
            <CursorProvider />
            <div className="relative z-0 animate-fade-in-zoom">
              {children}
            </div>
            <Toaster />
          </>
      </body>
    </html>
  );
}

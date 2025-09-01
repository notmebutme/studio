
'use client';
import { RainbowButton } from "./ui/rainbow-button";
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const Spline = dynamic(() => import('@splinetool/react-spline'), { 
  ssr: false,
});

export function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const ROBOT_SCENE_URL = "https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode";

  return (
    <section 
      className="w-full bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center"
    >
      <div 
        className="absolute inset-0 z-0"
        style={{ backgroundImage: "url('/hero-bg.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="container relative px-4 md:px-6 z-10">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="flex flex-col justify-center space-y-8 text-left">
            <div className="space-y-4">
              <h1 className="text-6xl font-bold tracking-tighter md:text-7xl lg:text-8xl font-headline text-white">
                Stop wasting hours. <br /> Let AI build content in minutes.
              </h1>
              <p className="max-w-[600px] text-lg text-white/80 md:text-xl">
                Stop wasting time and money on content that doesn't deliver. Intrix AI generates high-performing ads, social media posts, product mockups, and more in minutes.
              </p>
            </div>
            <div className="flex justify-start">
              <RainbowButton asChild href="#booking">
                Book an Appointment
              </RainbowButton>
            </div>
          </div>
          <div className="h-[400px] md:h-[600px] w-full">
            {isMounted ? (
                <Spline scene={ROBOT_SCENE_URL} />
            ) : (
                <div className="w-full h-full flex items-center justify-center bg-transparent text-white">
                    <svg className="animate-spin h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"></path>
                    </svg>
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

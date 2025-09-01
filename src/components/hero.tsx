
'use client';
import { RainbowButton } from "./ui/rainbow-button";
import { InteractiveRobotSpline } from "./ui/interactive-3d-robot";

export function Hero() {
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
            <InteractiveRobotSpline scene={ROBOT_SCENE_URL} />
          </div>
        </div>
      </div>
    </section>
  );
}

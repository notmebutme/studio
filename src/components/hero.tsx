
'use client';
import { RainbowButton } from "./ui/rainbow-button";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { TextEffect } from "./ui/text-effect";

const questions = [
  "Tired of creative bottlenecks?",
  "Wasting your budget on content that doesn't perform?",
  "Is your competition moving faster than you?",
];

const videoSources = [
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
  "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
];

export function Hero() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showFinal, setShowFinal] = useState(false);

  useEffect(() => {
    if (currentQuestionIndex < questions.length) {
      const timer = setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, currentQuestionIndex === 2 ? 4000 : 3500); // 3s hold + 0.5s in + 0.5s out for last question
      return () => clearTimeout(timer);
    } else {
      const finalTimer = setTimeout(() => {
        setShowFinal(true);
      }, 500); // After the last question fades out
      return () => clearTimeout(finalTimer);
    }
  }, [currentQuestionIndex]);

  return (
    <section 
      className="w-full bg-black min-h-screen flex items-center justify-center py-12 md:py-24 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 grid grid-cols-3 grid-rows-3 gap-1 opacity-20">
        {videoSources.map((src, index) => (
          <video
            key={index}
            src={src}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        ))}
      </div>
      <div 
        className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/80 to-black/60"
        style={{backgroundColor: 'rgba(10, 20, 40, 0.7)'}}
      />
      <div className="container relative px-4 md:px-6 z-20">
        <div className="flex flex-col justify-center items-center space-y-6 md:space-y-8 text-center min-h-[300px]">
          
          <AnimatePresence mode="wait">
            {!showFinal && currentQuestionIndex < questions.length && (
              <motion.h1
                key={currentQuestionIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white font-headline"
              >
                {questions[currentQuestionIndex]}
              </motion.h1>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showFinal && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.5 } }}
                className="space-y-6 md:space-y-8 flex flex-col items-center"
              >
                <TextEffect
                    as="h1"
                    per="word"
                    preset="slide"
                    trigger={showFinal}
                    className="text-5xl sm:text-6xl md:text-7xl font-bold text-white font-headline tracking-tighter"
                    delay={0}
                >
                    The <span className="text-glow text-primary">Unfair Advantage.</span><br/> Powered by AI.
                </TextEffect>

                <TextEffect
                    as="p"
                    per="word"
                    preset="slide"
                    trigger={showFinal}
                    className="max-w-[700px] text-base text-white/80 sm:text-lg md:text-xl"
                    delay={1.5}
                >
                    We generate high-performing ads, articles, and product visuals that help you scale faster than ever before.
                </TextEffect>
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 3.5 } }}>
                    <RainbowButton href="#services" className="h-12 px-8 text-base md:text-lg">
                      See How It Works
                    </RainbowButton>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

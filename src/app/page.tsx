
'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { ServiceShowcase } from "@/components/service-showcase";
import { Comparison } from "@/components/comparison";
import { Founder } from "@/components/founder";
import { Quotes } from "@/components/quotes";
import { Booking } from "@/components/booking";
import { Footer } from "@/components/footer";
import { OtherServices } from "@/components/other-services";
import { Audience } from "@/components/audience";
import { FAQ } from "@/components/faq";

export default function Home() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  const handleHeroAnimationComplete = () => {
    setIsHeaderVisible(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <AnimatePresence>
        {isHeaderVisible && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50"
          >
            <Header />
          </motion.div>
        )}
      </AnimatePresence>
      
      <main className="flex-1">
        <Hero onAnimationComplete={handleHeroAnimationComplete} />
        <div id="services" className="scroll-mt-24">
          <ServiceShowcase />
        </div>
        <OtherServices />
        <Process />
        <Audience />
        <Comparison />
        <Founder />
        <Quotes />
        <div id="booking" className="scroll-mt-24">
          <Booking />
        </div>
        <FAQ />
      </main>      
      <Footer />
    </div>
  );
}

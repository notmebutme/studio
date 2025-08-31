"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { TextEffect } from "./text-effect";

interface ScrollTriggeredTextProps {
  children: string;
  per?: 'word' | 'char' | 'line';
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  preset?: 'blur' | 'shake' | 'scale' | 'fade' | 'slide';
  delay?: number;
}

export function ScrollTriggeredText({ children, ...props }: ScrollTriggeredTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref}>
      <TextEffect trigger={isInView} {...props}>
        {children}
      </TextEffect>
    </div>
  );
}


"use client";

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '@/hooks/use-in-view';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
}

export function FadeIn({ children, className }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

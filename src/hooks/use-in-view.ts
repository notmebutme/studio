
"use client";

import { useState, useEffect, RefObject } from 'react';

export function useInView(ref: RefObject<Element>, options?: IntersectionObserverInit): boolean {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // Optional: Disconnect after first view to avoid re-triggering
          // observer.disconnect(); 
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return inView;
}

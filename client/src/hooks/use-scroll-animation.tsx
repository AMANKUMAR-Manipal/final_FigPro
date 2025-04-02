import { useEffect, useState, useRef } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  once?: boolean;
  rootMargin?: string;
}

export function useScrollAnimation({
  threshold = 0.1,
  once = true,
  rootMargin = "0px",
}: ScrollAnimationOptions = {}) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          // If once is true, disconnect the observer after the element comes into view
          if (once) observer.disconnect();
        } else if (!once) {
          setIsInView(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, [threshold, once, rootMargin]);

  return { ref, isInView };
}
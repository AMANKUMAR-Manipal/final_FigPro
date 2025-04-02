import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';

export type AnimationVariant = 
  | 'fadeIn' 
  | 'fadeInUp' 
  | 'fadeInDown' 
  | 'fadeInLeft' 
  | 'fadeInRight' 
  | 'zoomIn' 
  | 'staggered';

export interface ScrollAnimationProps {
  children: React.ReactNode;
  variant?: AnimationVariant;
  duration?: number;
  delay?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  staggerChildren?: number;
  staggerDelay?: number;
}

// Define animation variants with proper typing
const variants: Record<AnimationVariant, {
  hidden: any;
  visible: any;
}> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 }
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  },
  staggered: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }
};

export function ScrollAnimation({
  children,
  variant = 'fadeInUp',
  duration = 0.5,
  delay = 0,
  className = '',
  threshold = 0.1,
  rootMargin = '0px',
  staggerChildren = 0.1,
  staggerDelay = 0.1,
}: ScrollAnimationProps) {
  const { ref, isInView } = useScrollAnimation({ threshold, rootMargin });
  
  let containerVariants = variants[variant];
  
  if (variant === 'staggered') {
    containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
      }
    } as any; // Type assertion to avoid TypeScript errors with Framer Motion variants
  }

  return (
    <div ref={ref} className={className}>
      {variant === 'staggered' ? (
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delayChildren: delay,
                staggerChildren: staggerDelay,
              }
            }
          }}
        >
          {React.Children.map(children, (child, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: staggerChildren,
                  }
                }
              }}
            >
              {child}
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          transition={{ 
            duration, 
            delay,
            ease: "easeOut" 
          }}
        >
          {children}
        </motion.div>
      )}
    </div>
  );
}
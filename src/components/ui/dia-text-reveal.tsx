'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

type DiaTextRevealProps = {
  text: string | string[];
  className?: string;
  colors?: string[];
  repeat?: boolean;
  repeatDelay?: number;
};

export function DiaTextReveal({
  text,
  className,
  colors = ['#ffffff', '#facc15'],
  repeat = true,
  repeatDelay = 2,
}: DiaTextRevealProps) {
  const phrases = Array.isArray(text) ? text : [text];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!repeat || phrases.length <= 1) {
      return;
    }

    const timer = window.setInterval(() => {
      setActiveIndex(prev => (prev + 1) % phrases.length);
    }, repeatDelay * 1000);

    return () => window.clearInterval(timer);
  }, [phrases.length, repeat, repeatDelay]);

  const content = phrases[activeIndex] ?? phrases[0] ?? '';
  const words = content.split(' ');
  let charIndex = 0;

  return (
    <span className={cn('inline', className)}>
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap">
          {word.split('').map(character => {
            const color = colors[charIndex % colors.length] ?? colors[0];
            const currentIndex = charIndex;
            charIndex++;

            return (
              <motion.span
                key={`${wordIdx}-${currentIndex}`}
                initial={{ opacity: 0, y: 20, scale: 0.95, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.5, delay: currentIndex * 0.02, ease: 'easeOut' }}
                className="inline-block align-baseline"
                style={{ color }}
              >
                {character}
              </motion.span>
            );
          })}
          {wordIdx < words.length - 1 && <span className="inline-block w-[0.25em]" />}
        </span>
      ))}
    </span>
  );
}

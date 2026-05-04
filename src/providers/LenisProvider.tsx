'use client';

import Lenis from '@studio-freight/lenis';
import { createContext, useContext, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { getGSAP } from '@/lib/gsap';

const LenisContext = createContext<Lenis | null>(null);

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const reduceMotion = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    if (reduceMotion) {
      lenisRef.current?.destroy();
      lenisRef.current = null;
      return;
    }

    let active = true;
    let destroyer: (() => void) | undefined;

    const setup = async () => {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (value: number) => Math.min(1, 1.001 - 2 ** (-10 * value))
      });

      lenisRef.current = lenis;

      const { gsap, ScrollTrigger } = await getGSAP();
      if (!active) return;

      const raf = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
      lenis.on('scroll', ScrollTrigger.update);

      destroyer = () => {
        gsap.ticker.remove(raf);
        lenis.destroy();
        lenisRef.current = null;
      };
    };

    void setup();

    return () => {
      active = false;
      destroyer?.();
    };
  }, [reduceMotion]);

  return <LenisContext.Provider value={lenisRef.current}>{children}</LenisContext.Provider>;
}

export function useLenisContext(): Lenis | null {
  return useContext(LenisContext);
}

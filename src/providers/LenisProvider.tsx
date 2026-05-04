'use client';

import Lenis from '@studio-freight/lenis';
import { createContext, useContext, useMemo, useRef } from 'react';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { getScrollLibraries } from '@/lib/gsap';

const LenisContext = createContext<Lenis | null>(null);

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const reduced = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    if (reduced) return;
    let mounted = true;
    let detach: (() => void) | null = null;
    const setup = async () => {
      const lenis = new Lenis();
      lenisRef.current = lenis;
      const { gsap, ScrollTrigger } = await getScrollLibraries();
      if (!mounted) return;
      const ticker = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(ticker);
      gsap.ticker.lagSmoothing(0);
      lenis.on('scroll', ScrollTrigger.update);
      detach = () => {
        gsap.ticker.remove(ticker);
        lenis.destroy();
      };
    };
    void setup();
    return () => {
      mounted = false;
      if (detach) detach();
    };
  }, [reduced]);

  const value = useMemo(() => lenisRef.current, [lenisRef.current]);
  return <LenisContext.Provider value={value}>{children}</LenisContext.Provider>;
}

export function useLenisContext() {
  return useContext(LenisContext);
}

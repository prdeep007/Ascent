'use client';

import { useRef } from 'react';
import { TypeScale } from '@/components/primitives/TypeScale';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';
import { getGSAP } from '@/lib/gsap';

export function HeroTakeoverSection() {
  const rootRef = useRef<HTMLElement | null>(null);
  const reduced = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    if (reduced || !rootRef.current) return;

    let mounted = true;
    const setup = async () => {
      const { gsap, ScrollTrigger } = await getGSAP();
      if (!mounted || !rootRef.current) return;

      const foreground = rootRef.current.querySelector<HTMLElement>('[data-plane="foreground"]');
      const midground = rootRef.current.querySelector<HTMLElement>('[data-plane="midground"]');
      const background = rootRef.current.querySelector<HTMLElement>('[data-plane="background"]');

      if (!foreground || !midground || !background) return;

      gsap.to(foreground, { yPercent: 32, ease: 'none', scrollTrigger: { trigger: rootRef.current, start: 'top top', end: 'bottom top', scrub: true } });
      gsap.to(midground, { yPercent: 20, ease: 'none', scrollTrigger: { trigger: rootRef.current, start: 'top top', end: 'bottom top', scrub: true } });
      gsap.to(background, { yPercent: 8, ease: 'none', scrollTrigger: { trigger: rootRef.current, start: 'top top', end: 'bottom top', scrub: true } });
    };

    void setup();

    return () => {
      mounted = false;
    };
  }, [reduced]);

  return (
    <section ref={rootRef} style={{ minHeight: '80vh', position: 'relative', overflow: 'hidden' }}>
      <div data-plane='background' style={{ position: 'absolute', inset: 0, background: 'linear-gradient(var(--color-surface-2), var(--color-base))' }} />
      <div data-plane='midground' style={{ position: 'absolute', insetInline: 0, bottom: 0, height: '40vh', background: 'var(--color-ridge)', clipPath: 'polygon(0 65%, 20% 45%, 40% 70%, 60% 35%, 80% 60%, 100% 40%, 100% 100%, 0 100%)' }} />
      <div data-plane='foreground' style={{ position: 'absolute', insetInline: 0, bottom: 0, height: '24vh', background: 'var(--color-surface-1)', clipPath: 'polygon(0 80%, 15% 65%, 35% 85%, 55% 62%, 75% 78%, 100% 60%, 100% 100%, 0 100%)' }} />
      <div style={{ position: 'relative', zIndex: 1, padding: 'var(--space-24) var(--space-8)' }}>
        <TypeScale variant='hero' as='h1'>Ascend Beyond Routes</TypeScale>
        <TypeScale variant='body-lg' color='secondary'>Cinematic expedition planning for serious alpine travelers.</TypeScale>
      </div>
    </section>
  );
}

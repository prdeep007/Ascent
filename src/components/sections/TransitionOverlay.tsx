'use client';
import { AnimatePresence, m } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function TransitionOverlay() {
  const pathname = usePathname();
  return <AnimatePresence mode='wait'><m.div key={pathname} initial={{opacity:1}} animate={{opacity:0}} exit={{opacity:1}} transition={{duration:0.6}} style={{pointerEvents:'none',position:'fixed',inset:0,zIndex:400,background:'var(--color-base)'}} /></AnimatePresence>;
}

'use client';
import clsx from 'clsx';
import { m } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import type { ReactNode } from 'react';

export function CinematicButton({ variant, size, isLoading, disabled, icon, iconPosition = 'left', onClick, children }: {variant:'primary'|'ghost'|'danger';size:'sm'|'md'|'lg';isLoading?:boolean;disabled?:boolean;icon?:ReactNode;iconPosition?:'left'|'right';onClick?:()=>void;children:ReactNode;}) {
  const reduced = useReducedMotion();
  return <m.button whileTap={reduced ? undefined : { scale: 0.97 }} onClick={onClick} disabled={disabled || isLoading} className={clsx('cb', variant, size)}>{iconPosition==='left' && !isLoading && icon}<span>{children}</span>{isLoading ? <span>●</span> : iconPosition==='right' ? icon : null}<style jsx>{`.cb{border:1px solid var(--color-ridge);padding:var(--space-3) var(--space-4);}.primary{background:var(--color-accent)}.ghost{background:transparent}.danger{background:var(--color-danger)}`}</style></m.button>;
}

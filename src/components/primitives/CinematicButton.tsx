'use client';

import { m } from 'framer-motion';
import clsx from 'clsx';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import type { ReactNode } from 'react';

type Props = {
  variant: 'primary' | 'ghost' | 'danger';
  size: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  children: ReactNode;
};

export function CinematicButton({ variant, size, isLoading = false, disabled = false, icon, iconPosition = 'left', onClick, children }: Props) {
  const reduced = useReducedMotion();

  return (
    <m.button
      type='button'
      onClick={onClick}
      disabled={disabled || isLoading}
      whileTap={reduced ? undefined : { scale: 0.97 }}
      className={clsx('cinematic-button', `variant-${variant}`, `size-${size}`)}
    >
      {iconPosition === 'left' && !isLoading ? <span>{icon}</span> : null}
      <span>{children}</span>
      {isLoading ? <span aria-hidden='true'>●</span> : iconPosition === 'right' ? <span>{icon}</span> : null}
    </m.button>
  );
}

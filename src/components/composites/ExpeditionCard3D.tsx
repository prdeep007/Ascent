'use client';

import { m } from 'framer-motion';
import { TypeScale } from '@/components/primitives/TypeScale';
import type { ExpeditionSummary } from '@/types/expedition';

export function ExpeditionCard3D({ expedition, onSelect }: { expedition: ExpeditionSummary; variant: 'grid'|'featured'|'minimal'; onSelect: (id: string) => void; animationDelay?: number }) {
  return (
    <m.button
      type='button'
      onClick={() => onSelect(expedition.id)}
      whileHover={{ rotateX: 4, rotateY: 6, y: -4 }}
      style={{ transformStyle: 'preserve-3d', border: '1px solid var(--color-ridge)', background: 'var(--color-surface-1)', padding: 'var(--space-4)', textAlign: 'left' }}
    >
      <TypeScale variant='h2' as='h3'>{expedition.name}</TypeScale>
      <TypeScale variant='caption' color='secondary'>{expedition.duration} · {expedition.altitudeM}m</TypeScale>
    </m.button>
  );
}

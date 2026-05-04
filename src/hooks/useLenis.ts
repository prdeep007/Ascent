'use client';

import type Lenis from '@studio-freight/lenis';
import { useLenisContext } from '@/providers/LenisProvider';

export function useLenis(): Lenis | null {
  return useLenisContext();
}

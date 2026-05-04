'use client';
import { useLenisContext } from '@/providers/LenisProvider';

export function useLenis() {
  const lenis = useLenisContext();
  return lenis;
}

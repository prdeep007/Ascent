'use client';

import { CinematicButton } from '@/components/primitives/CinematicButton';
import type { FilterFacets, FilterState } from '@/types/expedition';

export function FilterRail({ facets, activeFilters, onChange, resultCount }: { facets: FilterFacets; activeFilters: FilterState; onChange: (filters: FilterState) => void; isLoading?: boolean; resultCount: number }) {
  return (
    <aside>
      <p>{resultCount} expeditions</p>
      <CinematicButton variant='ghost' size='sm' onClick={() => onChange({ ...activeFilters, difficulty: facets.difficulty.slice(0, 2) })}>Quick difficulty</CinematicButton>
    </aside>
  );
}

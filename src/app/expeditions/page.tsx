'use client';

import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ExpeditionCard3D } from '@/components/composites/ExpeditionCard3D';
import { FilterRail } from '@/components/composites/FilterRail';
import { CinematicButton } from '@/components/primitives/CinematicButton';
import type { ExpeditionSummary, FilterState } from '@/types/expedition';

export default function ExpeditionsPage() {
  const [filters, setFilters] = useState<FilterState>({});
  const { data, error, isFetching } = useQuery<ExpeditionSummary[]>({
    queryKey: ['expeditions'],
    queryFn: async () => {
      const response = await fetch('/api/expeditions');
      if (!response.ok) throw new Error('Failed to load expeditions');
      return response.json();
    }
  });

  const list = data ?? [];
  const filtered = useMemo(() => list.filter((item) => !filters.difficulty || filters.difficulty.includes(item.difficulty)), [list, filters]);

  return (
    <section>
      <FilterRail facets={{ difficulty: [1, 2, 3, 4, 5], duration: [7, 18], season: ['Spring', 'Summer', 'Autumn'], altitude: [3000, 6000], priceRange: [1000, 4000] }} activeFilters={filters} onChange={setFilters} isLoading={isFetching} resultCount={filtered.length} />
      {error ? <p>Couldn&apos;t refresh results — showing last known expeditions.</p> : null}
      {filtered.length === 0 ? (
        <div>
          <p>No expeditions match those exact conditions. The mountains have their own timing.</p>
          <CinematicButton variant='primary' size='md' onClick={() => setFilters({})}>Clear filters</CinematicButton>
        </div>
      ) : (
        filtered.map((item) => <ExpeditionCard3D key={item.id} expedition={item} variant='grid' onSelect={() => undefined} />)
      )}
    </section>
  );
}

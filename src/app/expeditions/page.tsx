'use client';

import { useMemo, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ExpeditionCard3D } from '@/components/composites/ExpeditionCard3D';
import { FilterRail } from '@/components/composites/FilterRail';
import type { ExpeditionSummary, FilterState } from '@/types/expedition';

export default function ExpeditionsPage() {
  const [filters, setFilters] = useState<FilterState>({});
  const { data = [] } = useQuery<ExpeditionSummary[]>({ queryKey: ['expeditions'], queryFn: async () => (await fetch('/api/expeditions')).json() });

  const filtered = useMemo(() => data.filter((item) => !filters.difficulty || filters.difficulty.includes(item.difficulty)), [data, filters]);

  return (
    <section>
      <FilterRail facets={{ difficulty: [1,2,3,4,5], duration: [7, 18], season: ['Spring','Summer','Autumn'], altitude: [3000, 6000], priceRange: [1000, 4000] }} activeFilters={filters} onChange={setFilters} resultCount={filtered.length} />
      {filtered.map((item) => <ExpeditionCard3D key={item.id} expedition={item} variant='grid' onSelect={() => undefined} />)}
    </section>
  );
}

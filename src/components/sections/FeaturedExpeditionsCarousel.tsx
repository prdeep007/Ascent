'use client';

import { useQuery } from '@tanstack/react-query';
import { ExpeditionCard3D } from '@/components/composites/ExpeditionCard3D';
import type { ExpeditionSummary } from '@/types/expedition';

export function FeaturedExpeditionsCarousel() {
  const { data } = useQuery<ExpeditionSummary[]>({
    queryKey: ['expeditions'],
    queryFn: async () => {
      const response = await fetch('/api/expeditions');
      return response.json();
    }
  });

  return <section>{(data ?? []).map((item) => <ExpeditionCard3D key={item.id} expedition={item} variant='featured' onSelect={() => undefined} />)}</section>;
}

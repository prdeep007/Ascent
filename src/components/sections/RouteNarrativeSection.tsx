'use client';

import { useState } from 'react';
import { ItineraryChapter } from '@/components/composites/ItineraryChapter';
import type { ItineraryDay } from '@/types/expedition';

export function RouteNarrativeSection({ itinerary }: { itinerary: ItineraryDay[] }) {
  const [active, setActive] = useState(0);

  return (
    <section>
      {itinerary.map((chapter, index) => (
        <button key={chapter.day} type='button' onClick={() => setActive(index)} style={{ all: 'unset', display: 'block', cursor: 'pointer' }}>
          <ItineraryChapter chapter={chapter} isActive={index === active} />
        </button>
      ))}
    </section>
  );
}

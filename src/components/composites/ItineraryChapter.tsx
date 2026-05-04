import { TypeScale } from '@/components/primitives/TypeScale';
import type { ItineraryDay } from '@/types/expedition';

export function ItineraryChapter({ chapter, isActive }: { chapter: ItineraryDay; isActive: boolean; onActivate?: () => void }) {
  return (
    <section style={{ opacity: isActive ? 1 : 0.65 }}>
      <TypeScale variant='h2' as='h2'>{chapter.title}</TypeScale>
      <TypeScale variant='body'>{chapter.description}</TypeScale>
      <TypeScale variant='caption'>{chapter.distanceKm} km · {chapter.altitudeM}m</TypeScale>
    </section>
  );
}

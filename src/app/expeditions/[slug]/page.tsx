import { notFound } from 'next/navigation';
import { expeditionDetail } from '@/lib/expeditions';
import { TypeScale } from '@/components/primitives/TypeScale';

export default function ExpeditionDetailPage({ params }: { params: { slug: string } }) {
  const detail = expeditionDetail(params.slug);
  if (!detail) notFound();

  return (
    <article>
      <TypeScale variant='display' as='h1'>{detail.name}</TypeScale>
      <TypeScale variant='body'>{detail.description}</TypeScale>
      {detail.itinerary.map((day) => <section key={day.day}><TypeScale variant='h2' as='h2'>{day.title}</TypeScale><TypeScale variant='caption'>{day.distanceKm} km</TypeScale></section>)}
    </article>
  );
}

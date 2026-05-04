import { notFound } from 'next/navigation';
import { expeditionDetail } from '@/lib/expeditions';
import { TypeScale } from '@/components/primitives/TypeScale';
import { CinematicButton } from '@/components/primitives/CinematicButton';
import { RouteNarrativeSection } from '@/components/sections/RouteNarrativeSection';

export default function ExpeditionDetailPage({ params }: { params: { slug: string } }) {
  const detail = expeditionDetail(params.slug);
  if (!detail) notFound();

  const availabilityAvailable = detail.seatsLeft > 0;

  return (
    <article>
      <TypeScale variant='display' as='h1'>{detail.name}</TypeScale>
      <TypeScale variant='body'>{detail.description}</TypeScale>
      <RouteNarrativeSection itinerary={detail.itinerary} />
      <div>
        <CinematicButton variant={availabilityAvailable ? 'primary' : 'ghost'} size='md' disabled={!availabilityAvailable}>Reserve a Spot</CinematicButton>
        {!availabilityAvailable ? <p>Live availability temporarily unavailable — contact us to hold a spot.</p> : null}
      </div>
    </article>
  );
}

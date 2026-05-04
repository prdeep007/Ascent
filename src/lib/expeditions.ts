import type { ExpeditionDetail, ExpeditionSummary } from '@/types/expedition';

export const expeditions: ExpeditionSummary[] = [
  { id: '1', slug: 'everest-base-camp', name: 'Everest Base Camp', heroImage: 'https://res.cloudinary.com/demo/image/upload/sample.jpg', duration: '14 days', altitudeM: 5364, difficulty: 4, priceUSD: 2890, seatsLeft: 4, season: 'Spring', tags: ['iconic', 'teahouse'] },
  { id: '2', slug: 'annapurna-circuit', name: 'Annapurna Circuit', heroImage: 'https://res.cloudinary.com/demo/image/upload/sample.jpg', duration: '12 days', altitudeM: 5416, difficulty: 4, priceUSD: 2450, seatsLeft: 7, season: 'Autumn', tags: ['circuit'] },
  { id: '3', slug: 'manaslu-circuit', name: 'Manaslu Circuit', heroImage: 'https://res.cloudinary.com/demo/image/upload/sample.jpg', duration: '15 days', altitudeM: 5106, difficulty: 5, priceUSD: 3150, seatsLeft: 5, season: 'Autumn', tags: ['remote'] },
  { id: '4', slug: 'langtang-valley', name: 'Langtang Valley', heroImage: 'https://res.cloudinary.com/demo/image/upload/sample.jpg', duration: '9 days', altitudeM: 3870, difficulty: 3, priceUSD: 1790, seatsLeft: 10, season: 'Spring', tags: ['forest'] },
  { id: '5', slug: 'upper-mustang', name: 'Upper Mustang', heroImage: 'https://res.cloudinary.com/demo/image/upload/sample.jpg', duration: '11 days', altitudeM: 4100, difficulty: 3, priceUSD: 2290, seatsLeft: 6, season: 'Summer', tags: ['desert'] },
  { id: '6', slug: 'kanchenjunga-base-camp', name: 'Kanchenjunga Base Camp', heroImage: 'https://res.cloudinary.com/demo/image/upload/sample.jpg', duration: '18 days', altitudeM: 5143, difficulty: 5, priceUSD: 3590, seatsLeft: 3, season: 'Spring', tags: ['expedition'] }
];

export function expeditionDetail(slug: string): ExpeditionDetail | null {
  const base = expeditions.find((item) => item.slug === slug);
  if (!base) return null;
  return {
    ...base,
    description: `${base.name} delivers cinematic ridgelines and cultural immersion.`,
    itinerary: Array.from({ length: 5 }, (_, index) => ({ day: index + 1, title: `Day ${index + 1}`, description: 'Approach, acclimatize, and push through varied terrain.', altitudeM: base.altitudeM - (500 * (4 - index)), distanceKm: 10 + index * 2, media: [], waypoint: { lat: 27.7 + index * 0.05, lng: 85.3 + index * 0.05 } })),
    guides: [{ id: 'g1', name: 'Nima Sherpa', role: 'Lead Guide', bio: '20 years Himalayan guiding experience.', photoUrl: base.heroImage, expeditionsLed: 48 }],
    gallery: [],
    faq: [{ question: 'Do I need prior trekking experience?', answer: 'Recommended for difficulty 4 and 5 routes.' }],
    inclusions: ['Guide team', 'Permits', 'Lodging'],
    exclusions: ['International flights', 'Personal gear'],
    mapCoordinates: [{ lat: 27.7, lng: 85.3 }]
  };
}

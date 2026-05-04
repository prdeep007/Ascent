export interface ExpeditionSummary {
  id: string;
  slug: string;
  name: string;
  heroImage: string;
  duration: string;
  altitudeM: number;
  difficulty: 1 | 2 | 3 | 4 | 5;
  priceUSD: number;
  seatsLeft: number;
  season: string;
  tags: string[];
}

export interface LatLng { lat: number; lng: number; }
export interface MediaItem { id: string; url: string; alt: string; type: 'image'|'video'; credit: string; expeditionSlug: string; }
export interface GuideProfile { id: string; name: string; role: string; bio: string; photoUrl: string; expeditionsLed: number; }
export interface FAQItem { question: string; answer: string; }
export interface ItineraryDay { day: number; title: string; description: string; altitudeM: number; distanceKm: number; media: MediaItem[]; waypoint: LatLng; }

export interface ExpeditionDetail extends ExpeditionSummary {
  description: string;
  itinerary: ItineraryDay[];
  guides: GuideProfile[];
  gallery: MediaItem[];
  faq: FAQItem[];
  inclusions: string[];
  exclusions: string[];
  mapCoordinates: LatLng[];
}

export interface FilterFacets {
  difficulty: number[];
  duration: [number, number];
  season: string[];
  altitude: [number, number];
  priceRange: [number, number];
}

export interface FilterState {
  difficulty?: number[];
  durationRange?: [number, number];
  season?: string[];
  altitudeRange?: [number, number];
  priceRange?: [number, number];
}

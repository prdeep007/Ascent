'use client';

import { TypeScale } from '@/components/primitives/TypeScale';

export function HeroTakeoverSection() {
  return (
    <section>
      <TypeScale variant='hero' as='h1'>Ascend Beyond Routes</TypeScale>
      <TypeScale variant='body-lg' color='secondary'>Cinematic expedition planning for serious alpine travelers.</TypeScale>
    </section>
  );
}

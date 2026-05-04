import { NextResponse } from 'next/server';
import { expeditionDetail } from '@/lib/expeditions';

export async function GET(_: Request, { params }: { params: { slug: string } }) {
  const detail = expeditionDetail(params.slug);
  if (!detail) return NextResponse.json({ message: 'Not found' }, { status: 404 });
  return NextResponse.json(detail);
}

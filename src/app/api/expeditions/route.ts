import { NextResponse } from 'next/server';
import { expeditions } from '@/lib/expeditions';

export async function GET() {
  return NextResponse.json(expeditions);
}

'use client';
import { m } from 'framer-motion';
import { useReducedMotion } from '@/hooks/useReducedMotion';

export function MotionReveal({ animation, delay=0, children, disabled }: {animation:'fade-up'|'fade-in'|'slide-left'|'slide-right'|'scale-in';delay?:number;threshold?:number;once?:boolean;disabled?:boolean;children:React.ReactNode;}) { const reduced=useReducedMotion(); const d=disabled||reduced; const initial = animation==='fade-up'?{opacity:0,y:24}:animation==='slide-left'?{opacity:0,x:24}:animation==='slide-right'?{opacity:0,x:-24}:animation==='scale-in'?{opacity:0,scale:0.95}:{opacity:0}; return <m.div initial={d?false:initial} whileInView={d?undefined:{opacity:1,x:0,y:0,scale:1}} transition={{duration:0.35,delay:delay/1000}}>{children}</m.div>; }

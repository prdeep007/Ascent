import gsap from 'gsap';

export async function getScrollLibraries() {
  const { default: ScrollTrigger } = await import('gsap/ScrollTrigger');
  const { default: DrawSVGPlugin } = await import('gsap/DrawSVGPlugin');
  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
  return { gsap, ScrollTrigger, DrawSVGPlugin };
}

export { gsap };

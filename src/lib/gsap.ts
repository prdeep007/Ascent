import gsap from 'gsap';

let registered = false;

export async function getGSAP() {
  const { default: ScrollTrigger } = await import('gsap/ScrollTrigger');
  const { default: DrawSVGPlugin } = await import('gsap/DrawSVGPlugin');

  if (!registered) {
    gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin);
    registered = true;
  }

  return { gsap, ScrollTrigger, DrawSVGPlugin };
}

export { gsap };

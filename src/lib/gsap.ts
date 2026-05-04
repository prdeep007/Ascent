import gsap from 'gsap';

let registered = false;

export async function getGSAP() {
  const { default: ScrollTrigger } = await import('gsap/ScrollTrigger');

  if (!registered) {
    gsap.registerPlugin(ScrollTrigger);
    registered = true;
  }

  return { gsap, ScrollTrigger };
}

export { gsap };

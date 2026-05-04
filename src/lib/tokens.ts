export const TOKENS = {
  duration: { instant: 80, micro: 150, fast: 220, standard: 350, page: 600, cinematic: 1200 },
  easing: {
    outExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
    inExpo: 'cubic-bezier(0.7, 0, 0.84, 0)',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    linear: 'linear',
    smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  }
} as const;

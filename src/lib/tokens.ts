export const COLORS = {
  base: '#0A0C0F',
  surface1: '#111417',
  surface2: '#1A1D22',
  ridge: '#232830',
  accent: '#E8621A',
  accentDim: '#7A3510',
  textPrimary: '#F0EDE8',
  textSecondary: '#8C8880',
  textDisabled: '#4A4845',
  glacier: '#B8D4DC',
  danger: '#C0392B',
  warning: '#D4851A',
  success: '#2E7D52'
} as const;

export const DURATIONS = {
  instant: 80,
  micro: 150,
  fast: 220,
  standard: 350,
  page: 600,
  cinematic: 1200
} as const;

export const EASING = {
  outExpo: 'cubic-bezier(0.16, 1, 0.3, 1)',
  inExpo: 'cubic-bezier(0.7, 0, 0.84, 0)',
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  linear: 'linear',
  smooth: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
} as const;

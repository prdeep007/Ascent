import type { CSSProperties, JSX, ReactNode } from 'react';

type TypeVariant = 'hero' | 'display' | 'h1' | 'h2' | 'label' | 'body-lg' | 'body' | 'caption';

const variantStyles: Record<TypeVariant, CSSProperties> = {
  hero: { fontSize: 'var(--text-hero)', lineHeight: 0.92, letterSpacing: '-0.03em' },
  display: { fontSize: 'var(--text-display)', lineHeight: 1, letterSpacing: '-0.02em' },
  h1: { fontSize: 'var(--text-heading-1)', lineHeight: 1.1, letterSpacing: '-0.015em' },
  h2: { fontSize: 'var(--text-heading-2)', lineHeight: 1.2, letterSpacing: '-0.01em' },
  label: { fontSize: 'var(--text-label)', lineHeight: 1, letterSpacing: '0.12em' },
  'body-lg': { fontSize: 'var(--text-body-lg)', lineHeight: 1.65 },
  body: { fontSize: 'var(--text-body)', lineHeight: 1.6 },
  caption: { fontSize: 'var(--text-caption)', lineHeight: 1.5 }
};

export function TypeScale({ variant, as: Tag = 'p', uppercase, color = 'primary', children }: { variant: TypeVariant; as?: keyof JSX.IntrinsicElements; uppercase?: boolean; color?: 'primary' | 'secondary' | 'accent' | 'disabled'; children: ReactNode }) {
  const colorMap = {
    primary: 'var(--color-text-primary)',
    secondary: 'var(--color-text-secondary)',
    accent: 'var(--color-accent)',
    disabled: 'var(--color-text-disabled)'
  } as const;

  return (
    <Tag
      style={{
        ...variantStyles[variant],
        color: colorMap[color],
        textTransform: uppercase ? 'uppercase' : 'none',
        fontFamily: variant === 'hero' || variant === 'display' || variant === 'h1' || variant === 'h2' ? 'var(--font-display)' : 'var(--font-body)'
      }}
    >
      {children}
    </Tag>
  );
}

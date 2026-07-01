import type { ReactNode } from 'react';

interface PageHeroProps {
  image: string;
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  heightVh: number;
  minHeight: number;
  bgPosition?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

export default function PageHero({
  image,
  eyebrow,
  title,
  subtitle,
  heightVh,
  minHeight,
  bgPosition = 'center',
  gradientFrom = 'rgba(58,42,30,0.6)',
  gradientTo = 'rgba(58,42,30,0.45)',
}: PageHeroProps) {
  return (
    <section
      style={{
        paddingTop: 'var(--nav-height)',
        position: 'relative',
        height: `${heightVh}vh`,
        minHeight,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('${image}')`,
          backgroundSize: 'cover',
          backgroundPosition: bgPosition,
        }}
      />
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, ${gradientFrom} 0%, ${gradientTo} 100%)` }} />
      <div className="container" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(251,246,236,0.7)', marginBottom: 20 }}>
          {eyebrow}
        </p>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,4vw,56px)', color: 'var(--color-shell)', lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: subtitle ? 24 : 0 }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(15px,1.4vw,19px)', color: 'rgba(251,246,236,0.8)', maxWidth: 560, lineHeight: 1.7 }}>{subtitle}</p>
        )}
      </div>
    </section>
  );
}

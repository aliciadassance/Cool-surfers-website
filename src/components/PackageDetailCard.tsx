import type { ReactNode } from 'react';
import Button from './Button';
import CheckList from './CheckList';

interface PackageDetailCardProps {
  image: string;
  tagLabel?: string;
  tagBg?: string;
  title: string;
  subtitle: string;
  price: ReactNode;
  priceSub: ReactNode;
  includedItems: string[];
  ctaHref: string;
  ctaVariant: 'dark' | 'primary' | 'coral';
  highlighted?: boolean;
}

export default function PackageDetailCard({
  image,
  tagLabel,
  tagBg = 'rgba(58,42,30,0.85)',
  title,
  subtitle,
  price,
  priceSub,
  includedItems,
  ctaHref,
  ctaVariant,
  highlighted,
}: PackageDetailCardProps) {
  const bg = highlighted ? 'var(--color-bark)' : 'var(--color-shell)';
  const titleColor = highlighted ? 'var(--color-shell)' : 'var(--color-bark)';
  const subtitleColor = highlighted ? 'rgba(251,246,236,0.55)' : 'var(--color-husk)';
  const priceLabelColor = highlighted ? 'rgba(251,246,236,0.5)' : 'var(--color-husk)';
  const includedBg = highlighted ? 'rgba(251,246,236,0.08)' : 'var(--color-coconut)';
  const includedLabelColor = highlighted ? 'rgba(251,246,236,0.4)' : 'var(--color-husk)';
  const includedTextColor = highlighted ? 'rgba(251,246,236,0.8)' : 'var(--color-bark)';

  return (
    <div
      style={{
        border: highlighted ? '2px solid var(--color-lime)' : '1.5px solid rgba(58,42,30,0.1)',
        borderRadius: 28,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        background: bg,
        position: 'relative',
      }}
    >
      {highlighted && (
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, background: 'var(--color-lime)', textAlign: 'center', padding: '6px 0', zIndex: 3 }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-bark)' }}>
            ⭐ Most Popular
          </span>
        </div>
      )}
      <div style={{ position: 'relative', height: 220, overflow: 'hidden', marginTop: highlighted ? 32 : 0 }} className={highlighted ? '' : 'img-hover-zoom'}>
        <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        {tagLabel && (
          <div style={{ position: 'absolute', top: 16, left: 16, background: tagBg, borderRadius: 100, padding: '5px 14px', backdropFilter: 'blur(4px)' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-shell)' }}>
              {tagLabel}
            </span>
          </div>
        )}
      </div>
      <div style={{ padding: 32, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700, color: titleColor, marginBottom: 4 }}>{title}</h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: subtitleColor, marginBottom: 20 }}>{subtitle}</p>
        <div style={{ marginBottom: 24 }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: priceLabelColor, marginBottom: 4 }}>From</p>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 40, color: titleColor, lineHeight: 1, letterSpacing: '-0.02em' }}>{price}</p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: priceLabelColor, marginTop: 4 }}>{priceSub}</p>
        </div>
        <div style={{ background: includedBg, borderRadius: 16, padding: 20, marginBottom: 24 }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: includedLabelColor, marginBottom: 14 }}>
            What's included
          </p>
          <CheckList items={includedItems} textColor={includedTextColor} fontSize={13} size={16} gap={10} />
        </div>
        <Button href={ctaHref} variant={ctaVariant} size="lg" block style={{ marginTop: 'auto' }}>
          Book This Stay →
        </Button>
      </div>
    </div>
  );
}

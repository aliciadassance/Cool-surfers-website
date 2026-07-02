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

  const badge = highlighted
    ? { label: '⭐ Most Popular', bg: 'var(--color-lime)', color: 'var(--color-bark)' }
    : tagLabel
    ? { label: tagLabel, bg: tagBg, color: 'var(--color-shell)' }
    : null;

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
      <div style={{ position: 'relative', height: 220, overflow: 'hidden' }} className={highlighted ? '' : 'img-hover-zoom'}>
        <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        {badge && (
          <div style={{ position: 'absolute', top: 14, left: 14, background: badge.bg, borderRadius: 100, padding: '4px 12px', boxShadow: '0 2px 8px rgba(0,0,0,0.18)', backdropFilter: 'blur(4px)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 10.5, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: badge.color, whiteSpace: 'nowrap', textAlign: 'center', lineHeight: 1 }}>
              {badge.label}
            </span>
          </div>
        )}
      </div>
      <div style={{ padding: 32, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, fontWeight: 700, color: titleColor, marginBottom: 4 }}>{title}</h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: subtitleColor, marginBottom: 20 }}>{subtitle}</p>
        <div style={{ marginBottom: 24 }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: priceLabelColor, marginBottom: 8 }}>From</p>
          <p style={{ fontFamily: 'var(--font-display)', fontSize: 32, color: titleColor, lineHeight: 1.2, letterSpacing: '-0.02em' }}>{price}</p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: priceLabelColor, marginTop: 6 }}>{priceSub}</p>
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

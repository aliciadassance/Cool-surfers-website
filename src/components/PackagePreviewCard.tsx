import Button from './Button';
import CheckList from './CheckList';

interface PackagePreviewCardProps {
  image: string;
  category: string;
  categoryColor: string;
  title: string;
  price: string;
  priceSub: string;
  features: string[];
  ctaHref: string;
  ctaVariant: 'dark' | 'primary' | 'coral';
  highlighted?: boolean;
}

export default function PackagePreviewCard({
  image,
  category,
  categoryColor,
  title,
  price,
  priceSub,
  features,
  ctaHref,
  ctaVariant,
  highlighted,
}: PackagePreviewCardProps) {
  const bg = highlighted ? 'var(--color-bark)' : 'var(--color-shell)';
  const titleColor = highlighted ? 'var(--color-shell)' : 'var(--color-bark)';
  const priceColor = highlighted ? 'var(--color-shell)' : 'var(--color-bark)';
  const priceSubColor = highlighted ? 'rgba(251,246,236,0.5)' : 'var(--color-husk)';
  const featureColor = highlighted ? 'rgba(251,246,236,0.7)' : 'rgba(58,42,30,0.75)';

  return (
    <div style={{ background: bg, borderRadius: 24, overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      {highlighted && (
        <div
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            zIndex: 2,
            background: 'var(--color-lime)',
            color: 'var(--color-bark)',
            fontFamily: 'var(--font-body)',
            fontSize: 11,
            fontWeight: 700,
            padding: '5px 12px',
            borderRadius: 100,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}
        >
          Most Popular
        </div>
      )}
      <div className="img-hover-zoom" style={{ height: 200, overflow: 'hidden' }}>
        <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ padding: 28, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: categoryColor, marginBottom: 8 }}>
          {category}
        </p>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, color: titleColor, marginBottom: 4 }}>{title}</h3>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 30, color: priceColor, margin: '8px 0 4px' }}>{price}</p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: priceSubColor, marginBottom: 20 }}>{priceSub}</p>
        <div style={{ marginBottom: 24 }}>
          <CheckList items={features} textColor={featureColor} fontSize={13} size={15} />
        </div>
        <Button href={ctaHref} variant={ctaVariant} size="card" block>
          Book This →
        </Button>
      </div>
    </div>
  );
}

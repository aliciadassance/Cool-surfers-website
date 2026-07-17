import Button from './Button';
import CheckList from './CheckList';

interface RoomCardProps {
  image: string;
  tagLabel?: string;
  tagBg?: string;
  tagColor?: string;
  title: string;
  description: string;
  features: string[];
  ctaHref: string;
  dark?: boolean;
}

export default function RoomCard({ image, tagLabel, tagBg = 'var(--color-husk)', tagColor = 'var(--color-shell)', title, description, features, ctaHref, dark }: RoomCardProps) {
  const bg = dark ? 'var(--color-bark)' : 'var(--color-shell)';
  const titleColor = dark ? 'var(--color-shell)' : 'var(--color-bark)';
  const descColor = dark ? 'rgba(251,246,236,0.55)' : 'var(--color-husk)';
  const featureColor = dark ? 'rgba(251,246,236,0.7)' : 'rgba(58,42,30,0.75)';
  const dividerColor = dark ? 'rgba(251,246,236,0.1)' : 'rgba(58,42,30,0.08)';

  return (
    <div style={{ background: bg, borderRadius: 24, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      <div className="img-hover-zoom" style={{ height: 240, overflow: 'hidden', position: 'relative' }}>
        <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        {tagLabel && (
          <div style={{ position: 'absolute', bottom: 16, left: 16, background: tagBg, borderRadius: 100, padding: '5px 14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: tagColor, textAlign: 'center', lineHeight: 1 }}>{tagLabel}</span>
          </div>
        )}
      </div>
      <div style={{ padding: 28, flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, color: titleColor, marginBottom: 8 }}>{title}</h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: descColor, marginBottom: 20, lineHeight: 1.5 }}>{description}</p>
        <div style={{ marginBottom: 24 }}>
          <CheckList items={features} textColor={featureColor} fontSize={13} size={14} />
        </div>
        <div style={{ marginTop: 'auto', borderTop: `1px solid ${dividerColor}`, paddingTop: 20, display: 'flex', justifyContent: 'flex-end' }}>
          <Button href={ctaHref} variant={dark ? 'primary' : 'dark'} size="sm">
            Select your package →
          </Button>
        </div>
      </div>
    </div>
  );
}

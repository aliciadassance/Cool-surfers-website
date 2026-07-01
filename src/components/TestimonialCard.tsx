import { IconStarFilled } from '@tabler/icons-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  location: string;
  avatarBg: string;
  avatarInitial: string;
  avatarTextColor?: string;
}

export default function TestimonialCard({ quote, name, location, avatarBg, avatarInitial, avatarTextColor = 'var(--color-shell)' }: TestimonialCardProps) {
  return (
    <div style={{ background: '#FFFFFF', borderRadius: 20, padding: 32, boxShadow: '0 2px 24px rgba(58,42,30,0.07)' }}>
      <div style={{ display: 'flex', gap: 3, marginBottom: 20 }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <IconStarFilled key={i} size={16} color="var(--color-coral)" />
        ))}
      </div>
      <p style={{ fontFamily: 'var(--font-heading)', fontSize: 16, color: 'var(--color-bark)', lineHeight: 1.7, marginBottom: 24, fontStyle: 'italic' }}>
        "{quote}"
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{ width: 40, height: 40, borderRadius: '50%', background: avatarBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <span style={{ fontFamily: 'var(--font-heading)', fontSize: 15, fontWeight: 700, color: avatarTextColor }}>{avatarInitial}</span>
        </div>
        <div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--color-bark)' }}>{name}</p>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--color-husk)' }}>{location}</p>
        </div>
      </div>
    </div>
  );
}

export type ScheduleTone = 'light' | 'dark' | 'husk' | 'coral';

interface ScheduleItemProps {
  time: string;
  title: string;
  desc: string;
  tone: ScheduleTone;
}

const TONE_STYLES: Record<ScheduleTone, { bg: string; time: string; title: string; desc: string }> = {
  light: { bg: 'var(--color-coconut)', time: 'var(--color-husk)', title: 'var(--color-bark)', desc: 'rgba(58,42,30,0.6)' },
  dark: { bg: 'var(--color-bark)', time: 'var(--color-lime)', title: 'var(--color-shell)', desc: 'rgba(251,246,236,0.6)' },
  husk: { bg: 'var(--color-husk)', time: 'var(--color-shell)', title: 'var(--color-shell)', desc: 'rgba(251,246,236,0.75)' },
  coral: { bg: 'var(--color-coral)', time: 'var(--color-shell)', title: 'var(--color-shell)', desc: 'rgba(251,246,236,0.8)' },
};

export default function ScheduleItem({ time, title, desc, tone }: ScheduleItemProps) {
  const t = TONE_STYLES[tone];
  return (
    <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '16px 20px', borderRadius: 14, background: t.bg }}>
      <span style={{ fontFamily: 'var(--font-heading)', fontSize: 14, fontWeight: 700, color: t.time, minWidth: 52 }}>{time}</span>
      <div>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, color: t.title }}>{title}</p>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: t.desc }}>{desc}</p>
      </div>
    </div>
  );
}

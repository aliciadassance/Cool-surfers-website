import type { CSSProperties, ReactNode } from 'react';

interface DotPillProps {
  variant: 'dot-pill';
  background?: string;
  textColor?: string;
  dotColor?: string;
  children: ReactNode;
  style?: CSSProperties;
}

interface TagProps {
  variant: 'tag';
  background?: string;
  textColor?: string;
  blur?: boolean;
  children: ReactNode;
  style?: CSSProperties;
}

type BadgeProps = DotPillProps | TagProps;

export default function Badge(props: BadgeProps) {
  if (props.variant === 'dot-pill') {
    const { background = 'var(--color-lime)', textColor = 'var(--color-bark)', dotColor = 'var(--color-bark)', children, style } = props;
    return (
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          background,
          borderRadius: 100,
          padding: '7px 16px',
          width: 'fit-content',
          ...style,
        }}
      >
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: dotColor, flexShrink: 0, display: 'block' }} />
        <span style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, color: textColor, letterSpacing: '0.04em' }}>
          {children}
        </span>
      </div>
    );
  }

  const { background = 'rgba(58,42,30,0.85)', textColor = 'var(--color-shell)', blur, children, style } = props;
  return (
    <span
      style={{
        display: 'inline-block',
        background,
        borderRadius: 100,
        padding: '5px 14px',
        fontFamily: 'var(--font-body)',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: textColor,
        backdropFilter: blur ? 'blur(4px)' : undefined,
        ...style,
      }}
    >
      {children}
    </span>
  );
}

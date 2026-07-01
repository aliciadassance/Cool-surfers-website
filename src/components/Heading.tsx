import type { CSSProperties, ElementType, ReactNode } from 'react';
import { fonts } from '../styles/theme';

interface HeadingProps {
  as?: ElementType;
  font?: 'display' | 'heading';
  size: string;
  weight?: number;
  color?: string;
  lineHeight?: string | number;
  letterSpacing?: string;
  maxWidth?: string | number;
  align?: CSSProperties['textAlign'];
  style?: CSSProperties;
  className?: string;
  children: ReactNode;
}

export default function Heading({
  as: Tag = 'h2',
  font = 'heading',
  size,
  weight,
  color = 'var(--color-bark)',
  lineHeight,
  letterSpacing,
  maxWidth,
  align,
  style,
  className,
  children,
}: HeadingProps) {
  return (
    <Tag
      className={className}
      style={{
        fontFamily: fonts[font],
        fontSize: size,
        fontWeight: weight ?? (font === 'heading' ? 700 : 400),
        color,
        lineHeight,
        letterSpacing,
        maxWidth,
        textAlign: align,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

import type { CSSProperties, ElementType, ReactNode } from 'react';
import { fonts } from '../styles/theme';

interface TextProps {
  as?: ElementType;
  font?: 'body' | 'heading' | 'display';
  size?: string | number;
  weight?: number;
  color?: string;
  opacity?: number;
  lineHeight?: string | number;
  letterSpacing?: string;
  uppercase?: boolean;
  italic?: boolean;
  maxWidth?: string | number;
  align?: CSSProperties['textAlign'];
  style?: CSSProperties;
  className?: string;
  children: ReactNode;
}

export default function Text({
  as: Tag = 'p',
  font = 'body',
  size = 15,
  weight,
  color = 'var(--color-bark)',
  opacity,
  lineHeight,
  letterSpacing,
  uppercase,
  italic,
  maxWidth,
  align,
  style,
  className,
  children,
}: TextProps) {
  return (
    <Tag
      className={className}
      style={{
        fontFamily: fonts[font],
        fontSize: size,
        fontWeight: weight,
        color,
        opacity,
        lineHeight,
        letterSpacing,
        textTransform: uppercase ? 'uppercase' : undefined,
        fontStyle: italic ? 'italic' : undefined,
        maxWidth,
        textAlign: align,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}

import type { CSSProperties, ReactNode } from 'react';
import Text from './Text';

interface SectionEyebrowProps {
  color?: string;
  align?: 'left' | 'center';
  style?: CSSProperties;
  children: ReactNode;
}

export default function SectionEyebrow({ color = 'var(--color-husk)', align = 'left', style, children }: SectionEyebrowProps) {
  return (
    <Text
      size={12}
      weight={600}
      color={color}
      uppercase
      letterSpacing="0.12em"
      align={align}
      style={{ marginBottom: 14, ...style }}
    >
      {children}
    </Text>
  );
}

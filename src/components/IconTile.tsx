import type { CSSProperties, ReactNode } from 'react';

interface IconTileProps {
  size?: number;
  radius?: number;
  background: string;
  shape?: 'square' | 'circle';
  children: ReactNode;
  style?: CSSProperties;
}


export default function IconTile({ size = 48, radius = 14, background, shape = 'square', children, style }: IconTileProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        background,
        borderRadius: shape === 'circle' ? '50%' : radius,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

import { IconCheck } from '@tabler/icons-react';

interface CheckListProps {
  items: string[];
  textColor?: string;
  checkColor?: string;
  size?: number;
  fontSize?: number;
  gap?: number;
}

export default function CheckList({
  items,
  textColor = 'rgba(58,42,30,0.75)',
  checkColor = 'var(--color-lime)',
  size = 15,
  fontSize = 13,
  gap = 8,
}: CheckListProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap, flex: 1 }}>
      {items.map((item) => (
        <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <IconCheck size={size} color={checkColor} stroke={2.5} style={{ flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-body)', fontSize, color: textColor }}>{item}</span>
        </div>
      ))}
    </div>
  );
}

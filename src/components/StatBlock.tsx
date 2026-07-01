interface StatBlockProps {
  value: string;
  label: string;
  valueColor?: string;
  labelColor?: string;
}

export default function StatBlock({ value, label, valueColor = 'var(--color-lime)', labelColor = 'rgba(251,246,236,0.5)' }: StatBlockProps) {
  return (
    <div>
      <p style={{ fontFamily: 'var(--font-display)', fontSize: 34, color: valueColor, lineHeight: 1 }}>{value}</p>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: labelColor, marginTop: 4 }}>{label}</p>
    </div>
  );
}

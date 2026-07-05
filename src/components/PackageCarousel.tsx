import { Children, useRef, useState, type ReactNode } from 'react';

const GAP = 16;

interface PackageCarouselProps {
  children: ReactNode;
  gridClassName?: string;
}

export default function PackageCarousel({ children, gridClassName = 'grid-3' }: PackageCarouselProps) {
  const items = Children.toArray(children);
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    if (!first) return;
    const step = first.offsetWidth + GAP;
    const i = Math.round(el.scrollLeft / step);
    setIndex(Math.min(items.length - 1, Math.max(0, i)));
  };

  return (
    <>
      <div className={`hide-mobile ${gridClassName}`}>{items}</div>
      <div className="show-mobile" style={{ display: 'none', flexDirection: 'column' }}>
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="pkg-carousel-track"
          style={{
            display: 'flex',
            gap: GAP,
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
          }}
        >
          {items.map((child, i) => (
            <div key={i} style={{ flex: '0 0 85%', scrollSnapAlign: 'start', display: 'flex' }}>
              {child}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 24 }}>
          {items.map((_, i) => (
            <span
              key={i}
              style={{
                width: i === index ? 24 : 8,
                height: 8,
                borderRadius: 100,
                background: i === index ? 'var(--color-bark)' : 'rgba(58,42,30,0.2)',
                display: 'block',
                transition: 'width 0.3s, background 0.3s',
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

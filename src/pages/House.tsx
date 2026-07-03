import { useRef } from 'react';
import { IconCheck, IconMapPin, IconArrowRight, IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import RoomCard from '../components/RoomCard';
import { IMAGES } from '../data/images';

const AMENITIES = [
  { label: 'Fast WiFi', dark: false },
  { label: 'Fresh Linen', dark: false },
  { label: 'Terrace', dark: false },
  { label: 'Daily Clean', dark: false },
  { label: 'Board Storage', dark: false },
  { label: 'Common Lounge', dark: false },
  { label: 'Towels Incl.', dark: false },
  { label: '2min Beach', dark: true },
];

const ROOMS = [
  {
    image: IMAGES.roomTriple,
    tagLabel: '💰 Best Value',
    title: 'Triple Shared Room',
    description: '3 beds in a shared room. Perfect for solo travelers looking to connect and for groups of friends traveling together.',
    features: ['Shared bathroom', 'Great for solo travelers', 'Fresh linen & towels'],
    dark: false,
  },
  {
    image: IMAGES.roomDouble,
    title: 'Double Shared Room',
    description: "2 beds in a shared room. A bit more intimate. Great for two friends traveling together or couples who don't mind sharing.",
    features: ['Shared bathroom', 'More intimate space', 'Fresh linen & towels'],
    dark: false,
  },
  {
    image: IMAGES.roomPrivate,
    tagLabel: '🔒 Most Private',
    tagBg: 'var(--color-lime)',
    tagColor: 'var(--color-bark)',
    title: 'Private Room',
    description: 'Your own space after long days in the ocean. Ideal for those who value privacy, or couples looking for a dedicated getaway.',
    features: ['Private bathroom', 'Your own space', 'Perfect for couples'],
    dark: true,
  },
];

const SURF_SPOTS = [
  { image: IMAGES.spotBananaPoint, name: 'Banana Point 🍌', tag: 'Our home break · All levels', description: 'A long, forgiving right-hander right in front of the house. Where you\'ll spend most mornings.' },
  { image: IMAGES.spotCrocroBeach, name: 'Crocro Beach 🐊', tag: 'Mellow beach break · Beginners', description: 'Soft, rolling whitewash and a wide sandy beach. The go-to spot for first-timers finding their feet.' },
  { image: IMAGES.spotDevilsRock, name: "Devil's Rock 😈", tag: 'Powerful reef break · Advanced', description: 'A punchy reef break for experienced surfers chasing steeper, faster walls of water.' },
  { image: IMAGES.fallSurf, name: 'Anza 🎣', tag: 'Long right point · Intermediate', description: 'A classic point break with long, workable rides. Just a short drive south of Tamraght.' },
  { image: IMAGES.placePanoramaPoint, name: 'Panorama Point 🔭', tag: 'Exposed reef · All levels', description: 'A punchy, scenic setup with something for everyone, depending on the swell.' },
];

export default function House() {
  const spotsTrackRef = useRef<HTMLDivElement>(null);

  const scrollSpots = (dir: 'left' | 'right') => {
    const el = spotsTrackRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>('[data-carousel-card]');
    const step = (card?.offsetWidth ?? 320) + 24;
    el.scrollBy({ left: dir === 'left' ? -step : step, behavior: 'smooth' });
  };

  return (
    <Layout>
      <PageHero
        image={IMAGES.surfHouseMain}
        eyebrow="Your Home in Morocco"
        title={<>Sun-drenched.<br />Welcoming.</>}
        subtitle="More than a place to sleep — a place to feel at home, two minutes from the ocean."
        heightVh={68}
        minHeight={500}
        bgPosition="center 40%"
        gradientFrom="rgba(58,42,30,0.55)"
        gradientTo="rgba(58,42,30,0.4)"
      />

      {/* OVERVIEW */}
      <section style={{ background: 'var(--color-shell)', padding: '96px 32px' }}>
        <div className="container" style={{ padding: 0 }}>
          <div className="grid-2">
            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-husk)', marginBottom: 16 }}>
                The Place
              </p>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 700, color: 'var(--color-bark)', lineHeight: 1.15, marginBottom: 24 }}>
                Everything you need. Nothing you don't.
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--color-bark)', opacity: 0.72, lineHeight: 1.8, marginBottom: 20 }}>
                Our surf house sits in the heart of Tamraght — a two-minute walk from the beach, a five-minute walk from some of Morocco's best surf spots. You'll wake up to the sound of the ocean and go to sleep under the stars on the terrace.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--color-bark)', opacity: 0.72, lineHeight: 1.8, marginBottom: 36 }}>
                Clean linens, fast WiFi, daily housekeeping, and communal spaces designed for exactly the kind of conversations that happen when strangers become friends.
              </p>
              <Button href="/packages" variant="primary" size="md" icon={<IconArrowRight size={15} stroke={2.5} />}>
                See Packages
              </Button>
            </div>
            <div className="grid-amenities">
              {AMENITIES.map((a) => (
                <div key={a.label} style={{ background: a.dark ? 'var(--color-bark)' : 'var(--color-coconut)', borderRadius: 16, padding: 20, textAlign: 'center' }}>
                  <div style={{ marginBottom: 10, color: 'var(--color-lime)', display: 'flex', justifyContent: 'center' }}>
                    {a.label === '2min Beach' ? <IconMapPin size={24} stroke={1.8} /> : <IconCheck size={24} stroke={1.8} />}
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, color: a.dark ? 'var(--color-shell)' : 'var(--color-bark)' }}>{a.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROOM TYPES */}
      <section style={{ background: 'var(--color-coconut)', padding: '96px 32px' }}>
        <div className="container" style={{ padding: 0 }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-husk)', marginBottom: 14 }}>
              Accommodation
            </p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px,4vw,46px)', fontWeight: 700, color: 'var(--color-bark)', lineHeight: 1.1 }}>
              Three rooms, one great vibe.
            </h2>
          </div>
          <div className="grid-3">
            {ROOMS.map((room) => (
              <RoomCard key={room.title} {...room} ctaHref="/packages" />
            ))}
          </div>
        </div>
      </section>

      {/* SURF SPOTS */}
      <section style={{ background: 'var(--color-bark)', padding: '96px 32px' }}>
        <div className="container" style={{ padding: 0 }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 48, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-lime)', marginBottom: 14 }}>
                The Breaks
              </p>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px,4vw,46px)', fontWeight: 700, color: 'var(--color-shell)', lineHeight: 1.1 }}>
                World-class waves
                <br />
                on your doorstep.
              </h2>
            </div>
            <Button href="/booking" variant="outline-light" size="md">
              Ride the waves →
            </Button>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <button type="button" aria-label="Previous spot" className="carousel-arrow" onClick={() => scrollSpots('left')}>
              <IconChevronLeft size={18} stroke={2} />
            </button>
            <div className="carousel-track" ref={spotsTrackRef} style={{ flex: 1, minWidth: 0 }}>
              {SURF_SPOTS.map((spot) => (
                <div key={spot.name} className="carousel-card" data-carousel-card>
                  <div style={{ background: 'rgba(242,235,216,0.94)', border: '1px solid rgba(58,42,30,0.06)', borderRadius: 24, padding: 14, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div className="img-hover-zoom" style={{ borderRadius: 16, overflow: 'hidden', position: 'relative', height: 280, flexShrink: 0 }}>
                      <img src={spot.image} alt={spot.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(58,42,30,0.85) 0%,transparent 50%)' }} />
                      <div style={{ position: 'absolute', bottom: 20, left: 20, right: 20 }}>
                        <p style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700, color: 'var(--color-shell)', marginBottom: 4 }}>{spot.name}</p>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(251,246,236,0.7)' }}>{spot.tag}</p>
                      </div>
                    </div>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(58,42,30,0.7)', lineHeight: 1.5, padding: '16px 6px 6px', flex: 1 }}>
                      {spot.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button type="button" aria-label="Next spot" className="carousel-arrow" onClick={() => scrollSpots('right')}>
              <IconChevronRight size={18} stroke={2} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--color-shell)', padding: '96px 32px' }}>
        <div className="container" style={{ padding: 0 }}>
          <div style={{ background: 'var(--color-bark)', borderRadius: 28, padding: '64px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
            <div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,4vw,52px)', color: 'var(--color-shell)', lineHeight: 1, marginBottom: 12 }}>
                Ready to call it home?
              </h2>
              <p style={{ fontFamily: 'var(--font-heading)', fontSize: 17, color: 'rgba(251,246,236,0.65)', maxWidth: 420, lineHeight: 1.55 }}>
                Check our packages and find the room type that's right for you.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Button href="/packages" variant="primary" size="lg">
                View Packages →
              </Button>
              <Button href="/contact" variant="outline-light" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

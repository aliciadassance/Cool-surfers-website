import { IconCheck, IconMapPin, IconArrowRight } from '@tabler/icons-react';
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
    tagLabel: 'Best Value',
    title: 'Triple Shared Room',
    description: '3 beds in a shared room. Perfect for solo travelers looking to connect and for groups of friends traveling together.',
    features: ['Shared bathroom', 'Great for solo travelers', 'Fresh linen & towels'],
    price: '€290',
    dark: false,
  },
  {
    image: IMAGES.roomDouble,
    title: 'Double Shared Room',
    description: "2 beds in a shared room. A bit more intimate. Great for two friends traveling together or couples who don't mind sharing.",
    features: ['Shared bathroom', 'More intimate space', 'Fresh linen & towels'],
    price: '€350',
    dark: false,
  },
  {
    image: IMAGES.roomPrivate,
    tagLabel: 'Most Private',
    tagBg: 'var(--color-lime)',
    tagColor: 'var(--color-bark)',
    title: 'Private Room',
    description: 'Your own space after long days in the ocean. Ideal for those who value privacy, or couples looking for a dedicated getaway.',
    features: ['Private bathroom', 'Your own space', 'Perfect for couples'],
    price: '€370',
    dark: true,
  },
];

const SURF_SPOTS = [
  { image: IMAGES.spotBananaPoint, name: 'Banana Point 🍌', tag: 'Our home break · All levels' },
  { image: IMAGES.spotCrocroBeach, name: 'Crocro Beach', tag: 'Mellow beach break · Beginners' },
  { image: IMAGES.spotDevilsRock, name: "Devil's Rock", tag: 'Powerful reef break · Advanced' },
];

export default function House() {
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
                The House
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
              <RoomCard key={room.title} {...room} priceLabel="4-day package from" ctaHref="/packages" />
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
          </div>
          <div className="grid-3">
            {SURF_SPOTS.map((spot) => (
              <div key={spot.name} className="img-hover-zoom" style={{ borderRadius: 20, overflow: 'hidden', position: 'relative', height: 320 }}>
                <img src={spot.image} alt={spot.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(58,42,30,0.85) 0%,transparent 50%)' }} />
                <div style={{ position: 'absolute', bottom: 24, left: 24 }}>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700, color: 'var(--color-shell)', marginBottom: 4 }}>{spot.name}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(251,246,236,0.7)' }}>{spot.tag}</p>
                </div>
              </div>
            ))}
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

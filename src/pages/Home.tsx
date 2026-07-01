import { IconArrowRight, IconWaveSine, IconSend2, IconFriends, IconChevronDown, IconBrandInstagram } from '@tabler/icons-react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Badge from '../components/Badge';
import IconTile from '../components/IconTile';
import PackagePreviewCard from '../components/PackagePreviewCard';
import TestimonialCard from '../components/TestimonialCard';
import { IMAGES } from '../data/images';

const PILLARS = [
  {
    icon: <IconWaveSine size={26} color="var(--color-lime)" stroke={1.8} />,
    iconBg: 'rgba(168,210,74,0.12)',
    title: 'Surf Every Day',
    desc: 'Morning coaching tailored to your level — from catching your first wave to reading the ocean like a local.',
  },
  {
    icon: <IconSend2 size={26} color="var(--color-coral)" stroke={1.8} />,
    iconBg: 'rgba(214,96,46,0.12)',
    title: 'Eat Like Locals',
    desc: 'Three meals a day, Moroccan-style. Tagines, fresh fish, and pre-dinner mint tea on the terrace as the sun goes down.',
  },
  {
    icon: <IconFriends size={26} color="var(--color-husk)" stroke={1.8} />,
    iconBg: 'rgba(169,134,98,0.15)',
    title: 'Meet Your People',
    desc: 'Arrive solo, leave with a crew. The kind of friendships that last long after the tan fades and the saltwater dries.',
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Came for the surf, stayed for the people. Hamza and the whole team made us feel like family from day one. The daily rhythm of surf, eat, relax is absolutely perfect. Already planning my return trip.",
    name: 'Sarah M.',
    location: 'France 🇫🇷',
    avatarBg: 'var(--color-lime)',
    avatarInitial: 'S',
    avatarTextColor: 'var(--color-bark)',
  },
  {
    quote:
      "I arrived solo with zero expectations and left with 15 new friends and major surf progression. No gimmicks — just genuine hospitality and great waves. One of the best decisions I've ever made.",
    name: 'Marco V.',
    location: 'Italy 🇮🇹',
    avatarBg: 'var(--color-coral)',
    avatarInitial: 'M',
    avatarTextColor: 'var(--color-shell)',
  },
  {
    quote:
      "As a total beginner I was nervous. By day 3 I was standing and surfing! The coaches are so patient. And the food? Three meals of incredible Moroccan cooking every day. I didn't want to leave.",
    name: 'Emma R.',
    location: 'United Kingdom 🇬🇧',
    avatarBg: 'var(--color-husk)',
    avatarInitial: 'E',
    avatarTextColor: 'var(--color-shell)',
  },
];

const MOSAIC = [
  { src: IMAGES.spotBananaPoint, alt: 'Banana Point', col: 1, row: '1 / 3' },
  { src: IMAGES.teamHamza, alt: 'Team Hamza', col: 2, row: '1' },
  { src: IMAGES.roomPrivate, alt: 'Private room', col: 3, row: '1' },
  { src: IMAGES.fallSurf, alt: 'Fall surf', col: 2, row: '2' },
  { src: IMAGES.spotCrocroBeach, alt: 'Crocro Beach', col: 3, row: '2' },
];

export default function Home() {
  return (
    <Layout transparentNav>
      {/* HERO */}
      <section style={{ position: 'relative', height: '100vh', minHeight: 640, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url('${IMAGES.packagesMain}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(150deg,rgba(58,42,30,0.75) 0%,rgba(58,42,30,0.45) 55%,rgba(58,42,30,0.15) 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, height: '100%', padding: '80px 32px 130px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24, width: 'fit-content' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-lime)', display: 'block', animation: 'bounce 2s infinite' }} />
            <span style={{ color: 'rgba(251,246,236,0.9)', fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Tamraght · Taghazout Bay · Morocco
            </span>
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,5vw,68px)', color: 'var(--color-shell)', lineHeight: 1.13, letterSpacing: '-0.02em', marginBottom: 22, maxWidth: 740 }}>
            Come for the waves.
            <br />
            Stay for the crew.
          </h1>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(13px,1.3vw,16px)', color: 'rgba(251,246,236,0.82)', marginBottom: 24, maxWidth: 420, lineHeight: 1.6 }}>
            All-inclusive surf camp in Morocco. Daily coaching, great food, and people you'll never forget. Starting from €290.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Button href="/contact" size="lg" variant="primary" icon={<IconArrowRight size={16} stroke={2.5} />}>
              Book Your Week
            </Button>
            <Button href="/packages" size="lg" variant="outline-light">
              See Packages
            </Button>
          </div>
          <Badge variant="dot-pill" style={{ marginTop: 18 }}>
            Returning guest? 10% off — just mention it when booking
          </Badge>
        </div>
        <div style={{ position: 'absolute', bottom: 36, right: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <span style={{ color: 'rgba(251,246,236,0.5)', fontFamily: 'var(--font-body)', fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', writingMode: 'vertical-rl' }}>
            scroll
          </span>
          <div style={{ animation: 'bounce 1.8s infinite', color: 'rgba(251,246,236,0.5)' }}>
            <IconChevronDown size={20} stroke={2} />
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section style={{ padding: '104px 32px', background: 'var(--color-shell)' }}>
        <div className="container" style={{ padding: 0 }}>
          <div className="grid-2">
            <div style={{ borderRadius: 24, overflow: 'hidden', aspectRatio: '4/5', position: 'relative' }}>
              <img src={IMAGES.aboutUs} alt="Cool Surfers Morocco team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 20, left: 20, background: 'rgba(58,42,30,0.9)', backdropFilter: 'blur(8px)', borderRadius: 14, padding: '16px 20px' }}>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: 13, fontWeight: 600, color: 'var(--color-lime)', marginBottom: 4, letterSpacing: '0.04em' }}>
                  Founded in Tamraght
                </p>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(251,246,236,0.7)' }}>By surfers, for surfers</p>
              </div>
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-husk)', marginBottom: 16 }}>
                Our Story
              </p>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px,4vw,50px)', fontWeight: 700, color: 'var(--color-bark)', lineHeight: 1.1, marginBottom: 24 }}>
                More than a surf camp. It's a family.
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--color-bark)', opacity: 0.7, lineHeight: 1.75, marginBottom: 20 }}>
                A few years ago, Hamza and Momo fell in love with sharing the ocean with people. They had been surfing Tamraght's waves since childhood — and teaching felt like the most natural next step.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--color-bark)', opacity: 0.7, lineHeight: 1.75, marginBottom: 36 }}>
                Cool Surfers Morocco isn't just a business. It's a place where strangers become friends, where every meal is shared and every wave is celebrated. The kind of place you come back to.
              </p>
              <Button href="/about" variant="dark" size="md" icon={<IconArrowRight size={15} stroke={2.5} />}>
                Meet the Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section style={{ background: 'var(--color-bark)', padding: '88px 32px' }}>
        <div className="container" style={{ padding: 0 }}>
          <div className="grid-3">
            {PILLARS.map((p, i) => (
              <div key={p.title} style={{ padding: 36, borderRight: i < PILLARS.length - 1 ? '1px solid rgba(251,246,236,0.08)' : 'none' }}>
                <IconTile size={48} background={p.iconBg} style={{ marginBottom: 24 }}>
                  {p.icon}
                </IconTile>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, color: 'var(--color-shell)', marginBottom: 12 }}>{p.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(251,246,236,0.6)', lineHeight: 1.65 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES PREVIEW */}
      <section style={{ padding: '104px 32px', background: 'var(--color-coconut)' }}>
        <div className="container" style={{ padding: 0 }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-husk)', marginBottom: 14 }}>
                Choose Your Stay
              </p>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px,4vw,50px)', fontWeight: 700, color: 'var(--color-bark)', lineHeight: 1.1 }}>
                Three ways to
                <br />
                experience Morocco.
              </h2>
              <Badge variant="dot-pill" style={{ marginTop: 16 }}>
                Returning guests get 10% off — ask us when booking
              </Badge>
            </div>
            <a
              href="/packages"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--color-husk)', fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, paddingBottom: 2, borderBottom: '1px solid currentColor', whiteSpace: 'nowrap' }}
            >
              View all details
              <IconArrowRight size={14} stroke={2.5} />
            </a>
          </div>
          <div className="grid-3">
            <PackagePreviewCard
              image={IMAGES.package4Day}
              category="Weekend"
              categoryColor="var(--color-husk)"
              title="4 Days · 3 Nights"
              price="€290"
              priceSub="per person, triple shared"
              features={['Airport transfers', '3 meals per day', 'Surf coaching + equipment']}
              ctaHref="/packages"
              ctaVariant="dark"
            />
            <PackagePreviewCard
              image={IMAGES.package7Day}
              category="Full Week"
              categoryColor="var(--color-lime)"
              title="7 Days · 7 Nights"
              price="€460"
              priceSub="per person, triple shared"
              features={['Everything in 4-day', 'Grand Souk of Agadir visit', 'Full 7 afternoons free surf']}
              ctaHref="/packages"
              ctaVariant="primary"
              highlighted
            />
            <PackagePreviewCard
              image={IMAGES.packageYoga}
              category="Body & Soul"
              categoryColor="var(--color-coral)"
              title="Surf & Yoga Week"
              price="€510"
              priceSub="per person, triple shared"
              features={['Full surf week', '5 yoga sessions included', 'Balance body & mind']}
              ctaHref="/packages"
              ctaVariant="coral"
            />
          </div>
        </div>
      </section>

      {/* VIBE / PHOTO GRID */}
      <section style={{ background: 'var(--color-bark)', padding: '104px 32px' }}>
        <div className="container" style={{ padding: 0 }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-lime)', marginBottom: 14 }}>
              The Vibe
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,3vw,44px)', color: 'var(--color-shell)', lineHeight: 1.05, maxWidth: 600 }}>
              A week you won't stop talking about.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '280px 280px', gap: 10, borderRadius: 20, overflow: 'hidden' }}>
            {MOSAIC.map((m) => (
              <div key={m.alt} className="img-hover-zoom-slow" style={{ gridColumn: m.col, gridRow: m.row, overflow: 'hidden' }}>
                <img src={m.src} alt={m.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '104px 32px', background: 'var(--color-shell)' }}>
        <div className="container" style={{ padding: 0 }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-husk)', marginBottom: 14 }}>
              Guest Stories
            </p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(30px,4vw,48px)', fontWeight: 700, color: 'var(--color-bark)', lineHeight: 1.1 }}>
              Straight from the surf house.
            </h2>
          </div>
          <div className="grid-3">
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM CTA */}
      <section style={{ background: 'var(--color-husk)', padding: '80px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(251,246,236,0.6)', marginBottom: 16 }}>
            Follow the Journey
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px,2.4vw,32px)', color: 'var(--color-shell)', lineHeight: 1.1, marginBottom: 10 }}>
            See the daily vibe
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'rgba(251,246,236,0.8)', marginBottom: 32, lineHeight: 1.6 }}>
            Waves, sunsets, tagines, and real smiles. Follow us for the unfiltered version.
          </p>
          <Button href="https://www.instagram.com/cool_surfers_morocco/" external variant="dark" size="lg" style={{ background: 'var(--color-shell)', color: 'var(--color-bark)' }} icon={<IconBrandInstagram size={18} stroke={1.8} />} iconPosition="left">
            @cool_surfers_morocco
          </Button>
        </div>
      </section>
    </Layout>
  );
}

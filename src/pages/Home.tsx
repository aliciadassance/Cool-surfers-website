import React, { useEffect, useRef, useState } from 'react';
import { IconArrowRight, IconWaveSine, IconSend2, IconFriends, IconChevronDown, IconBrandInstagram } from '@tabler/icons-react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Badge from '../components/Badge';
import IconTile from '../components/IconTile';
import PackagePreviewCard from '../components/PackagePreviewCard';
import PackageCarousel from '../components/PackageCarousel';
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
      "An absolutely incredible time! I learned so much in such a short time and made great progress. Hamza, Mo, and Mehdi are outstanding surf instructors. I highly recommend this place, especially for intermediate and advanced surfers. The vibe is warm, welcoming, and full of good energy aaaaand the food is unforgettable good! Thank you so much for everything! I'll definitely be back :)",
    name: 'Julia C.',
    avatarBg: 'var(--color-lime)',
    avatarInitial: 'J',
    avatarTextColor: 'var(--color-bark)',
  },
  {
    quote:
      "I had an absolutely great time with Coolsurfers Morocco! Hamza, Mehdi and Sif are not only great instructors, but most importantly great people and friends! The hotel is clean and very nice, every day they bring you to the best surf spots to have fun together and the dinners is always amazing! Super recommended and 5/5 ⭐️",
    name: 'Davide N.',
    avatarBg: 'var(--color-coral)',
    avatarInitial: 'D',
    avatarTextColor: 'var(--color-shell)',
  },
  {
    quote:
      "Hamza, Momo and Mehdi are the best!! I had a great time staying with them at Cool Surfers. So much positive energy, good surf, delicious meals, lots of Rummi games - they're always there to help with anything. Can't wait to go back in 2026, thank you guys for everything. 💖",
    name: 'Florina',
    avatarBg: 'var(--color-husk)',
    avatarInitial: 'F',
    avatarTextColor: 'var(--color-shell)',
  },
  {
    quote:
      "There is a reason these guys have a lot of 5 stars reviews. Hamza and Mehdi are quality instructors. Best hostel i have stayed in, brand new, lovely and clean. I stayed in a private double. The chef was also fabulous.",
    name: 'NC.',
    avatarBg: 'var(--color-bark)',
    avatarInitial: 'N',
    avatarTextColor: 'var(--color-shell)',
  },
  {
    quote:
      "Really gratefull to Cool Surfers Morocco for the week I spent at their house. You feel right at home from the very first minutes! It's the perfect place to learn or improve your surfing skills! Thanks for all!",
    name: 'Elisa M.',
    avatarBg: 'var(--color-lime)',
    avatarInitial: 'E',
    avatarTextColor: 'var(--color-bark)',
  },
  {
    quote:
      "Our stay with cool surfers was amazing! We really loved it. The coaches are great, we've made pretty good progress. I would definitely recommend cool surfers to everyone who wants to have an unforgettable experience at Tamraght. Thanks to Momo and Hamza! Sending love from Germany!",
    name: 'Nele N.',
    avatarBg: 'var(--color-coral)',
    avatarInitial: 'N',
    avatarTextColor: 'var(--color-shell)',
  },
];

const MOSAIC = [
  { src: IMAGES.homeMosaic1, alt: 'Banana Point surf break, Tamraght', col: 1, row: '1 / 3', dir: 'left',  delay: 0 },
  { src: IMAGES.homeMosaic2, alt: 'Hamza, surf coach at Cool Surfers Morocco',   col: 2, row: '1',     dir: 'up',    delay: 0.1 },
  { src: IMAGES.homeMosaic3, alt: 'Private room at the Cool Surfers Morocco surf house', col: 3, row: '1',     dir: 'right', delay: 0.15 },
  { src: IMAGES.homeMosaic4, alt: 'Autumn surf session near Tamraght',    col: 2, row: '2',     dir: 'up',    delay: 0.2 },
  { src: IMAGES.homeMosaic5, alt: 'Crocro Beach surf spot, Taghazout Bay', col: 3, row: '2',     dir: 'right', delay: 0.25 },
];

const VISIBLE = 3;
const GAP = 28;

function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [slideWidth, setSlideWidth] = useState(0);
  const maxIndex = TESTIMONIALS.length - VISIBLE;

  const mobileTrackRef = useRef<HTMLDivElement>(null);
  const [mobileIndex, setMobileIndex] = useState(0);

  const handleMobileScroll = () => {
    const el = mobileTrackRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    if (!first) return;
    const step = first.offsetWidth + GAP;
    const i = Math.round(el.scrollLeft / step);
    setMobileIndex(Math.min(TESTIMONIALS.length - 1, Math.max(0, i)));
  };

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        const w = containerRef.current.offsetWidth;
        setSlideWidth((w + GAP) / VISIBLE);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  const arrowStyle = (disabled: boolean): React.CSSProperties => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 2,
    width: 44,
    height: 44,
    borderRadius: '50%',
    border: '1.5px solid var(--color-bark)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--color-shell)',
    cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? 0.2 : 1,
    transition: 'opacity 0.2s',
    flexShrink: 0,
  });

  return (
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

        <div className="hide-mobile" style={{ position: 'relative', padding: '0 56px' }}>
          <button onClick={prev} disabled={index === 0} style={{ ...arrowStyle(index === 0), left: 0 }} aria-label="Previous">
            <IconArrowRight size={16} stroke={2.5} style={{ transform: 'rotate(180deg)' }} color="var(--color-bark)" />
          </button>

          <div ref={containerRef} style={{ overflow: 'hidden' }}>
            <div style={{
              display: 'flex',
              gap: GAP,
              transition: 'transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              transform: `translateX(-${index * slideWidth}px)`,
            }}>
              {TESTIMONIALS.map((t) => (
                <div key={t.name} style={{ flex: `0 0 calc((100% - ${GAP * (VISIBLE - 1)}px) / ${VISIBLE})` }}>
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>
          </div>

          <button onClick={next} disabled={index === maxIndex} style={{ ...arrowStyle(index === maxIndex), right: 0 }} aria-label="Next">
            <IconArrowRight size={16} stroke={2.5} color="var(--color-bark)" />
          </button>
        </div>

        <div className="hide-mobile" style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 40 }}>
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                width: i === index ? 24 : 8, height: 8, borderRadius: 100,
                background: i === index ? 'var(--color-bark)' : 'rgba(58,42,30,0.2)',
                border: 'none', cursor: 'pointer', padding: 0,
                transition: 'width 0.3s, background 0.3s',
              }}
            />
          ))}
        </div>

        <div className="show-mobile" style={{ display: 'none', flexDirection: 'column' }}>
          <div
            ref={mobileTrackRef}
            onScroll={handleMobileScroll}
            className="pkg-carousel-track"
            style={{
              display: 'flex',
              gap: GAP,
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
            }}
          >
            {TESTIMONIALS.map((t) => (
              <div key={t.name} style={{ flex: '0 0 85%', scrollSnapAlign: 'start' }}>
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 24 }}>
            {TESTIMONIALS.map((_, i) => (
              <span
                key={i}
                style={{
                  width: i === mobileIndex ? 24 : 8, height: 8, borderRadius: 100,
                  background: i === mobileIndex ? 'var(--color-bark)' : 'rgba(58,42,30,0.2)',
                  display: 'block',
                  transition: 'width 0.3s, background 0.3s',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const MOSAIC_MOBILE_GAP = 12;

export default function Home() {
  const mosaicRef = useRef<HTMLDivElement>(null);
  const mosaicTrackRef = useRef<HTMLDivElement>(null);
  const [mosaicIndex, setMosaicIndex] = useState(0);
  const heroLineRef = useRef<HTMLSpanElement>(null);
  const [heroSubtitleWidth, setHeroSubtitleWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const el = heroLineRef.current;
    if (!el) return;
    const update = () => setHeroSubtitleWidth(el.offsetWidth);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const handleMosaicScroll = () => {
    const el = mosaicTrackRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    if (!first) return;
    const step = first.offsetWidth + MOSAIC_MOBILE_GAP;
    const i = Math.round(el.scrollLeft / step);
    setMosaicIndex(Math.min(MOSAIC.length - 1, Math.max(0, i)));
  };

  useEffect(() => {
    const grid = mosaicRef.current;
    if (!grid) return;
    const items = grid.querySelectorAll<HTMLElement>('.mosaic-item');
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((el) => el.classList.add('in-view'));
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <Layout transparentNav>
      {/* HERO */}
      <section style={{ position: 'relative', height: '100vh', minHeight: 640, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url('${IMAGES.homeHero}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(150deg,rgba(58,42,30,0.75) 0%,rgba(58,42,30,0.45) 55%,rgba(58,42,30,0.15) 100%)' }} />
        <div className="container hero-content" style={{}}>
          <div className="hero-top">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24, width: 'fit-content' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-lime)', display: 'block', animation: 'bounce 2s infinite' }} />
              <span style={{ color: 'rgba(251,246,236,0.9)', fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Tamraght · Taghazout Bay · Morocco
              </span>
            </div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,5vw,68px)', color: 'var(--color-shell)', lineHeight: 1.13, letterSpacing: '-0.02em', marginBottom: 22 }}>
              Come for the waves.<br /><span ref={heroLineRef}>Stay for the crew.</span>
            </h1>
            <p className="hero-subtitle" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(13px,1.3vw,16px)', color: 'rgba(251,246,236,0.82)', marginBottom: 36, lineHeight: 1.6, maxWidth: heroSubtitleWidth }}>
              All-inclusive surf camp in Tamraght, Taghazout Bay. Daily surf coaching, home-cooked Moroccan meals, and people you'll never forget. From €290.
            </p>
          </div>
          <div className="hero-bottom">
            <div className="hero-ctas" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Button href="/booking" size="lg" variant="primary" icon={<IconArrowRight size={16} stroke={2.5} />}>
                Book Your Week
              </Button>
              <Button href="/packages" size="lg" variant="outline-light">
                See Packages
              </Button>
            </div>
          </div>
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

      {/* RETURNING GUEST BANDEAU */}
      <div style={{ background: 'var(--color-coral)', padding: '14px 32px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(251,246,236,0.6)', flexShrink: 0, display: 'block' }} />
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: 'var(--color-shell)', letterSpacing: '0.04em', textAlign: 'center' }}>
          Returning guest? <strong style={{ fontWeight: 700 }}>10% off</strong> your next stay — just mention it when booking.
        </p>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(251,246,236,0.6)', flexShrink: 0, display: 'block' }} />
      </div>

      {/* ABOUT PREVIEW */}
      <section style={{ padding: '104px 32px', background: 'var(--color-shell)' }}>
        <div className="container" style={{ padding: 0 }}>
          <div className="grid-2">
            <div style={{ borderRadius: 24, overflow: 'hidden', aspectRatio: '4/5', position: 'relative' }}>
              <img src={IMAGES.homeAboutUs} alt="Cool Surfers Morocco surf camp team in Tamraght, Morocco" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
                A few years ago, Hamza and Momo fell in love with sharing the ocean with people. They'd been surfing Tamraght's 20km stretch of coastline since childhood — teaching felt like the natural next step.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--color-bark)', opacity: 0.7, lineHeight: 1.75, marginBottom: 36 }}>
                Cool Surfers Morocco isn't just a surf camp — it's a family. Every meal is shared, every wave is celebrated, and every guest leaves with people they'll stay in touch with.
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
              <Badge variant="dot-pill" background="var(--color-coral)" textColor="var(--color-shell)" dotColor="var(--color-shell)" style={{ marginTop: 16 }}>
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
          <PackageCarousel>
            <PackagePreviewCard
              image={IMAGES.homePackageQuickGetaway}
              category="4 Nights Stay"
              categoryColor="var(--color-husk)"
              title="Quick Getaway"
              price="€290"
              priceSub="per person, triple shared"
              features={['Airport Transfers', '3 meals a day', 'Surf coaching + equipment']}
              ctaHref="/packages"
              ctaVariant="dark"
            />
            <PackagePreviewCard
              image={IMAGES.homePackageFullSurf}
              category="Full Week"
              categoryColor="var(--color-lime)"
              title="Full Surf Experience"
              price="€460"
              priceSub="per person, triple shared"
              features={['Airport Transfers', 'Everything in 4 days but in 7 days', 'Grand Souk of Agadir visit']}
              ctaHref="/packages"
              ctaVariant="primary"
              highlighted
            />
            <PackagePreviewCard
              image={IMAGES.packageYoga}
              category="Body & Soul"
              categoryColor="var(--color-coral)"
              title="Surf & Yoga Experience"
              price="€510"
              priceSub="per person, triple shared"
              features={['Full Surf Experience', '5 yoga sessions included', 'Balance body & mind']}
              ctaHref="/packages"
              ctaVariant="coral"
            />
          </PackageCarousel>
        </div>
      </section>

      {/* VIBE / PHOTO GRID */}
      <section style={{ background: 'var(--color-bark)', padding: '104px 32px', overflow: 'hidden' }}>
        <div className="container" style={{ padding: 0 }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 56, flexWrap: 'wrap', gap: 20 }}>
            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-lime)', marginBottom: 14 }}>
                The Vibe
              </p>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,3vw,44px)', color: 'var(--color-shell)', lineHeight: 1.3, maxWidth: 600 }}>
                A week you won't stop talking about.
              </h2>
            </div>
            <Button href="/about" variant="outline-light" size="md" icon={<IconArrowRight size={15} stroke={2.5} />}>
              Meet the Cool Surfers team
            </Button>
          </div>
          <div ref={mosaicRef} className="hide-mobile" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridTemplateRows: '280px 280px', gap: 10, borderRadius: 20 }}>
            {MOSAIC.map((m) => (
              <div
                key={m.alt}
                className="mosaic-item"
                data-dir={m.dir}
                style={{ gridColumn: m.col, gridRow: m.row, overflow: 'hidden', animationDelay: `${m.delay}s` }}
              >
                <img src={m.src} alt={m.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>

          <div className="show-mobile" style={{ display: 'none', flexDirection: 'column' }}>
            <div
              ref={mosaicTrackRef}
              onScroll={handleMosaicScroll}
              className="pkg-carousel-track"
              style={{
                display: 'flex',
                gap: MOSAIC_MOBILE_GAP,
                overflowX: 'auto',
                scrollSnapType: 'x mandatory',
                borderRadius: 20,
              }}
            >
              {MOSAIC.map((m) => (
                <div
                  key={m.alt}
                  style={{ flex: '0 0 85%', scrollSnapAlign: 'start', aspectRatio: '4/5', borderRadius: 20, overflow: 'hidden' }}
                >
                  <img src={m.src} alt={m.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 24 }}>
              {MOSAIC.map((_, i) => (
                <span
                  key={i}
                  style={{
                    width: i === mosaicIndex ? 24 : 8,
                    height: 8,
                    borderRadius: 100,
                    background: i === mosaicIndex ? 'var(--color-shell)' : 'rgba(251,246,236,0.25)',
                    display: 'block',
                    transition: 'width 0.3s, background 0.3s',
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <TestimonialsCarousel />

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

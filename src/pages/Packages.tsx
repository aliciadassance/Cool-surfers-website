import { useState } from 'react';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import PackageDetailCard from '../components/PackageDetailCard';
import ScheduleItem from '../components/ScheduleItem';
import { IMAGES } from '../data/images';
import { PRICES, ROOM_LABELS, DAILY_SCHEDULE, type RoomType } from '../data/packages';
import { whatsappLink } from '../data/site';

const ROOM_TABS: { value: RoomType; label: string }[] = [
  { value: 'triple', label: 'Triple Shared' },
  { value: 'double', label: 'Double Shared' },
  { value: 'private', label: 'Private Room' },
];

const PRICING_ROWS: { type: RoomType; label: string; sub: string }[] = [
  { type: 'triple', label: 'Triple Shared', sub: '3-bed shared room' },
  { type: 'double', label: 'Double Shared', sub: '2-bed shared room' },
  { type: 'private', label: 'Private Room', sub: 'Your own space' },
];

export default function Packages() {
  const [roomType, setRoomType] = useState<RoomType>('triple');
  const prices = PRICES[roomType];
  const roomLabel = ROOM_LABELS[roomType];

  return (
    <Layout>
      <PageHero
        image={IMAGES.packagesMain}
        eyebrow="All-Inclusive Surf Packages"
        title="Find your perfect week."
        subtitle="Everything taken care of — transfers, food, surf coaching, and a house full of good people."
        heightVh={52}
        minHeight={380}
        bgPosition="center 35%"
        gradientFrom="rgba(58,42,30,0.65)"
        gradientTo="rgba(58,42,30,0.5)"
      />

      {/* RETURNING CUSTOMERS BANNER */}
      <div style={{ background: 'var(--color-lime)', padding: '14px 32px', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 700, color: 'var(--color-bark)', letterSpacing: '0.04em' }}>
          Returning guests get <strong>10% off</strong> their stay — mention it when booking 🤙
        </p>
      </div>

      {/* ROOM SELECTOR */}
      <section style={{ background: 'var(--color-shell)', padding: '56px 32px 0' }}>
        <div className="container" style={{ padding: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 8 }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--color-bark)', opacity: 0.6 }}>Showing prices for:</p>
            <div style={{ display: 'inline-flex', background: 'var(--color-sand)', borderRadius: 100, padding: 4, gap: 4 }}>
              {ROOM_TABS.map((tab) => {
                const active = roomType === tab.value;
                return (
                  <button
                    key={tab.value}
                    onClick={() => setRoomType(tab.value)}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 13,
                      fontWeight: 600,
                      padding: '8px 18px',
                      borderRadius: 100,
                      transition: 'all 0.2s',
                      background: active ? 'var(--color-bark)' : 'transparent',
                      color: active ? 'var(--color-shell)' : 'var(--color-bark)',
                    }}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-husk)', marginBottom: 0 }}>
            {roomLabel} selected — prices update automatically below
          </p>
        </div>
      </section>

      {/* PACKAGE CARDS */}
      <section style={{ background: 'var(--color-shell)', padding: '40px 32px 104px' }}>
        <div className="container" style={{ padding: 0 }}>
          <div className="grid-3">
            <PackageDetailCard
              image={IMAGES.package4Day}
              tagLabel="Weekend Getaway"
              title="4 Days · 3 Nights"
              subtitle="Surf coaching package"
              price={`€${prices.d4}`}
              priceSub={`per person · ${roomLabel}`}
              includedItems={['Airport or bus station transfers', '3 meals/day + pre-dinner tea', 'Morning surf coaching or guiding', 'Board + wetsuit equipment', 'Accommodation included']}
              ctaHref="/contact"
              ctaVariant="dark"
            />
            <PackageDetailCard
              image={IMAGES.package7Day}
              title="7 Days · 7 Nights"
              subtitle="Full surf coaching package"
              price={`€${prices.d7}`}
              priceSub={`per person · ${roomLabel}`}
              includedItems={['Everything in weekend package', 'Grand Souk of Agadir visit', '7 afternoons of free surf', 'Optional hammam visit', 'Full 7-day daily schedule']}
              ctaHref="/contact"
              ctaVariant="primary"
              highlighted
            />
            <PackageDetailCard
              image={IMAGES.packageYoga}
              tagLabel="Surf & Yoga"
              tagBg="rgba(214,96,46,0.9)"
              title="7 Days · 7 Nights"
              subtitle="Surf + 5 yoga sessions"
              price={`€${prices.yoga}`}
              priceSub={`per person · ${roomLabel}`}
              includedItems={['Everything in full-week package', '5 dedicated yoga sessions', 'Balance body & mind', 'Evening stretching & breathing', 'Perfect surf recovery blend']}
              ctaHref="/contact"
              ctaVariant="coral"
            />
          </div>
        </div>
      </section>

      {/* FULL PRICING TABLE */}
      <section style={{ background: 'var(--color-bark)', padding: '88px 32px' }}>
        <div className="container" style={{ padding: 0 }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-lime)', marginBottom: 14 }}>
              Full Pricing
            </p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 700, color: 'var(--color-shell)' }}>All prices per person</h2>
          </div>
          <div style={{ background: 'rgba(251,246,236,0.06)', borderRadius: 24, overflow: 'hidden', border: '1px solid rgba(251,246,236,0.1)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', padding: '20px 32px', borderBottom: '1px solid rgba(251,246,236,0.1)' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(251,246,236,0.4)' }}>Room Type</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(251,246,236,0.4)', textAlign: 'center' }}>4 Days</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(251,246,236,0.4)', textAlign: 'center' }}>7 Nights Surf</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(251,246,236,0.4)', textAlign: 'center' }}>Surf + Yoga</p>
            </div>
            {PRICING_ROWS.map((row, i) => (
              <div
                key={row.type}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 1fr 1fr',
                  padding: '20px 32px',
                  borderBottom: i < PRICING_ROWS.length - 1 ? '1px solid rgba(251,246,236,0.07)' : 'none',
                  alignItems: 'center',
                }}
              >
                <div>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: 16, fontWeight: 600, color: 'var(--color-shell)' }}>{row.label}</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(251,246,236,0.4)' }}>{row.sub}</p>
                </div>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--color-shell)', textAlign: 'center' }}>€{PRICES[row.type].d4}</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--color-lime)', textAlign: 'center' }}>€{PRICES[row.type].d7}</p>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--color-shell)', textAlign: 'center' }}>€{PRICES[row.type].yoga}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DAILY SCHEDULE */}
      <section style={{ background: 'var(--color-shell)', padding: '88px 32px' }}>
        <div className="container" style={{ padding: 0 }}>
          <div className="grid-2">
            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-husk)', marginBottom: 14 }}>
                A Typical Day
              </p>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(30px,4vw,46px)', fontWeight: 700, color: 'var(--color-bark)', lineHeight: 1.1, marginBottom: 24 }}>
                Sun, surf, eat, repeat.
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--color-bark)', opacity: 0.7, lineHeight: 1.75, marginBottom: 32 }}>
                Life at Cool Surfers follows the rhythm of the sun and the tides. Every day is a unique adventure — but here's what a great day looks like.
              </p>
              <Button href="/contact" variant="primary" size="md">
                Book a Spot →
              </Button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {DAILY_SCHEDULE.map((item) => (
                <ScheduleItem key={item.time} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING CTA BANNER */}
      <section style={{ background: 'var(--color-lime)', padding: '80px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px,4vw,52px)', color: 'var(--color-bark)', lineHeight: 1, marginBottom: 16 }}>Ready to book?</h2>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: 18, color: 'rgba(58,42,30,0.75)', marginBottom: 36, lineHeight: 1.55 }}>
            Spots are limited. Reach out on WhatsApp or fill in the contact form and we'll get back to you within 24 hours.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              href={whatsappLink("Hi! I'd like to book at Cool Surfers Morocco!")}
              external
              variant="dark"
              size="lg"
              icon={<IconBrandWhatsapp size={18} />}
              iconPosition="left"
            >
              WhatsApp Us
            </Button>
            <Button href="/contact" variant="outline-dark" size="lg">
              Contact Form →
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

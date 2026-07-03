import { useState } from 'react';
import {
  IconBrandWhatsapp,
  IconMountain,
  IconBath,
  IconRoute,
  IconPyramid,
  IconSkateboard,
  IconChefHat,
  IconSun,
  IconLeaf,
  IconWaveSine,
  IconUmbrella,
} from '@tabler/icons-react';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import IconTile from '../components/IconTile';
import PackageDetailCard from '../components/PackageDetailCard';
import PackageCarousel from '../components/PackageCarousel';
import CheckList from '../components/CheckList';
import ScheduleItem from '../components/ScheduleItem';
import { IMAGES } from '../data/images';
import { PRICES, ROOM_LABELS, DAILY_SCHEDULE, PACKAGE_INCLUDED, ADD_ONS, SEASONS, type RoomType } from '../data/packages';
import { whatsappLink } from '../data/site';

const ADD_ON_ICONS = {
  mountain: IconMountain,
  bath: IconBath,
  route: IconRoute,
  dunes: IconPyramid,
  skateboard: IconSkateboard,
  chefHat: IconChefHat,
};

const SEASON_ICONS = {
  sun: IconSun,
  leaf: IconLeaf,
  wave: IconWaveSine,
  umbrella: IconUmbrella,
};

const ROOM_TABS: { value: RoomType; label: string }[] = [
  { value: 'triple', label: 'Triple Shared' },
  { value: 'double', label: 'Double Shared' },
  { value: 'private', label: 'Private Room' },
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
        subtitle="Everything taken care of — transfers, meals, surf coaching, and a house full of good people."
        heightVh={68}
        minHeight={500}
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
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--color-bark)', opacity: 0.6, textAlign: 'center', marginBottom: 12 }}>
            Select your room & find your package
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
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
        </div>
      </section>

      {/* PACKAGE CARDS */}
      <section style={{ background: 'var(--color-shell)', padding: '40px 32px 104px' }}>
        <div className="container" style={{ padding: 0 }}>
          <PackageCarousel>
            <PackageDetailCard
              image={IMAGES.package4Day}
              tagLabel="Weekend Getaway"
              title="Quick Getaway"
              subtitle="4 Days · 3 Nights"
              price={`€${prices.d4}`}
              priceSub={`per person · ${roomLabel}`}
              includedItems={['Airport or bus station transfers', '3 meals/day + pre-dinner tea', 'Morning surf coaching or guiding', 'Board + wetsuit equipment', 'Accommodation included']}
              ctaHref="/booking"
              ctaVariant="dark"
            />
            <PackageDetailCard
              image={IMAGES.package7Day}
              title="Full Surf Experience"
              subtitle="7 Days · 7 Nights"
              price={`€${prices.d7}`}
              priceSub={`per person · ${roomLabel}`}
              includedItems={['Everything in weekend package', 'Grand Souk of Agadir visit', '7 afternoons of free surf', 'Optional hammam visit', 'Full 7-day daily schedule']}
              ctaHref="/booking"
              ctaVariant="primary"
              highlighted
            />
            <PackageDetailCard
              image={IMAGES.packageYoga}
              tagLabel="Surf & Yoga"
              tagBg="rgba(214,96,46,0.9)"
              title="Surf & Yoga Experience"
              subtitle="Full Surf Experience + 5 Yoga Sessions"
              price={`€${prices.yoga}`}
              priceSub={`per person · ${roomLabel}`}
              includedItems={['Everything in full-week package', '5 dedicated yoga sessions', 'Balance body & mind', 'Evening stretching & breathing', 'Perfect surf recovery blend']}
              ctaHref="/booking"
              ctaVariant="coral"
            />
          </PackageCarousel>
        </div>
      </section>

      {/* INCLUDED + ADD-ONS */}
      <section style={{ background: 'var(--color-bark)', padding: '88px 32px' }}>
        <div className="container" style={{ padding: 0 }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-lime)', marginBottom: 14 }}>
              What You Get
            </p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 700, color: 'var(--color-shell)' }}>Included, plus a few extras.</h2>
          </div>
          <div className="grid-2" style={{ alignItems: 'stretch' }}>
            <div style={{ background: 'rgba(251,246,236,0.06)', borderRadius: 24, border: '1px solid rgba(251,246,236,0.1)', padding: 36 }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-lime)', marginBottom: 20 }}>
                Included in every package
              </p>
              <CheckList items={PACKAGE_INCLUDED} textColor="rgba(251,246,236,0.85)" fontSize={15} size={18} gap={16} />
            </div>
            <div style={{ background: 'rgba(251,246,236,0.06)', borderRadius: 24, border: '1px solid rgba(251,246,236,0.1)', padding: 36 }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-coral)', marginBottom: 20 }}>
                Add-ons, at extra cost
              </p>
              <div className="grid-addons hide-mobile">
                {ADD_ONS.map((addOn) => {
                  const Icon = ADD_ON_ICONS[addOn.icon];
                  return (
                    <div key={addOn.label} style={{ background: 'rgba(242,235,216,0.14)', borderRadius: 16, padding: 20, textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%' }}>
                      <div style={{ marginBottom: 10, color: 'var(--color-coral)', display: 'flex', justifyContent: 'center' }}>
                        <Icon size={24} stroke={1.8} />
                      </div>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, color: 'var(--color-shell)', margin: 0, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{addOn.label}</p>
                      <p style={{ fontFamily: 'var(--font-display)', fontSize: 16, color: 'var(--color-coral)', marginTop: 18 }}>
                        €{addOn.price}<span style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, color: 'var(--color-shell)' }}> /pers</span>
                      </p>
                    </div>
                  );
                })}
              </div>
              <div className="show-mobile" style={{ display: 'none', flexDirection: 'column' }}>
                {ADD_ONS.map((addOn, i) => {
                  const Icon = ADD_ON_ICONS[addOn.icon];
                  return (
                    <div
                      key={addOn.label}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 14,
                        padding: '16px 4px',
                        borderTop: i === 0 ? 'none' : '1px solid rgba(251,246,236,0.1)',
                      }}
                    >
                      <div style={{ color: 'var(--color-coral)', display: 'flex', flexShrink: 0 }}>
                        <Icon size={22} stroke={1.8} />
                      </div>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--color-shell)', margin: 0, flex: 1 }}>{addOn.label}</p>
                      <p style={{ fontFamily: 'var(--font-display)', fontSize: 16, color: 'var(--color-coral)', flexShrink: 0, whiteSpace: 'nowrap' }}>
                        €{addOn.price}<span style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 600, color: 'var(--color-shell)' }}> /pers</span>
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
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
              <Button href="/booking" variant="primary" size="md">
                Book a Spot →
              </Button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {DAILY_SCHEDULE.map((item) => (
                <ScheduleItem key={item.time} {...item} />
              ))}
            </div>
          </div>

          {/* WHEN TO COME */}
          <div style={{ marginTop: 88 }}>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-husk)', marginBottom: 14 }}>
                Plan Your Trip
              </p>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 700, color: 'var(--color-bark)' }}>When to come?</h2>
            </div>
            <PackageCarousel gridClassName="grid-4">
              {SEASONS.map((s) => {
                const Icon = SEASON_ICONS[s.icon];
                return (
                  <div key={s.season} style={{ background: 'var(--color-coconut)', borderRadius: 20, padding: 28, height: '100%' }}>
                    <IconTile size={44} background="var(--color-bark)" style={{ marginBottom: 18 }}>
                      <Icon size={20} color="var(--color-lime)" stroke={1.8} />
                    </IconTile>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, color: 'var(--color-bark)', marginBottom: 2 }}>{s.season}</h3>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, color: 'var(--color-husk)', marginBottom: 12 }}>{s.months}</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(58,42,30,0.7)', lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                );
              })}
            </PackageCarousel>
          </div>
        </div>
      </section>

      {/* BOOKING CTA BANNER */}
      <section style={{ background: 'var(--color-lime)', padding: '80px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px,4vw,52px)', color: 'var(--color-bark)', lineHeight: 1, marginBottom: 16 }}>Ready to book?</h2>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: 18, color: 'rgba(58,42,30,0.75)', marginBottom: 36, lineHeight: 1.55 }}>
            Spots are limited. Reach out on WhatsApp or fill in the booking form and we'll get back to you within 24 hours.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              href={whatsappLink("Hi! I'd like to book at Cool Surfers Morocco!")}
              external
              variant="outline-dark"
              size="lg"
              icon={<IconBrandWhatsapp size={18} />}
              iconPosition="left"
            >
              WhatsApp Us
            </Button>
            <Button href="/booking" variant="dark" size="lg">
              Booking Form →
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}

import {
  IconBrandWhatsapp,
  IconMail,
  IconBrandInstagram,
  IconMapPin,
  IconCalendarCheck,
  IconMessageCircleQuestion,
  IconPuzzle,
  IconYoga,
} from '@tabler/icons-react';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import IconTile from '../components/IconTile';
import Button from '../components/Button';
import { IMAGES } from '../data/images';
import { SITE, whatsappLink } from '../data/site';

const REASONS = [
  {
    icon: IconCalendarCheck,
    title: 'Booking a stay',
    description: 'Ready to pick your dates and room? Head to our booking page and we\'ll confirm your spot fast.',
    cta: 'Go to Booking →',
    href: '/booking',
  },
  {
    icon: IconMessageCircleQuestion,
    title: 'General questions',
    description: 'Not sure about surf levels, what to pack, or how it all works? Ask away on WhatsApp or email.',
    cta: 'Ask a Question',
    href: whatsappLink("Hi! I have a question about Cool Surfers Morocco."),
    external: true,
  },
  {
    icon: IconPuzzle,
    title: 'Collaborations & partnerships',
    description: 'Brand, creator, or business wanting to team up? We\'d love to hear your idea.',
    cta: 'Pitch Us',
    href: `mailto:${SITE.email}?subject=Collaboration%20Inquiry`,
  },
  {
    icon: IconYoga,
    title: 'Organizing a retreat',
    description: 'Planning a group trip, yoga retreat, or private event? Let\'s design something custom.',
    cta: 'Plan a Retreat',
    href: whatsappLink("Hi! I'm interested in organizing a retreat / group trip at Cool Surfers Morocco."),
    external: true,
  },
];

export default function Contact() {
  return (
    <Layout>
      <PageHero
        image={IMAGES.tamraghtMain}
        eyebrow="We're Here to Help"
        title={<>However you want<br />to reach us.</>}
        subtitle="Booking a trip, asking a question, planning a collaboration, or organizing a retreat — pick what fits and we'll take it from there."
        heightVh={68}
        minHeight={500}
        bgPosition="center 40%"
        gradientFrom="rgba(58,42,30,0.65)"
        gradientTo="rgba(58,42,30,0.5)"
      />

      {/* REASONS TO REACH OUT */}
      <section style={{ background: 'var(--color-shell)', padding: '96px 32px 64px' }}>
        <div className="container" style={{ padding: 0 }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-husk)', marginBottom: 14, textAlign: 'center' }}>
            What can we help with?
          </p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 700, color: 'var(--color-bark)', lineHeight: 1.15, textAlign: 'center', marginBottom: 56 }}>
            Tell us what brings you here.
          </h2>
          <div className="grid-4">
            {REASONS.map((reason) => (
              <div key={reason.title} style={{ background: 'var(--color-coconut)', borderRadius: 24, padding: 28, display: 'flex', flexDirection: 'column' }}>
                <IconTile size={48} background="var(--color-bark)" style={{ marginBottom: 20 }}>
                  <reason.icon size={22} color="var(--color-lime)" stroke={1.8} />
                </IconTile>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, color: 'var(--color-bark)', marginBottom: 10 }}>{reason.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(58,42,30,0.7)', lineHeight: 1.6, marginBottom: 24, flex: 1 }}>
                  {reason.description}
                </p>
                <Button
                  href={reason.href}
                  external={reason.external}
                  variant="dark"
                  size="sm"
                  block
                >
                  {reason.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CHANNELS */}
      <section style={{ background: 'var(--color-bark)', padding: '80px 32px 96px' }}>
        <div className="container" style={{ padding: 0 }}>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-lime)', marginBottom: 14, textAlign: 'center' }}>
            Get in touch directly
          </p>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 700, color: 'var(--color-shell)', lineHeight: 1.15, textAlign: 'center', marginBottom: 56 }}>
            Every channel, one house.
          </h2>
          <div className="grid-4">
            <a
              href={`https://wa.me/${SITE.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14, background: 'rgba(251,246,236,0.06)', border: '1px solid rgba(251,246,236,0.1)', borderRadius: 20, padding: 28 }}
            >
              <IconTile size={52} background="#25D366">
                <IconBrandWhatsapp size={26} color="white" />
              </IconTile>
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(251,246,236,0.4)', marginBottom: 4 }}>
                  WhatsApp
                </p>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: 16, fontWeight: 700, color: 'var(--color-shell)' }}>{SITE.whatsappDisplay}</p>
              </div>
            </a>

            <a
              href={`mailto:${SITE.email}`}
              className="hover-lift"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14, background: 'rgba(251,246,236,0.06)', border: '1px solid rgba(251,246,236,0.1)', borderRadius: 20, padding: 28 }}
            >
              <IconTile size={52} background="rgba(251,246,236,0.1)">
                <IconMail size={24} color="var(--color-shell)" stroke={1.8} />
              </IconTile>
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(251,246,236,0.4)', marginBottom: 4 }}>
                  Email
                </p>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: 16, fontWeight: 700, color: 'var(--color-shell)', wordBreak: 'break-word' }}>
                  {SITE.email}
                </p>
              </div>
            </a>

            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14, background: 'rgba(251,246,236,0.06)', border: '1px solid rgba(251,246,236,0.1)', borderRadius: 20, padding: 28 }}
            >
              <IconTile size={52} background="linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)">
                <IconBrandInstagram size={24} color="white" stroke={1.8} />
              </IconTile>
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(251,246,236,0.4)', marginBottom: 4 }}>
                  Instagram
                </p>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: 16, fontWeight: 700, color: 'var(--color-shell)' }}>{SITE.instagramHandle}</p>
              </div>
            </a>

            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift"
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 14, background: 'rgba(251,246,236,0.06)', border: '1px solid rgba(251,246,236,0.1)', borderRadius: 20, padding: 28 }}
            >
              <IconTile size={52} background="var(--color-coral)">
                <IconMapPin size={24} color="white" stroke={1.8} />
              </IconTile>
              <div>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(251,246,236,0.4)', marginBottom: 4 }}>
                  Address
                </p>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: 15, fontWeight: 700, color: 'var(--color-shell)', lineHeight: 1.4 }}>
                  {SITE.address[0]}
                  <br />
                  {SITE.address[1]}
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

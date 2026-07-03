import { IconWaveSine, IconFriends, IconMapPin, IconShieldCheck, IconHome, IconArrowRight } from '@tabler/icons-react';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import Button from '../components/Button';
import IconTile from '../components/IconTile';
import StatBlock from '../components/StatBlock';
import { IMAGES } from '../data/images';

const TEAM = [
  {
    name: 'Hamza',
    role: 'Co-founder · Head Surf Coach',
    roleColor: 'var(--color-lime)',
    image: IMAGES.teamHamza,
    iconBg: 'var(--color-lime)',
    icon: <IconWaveSine size={22} color="var(--color-bark)" stroke={1.8} />,
    bio: "From the Taghazout area, Hamza has a deep connection to the ocean and a calm, encouraging presence in the water. His coaching style is patient and technical, with a real gift for finding exactly the right wave for each surfer's level — and making them laugh while doing it.",
  },
  {
    name: 'Momo',
    role: 'Co-founder · Head of Good Vibes',
    roleColor: 'var(--color-coral)',
    image: IMAGES.teamMomo,
    iconBg: 'var(--color-coral)',
    icon: <IconFriends size={22} color="var(--color-shell)" stroke={1.8} />,
    bio: 'With years of experience guiding surfers of all levels through camps along the coast, Momo brings a steady, relaxed energy that helps people progress without pressure. He makes sure every guest feels part of the family from day one — for him, surfing was always about more than technique: the moment, the vibe, and the people you share it with.',
  },
];

const VALUES = [
  {
    title: 'Local at Heart',
    desc: "We're from Tamraght. We know these waves, these streets, these people. We'll bring you into the real Morocco — not the tourist version.",
    dark: false,
    iconBg: 'var(--color-lime)',
    icon: <IconMapPin size={26} color="var(--color-bark)" stroke={1.8} />,
  },
  {
    title: 'Safety First, Always',
    desc: 'Every session is supervised by experienced local coaches who know these waters inside out. You focus on surfing — we handle the rest.',
    dark: true,
    iconBg: 'rgba(168,210,74,0.15)',
    icon: <IconShieldCheck size={26} color="var(--color-lime)" stroke={1.8} />,
  },
  {
    title: 'Hassle-Free Holidays',
    desc: 'From airport pickup to your last meal, everything is taken care of. You only need to bring yourself (and maybe some sunscreen).',
    dark: false,
    iconBg: 'var(--color-coral)',
    icon: <IconHome size={26} color="var(--color-shell)" stroke={1.8} />,
  },
];

export default function About() {
  return (
    <Layout>
      <PageHero
        image={IMAGES.aboutUs}
        eyebrow="Who We Are"
        title={<>The people behind<br />the good vibes.</>}
        subtitle="Two Tamraght surfers, one shared dream. Meet the local team behind every unforgettable stay."
        heightVh={68}
        minHeight={500}
        bgPosition="center 30%"
        gradientFrom="rgba(58,42,30,0.6)"
        gradientTo="rgba(58,42,30,0.45)"
      />

      {/* ORIGIN STORY */}
      <section style={{ background: 'var(--color-shell)', padding: '104px 32px' }}>
        <div className="container" style={{ padding: 0 }}>
          <div className="grid-2">
            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-husk)', marginBottom: 16 }}>
                Our Story
              </p>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 700, color: 'var(--color-bark)', lineHeight: 1.15, marginBottom: 24 }}>
                From catching waves to sharing them.
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--color-bark)', opacity: 0.72, lineHeight: 1.8, marginBottom: 20 }}>
                Hamza and Momo grew up surfing the breaks around Tamraght. For them, the ocean wasn't just a sport — it was a way of life, a language, a community. When they started teaching friends how to surf, something clicked.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--color-bark)', opacity: 0.72, lineHeight: 1.8, marginBottom: 20 }}>
                They realized that sharing the ocean with people — watching a beginner stand up for the first time, seeing that pure, uncontrolled joy — was the most rewarding thing they'd ever done.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'var(--color-bark)', opacity: 0.72, lineHeight: 1.8 }}>
                After years working at surf camps along the Moroccan coast, Hamza and Momo built Cool Surfers Morocco as the second home they'd always dreamed of — warm, welcoming, and open to anyone chasing the magic of Morocco's waves.
              </p>
            </div>
            <div style={{ borderRadius: 24, overflow: 'hidden', aspectRatio: '4/5' }}>
              <img src={IMAGES.aboutOriginStory} alt="Hamza and Momo's story" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section style={{ background: 'var(--color-bark)', padding: '104px 32px' }}>
        <div className="container" style={{ padding: 0 }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-lime)', marginBottom: 14 }}>
              The Crew
            </p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px,4vw,52px)', color: 'var(--color-shell)', lineHeight: 1 }}>Meet the founders.</h2>
          </div>
          <div className="grid-2" style={{ alignItems: 'stretch' }}>
            {TEAM.map((member) => (
              <div key={member.name} style={{ height: '100%', display: 'flex', flexDirection: 'column', background: 'rgba(251,246,236,0.05)', border: '1px solid rgba(251,246,236,0.1)', borderRadius: 28, overflow: 'hidden' }}>
                <div style={{ height: 360, overflow: 'hidden', flexShrink: 0 }}>
                  <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
                </div>
                <div style={{ padding: 32, flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                    <div>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 26, fontWeight: 700, color: 'var(--color-shell)' }}>{member.name}</h3>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: member.roleColor, fontWeight: 600, marginTop: 4 }}>{member.role}</p>
                    </div>
                    <IconTile size={48} shape="circle" background={member.iconBg}>
                      {member.icon}
                    </IconTile>
                  </div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(251,246,236,0.65)', lineHeight: 1.75 }}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY / VALUES */}
      <section style={{ background: 'var(--color-shell)', padding: '104px 32px' }}>
        <div className="container" style={{ padding: 0 }}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-husk)', marginBottom: 14 }}>
              What We Stand For
            </p>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px,4vw,46px)', fontWeight: 700, color: 'var(--color-bark)', lineHeight: 1.15 }}>
              The Cool Surfers way.
            </h2>
          </div>
          <div className="grid-3">
            {VALUES.map((v) => (
              <div key={v.title} style={{ padding: 36, background: v.dark ? 'var(--color-bark)' : 'var(--color-coconut)', borderRadius: 24 }}>
                <IconTile size={52} background={v.iconBg} style={{ marginBottom: 24 }}>
                  {v.icon}
                </IconTile>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 20, fontWeight: 700, color: v.dark ? 'var(--color-shell)' : 'var(--color-bark)', marginBottom: 12 }}>{v.title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: v.dark ? 'rgba(251,246,236,0.65)' : 'var(--color-bark)', opacity: v.dark ? undefined : 0.7, lineHeight: 1.7 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT TAMRAGHT */}
      <section style={{ background: 'var(--color-bark)', padding: '104px 32px' }}>
        <div className="container" style={{ padding: 0 }}>
          <div className="grid-2">
            <div style={{ borderRadius: 24, overflow: 'hidden', aspectRatio: '1/1' }}>
              <img src={IMAGES.aboutTamraght} alt="Tamraght village" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-lime)', marginBottom: 16 }}>
                The Place
              </p>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px,3.5vw,44px)', fontWeight: 700, color: 'var(--color-shell)', lineHeight: 1.15, marginBottom: 24 }}>
                Tamraght — a village worth discovering.
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'rgba(251,246,236,0.68)', lineHeight: 1.8, marginBottom: 20 }}>
                Tamraght is a peaceful, family-friendly surf village on the edge of Taghazout Bay — within walking distance of coffee shops, pharmacies, Moroccan restaurants, and some of the best surf spots in North Africa.
              </p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'rgba(251,246,236,0.68)', lineHeight: 1.8, marginBottom: 36 }}>
                It's the kind of place that slows you down in the best possible way. Golden light, ocean air, and a pace of life that reminds you what really matters.
              </p>
              <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
                <StatBlock value="300+" label="sunny days/year" />
                <StatBlock value="10 min" label="walk to the beach" />
                <StatBlock value="12°C+" label="ocean temp year-round" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--color-lime)', padding: '88px 32px', textAlign: 'center' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(30px,4vw,52px)', color: 'var(--color-bark)', lineHeight: 1.2, marginBottom: 16 }}>
            Come join the family.
          </h2>
          <p style={{ fontFamily: 'var(--font-heading)', fontSize: 18, color: 'rgba(58,42,30,0.72)', marginBottom: 36, lineHeight: 1.55 }}>
            Spots fill up fast. Book your week in Tamraght and see what everyone keeps coming back for.
          </p>
          <Button href="/booking" variant="dark" size="xl" icon={<IconArrowRight size={16} stroke={2.5} />}>
            Book Your Stay
          </Button>
        </div>
      </section>
    </Layout>
  );
}

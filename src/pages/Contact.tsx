import { useState, type FormEvent, type CSSProperties, type ChangeEvent } from 'react';
import { IconBrandWhatsapp, IconMail, IconBrandInstagram, IconMapPin, IconCheck } from '@tabler/icons-react';
import Layout from '../components/Layout';
import PageHero from '../components/PageHero';
import IconTile from '../components/IconTile';
import { IMAGES } from '../data/images';
import { PACKAGE_OPTIONS } from '../data/packages';
import { SITE, whatsappLink } from '../data/site';

interface FormState {
  name: string;
  email: string;
  phone: string;
  pkg: string;
  dates: string;
  people: string;
  message: string;
}

const INITIAL_FORM: FormState = { name: '', email: '', phone: '', pkg: '', dates: '', people: '2', message: '' };

const inputLabelStyle: CSSProperties = {
  display: 'block',
  fontFamily: 'var(--font-body)',
  fontSize: 12,
  fontWeight: 600,
  color: 'var(--color-bark)',
  opacity: 0.6,
  marginBottom: 6,
  letterSpacing: '0.04em',
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormState) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const lines = [
      `Hi! I'd like to book at Cool Surfers Morocco 🤙`,
      ``,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone ? `Phone: ${form.phone}` : null,
      form.pkg ? `Package: ${form.pkg}` : null,
      form.dates ? `Dates: ${form.dates}` : null,
      `People: ${form.people}`,
      form.message ? `\nMessage: ${form.message}` : null,
    ]
      .filter(Boolean)
      .join('\n');
    window.open(whatsappLink(lines), '_blank');
    setSubmitted(true);
  };

  return (
    <Layout>
      <PageHero
        image={IMAGES.tamraghtMain}
        eyebrow="Get in Touch"
        title={<>Let's plan your<br />perfect week.</>}
        heightVh={48}
        minHeight={340}
        bgPosition="center 40%"
        gradientFrom="rgba(58,42,30,0.65)"
        gradientTo="rgba(58,42,30,0.5)"
      />

      <section style={{ background: 'var(--color-shell)', padding: '96px 32px' }}>
        <div className="container" style={{ padding: 0 }}>
          <div className="grid-2" style={{ alignItems: 'start' }}>
            {/* FORM */}
            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-husk)', marginBottom: 16 }}>
                Send us a message
              </p>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(26px,3vw,38px)', fontWeight: 700, color: 'var(--color-bark)', lineHeight: 1.15, marginBottom: 8 }}>
                Book your spot or ask anything.
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--color-bark)', opacity: 0.6, lineHeight: 1.7, marginBottom: 36 }}>
                Fill in the form and we'll reply within 24 hours. Or if you prefer, just send us a WhatsApp — it's quicker!
              </p>

              {submitted ? (
                <div style={{ background: 'var(--color-lime)', borderRadius: 20, padding: 32, textAlign: 'center' }}>
                  <IconTile size={56} shape="circle" background="var(--color-bark)" style={{ margin: '0 auto 16px' }}>
                    <IconCheck size={28} color="var(--color-lime)" stroke={2.5} />
                  </IconTile>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, color: 'var(--color-bark)', marginBottom: 8 }}>Message sent!</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(58,42,30,0.75)' }}>
                    We've opened WhatsApp with your message. We'll reply as soon as possible 🤙
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={inputLabelStyle}>Your name *</label>
                      <input type="text" value={form.name} onChange={update('name')} placeholder="e.g. Sarah" required />
                    </div>
                    <div>
                      <label style={inputLabelStyle}>Email *</label>
                      <input type="email" value={form.email} onChange={update('email')} placeholder="you@example.com" required />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={inputLabelStyle}>WhatsApp / Phone</label>
                      <input type="tel" value={form.phone} onChange={update('phone')} placeholder="+33 6..." />
                    </div>
                    <div>
                      <label style={inputLabelStyle}>Number of people</label>
                      <input type="number" value={form.people} onChange={update('people')} min={1} max={20} placeholder="2" />
                    </div>
                  </div>
                  <div>
                    <label style={inputLabelStyle}>Package interest</label>
                    <select value={form.pkg} onChange={update('pkg')}>
                      {PACKAGE_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={inputLabelStyle}>Preferred dates / flexibility</label>
                    <input type="text" value={form.dates} onChange={update('dates')} placeholder="e.g. July 2026, flexible on timing" />
                  </div>
                  <div>
                    <label style={inputLabelStyle}>Your message</label>
                    <textarea
                      value={form.message}
                      onChange={update('message')}
                      placeholder="Tell us about your surf level, any questions, special requests..."
                      rows={4}
                      style={{ minHeight: 120 }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="ui-btn"
                    data-variant="primary"
                    style={{
                      background: 'var(--color-lime)',
                      color: 'var(--color-bark)',
                      fontFamily: 'var(--font-body)',
                      fontSize: 15,
                      fontWeight: 700,
                      padding: '16px 32px',
                      borderRadius: 100,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 10,
                      width: '100%',
                    }}
                  >
                    <IconBrandWhatsapp size={18} />
                    Send via WhatsApp
                  </button>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--color-husk)', textAlign: 'center', lineHeight: 1.5 }}>
                    This will open WhatsApp with your details pre-filled. We'll reply as soon as we can.
                  </p>
                </form>
              )}
            </div>

            {/* CONTACT INFO PANEL */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, position: 'sticky', top: 96 }}>
              <a
                href={`https://wa.me/${SITE.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift"
                style={{ display: 'flex', alignItems: 'center', gap: 20, background: 'var(--color-bark)', borderRadius: 20, padding: 24 }}
              >
                <IconTile size={52} background="#25D366">
                  <IconBrandWhatsapp size={26} color="white" />
                </IconTile>
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(251,246,236,0.4)', marginBottom: 4 }}>
                    Fastest response
                  </p>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, color: 'var(--color-shell)' }}>WhatsApp</p>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(251,246,236,0.6)', marginTop: 2 }}>{SITE.whatsappDisplay}</p>
                </div>
              </a>

              <a
                href={`mailto:${SITE.email}`}
                className="hover-lift"
                style={{ display: 'flex', alignItems: 'center', gap: 20, background: 'var(--color-coconut)', borderRadius: 20, padding: 24 }}
              >
                <IconTile size={52} background="var(--color-bark)">
                  <IconMail size={24} color="var(--color-shell)" stroke={1.8} />
                </IconTile>
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-husk)', marginBottom: 4 }}>
                    Email
                  </p>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: 17, fontWeight: 700, color: 'var(--color-bark)' }}>
                    coolsurfersmorocco
                    <br />
                    @gmail.com
                  </p>
                </div>
              </a>

              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift"
                style={{ display: 'flex', alignItems: 'center', gap: 20, background: 'var(--color-coconut)', borderRadius: 20, padding: 24 }}
              >
                <IconTile size={52} background="linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)">
                  <IconBrandInstagram size={24} color="white" stroke={1.8} />
                </IconTile>
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-husk)', marginBottom: 4 }}>
                    Instagram
                  </p>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: 17, fontWeight: 700, color: 'var(--color-bark)' }}>{SITE.instagramHandle}</p>
                </div>
              </a>

              <div style={{ background: 'var(--color-coconut)', borderRadius: 20, padding: 24 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 20 }}>
                  <IconTile size={52} background="var(--color-coral)">
                    <IconMapPin size={24} color="white" stroke={1.8} />
                  </IconTile>
                  <div>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-husk)', marginBottom: 4 }}>
                      Address
                    </p>
                    <p style={{ fontFamily: 'var(--font-heading)', fontSize: 16, fontWeight: 700, color: 'var(--color-bark)', lineHeight: 1.4 }}>
                      {SITE.address[0]}
                      <br />
                      {SITE.address[1]}
                    </p>
                  </div>
                </div>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ui-btn"
                  data-variant="dark"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    background: 'var(--color-bark)',
                    color: 'var(--color-shell)',
                    fontFamily: 'var(--font-body)',
                    fontSize: 13,
                    fontWeight: 700,
                    padding: '12px 20px',
                    borderRadius: 100,
                  }}
                >
                  Open in Google Maps →
                </a>
              </div>

              <div style={{ background: 'var(--color-lime)', borderRadius: 16, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--color-bark)', flexShrink: 0 }} />
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, color: 'var(--color-bark)' }}>We typically reply within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

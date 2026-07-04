import { useRef, useState, type FormEvent, type CSSProperties, type ChangeEvent } from 'react';
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
  arrivalDate: string;
  departureDate: string;
  people: string;
  message: string;
}

const INITIAL_FORM: FormState = { name: '', email: '', phone: '', pkg: '', arrivalDate: '', departureDate: '', people: '1', message: '' };

const formatDate = (value: string) => {
  if (!value) return '';
  const [year, month, day] = value.split('-');
  return `${day}/${month}/${year}`;
};

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

type Intent = 'whatsapp' | 'email';

export default function Booking() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [emailStatus, setEmailStatus] = useState<'idle' | 'sending' | 'error'>('idle');
  const intentRef = useRef<Intent>('whatsapp');

  const update = (field: keyof FormState) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const intent = intentRef.current;

    if (intent === 'whatsapp') {
      const lines = [
        `Hi! I'd like to book at Cool Surfers Morocco 🤙`,
        ``,
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        form.phone ? `Phone: ${form.phone}` : null,
        form.pkg ? `Package: ${form.pkg}` : null,
        form.arrivalDate ? `Arrival: ${formatDate(form.arrivalDate)}` : null,
        form.departureDate ? `Departure: ${formatDate(form.departureDate)}` : null,
        `People: ${form.people}`,
        form.message ? `\nMessage: ${form.message}` : null,
      ]
        .filter(Boolean)
        .join('\n');
      window.open(whatsappLink(lines), '_blank');
      setSubmitted(true);
      return;
    }

    setEmailStatus('sending');
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      setEmailStatus('idle');
      setSubmitted(true);
    } catch (err) {
      console.error('Failed to send booking email:', err);
      setEmailStatus('error');
    }
  };

  return (
    <Layout>
      <PageHero
        image={IMAGES.bookingHero}
        eyebrow="Get in Touch"
        title={<>Let's plan your<br />perfect week.</>}
        subtitle="Tell us when you want to come, how many you are, and we'll take care of the rest. We usually reply within 24 hours."
        heightVh={68}
        minHeight={500}
        bgPosition="center 40%"
        gradientFrom="rgba(58,42,30,0.65)"
        gradientTo="rgba(58,42,30,0.5)"
      />

      <section style={{ background: 'var(--color-shell)', padding: '96px 32px' }}>
        <div className="container" style={{ padding: 0 }}>
          <div className="grid-booking" style={{ alignItems: 'start' }}>
            {/* FORM */}
            <div>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-husk)', marginBottom: 16 }}>
                Send us a message
              </p>
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(26px,3vw,38px)', fontWeight: 700, color: 'var(--color-bark)', lineHeight: 1.15, marginBottom: 8 }}>
                Book your spot
              </h2>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--color-bark)', opacity: 0.6, lineHeight: 1.7, marginBottom: 36 }}>
                Fill in the form and we'll reply within 24 hours. Or if you prefer, just send us a WhatsApp — it's quicker!
              </p>

              {submitted ? (
                <div style={{ background: 'var(--color-lime)', borderRadius: 20, padding: 32, textAlign: 'center' }}>
                  <IconTile size={56} shape="circle" background="var(--color-bark)" style={{ margin: '0 auto 16px' }}>
                    <IconCheck size={28} color="var(--color-lime)" stroke={2.5} />
                  </IconTile>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, color: 'var(--color-bark)', marginBottom: 8 }}>
                    {intentRef.current === 'email' ? 'Request sent!' : 'Message sent!'}
                  </h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(58,42,30,0.75)' }}>
                    {intentRef.current === 'email'
                      ? "We've received your booking request by email and sent you a confirmation — we'll reply within 24 hours 🤙"
                      : "We've opened WhatsApp with your message. We'll reply as soon as possible 🤙"}
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
                      <label style={inputLabelStyle}>WhatsApp / Phone *</label>
                      <input type="tel" value={form.phone} onChange={update('phone')} placeholder="+33 6..." required />
                    </div>
                    <div>
                      <label style={inputLabelStyle}>Number of people *</label>
                      <input type="number" value={form.people} onChange={update('people')} min={1} max={20} placeholder="1" required />
                    </div>
                  </div>
                  <div>
                    <label style={inputLabelStyle}>Package interest *</label>
                    <select value={form.pkg} onChange={update('pkg')} required>
                      {PACKAGE_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={inputLabelStyle}>Arrival date *</label>
                      <input type="date" value={form.arrivalDate} onChange={update('arrivalDate')} required />
                    </div>
                    <div>
                      <label style={inputLabelStyle}>Departure date *</label>
                      <input
                        type="date"
                        value={form.departureDate}
                        onChange={update('departureDate')}
                        min={form.arrivalDate || undefined}
                        required
                      />
                    </div>
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
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                    <button
                      type="submit"
                      className="ui-btn"
                      data-variant="secondary"
                      disabled={emailStatus === 'sending'}
                      onClick={() => { intentRef.current = 'email'; }}
                      style={{
                        background: 'var(--color-lime)',
                        color: 'var(--color-bark)',
                        fontFamily: 'var(--font-body)',
                        fontSize: 15,
                        fontWeight: 700,
                        padding: '16px 24px',
                        borderRadius: 100,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 10,
                        width: '100%',
                        opacity: emailStatus === 'sending' ? 0.6 : 1,
                        cursor: emailStatus === 'sending' ? 'wait' : 'pointer',
                      }}
                    >
                      <IconMail size={18} />
                      {emailStatus === 'sending' ? 'Sending...' : 'Send Request by Email'}
                    </button>
                    <button
                      type="submit"
                      className="ui-btn"
                      data-variant="primary"
                      onClick={() => { intentRef.current = 'whatsapp'; }}
                      style={{
                        background: 'var(--color-coconut)',
                        color: 'var(--color-bark)',
                        fontFamily: 'var(--font-body)',
                        fontSize: 15,
                        fontWeight: 700,
                        padding: '16px 24px',
                        borderRadius: 100,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 10,
                        width: '100%',
                      }}
                    >
                      <IconBrandWhatsapp size={18} />
                      Send Request on WhatsApp
                    </button>
                  </div>
                  {emailStatus === 'error' && (
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--color-coral)', textAlign: 'center', lineHeight: 1.5 }}>
                      Something went wrong sending your request by email. Please try again, or send us a WhatsApp instead.
                    </p>
                  )}
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--color-husk)', textAlign: 'center', lineHeight: 1.5 }}>
                    WhatsApp opens with your details pre-filled. Email sends your request straight to our inbox, and you'll get a confirmation too.
                  </p>
                </form>
              )}
            </div>

            {/* CONTACT INFO PANEL */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, position: 'sticky', top: 96 }}>
              <a
                href={`https://wa.me/${SITE.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift"
                style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'var(--color-coconut)', borderRadius: 16, padding: 16 }}
              >
                <IconTile size={38} background="#25D366">
                  <IconBrandWhatsapp size={19} color="white" />
                </IconTile>
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-husk)', marginBottom: 2 }}>
                    WhatsApp
                  </p>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: 13, fontWeight: 700, color: 'var(--color-bark)', whiteSpace: 'nowrap' }}>{SITE.whatsappDisplay}</p>
                </div>
              </a>

              <a
                href={`mailto:${SITE.email}`}
                className="hover-lift"
                style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'var(--color-coconut)', borderRadius: 16, padding: 16 }}
              >
                <IconTile size={38} background="var(--color-bark)">
                  <IconMail size={18} color="var(--color-shell)" stroke={1.8} />
                </IconTile>
                <div style={{ minWidth: 0 }}>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-husk)', marginBottom: 2 }}>
                    Email
                  </p>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: 13, fontWeight: 700, color: 'var(--color-bark)', whiteSpace: 'nowrap' }}>
                    {SITE.email}
                  </p>
                </div>
              </a>

              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-lift"
                style={{ display: 'flex', alignItems: 'center', gap: 14, background: 'var(--color-coconut)', borderRadius: 16, padding: 16 }}
              >
                <IconTile size={38} background="linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)">
                  <IconBrandInstagram size={18} color="white" stroke={1.8} />
                </IconTile>
                <div>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-husk)', marginBottom: 2 }}>
                    Instagram
                  </p>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: 13, fontWeight: 700, color: 'var(--color-bark)' }}>{SITE.instagramHandle}</p>
                </div>
              </a>

              <div style={{ background: 'var(--color-coconut)', borderRadius: 16, padding: 16 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginBottom: 14 }}>
                  <IconTile size={38} background="var(--color-coral)">
                    <IconMapPin size={18} color="white" stroke={1.8} />
                  </IconTile>
                  <div>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-husk)', marginBottom: 2 }}>
                      Address
                    </p>
                    <p style={{ fontFamily: 'var(--font-heading)', fontSize: 13, fontWeight: 700, color: 'var(--color-bark)', lineHeight: 1.4 }}>
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
                    fontSize: 12,
                    fontWeight: 700,
                    padding: '10px 16px',
                    borderRadius: 100,
                  }}
                >
                  Open in Google Maps →
                </a>
              </div>

              <div style={{ background: 'var(--color-lime)', borderRadius: 14, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--color-bark)', flexShrink: 0 }} />
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, color: 'var(--color-bark)' }}>We typically reply within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

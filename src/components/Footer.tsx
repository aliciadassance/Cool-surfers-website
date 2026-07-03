import { Link } from 'react-router-dom';
import { SITE } from '../data/site';

const EXPLORE_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'The Place', to: '/place' },
  { label: 'Packages & Pricing', to: '/packages' },
];

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-bark)', padding: '80px 32px 40px' }}>
      <div className="container" style={{ padding: 0 }}>
        <div className="grid-4" style={{ marginBottom: 64 }}>
          <div>
            <img
              src="/images/csm-logo-footer.png"
              alt="Cool Surfers Morocco"
              style={{ height: 140, width: 'auto', marginBottom: 20 }}
            />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(251,246,236,0.5)', lineHeight: 1.7 }}>
              No stress, no shoes, just good vibes. Tamraght, Morocco.
            </p>
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(251,246,236,0.3)', marginBottom: 20 }}>
              Explore
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {EXPLORE_LINKS.map((l) => (
                <Link key={l.to} to={l.to} style={{ color: 'rgba(251,246,236,0.65)', fontFamily: 'var(--font-body)', fontSize: 14 }}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(251,246,236,0.3)', marginBottom: 20 }}>
              Contact
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <a href={`mailto:${SITE.email}`} style={{ color: 'rgba(251,246,236,0.65)', fontFamily: 'var(--font-body)', fontSize: 14 }}>
                {SITE.email}
              </a>
              <a
                href={`https://wa.me/${SITE.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--color-lime)', fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600 }}
              >
                WhatsApp: {SITE.whatsappDisplay}
              </a>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--color-lime)', fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600 }}
              >
                {SITE.instagramHandle}
              </a>
            </div>
          </div>
          <div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(251,246,236,0.3)', marginBottom: 20 }}>
              Find Us
            </p>
            <p style={{ color: 'rgba(251,246,236,0.65)', fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.65 }}>
              {SITE.address[0]}
              <br />
              {SITE.address[1]}
            </p>
            <a
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 5, marginTop: 14, color: 'var(--color-lime)', fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600 }}
            >
              View on Maps →
            </a>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(251,246,236,0.08)', paddingTop: 28, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ color: 'rgba(251,246,236,0.25)', fontFamily: 'var(--font-body)', fontSize: 12 }}>
            Design &amp; Development by Alicia Dassance · © 2026 Cool Surfers Morocco. All rights reserved.
          </p>
          <p style={{ color: 'rgba(251,246,236,0.25)', fontFamily: 'var(--font-body)', fontSize: 12 }}>Made with 🤙 in Tamraght</p>
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { NAV_LINKS } from '../data/site';
import Button from './Button';

interface NavProps {
  transparentOnTop?: boolean;
}

export default function Nav({ transparentOnTop = false }: NavProps) {
  const [scrolled, setScrolled] = useState(!transparentOnTop);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (!transparentOnTop) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [transparentOnTop]);

  const solid = !transparentOnTop || scrolled;
  const linkColor = solid ? 'var(--color-bark)' : 'var(--color-shell)';

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: 'var(--nav-height)',
          display: 'flex',
          alignItems: 'center',
          transition: 'background 0.4s, box-shadow 0.4s',
          background: solid ? 'rgba(251,246,236,0.97)' : 'transparent',
          backdropFilter: solid ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: solid ? 'blur(16px)' : 'none',
          boxShadow: solid ? '0 1px 0 rgba(58,42,30,0.1)' : 'none',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <Link to="/" style={{ flexShrink: 0 }}>
            <img src="/images/csm-logo.png" alt="Cool Surfers Morocco" style={{ height: 64, width: 'auto', objectFit: 'contain' }} />
          </Link>
          <div className="hide-mobile" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            {NAV_LINKS.map((link) => {
              const active = pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{
                    color: linkColor,
                    fontFamily: 'var(--font-body)',
                    fontSize: 14,
                    fontWeight: active ? 700 : 500,
                    letterSpacing: '0.02em',
                    borderBottom: active ? '2px solid var(--color-lime)' : '2px solid transparent',
                    paddingBottom: 2,
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Button href="/contact" size="nav" variant="primary">
              Book Now
            </Button>
          </div>
          <button
            className="show-mobile"
            onClick={() => setMobileOpen((v) => !v)}
            style={{ display: 'none', alignItems: 'center', justifyContent: 'center', width: 40, height: 40, borderRadius: 8, padding: 0 }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <IconX size={22} color={linkColor} stroke={2} /> : <IconMenu2 size={22} color={linkColor} stroke={2} />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: 'var(--nav-height)',
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999,
            background: 'var(--color-bark)',
            padding: '40px 32px',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {NAV_LINKS.map((link, i) => {
            const active = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  color: active ? 'var(--color-lime)' : 'var(--color-shell)',
                  fontFamily: 'var(--font-heading)',
                  fontSize: 32,
                  fontWeight: 700,
                  padding: '16px 0',
                  borderBottom: i < NAV_LINKS.length - 1 ? '1px solid rgba(251,246,236,0.1)' : 'none',
                  display: 'block',
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <div style={{ marginTop: 32 }}>
            <Button href="/contact" variant="primary" size="xl" fullWidth block>
              Book Now
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

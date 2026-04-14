import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';

const links = [
  { to: '/',       label: 'Inicio' },
  { to: '/carta',  label: 'Carta' },
  { to: '/cotizar', label: 'Cotizar' },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add border + deeper bg once user scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const navStyle = {
    position: 'fixed',
    top: 0, left: 0, right: 0,
    zIndex: 50,
    transition: 'background 0.3s, border-color 0.3s, backdrop-filter 0.3s',
    background: scrolled ? 'rgba(6,9,15,0.96)' : 'transparent',
    backdropFilter: scrolled ? 'blur(16px)' : 'none',
    borderBottom: scrolled ? '1px solid var(--gold-line)' : '1px solid transparent',
  };

  return (
    <nav style={navStyle} role="navigation" aria-label="Navegación principal">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <NavLink
          to="/"
          aria-label="Bar2Go — ir al inicio"
          style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8 }}
        >
          <img
            src="/logo_expanded.svg"
            alt="Bar2Go"
            style={{
              height: 40,
              width: 'auto',
              filter: 'drop-shadow(0 0 6px rgba(201,169,110,0.3))',
              transition: 'filter 0.3s',
            }}
            onMouseEnter={e => e.currentTarget.style.filter = 'drop-shadow(0 0 12px rgba(201,169,110,0.6))'}
            onMouseLeave={e => e.currentTarget.style.filter = 'drop-shadow(0 0 6px rgba(201,169,110,0.3))'}
            onError={e => {
              // Fallback to text if SVG fails
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextSibling.style.display = 'block';
            }}
          />
          {/* Text fallback — hidden unless image fails */}
          <span style={{
            display: 'none',
            fontFamily: 'var(--font-display)',
            fontSize: 22,
            fontWeight: 600,
            color: 'var(--gold)',
            letterSpacing: '0.05em',
          }}>
            Bar2Go
          </span>
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden md:flex" style={{ gap: 40, alignItems: 'center' }}>
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              style={({ isActive }) => ({
                textDecoration: 'none',
                fontSize: 14,
                fontWeight: 400,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                color: isActive ? 'var(--gold)' : 'var(--text-2)',
                transition: 'color 0.2s',
                fontFamily: 'var(--font-body)',
              })}
              onMouseEnter={e => { if (!e.currentTarget.getAttribute('aria-current')) e.currentTarget.style.color = 'var(--text-1)'; }}
              onMouseLeave={e => { if (!e.currentTarget.getAttribute('aria-current')) e.currentTarget.style.color = 'var(--text-2)'; }}
            >
              {l.label}
            </NavLink>
          ))}

          <NavLink
            to="/cotizar"
            style={{
              textDecoration: 'none',
              fontSize: 13,
              fontWeight: 500,
              padding: '9px 22px',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--gold)',
              color: 'var(--gold)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--bg-0)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--gold)'; }}
          >
            Cotizar ahora
          </NavLink>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-1)',
            cursor: 'pointer',
            padding: 6,
            borderRadius: 'var(--radius-sm)',
          }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {/* Mobile menu */}
      {createPortal(
        <div
          id="mobile-menu"
          role="dialog"
          aria-label="Menú de navegación"
          aria-modal="true"
          style={{
            position: 'fixed',
            inset: 0,
            top: 0,
            background: '#06090f',
            backdropFilter: 'none',
            display: open ? 'flex' : 'none',
            flexDirection: 'column',
            padding: '2rem 1.5rem',
            gap: 4,
            zIndex: 51,
            overscrollBehavior: 'contain',
            touchAction: 'none',
          }}
        >
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              onClick={() => setOpen(false)}
              style={({ isActive }) => ({
                textDecoration: 'none',
                fontSize: 28,
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                color: isActive ? 'var(--gold)' : 'var(--text-2)',
                padding: '14px 0',
                borderBottom: '1px solid rgba(201,169,110,0.1)',
                transition: 'color 0.2s',
              })}
            >
              {l.label}
            </NavLink>
          ))}

          <a
            href="https://wa.me/56956317457"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            style={{
              marginTop: 32,
              padding: '16px',
              borderRadius: 'var(--radius-md)',
              background: 'var(--gold)',
              color: 'var(--bg-0)',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: 15,
              textAlign: 'center',
              letterSpacing: '0.04em',
            }}
          >
            Cotizar por WhatsApp
          </a>
        </div>, 
      document.body)}
    </nav>
  );
}
import { Link } from 'react-router-dom';
import { ExternalLink, MessageCircle, MapPin } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/drinks';

const footerLinks = [
  { to: '/',       label: 'Inicio' },
  { to: '/carta',  label: 'Carta' },
  { to: '/cotizar', label: 'Cotizar' },
];

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--bg-0)',
      borderTop: '1px solid var(--gold-line)',
      padding: '4rem 1.5rem 2rem',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Brand col */}
          <div>
            <img
              src="/logo_expanded.svg"
              alt="Bar2Go"
              style={{ height: 36, width: 'auto', marginBottom: 16, filter: 'drop-shadow(0 0 6px rgba(201,169,110,0.3))' }}
              onError={e => { e.currentTarget.style.display = 'none'; }}
            />
            <p style={{ color: 'var(--text-2)', fontSize: 14, lineHeight: 1.7, maxWidth: 240 }}>
              Barra móvil profesional para graduaciones, matrimonios y eventos corporativos en Santiago.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 20 }}>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Bar2Go"
                style={iconLinkStyle}
                onMouseEnter={e => Object.assign(e.currentTarget.style, iconLinkHover)}
                onMouseLeave={e => Object.assign(e.currentTarget.style, iconLinkStyle)}
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Links col */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>
              Navegación
            </p>
            <nav aria-label="Footer navigation">
              {footerLinks.map(l => (
                <Link
                  key={l.to}
                  to={l.to}
                  style={{ display: 'block', textDecoration: 'none', color: 'var(--text-2)', fontSize: 14, padding: '5px 0', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-2)'}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact col */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>
              Contacto
            </p>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, color: 'var(--text-2)', fontSize: 14, marginBottom: 10 }}>
              <MapPin size={15} style={{ marginTop: 2, flexShrink: 0, color: 'var(--gold)' }} />
              Santiago, Región Metropolitana
            </div>
            <p style={{ color: 'var(--text-2)', fontSize: 14 }}>
              Respuesta en menos de 1 hora
            </p>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                marginTop: 14,
                padding: '10px 18px',
                borderRadius: 'var(--radius-sm)',
                background: '#16a34a',
                color: '#fff',
                textDecoration: 'none',
                fontSize: 13,
                fontWeight: 500,
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#15803d'}
              onMouseLeave={e => e.currentTarget.style.background = '#16a34a'}
            >
              <MessageCircle size={15} />
              Escribir ahora
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(201,169,110,0.1)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 12,
        }}>
          <p style={{ color: 'var(--text-3)', fontSize: 12 }}>
            &copy; {new Date().getFullYear()} Bar2Go. Todos los derechos reservados.
          </p>
          <p style={{ color: 'var(--text-3)', fontSize: 12 }}>
            Barra móvil · Santiago, Chile
          </p>
        </div>
      </div>
    </footer>
  );
}

const iconLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 38,
  height: 38,
  borderRadius: '50%',
  border: '1px solid var(--gold-line)',
  color: 'var(--text-2)',
  textDecoration: 'none',
  transition: 'border-color 0.2s, color 0.2s, background 0.2s',
  background: 'transparent',
};

const iconLinkHover = {
  ...iconLinkStyle,
  borderColor: 'var(--gold)',
  color: 'var(--gold)',
  background: 'var(--gold-dim)',
};
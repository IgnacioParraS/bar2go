import { MessageCircle, GlassWater, Users, Clock, Shield, CheckCircle2, AlertCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/drinks';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* ─── Data extraída de cotización real ───────────────────────── */
const modalidades = [
  {
    Icon: GlassWater,
    title: 'Servicio Completo',
    badge: 'Más contratado',
    precio: 'Desde $14.200 por persona',
    nota: 'IVA incluido · mín. 50 personas',
    desc: 'Todo incluido: 2 bartenders profesionales, barra móvil con iluminación LED, todos los insumos, vasos acrilicos, montaje y desmontaje.',
    incluye: [
      'bartenders profesionales',
      'Barra móvil moderna con LED',
      'Carta de tragos de autor',
      'Jugos naturales + bebidas gaseosas',
      'vasos acrílicos y decoración de cócteles',
      'Frutas frescas, jarabes e insumos',
      'Montaje y desmontaje incluido',
    ],
    featured: true,
  },
  {
    Icon: Users,
    title: 'Solo Bartenders',
    badge: null,
    precio: 'Desde $90.000 por bartender',
    nota: '4 horas mínimo',
    desc: 'Contrata nuestros bartenders profesionales y operamos con tu stock o el que definas. Ideal si ya cuentas con bebidas.',
    incluye: [
      'Bartender uniformado',
      'Herramientas profesionales',
      'Coctelería clásica y de autor',
      'Carta de mocktails disponible',
    ],
    featured: false,
  },
];

const extras = [
  { label: 'Chimenea de vapor AFIRE', precio: '$70.000 / evento' }
];

const tiposEvento = [
  'Graduaciones y galas de titulación',
  'Matrimonios y compromisos',
  'Cumpleaños y celebraciones',
  'Eventos corporativos',
  'Fiestas de 15 años',
  'Eventos familiares',
];

const garantias = [
  { Icon: Clock,    text: 'Respuesta en menos de 1 hora' },
  { Icon: Shield,   text: 'Cotización válida por 30 días' },
  { Icon: MessageCircle, text: 'Atención directa con el equipo' },
];

function buildMessage() {
  return encodeURIComponent(
    `Hola Bar2Go! Me gustaría cotizar un servicio de barra para mi evento.\n\n` +
    `¿Me pueden contar sobre disponibilidad y precios?`
  );
}

export default function CotizarPage() {
  const headerRef = useScrollReveal();
  const tiposRef  = useScrollReveal({ rootMargin: '-40px' });
  const cardsRef  = useScrollReveal({ rootMargin: '-40px' });
  const extrasRef = useScrollReveal({ rootMargin: '-40px' });
  const ctaRef    = useScrollReveal({ rootMargin: '-40px' });

  return (
    <section style={{ paddingTop: 100, minHeight: '100vh', background: 'var(--bg-1)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 1.5rem 6rem' }}>

        {/* Header */}
        <div ref={headerRef} className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12 }}>
            Barra libre para tu evento
          </p>
          <h1 className="display" style={{ fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: 700, color: 'var(--text-1)', marginBottom: 20 }}>
            Cotiza con nosotros
          </h1>
          <p style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.7, maxWidth: 560, margin: '0 auto' }}>
            Nos adaptamos a cualquier tipo de evento. Contamos con experiencia en graduaciones, matrimonios, cumpleaños y eventos corporativos en Santiago y alrededores.
          </p>
        </div>

        {/* Tipos de evento */}
        <div ref={tiposRef} className="reveal" style={{ marginBottom: '4rem' }}>
          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20, textAlign: 'center' }}>
            Trabajamos con
          </p>
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center',
          }}>
            {tiposEvento.map(t => (
              <span key={t} style={{
                padding: '8px 16px', borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--gold-line)', fontSize: 13,
                color: 'var(--text-2)', background: 'var(--bg-2)',
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Modalidad cards */}
        <div ref={cardsRef} className="reveal" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem',
        }}>
          {modalidades.map(({ Icon, title, badge, precio, nota, desc, incluye, featured }) => (
            <div key={title} style={{
              borderRadius: 'var(--radius-md)',
              border: featured ? '1px solid var(--gold)' : '1px solid var(--gold-line)',
              background: featured ? 'linear-gradient(135deg, var(--bg-3), var(--bg-2))' : 'var(--bg-2)',
              padding: '2rem',
              position: 'relative',
            }}>
              {badge && (
                <div style={{
                  position: 'absolute', top: -1, right: 24,
                  padding: '5px 14px', borderRadius: '0 0 8px 8px',
                  background: 'var(--gold)', color: 'var(--bg-0)',
                  fontSize: 11, fontWeight: 500, letterSpacing: '0.06em',
                }}>
                  {badge}
                </div>
              )}

              <div style={{
                width: 48, height: 48, borderRadius: 'var(--radius-sm)',
                background: 'var(--gold-dim)', border: '1px solid var(--gold-line)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20,
              }}>
                <Icon size={22} style={{ color: 'var(--gold)' }} strokeWidth={1.5} />
              </div>

              <h3 style={{ fontSize: 20, fontWeight: 500, color: 'var(--text-1)', marginBottom: 6 }}>
                {title}
              </h3>
              <p style={{ fontSize: 18, fontWeight: 600, color: 'var(--gold)', marginBottom: 4, fontFamily: 'var(--font-display)' }}>
                {precio}
              </p>
              <p style={{ fontSize: 12, color: 'var(--text-3)', marginBottom: 16, letterSpacing: '0.03em' }}>
                {nota}
              </p>
              <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 20 }}>
                {desc}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {incluye.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <CheckCircle2 size={14} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 13, color: 'var(--text-2)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Extras opcionales */}
        <div ref={extrasRef} className="reveal" style={{
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--gold-line)',
          background: 'var(--bg-2)',
          padding: '1.75rem 2rem',
          marginBottom: '4rem',
        }}>
          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>
            Extras opcionales
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {extras.map(({ label, precio }) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
                <span style={{ fontSize: 14, color: 'var(--text-2)' }}>{label}</span>
                <span style={{ fontSize: 14, color: 'var(--gold)', fontWeight: 500 }}>{precio}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Política de cancelación */}
        <div style={{
          display: 'flex', gap: 12, alignItems: 'flex-start',
          padding: '1.25rem 1.5rem',
          borderRadius: 'var(--radius-md)',
          border: '1px solid rgba(201,169,110,0.15)',
          background: 'rgba(201,169,110,0.04)',
          marginBottom: '4rem',
        }}>
          <AlertCircle size={16} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: 2 }} />
          <div>
            <p style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-1)', marginBottom: 4 }}>Política de cancelación</p>
            <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.6, margin: 0 }}>
              Con más de 5 días de anticipación: devolución total del anticipo. Con menos de 5 días: sin devolución. Todos los valores en pesos chilenos (CLP).
            </p>
          </div>
        </div>

        {/* Garantías */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '1rem',
          justifyContent: 'center', marginBottom: '3.5rem',
        }}>
          {garantias.map(({ Icon, text }) => (
            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Icon size={15} style={{ color: 'var(--gold)', flexShrink: 0 }} />
              <span style={{ fontSize: 13, color: 'var(--text-2)' }}>{text}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: '3rem' }}>
          <div style={{ flex: 1, height: 1, background: 'var(--gold-line)' }} />
          <span style={{ fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-3)' }}>
            listo para cotizar
          </span>
          <div style={{ flex: 1, height: 1, background: 'var(--gold-line)' }} />
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="reveal" style={{ textAlign: 'center' }}>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${buildMessage()}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              gap: 12, width: '100%', maxWidth: 420, padding: '18px',
              borderRadius: 'var(--radius-md)', background: '#16a34a',
              color: '#fff', textDecoration: 'none', fontWeight: 500, fontSize: 17,
              transition: 'background 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = '#15803d'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#16a34a'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            <MessageCircle size={20} />
            Hablar por WhatsApp
          </a>
          <p style={{ marginTop: 16, fontSize: 13, color: 'var(--text-3)' }}>
            Respuesta en menos de 1 hora · Santiago, Chile
          </p>
        </div>

      </div>
    </section>
  );
}
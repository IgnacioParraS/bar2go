import { MessageCircle, GlassWater, Users, Clock, Shield, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../data/drinks';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* ─── WhatsApp icon SVG ─────────────────────────────────────── */
const WAppIcon = ({ size = 20 }) => (
  <svg className="wapp-icon" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ─── Data ──────────────────────────────────────────────────── */
const modalidades = [
  {
    Icon: GlassWater,
    title: 'Servicio Completo',
    badge: 'Más contratado',
    precio: 'Desde $11.500 por persona',
    nota: 'IVA incluido · mín. 50 personas',
    desc: 'Todo incluido: bartenders profesionales, barra móvil con iluminación LED, todos los insumos, vasos acrílicos, montaje y desmontaje.',
    incluye: [
      'Bartenders profesionales uniformados',
      'Barra móvil moderna con LED',
      'Carta de tragos de autor',
      'Jugos naturales + bebidas gaseosas',
      'Vasos acrílicos y decoración de cócteles',
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
    desc: 'Contrata nuestros bartenders y operamos con tu stock o el que definas. Ideal si ya cuentas con bebidas.',
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
  {
    label: 'Chimenea de vapor AFIRE',
    desc: 'Efecto dramático de neblina para tu evento',
    precio: '$70.000 / evento',
    Icon: Sparkles,
  },
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
  { Icon: Clock,         text: 'Respuesta en menos de 1 hora' },
  { Icon: Shield,        text: 'Cotización válida por 30 días' },
  { Icon: MessageCircle, text: 'Atención directa con el equipo' },
];

function buildMessage() {
  return encodeURIComponent(
    'Hola Bar2Go! Me gustaría cotizar un servicio de barra para mi evento.\n\n¿Me pueden contar sobre disponibilidad y precios?'
  );
}

/* ─── CotizarPage ───────────────────────────────────────────── */
export default function CotizarPage() {
  const headerRef = useScrollReveal();
  const tiposRef  = useScrollReveal({ rootMargin: '-40px' });
  const cardsRef  = useScrollReveal({ rootMargin: '-40px' });
  const extrasRef = useScrollReveal({ rootMargin: '-40px' });
  const ctaRef    = useScrollReveal({ rootMargin: '-40px' });

  return (
    <section style={{ paddingTop: 68, minHeight: '100vh', background: 'var(--bg-1)' }}>

      {/* ── Page hero ── */}
      <div style={{
        position: 'relative',
        background: 'var(--bg-0)',
        padding: '5rem 1.5rem 4.5rem',
        overflow: 'hidden',
      }}>
        {/* Aurora background */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 60% 80% at 15% 50%, rgba(201,169,110,0.08) 0%, transparent 65%), ' +
            'radial-gradient(ellipse 60% 70% at 85% 50%, rgba(180,130,60,0.06) 0%, transparent 65%)',
          filter: 'blur(50px)',
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: 1,
          background: 'linear-gradient(90deg, transparent, var(--gold-line) 30%, var(--gold-line) 70%, transparent)',
        }} />

        <div ref={headerRef} className="reveal" style={{
          maxWidth: 680, margin: '0 auto', textAlign: 'center',
          position: 'relative', zIndex: 1,
        }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Barra libre para tu evento
          </div>
          <h1 className="display" style={{
            fontSize: 'clamp(34px, 6vw, 60px)',
            fontWeight: 600, color: 'var(--text-1)',
            marginBottom: 20,
          }}>
            Cotiza con{' '}
            <em className="text-shimmer" style={{ fontStyle: 'italic' }}>nosotros</em>
          </h1>
          <p style={{
            fontSize: 16.5, color: 'var(--text-2)',
            lineHeight: 1.78, maxWidth: 520, margin: '0 auto',
          }}>
            Nos adaptamos a cualquier tipo de evento. Experiencia en graduaciones,
            matrimonios, cumpleaños y eventos corporativos en Santiago y alrededores.
          </p>

          {/* Garantías inline */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', gap: '1.5rem',
            justifyContent: 'center', marginTop: '2rem',
          }}>
            {garantias.map(({ Icon, text }) => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Icon size={14} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: 'var(--text-2)' }}>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 960, margin: '0 auto', padding: '4.5rem 1.5rem 6rem' }}>

        {/* ── Tipos de evento ── */}
        <div ref={tiposRef} className="reveal" style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Trabajamos con
          </div>
          <div style={{
            display: 'flex', flexWrap: 'wrap',
            gap: 10, justifyContent: 'center',
          }}>
            {tiposEvento.map(t => (
              <span key={t} style={{
                padding: '9px 18px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--gold-line)',
                fontSize: 13.5, color: 'var(--text-2)',
                background: 'var(--glass)',
                backdropFilter: 'blur(10px)',
                transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--text-1)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--gold-line)'; e.currentTarget.style.color = 'var(--text-2)'; }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* ── Modalidades ── */}
        <div ref={cardsRef} className="stagger" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem',
        }}>
          {modalidades.map(({ Icon, title, badge, precio, nota, desc, incluye, featured }) => (
            <div key={title} style={{
              borderRadius: 'var(--radius-md)',
              border: featured
                ? '1px solid rgba(201,169,110,0.5)'
                : '1px solid var(--glass-border)',
              background: featured
                ? 'linear-gradient(145deg, rgba(13,21,37,0.95), rgba(8,13,24,0.9))'
                : 'var(--glass)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              padding: '2.25rem',
              position: 'relative',
              boxShadow: featured
                ? '0 0 0 1px rgba(201,169,110,0.08), 0 24px 60px rgba(0,0,0,0.4), 0 0 40px rgba(201,169,110,0.04)'
                : '0 8px 32px rgba(0,0,0,0.2)',
              transition: 'transform 0.3s var(--ease-expo), box-shadow 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = featured
                ? '0 0 0 1px rgba(201,169,110,0.15), 0 32px 80px rgba(0,0,0,0.5), 0 0 60px rgba(201,169,110,0.06)'
                : '0 16px 48px rgba(0,0,0,0.35), 0 0 0 1px var(--gold-line)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = featured
                ? '0 0 0 1px rgba(201,169,110,0.08), 0 24px 60px rgba(0,0,0,0.4), 0 0 40px rgba(201,169,110,0.04)'
                : '0 8px 32px rgba(0,0,0,0.2)';
            }}
            >
              {/* Badge */}
              {badge && (
                <div style={{
                  position: 'absolute', top: -1, right: 28,
                  padding: '5px 14px',
                  borderRadius: '0 0 var(--radius-sm) var(--radius-sm)',
                  background: 'var(--gold)', color: 'var(--bg-0)',
                  fontSize: 10.5, fontWeight: 600, letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                }}>
                  {badge}
                </div>
              )}

              {/* Icon */}
              <div style={{
                width: 50, height: 50,
                borderRadius: 'var(--radius-sm)',
                background: 'var(--gold-dim)',
                border: '1px solid var(--gold-line)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 22,
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
              }}>
                <Icon size={22} style={{ color: 'var(--gold)' }} strokeWidth={1.5} />
              </div>

              <h3 className="display" style={{
                fontSize: 24, fontWeight: 600,
                color: 'var(--text-1)', marginBottom: 6,
              }}>
                {title}
              </h3>

              {/* Price */}
              <p className="display" style={{
                fontSize: 20, fontWeight: 600,
                color: 'var(--gold)', marginBottom: 3,
              }}>
                {precio}
              </p>
              <p style={{ fontSize: 12, color: 'var(--text-3)', marginBottom: 18, letterSpacing: '0.03em' }}>
                {nota}
              </p>

              <p style={{ fontSize: 14.5, color: 'var(--text-2)', lineHeight: 1.75, marginBottom: 22 }}>
                {desc}
              </p>

              {/* Divider */}
              <div style={{ height: 1, background: 'var(--gold-line)', marginBottom: 18 }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {incluye.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                    <CheckCircle2 size={14} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: 2 }} />
                    <span style={{ fontSize: 13.5, color: 'var(--text-2)', lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Extras ── */}
        <div ref={extrasRef} className="reveal" style={{
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--glass-border)',
          background: 'var(--glass)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          padding: '2rem',
          marginBottom: '3.5rem',
        }}>
          <div className="section-label" style={{ marginBottom: 20 }}>
            Extras opcionales
          </div>

          {extras.map(({ Icon, label, desc: extDesc, precio }) => (
            <div key={label} style={{
              display: 'flex', alignItems: 'center',
              gap: 16, flexWrap: 'wrap',
            }}>
              <div style={{
                width: 40, height: 40,
                borderRadius: 'var(--radius-sm)',
                background: 'var(--gold-dim)',
                border: '1px solid var(--gold-line)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Icon size={17} style={{ color: 'var(--gold)' }} strokeWidth={1.5} />
              </div>
              <div style={{ flex: 1, minWidth: 160 }}>
                <p style={{ fontSize: 15, fontWeight: 500, color: 'var(--text-1)', margin: 0 }}>{label}</p>
                <p style={{ fontSize: 13, color: 'var(--text-3)', margin: '2px 0 0' }}>{extDesc}</p>
              </div>
              <span style={{
                fontSize: 15, color: 'var(--gold)', fontWeight: 600,
                fontFamily: 'var(--font-display)',
              }}>
                {precio}
              </span>
            </div>
          ))}
        </div>

        {/* ── Política de cancelación ── */}
        <div style={{
          display: 'flex', gap: 14, alignItems: 'flex-start',
          padding: '1.5rem 1.75rem',
          borderRadius: 'var(--radius-md)',
          border: '1px solid rgba(201,169,110,0.12)',
          background: 'rgba(201,169,110,0.04)',
          marginBottom: '4rem',
        }}>
          <AlertCircle size={16} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: 3 }} />
          <div>
            <p style={{ fontSize: 13.5, fontWeight: 500, color: 'var(--text-1)', marginBottom: 5 }}>
              Política de cancelación
            </p>
            <p style={{ fontSize: 13.5, color: 'var(--text-2)', lineHeight: 1.65, margin: 0 }}>
              Con más de 5 días de anticipación: devolución total del anticipo.
              Con menos de 5 días: sin devolución. Todos los valores en pesos chilenos (CLP).
            </p>
          </div>
        </div>

        {/* ── Divider ── */}
        <div style={{
          display: 'flex', alignItems: 'center',
          gap: 16, marginBottom: '3rem',
        }}>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, var(--gold-line))' }} />
          <span style={{ fontSize: 10.5, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-3)' }}>
            listo para cotizar
          </span>
          <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, var(--gold-line), transparent)' }} />
        </div>

        {/* ── CTA ── */}
        <div ref={ctaRef} className="reveal">
          <div style={{
            borderRadius: 'var(--radius-xl)',
            background: 'var(--glass)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid var(--glass-border)',
            padding: '3.5rem 2.5rem',
            textAlign: 'center',
            position: 'relative', overflow: 'hidden',
            boxShadow:
              '0 0 0 1px rgba(201,169,110,0.05), ' +
              '0 24px 80px rgba(0,0,0,0.45), ' +
              '0 0 60px rgba(201,169,110,0.04)',
          }}>
            {/* Ambient */}
            <div aria-hidden="true" style={{
              position: 'absolute', inset: 0, pointerEvents: 'none',
              background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,169,110,0.04), transparent)',
              filter: 'blur(20px)',
            }} />

            {/* Corner brackets */}
            {[
              { top: 16, left: 16, borderTop: '1px solid var(--gold)', borderLeft: '1px solid var(--gold)' },
              { top: 16, right: 16, borderTop: '1px solid var(--gold)', borderRight: '1px solid var(--gold)' },
              { bottom: 16, left: 16, borderBottom: '1px solid var(--gold)', borderLeft: '1px solid var(--gold)' },
              { bottom: 16, right: 16, borderBottom: '1px solid var(--gold)', borderRight: '1px solid var(--gold)' },
            ].map((s, i) => (
              <div key={i} aria-hidden="true" style={{
                position: 'absolute', width: 28, height: 28,
                opacity: 0.3, ...s,
              }} />
            ))}

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>
                Contacto directo
              </div>

              <h2 className="display" style={{
                fontSize: 'clamp(26px, 4vw, 40px)',
                fontWeight: 600, color: 'var(--text-1)',
                marginBottom: 12,
              }}>
                Hablemos sobre{' '}
                <em className="text-shimmer" style={{ fontStyle: 'italic' }}>tu evento</em>
              </h2>

              <p style={{
                fontSize: 15.5, color: 'var(--text-2)',
                lineHeight: 1.8, marginBottom: 36,
                maxWidth: 440, margin: '0 auto 36px',
              }}>
                Cotizamos sin compromiso y respondemos en menos de 1 hora.
                Atención directa con nuestro equipo.
              </p>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${buildMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ width: '100%', maxWidth: 400, marginBottom: 16 }}
              >
                <WAppIcon size={20} />
                Hablar por WhatsApp
              </a>

              <p style={{ fontSize: 12.5, color: 'var(--text-3)', letterSpacing: '0.04em' }}>
                Respuesta en menos de 1 hora · Santiago, Chile
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

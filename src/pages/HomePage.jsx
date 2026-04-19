import { Link } from 'react-router-dom';
import { ArrowRight, Star, GlassWater, Users, Home, Building2, CheckCircle2, ChevronDown } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { WHATSAPP_NUMBER } from '../data/drinks';

/* ─── WhatsApp icon SVG ─────────────────────────────────────── */
const WAppIcon = ({ size = 20 }) => (
  <svg className="wapp-icon" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ─── Aurora animated background ───────────────────────────── */
function Aurora() {
  return (
    <div aria-hidden="true" style={{
      position: 'absolute', inset: 0, overflow: 'hidden',
      pointerEvents: 'none', zIndex: 0,
    }}>
      <div style={{
        position: 'absolute', top: '-15%', left: '-10%',
        width: '65%', height: '80%',
        background: 'radial-gradient(ellipse, rgba(201,169,110,0.10) 0%, rgba(201,169,110,0.03) 45%, transparent 70%)',
        filter: 'blur(70px)',
        animation: 'aurora-a 22s ease-in-out infinite',
        willChange: 'transform',
      }} />
      <div style={{
        position: 'absolute', top: '20%', right: '-5%',
        width: '55%', height: '65%',
        background: 'radial-gradient(ellipse, rgba(180,130,60,0.08) 0%, rgba(160,110,40,0.02) 50%, transparent 72%)',
        filter: 'blur(80px)',
        animation: 'aurora-b 28s ease-in-out infinite',
        willChange: 'transform',
      }} />
      <div style={{
        position: 'absolute', bottom: '-5%', left: '28%',
        width: '48%', height: '45%',
        background: 'radial-gradient(ellipse, rgba(201,169,110,0.06) 0%, transparent 68%)',
        filter: 'blur(90px)',
        animation: 'aurora-c 34s ease-in-out infinite',
        willChange: 'transform',
      }} />
      {/* Radial vignette to keep edges deep */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 85% 85% at 50% 50%, transparent 35%, var(--bg-1) 100%)',
      }} />
    </div>
  );
}

/* ─── Data ──────────────────────────────────────────────────── */
const reviews = [
  {
    name: 'Iker A.',
    event: 'Cumpleaños 18',
    text: 'El mejor mojito que he probado en la vida. La gente no paraba de pedir más.',
    stars: 5,
  },
  {
    name: 'Sebastián R.',
    event: 'Gala de Titulación — Ingeniería',
    text: 'Servicio impecable, puntuales y muy profesionales. El detalle de la barra LED le dio un nivel increíble al evento.',
    stars: 5,
  },
  {
    name: 'Catalina F.',
    event: 'Cumpleaños 30',
    text: 'La carta de mocktails fue el hit de la noche. Los que no toman alcohol igual disfrutaron al 100%. Totalmente recomendados.',
    stars: 5,
  },
];

const services = [
  {
    Icon: GlassWater,
    num: '01',
    title: 'Barra Libre Completa',
    desc: 'Bartenders profesionales, barra móvil con LED, todos los insumos y utensilios. Tú no te preocupas de nada.',
    detail: ['Desde 50 hasta 500 personas', 'Montaje y desmontaje incluido'],
  },
  {
    Icon: Users,
    num: '02',
    title: 'Solo Bartenders',
    desc: 'Nuestros bartenders operan con tu stock. Mismo estándar de servicio, sin el costo de insumos.',
    detail: ['Coctelería clásica y de autor', 'Mínimo 4 horas de servicio'],
  },
  {
    Icon: Home,
    num: '03',
    title: 'Barra Sin Alcohol',
    desc: 'Mocktails artesanales, jugos naturales y bebidas. Apta para menores de edad. Ideal para galas y eventos familiares.',
    detail: ['Carta de mocktails de autor', 'Estación de jugos naturales'],
  },
  {
    Icon: Building2,
    num: '04',
    title: 'Eventos Corporativos',
    desc: 'Adaptamos el formato y la carta. Factura disponible. Experiencia en eventos de empresa en Santiago.',
    detail: ['Emisión de factura', 'Carta sin alcohol disponible'],
  },
];

const stats = [
  { value: '+20', label: 'Eventos realizados' },
  { value: '5★',  label: 'Calificación promedio' },
  { value: '7h',  label: 'Servicio promedio' },
  { value: '<1h', label: 'Respuesta WhatsApp' },
];

/* ─── Hero ──────────────────────────────────────────────────── */
function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100dvh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      paddingTop: 68,
      background: 'var(--bg-1)',
      overflow: 'hidden',
    }}>
      <Aurora />

      <div style={{
        position: 'relative', zIndex: 1, flex: 1,
        maxWidth: 1200, margin: '0 auto', width: '100%',
        padding: '5rem 1.5rem 4rem',
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) min(400px, 44%)',
        gap: '4rem',
        alignItems: 'center',
      }} className="hero-grid">

        {/* ── Text column ── */}
        <div style={{ animation: 'fade-up 1s var(--ease-expo) 0.1s both' }}>

          {/* Eyebrow */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
            <div style={{ width: 36, height: 1, background: 'var(--gold)', opacity: 0.7 }} />
            <span style={{
              fontSize: 10.5, fontWeight: 500, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: 'var(--gold)',
            }}>
              Santiago, Chile · Barra Móvil Profesional
            </span>
          </div>

          {/* Headline */}
          <h1 className="display" style={{
            fontSize: 'clamp(44px, 5.8vw, 80px)',
            fontWeight: 600, color: 'var(--text-1)',
            lineHeight: 1.04, marginBottom: 28,
          }}>
            Tu barra,{' '}
            <em className="text-shimmer" style={{ fontStyle: 'italic', display: 'block' }}>
              donde tú quieras
            </em>
          </h1>

          <p style={{
            fontSize: 17, color: 'var(--text-2)', lineHeight: 1.8,
            marginBottom: 40, maxWidth: 440,
          }}>
            Bartenders profesionales y cócteles a domicilio para graduaciones,
            matrimonios y eventos corporativos en Santiago.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
            <Link to="/cotizar" className="btn-gold">
              Pedir cotización <ArrowRight size={16} />
            </Link>
            <Link to="/carta" className="btn-ghost">
              Ver carta de tragos
            </Link>
          </div>

          {/* Social proof strip */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: 20,
            flexWrap: 'wrap',
          }}>
            <div style={{ display: 'flex', gap: 3 }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={13} style={{ color: 'var(--gold)', fill: 'var(--gold)' }} />
              ))}
            </div>
            <span style={{ fontSize: 13, color: 'var(--text-3)', letterSpacing: '0.04em' }}>
              5.0 · Basado en +20 eventos
            </span>
            <div style={{
              width: 1, height: 14, background: 'var(--gold-line)',
              display: 'inline-block',
            }} />
            <span style={{ fontSize: 13, color: 'var(--text-3)' }}>
              Respuesta en &lt;1h
            </span>
          </div>
        </div>

        {/* ── Video column ── */}
        <div style={{ animation: 'fade-up 1s var(--ease-expo) 0.28s both' }}>
          {/* Glass frame */}
          <div style={{
            position: 'relative',
            borderRadius: 'var(--radius-lg)',
            padding: 2,
            background: 'linear-gradient(135deg, rgba(201,169,110,0.3) 0%, rgba(201,169,110,0.06) 50%, rgba(201,169,110,0.2) 100%)',
            boxShadow:
              '0 0 0 1px rgba(201,169,110,0.08), ' +
              '0 24px 80px rgba(0,0,0,0.55), ' +
              '0 4px 24px rgba(0,0,0,0.35), ' +
              '0 0 100px rgba(201,169,110,0.04)',
          }}>
            <div style={{
              position: 'relative',
              aspectRatio: '9 / 16',
              borderRadius: 'calc(var(--radius-lg) - 2px)',
              overflow: 'hidden',
              background: 'var(--bg-0)',
            }}>
              <iframe
                src="https://www.youtube.com/embed/IiQR93ex1_Y?autoplay=1&mute=1&loop=1&playlist=IiQR93ex1_Y&controls=0&playsinline=1&rel=0&showinfo=0&modestbranding=1"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Bar2Go — barra móvil en acción"
                style={{
                  position: 'absolute', inset: 0,
                  width: '100%', height: '100%',
                  border: 'none',
                }}
              />
              {/* Subtle vignette on video */}
              <div style={{
                position: 'absolute', inset: 0, pointerEvents: 'none',
                background: 'linear-gradient(to bottom, rgba(3,5,10,0.2) 0%, transparent 30%, transparent 70%, rgba(3,5,10,0.4) 100%)',
              }} />
            </div>
          </div>

          {/* Live badge */}
          <div style={{
            marginTop: 14, display: 'flex', alignItems: 'center',
            gap: 8, justifyContent: 'center',
          }}>
            <div style={{
              width: 6, height: 6, borderRadius: '50%',
              background: '#22c55e',
              boxShadow: '0 0 8px rgba(34,197,94,0.6)',
              animation: 'pulse-gold 2s ease-in-out infinite',
            }} />
            <span style={{ fontSize: 11.5, color: 'var(--text-3)', letterSpacing: '0.07em' }}>
              Eventos · Servicio Bar2Go
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'relative', zIndex: 1,
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        paddingBottom: '2rem', gap: 6,
      }}>
        <span style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-3)' }}>
          Descubrir
        </span>
        <ChevronDown size={16} style={{ color: 'var(--gold)', animation: 'scroll-caret 1.8s ease-in-out infinite' }} />
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
            padding-top: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ─── Stats ─────────────────────────────────────────────────── */
function Stats() {
  const ref = useScrollReveal();
  return (
    <section style={{ background: 'var(--bg-0)', position: 'relative', overflow: 'hidden' }}>
      {/* Top / bottom gold lines */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, var(--gold-line) 30%, var(--gold-line) 70%, transparent)' }} />

      <div ref={ref} className="stagger" style={{
        maxWidth: 960, margin: '0 auto',
        padding: '4.5rem 1.5rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '2rem', textAlign: 'center',
      }} id="stats-grid">

        {stats.map((s) => (
          <div key={s.label} style={{ position: 'relative' }}>
            {/* Large number */}
            <p className="display" style={{
              fontSize: 'clamp(36px, 4.5vw, 56px)',
              fontWeight: 600, color: 'var(--gold)',
              margin: '0 0 8px', lineHeight: 1,
            }}>
              {s.value}
            </p>
            <p style={{
              fontSize: 12.5, color: 'var(--text-2)',
              letterSpacing: '0.05em', textTransform: 'uppercase',
              fontWeight: 400,
            }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, var(--gold-line) 30%, var(--gold-line) 70%, transparent)' }} />

      <style>{`
        @media (max-width: 600px) {
          #stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 2.5rem 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ─── Services ──────────────────────────────────────────────── */
function Services() {
  const headerRef = useScrollReveal();
  const gridRef   = useScrollReveal({ rootMargin: '-40px' });

  return (
    <section style={{ padding: '7rem 1.5rem', background: 'var(--bg-1)', position: 'relative', overflow: 'hidden' }}>
      {/* Ambient glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '20%', left: '50%',
        transform: 'translateX(-50%)',
        width: '60%', height: '40%',
        background: 'radial-gradient(ellipse, rgba(201,169,110,0.04) 0%, transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div ref={headerRef} className="reveal" style={{ marginBottom: '4rem' }}>
          <div className="section-label">Qué ofrecemos</div>
          <h2 className="display" style={{
            fontSize: 'clamp(34px, 5vw, 52px)',
            fontWeight: 600, color: 'var(--text-1)',
          }}>
            Un servicio para{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>cada ocasión</em>
          </h2>
        </div>

        {/* 2×2 grid */}
        <div ref={gridRef} className="stagger" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '1.5px',
          background: 'var(--gold-line)',
          border: '1px solid var(--gold-line)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
        }} id="services-grid">

          {services.map(({ Icon, num, title, desc, detail }) => (
            <div key={num}
              className="glass-card"
              style={{
                borderRadius: 0,
                border: 'none',
                padding: '2.5rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Background number watermark */}
              <span className="display" aria-hidden="true" style={{
                position: 'absolute', bottom: -10, right: 16,
                fontSize: 120, fontWeight: 700,
                color: 'rgba(201,169,110,0.04)',
                lineHeight: 1, userSelect: 'none',
                pointerEvents: 'none',
              }}>
                {num}
              </span>

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 20 }}>
                  <div style={{
                    width: 46, height: 46,
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--gold-dim)',
                    border: '1px solid var(--gold-line)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
                  }}>
                    <Icon size={20} style={{ color: 'var(--gold)' }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <span style={{ fontSize: 10.5, color: 'var(--text-3)', letterSpacing: '0.1em' }}>{num}</span>
                    <h3 className="display" style={{
                      fontSize: 22, fontWeight: 600,
                      color: 'var(--text-1)', margin: '2px 0 0',
                    }}>
                      {title}
                    </h3>
                  </div>
                </div>

                <p style={{
                  fontSize: 14.5, color: 'var(--text-2)',
                  lineHeight: 1.75, marginBottom: 20,
                }}>
                  {desc}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {detail.map((d) => (
                    <div key={d} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <CheckCircle2 size={13} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                      <span style={{ fontSize: 13, color: 'var(--text-3)' }}>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ─── Reviews ───────────────────────────────────────────────── */
function Reviews() {
  const headerRef = useScrollReveal();
  const cardsRef  = useScrollReveal({ rootMargin: '-40px' });

  return (
    <section style={{
      padding: '7rem 1.5rem',
      background: 'var(--bg-0)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Subtle center glow */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '80%', height: '50%',
        background: 'radial-gradient(ellipse, rgba(201,169,110,0.04) 0%, transparent 65%)',
        filter: 'blur(80px)', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div ref={headerRef} className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Lo que dicen
          </div>
          <h2 className="display" style={{
            fontSize: 'clamp(34px, 5vw, 52px)',
            fontWeight: 600, color: 'var(--text-1)',
          }}>
            Clientes que{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>volvieron a contratarnos</em>
          </h2>
        </div>

        {/* Review cards */}
        <div ref={cardsRef} className="stagger" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
        }} id="reviews-grid">

          {reviews.map((r, i) => (
            <div key={i} className="glass-card" style={{ padding: '2.25rem' }}>

              {/* Large quote mark */}
              <div className="display" aria-hidden="true" style={{
                fontSize: 72, lineHeight: 0.8,
                color: 'var(--gold)', opacity: 0.25,
                marginBottom: 20, userSelect: 'none',
                fontWeight: 600,
              }}>
                "
              </div>

              {/* Stars */}
              <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                {[...Array(r.stars)].map((_, j) => (
                  <Star key={j} size={13} style={{ color: 'var(--gold)', fill: 'var(--gold)' }} />
                ))}
              </div>

              {/* Quote text */}
              <p className="display" style={{
                fontSize: 17, fontStyle: 'italic',
                color: 'var(--text-1)', lineHeight: 1.65,
                marginBottom: 24, fontWeight: 400,
              }}>
                "{r.text}"
              </p>

              {/* Divider */}
              <div style={{ height: 1, background: 'var(--gold-line)', marginBottom: 18 }} />

              <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-1)', margin: 0 }}>
                {r.name}
              </p>
              <p style={{ fontSize: 12, color: 'var(--gold)', marginTop: 3, letterSpacing: '0.04em' }}>
                {r.event}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #reviews-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ─── CTA ───────────────────────────────────────────────────── */
function CTA() {
  const ref = useScrollReveal();

  const waMsg = encodeURIComponent(
    'Hola Bar2Go! Me gustaría cotizar un servicio de barra para mi evento.\n\n¿Me pueden contar sobre disponibilidad y precios?'
  );

  return (
    <section style={{
      padding: '8rem 1.5rem',
      background: 'var(--bg-1)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Aurora behind CTA card */}
      <div aria-hidden="true" style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(201,169,110,0.05) 0%, transparent 70%)',
        filter: 'blur(40px)',
      }} />

      <div ref={ref} className="reveal" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          maxWidth: 680, margin: '0 auto',
          padding: '4.5rem 3rem',
          borderRadius: 'var(--radius-xl)',
          background: 'var(--glass)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid var(--glass-border)',
          textAlign: 'center',
          position: 'relative', overflow: 'hidden',
          boxShadow:
            '0 0 0 1px rgba(201,169,110,0.05), ' +
            '0 32px 100px rgba(0,0,0,0.5), ' +
            '0 0 80px rgba(201,169,110,0.04)',
        }}>

          {/* Corner brackets */}
          {[
            { top: 18, left: 18, borderTop: '1px solid var(--gold)', borderLeft: '1px solid var(--gold)' },
            { top: 18, right: 18, borderTop: '1px solid var(--gold)', borderRight: '1px solid var(--gold)' },
            { bottom: 18, left: 18, borderBottom: '1px solid var(--gold)', borderLeft: '1px solid var(--gold)' },
            { bottom: 18, right: 18, borderBottom: '1px solid var(--gold)', borderRight: '1px solid var(--gold)' },
          ].map((s, i) => (
            <div key={i} aria-hidden="true" style={{
              position: 'absolute', width: 32, height: 32,
              opacity: 0.35, ...s,
            }} />
          ))}

          <div className="section-label" style={{ justifyContent: 'center' }}>
            ¿Listo para cotizar?
          </div>

          <h2 className="display" style={{
            fontSize: 'clamp(30px, 5vw, 48px)',
            fontWeight: 600, color: 'var(--text-1)',
            marginBottom: 16,
          }}>
            Hablemos sobre{' '}
            <em className="text-shimmer" style={{ fontStyle: 'italic' }}>tu evento</em>
          </h2>

          <p style={{
            fontSize: 16, color: 'var(--text-2)',
            lineHeight: 1.8, marginBottom: 40, maxWidth: 440, margin: '0 auto 40px',
          }}>
            Respondemos en menos de 1 hora por WhatsApp.
            Cotización sin compromiso, válida por 30 días.
          </p>

          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{ width: '100%', maxWidth: 380 }}
          >
            <WAppIcon size={20} />
            Hablar por WhatsApp
          </a>

          <p style={{ marginTop: 18, fontSize: 12.5, color: 'var(--text-3)', letterSpacing: '0.04em' }}>
            Respuesta en menos de 1 hora · Santiago, Chile
          </p>

        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .hero-cta-card { padding: 3rem 1.5rem !important; }
        }
      `}</style>
    </section>
  );
}

/* ─── Page ──────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <Reviews />
      <CTA />
    </>
  );
}

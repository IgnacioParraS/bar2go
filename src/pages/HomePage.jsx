import { Link } from 'react-router-dom';
import { ArrowRight, Star, GlassWater, Users, Home, Building2, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* ─── Data ───────────────────────────────────────────────────── */
const reviews = [
  {
    name: 'Iker A.',
    event: 'Cumpleaños 18',
    text: 'El mejor mojito que he probado en la vida.',
    stars: 5,
  },
  {
    name: 'Sebastián R.',
    event: 'Graduación ingeniería',
    text: 'Contratamos Bar2Go para nuestra gala de titulación. Servicio impecable, puntuales y muy profesionales. Lo pasamos genial.',
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
    desc: '2 bartenders profesionales, barra móvil con LED, todos los insumos y utensilios necesarios. Tú no te preocupas de nada.',
    detail: ['Desde 50 hasta 500 personas', 'Montaje y desmontaje incluido'],
  },
  {
    Icon: Users,
    num: '02',
    title: 'Solo Bartenders',
    desc: 'Nuestros bartenders operan con tu stock o el que definas. Mismo estándar de servicio, sin el costo de insumos.',
    detail: ['Coctelería clásica y de autor', 'Mínimo 4 horas de servicio'],
  },
  {
    Icon: Home,
    num: '03',
    title: 'Eventos Sin Alcohol',
    desc: 'Barra 100% de mocktails, jugos naturales y bebidas. Apta para menores de edad. Ideal para galas de graduación y eventos familiares.',
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
  { value: '7h',  label: 'Servicio promedio por evento' },
  { value: '<1h', label: 'Respuesta WhatsApp' },
];

/* ─── Components ─────────────────────────────────────────────── */

function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'stretch',
      paddingTop: 68,
      background: 'var(--bg-1)',
      position: 'relative',
      overflow: 'hidden',
    }}>

      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 80% at 20% 50%, rgba(201,169,110,0.04) 0%, transparent 70%)',
      }} />

      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: 1200, margin: '0 auto', width: '100%',
        padding: '4rem 1.5rem',
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) min(380px, 42%)',
        gap: '4rem',
        alignItems: 'center',
      }}
      className="hero-grid"
      >

        {/* Col texto */}
        <div style={{ animation: 'fade-up 0.9s var(--ease-out-expo) 0.1s both' }}>
          <p style={{
            fontSize: 11, fontWeight: 500, letterSpacing: '0.2em',
            textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20,
          }}>
            Santiago, Chile · Barra Móvil Profesional
          </p>

          <h1 className="display" style={{
            fontSize: 'clamp(40px, 5.5vw, 76px)',
            fontWeight: 700, color: 'var(--text-1)',
            lineHeight: 1.05, marginBottom: 24,
          }}>
            Tu barra,{' '}
            <em className="text-shimmer" style={{ fontStyle: 'italic', display: 'block' }}>
              donde tú quieras
            </em>
          </h1>

          <p style={{
            fontSize: 17, color: 'var(--text-2)', lineHeight: 1.75,
            marginBottom: 40, maxWidth: 440,
          }}>
            Bartenders profesionales y cócteles a domicilio para graduaciones, matrimonios y eventos corporativos en Santiago.
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link
              to="/cotizar"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '15px 28px', borderRadius: 'var(--radius-sm)',
                background: 'var(--gold)', color: 'var(--bg-0)',
                textDecoration: 'none', fontWeight: 500, fontSize: 15,
                transition: 'background 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-light)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Pedir cotización <ArrowRight size={16} />
            </Link>
            <Link
              to="/carta"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '15px 28px', borderRadius: 'var(--radius-sm)',
                border: '1px solid rgba(201,169,110,0.4)', color: 'var(--text-1)',
                textDecoration: 'none', fontWeight: 400, fontSize: 15,
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.background = 'var(--gold-dim)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,169,110,0.4)'; e.currentTarget.style.background = 'transparent'; }}
            >
              Ver carta de tragos
            </Link>
          </div>
        </div>

        {/* Col video — iframe en proporción 9:16 natural */}
        <div style={{ animation: 'fade-up 0.9s var(--ease-out-expo) 0.25s both' }}>
          <div style={{
            position: 'relative',
            aspectRatio: '9 / 16',
            width: '100%',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            border: '1px solid var(--gold-line)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px var(--gold-line)',
          }}>
            <iframe
              src="https://www.youtube.com/embed/IiQR93ex1_Y?autoplay=1&mute=1&loop=1&playlist=IiQR93ex1_Y&controls=0&playsinline=1&rel=0&showinfo=0&modestbranding=1"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Bar2Go — barra móvil en acción"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none' }}
            />
          </div>
          <div style={{
            marginTop: 14, display: 'flex', alignItems: 'center',
            gap: 8, justifyContent: 'center',
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22c55e', animation: 'pulse-gold 2s ease-in-out infinite' }} />
            <span style={{ fontSize: 12, color: 'var(--text-3)', letterSpacing: '0.06em' }}>
              Evento real · Servicio Bar2Go
            </span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}

function Stats() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} className="reveal" style={{ background: 'var(--bg-0)', padding: '4rem 1.5rem' }}>
      <div style={{
        maxWidth: 900, margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: '2rem', textAlign: 'center',
      }}>
        {stats.map((s, i) => (
          <div key={i}>
            <p className="display" style={{ fontSize: 40, fontWeight: 700, color: 'var(--gold)', margin: 0, lineHeight: 1 }}>
              {s.value}
            </p>
            <p style={{ fontSize: 13, color: 'var(--text-2)', marginTop: 8, letterSpacing: '0.04em' }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} className="reveal" style={{ padding: '6rem 1.5rem', background: 'var(--bg-1)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: '4rem' }}>
          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12 }}>
            Qué ofrecemos
          </p>
          <h2 className="display" style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, color: 'var(--text-1)', margin: 0 }}>
            Nuestro servicio
          </h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
          gap: '1px', background: 'var(--gold-line)',
          border: '1px solid var(--gold-line)',
          borderRadius: 'var(--radius-lg)', overflow: 'hidden',
        }}>
          {services.map(({ Icon, num, title, desc, detail }) => (
            <div key={num}
              style={{ background: 'var(--bg-2)', padding: '2rem', transition: 'background 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-3)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-2)'}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 16 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 'var(--radius-sm)',
                  background: 'var(--gold-dim)', border: '1px solid var(--gold-line)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Icon size={20} style={{ color: 'var(--gold)' }} strokeWidth={1.5} />
                </div>
                <div>
                  <span style={{ fontSize: 11, color: 'var(--text-3)', letterSpacing: '0.08em' }}>{num}</span>
                  <h3 style={{ fontSize: 18, fontWeight: 500, color: 'var(--text-1)', margin: '2px 0 0' }}>{title}</h3>
                </div>
              </div>
              <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 16 }}>{desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {detail.map((d, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <CheckCircle2 size={13} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                    <span style={{ fontSize: 13, color: 'var(--text-3)' }}>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} className="reveal" style={{ padding: '6rem 1.5rem', background: 'var(--bg-0)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12 }}>
            Lo que dicen
          </p>
          <h2 className="display" style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 700, color: 'var(--text-1)', margin: 0 }}>
            Clientes satisfechos
          </h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '1.5rem',
        }}>
          {reviews.map((r, i) => (
            <div key={i}
              style={{
                background: 'var(--bg-2)', border: '1px solid var(--gold-line)',
                borderRadius: 'var(--radius-md)', padding: '2rem',
                transition: 'transform 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'var(--gold)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--gold-line)'; }}
            >
              <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                {Array.from({ length: r.stars }).map((_, j) => (
                  <Star key={j} size={14} style={{ color: 'var(--gold)', fill: 'var(--gold)' }} />
                ))}
              </div>
              <p style={{ fontSize: 15, color: 'var(--text-1)', lineHeight: 1.7, marginBottom: 20, fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>
                "{r.text}"
              </p>
              <p style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-1)', margin: 0 }}>{r.name}</p>
              <p style={{ fontSize: 12, color: 'var(--gold)', margin: '3px 0 0', letterSpacing: '0.04em' }}>{r.event}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const ref = useScrollReveal();
  return (
    <section ref={ref} className="reveal" style={{ padding: '6rem 1.5rem' }}>
      <div style={{
        maxWidth: 700, margin: '0 auto', textAlign: 'center',
        padding: '4rem 2.5rem', borderRadius: 'var(--radius-lg)',
        background: 'var(--bg-2)', border: '1px solid var(--gold-line)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: 20, left: 20, width: 40, height: 40, borderTop: '1px solid var(--gold)', borderLeft: '1px solid var(--gold)', opacity: 0.4 }} />
        <div style={{ position: 'absolute', bottom: 20, right: 20, width: 40, height: 40, borderBottom: '1px solid var(--gold)', borderRight: '1px solid var(--gold)', opacity: 0.4 }} />

        <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>
          ¿Listo para cotizar?
        </p>
        <h2 className="display" style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 700, color: 'var(--text-1)', marginBottom: 16 }}>
          Hablemos sobre tu evento
        </h2>
        <p style={{ fontSize: 16, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 36 }}>
          Respondemos en menos de 1 hora por WhatsApp. Cotización sin compromiso y válida por 30 días.
        </p>
        <Link
          to="/cotizar"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '16px 36px', borderRadius: 'var(--radius-sm)',
            background: 'var(--gold)', color: 'var(--bg-0)',
            textDecoration: 'none', fontWeight: 500, fontSize: 16,
            transition: 'background 0.2s, transform 0.2s',
            animation: 'pulse-gold 3s ease-in-out infinite',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-light)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(0)'; }}
        >
          Cotizar gratis <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}

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
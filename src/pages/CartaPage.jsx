import { useState, useRef, useCallback, useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { MOCKTAILS, COCKTAILS, WHATSAPP_NUMBER } from '../data/drinks';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* ─── WhatsApp icon SVG ─────────────────────────────────────── */
const WAppIcon = ({ size = 18 }) => (
  <svg className="wapp-icon" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ─── TiltCard ──────────────────────────────────────────────── */
function TiltCard({ drink, onClick }) {
  const cardRef  = useRef(null);
  const frameRef = useRef(null);
  const [imgLoaded, setImgLoaded] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(() => {
      const el = cardRef.current;
      if (!el) return;
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = (e.clientX - left) / width  - 0.5;
      const y = (e.clientY - top)  / height - 0.5;
      el.style.transform =
        `perspective(900px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.03,1.03,1.03)`;
      const shine = el.querySelector('.card-shine');
      if (shine) {
        shine.style.opacity = '1';
        shine.style.backgroundImage =
          `radial-gradient(circle at ${(x + 0.5) * 100}% ${(y + 0.5) * 100}%, rgba(255,255,255,0.08) 0%, transparent 65%)`;
      }
    });
  }, []);

  const resetTilt = useCallback(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    const el = cardRef.current;
    if (!el) return;
    el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)';
    const shine = el.querySelector('.card-shine');
    if (shine) shine.style.opacity = '0';
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={() => onClick(drink)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        const el = cardRef.current;
        if (el) el.style.boxShadow =
          '0 0 0 1px rgba(201,169,110,0.2), 0 16px 48px rgba(0,0,0,0.5), 0 0 60px rgba(201,169,110,0.08)';
      }}
      onMouseLeave={() => {
        resetTilt();
        const el = cardRef.current;
        if (el) el.style.boxShadow = 'none';
      }}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalles de ${drink.name}`}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(drink); } }}
      style={{
        cursor: 'pointer',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        background: 'var(--glass)',
        border: '1px solid var(--glass-border)',
        transition: 'transform 0.18s ease, box-shadow 0.25s ease, border-color 0.25s',
        willChange: 'transform',
        position: 'relative',
      }}
    >
      <div className="card-shine" style={{
        position: 'absolute', inset: 0, zIndex: 2,
        opacity: 0, pointerEvents: 'none',
        borderRadius: 'var(--radius-md)',
        transition: 'opacity 0.2s',
      }} />

      {/* Image */}
      <div style={{ position: 'relative', paddingTop: '100%', background: 'var(--bg-3)' }}>
        {!imgLoaded && (
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(90deg, var(--bg-2) 25%, var(--bg-3) 50%, var(--bg-2) 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.6s infinite',
          }} />
        )}
        <img
          src={drink.img}
          alt={drink.name}
          loading="eager"
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgLoaded(true)}
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover',
            opacity: imgLoaded ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }}
        />
        {/* Tag badge */}
        <div style={{
          position: 'absolute', top: 12, left: 12, zIndex: 1,
          padding: '4px 10px', borderRadius: 'var(--radius-xs)',
          background: 'rgba(3,5,10,0.82)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          border: '1px solid var(--gold-line)',
          fontSize: 10.5, letterSpacing: '0.09em',
          color: 'var(--gold)', fontWeight: 500,
          textTransform: 'uppercase',
        }}>
          {drink.tag}
        </div>
        {/* Bottom gradient + name */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '3.5rem 1.1rem 1.1rem',
          background: 'linear-gradient(to top, rgba(3,5,10,0.95) 0%, rgba(3,5,10,0.6) 60%, transparent 100%)',
          zIndex: 1,
        }}>
          <h3 className="display" style={{
            fontSize: 19, fontWeight: 600,
            color: 'var(--text-1)', margin: 0,
          }}>
            {drink.name}
          </h3>
        </div>
      </div>

      {/* Description */}
      <div style={{ padding: '1rem 1.1rem 1.25rem' }}>
        <p style={{ fontSize: 13.5, color: 'var(--text-2)', lineHeight: 1.65, margin: 0 }}>
          {drink.desc}
        </p>
      </div>
    </div>
  );
}

/* ─── DrinkModal ────────────────────────────────────────────── */
function DrinkModal({ drink, onClose }) {
  const closeRef = useRef(null);
  const modalRef = useRef(null);

  // FIX: ya no dice "mocktail" hardcodeado, funciona para cualquier trago
  const waMsg = encodeURIComponent(
    `Hola Bar2Go! Me interesa el trago "${drink?.name}" para mi evento.\n\n¿Me pueden dar más información?`
  );

  useEffect(() => {
    if (!drink) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [drink, onClose]);

  useEffect(() => {
    if (!drink || !modalRef.current) return;
    closeRef.current?.focus();
    const focusable = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    const trap = (e) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', trap);
    return () => document.removeEventListener('keydown', trap);
  }, [drink]);

  if (!drink) return null;

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Detalles de ${drink.name}`}
      style={{
        position: 'fixed', inset: 0, zIndex: 'var(--z-modal)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1.5rem',
        background: 'rgba(3,5,10,0.88)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        animation: 'fade-in 0.22s ease both',
      }}
    >
      <div
        ref={modalRef}
        onClick={e => e.stopPropagation()}
        style={{
          borderRadius: 'var(--radius-lg)',
          maxWidth: 480, width: '100%',
          overflow: 'hidden',
          background: 'var(--bg-2)',
          border: '1px solid var(--glass-border)',
          maxHeight: '90dvh', overflowY: 'auto',
          animation: 'fade-up 0.3s var(--ease-expo) both',
          position: 'relative',
          boxShadow:
            '0 0 0 1px rgba(201,169,110,0.06), ' +
            '0 32px 80px rgba(0,0,0,0.6), ' +
            '0 0 60px rgba(201,169,110,0.04)',
        }}
      >
        {/* Close button */}
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Cerrar detalles del trago"
          style={{
            position: 'absolute', top: 14, right: 14, zIndex: 10,
            background: 'rgba(3,5,10,0.75)',
            backdropFilter: 'blur(8px)',
            border: '1px solid var(--gold-line)',
            borderRadius: '50%', width: 38, height: 38,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: 'var(--text-1)',
            transition: 'background 0.2s, border-color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(3,5,10,0.95)'; e.currentTarget.style.borderColor = 'var(--gold)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(3,5,10,0.75)'; e.currentTarget.style.borderColor = 'var(--gold-line)'; }}
        >
          <X size={15} />
        </button>

        {/* Image */}
        <div style={{ position: 'relative' }}>
          <img
            src={drink.img}
            alt={drink.name}
            style={{ width: '100%', height: 280, objectFit: 'cover', display: 'block' }}
          />
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: '50%',
            background: 'linear-gradient(to top, var(--bg-2), transparent)',
          }} />
        </div>

        {/* Content */}
        <div style={{ padding: '1.75rem 2rem 2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <h2 className="display" style={{ fontSize: 28, fontWeight: 600, color: 'var(--text-1)', margin: 0 }}>
              {drink.name}
            </h2>
            <span style={{
              padding: '3px 10px', borderRadius: 'var(--radius-xs)',
              border: '1px solid var(--gold-line)',
              fontSize: 10.5, color: 'var(--gold)', fontWeight: 500,
              letterSpacing: '0.08em', textTransform: 'uppercase', flexShrink: 0,
            }}>
              {drink.tag}
            </span>
          </div>

          {/* base alcohólica — solo aparece si el trago la tiene */}
          {drink.base && (
            <p style={{ fontSize: 12.5, color: 'var(--text-3)', marginBottom: 12, letterSpacing: '0.04em' }}>
              Base: <span style={{ color: 'var(--gold)' }}>{drink.base}</span>
            </p>
          )}

          <p style={{ fontSize: 14.5, color: 'var(--text-2)', lineHeight: 1.75, marginBottom: 24 }}>
            {drink.desc}
          </p>

          <div className="section-label" style={{ marginBottom: 14 }}>
            Ingredientes
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: drink.customizable ? 20 : 28 }}>
            {drink.ingredients.map((ing, i) => (
              <span key={i} style={{
                padding: '6px 13px',
                borderRadius: 'var(--radius-sm)',
                fontSize: 13, background: 'var(--gold-dim)',
                color: 'var(--gold)', border: '1px solid var(--gold-line)',
                fontWeight: 400,
              }}>
                {ing}
              </span>
            ))}
          </div>

          {/* Opciones de personalización — solo aparece si customizable: true */}
          {drink.customizable && drink.options?.length > 0 && (
            <div style={{ marginBottom: 28 }}>
              <div className="section-label" style={{ marginBottom: 12 }}>
                Opciones
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {drink.options.map((opt, i) => (
                  <span key={i} style={{
                    padding: '6px 13px',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: 13,
                    background: 'transparent',
                    color: 'var(--text-2)',
                    border: '1px solid var(--glass-border)',
                    fontWeight: 400,
                  }}>
                    {opt}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
            style={{ width: '100%', marginBottom: 12 }}
          >
            <WAppIcon size={18} />
            Incluir en mi evento
          </a>

          <p style={{ fontSize: 11.5, color: 'var(--text-3)', textAlign: 'center', fontStyle: 'italic' }}>
            Incluido en todos los paquetes de barra libre
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CartaPage() {
  const [selected, setSelected]         = useState(null);
  // 'cocktails' | 'mocktails' — controla qué sección se muestra
  const [section, setSection]           = useState('cocktails');
  // índice de la categoría activa dentro de COCKTAILS
  const [activeCategory, setActiveCategory] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(true);

  const headerRef   = useScrollReveal();
  const gridRef     = useScrollReveal({ rootMargin: '-40px', threshold: 0 });

  useEffect(() => {
    const allDrinks = [...MOCKTAILS, ...COCKTAILS.flatMap(cat => cat.items)];
    const promises = allDrinks.map(drink => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = resolve;
        img.src = drink.img;
      });
    });
    Promise.all(promises).then(() => setImagesLoaded(true));
    // Fallback: show after 3 seconds if preloading takes too long
    setTimeout(() => setImagesLoaded(true), 3000);
  }, []);

  // Al cambiar de sección, resetea la categoría activa
  const handleSectionChange = (s) => {
    setSection(s);
    setActiveCategory(0);
  };

  // Los items que se muestran en el grid según sección y categoría activa
  const visibleDrinks = section === 'cocktails'
    ? COCKTAILS[activeCategory].items
    : MOCKTAILS;

  return (
    <section style={{
      paddingTop: 68, minHeight: '100vh',
      background: 'var(--bg-1)', position: 'relative',
    }}>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <div style={{
        position: 'relative',
        background: 'var(--bg-0)',
        padding: '5rem 1.5rem 4rem',
        overflow: 'hidden',
      }}>
        {/* Aurora */}
        <div aria-hidden="true" style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 70% 80% at 20% 50%, rgba(201,169,110,0.07) 0%, transparent 65%), ' +
            'radial-gradient(ellipse 50% 60% at 80% 50%, rgba(180,130,60,0.05) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }} />
        <div style={{
          height: 1,
          background: 'linear-gradient(90deg, transparent, var(--gold-line) 30%, var(--gold-line) 70%, transparent)',
          position: 'absolute', bottom: 0, left: 0, right: 0,
        }} />

        <div ref={headerRef} className="reveal" style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            Barra a domicilio · Bar2Go
          </div>
          <h1 className="display" style={{
            fontSize: 'clamp(34px, 6vw, 60px)',
            fontWeight: 600, color: 'var(--text-1)',
            marginBottom: 18,
          }}>
            Nuestra{' '}
            <em className="text-shimmer" style={{ fontStyle: 'italic' }}>Carta</em>
          </h1>
          <p style={{
            fontSize: 16.5, color: 'var(--text-2)',
            maxWidth: 480, margin: '0 auto', lineHeight: 1.78,
          }}>
            Cócteles de autor y mocktails artesanales.
            Toda la barra, a domicilio, para tu evento.
          </p>
          <a
            href="/Carta.pdf"
            download
            style={{
              display: 'inline-block',
              marginTop: '1.8rem',
              padding: '0.8rem 1.6rem',
              border: '1px solid var(--gold)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--gold)',
              textDecoration: 'none',
              fontSize: 13,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--gold)';
              e.currentTarget.style.color = '#000';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'var(--gold)';
            }}
          >
            Descargar carta completa
          </a>
        </div>
      </div>

      {/* ── Sticky section switcher: Cócteles / Mocktails ─────── */}
      {/*
        position: sticky + top: 68px hace que la barra quede fija
        justo debajo del navbar (que mide 68px) mientras el usuario scrollea.
        Así puede cambiar de sección en cualquier momento sin volver arriba.
      */}
      <div style={{
        position: 'sticky', top: 68, zIndex: 10,
        background: 'rgba(3,5,10,0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--glass-border)',
      }}>
        <div style={{
          maxWidth: 1140, margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex', gap: 0,
        }}>
          {[
            { key: 'cocktails', label: 'Cócteles' },
            { key: 'mocktails', label: 'Mocktails' },
          ].map(({ key, label }) => {
            const isActive = section === key;
            return (
              <button
                key={key}
                onClick={() => handleSectionChange(key)}
                style={{
                  padding: '1.1rem 2rem',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: isActive
                    ? '2px solid var(--gold)'
                    : '2px solid transparent',
                  color: isActive ? 'var(--gold)' : 'var(--text-3)',
                  fontSize: 14, fontWeight: 500,
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  transition: 'color 0.2s, border-color 0.2s',
                  fontFamily: 'var(--font-body)',
                }}
                onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'var(--text-2)'; }}
                onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'var(--text-3)'; }}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Category tabs (solo visibles en sección cocktails) ── */}
      {/*
        Solo se muestran cuando section === 'cocktails'.
        Itera COCKTAILS para generar un tab por cada categoría.
        Al hacer click cambia activeCategory, lo que cambia visibleDrinks.
      */}
      {section === 'cocktails' && (
        <div style={{
          background: 'var(--bg-0)',
          borderBottom: '1px solid var(--glass-border)',
          overflowX: 'auto',         // scroll horizontal en mobile si no caben
          scrollbarWidth: 'none',    // oculta scrollbar en Firefox
        }}>
          <div style={{
            maxWidth: 1140, margin: '0 auto',
            padding: '0 1.5rem',
            display: 'flex', gap: 4,
            minWidth: 'max-content', // evita que los tabs se rompan en varias líneas
          }}>
            {COCKTAILS.map((cat, i) => {
              const isActive = activeCategory === i;
              return (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(i)}
                  style={{
                    padding: '0.85rem 1.25rem',
                    background: isActive ? 'var(--gold-dim)' : 'transparent',
                    border: 'none',
                    borderBottom: isActive
                      ? '2px solid var(--gold)'
                      : '2px solid transparent',
                    color: isActive ? 'var(--gold)' : 'var(--text-3)',
                    fontSize: 13, fontWeight: 500,
                    letterSpacing: '0.04em',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    whiteSpace: 'nowrap',
                    fontFamily: 'var(--font-body)',
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = 'var(--text-2)'; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = 'var(--text-3)'; }}
                >
                  {cat.category}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Category description (solo en cocktails) ──────────── */}
      {section === 'cocktails' && (
        <div style={{
          maxWidth: 1140, margin: '0 auto',
          padding: '2.5rem 1.5rem 0',
        }}>
          <p style={{
            fontSize: 14, color: 'var(--text-3)',
            fontStyle: 'italic', fontFamily: 'var(--font-display)',
            margin: 0,
          }}>
            {COCKTAILS[activeCategory].description}
          </p>
        </div>
      )}

      {/* ── Grid de tragos ────────────────────────────────────── */}
      {!imagesLoaded ? (
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '3rem 1.5rem 6rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
              gap: '1.5rem',
            }}
          >
            {visibleDrinks.map((_, i) => (
              <div key={i} style={{
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                background: 'var(--glass)',
                border: '1px solid var(--glass-border)',
                position: 'relative',
              }}>
                <div style={{ position: 'relative', paddingTop: '100%', background: 'var(--bg-3)' }}>
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(90deg, var(--bg-2) 25%, var(--bg-3) 50%, var(--bg-2) 75%)',
                    backgroundSize: '200% 100%',
                    animation: 'shimmer 1.6s infinite',
                  }} />
                </div>
                <div style={{ padding: '1rem 1.1rem 1.25rem' }}>
                  <div style={{
                    height: 16,
                    background: 'var(--bg-2)',
                    borderRadius: 4,
                    marginBottom: 8,
                    animation: 'shimmer 1.6s infinite',
                    animationDelay: `${i * 0.1}s`
                  }} />
                  <div style={{
                    height: 12,
                    background: 'var(--bg-2)',
                    borderRadius: 4,
                    width: '80%',
                    animation: 'shimmer 1.6s infinite',
                    animationDelay: `${i * 0.1}s`
                  }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '3rem 1.5rem 6rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))',
              gap: '1.5rem',
            }}
          >
            {/*
              visibleDrinks cambia según section y activeCategory.
              El key incluye section+id para forzar re-render al cambiar de sección,
              lo que reinicia el skeleton loader de cada card.
            */}
            {visibleDrinks.map(d => (
              <TiltCard key={`${section}-${d.id}`} drink={d} onClick={setSelected} />
            ))}
          </div>

          {/* Footer note */}
          <p style={{
            textAlign: 'center', marginTop: '3.5rem',
            fontSize: 14, color: 'var(--text-3)',
            fontStyle: 'italic', fontFamily: 'var(--font-display)',
          }}>
            ¿Tienes un trago favorito que no está aquí? Lo preparamos a pedido.
          </p>

          {/* Bottom CTA */}
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}>
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hola Bar2Go! Me interesa armar una carta personalizada para mi evento. ¿Pueden cotizar?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ fontSize: 14 }}
            >
              Consultar por carta personalizada <ArrowRight size={15} />
            </a>
          </div>
        </div>
      )}

      <DrinkModal drink={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
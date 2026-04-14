import { useState, useRef, useCallback, useEffect } from 'react';
import { X } from 'lucide-react';
import { MOCKTAILS } from '../data/drinks';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* ─── Skeleton placeholder while image loads ─────────────────── */
function CardSkeleton() {
  return (
    <div style={{
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      background: 'var(--bg-2)',
      border: '1px solid var(--gold-line)',
    }}>
      <div style={{
        paddingTop: '100%',
        background: 'linear-gradient(90deg, var(--bg-2) 25%, var(--bg-3) 50%, var(--bg-2) 75%)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 1.5s infinite',
      }} />
      <div style={{ padding: '1rem' }}>
        <div style={{ height: 14, width: '60%', borderRadius: 4, background: 'var(--bg-3)', marginBottom: 8 }} />
        <div style={{ height: 10, width: '90%', borderRadius: 4, background: 'var(--bg-3)' }} />
      </div>
    </div>
  );
}

/* ─── Tilt card ──────────────────────────────────────────────── */
function TiltCard({ drink, onClick }) {
  const cardRef = useRef(null);
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
      el.style.transform = `perspective(900px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) scale3d(1.03,1.03,1.03)`;
    });
  }, []);

  const resetTilt = useCallback(() => {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    const el = cardRef.current;
    if (el) el.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)';
  }, []);

  // Touch support: open modal on tap (no tilt on mobile)
  const handleClick = () => onClick(drink);

  return (
    <div
      ref={cardRef}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => {
        if (cardRef.current) cardRef.current.style.boxShadow = '0 24px 60px rgba(201,169,110,0.1)';
      }}
      onMouseLeave={() => {   /* ← Bug corregido: era "onMouseLeave2" */
        resetTilt();
        if (cardRef.current) cardRef.current.style.boxShadow = 'none';
      }}
      role="button"
      tabIndex={0}
      aria-label={`Ver detalles de ${drink.name}`}
      onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(drink); } }}
      style={{
        cursor: 'pointer',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        background: 'var(--bg-2)',
        border: '1px solid var(--gold-line)',
        transition: 'transform 0.15s ease, box-shadow 0.15s ease, border-color 0.2s',
        willChange: 'transform',
      }}
    >
      <div style={{ position: 'relative', paddingTop: '100%', background: 'var(--bg-3)' }}>
        {!imgLoaded && (
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(90deg, var(--bg-2) 25%, var(--bg-3) 50%, var(--bg-2) 75%)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 1.5s infinite',
          }} />
        )}
        <img
          src={drink.img}
          alt={drink.name}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: imgLoaded ? 1 : 0,
            transition: 'transform 0.4s ease, opacity 0.4s ease',
          }}
        />
        {/* Tag badge */}
        <div style={{
          position: 'absolute',
          top: 12,
          left: 12,
          padding: '4px 10px',
          borderRadius: 4,
          background: 'rgba(6,9,15,0.8)',
          backdropFilter: 'blur(8px)',
          border: '1px solid var(--gold-line)',
          fontSize: 11,
          letterSpacing: '0.08em',
          color: 'var(--gold)',
          fontWeight: 500,
        }}>
          {drink.tag}
        </div>
        {/* Gradient overlay at bottom */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '3rem 1rem 1rem',
          background: 'linear-gradient(to top, rgba(6,9,15,0.92), transparent)',
        }}>
          <h3 className="display" style={{ fontSize: 18, fontWeight: 600, color: 'var(--text-1)', margin: 0 }}>
            {drink.name}
          </h3>
        </div>
      </div>
      <div style={{ padding: '1rem' }}>
        <p style={{ fontSize: 13, color: 'var(--text-2)', lineHeight: 1.65, margin: 0 }}>
          {drink.desc}
        </p>
      </div>
    </div>
  );
}

/* ─── Modal — accessible, Escape closes, focus trap ─────────── */
function DrinkModal({ drink, onClose }) {
  const closeRef  = useRef(null);
  const modalRef  = useRef(null);

  // Close on Escape key
  useEffect(() => {
    if (!drink) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [drink, onClose]);

  // Focus trap: keep focus inside the modal while it is open
  useEffect(() => {
    if (!drink || !modalRef.current) return;
    closeRef.current?.focus(); // set initial focus to close button

    const focusable = modalRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    const trapFocus = (e) => {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', trapFocus);
    return () => document.removeEventListener('keydown', trapFocus);
  }, [drink]);

  if (!drink) return null;

  return (
    <div
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Detalles de ${drink.name}`}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        background: 'rgba(4,7,12,0.88)',
        backdropFilter: 'blur(16px)',
        animation: 'fade-in 0.25s ease both',
      }}
    >
      <div
        ref={modalRef}
        onClick={e => e.stopPropagation()}
        style={{
          borderRadius: 'var(--radius-lg)',
          maxWidth: 460,
          width: '100%',
          overflow: 'hidden',
          background: 'var(--bg-2)',
          border: '1px solid var(--gold-line)',
          maxHeight: '90dvh',
          overflowY: 'auto',
          animation: 'fade-up 0.3s var(--ease-out-expo) both',
          position: 'relative',
        }}
      >
        {/* Close button */}
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Cerrar detalles del trago"
          style={{
            position: 'absolute',
            top: 12,
            right: 12,
            zIndex: 10,
            background: 'rgba(6,9,15,0.7)',
            border: '1px solid var(--gold-line)',
            borderRadius: '50%',
            width: 36,
            height: 36,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-1)',
            transition: 'background 0.2s, border-color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(6,9,15,0.95)'; e.currentTarget.style.borderColor = 'var(--gold)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'rgba(6,9,15,0.7)'; e.currentTarget.style.borderColor = 'var(--gold-line)'; }}
        >
          <X size={16} />
        </button>

        {/* Image */}
        <img
          src={drink.img}
          alt={drink.name}
          style={{ width: '100%', height: 280, objectFit: 'cover', display: 'block' }}
        />

        {/* Content */}
        <div style={{ padding: '1.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <h2 className="display" style={{ fontSize: 26, fontWeight: 700, color: 'var(--text-1)', margin: 0 }}>
              {drink.name}
            </h2>
            <span style={{
              padding: '3px 10px',
              borderRadius: 4,
              border: '1px solid var(--gold-line)',
              fontSize: 11,
              color: 'var(--gold)',
              fontWeight: 500,
              letterSpacing: '0.06em',
              flexShrink: 0,
            }}>
              {drink.tag}
            </span>
          </div>

          <p style={{ fontSize: 14, color: 'var(--text-2)', lineHeight: 1.7, marginBottom: 24 }}>
            {drink.desc}
          </p>

          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12 }}>
            Ingredientes
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}>
            {drink.ingredients.map((ing, i) => (
              <span
                key={i}
                style={{
                  padding: '6px 12px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: 13,
                  background: 'var(--gold-dim)',
                  color: 'var(--gold)',
                  border: '1px solid var(--gold-line)',
                }}
              >
                {ing}
              </span>
            ))}
          </div>

          <p style={{ fontSize: 12, color: 'var(--text-3)', textAlign: 'center', fontStyle: 'italic' }}>
            Incluido en todos nuestros paquetes de barra libre
          </p>

          <button
            onClick={onClose}
            style={{
              marginTop: 16,
              width: '100%',
              padding: '12px',
              borderRadius: 'var(--radius-sm)',
              background: 'transparent',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'var(--text-2)',
              fontSize: 14,
              cursor: 'pointer',
              transition: 'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--text-1)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--text-2)'; }}
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */
export default function CartaPage() {
  const [selected, setSelected] = useState(null);
  const ref = useScrollReveal();

  return (
    <section style={{ paddingTop: 100, minHeight: '100vh', background: 'var(--bg-1)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 1.5rem 6rem' }}>

        {/* Header */}
        <div ref={ref} className="reveal" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12 }}>
            Sin alcohol · Para todos
          </p>
          <h1 className="display" style={{ fontSize: 'clamp(32px, 6vw, 56px)', fontWeight: 700, color: 'var(--text-1)', marginBottom: 16 }}>
            Carta de Mocktails
          </h1>
          <p style={{ fontSize: 16, color: 'var(--text-2)', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
            Tragos artesanales sin alcohol, llenos de sabor. Perfectos para graduaciones, eventos familiares y para quienes prefieren no tomar.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
          gap: '1.5rem',
        }}>
          {MOCKTAILS.map(d => (
            <TiltCard key={d.id} drink={d} onClick={setSelected} />
          ))}
        </div>

        {/* Footer note */}
        <p style={{ textAlign: 'center', marginTop: '3rem', fontSize: 14, color: 'var(--text-3)', fontStyle: 'italic' }}>
          ¿Tienes un trago favorito que no está aquí? Lo preparamos a pedido.
        </p>
      </div>

      <DrinkModal drink={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
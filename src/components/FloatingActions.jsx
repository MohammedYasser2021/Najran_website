import { useState, useEffect } from 'react';

const FloatingActions = ({ currentLang }) => {
  const [visible, setVisible] = useState(false);
  const isAr = currentLang === 'ar';

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <button
        onClick={scrollToTop}
        title={isAr ? 'العودة للأعلى' : 'Back to top'}
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '24px',
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          background: '#269dcc',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          zIndex: 999,
          boxShadow: '0 6px 24px rgba(38,157,204,0.38)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: visible ? 1 : 0,
          pointerEvents: visible ? 'all' : 'none',
          transform: visible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.35s ease, transform 0.35s ease',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15" />
        </svg>
      </button>

      <a
        href="https://wa.me/966920002159"
        target="_blank"
        rel="noopener noreferrer"
        title={isAr ? 'للحجز عبر واتساب' : 'Book via WhatsApp'}
        style={{
          position: 'fixed',
          bottom: '28px',
          left: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          background: '#25D366',
          color: '#fff',
          padding: '12px 18px',
          borderRadius: '50px',
          textDecoration: 'none',
          fontFamily: "'Cairo','Tajawal',sans-serif",
          fontWeight: '700',
          fontSize: '14px',
          zIndex: 999,
          boxShadow: '0 6px 24px rgba(37,211,102,0.38)',
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.76.46 3.45 1.32 4.94L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.13-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.13c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.55-3.7 8.21-8.24 8.21zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.24-.64.81-.78.97-.15.17-.29.18-.54.06-.25-.12-1.04-.38-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.24-.02-.38.11-.5.12-.12.27-.32.4-.48.13-.16.18-.27.27-.45.08-.18.04-.33-.04-.46-.08-.12-.5-1.2-.69-1.65-.18-.43-.37-.37-.5-.37-.13 0-.28-.01-.44-.01-.15 0-.4.06-.61.3-.21.24-.8.78-.8 1.9 0 1.12.82 2.2.93 2.35.12.16 1.6 2.45 3.89 3.34 1.93.75 2.32.6 2.74.56.42-.04 1.36-.55 1.56-1.09.19-.53.19-.99.13-1.09-.06-.1-.23-.16-.48-.28z"/>
        </svg>
        <span>{isAr ? 'للحجز' : 'Book Now'}</span>
      </a>
    </>
  );
};

export default FloatingActions;
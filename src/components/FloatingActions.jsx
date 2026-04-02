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
  );
};

export default FloatingActions;
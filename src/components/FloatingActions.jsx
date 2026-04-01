import { useState, useEffect } from 'react';
import SaudiFlag from 'country-flag-icons/react/3x2/SA';
import UKFlag    from 'country-flag-icons/react/3x2/GB';

const FloatingActions = ({ currentLang, changeLanguage }) => {
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
      <style>{`
        .lang-pill {
          display: flex;
          align-items: center;
          background: #fff;
          border-radius: 50px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.13);
          overflow: hidden;
          border: 1.5px solid #e8edf2;
        }
        .lang-opt {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 7px 13px;
          font-size: 12px;
          font-weight: 700;
          font-family: 'Cairo', 'Tajawal', sans-serif;
          cursor: pointer;
          border: none;
          background: transparent;
          color: #7a8fa6;
          transition: background 0.18s, color 0.18s;
          white-space: nowrap;
        }
        .lang-opt.active {
          background: #269dcc;
          color: #fff;
        }
        .lang-opt:not(.active):hover {
          background: #f0f8fd;
          color: #269dcc;
        }
        .lang-divider {
          width: 1px;
          height: 22px;
          background: #e0e8ef;
          flex-shrink: 0;
        }
      `}</style>

      {/* Scroll to Top — bottom RIGHT */}
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

      {/* Language Switcher — bottom LEFT */}
      <div style={{ position: 'fixed', bottom: '28px', left: '24px', zIndex: 999 }}>
        <div className="lang-pill">
          <button
            className={`lang-opt ${currentLang === 'ar' ? 'active' : ''}`}
            onClick={() => currentLang !== 'ar' && changeLanguage('ar')}
          >
            <SaudiFlag style={{ width: '20px', borderRadius: '3px' }} />
            عربي
          </button>
          <div className="lang-divider" />
          <button
            className={`lang-opt ${currentLang === 'en' ? 'active' : ''}`}
            onClick={() => currentLang !== 'en' && changeLanguage('en')}
          >
            <UKFlag style={{ width: '20px', borderRadius: '3px' }} />
            English
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingActions;
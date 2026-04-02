import React, { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { departments } from './departmentsData';

const DepartmentPage = ({ currentLang, changeLanguage }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const isAr = currentLang === 'ar';
  const [visible, setVisible] = useState(false);
  const heroRef = useRef(null);

  const dept = departments.find(d => d.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, [slug]);

  if (!dept) {
    return (
      <div dir={isAr ? 'rtl' : 'ltr'} style={{ fontFamily: "'Cairo','Tajawal',sans-serif" }}>
        <div style={{ textAlign: 'center', padding: '120px 24px', color: '#0d2137' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '800' }}>
            {isAr ? 'القسم غير موجود' : 'Department not found'}
          </h2>
          <button
            onClick={() => navigate('/')}
            style={{
              marginTop: '24px', padding: '12px 32px', borderRadius: '50px',
              background: '#1787b6', color: '#fff', border: 'none',
              fontSize: '15px', fontWeight: '700', cursor: 'pointer'
            }}
          >
            {isAr ? 'العودة للرئيسية' : 'Back to Home'}
          </button>
        </div>
      </div>
    );
  }

  const name    = isAr ? dept.nameAr    : dept.nameEn;
  const desc    = isAr ? dept.descriptionAr : dept.descriptionEn;
  const units   = isAr ? dept.unitsAr   : dept.unitsEn;
  const services = isAr ? dept.servicesAr : dept.servicesEn;
  const subDepts = dept.subDepartments;

  return (
    <div
      dir={isAr ? 'rtl' : 'ltr'}
      style={{ fontFamily: "'Cairo','Tajawal',sans-serif", background: '#f8fbfd', minHeight: '100vh' }}
    >

      {/* ===== Hero ===== */}
      <div ref={heroRef} style={{ position: 'relative', width: '100%', height: 'clamp(280px, 42vw, 500px)', overflow: 'hidden' }}>
        <img
          src={dept.image}
          alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(13,33,55,0.78) 0%, rgba(23,135,182,0.45) 100%)'
        }} />

        {/* Breadcrumb */}
        <div style={{
          position: 'absolute', top: '24px',
          [isAr ? 'right' : 'left']: '32px',
          display: 'flex', alignItems: 'center', gap: '8px',
          fontSize: '13px', color: 'rgba(255,255,255,0.75)'
        }}>
          <a href="/" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
            {isAr ? 'الرئيسية' : 'Home'}
          </a>
          <span>/</span>
          <a href="/departments" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
            {isAr ? 'الأقسام' : 'Departments'}
          </a>
          <span>/</span>
          <span style={{ color: '#fff', fontWeight: '600' }}>{name}</span>
        </div>

        {/* Title */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: '0 24px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.7s ease'
        }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.18)',
            border: '1px solid rgba(255,255,255,0.35)',
            color: '#fff', fontSize: '12px', fontWeight: '700',
            padding: '5px 18px', borderRadius: '50px', marginBottom: '16px', backdropFilter: 'blur(8px)'
          }}>
            {isAr ? 'أقسامنا الطبية' : 'Our Medical Departments'}
          </span>
          <h1 style={{
            color: '#fff', fontSize: 'clamp(24px, 4vw, 50px)',
            fontWeight: '800', margin: 0,
            textShadow: '0 2px 20px rgba(0,0,0,0.4)'
          }}>
            {name}
          </h1>
        </div>

        {/* Bottom wave */}
        <svg style={{ position: 'absolute', bottom: -1, left: 0, width: '100%' }}
          viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path d="M0,60 C360,0 1080,60 1440,20 L1440,60 Z" fill="#f8fbfd" />
        </svg>
      </div>

      {/* ===== Main Content ===== */}
      <div className="container mx-auto px-4 max-w-6xl" style={{ paddingTop: '60px', paddingBottom: '80px' }}>

        {/* Description Card */}
        <div style={{
          background: '#fff', borderRadius: '20px',
          padding: 'clamp(28px, 4vw, 48px)',
          border: '1px solid #e3eff7',
          boxShadow: '0 4px 30px rgba(23,135,182,0.08)',
          marginBottom: '40px',
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 0.6s ease 0.15s'
        }}>
          {/* ECG accent line */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
            <div style={{ width: '5px', height: '36px', borderRadius: '3px', background: 'linear-gradient(180deg,#1787b6,#0f5f8a)', flexShrink: 0 }} />
            <h2 style={{ margin: 0, fontSize: 'clamp(18px, 2.5vw, 26px)', fontWeight: '800', color: '#0d2137' }}>
              {isAr ? 'نبذة عن المركز' : 'About the Center'}
            </h2>
          </div>
          <p style={{
            margin: 0, color: '#374151',
            fontSize: 'clamp(14px, 1.7vw, 16px)',
            lineHeight: '2', textAlign: isAr ? 'right' : 'left'
          }}>
            {desc}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: (services || subDepts) ? 'repeat(auto-fit, minmax(280px, 1fr))' : '1fr',
          gap: '28px',
          marginBottom: '40px'
        }}>
          {/* Medical Units Card */}
          {units && units.length > 0 && (
            <div style={{
              background: '#fff', borderRadius: '20px',
              padding: 'clamp(24px, 3vw, 36px)',
              border: '1px solid #e3eff7',
              boxShadow: '0 4px 24px rgba(23,135,182,0.07)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.25s'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '22px' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: 'linear-gradient(135deg,#1787b6,#0f5f8a)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h3 style={{ margin: 0, fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: '800', color: '#0d2137' }}>
                  {isAr ? 'وحداتنا الطبية' : 'Our Medical Units'}
                </h3>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {units.map((unit, i) => (
                  <li key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '10px',
                    padding: '10px 14px', borderRadius: '10px',
                    background: i % 2 === 0 ? '#f0f8fd' : '#fff',
                    border: '1px solid #e3eff7'
                  }}>
                    <span style={{
                      minWidth: '22px', height: '22px', borderRadius: '50%',
                      background: '#1787b6', color: '#fff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '11px', fontWeight: '700', flexShrink: 0, marginTop: '1px'
                    }}>
                      {i + 1}
                    </span>
                    <span style={{
                      color: '#2d3748', fontSize: 'clamp(13px, 1.5vw, 14.5px)',
                      lineHeight: '1.6', fontWeight: '500'
                    }}>
                      {unit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Services Card */}
          {services && services.length > 0 && (
            <div style={{
              background: 'linear-gradient(135deg,#0d2137 0%,#1787b6 100%)',
              borderRadius: '20px',
              padding: 'clamp(24px, 3vw, 36px)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.6s ease 0.35s'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '22px' }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '12px',
                  background: 'rgba(255,255,255,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round">
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                </div>
                <h3 style={{ margin: 0, fontSize: 'clamp(16px, 2vw, 20px)', fontWeight: '800', color: '#fff' }}>
                  {isAr ? 'خدماتنا الطبية' : 'Our Medical Services'}
                </h3>
              </div>
              <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px' }}>
                {services.map((s, i) => (
                  <li key={i} style={{
                    display: 'flex', alignItems: 'flex-start', gap: '10px',
                    padding: '9px 12px', borderRadius: '10px',
                    background: 'rgba(255,255,255,0.1)'
                  }}>
                    <span style={{
                      minWidth: '8px', height: '8px', borderRadius: '50%',
                      background: '#7dd3f8', flexShrink: 0, marginTop: '6px'
                    }} />
                    <span style={{
                      color: 'rgba(255,255,255,0.92)',
                      fontSize: 'clamp(13px, 1.5vw, 14.5px)',
                      lineHeight: '1.65', fontWeight: '500'
                    }}>
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Sub-Departments (for complex centers) */}
        {subDepts && subDepts.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{
              margin: '0 0 8px',
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              fontWeight: '800', color: '#0d2137',
              textAlign: isAr ? 'right' : 'left'
            }}>
              {isAr ? 'تفاصيل المراكز' : 'Centers in Detail'}
            </h3>
            {subDepts.map((sub, idx) => (
              <details
                key={idx}
                style={{
                  background: '#fff', borderRadius: '16px',
                  border: '1px solid #e3eff7',
                  boxShadow: '0 2px 16px rgba(23,135,182,0.06)',
                  overflow: 'hidden',
                  opacity: visible ? 1 : 0,
                  transition: `opacity 0.5s ease ${0.1 + idx * 0.07}s`
                }}
              >
                <summary style={{
                  padding: '18px 24px',
                  cursor: 'pointer',
                  fontWeight: '700', fontSize: 'clamp(14px, 1.8vw, 16px)',
                  color: '#0d2137', listStyle: 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  userSelect: 'none'
                }}>
                  <span>{isAr ? sub.titleAr : sub.titleEn}</span>
                  <span style={{
                    width: '28px', height: '28px', borderRadius: '50%',
                    background: '#e8f4fb', color: '#1787b6',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '16px', flexShrink: 0
                  }}>＋</span>
                </summary>
                <div style={{
                  padding: '0 24px 22px',
                  color: '#374151',
                  fontSize: 'clamp(13.5px, 1.6vw, 15px)',
                  lineHeight: '2',
                  whiteSpace: 'pre-line',
                  textAlign: isAr ? 'right' : 'left',
                  borderTop: '1px solid #f0f8fd'
                }}>
                  <div style={{ paddingTop: '16px' }}>
                    {isAr ? sub.contentAr : sub.contentEn}
                  </div>
                </div>
              </details>
            ))}
          </div>
        )}

        {/* Back Button */}
        <div style={{ textAlign: 'center', marginTop: '56px' }}>
          <button
            onClick={() => navigate(-1)}
            style={{
              padding: '14px 40px', borderRadius: '50px',
              border: '2px solid #1787b6', background: 'transparent',
              color: '#1787b6', fontSize: '15px', fontWeight: '700',
              cursor: 'pointer', transition: 'all 0.25s',
              fontFamily: "'Cairo','Tajawal',sans-serif"
            }}
            onMouseEnter={e => { e.target.style.background = '#1787b6'; e.target.style.color = '#fff'; }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#1787b6'; }}
          >
            {isAr ? '← العودة' : '← Back'}
          </button>
        </div>

      </div>
    </div>
  );
};

export default DepartmentPage;
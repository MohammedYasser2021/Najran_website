import React, { useEffect, useRef, useState } from 'react';
// @ts-ignore
import secImg from '../assets/sec.jpeg';

interface OurSecProps {
  currentLang: string;
}

const content = {
  ar: {
    sectionLabel: 'مميزاتنا',
    title: 'لماذا مستشفى تخصصي نجران؟',
    description: 'المستشفى مرخص من وزارة الصحة بسعة 100 سرير، ويشمل أكثر من 25 تخصصًا طبيًا ويعمل به أكثر من 60 مستشارًا وأخصائيًا في جميع التخصصات الطبية العامة والدقيقة مما يلبي كافة التخصصات الطبية التي يحتاجها أهل نجران وتغنيهم عن السفر للعلاج خارج المنطقة.',
    stats: [
      { value: '100', label: 'سرير', suffix: '+' },
      { value: '25', label: 'تخصصًا طبيًا', suffix: '+' },
      { value: '60', label: 'مستشارًا وأخصائيًا', suffix: '+' },
    ],
    features: [
      { icon: '🏥', text: 'رعاية صحية متميزة' },
      { icon: '👨‍⚕️', text: 'كوادر طبية مؤهلة' },
      { icon: '🤝', text: 'موظفون ودودون' },
      { icon: '🌟', text: 'خدمات تنويم VIP / غرف المرضى الداخليين VIP' },
      { icon: '✅', text: 'نطبق أعلى معايير الجودة' },
      { icon: '🕐', text: 'دعم متاح على مدار الساعة' },
    ],
    badge: 'خبرة طبية متميزة',
    accreditation: 'أول مستشفى خاص معتمد من قبل الهيئة السعودية لاعتماد المنشآت الصحية (سباهي) في عام 2019',
  },
  en: {
    sectionLabel: 'Our Features',
    title: 'Why Specialized Najran Hospital?',
    description: 'The hospital is licensed by the Ministry of Health with a capacity of 100 beds, covering more than 25 medical specialties with over 60 consultants and specialists across all general and subspecialty fields — meeting all medical needs of Najran residents and sparing them from traveling outside the region.',
    stats: [
      { value: '100', label: 'Beds', suffix: '+' },
      { value: '25', label: 'Medical Specialties', suffix: '+' },
      { value: '60', label: 'Consultants & Specialists', suffix: '+' },
    ],
    features: [
      { icon: '🏥', text: 'Distinguished Healthcare' },
      { icon: '👨‍⚕️', text: 'Qualified Medical Staff' },
      { icon: '🤝', text: 'Friendly Personnel' },
      { icon: '🌟', text: 'VIP Inpatient Rooms' },
      { icon: '✅', text: 'Highest Quality Standards' },
      { icon: '🕐', text: '24/7 Support Available' },
    ],
    badge: 'Distinguished Medical Expertise',
    accreditation: 'First private hospital accredited by the Saudi Central Board for Accreditation of Healthcare Institutions (CBAHI) in 2019',
  },
};

const OurSec: React.FC<OurSecProps> = ({ currentLang }) => {
  const isAr = currentLang === 'ar';
  const t = content[isAr ? 'ar' : 'en'];
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  return (
    <section
      ref={sectionRef}
      dir={isAr ? 'rtl' : 'ltr'}
      style={{
        padding: '80px 0',
        background: '#ffffff',
        overflow: 'hidden',
      }}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '60px',
        }}>

          {/* Centered section header */}
          <div style={{ textAlign: 'center' }}>
            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: '800',
              color: '#0d2137',
              margin: '0 0 16px',
            }}>
              {t.sectionLabel}
            </h2>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <svg viewBox="0 0 300 60" width="300" height="60" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="glow-sec">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <mask id="reveal-sec">
                    <rect x="0" y="0" width="300" height="60" fill="white">
                      <animate attributeName="x" from="-300" to="300" dur="2.4s" repeatCount="indefinite" />
                    </rect>
                  </mask>
                </defs>
                <line x1="0" y1="30" x2="300" y2="30" stroke="#1787b6" strokeWidth="0.5" strokeOpacity="0.2" />
                <path
                  d="M 0,30 L 105,30 L 112,30 L 117,22 L 122,30 L 128,30 L 133,10 L 141,50 L 150,5 L 158,50 L 165,30 L 170,30 L 175,22 L 180,30 L 300,30"
                  fill="none" stroke="#1787b6" strokeWidth="2.5"
                  strokeLinecap="round" strokeLinejoin="round"
                  filter="url(#glow-sec)" mask="url(#reveal-sec)"
                />
                <circle r="4" fill="#1787b6" filter="url(#glow-sec)">
                  <animateMotion dur="2.4s" repeatCount="indefinite"
                    path="M 0,30 L 105,30 L 112,30 L 117,22 L 122,30 L 128,30 L 133,10 L 141,50 L 150,5 L 158,50 L 165,30 L 170,30 L 175,22 L 180,30 L 300,30"
                  />
                </circle>
              </svg>
            </div>
          </div>

          {/* Top: image + text side by side */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            alignItems: 'center',
          }}>

            {/* Image side */}
            <div
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : isAr ? 'translateX(40px)' : 'translateX(-40px)',
                transition: 'all 0.7s ease',
              }}
            >
              <img
                src={secImg}
                alt="مميزات المستشفى"
                style={{
                  width: '100%',
                  height: '460px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              {/* Overlay gradient */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(23,135,182,0.25) 0%, transparent 60%)',
              }} />

              {/* CBAHI Badge */}
              <div style={{
                position: 'absolute',
                bottom: '24px',
                [isAr ? 'right' : 'left']: '24px',
                background: 'rgba(10, 22, 40, 0.92)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(23,135,182,0.4)',
                borderRadius: '16px',
                padding: '14px 18px',
                maxWidth: '240px',
                direction: isAr ? 'rtl' : 'ltr',
              }}>
                <p style={{
                  color: '#1787b6',
                  fontSize: '11px',
                  fontWeight: '700',
                  letterSpacing: '2px',
                  margin: '0 0 6px',
                }}>
                  ✦ {t.badge}
                </p>
                <p style={{
                  color: 'rgba(255,255,255,0.85)',
                  fontSize: '12px',
                  lineHeight: '1.6',
                  margin: 0,
                }}>
                  {t.accreditation}
                </p>
              </div>
            </div>

            {/* Text side */}
            <div
              style={{
                direction: isAr ? 'rtl' : 'ltr',
                textAlign: isAr ? 'right' : 'left',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : isAr ? 'translateX(-40px)' : 'translateX(40px)',
                transition: 'all 0.7s ease 0.15s',
              }}
            >
              {/* Title */}
              <h2 style={{
                fontSize: 'clamp(28px, 4vw, 42px)',
                fontWeight: '800',
                color: '#0d2137',
                margin: '0 0 16px',
                lineHeight: '1.3',
              }}>
                {t.title}
              </h2>


              {/* Description */}
              <p style={{
                color: '#6b7280',
                fontSize: '16px',
                lineHeight: '1.9',
                margin: '0 0 36px',
              }}>
                {t.description}
              </p>

              {/* Stats row */}
              <div style={{
                display: 'flex',
                gap: '24px',
                marginBottom: '36px',
                flexWrap: 'wrap',
              }}>
                {t.stats.map((stat, i) => (
                  <div key={i} style={{
                    flex: '1',
                    minWidth: '80px',
                    padding: '16px',
                    background: 'linear-gradient(135deg, #f0f7fb, #e8f4f9)',
                    borderRadius: '16px',
                    textAlign: 'center',
                    borderBottom: '3px solid #1787b6',
                  }}>
                    <p style={{
                      fontSize: '28px',
                      fontWeight: '800',
                      color: '#1787b6',
                      margin: '0 0 4px',
                    }}>
                      {stat.value}<span style={{ fontSize: '18px' }}>{stat.suffix}</span>
                    </p>
                    <p style={{
                      fontSize: '12px',
                      color: '#6b7280',
                      margin: 0,
                      fontWeight: '500',
                    }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Features grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
              }}>
                {t.features.map((f, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '12px 14px',
                      background: '#f9fafb',
                      borderRadius: '12px',
                      border: '1px solid #e5e7eb',
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                      transition: `all 0.5s ease ${0.3 + i * 0.07}s`,
                      flexDirection: isAr ? 'row' : 'row',
                    }}
                  >
                    <span style={{ fontSize: '20px', flexShrink: 0 }}>{f.icon}</span>
                    <span style={{
                      fontSize: '13px',
                      fontWeight: '600',
                      color: '#374151',
                    }}>
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurSec;
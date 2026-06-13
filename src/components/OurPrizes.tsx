import React, { useEffect, useRef, useState } from 'react';

interface OurPrizesProps {
  currentLang: string;
}

const content = {
  ar: {
    sectionLabel: 'إنجازاتنا',
    stats: [
      { value: 150, suffix: '+', label: 'مريض راضٍ', icon: '😊' },
      { value: 18, suffix: '+', label: 'اختصاص طبي', icon: '🩺' },
      { value: 80, suffix: '+', label: 'عدد الأطباء', icon: '👨‍⚕️' },
      { value: 60, suffix: '+', label: 'متواجدون في دول مختلفة', icon: '🌍' },
    ],
  },
  en: {
    sectionLabel: 'Our Achievements',
    stats: [
      { value: 150, suffix: '+', label: 'Satisfied Clients', icon: '😊' },
      { value: 66, suffix: '+', label: 'Medical Specialties', icon: '🩺' },
      { value: 80, suffix: '+', label: 'Doctors', icon: '👨‍⚕️' },
      { value: 60, suffix: '+', label: 'Present in Different Countries', icon: '🌍' },
    ],
  },
};

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function useCountUp(target: number, isVisible: boolean, duration = 2800) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    if (!isVisible || started.current) return;
    started.current = true;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCount(target);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [isVisible, target, duration]);

  return count;
}

const StatCard: React.FC<{
  stat: { value: number; suffix: string; label: string; icon: string };
  isVisible: boolean;
  delay: number;
  isAr: boolean;
}> = ({ stat, isVisible, delay, isAr }) => {
  const count = useCountUp(stat.value, isVisible);

  return (
    <div
      style={{
        flex: '1',
        minWidth: '180px',
        padding: '36px 24px',
        background: '#ffffff',
        borderRadius: '20px',
        textAlign: 'center',
        border: '1px solid rgba(23,135,182,0.15)',
        borderBottom: '4px solid #1787b6',
        boxShadow: '0 4px 24px rgba(23,135,182,0.08)',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
        direction: isAr ? 'rtl' : 'ltr',
      }}
    >
      <div style={{ fontSize: '36px', marginBottom: '12px' }}>{stat.icon}</div>
      <p style={{
        fontSize: '42px',
        fontWeight: '800',
        color: '#1787b6',
        margin: '0 0 6px',
        lineHeight: '1',
        direction: 'ltr',
      }}>
        {count}
        <span style={{ fontSize: '24px' }}>{stat.suffix}</span>
      </p>
      <p style={{
        fontSize: '14px',
        fontWeight: '600',
        color: '#6b7280',
        margin: 0,
      }}>
        {stat.label}
      </p>
    </div>
  );
};

const OurPrizes: React.FC<OurPrizesProps> = ({ currentLang }) => {
  const isAr = currentLang === 'ar';
  const t = content[isAr ? 'ar' : 'en'];
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Use a small negative rootMargin so the section must scroll into view
    // before the counter starts — never fires on initial page load
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px 0px -80px 0px' }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      dir={isAr ? 'rtl' : 'ltr'}
      style={{
        padding: '80px 0',
        background: 'linear-gradient(160deg, #f0f7fb 0%, #ffffff 50%, #e8f4f9 100%)',
        overflow: 'hidden',
      }}
    >
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.6s ease',
        }}>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: '800',
            color: '#0d2137',
            margin: '0 0 16px',
          }}>
            {t.sectionLabel}
          </h2>

          {/* ECG Pulse Line */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <svg viewBox="0 0 300 60" width="300" height="60" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="glow-prz">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <mask id="reveal-prz">
                  <rect x="0" y="0" width="300" height="60" fill="white">
                    <animate attributeName="x" from="-300" to="300" dur="2.6s" repeatCount="indefinite" />
                  </rect>
                </mask>
              </defs>
              <line x1="0" y1="30" x2="300" y2="30" stroke="#1787b6" strokeWidth="0.5" strokeOpacity="0.2" />
              <path
                d="M 0,30 L 105,30 L 112,30 L 117,22 L 122,30 L 128,30 L 133,10 L 141,50 L 150,5 L 158,50 L 165,30 L 170,30 L 175,22 L 180,30 L 300,30"
                fill="none" stroke="#1787b6" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round"
                filter="url(#glow-prz)" mask="url(#reveal-prz)"
              />
              <circle r="4" fill="#1787b6" filter="url(#glow-prz)">
                <animateMotion dur="2.6s" repeatCount="indefinite"
                  path="M 0,30 L 105,30 L 112,30 L 117,22 L 122,30 L 128,30 L 133,10 L 141,50 L 150,5 L 158,50 L 165,30 L 170,30 L 175,22 L 180,30 L 300,30"
                />
              </circle>
            </svg>
          </div>
        </div>

        {/* Stats Row */}
        <div style={{
          display: 'flex',
          gap: '24px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          {t.stats.map((stat, i) => (
            <StatCard
              key={i}
              stat={stat}
              isVisible={isVisible}
              delay={0.1 + i * 0.12}
              isAr={isAr}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurPrizes;
import React, { useState, useRef, useEffect } from 'react';
// @ts-ignore
import ValImage from "../assets/val.png"
// @ts-ignore
import SightImage from "../assets/sight.png"
// @ts-ignore
import MesImage from "../assets/mes.png"

interface OurGoalProps {
  currentLang: string;
}

const OurGoal: React.FC<OurGoalProps> = ({ currentLang }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [prevTab, setPrevTab] = useState(0);
  const [animating, setAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const handleTabChange = (idx: number) => {
    if (idx === activeTab || animating) return;
    setAnimating(true);
    setPrevTab(activeTab);
    setTimeout(() => {
      setActiveTab(idx);
      setAnimating(false);
    }, 300);
  };

  const content = {
    ar: {
      sectionTitle: 'أهدافنا',
      tabs: [
        {
          label: 'رسالتنا',
          icon: '✦',
          image: MesImage,
          text: 'نهدف إلى تعزيز جودة الحياة في المجتمع من خلال خدمات رعاية صحية استثنائية، تقدم بالتزام تام بالتميز والرعاية.',
        },
        {
          label: 'رؤيتنا',
          icon: '◈',
          image: SightImage,
          text: 'أن نكون الخيار الأول في المنطقة للرعاية الصحية التخصصية، بتقديم أعلى مستويات الخدمة الطبية لنغنيهم عن السفر خارج المنطقة وتجاوز توقعات المرضى بمزيج من التكنولوجيا المتقدمة والرعاية المتخصصة.',
        },
        {
          label: 'قيمنا',
          icon: '◆',
          image: ValImage,
          text: '– احترام قيم المجتمع وسرية المرضى.\n– تقديم رعاية متعاطفة تلبي احتياجات المرضى.\n– الحفاظ على مستويات عالية من الاحترافية والنزاهة في جميع التفاعلات.\n– تحقيق تعافي شامل للمرضى – جسديًا وروحيًا ونفسيًا.\n– الريادة في تقديم رعاية صحية متميزة لمرضانا وأسرهم.',
        },
      ],
    },
    en: {
      sectionTitle: 'Our Goals',
      tabs: [
        {
          label: 'Our Mission',
          icon: '✦',
          image: 'https://images.pexels.com/photos/3376790/pexels-photo-3376790.jpeg?auto=compress&cs=tinysrgb&w=800',
          text: 'We aim to enhance the quality of life in the community through exceptional healthcare services, delivered with full commitment to excellence and care.',
        },
        {
          label: 'Our Vision',
          icon: '◈',
          image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800',
          text: 'To be the first choice in the region for specialized healthcare, providing the highest levels of medical service to spare patients from traveling outside the region, and exceeding patient expectations through a blend of advanced technology and specialized care.',
        },
        {
          label: 'Our Values',
          icon: '◆',
          image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
          text: '– Respecting community values and patient confidentiality.\n– Providing compassionate care that meets patient needs.\n– Maintaining high standards of professionalism and integrity in all interactions.\n– Achieving comprehensive recovery for patients – physically, spiritually, and psychologically.\n– Leading in providing distinguished healthcare for our patients and their families.',
        },
      ],
    },
  };

  const isAr = currentLang === 'ar';
  const t = content[isAr ? 'ar' : 'en'];
  const active = t.tabs[activeTab];

  return (
    <section
      ref={sectionRef}
      className="py-20"
      style={{ background: 'linear-gradient(135deg, #f0f7fb 0%, #e8f4f9 100%)' }}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Section title + ECG */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            {t.sectionTitle}
          </h2>

          {/* ECG Pulse */}
          <div className="flex justify-center">
            <svg
              viewBox="0 0 300 60"
              width="300"
              height="60"
              xmlns="http://www.w3.org/2000/svg"
              style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.7s ease' }}
            >
              <defs>
                <filter id="glow-goal">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <mask id="revealMask-goal">
                  <rect x="0" y="0" width="300" height="60" fill="white">
                    <animate attributeName="x" from="-300" to="300" dur="2.4s" repeatCount="indefinite" />
                  </rect>
                </mask>
              </defs>
              <line x1="0" y1="30" x2="300" y2="30" stroke="#1787b6" strokeWidth="0.5" strokeOpacity="0.2" />
              <path
                d="M 0,30 L 105,30 L 112,30 L 117,22 L 122,30 L 128,30 L 133,10 L 141,50 L 150,5 L 158,50 L 165,30 L 170,30 L 175,22 L 180,30 L 300,30"
                fill="none"
                stroke="#1787b6"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow-goal)"
                mask="url(#revealMask-goal)"
              />
              <circle r="4" fill="#1787b6" filter="url(#glow-goal)">
                <animateMotion
                  dur="2.4s"
                  repeatCount="indefinite"
                  path="M 0,30 L 105,30 L 112,30 L 117,22 L 122,30 L 128,30 L 133,10 L 141,50 L 150,5 L 158,50 L 165,30 L 170,30 L 175,22 L 180,30 L 300,30"
                />
              </circle>
            </svg>
          </div>
        </div>

        {/* Main layout: sidebar + content */}
        <div className={`flex flex-col ${isAr ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-start`}>

          {/* Sidebar — on the right for Arabic */}
          <div className="lg:w-1/4 w-full flex flex-col gap-3">
            {t.tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => handleTabChange(idx)}
                style={{
                  direction: isAr ? 'rtl' : 'ltr',
                  background: activeTab === idx ? '#1787b6' : '#fff',
                  color: activeTab === idx ? '#ffffff' : '#374151',
                  border: `2px solid ${activeTab === idx ? '#1787b6' : '#e5e7eb'}`,
                  borderRadius: '12px',
                  padding: '16px 20px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '17px',
                  fontWeight: activeTab === idx ? '700' : '500',
                  transition: 'all 0.3s ease',
                  textAlign: isAr ? 'right' : 'left',
                  width: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Active indicator bar */}
                {activeTab === idx && (
                  <span
                    style={{
                      position: 'absolute',
                      [isAr ? 'right' : 'left']: 0,
                      top: 0,
                      bottom: 0,
                      width: '4px',
                      background: 'rgba(255,255,255,0.5)',
                      borderRadius: isAr ? '0 12px 12px 0' : '12px 0 0 12px',
                    }}
                  />
                )}
                <span style={{ fontSize: '14px', opacity: 0.8 }}>{tab.icon}</span>
                <span>{tab.label}</span>

                {/* Arrow indicator */}
                {activeTab === idx && (
                  <span style={{
                    marginInlineStart: 'auto',
                    fontSize: '12px',
                    transform: isAr ? 'rotate(180deg)' : 'none',
                    display: 'inline-block',
                  }}>
                    ◀
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Content area */}
          <div className="lg:w-3/4 w-full">
            <div
              style={{
                opacity: animating ? 0 : 1,
                transform: animating ? 'translateY(10px)' : 'translateY(0)',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
              }}
            >
              {/* Image */}
              <div
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  marginBottom: '24px',
                  height: '280px',
                  position: 'relative',
                }}
              >
                <img
                  src={active.image}
                  alt={active.label}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(23,135,182,0.3), transparent)',
                  }}
                />
                {/* Tab label overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    [isAr ? 'right' : 'left']: '20px',
                    background: '#1787b6',
                    color: '#fff',
                    padding: '6px 16px',
                    borderRadius: '20px',
                    fontSize: '15px',
                    fontWeight: '700',
                  }}
                >
                  {active.label}
                </div>
              </div>

              {/* Text */}
              <div
                style={{
                  background: '#f8fafc',
                  borderRadius: '12px',
                  padding: '28px 32px',
                  borderRight: isAr ? '4px solid #1787b6' : 'none',
                  borderLeft: isAr ? 'none' : '4px solid #1787b6',
                  direction: isAr ? 'rtl' : 'ltr',
                  textAlign: isAr ? 'right' : 'left',
                }}
              >
                <p
                  style={{
                    color: '#374151',
                    fontSize: '17px',
                    lineHeight: '2',
                    whiteSpace: 'pre-line',
                    margin: 0,
                  }}
                >
                  {active.text}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurGoal;
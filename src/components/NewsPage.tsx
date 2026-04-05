import React, { useEffect, useRef, useState } from 'react';
// @ts-ignore
import MainHospital from '../assets/mainhospital.jpeg';
// @ts-ignore
import Postn1 from '../assets/news/postn1.png';
// @ts-ignore
import Postn2 from '../assets/news/postn2.jpg';
// @ts-ignore
import Postn3 from '../assets/news/postn3.jpeg';
// @ts-ignore
import Postn4 from '../assets/news/postn4.jpeg';
// @ts-ignore
import Postn5 from '../assets/news/postn5.jpeg';
// @ts-ignore
import Postn6 from '../assets/news/postn6.jpeg';

interface NewsPageProps {
  currentLang: string;
}

const sliderNews = [
  {
    id: 1,
    img: Postn1,
    titleAr: 'توقيع اتفاقية شراكة بين هيئة الهلال الأحمر السعودي ومستشفى تخصصي نجران',
    titleEn: 'Partnership Agreement Between Saudi Red Crescent Authority and Najran Specialist Hospital',
    summaryAr: 'بحضور سمو أمير منطقة نجران تم توقيع اتفاقية شراكة بين هيئة الهلال الأحمر السعودي ومستشفى تخصصي نجران نحو تقديم خدمة صحية أفضل لأهالي نجران.',
    summaryEn: 'In the presence of HRH the Prince of Najran region, a partnership agreement was signed between the Saudi Red Crescent Authority and Najran Specialist Hospital to provide better healthcare for Najran residents.',
    date: '2025-01-15',
    tags: ['CLINIC', 'HEALTH', 'MEDICAL'],
  },
  {
    id: 2,
    img: Postn2,
    titleAr: 'عروض نهاية العام من مستشفى تخصصي نجران',
    titleEn: 'Year-End Offers from Najran Specialist Hospital',
    summaryAr: 'يقدم مستشفى تخصصي نجران عروضاً استثنائية على عمليات قسم الجراحة العامة بأسعار مميزة لخدمة المرضى.',
    summaryEn: 'Najran Specialist Hospital offers exceptional deals on general surgery procedures at special prices to serve patients.',
    date: '2024-12-26',
    tags: ['CLINIC', 'HEALTH', 'MEDICAL'],
  },
  {
    id: 3,
    img: Postn3,
    titleAr: 'وزارة الصحة تتوج مستشفى تخصصي نجران بشهادة اعتماد المستشفى صديق كبار السن',
    titleEn: 'Ministry of Health Awards Najran Specialist Hospital the Elder-Friendly Hospital Accreditation',
    summaryAr: 'تميّز مستشفى تخصصي نجران في تطبيق معايير الجودة لرعاية كبار السن على مستوى المملكة.',
    summaryEn: 'Najran Specialist Hospital excelled in applying quality standards for elderly care across the Kingdom.',
    date: '2025-10-20',
    tags: ['CLINIC', 'HEALTH', 'MEDICAL'],
  },
  {
    id: 4,
    img: Postn4,
    titleAr: 'مستشفى تخصصي نجران يحتفل بتخريج دفعة جديدة من المتدربين الصحيين',
    titleEn: 'Najran Specialist Hospital Celebrates Graduation of a New Batch of Healthcare Trainees',
    summaryAr: 'احتفل مستشفى تخصصي نجران بتخريج دفعة جديدة من الكوادر الصحية المؤهلة في إطار برنامج التدريب الميداني المتكامل.',
    summaryEn: 'Najran Specialist Hospital celebrated the graduation of a new cohort of qualified healthcare professionals as part of its comprehensive field training program.',
    date: '2024-11-10',
    tags: ['CLINIC', 'HEALTH', 'MEDICAL'],
  },
  {
    id: 5,
    img: Postn5,
    titleAr: 'مستشفى تخصصي نجران يطلق حملة توعوية شاملة لمكافحة السكري',
    titleEn: 'Najran Specialist Hospital Launches Comprehensive Diabetes Awareness Campaign',
    summaryAr: 'انطلقت حملة توعوية واسعة بمناسبة اليوم العالمي للسكري شملت فحوصات مجانية وجلسات تثقيفية للمرضى وذويهم.',
    summaryEn: 'A wide-scale awareness campaign was launched on World Diabetes Day, featuring free screenings and educational sessions for patients and their families.',
    date: '2024-10-05',
    tags: ['CLINIC', 'HEALTH', 'MEDICAL'],
  },
  {
    id: 6,
    img: Postn6,
    titleAr: 'المستشفى يستقبل وفداً طبياً دولياً لتبادل الخبرات في مجال الجراحة التخصصية',
    titleEn: 'Hospital Welcomes International Medical Delegation for Specialized Surgery Knowledge Exchange',
    summaryAr: 'استقبل مستشفى تخصصي نجران وفداً من الأطباء والمختصين الدوليين في إطار مبادرة التعاون الطبي وتبادل الخبرات.',
    summaryEn: 'Najran Specialist Hospital welcomed a delegation of international physicians and specialists as part of a medical cooperation and knowledge exchange initiative.',
    date: '2024-09-01',
    tags: ['CLINIC', 'HEALTH', 'MEDICAL'],
  },
  {
    id: 7,
    img: MainHospital,
    titleAr: 'افتتاح الجناح الجديد لطب الطوارئ والعناية المركزة في مستشفى تخصصي نجران',
    titleEn: 'Grand Opening of the New Emergency & Intensive Care Wing at Najran Specialist Hospital',
    summaryAr: 'أعلن مستشفى تخصصي نجران عن افتتاح جناح متطور لخدمات الطوارئ والعناية المركزة مزوّد بأحدث التقنيات الطبية لضمان أعلى مستويات الرعاية.',
    summaryEn: 'Najran Specialist Hospital announced the opening of a state-of-the-art emergency and intensive care wing equipped with the latest medical technologies to ensure the highest levels of care.',
    date: '2026-03-20',
    tags: ['CLINIC', 'HEALTH', 'MEDICAL'],
  },
];

const NewsPage: React.FC<NewsPageProps> = ({ currentLang }) => {
  const isAr = currentLang === 'ar';
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  // Auto-play slider
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % sliderNews.length);
    }, 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const goTo = (idx: number) => {
    setCurrentSlide(idx);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % sliderNews.length);
    }, 5000);
  };

  const prev = () => goTo((currentSlide - 1 + sliderNews.length) % sliderNews.length);
  const next = () => goTo((currentSlide + 1) % sliderNews.length);

  const slide = sliderNews[currentSlide];

  return (
    <div ref={sectionRef} className="min-h-screen bg-gray-50" dir={isAr ? 'rtl' : 'ltr'}
      style={{ fontFamily: "'Cairo','Tajawal',sans-serif" }}>

      {/* ── Slider ── force LTR so absolute positions are never flipped by RTL dir */}
      <div dir="ltr" style={{ position: 'relative', width: '100%', height: 'clamp(340px, 55vw, 580px)', overflow: 'hidden', background: '#0d2137' }}>

        {/* Slide Image */}
        <img
          key={slide.id}
          src={slide.img}
          alt={isAr ? slide.titleAr : slide.titleEn}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'top',
            transition: 'opacity 0.6s ease',
            opacity: 1,
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.2) 100%)' }} />

        {/* Tags */}
        <div style={{ position: 'absolute', top: '28px', [isAr ? 'left' : 'right']: '28px', display: 'flex', gap: '8px' }}>
          {slide.tags.map(tag => (
            <span key={tag} style={{ color: '#fff', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', opacity: 0.85 }}>{tag}</span>
          ))}
        </div>

        {/* Text Content */}
        <div style={{
          position: 'absolute', bottom: '80px',
          [isAr ? 'right' : 'left']: 'clamp(20px, 5vw, 60px)',
          maxWidth: 'clamp(280px, 55%, 620px)',
          textAlign: isAr ? 'right' : 'left',
        }}>
          <h2 style={{
            color: '#fff', fontSize: 'clamp(18px, 2.8vw, 32px)',
            fontWeight: '800', lineHeight: '1.45', marginBottom: '14px',
            textShadow: '0 2px 12px rgba(0,0,0,0.5)',
          }}>
            {isAr ? slide.titleAr : slide.titleEn}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(12px, 1.5vw, 15px)', lineHeight: '1.7', fontWeight: '500' }}>
            {isAr ? slide.summaryAr : slide.summaryEn}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', marginTop: '10px', fontWeight: '600' }}>
            🗓 {new Date(slide.date).toLocaleDateString(isAr ? 'ar-SA' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        {/* Arrows — always LTR direction, hidden on mobile */}
        <style>{`
          @media (max-width: 640px) {
            .slider-arrow { display: none !important; }
          }
        `}</style>

        {(['prev', 'next'] as const).map(dir => (
          <button
            key={dir}
            className="slider-arrow"
            onClick={dir === 'prev' ? prev : next}
            style={{
              position: 'absolute', top: '50%', transform: 'translateY(-50%)',
              [dir === 'prev' ? 'left' : 'right']: '16px',
              width: '44px', height: '44px', borderRadius: '50%', border: 'none',
              background: 'rgba(255,255,255,0.18)', color: '#fff', fontSize: '20px',
              cursor: 'pointer', backdropFilter: 'blur(6px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(23,135,182,0.7)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.18)')}
          >
            {dir === 'prev' ? '‹' : '›'}
          </button>
        ))}

        {/* Dots */}
        <div style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px' }}>
          {sliderNews.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === currentSlide ? '24px' : '8px', height: '8px',
                borderRadius: '4px', border: 'none', cursor: 'pointer',
                background: i === currentSlide ? '#1787b6' : 'rgba(255,255,255,0.4)',
                transition: 'all 0.3s ease', padding: 0,
              }}
            />
          ))}
        </div>
      </div>

      {/* ── News Cards Grid ── */}
      <section style={{ padding: 'clamp(48px, 7vw, 96px) 0', background: '#f8fbfd' }}>
        <div className="max-w-6xl mx-auto px-4">

          {/* Section Header with title + ECG pulse */}
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <span style={{
              display: 'inline-block', background: '#e8f4fb', color: '#1787b6',
              fontSize: '13px', fontWeight: '700', padding: '6px 22px',
              borderRadius: '50px', marginBottom: '16px', letterSpacing: '0.5px',
            }}>
              {isAr ? 'أحدث الأخبار' : 'Latest News'}
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight" style={{ color: '#0d2137' }}>
              {isAr ? 'المدونة والأخبار' : 'Blog & News'}
            </h1>

            <p style={{ fontSize: '18px', color: '#4a6d85', marginBottom: '20px', fontWeight: '500' }}>
              {isAr ? 'آخر أخبار ومستجدات مستشفى تخصصي نجران' : 'Latest news and updates from Najran Specialist Hospital'}
            </p>

            {/* ECG Pulse Animation */}
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <svg viewBox="0 0 300 60" width="320" height="60" xmlns="http://www.w3.org/2000/svg"
                className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <defs>
                  <filter id="glow-news"><feGaussianBlur stdDeviation="2.5" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                  <mask id="revealMask-news"><rect x="0" y="0" width="300" height="60" fill="white"><animate attributeName="x" from="-300" to="300" dur="2.6s" repeatCount="indefinite"/></rect></mask>
                </defs>
                <line x1="0" y1="30" x2="300" y2="30" stroke="#1787b6" strokeWidth="0.8" strokeOpacity="0.25"/>
                <path d="M 0,30 L 105,30 L 112,30 L 117,22 L 122,30 L 128,30 L 133,10 L 141,50 L 150,5 L 158,50 L 165,30 L 170,30 L 175,22 L 180,30 L 300,30"
                  fill="none" stroke="#1787b6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow-news)" mask="url(#revealMask-news)"/>
                <circle r="4.5" fill="#1787b6" filter="url(#glow-news)">
                  <animateMotion dur="2.6s" repeatCount="indefinite" path="M 0,30 L 105,30 L 112,30 L 117,22 L 122,30 L 128,30 L 133,10 L 141,50 L 150,5 L 158,50 L 165,30 L 170,30 L 175,22 L 180,30 L 300,30"/>
                </circle>
              </svg>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {sliderNews.map((item) => (
              <div
                key={item.id}
                style={{
                  background: '#fff', borderRadius: '20px',
                  border: '1px solid #e3eff7',
                  boxShadow: '0 2px 16px rgba(23,135,182,0.07)',
                  overflow: 'hidden', cursor: 'pointer',
                  transition: 'transform 0.25s, box-shadow 0.25s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 36px rgba(23,135,182,0.15)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 16px rgba(23,135,182,0.07)';
                }}
              >
                {/* Image */}
                <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
                  <img src={item.img} alt={isAr ? item.titleAr : item.titleEn}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.4s ease' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                </div>

                {/* Tags */}
                <div style={{ padding: '12px 20px 0', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {item.tags.map(tag => (
                    <span key={tag} style={{
                      fontSize: '10px', fontWeight: '700', color: '#1787b6',
                      background: '#e8f4fb', borderRadius: '50px', padding: '2px 10px', letterSpacing: '0.5px',
                    }}>{tag}</span>
                  ))}
                </div>

                {/* Body */}
                <div style={{ padding: '12px 20px 20px' }}>
                  <p style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '600', marginBottom: '8px' }}>
                    {new Date(item.date).toLocaleDateString(isAr ? 'ar-SA' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <h3 style={{ fontSize: 'clamp(14px, 1.6vw, 16px)', fontWeight: '800', color: '#0d2137', lineHeight: '1.5', marginBottom: '10px' }}>
                    {isAr ? item.titleAr : item.titleEn}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#4a6d85', lineHeight: '1.75', fontWeight: '500' }}>
                    {isAr ? item.summaryAr : item.summaryEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
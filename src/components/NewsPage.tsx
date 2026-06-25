import React, { useEffect, useRef, useState, useCallback } from 'react';
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
// @ts-ignore
import One from '../assets/news_images/1.png';
// @ts-ignore
import Two from '../assets/news_images/2.png';

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

// News feed images — each displays full-width as a standalone post


// ── Zoomable Image Component ──
interface ZoomableImageProps {
  src: string;
  alt?: string;
}

const ZoomableImage: React.FC<ZoomableImageProps> = ({ src, alt = '' }) => {
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef<{ mx: number; my: number; px: number; py: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const MIN_SCALE = 1;
  const MAX_SCALE = 5;

  // Clamp position so image never leaves container
  const clamp = useCallback((newScale: number, newX: number, newY: number) => {
    if (!containerRef.current) return { x: newX, y: newY };
    const { width, height } = containerRef.current.getBoundingClientRect();
    const maxX = (width * (newScale - 1)) / 2;
    const maxY = (height * (newScale - 1)) / 2;
    return {
      x: Math.min(maxX, Math.max(-maxX, newX)),
      y: Math.min(maxY, Math.max(-maxY, newY)),
    };
  }, []);

  // Mouse wheel zoom
  const onWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    setScale(prev => {
      const next = Math.min(MAX_SCALE, Math.max(MIN_SCALE, prev - e.deltaY * 0.001));
      setPos(p => clamp(next, p.x, p.y));
      return next;
    });
  }, [clamp]);

  // Mouse drag
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    if (scale === 1) return;
    setDragging(true);
    dragStart.current = { mx: e.clientX, my: e.clientY, px: pos.x, py: pos.y };
  }, [scale, pos]);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragging || !dragStart.current) return;
    const dx = e.clientX - dragStart.current.mx;
    const dy = e.clientY - dragStart.current.my;
    const clamped = clamp(scale, dragStart.current.px + dx, dragStart.current.py + dy);
    setPos(clamped);
  }, [dragging, scale, clamp]);

  const onMouseUp = useCallback(() => {
    setDragging(false);
    dragStart.current = null;
  }, []);

  // Touch pinch zoom + drag
  const lastTouchDist = useRef<number | null>(null);
  const lastTouchMid = useRef<{ x: number; y: number } | null>(null);

  const getTouchDist = (touches: React.TouchList) => {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      lastTouchDist.current = getTouchDist(e.touches);
      lastTouchMid.current = {
        x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
        y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
      };
    } else if (e.touches.length === 1 && scale > 1) {
      dragStart.current = { mx: e.touches[0].clientX, my: e.touches[0].clientY, px: pos.x, py: pos.y };
    }
  }, [scale, pos]);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    if (e.touches.length === 2 && lastTouchDist.current !== null) {
      const newDist = getTouchDist(e.touches);
      const ratio = newDist / lastTouchDist.current;
      setScale(prev => {
        const next = Math.min(MAX_SCALE, Math.max(MIN_SCALE, prev * ratio));
        setPos(p => clamp(next, p.x, p.y));
        return next;
      });
      lastTouchDist.current = newDist;
    } else if (e.touches.length === 1 && dragStart.current) {
      const dx = e.touches[0].clientX - dragStart.current.mx;
      const dy = e.touches[0].clientY - dragStart.current.my;
      const clamped = clamp(scale, dragStart.current.px + dx, dragStart.current.py + dy);
      setPos(clamped);
    }
  }, [scale, clamp]);

  const onTouchEnd = useCallback(() => {
    lastTouchDist.current = null;
    lastTouchMid.current = null;
    dragStart.current = null;
  }, []);

  const resetZoom = () => {
    setScale(1);
    setPos({ x: 0, y: 0 });
  };

  const zoomIn = () => {
    setScale(prev => {
      const next = Math.min(MAX_SCALE, prev + 0.5);
      setPos(p => clamp(next, p.x, p.y));
      return next;
    });
  };

  const zoomOut = () => {
    setScale(prev => {
      const next = Math.max(MIN_SCALE, prev - 0.5);
      if (next === MIN_SCALE) setPos({ x: 0, y: 0 });
      else setPos(p => clamp(next, p.x, p.y));
      return next;
    });
  };

  return (
    <div style={{ position: 'relative', width: '100%', background: '#fff' }}>

      {/* Zoom Controls */}
      <div style={{
        position: 'absolute', top: '12px', right: '12px', zIndex: 10,
        display: 'flex', flexDirection: 'column', gap: '6px',
      }}>
        {/* Zoom In */}
        <button onClick={zoomIn} title="Zoom In" style={{
          width: '36px', height: '36px', borderRadius: '50%', border: 'none',
          background: 'rgba(23,135,182,0.88)', color: '#fff', fontSize: '20px',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.18)', backdropFilter: 'blur(4px)',
          fontWeight: '700', lineHeight: 1,
        }}>+</button>

        {/* Zoom Out */}
        <button onClick={zoomOut} title="Zoom Out" style={{
          width: '36px', height: '36px', borderRadius: '50%', border: 'none',
          background: 'rgba(23,135,182,0.88)', color: '#fff', fontSize: '22px',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.18)', backdropFilter: 'blur(4px)',
          fontWeight: '700', lineHeight: 1,
        }}>−</button>

        {/* Reset */}
        {scale !== 1 && (
          <button onClick={resetZoom} title="Reset" style={{
            width: '36px', height: '36px', borderRadius: '50%', border: 'none',
            background: 'rgba(255,255,255,0.92)', color: '#1787b6', fontSize: '14px',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(0,0,0,0.18)', backdropFilter: 'blur(4px)',
            fontWeight: '700',
          }}>↺</button>
        )}
      </div>

      {/* Scale Indicator */}
      {scale !== 1 && (
        <div style={{
          position: 'absolute', bottom: '12px', right: '12px', zIndex: 10,
          background: 'rgba(13,33,55,0.75)', color: '#fff',
          fontSize: '11px', fontWeight: '700', padding: '4px 10px',
          borderRadius: '20px', backdropFilter: 'blur(4px)',
        }}>
          {Math.round(scale * 100)}%
        </div>
      )}

      {/* Hint */}
      {scale === 1 && (
        <div style={{
          position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)',
          zIndex: 10, background: 'rgba(23,135,182,0.75)', color: '#fff',
          fontSize: '11px', fontWeight: '600', padding: '4px 14px',
          borderRadius: '20px', backdropFilter: 'blur(4px)', whiteSpace: 'nowrap',
          pointerEvents: 'none',
        }}>
          🔍 Scroll to zoom · Drag to pan
        </div>
      )}

      {/* Image Container */}
      <div
        ref={containerRef}
        onWheel={onWheel}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{
          overflow: 'hidden',
          cursor: scale > 1 ? (dragging ? 'grabbing' : 'grab') : 'zoom-in',
          userSelect: 'none',
          width: '100%',
        }}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            transform: `scale(${scale}) translate(${pos.x / scale}px, ${pos.y / scale}px)`,
            transformOrigin: 'center center',
            transition: dragging ? 'none' : 'transform 0.15s ease',
            willChange: 'transform',
          }}
        />
      </div>
    </div>
  );
};

const NewsPage: React.FC<NewsPageProps> = ({ currentLang }) => {
  const isAr = currentLang === 'ar';
  const newsFeedImages = [isAr ? One : Two];
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

      {/* ── Slider ── */}
      <div dir="ltr" style={{ position: 'relative', width: '100%', height: 'clamp(340px, 55vw, 580px)', overflow: 'hidden', background: '#0d2137' }}>
        <img
          key={slide.id}
          src={slide.img}
          alt={isAr ? slide.titleAr : slide.titleEn}
          style={{
            position: 'absolute', inset: 0, width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'top',
            transition: 'opacity 0.6s ease', opacity: 1,
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.75) 40%, rgba(0,0,0,0.2) 100%)' }} />

        <div style={{ position: 'absolute', top: '28px', [isAr ? 'left' : 'right']: '28px', display: 'flex', gap: '8px' }}>
          {slide.tags.map(tag => (
            <span key={tag} style={{ color: '#fff', fontSize: '11px', fontWeight: '700', letterSpacing: '1px', opacity: 0.85 }}>{tag}</span>
          ))}
        </div>

        <div style={{
          position: 'absolute', bottom: '80px',
          [isAr ? 'right' : 'left']: 'clamp(20px, 5vw, 60px)',
          maxWidth: 'clamp(280px, 55%, 620px)',
          textAlign: isAr ? 'right' : 'left',
        }}>
          <h2 style={{ color: '#fff', fontSize: 'clamp(18px, 2.8vw, 32px)', fontWeight: '800', lineHeight: '1.45', marginBottom: '14px', textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}>
            {isAr ? slide.titleAr : slide.titleEn}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(12px, 1.5vw, 15px)', lineHeight: '1.7', fontWeight: '500' }}>
            {isAr ? slide.summaryAr : slide.summaryEn}
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', marginTop: '10px', fontWeight: '600' }}>
            🗓 {new Date(slide.date).toLocaleDateString(isAr ? 'ar-SA' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <style>{`
          @media (max-width: 640px) { .slider-arrow { display: none !important; } }
          @keyframes pulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.4); } }
        `}</style>

        {(['prev', 'next'] as const).map(dir => (
          <button key={dir} className="slider-arrow" onClick={dir === 'prev' ? prev : next}
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

        <div style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px' }}>
          {sliderNews.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} style={{
              width: i === currentSlide ? '24px' : '8px', height: '8px',
              borderRadius: '4px', border: 'none', cursor: 'pointer',
              background: i === currentSlide ? '#1787b6' : 'rgba(255,255,255,0.4)',
              transition: 'all 0.3s ease', padding: 0,
            }} />
          ))}
        </div>
      </div>

      {/* ── News Feed ── */}
      <section style={{ padding: 'clamp(48px, 7vw, 96px) 0', background: '#f0f6fa' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto', padding: '0 16px' }}>

          {/* Section Header */}
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

          {/* News Posts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {newsFeedImages.map((img, index) => (
              <div
                key={index}
                style={{
                  width: '100%',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '3px solid #1787b6',
                  boxShadow: '0 4px 32px rgba(23,135,182,0.13), 0 0 0 6px rgba(23,135,182,0.07)',
                  background: '#fff',
                }}
              >
                {/* News label strip */}
                <div style={{
                  background: 'linear-gradient(90deg, #1787b6, #0d5c82)',
                  padding: '8px 20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff', display: 'inline-block', animation: 'pulse 1.5s infinite' }} />
                  <span style={{ color: '#fff', fontSize: '12px', fontWeight: '700', letterSpacing: '1.5px' }}>
                    {isAr ? 'خبر' : 'NEWS'}
                  </span>
                </div>

                {/* Zoomable Image */}
                <ZoomableImage src={img} alt={`news-${index + 1}`} />
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default NewsPage;
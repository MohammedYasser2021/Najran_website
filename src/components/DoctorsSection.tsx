import React, { useState, useRef, useEffect, useCallback } from 'react';
import { doctors } from './doctorData';

interface DoctorsProps {
  currentLang: string;
}

// @ts-ignore
import img1 from '../assets/doctors/1.png';
// @ts-ignore
import img2 from '../assets/doctors/2.png';
// @ts-ignore
import img3 from '../assets/doctors/3.png';
// @ts-ignore
import img4 from '../assets/doctors/4.png';
// @ts-ignore
import img5 from '../assets/doctors/5.png';
// @ts-ignore
import img6 from '../assets/doctors/6.png';
// @ts-ignore
import img7 from '../assets/doctors/7.png';
// @ts-ignore
import img8 from '../assets/doctors/8.png';
// @ts-ignore
import img9 from '../assets/doctors/9.png';
// @ts-ignore
import img10 from '../assets/doctors/10.png';
// @ts-ignore
import img11 from '../assets/doctors/11.png';
// @ts-ignore
import img12 from '../assets/doctors/12.png';
// @ts-ignore
import img13 from '../assets/doctors/13.png';
// @ts-ignore
import img14 from '../assets/doctors/14.png';
// @ts-ignore
import img15 from '../assets/doctors/15.png';
// @ts-ignore
import img16 from '../assets/doctors/16.PNG';
// @ts-ignore
import img17 from '../assets/doctors/17.PNG';
// @ts-ignore
import img18 from '../assets/doctors/18.png';
// @ts-ignore
import img19 from '../assets/doctors/19.png';
// @ts-ignore
import img20 from '../assets/doctors/20.png';
// @ts-ignore
import img21 from '../assets/doctors/21.png';
// @ts-ignore
import img22 from '../assets/doctors/22.png';
// @ts-ignore
import img23 from '../assets/doctors/23.png';
// @ts-ignore
import img24 from '../assets/doctors/24.png';
// @ts-ignore
import img25 from '../assets/doctors/25.png';
// @ts-ignore
import img26 from '../assets/doctors/26.png';
// @ts-ignore
import img27 from '../assets/doctors/27.png';
// @ts-ignore
import img28 from '../assets/doctors/28.png';
// @ts-ignore
import img29 from '../assets/doctors/29.png';
// @ts-ignore
import img30 from '../assets/doctors/30.png';
// @ts-ignore
import img31 from '../assets/doctors/31.png';
// @ts-ignore
import img32 from '../assets/doctors/32.png';
// @ts-ignore
import img33 from '../assets/doctors/33.png';
// @ts-ignore
import img34 from '../assets/doctors/34.png';
// @ts-ignore
import img35 from '../assets/doctors/35.png';
// @ts-ignore
import img36 from '../assets/doctors/36.png';
// @ts-ignore
import img37 from '../assets/doctors/37.png';
// @ts-ignore
import img38 from '../assets/doctors/38.png';
// @ts-ignore
import img39 from '../assets/doctors/39.png';
// @ts-ignore
import img40 from '../assets/doctors/40.png';
// @ts-ignore
import img41 from '../assets/doctors/41.PNG';
// @ts-ignore
import img42 from '../assets/doctors/42.PNG';
// @ts-ignore
import img43 from '../assets/doctors/43.PNG';
// @ts-ignore
import img44 from '../assets/doctors/44.png';
// @ts-ignore
import img45 from '../assets/doctors/45.png';
// @ts-ignore
import img46 from '../assets/doctors/46.png';
// @ts-ignore
import img47 from '../assets/doctors/47.png';

const doctorImages = [
  { id: 1, src: img1 },
  { id: 2, src: img2 },
  { id: 3, src: img3 },
  { id: 4, src: img4 },
  { id: 5, src: img5 },
  { id: 6, src: img6 },
  { id: 7, src: img7 },
  { id: 8, src: img8 },
  { id: 9, src: img9 },
  { id: 10, src: img10 },
  { id: 11, src: img11 },
  { id: 12, src: img12 },
  { id: 13, src: img13 },
  { id: 14, src: img14 },
  { id: 15, src: img15 },
  { id: 16, src: img16 },
  { id: 17, src: img17 },
  { id: 18, src: img18 },
  { id: 19, src: img19 },
  { id: 20, src: img20 },
  { id: 21, src: img21 },
  { id: 22, src: img22 },
  { id: 23, src: img23 },
  { id: 24, src: img24 },
  { id: 25, src: img25 },
  { id: 26, src: img26 },
  { id: 27, src: img27 },
  { id: 28, src: img28 },
  { id: 29, src: img29 },
  { id: 30, src: img30 },
  { id: 31, src: img31 },
  { id: 32, src: img32 },
  { id: 33, src: img33 },
  { id: 34, src: img34 },
  { id: 35, src: img35 },
  { id: 36, src: img36 },
  { id: 37, src: img37 },
  { id: 38, src: img38 },
  { id: 39, src: img39 },
  { id: 40, src: img40 },
  { id: 41, src: img41 },
  { id: 42, src: img42 },
  { id: 43, src: img43 },
  { id: 44, src: img44 },
  { id: 45, src: img45 },
  { id: 46, src: img46 },
  { id: 47, src: img47 },
];

const content = {
  ar: {
    title: 'فريقنا الطبي',
    subtitle: 'نخبة من أفضل الأطباء المتخصصين',
    doctor: 'د.',
    specialist: 'استشاري',
    prev: 'السابق',
    next: 'التالي',
  },
  en: {
    title: 'Our Medical Team',
    subtitle: 'An elite group of the finest specialist physicians',
    doctor: 'Dr.',
    specialist: 'Consultant',
    prev: 'Prev',
    next: 'Next',
  },
};

const VISIBLE = 3; // cards visible at once
const AUTO_PLAY_MS = 3500;

const Doctors: React.FC<DoctorsProps> = ({ currentLang }) => {
  const isAr = currentLang === 'ar';
  const t = content[isAr ? 'ar' : 'en'];
  const total = doctorImages.length;

  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent(c => (c - 1 + total) % total), [total]);

  // Auto play
  useEffect(() => {
    autoPlayRef.current = setInterval(next, AUTO_PLAY_MS);
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [next]);

  const resetAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(next, AUTO_PLAY_MS);
  };

  const handleNext = () => { next(); resetAutoPlay(); };
  const handlePrev = () => { prev(); resetAutoPlay(); };
  const handleDotClick = (idx: number) => { setCurrent(idx); resetAutoPlay(); };

  // Touch / drag support
  const onPointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStart.current = e.clientX;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    const delta = e.clientX - dragStart.current;
    if (Math.abs(delta) > 40) {
      delta < 0 ? handleNext() : handlePrev();
    }
  };

  // Compute positions for visible cards
  const getCardStyle = (offset: number): React.CSSProperties => {
    const abs = Math.abs(offset);
    const scale = abs === 0 ? 1 : abs === 1 ? 0.82 : abs === 2 ? 0.65 : 0.5;
    const translateX = offset * 280;
    const translateZ = abs === 0 ? 0 : abs === 1 ? -120 : abs === 2 ? -220 : -300;
    const opacity = abs === 0 ? 1 : abs === 1 ? 0.85 : abs === 2 ? 0.6 : 0.3;
    const zIndex = 10 - abs;
    const blur = abs === 0 ? 0 : abs === 1 ? 0 : abs === 2 ? 1 : 3;
    

    return {
      position: 'absolute',
      transform: `translateX(${translateX}px) scale(${scale}) translateZ(${translateZ}px)`,
      opacity,
      zIndex,
      filter: abs >= 2 ? 'blur(2px)' : 'none',
      transition: isDragging ? 'none' : 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      cursor: abs === 0 ? 'default' : 'pointer',
      contain: 'layout style paint',

    };
  };

  const getOffset = (idx: number) => {
    let offset = idx - current;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset;
  };

  const visibleIndices = Array.from({ length: total }, (_, i) => i)
    .filter(i => Math.abs(getOffset(i)) <= 1);

  return (
    <section
      ref={sectionRef}
      dir={isAr ? 'rtl' : 'ltr'}
      style={{
        padding: '80px 0 100px',
        background: 'linear-gradient(180deg, #0a1628 0%, #0d2137 50%, #0a1628 100%)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Decorative background grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(23,135,182,0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(23,135,182,0.06) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      {/* Glow orb */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(23,135,182,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container mx-auto px-4 max-w-7xl" style={{ position: 'relative' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <p style={{
            color: '#1787b6',
            fontSize: '13px',
            fontWeight: '600',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            marginBottom: '12px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease',
          }}>
            ✦ {isAr ? 'كادرنا الطبي المتميز' : 'Our Distinguished Medical Staff'} ✦
          </p>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 52px)',
            fontWeight: '800',
            color: '#ffffff',
            margin: '0 0 12px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease 0.1s',
          }}>
            {t.title}
          </h2>
          <p style={{
            color: 'rgba(255,255,255,0.45)',
            fontSize: '16px',
            marginBottom: '32px',
            opacity: isVisible ? 1 : 0,
            transition: 'all 0.6s ease 0.2s',
          }}>
            {t.subtitle}
          </p>

          {/* ECG pulse */}
          <div style={{ display: 'flex', justifyContent: 'center', opacity: isVisible ? 1 : 0, transition: 'opacity 0.7s ease 0.3s' }}>
            <svg viewBox="0 0 300 60" width="300" height="60" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="glow-doc">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <mask id="reveal-doc">
                  <rect x="0" y="0" width="300" height="60" fill="white">
                    <animate attributeName="x" from="-300" to="300" dur="2.4s" repeatCount="indefinite" />
                  </rect>
                </mask>
              </defs>
              <line x1="0" y1="30" x2="300" y2="30" stroke="#1787b6" strokeWidth="0.5" strokeOpacity="0.25" />
              <path
                d="M 0,30 L 105,30 L 112,30 L 117,22 L 122,30 L 128,30 L 133,10 L 141,50 L 150,5 L 158,50 L 165,30 L 170,30 L 175,22 L 180,30 L 300,30"
                fill="none" stroke="#1787b6" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round"
                filter="url(#glow-doc)" mask="url(#reveal-doc)"
              />
              <circle r="4" fill="#1787b6" filter="url(#glow-doc)">
                <animateMotion dur="2.4s" repeatCount="indefinite"
                  path="M 0,30 L 105,30 L 112,30 L 117,22 L 122,30 L 128,30 L 133,10 L 141,50 L 150,5 L 158,50 L 165,30 L 170,30 L 175,22 L 180,30 L 300,30"
                />
              </circle>
            </svg>
          </div>
        </div>

        {/* 3D Carousel */}
        <div
          style={{
            position: 'relative',
            height: '420px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            perspective: '1200px',
            perspectiveOrigin: '50% 50%',
            userSelect: 'none',
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s ease 0.4s',
          }}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerLeave={() => setIsDragging(false)}
        >
          {visibleIndices.map(idx => {
            const offset = getOffset(idx);
            const doctor = doctorImages[idx];
            const isCenter = offset === 0;

            return (
              <div
                key={idx}
                style={getCardStyle(offset)}
                onClick={() => !isCenter && handleDotClick(idx)}
              >
                <div style={{
                  width: '280px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  background: 'linear-gradient(180deg, #0d2a3f 0%, #071520 100%)',
                  border: isCenter ? '2px solid #1787b6' : '1px solid rgba(23,135,182,0.2)',
                  boxShadow: isCenter
                    ? '0 0 40px rgba(23,135,182,0.4), 0 20px 60px rgba(0,0,0,0.5)'
                    : '0 10px 30px rgba(0,0,0,0.4)',
                }}>
                  {/* Image */}
                  <div style={{ position: 'relative', height: '280px', overflow: 'hidden' }}>
                    <img
                      src={doctor.src}
                      alt={`${t.doctor} ${doctor.id}`}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top center',
                        display: 'block',
                        transition: 'transform 0.4s ease',
                      }}
                      draggable={false}
                      loading="lazy"
                      decoding="async"
                    />
                    {/* Gradient overlay */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(7,21,32,0.95) 0%, rgba(7,21,32,0.2) 50%, transparent 100%)',
                    }} />


                  </div>

{/* Info */}
<div style={{
  padding: '16px',
  textAlign: isAr ? 'right' : 'left',
  direction: isAr ? 'rtl' : 'ltr',
}}>
  {(() => {
    const data = doctors.find(d => d.id === doctor.id);
    return data ? (
      <>
        <p style={{
          color: '#ffffff',
          fontSize: '14px',
          fontWeight: '700',
          margin: '0 0 4px 0',
          lineHeight: 1.3,
        }}>
          {isAr
            ? `د. ${data.nameAr}`
            : `Dr. ${data.nameEn}`}
        </p>
        <p style={{
          color: '#1787b6',
          fontSize: '12px',
          margin: 0,
          lineHeight: 1.4,
        }}>
          {isAr ? data.specialtyAr : data.specialtyEn}
        </p>
      </>
    ) : null;
  })()}
</div>
                </div>
              </div>
            );
          })}
        </div>

 
      </div>
    </section>
  );
};

export default Doctors;
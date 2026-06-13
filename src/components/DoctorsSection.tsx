import React, { useState, useRef, useEffect, useCallback } from 'react';
import { doctors } from './doctorData';

// @ts-ignore
import vid5 from '../assets/doctors/vid5.mp4';
// @ts-ignore
import vid43 from '../assets/doctors/vid43.mp4';

// @ts-ignore
import vid20 from '../assets/doctors/vid20.mp4';
// @ts-ignore
import vid36 from '../assets/doctors/vid36.mp4';
// @ts-ignore
import vid39 from '../assets/doctors/vid39.mp4';
// @ts-ignore
import vid48 from '../assets/doctors/vid48.mp4';
// @ts-ignore
import vid50 from '../assets/doctors/vid50.mp4';
// @ts-ignore
import vid46 from '../assets/doctors/vid46.mp4';

// @ts-ignore
import img1 from '../assets/doctors/1.png';
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
import img15 from '../assets/doctors/15.png';
// @ts-ignore
import img16 from '../assets/doctors/16.PNG';
// @ts-ignore
import img17 from '../assets/doctors/17.png';
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
// @ts-ignore
import img48 from '../assets/doctors/48.png';
// @ts-ignore
import img49 from '../assets/doctors/49.png';
// @ts-ignore
import img50 from '../assets/doctors/50.png';

interface DoctorsProps {
  currentLang: string;
}

const doctorImages = [
  { id: 1, src: img1 },
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
  { id: 48, src: img48 },
  { id: 49, src: img49 },
  { id: 50, src: img50 },
];

// Map doctor id → video src (only doctors that HAVE a video)
const doctorVideos: Record<number, string> = {
  5: vid5,
  20: vid20, 
  36: vid36,
  39: vid39, 
  43: vid43,
  46: vid46,
  48: vid48,
  50: vid50,
};

const content = {
  ar: {
    title: 'فريقنا الطبي',
    subtitle: 'نخبة من أفضل الأطباء المتخصصين',
    doctor: 'د.',
    specialist: 'استشاري',
    prev: 'السابق',
    next: 'التالي',
    watchVideo: 'شاهد الفيديو',
    closeVideo: 'إغلاق',
  },
  en: {
    title: 'Our Medical Team',
    subtitle: 'An elite group of the finest specialist physicians',
    doctor: 'Dr.',
    specialist: 'Consultant',
    prev: 'Prev',
    next: 'Next',
    watchVideo: 'Watch Video',
    closeVideo: 'Close',
  },
};

const VISIBLE = 3;
const AUTO_PLAY_MS = 3500;

// ─── Video Modal ────────────────────────────────────────────────────────────
interface VideoModalProps {
  videoSrc: string;
  doctorName: string;
  doctorSpecialty: string;
  onClose: () => void;
  isAr: boolean;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoSrc, doctorName, doctorSpecialty, onClose, isAr }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);

  useEffect(() => {
    // Trigger entrance animation
    requestAnimationFrame(() => setIsAnimatingIn(true));
    // Lock body scroll
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const handleClose = () => {
    setIsAnimatingIn(false);
    setTimeout(onClose, 350);
  };

  // Close on backdrop click
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) handleClose();
  };

  // Close on Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div
      onClick={handleBackdropClick}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: isAnimatingIn ? 'rgba(0,0,0,0.88)' : 'rgba(0,0,0,0)',
        backdropFilter: isAnimatingIn ? 'blur(8px)' : 'blur(0px)',
        transition: 'background 0.35s ease, backdrop-filter 0.35s ease',
      }}
    >
      {/* Modal container */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '780px',
          transform: isAnimatingIn ? 'scale(1) translateY(0)' : 'scale(0.88) translateY(40px)',
          opacity: isAnimatingIn ? 1 : 0,
          transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1), opacity 0.35s ease',
        }}
      >
        {/* Glow ring behind the card */}
        <div style={{
          position: 'absolute',
          inset: '-2px',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, #1787b6, #0d5a7a, #1787b6)',
          opacity: 0.7,
          zIndex: 0,
        }} />

        {/* Card */}
        <div style={{
          position: 'relative',
          zIndex: 1,
          background: 'linear-gradient(180deg, #0d2a3f 0%, #071520 100%)',
          borderRadius: '22px',
          overflow: 'hidden',
        }}>

          {/* Header bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '14px 20px',
            borderBottom: '1px solid rgba(23,135,182,0.25)',
            direction: isAr ? 'rtl' : 'ltr',
          }}>
            {/* Pulse dot + name */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{
                display: 'inline-block',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#1787b6',
                boxShadow: '0 0 0 0 rgba(23,135,182,0.6)',
                animation: 'pulse-ring 1.5s ease-out infinite',
              }} />
              <div>
                <p style={{ color: '#fff', fontWeight: 700, fontSize: '16px', margin: 0, lineHeight: 1.2 }}>
                  {doctorName}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', margin: 0 }}>
                  {doctorSpecialty}
                </p>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={handleClose}
              style={{
                background: 'rgba(23,135,182,0.15)',
                border: '1px solid rgba(23,135,182,0.35)',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#fff',
                fontSize: '18px',
                lineHeight: 1,
                transition: 'background 0.2s',
                flexShrink: 0,
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(23,135,182,0.35)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(23,135,182,0.15)')}
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {/* Video area */}
          <div style={{ position: 'relative', background: '#000' }}>
            <video
              ref={videoRef}
              src={videoSrc}
              controls
              autoPlay
              style={{
                width: '100%',
                display: 'block',
                maxHeight: '460px',
                objectFit: 'contain',
              }}
            />

            {/* Cinematic side bars */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, bottom: 0,
              width: '40px',
              background: 'linear-gradient(90deg, rgba(7,21,32,0.7), transparent)',
              pointerEvents: 'none',
            }} />
            <div style={{
              position: 'absolute',
              top: 0, right: 0, bottom: 0,
              width: '40px',
              background: 'linear-gradient(270deg, rgba(7,21,32,0.7), transparent)',
              pointerEvents: 'none',
            }} />
          </div>

          {/* Footer accent line */}
          <div style={{
            height: '3px',
            background: 'linear-gradient(90deg, transparent, #1787b6, transparent)',
          }} />
        </div>
      </div>

      {/* Keyframes injected once */}
      <style>{`
        @keyframes pulse-ring {
          0%   { box-shadow: 0 0 0 0   rgba(23,135,182,0.6); }
          70%  { box-shadow: 0 0 0 10px rgba(23,135,182,0);   }
          100% { box-shadow: 0 0 0 0   rgba(23,135,182,0);    }
        }
      `}</style>
    </div>
  );
};

// ─── Main Component ──────────────────────────────────────────────────────────
const Doctors: React.FC<DoctorsProps> = ({ currentLang }) => {
  const isAr = currentLang === 'ar';
  const t = content[isAr ? 'ar' : 'en'];
  const total = doctorImages.length;

  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [modalDoctor, setModalDoctor] = useState<number | null>(null); // doctor id when modal open
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

  useEffect(() => {
    // Pause autoplay when modal is open
    if (modalDoctor !== null) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      return;
    }
    autoPlayRef.current = setInterval(next, AUTO_PLAY_MS);
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current); };
  }, [next, modalDoctor]);

  const resetAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(next, AUTO_PLAY_MS);
  };

  const handleNext = () => { next(); resetAutoPlay(); };
  const handlePrev = () => { prev(); resetAutoPlay(); };
  const handleDotClick = (idx: number) => { setCurrent(idx); resetAutoPlay(); };

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

  const getCardStyle = (offset: number): React.CSSProperties => {
    const abs = Math.abs(offset);
    const scale = abs === 0 ? 1 : abs === 1 ? 0.82 : abs === 2 ? 0.65 : 0.5;
    const translateX = offset * 280;
    const translateZ = abs === 0 ? 0 : abs === 1 ? -120 : abs === 2 ? -220 : -300;
    const opacity = abs === 0 ? 1 : abs === 1 ? 0.85 : abs === 2 ? 0.6 : 0.3;
    const zIndex = 10 - abs;
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

  // Data for modal
  const modalData = modalDoctor !== null
    ? (() => {
        const img = doctorImages.find(d => d.id === modalDoctor);
        const data = doctors.find(d => d.id === modalDoctor);
        return img && data ? { img, data } : null;
      })()
    : null;

  return (
    <>
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
              const hasVideo = doctor.id in doctorVideos;

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

                      {/* ▶ Video button — only for center card with a video */}
                      {isCenter && hasVideo && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setModalDoctor(doctor.id);
                          }}
                          style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '64px',
                            height: '64px',
                            borderRadius: '50%',
                            background: 'rgba(23,135,182,0.25)',
                            border: '2px solid rgba(23,135,182,0.8)',
                            backdropFilter: 'blur(6px)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 5,
                            animation: 'video-btn-pulse 2s ease-in-out infinite',
                            transition: 'background 0.2s, transform 0.2s',
                          }}
                          onMouseEnter={e => {
                            e.currentTarget.style.background = 'rgba(23,135,182,0.55)';
                            e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.1)';
                          }}
                          onMouseLeave={e => {
                            e.currentTarget.style.background = 'rgba(23,135,182,0.25)';
                            e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                          }}
                          aria-label={t.watchVideo}
                        >
                          {/* Play triangle */}
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <polygon points="8,5 20,12 8,19" fill="#ffffff" />
                          </svg>
                        </button>
                      )}

                      {/* Small video badge on non-center cards that have a video */}
                      {!isCenter && hasVideo && (
                        <div style={{
                          position: 'absolute',
                          top: '10px',
                          right: isAr ? 'auto' : '10px',
                          left: isAr ? '10px' : 'auto',
                          background: 'rgba(23,135,182,0.85)',
                          borderRadius: '8px',
                          padding: '3px 8px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          zIndex: 5,
                        }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
                            <polygon points="8,5 20,12 8,19" fill="#fff" />
                          </svg>
                          <span style={{ color: '#fff', fontSize: '10px', fontWeight: 600 }}>
                            {isAr ? 'فيديو' : 'Video'}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div style={{
                      padding: '16px',
                      textAlign: 'center',
                      direction: isAr ? 'rtl' : 'ltr',
                    }}>
                      {(() => {
                        const data = doctors.find(d => d.id === doctor.id);
                        return data ? (
                          <>
                            <p style={{
                              color: '#ffffff',
                              fontSize: '19px',
                              fontWeight: '700',
                              margin: '0 0 4px 0',
                              lineHeight: 1.3,
                            }}>
                              {isAr ? `د. ${data.nameAr}` : `Dr. ${data.nameEn}`}
                            </p>
                            <p style={{
                              color: '#dddddd',
                              fontSize: '15px',
                              margin: 0,
                              lineHeight: 1.4,
                            }}>
                              {isAr ? data.specialtyAr : data.specialtyEn}
                            </p>

                            {/* Watch video CTA text — center card only */}
                            {isCenter && hasVideo && (
                              <p style={{
                                color: '#1787b6',
                                fontSize: '13px',
                                margin: '8px 0 0',
                                fontWeight: 600,
                                letterSpacing: '0.5px',
                                animation: 'fade-pulse 2s ease-in-out infinite',
                              }}>
                                ▶ {t.watchVideo}
                              </p>
                            )}
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

      {/* Keyframes for carousel */}
      <style>{`
        @keyframes video-btn-pulse {
          0%, 100% { box-shadow: 0 0 0 0   rgba(23,135,182,0.5); }
          50%       { box-shadow: 0 0 0 16px rgba(23,135,182,0);   }
        }
        @keyframes fade-pulse {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.5; }
        }
      `}</style>

      {/* Video Modal */}
      {modalDoctor !== null && modalData && (
        <VideoModal
          videoSrc={doctorVideos[modalDoctor]}
          doctorName={isAr ? `د. ${modalData.data.nameAr}` : `Dr. ${modalData.data.nameEn}`}
          doctorSpecialty={isAr ? modalData.data.specialtyAr : modalData.data.specialtyEn}
          onClose={() => setModalDoctor(null)}
          isAr={isAr}
        />
      )}
    </>
  );
};

export default Doctors;
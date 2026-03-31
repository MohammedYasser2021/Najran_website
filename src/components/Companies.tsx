import React, { useState, useEffect } from 'react'
// @ts-ignore
import Img1 from '../assets/companies/1.png'
// @ts-ignore
import Img2 from '../assets/companies/2.jpg'
// @ts-ignore
import Img3 from '../assets/companies/3.jpg'
// @ts-ignore
import Img4 from '../assets/companies/4.jpg'
// @ts-ignore
import Img5 from '../assets/companies/5.png'
// @ts-ignore
import Img6 from '../assets/companies/6.jpg'
// @ts-ignore
import Img7 from '../assets/companies/7.png'
// @ts-ignore
import Img8 from '../assets/companies/8.png'
// @ts-ignore
import Img9 from '../assets/companies/9.jpg'
// @ts-ignore
import Img10 from '../assets/companies/10.png'
// @ts-ignore
import Img11 from '../assets/companies/11.jpg'
// @ts-ignore
import Img13 from '../assets/companies/13.jpg'

interface CompaniesProps {
  currentLang?: string;
}

const images = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10, Img11, Img13];
const VISIBLE = 3;
const INTERVAL = 3000;

const Companies: React.FC<CompaniesProps> = ({ currentLang }) => {
  const isAr = currentLang === 'ar';
  const title    = isAr ? 'شركات التأمين' : 'Insurance Companies';
  const subtitle = isAr ? 'شركاؤنا المعتمدون في التأمين الطبي' : 'Our Approved Medical Insurance Partners';

  const [startIndex, setStartIndex] = useState(0);
  const [animState, setAnimState] = useState<'visible' | 'exit' | 'enter'>('visible');

  useEffect(() => {
    const timer = setInterval(() => {
      // 1. fade + slide out
      setAnimState('exit');
      setTimeout(() => {
        // 2. advance index
        setStartIndex(prev => (prev + VISIBLE) % images.length);
        setAnimState('enter');
        // 3. fade + slide in
        setTimeout(() => setAnimState('visible'), 50);
      }, 400);
    }, INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const visible = Array.from({ length: VISIBLE }, (_, i) => images[(startIndex + i) % images.length]);

  const cardStyle = (i: number): React.CSSProperties => {
    const base: React.CSSProperties = {
      flex: '1',
      minWidth: 0,
      height: '160px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      padding: '28px 32px',
      borderRadius: '24px',
      border: '1.5px solid rgba(23,135,182,0.18)',
      background: 'linear-gradient(145deg, #ffffff 0%, #f0f7fb 100%)',
      boxShadow: '0 8px 32px rgba(23,135,182,0.10)',
      transition: 'opacity 0.45s ease, transform 0.45s ease',
      transitionDelay: `${i * 80}ms`,
    };

    if (animState === 'exit') {
      return { ...base, opacity: 0, transform: 'translateY(-20px) scale(0.96)' };
    }
    if (animState === 'enter') {
      return { ...base, opacity: 0, transform: 'translateY(20px) scale(0.96)' };
    }
    return { ...base, opacity: 1, transform: 'translateY(0) scale(1)' };
  };

  return (
    <section
      dir={isAr ? 'rtl' : 'ltr'}
      style={{
        padding: '64px 0',
        background: '#ffffff',
        borderTop: '1px solid #f0f7fb',
        borderBottom: '1px solid #f0f7fb',
        overflow: 'hidden',
      }}
    >
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: '800',
            color: '#0d2137',
            margin: '0 0 16px',
          }}>
            {title}
          </h2>
          <p style={{
            fontSize: '15px',
            color: '#6b7280',
            margin: '0 0 16px',
          }}>
            {subtitle}
          </p>

          {/* ECG pulse */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <svg viewBox="0 0 300 60" width="300" height="60" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="glow-ins">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <mask id="reveal-ins">
                  <rect x="0" y="0" width="300" height="60" fill="white">
                    <animate attributeName="x" from="-300" to="300" dur="2.5s" repeatCount="indefinite" />
                  </rect>
                </mask>
              </defs>
              <line x1="0" y1="30" x2="300" y2="30" stroke="#1787b6" strokeWidth="0.5" strokeOpacity="0.2" />
              <path
                d="M 0,30 L 105,30 L 112,30 L 117,22 L 122,30 L 128,30 L 133,10 L 141,50 L 150,5 L 158,50 L 165,30 L 170,30 L 175,22 L 180,30 L 300,30"
                fill="none" stroke="#1787b6" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round"
                filter="url(#glow-ins)" mask="url(#reveal-ins)"
              />
              <circle r="4" fill="#1787b6" filter="url(#glow-ins)">
                <animateMotion dur="2.5s" repeatCount="indefinite"
                  path="M 0,30 L 105,30 L 112,30 L 117,22 L 122,30 L 128,30 L 133,10 L 141,50 L 150,5 L 158,50 L 165,30 L 170,30 L 175,22 L 180,30 L 300,30"
                />
              </circle>
            </svg>
          </div>
        </div>

        {/* Cards */}
        <div style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'stretch',
          justifyContent: 'center',
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          {visible.map((src, i) => (
            <div key={`${startIndex}-${i}`} style={cardStyle(i)}>
              <img
                src={src}
                alt={`insurance-${i}`}
                draggable={false}
                style={{
                  maxWidth: '100%',
                  maxHeight: '90px',
                  objectFit: 'contain',
                }}
              />
              <div style={{
                width: '32px',
                height: '3px',
                borderRadius: '2px',
                background: 'linear-gradient(90deg, #1787b6, rgba(23,135,182,0.3))',
              }} />
            </div>
          ))}
        </div>

        {/* Dots */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
          marginTop: '36px',
        }}>
          {Array.from({ length: Math.ceil(images.length / VISIBLE) }).map((_, i) => {
            const active = Math.floor(startIndex / VISIBLE) === i;
            return (
              <div key={i} style={{
                width: active ? '32px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: active ? '#1787b6' : 'rgba(23,135,182,0.2)',
                boxShadow: active ? '0 0 8px rgba(23,135,182,0.5)' : 'none',
                transition: 'all 0.4s ease',
              }} />
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Companies;
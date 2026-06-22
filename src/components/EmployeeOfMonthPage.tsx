import React, { useState } from 'react';
import { Award, X, ChevronLeft, ChevronRight, Star } from 'lucide-react';

// @ts-ignore
import em1 from "../assets/emp/page_1.png";
// @ts-ignore
import em2 from "../assets/emp/page_2.png";
// @ts-ignore
import em3 from "../assets/emp/page_3.png";
// @ts-ignore
import em4 from "../assets/emp/page_4.png";
// @ts-ignore
import em5 from "../assets/emp/page_5.png";
// @ts-ignore
import em6 from "../assets/emp/page_6.png";
// @ts-ignore
import em7 from "../assets/emp/page_7.png";
// @ts-ignore
import em8 from "../assets/emp/page_8.png";
// @ts-ignore
import em9 from "../assets/emp/page_9.png";
// @ts-ignore
import em10 from "../assets/emp/page_10.png";
// @ts-ignore
import em11 from "../assets/emp/page_11.png";
// @ts-ignore
import em12 from "../assets/emp/page_12.png";

interface EmployeeOfMonthPageProps {
  currentLang: string;
}

const images = [em1, em2, em3, em4, em5, em6, em7, em8, em9, em10, em11, em12];

const EmployeeOfMonthPage: React.FC<EmployeeOfMonthPageProps> = ({ currentLang }) => {
  const isAr = currentLang === 'ar';
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  const showNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));

  return (
    <div
      dir={isAr ? 'rtl' : 'ltr'}
      style={{ fontFamily: "'Cairo','Tajawal',sans-serif" }}
      className="min-h-screen bg-gray-50"
    >
      {/* ── Hero ── */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <img
          src="https://images.pexels.com/photos/8460158/pexels-photo-8460158.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt={isAr ? 'تكريم طبيب متميز في حفل تقدير' : 'A doctor honored at a recognition ceremony'}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(135deg, rgba(13,33,55,0.92) 0%, rgba(18,58,85,0.85) 55%, rgba(23,135,182,0.75) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.08,
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '26px 26px',
          }}
        />
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-24 relative z-10 text-center">
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '76px',
              height: '76px',
              borderRadius: '20px',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              marginBottom: '24px',
            }}
          >
            <Award size={36} color="#fff" />
          </div>
          <span
            style={{
              display: 'block',
              width: 'fit-content',
              background: 'rgba(255,255,255,0.12)',
              color: '#fff',
              fontSize: '13px',
              fontWeight: '700',
              padding: '6px 20px',
              borderRadius: '50px',
              marginBottom: '18px',
              letterSpacing: '0.5px',
              border: '1px solid rgba(255,255,255,0.18)',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {isAr ? 'تقدير وتميّز' : 'Recognition & Excellence'}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5" style={{ lineHeight: 1.4 }}>
            {isAr ? 'الموظف المثالي' : 'Employee of the Month'}
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.78)',
              fontSize: '17px',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: '1.9',
              fontWeight: '500',
            }}
          >
            {isAr
              ? 'تكريماً لكل من يقدّم أكثر من المطلوب، نسلّط الضوء على منسوبي المستشفى الذين تميّزوا بأدائهم وتفانيهم في خدمة المرضى وزملائهم.'
              : 'In recognition of those who give more than what is asked, we spotlight the hospital staff members who stood out through their performance and dedication to patients and colleagues.'}
          </p>
        </div>
      </div>

      {/* ── Gallery ── */}
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="text-center mb-12">
          <span
            style={{
              display: 'inline-block',
              background: '#e8f4fb',
              color: '#1787b6',
              fontSize: '13px',
              fontWeight: '700',
              padding: '5px 18px',
              borderRadius: '50px',
              marginBottom: '14px',
            }}
          >
            {isAr ? 'سجل التميز' : 'Hall of Excellence'}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#0d2137' }}>
            {isAr ? 'أصحاب التميّز' : 'Our Honorees'}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                border: '1px solid #e3eff7',
                boxShadow: '0 8px 24px rgba(13,33,55,0.08)',
                cursor: 'pointer',
                background: '#fff',
                padding: 0,
                aspectRatio: '3 / 4',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 16px 36px rgba(13,33,55,0.18)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(13,33,55,0.08)';
              }}
            >
              <img
                src={img}
                alt={isAr ? `الموظف المثالي ${i + 1}` : `Employee of the Month ${i + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(13,33,55,0.55) 0%, transparent 45%)',
                  opacity: 0,
                  transition: 'opacity 0.25s ease',
                }}
                className="hover-overlay"
              />
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  [isAr ? 'right' : 'left']: '12px',
                  background: '#1787b6',
                  color: '#fff',
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.25)',
                }}
              >
                <Star size={13} fill="#fff" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ── Lightbox ── */}
      {activeIndex !== null && (
        <div
          onClick={close}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(8,16,26,0.92)',
            zIndex: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxWidth: '90vw',
              maxHeight: '85vh',
              borderRadius: '20px',
              overflow: 'visible',
            }}
          >
            <div
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
                lineHeight: 0,
              }}
            >
              <img
                src={images[activeIndex]}
                alt={isAr ? `الموظف المثالي ${activeIndex + 1}` : `Employee of the Month ${activeIndex + 1}`}
                style={{ maxWidth: '90vw', maxHeight: '85vh', display: 'block', objectFit: 'contain' }}
              />
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              aria-label={isAr ? 'إغلاق' : 'Close'}
              style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                zIndex: 60,
                background: 'rgba(8,16,26,0.6)',
                border: '1px solid rgba(255,255,255,0.25)',
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={18} color="#fff" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label={isAr ? 'السابق' : 'Previous'}
              style={{
                position: 'absolute',
                [isAr ? 'right' : 'left']: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 60,
                background: 'rgba(8,16,26,0.6)',
                border: '1px solid rgba(255,255,255,0.25)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              {isAr ? <ChevronRight size={20} color="#fff" /> : <ChevronLeft size={20} color="#fff" />}
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label={isAr ? 'التالي' : 'Next'}
              style={{
                position: 'absolute',
                [isAr ? 'left' : 'right']: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 60,
                background: 'rgba(8,16,26,0.6)',
                border: '1px solid rgba(255,255,255,0.25)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              {isAr ? <ChevronLeft size={20} color="#fff" /> : <ChevronRight size={20} color="#fff" />}
            </button>
          </div>

          <div
            style={{
              position: 'absolute',
              bottom: '24px',
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'rgba(255,255,255,0.7)',
              fontSize: '13px',
              fontWeight: '600',
              background: 'rgba(255,255,255,0.08)',
              padding: '6px 16px',
              borderRadius: '50px',
            }}
          >
            {activeIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default EmployeeOfMonthPage;
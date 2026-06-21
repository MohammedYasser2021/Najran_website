import React from 'react';
import { Award, Phone, MessageCircle } from 'lucide-react';
// @ts-ignore
import academyLogo from '../assets/academy_logo.png';
// @ts-ignore
import academyCover from '../assets/cover.jpeg';
// @ts-ignore
import snhStrip from '../assets/snh.png';
// @ts-ignore
import academy_1 from '../assets/academy_1.png';
// @ts-ignore
import academy_2 from '../assets/academy_2.png';
// @ts-ignore
import One from '../assets/one.jpg';
// @ts-ignore
import Two from '../assets/two.jpg';
// @ts-ignore
import Three from '../assets/three.jpg';
// @ts-ignore
import academyVideo from '../assets/academy_video.mp4';

interface AcademyPageProps {
  currentLang: string;
}

const AcademyPage: React.FC<AcademyPageProps> = ({ currentLang }) => {
  const isAr = currentLang === 'ar';

  // ── Page 3: Academy Educational Programs ──
  const eduPrograms = [
    { ar: 'برامج دعم الحياة', en: 'Life Support Training' },
    { ar: 'برامج ساعات التعليم الطبي المستمر', en: 'CME Hours Programs' },
    { ar: 'برامج الأكاديمية الصحية', en: 'Academy Health Programs' },
    { ar: 'توعية المرضى', en: 'Patient Education' },
    { ar: 'المؤتمرات وورش العمل', en: 'Conferences & Workshop' },
    { ar: 'تدريب الموظفين', en: 'Staff Training' },
    { ar: 'برنامج التفتيش', en: 'INSP PROG' },
    { ar: 'مركز التدريب الدولي', en: 'International Training Center' },
  ];

  // ── Page 4: Accreditations ──


  return (
    <div dir={isAr ? 'rtl' : 'ltr'} className="bg-white">

      {/* ════════════════════════════════════════════════════════════
          PAGE 1 — Cover
      ════════════════════════════════════════════════════════════ */}
<section style={{ background: '#fff' }}>
        {/* Logo overlapping the maroon divider through its middle */}
        <div className="flex items-center justify-center" style={{ padding: '0 24px 0', position: 'relative', zIndex: 2 }}>
          <img src={academyLogo} alt="SNH Health Academy" style={{ width: '300px', objectFit: 'contain', marginBottom: '-22px' }} />
        </div>

        {/* Maroon divider — logo sits across its middle */}
        <div style={{ height: '10px', top: "-100px", background: '#7a1338', width: '100%', position: 'relative', zIndex: 1 }} />

        {/* Hospital cover photo — full natural height, not cropped */}
        <div style={{ width: '100%', lineHeight: 0, marginTop: '-100px' }}>
          <img
            src={academyCover}
            alt={isAr ? 'مستشفى تخصصي نجران' : 'Specialized Najran Hospital'}
            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }}
          />
        </div>

        {/* Maroon divider */}
        <div style={{ height: '10px', background: '#7a1338', width: '100%' }} />

        {/* Titles */}
        <div className="text-center" style={{ padding: '64px 24px 24px' }}>
          <h1
            className="font-extrabold"
            style={{ color: '#16335a', fontSize: 'clamp(30px, 5vw, 52px)', lineHeight: 1.35, marginBottom: '14px' }}
          >
            {isAr ? 'أكاديمية مستشفى تخصصي نجران الصحية' : 'SPECIALIZED NAJRAN HOSPITAL HEALTH ACADEMY'}
          </h1>
        </div>

        <div className="text-center" style={{ padding: '0 24px 64px' }}>
          <h2
            className="font-extrabold"
            style={{ color: '#16335a', fontSize: 'clamp(24px, 4vw, 38px)', lineHeight: 1.4, marginBottom: '12px' }}
          >
            {isAr ? 'قوة المعرفة وجودة الحياة' : 'Power of Knowledge & Quality of Life'}
          </h2>
        </div>

        {/* Video section */}
        <div className="flex justify-center" style={{ padding: '0 24px 64px' }}>
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '900px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px -15px rgba(22, 51, 90, 0.35)',
              border: '6px solid #fff',
              outline: '2px solid #16335a',
              outlineOffset: '-1px',
            }}
          >
            {/* Thin maroon accent bar on top of the frame */}
            <div style={{ height: '6px', width: '100%', background: '#7a1338' }} />
            <video
              src={academyVideo}
              controls
              playsInline
              preload="metadata"
              style={{
                width: '100%',
                display: 'block',
                background: '#000',
                aspectRatio: '16 / 9',
                objectFit: 'cover',
              }}
            >
              {isAr ? 'متصفحك لا يدعم تشغيل الفيديو.' : 'Your browser does not support the video tag.'}
            </video>
          </div>
        </div>

        {/* Bottom strip: booking number fixed left, partner logos fixed right */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          style={{ padding: '32px 40px 56px' }}
        >
 <div style={{ display: 'flex', alignItems: 'center', gap: '0px' }}>
  
  {/* القسم الأول: واتساب + رقم الحجز */}
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 18px' }}>
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#16335a" style={{ marginBottom: '2px' }}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.74.46 3.44 1.32 4.94L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01-1.87-1.87-4.36-2.91-7.02-2.91zm0 18.13c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.18 8.18 0 0 1-1.25-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.55-3.7 8.21-8.25 8.21zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.24-.64.81-.78.97-.14.17-.29.19-.53.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.36-.77-1.86-.2-.49-.41-.42-.56-.43-.14-.01-.31-.01-.47-.01-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.57.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.28z"/>
    </svg>
    <div style={{ fontSize: '11px', fontWeight: '700', color: '#5b7488', textAlign: 'center', lineHeight: '1' }}>
      {isAr ? 'للحجز والاستفسار' : 'Booking & Inquiries'}
    </div>
    <div style={{ fontSize: '20px', fontWeight: '900', color: '#16335a' }}>0502300110</div>
  </div>

  {/* فاصل */}
  <div style={{ width: '3px', height: '55px', backgroundColor: '#1e5fa8' }}></div>

  {/* القسم الثاني: الرقم الموحد */}
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 18px' }}>
    <div style={{ fontSize: '13px', fontWeight: '700', color: '#16335a', marginBottom: '4px' }}>
      {isAr ? 'الرقم الموحد' : 'Unified Number'}
    </div>
    <div style={{ fontSize: '20px', fontWeight: '900', color: '#16335a' }}>920002159</div>
  </div>

  {/* فاصل تاني لو هيكمل عنصر بعده (مثلاً لوجو) */}
  <div style={{ width: '3px', height: '55px', backgroundColor: '#1e5fa8' }}></div>

</div>

          <img src={snhStrip} alt="SNH Partners" style={{ height: '90px', objectFit: 'contain' }} />
        </div>
      </section>

      

      {/* ════════════════════════════════════════════════════════════
          PAGE 2 — Vision & Mission
      ════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', borderTop: '10px solid #7a1338' }}>
        <div className="flex items-center justify-center flex-wrap" style={{ padding: '48px 40px 0', gap: '24px' }}>
          <img src={academyLogo} alt="SNH Health Academy" style={{ height: '150px', objectFit: 'contain', flexShrink: 0 }} />
          <div style={{ textAlign: 'left' }}>
            <p className="font-extrabold" style={{ color: '#16335a', fontSize: 'clamp(16px, 2vw, 22px)', lineHeight: 1.5, margin: 0 }}>
              أكاديمية مستشفى تخصصي نجران الصحية
            </p>
            <p className="font-extrabold" style={{ color: '#7a1338', fontSize: 'clamp(13px, 1.6vw, 17px)', lineHeight: 1.5, margin: 0, letterSpacing: '0.3px' }}>
              SPECIALIZED NAJRAN HOSPITAL HEALTH ACADEMY
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto" style={{ padding: '40px 40px 80px' }}>
          {/* Vision */}
          <div style={{ marginBottom: '64px', display: 'flex', gap: '20px', flexDirection: isAr ? 'row-reverse' : 'row' }}>
           <div style={{ 
  width: '8px', 
  background: '#7a1338', 
  flexShrink: 0, 
  alignSelf: 'stretch',
  order: isAr ? 999 : 0,
}} />
            <div style={{ textAlign: isAr ? 'right' : 'left' }}>
              <h3 className="font-extrabold" style={{ color: '#16335a', fontSize: 'clamp(30px, 4vw, 44px)', marginBottom: '16px' }}>
                {isAr ? 'رؤيتنا' : 'Vision'}
              </h3>
              <p style={{ color: '#1f2937', fontSize: 'clamp(18px, 2vw, 24px)', lineHeight: '2.1', fontWeight: '600' }}>
                {isAr
                  ? 'أن تكون الأكاديمية الصحية بمستشفى تخصصي نجران مركزاً متميزاً للتعليم والتدريب الصحي يواكب المعايير العالمية ويسهم في إعداد كوادر صحية مؤهلة تقود مستقبل الرعاية الصحية في المملكة العربية السعودية.'
                  : 'SNH Healthcare Academy aims to be a distinguished center for health education and training that meets international standards and contributes to preparing qualified health personnel who will lead the future of healthcare in the Kingdom of Saudi Arabia.'}
              </p>
            </div>
          </div>

          {/* Mission */}
          <div style={{ display: 'flex', gap: '20px', flexDirection: isAr ? 'row-reverse' : 'row' }}>
           <div style={{ 
  width: '8px', 
  background: '#7a1338', 
  flexShrink: 0, 
  alignSelf: 'stretch',
  order: isAr ? 999 : 0,
}} />
            <div style={{ textAlign: isAr ? 'right' : 'left' }}>
              <h3 className="font-extrabold" style={{ color: '#16335a', fontSize: 'clamp(30px, 4vw, 44px)', marginBottom: '16px' }}>
                {isAr ? 'رسالتنا' : 'Mission'}
              </h3>
              <p style={{ color: '#1f2937', fontSize: 'clamp(18px, 2vw, 24px)', lineHeight: '2.1', fontWeight: '600' }}>
                {isAr
                  ? 'نلتزم في الأكاديمية الصحية بمستشفى تخصصي نجران بتمكين المتدربين من اكتساب المعرفة والمهارات الحديثة عبر بيئة تعليمية مبتكرة وشراكات استراتيجية محلية ودولية بما يعزز جودة الرعاية الصحية ويسهم في تحقيق مستهدفات رؤية السعودية 2030م.'
                  : 'SNH Healthcare Academy is committed to empowering trainees to acquire modern knowledge and skills through an innovative learning environment and strategic local and international partnerships, thereby enhancing the quality of healthcare and contributing to the achievement of the goals of Saudi Vision 2030.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          PAGE 3 — Academy Educational Programs
      ════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#fff', borderTop: '10px solid #7a1338' }}>
        <div className="flex items-center justify-center flex-wrap" style={{ padding: '48px 40px 0', gap: '24px' }}>
          <img src={academyLogo} alt="SNH Health Academy" style={{ height: '150px', objectFit: 'contain', flexShrink: 0 }} />
          <div style={{ textAlign: 'left' }}>
            <p className="font-extrabold" style={{ color: '#16335a', fontSize: 'clamp(16px, 2vw, 22px)', lineHeight: 1.5, margin: 0 }}>
              أكاديمية مستشفى تخصصي نجران الصحية
            </p>
            <p className="font-extrabold" style={{ color: '#7a1338', fontSize: 'clamp(13px, 1.6vw, 17px)', lineHeight: 1.5, margin: 0, letterSpacing: '0.3px' }}>
              SPECIALIZED NAJRAN HOSPITAL HEALTH ACADEMY
            </p>
          </div>
        </div>

        {/* Hero strip photo */}
        <div style={{ width: '100%', borderTop: '6px solid #7a1338', borderBottom: '6px solid #7a1338', lineHeight: 0, marginTop: '32px' }}>
          <img
            src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1400"
            alt={isAr ? 'تدريب الإنعاش القلبي' : 'CPR life support training'}
            style={{ width: '100%', height: 'auto', maxHeight: '440px', objectFit: 'cover', display: 'block' }}
          />
        </div>

        {/* Three small feature photos */}
        <div className="grid grid-cols-3 gap-3" style={{ padding: '24px 40px 0' }}>
          <div style={{ aspectRatio: '4/3', borderRadius: '8px', overflow: 'hidden', border: '4px solid #c0185a' }}>
            <img
              src={One}
              alt={isAr ? 'محاضرة طبية' : 'Medical lecture'}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ aspectRatio: '4/3', borderRadius: '8px', overflow: 'hidden', border: '4px solid #c0185a' }}>
            <img
              src={Two}
              alt={isAr ? 'تدريب إنعاش الرضع' : 'Infant life support training'}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div style={{ aspectRatio: '4/3', borderRadius: '8px', overflow: 'hidden', border: '4px solid #c0185a' }}>
            <img
              src={Three}
              alt={isAr ? 'تدريب طبي' : 'Medical training'}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Title */}
        <div className="text-center" style={{ padding: '48px 24px 40px' }}>
          <h3 className="font-extrabold" style={{ color: '#16335a', fontSize: 'clamp(26px, 3.6vw, 40px)' }}>
            {isAr ? 'برامج الأكاديمية التعليمية' : 'Academy Educational Programs'}
          </h3>
        </div>

        {/* Program pills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto" style={{ padding: '0 40px 72px' }}>
          {eduPrograms.map((p, i) => (
            <div
              key={i}
              style={{
                background: '#1f5d8a',
                borderRadius: '50px',
                padding: '22px 28px',
                textAlign: 'center',
                boxShadow: '0 6px 14px rgba(0,0,0,0.18)',
              }}
            >
              <span style={{ color: '#fff', fontWeight: '800', fontSize: '18px', lineHeight: '1.4' }}>
                {isAr ? p.ar : p.en}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          PAGE 4 — Accreditations
      ════════════════════════════════════════════════════════════ */}
<section style={{ background: '#fff', borderTop: '10px solid #7a1338' }}>
        <div className="flex items-center justify-center flex-wrap" style={{ padding: '48px 40px 0', gap: '24px' }}>
          <img src={academyLogo} alt="SNH Health Academy" style={{ height: '150px', objectFit: 'contain', flexShrink: 0 }} />
          <div style={{ textAlign: 'left' }}>
            <p className="font-extrabold" style={{ color: '#16335a', fontSize: 'clamp(16px, 2vw, 22px)', lineHeight: 1.5, margin: 0 }}>
              أكاديمية مستشفى تخصصي نجران الصحية
            </p>
            <p className="font-extrabold" style={{ color: '#7a1338', fontSize: 'clamp(13px, 1.6vw, 17px)', lineHeight: 1.5, margin: 0, letterSpacing: '0.3px' }}>
              SPECIALIZED NAJRAN HOSPITAL HEALTH ACADEMY
            </p>
          </div>
        </div>

        <div className="text-center" style={{ padding: '32px 24px 8px' }}>
          <h3 className="font-extrabold" style={{ color: '#16335a', fontSize: 'clamp(28px, 4vw, 42px)' }}>
            {isAr ? 'نفخر باعتماداتنا' : 'We are proud of our accreditations'}
          </h3>
        </div>

        {/* Healthcare Excellence Award medal */}
        <div className="flex flex-col items-center" style={{ padding: '48px 24px' }}>
          <img src={academy_1} alt="Healthcare Excellence Award" style={{ width: '210px', height: '210px', objectFit: 'contain' }} />
          <p className="font-extrabold" style={{ color: '#16335a', fontSize: '22px', marginTop: '24px' }}>
            {isAr ? 'جائزة التميز في الرعاية الصحية' : 'Healthcare Excellence Award'}
          </p>
        </div>

{/* Accreditation image */}
        <div className="flex justify-center" style={{ padding: '32px 40px 80px' }}>
          <img 
            src={academy_2} 
            alt="Accreditations" 
            className="w-full md:w-[70%] lg:w-[55%]" 
            style={{ objectFit: 'contain' }} 
          />
        </div>
      </section>
    </div>
  );
};

export default AcademyPage;
import React, { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import MainNavbar from './MainNavbar';
import CoverBg from "../assets/cover.jpeg";
import SNH from "../assets/snh.png";

const achievements = {
  ar: [
    'يقع مستشفى تخصصي نجران في قلب منطقة نجران بجنوب المملكة العربية السعودية بمساحة إجمالية للمبنى ١٣٨٠٠ متر مربع.',
    'المستشفى مرخص من وزارة الصحة بسعة ١٠٠ سرير يضم أكثر من ٥٢ وحدة طبية متخصصة وبه أكثر من ٦٠ طبيب استشاري وأخصائي في كافة التخصصات الطبية العامة والدقيقة.',
    'أول مستشفى خاص يعتمد من المركز السعودي لاعتماد المنشآت الصحية (سباهي) عام ٢٠١٩م بمنطقة نجران.',
    'أول مستشفى خارج المنطقة الشرقية للمملكة يحصل على اعتماد جونز هوبكنز أرامكو للرعاية الصحية.',
    'المستشفى الأول والوحيد بالقطاع الخاص المعتمد من وزارة الصحة لإجراء جراحات السمنة من عام ٢٠٢٣م.',
    'أول مستشفى خاص يدخل تقنية التبخير لعلاج تضخم البروستاتا بالتبخير في المنطقة.',
    'تكريم سمو الأمير جلوي بن عبدالعزيز لمستشفى تخصصي نجران على مستوى القطاع الصحي الخاص ضمن أبطال الصحة في مواجهة جائحة كوفيد ١٩.',
    'أول مستشفى يوقع اتفاقية مع وزارة الصحة لعلاج المواطنين المحوَّلين من وزارة الصحة منذ عام ٢٠١٩م.',
    'أول مستشفى يُجري عمليات تفتيت حصى المسالك البولية بالليزر في عام ٢٠١٩م والمناظير المرنة في عام ٢٠٢١م.',
    'أول مستشفى خاص سارع لتوقيع اتفاقية توطين الوظائف مع وزارة الموارد البشرية وتنفيذها في عام ٢٠٢٠م.',
    'أول مستشفى خاص يوقع اتفاقية تعاون مشترك مع المديرية العامة للشؤون الصحية بمنطقة نجران في عام ٢٠٢٠م.',
    'حصل المستشفى على جائزة سمو الأمير جلوي بن عبدالعزيز للتطوع الصحي على مستوى القطاع الخاص بمنطقة نجران في عام ٢٠٢١م.',
    'أول مستشفى خاص يفتتح مركز الأطباء الاستشاريين الزائرين السعوديين برعاية أمير المنطقة في عام ٢٠٢١م ويضم ٤٠ عيادة استشارية.',
    'المستشفى مرخص من وزارة الصحة في تقديم الرعاية الطبية المنزلية من عام ٢٠١٩م.',
    'المستشفى لديه أول مركز لفحص السموم والمخدرات في منطقة نجران ٢٠٢٣م.',
    'المستشفى الوحيد الذي يضم مركزاً لطب الأطفال المتخصص ويضم أكثر من ٨ تخصصات طبية لأمراض الأطفال.',
    'المستشفى الوحيد الذي تم اعتماده لاستقبال حالات إصابات الحرب (عاصفة الحزم) وقام باستقبال ومعالجة أكثر من ٦٠٠ مصاب وكذلك حالات الرعاية الممتدة للمصابين.',
  ],
  en: [
    'Najran Specialist Hospital is located in the heart of the Najran region in southern Saudi Arabia, with a total building area of 13,800 square meters.',
    'The hospital is licensed by the Ministry of Health with a capacity of 100 beds, comprising more than 52 specialized medical units and over 60 consultant physicians and specialists across all general and subspecialty medical fields.',
    'The first private hospital in the Najran region to be accredited by the Saudi Central Board for Accreditation of Healthcare Institutions (CBAHI) in 2019.',
    'The first hospital outside the Eastern Province of Saudi Arabia to receive Johns Hopkins Aramco Healthcare accreditation.',
    'The first and only private-sector hospital accredited by the Ministry of Health to perform bariatric (obesity) surgeries since 2023.',
    'The first private hospital in the region to introduce steam therapy (Rezum) for the treatment of benign prostatic hyperplasia.',
    'Najran Specialist Hospital was honored by HRH Prince Jalawi bin Abdulaziz at the private healthcare sector level as one of the Health Heroes during the COVID-19 pandemic.',
    'The first hospital to sign an agreement with the Ministry of Health for treating patients referred from public health facilities since 2019.',
    'The first hospital to perform laser lithotripsy for urinary tract stones in 2019 and flexible ureteroscopy in 2021.',
    'The first private hospital to sign and implement a Saudization (Nitaqat) employment agreement with the Ministry of Human Resources in 2020.',
    'The first private hospital to sign a joint cooperation agreement with the General Directorate of Health Affairs in the Najran region in 2020.',
    'The hospital received the HRH Prince Jalawi bin Abdulaziz Award for Health Volunteering in the private sector in the Najran region in 2021.',
    'The first private hospital to inaugurate a Saudi Visiting Consultant Physicians Center under the patronage of the regional governor in 2021, comprising 40 outpatient consultation clinics.',
    'The hospital is licensed by the Ministry of Health to provide home healthcare services since 2019.',
    'The hospital operates the first toxicology and drug testing center in the Najran region, established in 2023.',
    'The only hospital featuring a dedicated pediatric specialty center with more than 8 pediatric subspecialties.',
    'The only hospital accredited to receive war-injury cases (Operation Decisive Storm), having treated and managed over 600 casualties as well as extended-care patients.',
  ],
};

const ECGPulse = () => (
  <div style={{ display: 'flex', justifyContent: 'center', margin: '16px 0 20px' }}>
    <svg viewBox="0 0 300 60" width="300" height="60" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow-about">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <mask id="reveal-about">
          <rect x="0" y="0" width="300" height="60" fill="white">
            <animate attributeName="x" from="-300" to="300" dur="2.8s" repeatCount="indefinite" />
          </rect>
        </mask>
      </defs>
      <line x1="0" y1="30" x2="300" y2="30" stroke="#1787b6" strokeWidth="0.5" strokeOpacity="0.25" />
      <path
        d="M 0,30 L 90,30 L 97,30 L 102,22 L 107,30 L 113,30 L 118,10 L 126,50 L 135,5 L 143,50 L 150,30 L 156,30 L 161,22 L 166,30 L 210,30 L 215,24 L 219,30 L 300,30"
        fill="none"
        stroke="#1787b6"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter="url(#glow-about)"
        mask="url(#reveal-about)"
      />
      <circle r="4" fill="#1787b6" filter="url(#glow-about)">
        <animateMotion
          dur="2.8s"
          repeatCount="indefinite"
          path="M 0,30 L 90,30 L 97,30 L 102,22 L 107,30 L 113,30 L 118,10 L 126,50 L 135,5 L 143,50 L 150,30 L 156,30 L 161,22 L 166,30 L 210,30 L 215,24 L 219,30 L 300,30"
        />
      </circle>
    </svg>
  </div>
);

const AboutPage = ({ currentLang, changeLanguage }) => {
  const isAr = currentLang === 'ar';
  const list = achievements[isAr ? 'ar' : 'en'];
  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, idx) => {
      if (!ref) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...new Set([...prev, idx])]);
          }
        },
        { threshold: 0.12 }
      );
      obs.observe(ref);
      return obs;
    });
    return () => observers.forEach(obs => obs && obs.disconnect());
  }, []);

  return (
    <div
      className="font-['Cairo'] min-h-screen bg-white"
      dir={isAr ? 'rtl' : 'ltr'}
      style={{ fontFamily: "'Cairo', 'Tajawal', sans-serif" }}
    >

      {/* Hero Cover */}
      <div style={{ position: 'relative', width: '100%', height: 'clamp(260px, 45vw, 520px)', overflow: 'hidden' }}>
        <img
          src={CoverBg}
          alt={isAr ? 'مستشفى تخصصي نجران' : 'Najran Specialist Hospital'}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(13,33,55,0.62) 0%, rgba(13,33,55,0.30) 65%, rgba(0,0,0,0) 100%)',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: '0 24px',
        }}>
          <h1 style={{
            color: '#fff',
            fontSize: 'clamp(28px, 5vw, 56px)',
            fontWeight: '800',
            margin: 0,
            textShadow: '0 2px 18px rgba(0,0,0,0.45)',
          }}>
            {isAr ? 'من نحن' : 'About Us'}
          </h1>
          <p style={{
            color: 'rgba(255,255,255,0.88)',
            fontSize: 'clamp(17px, 2vw, 25px)',
            marginTop: '14px',
            fontWeight: '600',
            textShadow: '0 1px 8px rgba(0,0,0,0.35)',
          }}>
            {isAr
              ? 'مستشفى تخصصي نجران — رعاية بآفاق متجددة'
              : 'Najran Specialist Hospital — Care with Renewed Horizons'}
          </p>
        </div>
      </div>

      {/* Achievements */}
      <section style={{ padding: 'clamp(52px, 7vw, 100px) 0', background: '#f8fbfd' }}>
        <div className="container mx-auto px-4 max-w-5xl">

          <div style={{ textAlign: 'center', marginBottom: '52px' }}>

            {/* صورة SNH فوق العنوان */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '32px' }}>
   <img
  src={SNH}
  alt={isAr ? 'مستشفى تخصصي نجران' : 'Najran Specialist Hospital'}
style={{
  width: 'clamp(400px, 95vw, 900px)',
  height: 'auto',
  objectFit: 'contain',
  filter: 'drop-shadow(0 4px 18px rgba(23,135,182,0.18))',
  borderRadius: '16px',
}}
/>
            </div>

            <span style={{
              display: 'inline-block',
              background: '#e8f4fb',
              color: '#1787b6',
              fontSize: '13px',
              fontWeight: '700',
              padding: '6px 22px',
              borderRadius: '50px',
              marginBottom: '16px',
              letterSpacing: '0.5px',
            }}>
              {isAr ? 'إنجازاتنا وريادتنا' : 'Our Achievements & Leadership'}
            </span>

            <h2 style={{
              fontSize: 'clamp(24px, 4vw, 38px)',
              fontWeight: '800',
              color: '#0d2137',
              margin: '0',
            }}>
              {isAr ? 'نفخر بما حققناه' : 'We Are Proud of What We Have Achieved'}
            </h2>

            <ECGPulse />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {list.map((item, idx) => (
              <div
                key={idx}
                ref={el => itemRefs.current[idx] = el}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '16px',
                  background: '#fff',
                  borderRadius: '16px',
                  padding: '20px 24px',
                  border: '1px solid #e3eff7',
                  boxShadow: '0 2px 12px rgba(23,135,182,0.06)',
                  opacity: visibleItems.includes(idx) ? 1 : 0,
                  transform: visibleItems.includes(idx) ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.5s ease ${idx * 0.04}s, transform 0.5s ease ${idx * 0.04}s`,
                }}
              >
                <div style={{
                  minWidth: '38px', height: '38px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1787b6 0%, #0f5f8a 100%)',
                  color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '14px', fontWeight: '700',
                  flexShrink: 0,
                  boxShadow: '0 4px 12px rgba(23,135,182,0.28)',
                }}>
                  {idx + 1}
                </div>
                <p style={{
                  margin: 0,
                  color: '#2d3748',
                  fontSize: 'clamp(14px, 1.8vw, 15.5px)',
                  lineHeight: '1.85',
                  fontWeight: '500',
                  textAlign: isAr ? 'right' : 'left',
                }}>
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Stats Bar */}
      <section style={{
        background: 'linear-gradient(135deg, #0d2137 0%, #1787b6 100%)',
        padding: 'clamp(36px, 5vw, 64px) 0',
      }}>
        <div className="container mx-auto px-4 max-w-5xl">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '32px',
            textAlign: 'center',
          }}>
            {[
              { num: '+100',  label: isAr ? 'سرير طبي'        : 'Medical Beds'     },
              { num: '+52',   label: isAr ? 'وحدة طبية'       : 'Medical Units'    },
              { num: '+60',   label: isAr ? 'طبيب استشاري'    : 'Consultants'      },
              { num: '13800', label: isAr ? 'م² مساحة البناء' : 'm² Building Area' },
            ].map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: '800', color: '#fff', lineHeight: 1.1 }}>
                  {stat.num}
                </div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', marginTop: '8px', fontWeight: '500' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
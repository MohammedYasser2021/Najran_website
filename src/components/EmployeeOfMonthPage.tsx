import React, { useState } from 'react';
import { Award, Star, Quote, Calendar, Heart, Briefcase, Sparkles } from 'lucide-react';

interface EmployeeOfMonthPageProps {
  currentLang: string;
}

const employees = [
  {
    id: 1,
    nameAr: 'أ. منى عبدالله القحطاني',
    nameEn: 'Mona Abdullah Al-Qahtani',
    roleAr: 'رئيسة قسم التمريض - وحدة العناية المركزة',
    roleEn: 'Head Nurse - Intensive Care Unit',
    monthAr: 'موظف الشهر - مايو 2026',
    monthEn: 'Employee of the Month - May 2026',
    img: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=600',
    quoteAr: 'كل مريض يدخل وحدة العناية المركزة هو أمانة، ونحن نسعى أن نكون السند الذي يحتاجه في أصعب لحظاته.',
    quoteEn: 'Every patient who enters the ICU is a trust, and we strive to be the support they need in their most difficult moments.',
    highlightsAr: [
      'قادت فريق التمريض في تطبيق بروتوكول جديد لخفض معدلات العدوى داخل الوحدة بنسبة ملحوظة',
      'حصلت على تقييم تميز من إدارة الجودة لثلاث دورات تقييم متتالية',
      'ساهمت في تدريب أكثر من 20 ممرضاً جديداً خلال العام الماضي',
    ],
    highlightsEn: [
      'Led the nursing team in implementing a new protocol that significantly reduced infection rates in the unit',
      'Received an excellence rating from quality management for three consecutive evaluation cycles',
      'Helped train more than 20 new nurses over the past year',
    ],
    years: '9',
  },
  {
    id: 2,
    nameAr: 'د. خالد سعيد العمري',
    nameEn: 'Dr. Khaled Saeed Al-Amri',
    roleAr: 'استشاري طب الأسرة',
    roleEn: 'Family Medicine Consultant',
    monthAr: 'موظف الشهر - أبريل 2026',
    monthEn: 'Employee of the Month - April 2026',
    img: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600',
    quoteAr: 'العلاقة بين الطبيب والمريض أساسها الثقة، وبناء هذه الثقة يبدأ من الإنصات الحقيقي قبل أي تشخيص.',
    quoteEn: 'The relationship between a doctor and a patient is built on trust, and that trust starts with truly listening before any diagnosis.',
    highlightsAr: [
      'أعلى معدل رضا مرضى في عيادات الباطنة لشهرين متتاليين',
      'شارك في تنظيم حملة فحص مبكر لأمراض الضغط والسكري لأكثر من 500 مستفيد',
      'ساهم بتطوير دليل إرشادي لتثقيف المرضى المصابين بأمراض مزمنة',
    ],
    highlightsEn: [
      'Highest patient satisfaction score in internal medicine clinics for two consecutive months',
      'Co-organized an early screening campaign for hypertension and diabetes serving over 500 people',
      'Contributed to developing an educational guide for patients with chronic conditions',
    ],
    years: '6',
  },
  {
    id: 3,
    nameAr: 'م. سارة فهد الشهري',
    nameEn: 'Eng. Sara Fahad Al-Shahri',
    roleAr: 'مسؤولة وحدة الجودة والسلامة',
    roleEn: 'Quality & Patient Safety Officer',
    monthAr: 'موظف الشهر - مارس 2026',
    monthEn: 'Employee of the Month - March 2026',
    img: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=600',
    quoteAr: 'سلامة المريض ليست مهمة قسم واحد، بل ثقافة يجب أن يتشاركها كل من يعمل في المستشفى.',
    quoteEn: 'Patient safety isn\'t the job of one department — it\'s a culture every member of the hospital must share.',
    highlightsAr: [
      'أشرفت على إعداد تقرير الاعتماد الذي ساهم في حصول المستشفى على شهادة دولية للجودة',
      'طورت نظاماً داخلياً للإبلاغ عن البلاغات الوقائية رفع نسبة المشاركة بشكل كبير',
      'نظّمت ورش تدريبية لرفع وعي الموظفين بمعايير السلامة',
    ],
    highlightsEn: [
      'Oversaw the accreditation report that helped the hospital obtain an international quality certification',
      'Developed an internal incident-reporting system that significantly increased staff participation',
      'Organized training workshops to raise staff awareness of safety standards',
    ],
    years: '5',
  },
];

const EmployeeOfMonthPage: React.FC<EmployeeOfMonthPageProps> = ({ currentLang }) => {
  const isAr = currentLang === 'ar';
  const [active, setActive] = useState(employees[0]);

  return (
    <div dir={isAr ? 'rtl' : 'ltr'} style={{ fontFamily: "'Cairo','Tajawal',sans-serif" }} className="min-h-screen bg-gray-50">

      {/* ── Hero ── */}
      <div style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #0d2137 0%, #123a55 55%, #1787b6 100%)' }}>
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.08,
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }} />
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-24 relative z-10 text-center">
          <div style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: '76px', height: '76px', borderRadius: '20px',
            background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
            marginBottom: '24px',
          }}>
            <Award size={36} color="#fff" />
          </div>
          <span style={{
            display: 'block', width: "fit-content", background: 'rgba(255,255,255,0.12)', color: '#fff',
            fontSize: '13px', fontWeight: '700', padding: '6px 20px',
            borderRadius: '50px', marginBottom: '18px', letterSpacing: '0.5px',
            border: '1px solid rgba(255,255,255,0.18)', marginLeft: 'auto', marginRight: 'auto',
          }}>
            {isAr ? 'تقدير وتميّز' : 'Recognition & Excellence'}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5" style={{ lineHeight: 1.4 }}>
            {isAr ? 'الموظف المثالي' : 'Employee of the Month'}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '17px', maxWidth: '680px', margin: '0 auto', lineHeight: '1.9', fontWeight: '500' }}>
            {isAr
              ? 'تكريماً لكل من يقدّم أكثر من المطلوب، نسلّط الضوء كل شهر على أحد منسوبي المستشفى الذين تميّزوا بأدائهم وتفانيهم في خدمة المرضى وزملائهم.'
              : 'In recognition of those who give more than what is asked, each month we spotlight a hospital staff member who stood out through their performance and dedication to patients and colleagues.'}
          </p>
        </div>
      </div>

      {/* ── Featured employee ── */}
      <section className="max-w-6xl mx-auto px-4 py-16 -mt-2 relative z-10">
        <div style={{
          background: '#fff', borderRadius: '28px', overflow: 'hidden',
          boxShadow: '0 16px 50px rgba(13,33,55,0.12)', border: '1px solid #e8f1f7',
        }}>
          <div className="grid md:grid-cols-[1fr,1.4fr]">
            {/* image */}
            <div style={{ position: 'relative', minHeight: '320px' }}>
              <img
                src={active.img}
                alt={isAr ? active.nameAr : active.nameEn}
                style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(13,33,55,0.65) 0%, transparent 50%)',
              }} />
              <div style={{
                position: 'absolute', top: '20px',
                [isAr ? 'right' : 'left']: '20px',
                background: '#1787b6', color: '#fff',
                fontSize: '11px', fontWeight: '800',
                padding: '6px 16px', borderRadius: '50px',
                display: 'flex', alignItems: 'center', gap: '6px',
                letterSpacing: '0.4px',
              }}>
                <Star size={13} fill="#fff" />
                {isAr ? active.monthAr : active.monthEn}
              </div>
            </div>

            {/* content */}
            <div style={{ padding: '36px 32px', textAlign: isAr ? 'right' : 'left' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '900', color: '#0d2137', marginBottom: '6px' }}>
                {isAr ? active.nameAr : active.nameEn}
              </h2>
              <p style={{ fontSize: '14px', color: '#1787b6', fontWeight: '700', marginBottom: '20px' }}>
                {isAr ? active.roleAr : active.roleEn}
              </p>

              {/* quote */}
              <div style={{
                background: '#f8fbfd', borderRadius: '16px', padding: '18px 20px',
                borderInlineStart: '4px solid #1787b6', marginBottom: '22px',
                display: 'flex', gap: '12px', flexDirection: isAr ? 'row-reverse' : 'row',
              }}>
                <Quote size={20} color="#1787b6" style={{ flexShrink: 0, marginTop: '2px' }} />
                <p style={{ fontSize: '14.5px', color: '#334155', lineHeight: '1.85', fontWeight: '600', fontStyle: 'italic' }}>
                  {isAr ? active.quoteAr : active.quoteEn}
                </p>
              </div>

              {/* highlights */}
              <h4 style={{ fontSize: '13px', fontWeight: '800', color: '#0d2137', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px', flexDirection: isAr ? 'row-reverse' : 'row' }}>
                <Sparkles size={15} color="#1787b6" />
                {isAr ? 'أبرز إنجازاته' : 'Key contributions'}
              </h4>
              <div className="space-y-2.5 mb-6">
                {(isAr ? active.highlightsAr : active.highlightsEn).map((h, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', flexDirection: isAr ? 'row-reverse' : 'row' }}>
                    <span style={{
                      width: '6px', height: '6px', borderRadius: '50%',
                      background: '#1787b6', marginTop: '8px', flexShrink: 0,
                    }} />
                    <p style={{ fontSize: '13.5px', color: '#4a6d85', lineHeight: '1.8', fontWeight: '500' }}>{h}</p>
                  </div>
                ))}
              </div>

              {/* tenure */}
              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  background: '#e8f4fb', borderRadius: '50px', padding: '7px 16px',
                  flexDirection: isAr ? 'row-reverse' : 'row',
                }}>
                  <Briefcase size={15} color="#1787b6" />
                  <span style={{ fontSize: '12.5px', fontWeight: '700', color: '#1787b6' }}>
                    {isAr ? `${active.years} سنوات خدمة` : `${active.years} years of service`}
                  </span>
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  background: '#fef2f2', borderRadius: '50px', padding: '7px 16px',
                  flexDirection: isAr ? 'row-reverse' : 'row',
                }}>
                  <Heart size={15} color="#ef4444" />
                  <span style={{ fontSize: '12.5px', fontWeight: '700', color: '#ef4444' }}>
                    {isAr ? 'تقدير من الإدارة' : 'Management recognition'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Past honorees ── */}
      <section style={{ background: '#fff', borderTop: '1px solid #e8f1f7' }}>
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <span style={{
              display: 'inline-block', background: '#e8f4fb', color: '#1787b6',
              fontSize: '13px', fontWeight: '700', padding: '5px 18px',
              borderRadius: '50px', marginBottom: '14px',
            }}>
              {isAr ? 'سجل التميز' : 'Hall of Excellence'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#0d2137' }}>
              {isAr ? 'أصحاب التميّز السابقون' : 'Previous Honorees'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {employees.map((emp) => (
              <button
                key={emp.id}
                onClick={() => setActive(emp)}
                style={{
                  background: emp.id === active.id ? '#e8f4fb' : '#f8fbfd',
                  border: emp.id === active.id ? '2px solid #1787b6' : '1px solid #e3eff7',
                  borderRadius: '20px', padding: '24px',
                  textAlign: isAr ? 'right' : 'left', cursor: 'pointer',
                  transition: 'all 0.2s', fontFamily: "'Cairo','Tajawal',sans-serif",
                }}
                onMouseEnter={e => {
                  if (emp.id !== active.id) e.currentTarget.style.borderColor = '#9ecfe8';
                }}
                onMouseLeave={e => {
                  if (emp.id !== active.id) e.currentTarget.style.borderColor = '#e3eff7';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexDirection: isAr ? 'row-reverse' : 'row', marginBottom: '14px' }}>
                  <img
                    src={emp.img}
                    alt={isAr ? emp.nameAr : emp.nameEn}
                    style={{ width: '58px', height: '58px', borderRadius: '14px', objectFit: 'cover' }}
                  />
                  <div>
                    <h4 style={{ fontSize: '14.5px', fontWeight: '800', color: '#0d2137', marginBottom: '3px' }}>
                      {isAr ? emp.nameAr : emp.nameEn}
                    </h4>
                    <p style={{ fontSize: '12px', color: '#1787b6', fontWeight: '600' }}>
                      {isAr ? emp.roleAr : emp.roleEn}
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexDirection: isAr ? 'row-reverse' : 'row' }}>
                  <Calendar size={13} color="#94a3b8" />
                  <span style={{ fontSize: '11.5px', color: '#94a3b8', fontWeight: '600' }}>
                    {isAr ? emp.monthAr : emp.monthEn}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Nomination CTA ── */}
      <section className="max-w-6xl mx-auto px-4 py-20 text-center">
        <div style={{
          background: 'linear-gradient(135deg, #1787b6, #0d5f85)', borderRadius: '24px',
          padding: '48px 32px', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.1,
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '22px 22px',
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {isAr ? 'تعرف على زميل يستحق التقدير؟' : 'Know a colleague who deserves recognition?'}
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', maxWidth: '560px', margin: '0 auto 24px', lineHeight: '1.9', fontWeight: '500' }}>
              {isAr
                ? 'يمكن لأي موظف ترشيح زميل تميّز بأدائه أو تفانيه في العمل من خلال إدارة الموارد البشرية.'
                : 'Any employee can nominate a colleague who has shown outstanding performance or dedication through the Human Resources department.'}
            </p>
            <a href="/contact" style={{
              display: 'inline-block', background: '#fff', color: '#1787b6',
              fontWeight: '800', fontSize: '14px', padding: '13px 34px',
              borderRadius: '50px', textDecoration: 'none',
            }}>
              {isAr ? 'تواصل مع الموارد البشرية' : 'Contact Human Resources'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EmployeeOfMonthPage;
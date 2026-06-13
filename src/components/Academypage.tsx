import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, BookOpen, Award, Users, Stethoscope, ClipboardCheck, ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';

interface AcademyPageProps {
  currentLang: string;
}

const AcademyPage: React.FC<AcademyPageProps> = ({ currentLang }) => {
  const isAr = currentLang === 'ar';
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  const programs = [
    {
      icon: Stethoscope,
      titleAr: 'برنامج التدريب الإكلينيكي',
      titleEn: 'Clinical Training Program',
      descAr: 'تدريب عملي مكثف داخل الأقسام الطبية المختلفة تحت إشراف استشاريين معتمدين.',
      descEn: 'Intensive hands-on training across medical departments under the supervision of certified consultants.',
    },
    {
      icon: BookOpen,
      titleAr: 'برامج التعليم المستمر',
      titleEn: 'Continuing Medical Education',
      descAr: 'محاضرات وورش عمل دورية لتحديث المعارف الطبية وفق آخر المستجدات العالمية.',
      descEn: 'Regular lectures and workshops to keep medical knowledge aligned with the latest global standards.',
    },
    {
      icon: Award,
      titleAr: 'برنامج الزمالة التخصصية',
      titleEn: 'Specialty Fellowship Program',
      descAr: 'مسارات تأهيل متقدمة للأطباء الراغبين في التخصص الدقيق بالتعاون مع شركاء أكاديميين.',
      descEn: 'Advanced qualification tracks for physicians pursuing subspecialty training, in partnership with academic institutions.',
    },
    {
      icon: ClipboardCheck,
      titleAr: 'برنامج التمريض والتأهيل الصحي',
      titleEn: 'Nursing & Allied Health Program',
      descAr: 'برامج تأهيل وتطوير لكوادر التمريض والفنيين الصحيين لرفع جودة الرعاية المقدمة.',
      descEn: 'Development programs for nursing staff and health technicians to elevate the quality of care delivered.',
    },
  ];

  const stats = [
    { value: '+1200', labelAr: 'متدرب سنوياً', labelEn: 'Trainees per year' },
    { value: '+40', labelAr: 'برنامج تدريبي', labelEn: 'Training programs' },
    { value: '+60', labelAr: 'مدرّب ومحاضر', labelEn: 'Trainers & lecturers' },
    { value: '+15', labelAr: 'شريك أكاديمي', labelEn: 'Academic partners' },
  ];

  const tracks = [
    { titleAr: 'الطلاب والمتدربون', titleEn: 'Students & Interns', descAr: 'برامج تدريب ميداني لطلاب كليات الطب والتمريض والعلوم الصحية.', descEn: 'Field training programs for medical, nursing and allied health students.' },
    { titleAr: 'الأطباء الممارسون', titleEn: 'Practicing Physicians', descAr: 'برامج تطوير مهني مستمر واعتماد ساعات تعليم طبي.', descEn: 'Continuous professional development and accredited CME hours.' },
    { titleAr: 'الكوادر التمريضية', titleEn: 'Nursing Staff', descAr: 'تأهيل تخصصي ودورات سلامة المرضى ومهارات الرعاية الحرجة.', descEn: 'Specialized qualification, patient safety and critical-care skill courses.' },
    { titleAr: 'الكوادر الإدارية والفنية', titleEn: 'Admin & Technical Staff', descAr: 'برامج تطوير الكفاءات الإدارية ونظم الجودة وسلامة المنشآت الصحية.', descEn: 'Programs to develop administrative competencies, quality systems and facility safety.' },
  ];

  return (
    <div dir={isAr ? 'rtl' : 'ltr'} style={{ fontFamily: "'Cairo','Tajawal',sans-serif" }} className="min-h-screen bg-gray-50">

      {/* ── Hero ── */}
      <div style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #0d2137 0%, #123a55 55%, #1787b6 100%)' }}>
        {/* decorative dot grid */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.08,
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '26px 26px',
        }} />
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 relative z-10 text-center">
          <div style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: '76px', height: '76px', borderRadius: '20px',
            background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)',
            marginBottom: '24px',
          }}>
            <GraduationCap size={36} color="#fff" />
          </div>
          <span style={{
            display: 'block', width: "fit-content", background: 'rgba(255,255,255,0.12)', color: '#fff',
            fontSize: '13px', fontWeight: '700', padding: '6px 20px',
            borderRadius: '50px', marginBottom: '18px', letterSpacing: '0.5px',
            border: '1px solid rgba(255,255,255,0.18)', marginLeft: 'auto', marginRight: 'auto',
          }}>
            {isAr ? 'التعليم والتطوير المهني' : 'Education & Professional Development'}
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-5" style={{ lineHeight: 1.4 }}>
            {isAr ? 'أكاديمية تخصصي نجران' : 'Najran Specialist Academy'}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '17px', maxWidth: '680px', margin: '0 auto', lineHeight: '1.9', fontWeight: '500' }}>
            {isAr
              ? 'نبني جيلاً من الكوادر الصحية المؤهلة من خلال برامج تدريبية وتعليمية متكاملة، بمعايير علمية حديثة وشراكات أكاديمية رائدة.'
              : 'We build a generation of qualified healthcare professionals through integrated training and educational programs, following modern scientific standards and leading academic partnerships.'}
          </p>
        </div>
      </div>

      {/* ── Stats ── */}
      <div className="max-w-6xl mx-auto px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div key={i} style={{
              background: '#fff', borderRadius: '18px', padding: '26px 16px',
              textAlign: 'center', boxShadow: '0 8px 30px rgba(13,33,55,0.08)',
              border: '1px solid #e8f1f7',
            }}>
              <div style={{ fontSize: '30px', fontWeight: '900', color: '#1787b6', marginBottom: '6px' }}>{s.value}</div>
              <div style={{ fontSize: '13px', color: '#4a6d85', fontWeight: '600' }}>{isAr ? s.labelAr : s.labelEn}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Intro section ── */}
      <section ref={sectionRef} className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div style={{ textAlign: isAr ? 'right' : 'left' }}>
            <span style={{
              display: 'inline-block', background: '#e8f4fb', color: '#1787b6',
              fontSize: '13px', fontWeight: '700', padding: '5px 18px',
              borderRadius: '50px', marginBottom: '14px',
            }}>
              {isAr ? 'رؤيتنا التعليمية' : 'Our Educational Vision'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: '#0d2137' }}>
              {isAr ? 'بيئة تعليمية متكاملة لرعاية صحية أفضل' : 'An integrated learning environment for better healthcare'}
            </h2>
            <p style={{ color: '#4a6d85', fontSize: '15px', lineHeight: '1.95', fontWeight: '500', marginBottom: '16px' }}>
              {isAr
                ? 'تأسست أكاديمية تخصصي نجران لتكون الذراع التعليمي للمستشفى، حيث تجمع بين التدريب العملي على أرض الواقع والمحتوى العلمي المعتمد، بما يضمن مواكبة الكوادر الصحية لأحدث الممارسات الطبية محلياً وعالمياً.'
                : 'Najran Specialist Academy was established as the educational arm of the hospital, combining hands-on, real-world training with accredited scientific content — ensuring healthcare staff stay aligned with the latest medical practices, locally and globally.'}
            </p>
            <p style={{ color: '#4a6d85', fontSize: '15px', lineHeight: '1.95', fontWeight: '500' }}>
              {isAr
                ? 'نعمل بالتعاون مع شركاء أكاديميين وجهات صحية متخصصة لتقديم برامج معتمدة تخدم الطلاب، الأطباء، التمريض، والكوادر الفنية والإدارية على حد سواء.'
                : 'We collaborate with academic partners and specialized health institutions to deliver accredited programs serving students, physicians, nursing staff, and technical and administrative teams alike.'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {programs.map((p, i) => {
              const Icon = p.icon;
              return (
                <div key={i}
                  className={`transition-all duration-700`}
                  style={{
                    background: '#fff', borderRadius: '18px', padding: '22px 18px',
                    border: '1px solid #e3eff7', boxShadow: '0 4px 18px rgba(23,135,182,0.06)',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(14px)',
                    transitionDelay: `${i * 100}ms`,
                  }}
                >
                  <div style={{
                    width: '46px', height: '46px', borderRadius: '12px',
                    background: '#e8f4fb', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '14px',
                  }}>
                    <Icon size={22} color="#1787b6" />
                  </div>
                  <h4 style={{ fontSize: '14px', fontWeight: '800', color: '#0d2137', marginBottom: '8px', lineHeight: '1.5' }}>
                    {isAr ? p.titleAr : p.titleEn}
                  </h4>
                  <p style={{ fontSize: '12.5px', color: '#4a6d85', lineHeight: '1.75', fontWeight: '500' }}>
                    {isAr ? p.descAr : p.descEn}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Tracks ── */}
      <section style={{ background: '#fff', borderTop: '1px solid #e8f1f7', borderBottom: '1px solid #e8f1f7' }}>
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="text-center mb-14">
            <span style={{
              display: 'inline-block', background: '#e8f4fb', color: '#1787b6',
              fontSize: '13px', fontWeight: '700', padding: '5px 18px',
              borderRadius: '50px', marginBottom: '14px',
            }}>
              {isAr ? 'من نستهدف' : 'Who We Train'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#0d2137' }}>
              {isAr ? 'مسارات تدريبية لكل فئة' : 'Training tracks for every category'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {tracks.map((t, i) => (
              <div key={i} style={{
                background: '#f8fbfd', borderRadius: '18px', padding: '26px 20px',
                border: '1px solid #e3eff7', textAlign: isAr ? 'right' : 'left',
                transition: 'transform 0.25s, box-shadow 0.25s',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(23,135,182,0.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  width: '40px', height: '40px', borderRadius: '10px',
                  background: '#1787b6', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '16px',
                }}>
                  <Users size={20} color="#fff" />
                </div>
                <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#0d2137', marginBottom: '8px' }}>
                  {isAr ? t.titleAr : t.titleEn}
                </h4>
                <p style={{ fontSize: '13px', color: '#4a6d85', lineHeight: '1.8', fontWeight: '500' }}>
                  {isAr ? t.descAr : t.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Accreditation / Why join ── */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1" style={{ textAlign: isAr ? 'right' : 'left' }}>
            <span style={{
              display: 'inline-block', background: '#e8f4fb', color: '#1787b6',
              fontSize: '13px', fontWeight: '700', padding: '5px 18px',
              borderRadius: '50px', marginBottom: '14px',
            }}>
              {isAr ? 'لماذا الأكاديمية' : 'Why the Academy'}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#0d2137' }}>
              {isAr ? 'تدريب يُحدث فرقاً حقيقياً' : 'Training that makes a real difference'}
            </h2>

            <div className="space-y-4">
              {[
                { ar: 'برامج معتمدة من جهات صحية رسمية', en: 'Programs accredited by official health authorities' },
                { ar: 'تدريب عملي داخل بيئة استشفائية حقيقية', en: 'Hands-on training within a real hospital environment' },
                { ar: 'محاضرون من استشاريين بخبرات متخصصة', en: 'Lecturers from specialized consultant physicians' },
                { ar: 'شهادات تدريب معتمدة لكل المشاركين', en: 'Accredited training certificates for all participants' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', flexDirection: isAr ? 'row-reverse' : 'row' }}>
                  <CheckCircle2 size={20} color="#1787b6" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ fontSize: '14.5px', color: '#334155', fontWeight: '600', lineHeight: '1.7' }}>
                    {isAr ? item.ar : item.en}
                  </p>
                </div>
              ))}
            </div>

            <a href="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              marginTop: '28px', background: 'linear-gradient(135deg, #1787b6, #0d5f85)',
              color: '#fff', fontWeight: '700', fontSize: '14px',
              padding: '13px 32px', borderRadius: '50px', textDecoration: 'none',
              boxShadow: '0 4px 18px rgba(23,135,182,0.3)',
            }}>
              {isAr ? 'تواصل معنا للالتحاق' : 'Contact us to enroll'}
              <ArrowIcon size={16} />
            </a>
          </div>

          <div className="order-1 md:order-2" style={{ position: 'relative' }}>
            <div style={{
              borderRadius: '24px', overflow: 'hidden', aspectRatio: '4/3',
              boxShadow: '0 16px 50px rgba(13,33,55,0.15)',
            }}>
              <img
                src="https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt={isAr ? 'تدريب طبي' : 'Medical training'}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div style={{
              position: 'absolute', bottom: '-22px',
              [isAr ? 'left' : 'right']: '-22px',
              background: '#1787b6', color: '#fff',
              borderRadius: '18px', padding: '18px 24px',
              boxShadow: '0 10px 30px rgba(23,135,182,0.35)',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '24px', fontWeight: '900' }}>+12</div>
              <div style={{ fontSize: '11px', fontWeight: '600', opacity: 0.9 }}>
                {isAr ? 'سنوات خبرة تدريبية' : 'Years of training experience'}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AcademyPage;
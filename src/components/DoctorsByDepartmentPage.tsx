import React, { useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

interface Doctor {
  id: number;
  src: string;
  nameAr: string;
  nameEn: string;
  specialtyAr: string;
  specialtyEn: string;
  detailsAr: string[];
  detailsEn: string[];
  departmentIds: number[];
  clinicKeysAr?: string[];
  clinicKeysEn?: string[];
}

const WHATSAPP_NUMBER = '920002159';

const doctors: Doctor[] = [
  { id: 1, src: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400', nameAr: 'عبدالله عسيري', nameEn: 'Abdullah Asiri', specialtyAr: 'استشاري الأنف والأذن والحنجرة', specialtyEn: 'ENT Consultant', departmentIds: [10], detailsAr: ['تشخيص وعلاج أمراض الأنف والجيوب الأنفية','علاج التهابات الحلق واللوزتين والغدانية','علاج اضطرابات السمع وأمراض الأذن الوسطى والداخلية','جراحة الأنف التجميلية والوظيفية (الرينوبلاستي)','علاج الشخير وانقطاع التنفس أثناء النوم','فحص وعلاج اضطرابات الصوت والبلع'], detailsEn: ['Diagnosis & Treatment of Nasal & Sinus Diseases','Throat, Tonsil & Adenoid Infections','Hearing Disorders & Middle/Inner Ear Diseases','Functional & Cosmetic Rhinoplasty','Snoring & Sleep Apnoea Treatment','Voice & Swallowing Disorders'] },
  { id: 2, src: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=400', nameAr: 'عبدالعزيز الشهراني', nameEn: 'Abdulaziz Al-Shahrani', specialtyAr: 'استشاري الجهاز الهضمي والمناظير', specialtyEn: 'Gastroenterology & Endoscopy Consultant', departmentIds: [5], detailsAr: ['تنظير الجهاز الهضمي العلوي (المريء والمعدة والاثني عشر)','تنظير القولون والأمعاء الغليظة','تشخيص وعلاج جرثومة المعدة (الهيليكوباكتر)','تشخيص وعلاج القرحات الهضمية والارتجاع المريئي','تشخيص وعلاج أمراض الكبد والتليف الكبدي','تشخيص وعلاج أمراض البنكرياس والقنوات الصفراوية','تشخيص وعلاج الأمراض الالتهابية للأمعاء (كرون والتهاب القولون)'], detailsEn: ['Upper GI Endoscopy (Oesophagus, Stomach & Duodenum)','Colonoscopy & Large Intestine Examination','Diagnosis & Treatment of H. Pylori (Stomach Bacteria)','Peptic Ulcers & Gastro-Oesophageal Reflux Disease','Liver Diseases & Hepatic Fibrosis','Pancreatic & Biliary Tract Diseases','Inflammatory Bowel Disease (Crohn\'s & Colitis)'] },
  { id: 3, src: 'https://images.pexels.com/photos/8376277/pexels-photo-8376277.jpeg?auto=compress&cs=tinysrgb&w=400', nameAr: 'عبدالعزيز الشهري', nameEn: 'Abdulaziz Al-Shehri', specialtyAr: 'أخصائي أول طب المخ والأعصاب للأطفال', specialtyEn: 'Senior Paediatric Neurology Specialist', departmentIds: [14], detailsAr: ['تشخيص وعلاج الصرع وتشنجات الأطفال','تشخيص وعلاج اضطرابات النمو العصبي (التوحد وفرط الحركة)','تقييم وعلاج تأخر الكلام والتطور الحركي','تشخيص وعلاج الصداع والشقيقة لدى الأطفال','تقييم وعلاج ضعف العضلات والأمراض العصبية العضلية','متابعة إصابات الرأس والحبل الشوكي لدى الأطفال'], detailsEn: ['Diagnosis & Treatment of Epilepsy & Childhood Seizures','Neurodevelopmental Disorders (Autism & ADHD)','Speech Delay & Motor Development Assessment','Paediatric Headache & Migraine','Muscle Weakness & Neuromuscular Diseases','Head & Spinal Cord Injury Follow-Up in Children'] },
  { id: 4, src: 'https://images.pexels.com/photos/3845653/pexels-photo-3845653.jpeg?auto=compress&cs=tinysrgb&w=400', nameAr: 'عبدالله آل قدرة', nameEn: 'Abdullah Al-Qudra', specialtyAr: 'طب الأسنان المتخصص — دنت سمايل', specialtyEn: 'Specialist Dentistry — Dent Smile', departmentIds: [15], detailsAr: ['علاج حالات التهابات عصب الأسنان','علاج حالات التهابات الجذور','إعادة علاج الجذور في حال فشل العلاج السابق','علاج حالات جذور الأسنان الطارئة المتعلقة بالسقوط أو الحوادث'], detailsEn: ['Dental Nerve Inflammation Treatment','Root Canal Infections','Root Canal Re-treatment','Emergency Dental Root Cases (Trauma/Accidents)'] },
  { id: 5, src: 'https://images.pexels.com/photos/4270088/pexels-photo-4270088.jpeg?auto=compress&cs=tinysrgb&w=400', nameAr: 'عبد الرحمن العمري', nameEn: 'Abdulrahman Al-Omari', specialtyAr: 'جراحات السمنة', specialtyEn: 'Bariatric Surgery', departmentIds: [6], detailsAr: ['تحويل المسار المصغر والكلاسيكي','إعادة وترميم عمليات السمنة السابقة','عمليات الكبسولة العادية والكبسولة الذكية للمعدة'], detailsEn: ['Mini & Classic Gastric Bypass','Revision & Repair of Previous Bariatric Surgery','Standard & Smart Gastric Capsule Procedures'] },
  { id: 6, src: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=400', nameAr: 'عادل معلوي', nameEn: 'Adel Maalawi', specialtyAr: 'جراحات المسالك البولية', specialtyEn: 'Urological Surgery', departmentIds: [9], detailsAr: ['معالجة الحصوات والمغص الكلوي بالمناظير المرنة والليزر','جراحات علاج أمراض الذكورة والضعف الجنسي (زرع الدعامات)','عمليات الدوالي والقيلة المائية','علاج تضخم البروستاتا بالتبخير'], detailsEn: ['Kidney Stones & Renal Colic via Flexible Ureteroscopy & Laser','Male Sexual Dysfunction Surgery (Penile Implants)','Varicocele & Hydrocele Surgery','Prostate Enlargement Steam Therapy (Rezum)'] },
  { id: 7, src: 'https://images.pexels.com/photos/5214959/pexels-photo-5214959.jpeg?auto=compress&cs=tinysrgb&w=400', nameAr: 'عدنان بوغوفه', nameEn: 'Adnan Bughofa', specialtyAr: 'جراحات العظام والمفاصل', specialtyEn: 'Orthopaedic & Joint Surgery', departmentIds: [17], detailsAr: ['زراعة وتبديل المفاصل','مناظير الركبة والكتف والإصابات','جراحات الحوض والإصابات والكسور'], detailsEn: ['Joint Replacement & Arthroplasty','Knee & Shoulder Arthroscopy & Sports Injuries','Pelvic Injuries & Complex Fractures'] },
  { id: 8, src: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=400', nameAr: 'احمد جبر', nameEn: 'Ahmed Jabr', specialtyAr: 'طب وجراحة العيون', specialtyEn: 'Ophthalmology & Eye Surgery', departmentIds: [11], detailsAr: ['العدسات اللاصقة الصلبة والمرنة','علاج مشاكل الشبكية','علاج المياه البيضاء (الكاتراكت)','علاج المياه الزرقاء (الجلوكوما)'], detailsEn: ['Rigid & Flexible Contact Lenses','Retinal Disorders','Cataract Treatment','Glaucoma Treatment'] },
  { id: 9, src: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400', nameAr: 'احمد شاكر', nameEn: 'Ahmed Shaker', specialtyAr: 'استشاري التخدير', specialtyEn: 'Anaesthesiology Consultant', departmentIds: [3], detailsAr: ['التخدير العام والموضعي لجميع أنواع العمليات','إدارة الألم الحاد والمزمن ما بعد الجراحة','التخدير فوق الجافية (Epidural) للولادة بدون ألم','التخدير في جراحات القلب والصدر والأوعية الدموية','رعاية المريض في غرفة الإفاقة والعناية المركزة','تقييم المريض قبل العملية وتحديد بروتوكول التخدير المناسب'], detailsEn: ['General & Regional Anaesthesia for All Surgical Procedures','Acute & Chronic Post-operative Pain Management','Epidural Anaesthesia for Painless Labour','Cardiac, Thoracic & Vascular Surgery Anaesthesia','Recovery Room & Intensive Care Patient Management','Pre-operative Assessment & Anaesthesia Protocol Planning'] },
  { id: 10, src: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400', nameAr: 'علي عسيري', nameEn: 'Ali Asiri', specialtyAr: 'استشاري الباطنية وأمراض الدم', specialtyEn: 'Internal Medicine & Haematology Consultant', departmentIds: [4], detailsAr: ['تشخيص وعلاج فقر الدم بأنواعه (الحديدي، الانحلالي، الخبيث)','تشخيص وعلاج اضطرابات التخثر ونقص الصفائح الدموية','متابعة وعلاج أمراض الدم الوراثية (الثلاسيميا، الهيموفيليا)','تشخيص وعلاج الأمراض الباطنية المزمنة','علاج التهابات الأوعية الدموية وأمراض المناعة الذاتية','متابعة مرضى السرطان أثناء وبعد العلاج الكيميائي'], detailsEn: ['Diagnosis & Treatment of All Types of Anaemia','Coagulation Disorders & Thrombocytopenia','Hereditary Blood Diseases (Thalassaemia & Haemophilia)','Chronic Internal Medicine Diseases','Vasculitis & Autoimmune Diseases','Oncology Patient Follow-Up During & After Chemotherapy'] },
];

interface DoctorsByDepartmentPageProps {
  currentLang: string;
  changeLanguage: (lang: string) => void;
}

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const DoctorsByDepartmentPage = ({ currentLang }: DoctorsByDepartmentPageProps) => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const isAr = currentLang === 'ar';

  const deptId = searchParams.get('dept');
  const clinic = searchParams.get('clinic');

  const filteredDoctors = doctors.filter(doc => {
    if (!deptId) return false;
    return doc.departmentIds.includes(parseInt(deptId));
  });

  const openWhatsApp = useCallback((doc: Doctor) => {
    const name = isAr ? doc.nameAr : doc.nameEn;
    const specialty = isAr ? doc.specialtyAr : doc.specialtyEn;
    const message = isAr
      ? `مرحباً، أود حجز موعد مع الدكتور ${name} - تخصص: ${specialty}`
      : `Hello, I would like to book an appointment with Dr. ${name} - Specialty: ${specialty}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  }, [isAr]);

  return (
    <div dir={isAr ? 'rtl' : 'ltr'} style={{ fontFamily: "'Cairo','Tajawal',sans-serif", minHeight: '100vh', background: '#f8fcff' }}>
      <div style={{
        background: 'linear-gradient(135deg, #1787b6 0%, #269dcc 100%)',
        padding: '48px 24px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <button
            onClick={() => navigate('/')}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255,255,255,0.15)',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '12px',
              padding: '10px 18px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              marginBottom: '24px',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.2s'
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.25)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ transform: isAr ? 'rotate(180deg)' : 'none' }}>
              <line x1="19" y1="12" x2="5" y2="12"/>
              <polyline points="12 19 5 12 12 5"/>
            </svg>
            {isAr ? 'العودة للصفحة الرئيسية' : 'Back to Home'}
          </button>

          <h1 style={{ color: '#fff', fontSize: 'clamp(28px, 5vw, 42px)', fontWeight: '800', margin: '0 0 12px', textShadow: '0 2px 20px rgba(0,0,0,0.2)' }}>
            {isAr ? 'الأطباء المتاحون' : 'Available Doctors'}
          </h1>
          {clinic && (
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '16px', fontWeight: '500', margin: 0 }}>
              {clinic}
            </p>
          )}
        </div>
      </div>

      <section style={{ padding: 'clamp(32px, 6vw, 64px) clamp(16px, 4vw, 48px)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {filteredDoctors.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 20px', background: '#fff', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}>
              <div style={{ fontSize: '64px', marginBottom: '20px' }}>🏥</div>
              <h2 style={{ color: '#2d3748', fontSize: '24px', fontWeight: '700', marginBottom: '12px' }}>
                {isAr ? 'لا يوجد أطباء متاحون حالياً' : 'No doctors available currently'}
              </h2>
              <p style={{ color: '#94a3b8', fontSize: '15px' }}>
                {isAr ? 'يرجى اختيار قسم أو عيادة أخرى' : 'Please select another department or clinic'}
              </p>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: '24px', color: '#4a7d99', fontSize: '15px', fontWeight: '600' }}>
                {isAr ? `${filteredDoctors.length} طبيب متاح` : `${filteredDoctors.length} doctor${filteredDoctors.length !== 1 ? 's' : ''} available`}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
                {filteredDoctors.map(doc => {
                  const name = isAr ? doc.nameAr : doc.nameEn;
                  const specialty = isAr ? doc.specialtyAr : doc.specialtyEn;
                  const details = isAr ? doc.detailsAr : doc.detailsEn;

                  return (
                    <div
                      key={doc.id}
                      style={{
                        background: '#fff',
                        borderRadius: '20px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 20px rgba(23,135,182,0.08)',
                        border: '1px solid #e8f2f9',
                        transition: 'all 0.3s ease',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(-6px)';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(23,135,182,0.15)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(23,135,182,0.08)';
                      }}
                    >
                      <div style={{ position: 'relative', paddingTop: '100%', background: 'linear-gradient(135deg, #f0f8fd 0%, #e8f4fb 100%)' }}>
                        <img
                          src={doc.src}
                          alt={name}
                          loading="lazy"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'top center'
                          }}
                        />
                        <div style={{ position: 'absolute', top: '12px', right: isAr ? 'auto' : '12px', left: isAr ? '12px' : 'auto', background: 'linear-gradient(135deg, #1787b6, #269dcc)', color: '#fff', padding: '4px 12px', borderRadius: '50px', fontSize: '11px', fontWeight: '700', boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}>
                          #{doc.id}
                        </div>
                      </div>

                      <div style={{ padding: '20px' }}>
                        <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#0d2137', margin: '0 0 6px' }}>
                          {isAr ? `د. ${name}` : `Dr. ${name}`}
                        </h3>
                        <p style={{ fontSize: '13px', color: '#1787b6', fontWeight: '600', margin: '0 0 16px', lineHeight: '1.5' }}>
                          {specialty}
                        </p>

                        <div style={{ marginBottom: '18px' }}>
                          <p style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '10px' }}>
                            {isAr ? 'التخصصات والخدمات' : 'Specialties & Services'}
                          </p>
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                            {details.slice(0, 3).map((d, i) => (
                              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12px', color: '#4a6d85', lineHeight: '1.5' }}>
                                <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'linear-gradient(135deg, #269dcc, #1787b6)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: '800', flexShrink: 0, marginTop: '1px' }}>
                                  {i + 1}
                                </span>
                                <span>{d}</span>
                              </li>
                            ))}
                            {details.length > 3 && (
                              <li style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '600', paddingRight: isAr ? '26px' : 0, paddingLeft: isAr ? 0 : '26px' }}>
                                {isAr ? `+ ${details.length - 3} خدمات أخرى` : `+ ${details.length - 3} more services`}
                              </li>
                            )}
                          </ul>
                        </div>

                        <button
                          onClick={() => openWhatsApp(doc)}
                          style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            background: 'linear-gradient(135deg, #25d366, #1db954)',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '14px',
                            padding: '14px',
                            fontSize: '14px',
                            fontWeight: '700',
                            cursor: 'pointer',
                            fontFamily: 'inherit',
                            boxShadow: '0 4px 16px rgba(37,211,102,0.35)',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={e => {
                            (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                            (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(37,211,102,0.5)';
                          }}
                          onMouseLeave={e => {
                            (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                            (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(37,211,102,0.35)';
                          }}
                        >
                          <WhatsAppIcon />
                          {isAr ? 'احجز الآن عبر واتساب' : 'Book Now via WhatsApp'}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default DoctorsByDepartmentPage;

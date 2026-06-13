import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CoverBg from "../assets/cover.jpeg"

// ── استيراد صور الأخبار ──────────────────────────────────────────────────────
import Postn1 from '../assets/news/postn1.png';
import Postn2 from '../assets/news/postn2.jpg';
import Postn3 from '../assets/news/postn3.jpeg';
import Postn4 from '../assets/news/postn4.jpeg';
import Postn5 from '../assets/news/postn5.jpeg';
import Postn6 from '../assets/news/postn6.jpeg';
import MainHospital from '../assets/mainhospital.jpeg';

const sliderNews = [
  {
    id: 1,
    img: Postn1,
    titleAr: 'توقيع اتفاقية شراكة بين هيئة الهلال الأحمر السعودي ومستشفى تخصصي نجران',
    titleEn: 'Partnership Agreement Between Saudi Red Crescent Authority and Najran Specialist Hospital',
    summaryAr: 'بحضور سمو أمير منطقة نجران تم توقيع اتفاقية شراكة بين هيئة الهلال الأحمر السعودي ومستشفى تخصصي نجران نحو تقديم خدمة صحية أفضل لأهالي نجران.',
    summaryEn: 'A partnership agreement was signed between the Saudi Red Crescent Authority and Najran Specialist Hospital to provide better healthcare for Najran residents.',
    date: '2025-01-15',
  },
  {
    id: 2,
    img: Postn2,
    titleAr: 'عروض نهاية العام من مستشفى تخصصي نجران',
    titleEn: 'Year-End Offers from Najran Specialist Hospital',
    summaryAr: 'يقدم مستشفى تخصصي نجران عروضاً استثنائية على عمليات قسم الجراحة العامة بأسعار مميزة لخدمة المرضى.',
    summaryEn: 'Najran Specialist Hospital offers exceptional deals on general surgery procedures at special prices to serve patients.',
    date: '2024-12-26',
  },
  {
    id: 3,
    img: Postn3,
    titleAr: 'وزارة الصحة تتوج مستشفى تخصصي نجران بشهادة اعتماد المستشفى صديق كبار السن',
    titleEn: 'Ministry of Health Awards Najran Specialist Hospital the Elder-Friendly Hospital Accreditation',
    summaryAr: 'تميّز مستشفى تخصصي نجران في تطبيق معايير الجودة لرعاية كبار السن على مستوى المملكة.',
    summaryEn: 'Najran Specialist Hospital excelled in applying quality standards for elderly care across the Kingdom.',
    date: '2025-10-20',
  },
  {
    id: 4,
    img: Postn4,
    titleAr: 'مستشفى تخصصي نجران يحتفل بتخريج دفعة جديدة من المتدربين الصحيين',
    titleEn: 'Najran Specialist Hospital Celebrates Graduation of a New Batch of Healthcare Trainees',
    summaryAr: 'احتفل مستشفى تخصصي نجران بتخريج دفعة جديدة من الكوادر الصحية المؤهلة في إطار برنامج التدريب الميداني المتكامل.',
    summaryEn: 'Najran Specialist Hospital celebrated the graduation of a new cohort of qualified healthcare professionals as part of its comprehensive field training program.',
    date: '2024-11-10',
  },
  {
    id: 5,
    img: Postn5,
    titleAr: 'مستشفى تخصصي نجران يطلق حملة توعوية شاملة لمكافحة السكري',
    titleEn: 'Najran Specialist Hospital Launches Comprehensive Diabetes Awareness Campaign',
    summaryAr: 'انطلقت حملة توعوية واسعة بمناسبة اليوم العالمي للسكري شملت فحوصات مجانية وجلسات تثقيفية للمرضى وذويهم.',
    summaryEn: 'A wide-scale awareness campaign was launched on World Diabetes Day, featuring free screenings and educational sessions for patients and their families.',
    date: '2024-10-05',
  },
  {
    id: 6,
    img: Postn6,
    titleAr: 'المستشفى يستقبل وفداً طبياً دولياً لتبادل الخبرات في مجال الجراحة التخصصية',
    titleEn: 'Hospital Welcomes International Medical Delegation for Specialized Surgery Knowledge Exchange',
    summaryAr: 'استقبل مستشفى تخصصي نجران وفداً من الأطباء والمختصين الدوليين في إطار مبادرة التعاون الطبي وتبادل الخبرات.',
    summaryEn: 'Najran Specialist Hospital welcomed a delegation of international physicians and specialists as part of a medical cooperation and knowledge exchange initiative.',
    date: '2024-09-01',
  },
  {
    id: 7,
    img: MainHospital,
    titleAr: 'افتتاح الجناح الجديد لطب الطوارئ والعناية المركزة في مستشفى تخصصي نجران',
    titleEn: 'Grand Opening of the New Emergency & Intensive Care Wing at Najran Specialist Hospital',
    summaryAr: 'أعلن مستشفى تخصصي نجران عن افتتاح جناح متطور لخدمات الطوارئ والعناية المركزة مزوّد بأحدث التقنيات الطبية.',
    summaryEn: 'Najran Specialist Hospital announced the opening of a state-of-the-art emergency and intensive care wing equipped with the latest medical technologies.',
    date: '2026-03-20',
  },
];

// ── ReservationSection الأصلي + قسم الأخبار ─────────────────────────────────
const ReservationSection = ({ currentLang }) => {
  const [selectedDept, setSelectedDept] = useState('');
  const [selectedClinic, setSelectedClinic] = useState('');
  const [selectedNews, setSelectedNews] = useState(null);
  const navigate = useNavigate();

  const t = {
    en: {
      title: "Book Your Appointment",
      subtitle: "Choose the appropriate department and clinic",
      tagline: "Elite doctors and advanced medical services 24/7",
      deptLabel: "Medical Department",
      clinicLabel: "Specialized Clinic",
      selectDept: "Select Department",
      selectClinic: "Select Clinic",
      bookNow: "Book Now",
      pleaseSelect: "Please select a department and clinic first"
    },
    ar: {
      title: "احجز موعدك",
      subtitle: "اختر القسم والعيادة المناسبة",
      tagline: "نخبة من الأطباء وخدمات طبية متطورة لخدمتك على مدار الساعة",
      deptLabel: "القسم الطبي",
      clinicLabel: "العيادة المتخصصة",
      selectDept: "اختر القسم",
      selectClinic: "اختر العيادة",
      bookNow: "احجز الآن",
      pleaseSelect: "يرجى اختيار القسم والعيادة أولاً"
    }
  };

  const lang = currentLang || 'ar';
  const texts = t[lang];

  const departments = [
    {
      id: 1,
      nameAr: "مركز العناية المركزة",
      nameEn: "Intensive Care Center",
      clinicsAr: ["وحدة العناية المركزة للكبار", "وحدة العناية المركزة للأطفال", "وحدة العناية المركزة لحديثي الولادة"],
      clinicsEn: ["Adult Intensive Care Unit", "Pediatric Intensive Care Unit", "Neonatal Intensive Care Unit"]
    },
    {
      id: 2,
      nameAr: "مراكزنا الطبية النوعية",
      nameEn: "Our Specialized Medical Centers",
      clinicsAr: ["مركز فحص العمالة", "مركز الرعاية الصحية المنزلية", "مركز فحص السموم والمخدرات", "مركز إصابات العمل", "عيادات الأماكن النائية للشركات والمصانع"],
      clinicsEn: ["Labor Examination Center", "Home Healthcare Center", "Toxins and Drugs Examination Center", "Work Injuries Center", "Remote Clinics for Companies and Factories"]
    },
    {
      id: 3,
      nameAr: "أقسامنا الطبية المساندة",
      nameEn: "Supportive Medical Departments",
      clinicsAr: ["قسم المختبر", "قسم الطوارئ", "قسم الصيدلية", "قسم الأشعة التشخيصية", "قسم التعقيم المركزي", "قسم الخدمة الاجتماعية", "قسم المطبخ والمغسلة"],
      clinicsEn: ["Laboratory Department", "Emergency Department", "Pharmacy Department", "Diagnostic Radiology Department", "Central Sterilization Department", "Social Service Department", "Kitchen and Laundry Department"]
    },
    {
      id: 4,
      nameAr: "مركز الطب الباطني",
      nameEn: "Internal Medicine Center",
      clinicsAr: ["وحدة أمراض القلب", "وحدة الأمراض العصبية", "وحدة الأمراض الصدرية", "وحدة أمراض الدم", "وحدة طب الأسرة", "وحدة طب المستشفيات", "وحدة الباطنة العامة والغدد الصماء والسكري", "وحدة الأمراض المعدية"],
      clinicsEn: ["Cardiology Unit", "Neurology Unit", "Chest Diseases Unit", "Hematology Unit", "Family Medicine Unit", "Hospital Medicine Unit", "General Internal Medicine, Endocrinology & Diabetes Unit", "Infectious Diseases Unit"]
    },
    {
      id: 5,
      nameAr: "مركز الجهاز الهضمي والكبد والمناظير",
      nameEn: "Gastroenterology, Hepatology & Endoscopy Center",
      clinicsAr: ["وحدة المناظير العلوية والسفلية (مناظير المعدة والقولون التشخيصية والعلاجية)", "وحدة مناظير القنوات المرارية ERCP (إزالة حصوات المرارة وتركيب الدعامات المرارية)"],
      clinicsEn: ["Upper & Lower Endoscopy Unit (Diagnostic & Therapeutic Gastroscopy & Colonoscopy)", "ERCP Unit (Gallstone Removal & Biliary Stenting)"]
    },
    {
      id: 6,
      nameAr: "مركز علاج وجراحات السمنة",
      nameEn: "Obesity Treatment & Surgery Center",
      clinicsAr: ["وحدة جراحات السمنة", "وحدة التغذية العلاجية", "وحدة الدعم النفسي والسلوكي"],
      clinicsEn: ["Bariatric Surgery Unit", "Therapeutic Nutrition Unit", "Psychological & Behavioral Support Unit"]
    },
    {
      id: 7,
      nameAr: "مركز الجراحة العامة وجراحة المناظير",
      nameEn: "General Surgery & Laparoscopy Center",
      clinicsAr: ["وحدة الجراحات الطارئة", "وحدة جراحات المناظير", "وحدة جراحات الشرج والمستقيم", "وحدة جراحات الثدي والغدد الصماء", "وحدة جراحات الصدر"],
      clinicsEn: ["Emergency Surgery Unit", "Laparoscopic Surgery Unit", "Colorectal Surgery Unit", "Breast & Endocrine Surgery Unit", "Thoracic Surgery Unit"]
    },
    {
      id: 8,
      nameAr: "مركز صحة المرأة",
      nameEn: "Women's Health Center",
      clinicsAr: ["وحدة أمراض وجراحات النساء والولادة", "وحدة رعاية الأمومة والجراحات التجميلية بعد الولادة", "وحدة الخدمات التجميلية النسائية"],
      clinicsEn: ["Obstetrics & Gynecology Unit", "Maternity Care & Postpartum Cosmetic Surgery Unit", "Women's Cosmetic Services Unit"]
    },
    {
      id: 9,
      nameAr: "مركز أمراض وجراحات المسالك البولية",
      nameEn: "Urology Diseases & Surgery Center",
      clinicsAr: ["وحدة صحة الرجل (أمراض وجراحات الذكورة والعقم)", "وحدة علاج وجراحات حصوات المسالك البولية", "وحدة علاج وجراحات البروستات"],
      clinicsEn: ["Men's Health Unit (Andrology & Infertility)", "Urinary Stones Treatment & Surgery Unit", "Prostate Treatment & Surgery Unit"]
    },
    {
      id: 10,
      nameAr: "مركز الأنف والأذن والحنجرة",
      nameEn: "Ear, Nose & Throat (ENT) Center",
      clinicsAr: ["وحدة جراحات ومناظير الأنف والأذن والحنجرة", "وحدة جراحات الرأس والعنق", "وحدة السمعيات", "وحدة علاج وجراحات مشاكل النوم"],
      clinicsEn: ["ENT Endoscopy & Surgery Unit", "Head & Neck Surgery Unit", "Audiology Unit", "Sleep Disorders Treatment & Surgery Unit"]
    },
    {
      id: 11,
      nameAr: "مركز طب وجراحة العيون",
      nameEn: "Ophthalmology & Eye Surgery Center",
      clinicsAr: ["وحدة تشخيص وعلاج أمراض العيون", "وحدة جراحات العيون"],
      clinicsEn: ["Eye Diseases Diagnosis & Treatment Unit", "Eye Surgery Unit"]
    },
    {
      id: 12,
      nameAr: "مركز الأشعة التداخلية",
      nameEn: "Interventional Radiology Center",
      clinicsAr: ["وحدة علاج الأوردة والدوالي والأوعية الدموية بدون جراحة", "وحدة تركيب الدعامات بالأشعة التداخلية بدون جراحة", "وحدة علاج المفاصل والعمود الفقري والعظام بدون جراحة"],
      clinicsEn: ["Varicose Veins & Vascular Treatment without Surgery", "Stent Placement by Interventional Radiology without Surgery", "Joints, Spine & Bones Treatment without Surgery"]
    },
    {
      id: 13,
      nameAr: "مركز الطب النفسي",
      nameEn: "Psychiatry Center",
      clinicsAr: ["وحدة علاج إدمان المخدرات", "وحدة العلاج السلوكي المعرفي"],
      clinicsEn: ["Drug Addiction Treatment Unit", "Cognitive Behavioral Therapy Unit"]
    },
    {
      id: 14,
      nameAr: "مركز طب الأطفال المتخصص",
      nameEn: "Specialized Pediatric Center",
      clinicsAr: ["وحدة العناية المركزة للأطفال حديثي الولادة", "وحدة الأمراض الصدرية للأطفال", "وحدة مناظير الجهاز الهضمي للأطفال", "وحدة السكري والغدد الصماء ونمو الأطفال", "وحدة أمراض المخ والأعصاب للأطفال"],
      clinicsEn: ["Neonatal Pediatric Intensive Care Unit", "Pediatric Chest Diseases Unit", "Pediatric Gastrointestinal Endoscopy Unit", "Pediatric Diabetes, Endocrinology & Growth Unit", "Pediatric Neurology Unit"]
    },
    {
      id: 15,
      nameAr: "مركز طب الأسنان المتخصص (دنت سمايل)",
      nameEn: "Specialized Dental Center (Dent Smile)",
      clinicsAr: ["عيادة تقويم الأسنان وعظام الوجه والفكين", "عيادة التركيبات والحشوات التجميلية للأسنان", "عيادة زراعة الأسنان", "عيادة جراحة الوجه والفكين", "عيادة أمراض اللثة", "عيادة أسنان الأطفال"],
      clinicsEn: ["Orthodontics, Jaw & Facial Bones Clinic", "Cosmetic Fillings & Prosthetics Clinic", "Dental Implants Clinic", "Oral & Maxillofacial Surgery Clinic", "Periodontal Diseases Clinic", "Pediatric Dentistry Clinic"]
    },
    {
      id: 16,
      nameAr: "مركز الجلدية والجراحات التجميلية والليزر",
      nameEn: "Dermatology, Cosmetic Surgery & Laser Center",
      clinicsAr: ["وحدة الجلدية والتجميل والليزر", "وحدة الجراحات التجميلية"],
      clinicsEn: ["Dermatology, Cosmetics & Laser Unit", "Cosmetic Surgery Unit"]
    },
    {
      id: 17,
      nameAr: "مركز أمراض وجراحات العظام",
      nameEn: "Orthopedics & Orthopedic Surgery Center",
      clinicsAr: ["وحدة الإصابات والكسور المعقدة للعظام والمفاصل", "وحدة استبدال المفاصل الصناعية للركبة والحوض", "وحدة الطب الرياضي ومناظير الكتف والركبة", "وحدة جراحات اليد الميكروسكوبية", "وحدة العلاج الطبيعي والوظيفي"],
      clinicsEn: ["Complex Fractures & Joint Injuries Unit", "Artificial Joint Replacement (Knee & Hip) Unit", "Sports Medicine & Arthroscopy (Shoulder & Knee) Unit", "Microscopic Hand Surgery Unit", "Physical & Occupational Therapy Unit"]
    }
  ];

  const selectedDepartment = departments.find(dept =>
    (lang === 'ar' ? dept.nameAr : dept.nameEn) === selectedDept
  );

  const handleDeptChange = (e) => {
    setSelectedDept(e.target.value);
    setSelectedClinic('');
  };

  const handleClinicChange = (e) => {
    setSelectedClinic(e.target.value);
  };

  const handleBooking = () => {
    if (!selectedDept || !selectedClinic) {
      alert(texts.pleaseSelect);
      return;
    }
    navigate('/clinic-doctors', {
      state: {
        deptName: selectedDept,
        clinicName: selectedClinic,
      }
    });
  };

  return (
    <div>
      {/* ── القسم الأصلي ── */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 pb-28">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${CoverBg})`,
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-800/40 to-slate-900/50" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="inline-block text-white text-xl md:text-2xl font-medium px-8 py-3 rounded-full"
              style={{
                background: 'linear-gradient(135deg, rgba(23,135,182,0.35), rgba(13,33,55,0.5))',
                border: '1px solid rgba(255,255,255,0.2)',
                backdropFilter: 'blur(12px)',
                letterSpacing: '0.04em',
                textShadow: '0 1px 8px rgba(0,0,0,0.3)'
              }}
            >
              {texts.tagline}
            </p>
          </div>

          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            <div className="w-full md:w-[420px] md:order-1">
              <div className="bg-white rounded-2xl shadow-2xl p-7 border border-gray-100">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">{texts.title}</h2>
                  <p className="text-gray-500 mt-1.5 text-sm">{texts.subtitle}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label
                      className="block text-sm font-medium text-gray-700 mb-1.5"
                      style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}
                    >
                      {texts.deptLabel}
                    </label>
                    <select
                      value={selectedDept}
                      onChange={handleDeptChange}
                      className={`w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-all hover:border-gray-300 ${
                        lang === 'ar' ? 'text-right' : 'text-left'
                      }`}
                    >
                      <option value="">{texts.selectDept}</option>
                      {departments.map((dept) => (
                        <option
                          key={dept.id}
                          value={lang === 'ar' ? dept.nameAr : dept.nameEn}
                        >
                          {lang === 'ar' ? dept.nameAr : dept.nameEn}
                        </option>
                      ))}
                    </select>
                  </div>

                  {selectedDepartment && (
                    <div className="animate-fadeIn">
                      <label
                        className="block text-sm font-medium text-gray-700 mb-1.5"
                        style={{ textAlign: lang === 'ar' ? 'right' : 'left' }}
                      >
                        {texts.clinicLabel}
                      </label>
                      <select
                        value={selectedClinic}
                        onChange={handleClinicChange}
                        className={`w-full px-4 py-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white transition-all hover:border-gray-300 ${
                          lang === 'ar' ? 'text-right' : 'text-left'
                        }`}
                      >
                        <option value="">{texts.selectClinic}</option>
                        {selectedDepartment[`clinics${lang === 'ar' ? 'Ar' : 'En'}`].map((clinic, index) => (
                          <option key={index} value={clinic}>
                            {clinic}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <button
                    onClick={handleBooking}
                    disabled={!selectedClinic}
                    className={`w-full py-3.5 rounded-xl text-base font-semibold transition-all duration-300 mt-2 ${
                      selectedClinic
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl active:scale-[0.98]'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {texts.bookNow}
                  </button>
                </div>
              </div>
            </div>

            {/* الدائرة والصور */}
            <div className="w-full md:w-auto md:order-2 flex justify-center">
              <div className="relative w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] md:w-[480px] md:h-[480px] lg:w-[520px] lg:h-[520px] mx-auto">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 500 500"
                  fill="none"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 250, 250 m -180, 0 a 180,180 0 1,1 360,0 a 180,180 0 1,1 -360,0"
                      fill="none"
                      stroke="#e2e8f0"
                      strokeWidth="4"
                      opacity="0.6"
                    />
                  </defs>
                  <use href="#circlePath" />
                  <g className="red-pulse">
                    <animateMotion dur="25s" repeatCount="indefinite" rotate="auto">
                      <mpath href="#circlePath" />
                    </animateMotion>
                    <circle cx="0" cy="0" r="28" fill="#ef4444" opacity="0.95" />
                    <circle cx="0" cy="0" r="18" fill="#dc2626" opacity="0.9" />
                    <circle cx="0" cy="0" r="10" fill="#ffffff" opacity="0.3" />
                  </g>
                  <g className="image-float">
                    <foreignObject x="185" y="12" width="125" height="125">
                      <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white">
                        <img src="https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Doctor" className="w-full h-full object-cover" />
                      </div>
                    </foreignObject>
                  </g>
                  <g className="image-float" style={{ animationDelay: '0.5s' }}>
                    <foreignObject x="345" y="245" width="125" height="125">
                      <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white">
                        <img src="https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Medical Facility" className="w-full h-full object-cover" />
                      </div>
                    </foreignObject>
                  </g>
                  <g className="image-float" style={{ animationDelay: '1s' }}>
                    <foreignObject x="35" y="245" width="125" height="125">
                      <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-white">
                        <img src="https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Patient Care" className="w-full h-full object-cover" />
                      </div>
                    </foreignObject>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn { animation: fadeIn 0.3s ease-out; }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          .image-float { animation: float 3s ease-in-out infinite; }
          @keyframes pulse-red {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          .red-pulse circle:first-child { animation: pulse-red 2s ease-in-out infinite; }
          @keyframes tickerScrollLTR {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes tickerScrollRTL {
  0%   { transform: translateX(0); }
  100% { transform: translateX(50%); }
}
.news-ticker-track-ltr { animation: tickerScrollLTR 38s linear infinite; }
.news-ticker-track-rtl { animation: tickerScrollRTL 38s linear infinite; }
.news-ticker-track-ltr:hover, .news-ticker-track-rtl:hover { animation-play-state: paused; }
        `}</style>

        {/* ── شريط أخبار مصغر بصور متحركة في نهاية الخلفية ── */}
        <div className="absolute bottom-0 left-0 right-0 z-20" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(10, 28, 50, 0.65)',
              backdropFilter: 'blur(10px)',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              overflow: 'hidden',
              height: '72px',
            }}
          >
            {/* badge */}
            <div
              style={{
                flexShrink: 0,
                background: '#1787b6',
                color: '#fff',
                fontSize: '11px',
                fontWeight: '800',
                padding: '0 16px',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                letterSpacing: '0.6px',
                whiteSpace: 'nowrap',
                gap: '6px',
                fontFamily: "'Cairo','Tajawal',sans-serif",
              }}
            >
              <span style={{ fontSize: '14px' }}>📰</span>
              {lang === 'ar' ? 'آخر الأخبار' : 'Latest News'}
            </div>

            <div style={{ width: '1px', height: '100%', background: 'rgba(255,255,255,0.15)', flexShrink: 0 }} />

            {/* scrolling image cards */}
            <div style={{ flex: 1, overflow: 'hidden', position: 'relative', height: '100%' }}>
              <div
                className={lang === 'ar' ? 'news-ticker-track-rtl' : 'news-ticker-track-ltr'}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  height: '100%',
                  width: 'max-content',
                }}
              >
                {[...sliderNews, ...sliderNews].map((item, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedNews(item)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '0 18px',
                      height: '100%',
                      borderRight: '1px solid rgba(255,255,255,0.1)',
                      cursor: 'pointer',
                      flexShrink: 0,
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  >
                    <img
                      src={item.img}
                      alt=""
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '8px',
                        objectFit: 'cover',
                        objectPosition: 'top',
                        flexShrink: 0,
                        border: '1px solid rgba(255,255,255,0.2)',
                      }}
                    />
                    <span
                      style={{
                        color: 'rgba(255,255,255,0.9)',
                        fontSize: '12px',
                        fontWeight: '600',
                        fontFamily: "'Cairo','Tajawal',sans-serif",
                        lineHeight: '1.4',
                        maxWidth: '230px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                      }}
                    >
                      {lang === 'ar' ? item.titleAr : item.titleEn}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Popup تفاصيل الخبر ── */}
      {selectedNews && (
        <div
          onClick={() => setSelectedNews(null)}
          dir={lang === 'ar' ? 'rtl' : 'ltr'}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(10, 28, 50, 0.65)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 100,
            padding: '20px',
            animation: 'fadeIn 0.25s ease-out',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#fff',
              borderRadius: '20px',
              maxWidth: '560px',
              width: '100%',
              maxHeight: '85vh',
              overflowY: 'auto',
              boxShadow: '0 20px 60px rgba(0,0,0,0.35)',
              fontFamily: "'Cairo','Tajawal',sans-serif",
            }}
          >
            {/* image */}
            <div style={{ position: 'relative', height: '220px', borderRadius: '20px 20px 0 0', overflow: 'hidden' }}>
              <img
                src={selectedNews.img}
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />
              <button
                onClick={() => setSelectedNews(null)}
                style={{
                  position: 'absolute',
                  top: '14px',
                  [lang === 'ar' ? 'left' : 'right']: '14px',
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  border: 'none',
                  background: 'rgba(0,0,0,0.45)',
                  color: '#fff',
                  fontSize: '18px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(4px)',
                }}
              >
                ✕
              </button>
            </div>

            {/* content */}
            <div style={{ padding: '24px 26px 30px', textAlign: lang === 'ar' ? 'right' : 'left' }}>
              <p style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '600', marginBottom: '10px' }}>
                🗓{' '}
                {new Date(selectedNews.date).toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US', {
                  year: 'numeric', month: 'long', day: 'numeric',
                })}
              </p>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0d2137', lineHeight: '1.6', marginBottom: '14px' }}>
                {lang === 'ar' ? selectedNews.titleAr : selectedNews.titleEn}
              </h3>
              <p style={{ fontSize: '14.5px', color: '#4a6d85', lineHeight: '1.9', fontWeight: '500' }}>
                {lang === 'ar' ? selectedNews.summaryAr : selectedNews.summaryEn}
              </p>

              {selectedNews.tags && (
                <div style={{ display: 'flex', gap: '8px', marginTop: '18px', flexWrap: 'wrap' }}>
                  {selectedNews.tags.map(tag => (
                    <span key={tag} style={{
                      fontSize: '10px', fontWeight: '700', color: '#1787b6',
                      background: '#e8f4fb', borderRadius: '50px', padding: '4px 12px', letterSpacing: '0.5px',
                    }}>{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationSection;
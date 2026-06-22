import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CoverBg from "../assets/cover.jpeg"

// ── استيراد صور الأخبار - العدد 1، السنة الأولى ──────────────────────────────
import news1 from '../assets/news_images/news_1.png';
import news2 from '../assets/news_images/news_2.png';
import news3 from '../assets/news_images/news_3.png';
import news4 from '../assets/news_images/news_4.png';
import news5 from '../assets/news_images/news_5.png';
import news6 from '../assets/news_images/news_6.png';
import news7 from '../assets/news_images/news_7.png';
import news8 from '../assets/news_images/news_8.png';

// ── بيانات أخبار العدد 1 - الأحد 1 مايو 2026 ─────────────────────────────────
const sliderNews = [
  {
    id: 1,
    img: news1,
    titleAr: 'رسالة الرئيس التنفيذي - د. راجيف ميسرا',
    titleEn: 'CEO Message - Dr. Rajeev Misra',
    summaryAr: 'في مستشفى تخصصي نجران، لا نؤمن بالعمل الروتيني... بل نؤمن بإحداث تغيير ملموس. كل قسم، وكل موظف، وكل لحظة جهد تُبذل في هذه المؤسسة، هي جزء من رسالة إنسانية عظيمة تُنقذ الأرواح وتُعطي الأمل. المرحلة القادمة تتطلب منا جميعًا مزيدًا من الشغف والابتكار والتميز نحو أن نصبح نموذجًا رائدًا في الرعاية الصحية والخدمة الإنسانية والجودة التشغيلية.',
    summaryEn: 'At Najran Specialist Hospital, we do not believe in routine work… but in making tangible change. Every department, every employee, and every effort exerted in this institution is part of a great humanitarian mission that saves lives and gives hope. The next phase requires all of us to show more passion, innovation, and excellence to become a leading model in healthcare, humanitarian service, and operational quality.',
    date: '2026-05-01',
    edition: 'العدد 1 - السنة الأولى / الأحد 1 مايو 2026',
  },
  {
    id: 2,
    img: news2,
    titleAr: 'زيارة شركة لارسن آند تيبرو العربية السعودية (طاقة)',
    titleEn: 'Visit of Larsen & Toubro Arabia (Energy)',
    summaryAr: 'تأكيدًا لجودة خدماتنا الطبية، تشرفنا اليوم بزيارة د. خرصان حسين آل سالم من شركة لارسن آند تيبرو العربية السعودية (طاقة) واستقبله أ. علي القاضي رئيس مجلس الإدارة ومعه قيادات المستشفى وذلك لبحث سبل التعاون المشترك وكيفية الاستفادة من خدماتنا الطبية المميزة.',
    summaryEn: 'Affirming the quality of our medical services, we were honored today by a visit from Dr. Khorsan Hussein Al Salem from Larsen & Toubro Arabia (Energy). He was received by A. Ali Al-Qadi, Chairman of the Board, along with hospital leadership to discuss avenues of mutual cooperation and how to benefit from our distinguished medical services.',
    date: '2026-05-01',
    edition: 'العدد 1 - السنة الأولى / الأحد 1 مايو 2026',
  },
  {
    id: 3,
    img: news3,
    titleAr: 'شراكة طبية تعليمية لتعزيز كفاءة الكوادر الصحية في نجران',
    titleEn: 'Medical Educational Partnership to Enhance Healthcare Competency in Najran',
    summaryAr: 'تم توقيع اتفاقية تعاون بين مستشفى تخصصي نجران وكلية الغد للعلوم الطبية التطبيقية، بهدف تدريب طلاب الكلية على أحدث البروتوكولات الطبية العالمية داخل المستشفى. حضر التوقيع رئيس مجلس الإدارة أ. علي القاضي، والمدير التنفيذي د. رجيف ميسرا، وعميد الكلية د. حسن علي بن غلفان دغرير.',
    summaryEn: 'A cooperation agreement was signed between Najran Specialist Hospital and Al-Ghad College of Applied Medical Sciences, with the aim of training college students in the latest international medical protocols within the hospital. The signing was attended by the Chairman A. Ali Al-Qadi, CEO Dr. Rajeev Misra, and Dean Dr. Hassan Ali bin Ghulfan Daghreer.',
    date: '2026-05-01',
    edition: 'العدد 1 - السنة الأولى / الأحد 1 مايو 2026',
  },
  {
    id: 4,
    img: news4,
    titleAr: 'تعزيز الوعي بالامتثال الوقائي في المنشآت الصحية',
    titleEn: 'Raising Awareness of Preventive Compliance in Healthcare Facilities',
    summaryAr: 'نظم مستشفى تخصصي نجران، بالتعاون مع فرع وزارة الصحة بنجران، فعالية توعوية عن الامتثال الوقائي بالمنشآت الصحية، وذلك في بهو الاستقبال الرئيسي بالمستشفى، بحضور عدد من الزائرين والإداريين.',
    summaryEn: 'Najran Specialist Hospital organized, in cooperation with the Ministry of Health branch in Najran, an awareness event about preventive compliance in healthcare facilities, held in the main reception lobby of the hospital, attended by a number of visitors and administrators.',
    date: '2026-05-01',
    edition: 'العدد 1 - السنة الأولى / الأحد 1 مايو 2026',
  },
  {
    id: 5,
    img: news5,
    titleAr: 'مستشفى تخصصي نجران يشارك مع هيئة الصحة العامة (وقاية) في فعاليات الأسبوع العالمي للتحصينات',
    titleEn: 'Najran Specialist Hospital Participates with Public Health Authority (Wiqaya) in World Immunization Week',
    summaryAr: 'شارك مستشفى تخصصي نجران في فعاليات الأسبوع العالمي للتحصينات بالتعاون مع هيئة الصحة العامة (وقاية)، كما احتفل قسم المختبر بمستشفى تخصصي نجران باليوم العالمي للمختبرات الطبية، وحضر الحفل رئيس مجلس الادارة أ. علي القاضي والمدير التنفيذي د. رجيف ميسرا والعديد من منسوبي المختبر وفريق الإدارة.',
    summaryEn: 'Najran Specialist Hospital participated in the World Immunization Week activities in cooperation with the Public Health Authority (Wiqaya). The hospital laboratory department also celebrated World Medical Laboratory Day, attended by Chairman A. Ali Al-Qadi, CEO Dr. Rajeev Misra, and many laboratory staff and administration team.',
    date: '2026-05-01',
    edition: 'العدد 1 - السنة الأولى / الأحد 1 مايو 2026',
  },
  {
    id: 6,
    img: news6,
    titleAr: 'أكاديمية مستشفى تخصصي نجران الصحية - دورة أساسيات الانعاش القلبي الرئوي',
    titleEn: 'Najran Specialist Hospital Health Academy - CPR Fundamentals Course',
    summaryAr: 'أقامت أكاديمية مستشفى تخصصي نجران دورة تدريبية متخصصة في الانعاش القلبي الرئوي بهدف رفع كفاءة الكوادر الطبية وتعزيز سرعة الاستجابة للحالات الطارئة، كما نُظمت دورة أساسيات الانعاش القلبي الرئوي بالتعاون بين مستشفى تخصصي نجران وهيئة الهلال الأحمر فرع نجران.',
    summaryEn: 'Najran Specialist Hospital Health Academy held a specialized training course in cardiopulmonary resuscitation (CPR) to enhance medical staff competency and improve emergency response speed. A CPR fundamentals course was also organized in cooperation between Najran Specialist Hospital and the Saudi Red Crescent Authority, Najran branch.',
    date: '2026-05-01',
    edition: 'العدد 1 - السنة الأولى / الأحد 1 مايو 2026',
  },
  {
    id: 7,
    img: news7,
    titleAr: 'إنجاز طبي - د. عبدالرحمن العمري',
    titleEn: 'Medical Achievement - Dr. Abdulrahman Al-Omari',
    summaryAr: 'أجرى مستشفى تخصصي نجران عملية تكميم لسيدة تعاني من سمنة مفرطة، حيث اكتشف الفريق المعالج أن أعضاءها الداخلية معكوسة بشكل كامل (الكبد في الجهة اليسرى والمعدة مع الطحال في الجانب الأيمن). تمكن فريق جراحة السمنة بقيادة الدكتور عبد الرحمن العمري من إجراء عملية تكميم المعدة خلال أقل من ساعة وخروج المريضة في اليوم الأول بصحة جيدة. والجدير بالذكر أن مستشفى تخصصي نجران هو المركز الطبي الوحيد المعتمد والأميز على مستوى منطقة نجران في التعامل مع حالات السمنة خاصة.',
    summaryEn: 'Najran Specialist Hospital performed a sleeve gastrectomy on a woman with morbid obesity, where the medical team discovered that her internal organs were completely reversed (liver on the left side, stomach and spleen on the right). The bariatric surgery team led by Dr. Abdulrahman Al-Omari successfully performed the procedure in less than an hour, and the patient was discharged on the first day in good health. Notably, Najran Specialist Hospital is the only accredited and distinguished medical center in the Najran region for treating obesity cases.',
    date: '2026-05-01',
    edition: 'العدد 1 - السنة الأولى / الأحد 1 مايو 2026',
  },
  {
    id: 8,
    img: news8,
    titleAr: 'الموظفيين المثاليين لشهر أبريل',
    titleEn: 'Employees of the Month - April',
    summaryAr: 'يُكرم مستشفى تخصصي نجران موظفيه المثاليين لشهر أبريل تقديرًا لجهودهم وتميزهم في العمل من مختلف الأقسام: أحمد النجراني (الإدارة الطبية)، ريم الغامدي (قسم التمريض)، محمد فراز (قسم المالية)، عبدالله عوض (قسم الأمن)، خولين بيجك (قسم التمريض)، م. محمد عبدالله (قسم الصيانة)، محمد خليل (قسم تقنية المعلومات)، ماي سراج (مركز الاتصال)، نور محمد (قسم الصيانة)، مارسي غريس (قسم الجودة)، أكشايا بيجو (قسم التمريض)، د. فاديم (الإدارة الطبية).',
    summaryEn: 'Najran Specialist Hospital honors its ideal employees for the month of April in recognition of their efforts and excellence from various departments: Ahmed Al-Najrani (Medical Administration), Reem Al-Ghamdi (Nursing), Muhammad Faraz (Finance), Abdullah Awad (Security), Kholeen Bejec (Nursing), Eng. Mohammed Abdullah (Maintenance), Mohammed Khaleel (IT), May Seraj (Call Center), Noor Mohammed (Maintenance), Marcy Grece (Quality), Akshaya Biju (Nursing), Dr. Vadim (Medical Administration).',
    date: '2026-05-01',
    edition: 'العدد 1 - السنة الأولى / الأحد 1 مايو 2026',
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
      pleaseSelect: "Please select a department and clinic first",
      editionLabel: "Issue 1 · Year One · Sunday, May 1, 2026",
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
      pleaseSelect: "يرجى اختيار القسم والعيادة أولاً",
      editionLabel: "العدد 1 · السنة الأولى · الأحد 1 مايو 2026",
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
          .news-ticker-track-ltr { animation: tickerScrollLTR 50s linear infinite; }
          .news-ticker-track-rtl { animation: tickerScrollRTL 50s linear infinite; }
          .news-ticker-track-ltr:hover, .news-ticker-track-rtl:hover { animation-play-state: paused; }
        `}</style>

        {/* ── شريط أخبار مصغر بصور متحركة في نهاية الخلفية ── */}
        <div className="absolute bottom-0 left-0 right-0 z-20" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              background: 'rgba(10, 28, 50, 0.72)',
              backdropFilter: 'blur(10px)',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              overflow: 'hidden',
              height: '72px',
            }}
          >
            {/* badge العدد */}
            <div
              style={{
                flexShrink: 0,
                background: 'linear-gradient(135deg, #1787b6, #0d5a80)',
                color: '#fff',
                fontSize: '10px',
                fontWeight: '800',
                padding: '0 14px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                letterSpacing: '0.4px',
                whiteSpace: 'nowrap',
                gap: '2px',
                fontFamily: "'Cairo','Tajawal',sans-serif",
                minWidth: '90px',
              }}
            >
              <span style={{ fontSize: '13px' }}>📰</span>
              <span style={{ fontSize: '10px', fontWeight: '700' }}>
                {lang === 'ar' ? 'آخر الأخبار' : 'Latest News'}
              </span>
              <span style={{ fontSize: '8px', opacity: 0.75, fontWeight: '500' }}>
                {lang === 'ar' ? 'العدد 1 · مايو 2026' : 'Issue 1 · May 2026'}
              </span>
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
                      borderRight: lang === 'ar' ? 'none' : '1px solid rgba(255,255,255,0.1)',
                      borderLeft: lang === 'ar' ? '1px solid rgba(255,255,255,0.1)' : 'none',
                      cursor: 'pointer',
                      flexShrink: 0,
                      transition: 'background 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  >
                    {/* thumbnail الخبر */}
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      flexShrink: 0,
                      border: '2px solid rgba(23,135,182,0.5)',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
                    }}>
                      <img
                        src={item.img}
                        alt=""
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'top',
                        }}
                      />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      <span style={{
                        color: 'rgba(23,135,182,0.9)',
                        fontSize: '9px',
                        fontWeight: '700',
                        fontFamily: "'Cairo','Tajawal',sans-serif",
                        letterSpacing: '0.3px',
                      }}>
                        {lang === 'ar' ? item.edition : `Issue 1 · May 2026`}
                      </span>
                      <span
                        style={{
                          color: 'rgba(255,255,255,0.92)',
                          fontSize: '12px',
                          fontWeight: '600',
                          fontFamily: "'Cairo','Tajawal',sans-serif",
                          lineHeight: '1.4',
                          maxWidth: '240px',
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {lang === 'ar' ? item.titleAr : item.titleEn}
                      </span>
                    </div>
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
            background: 'rgba(10, 28, 50, 0.72)',
            backdropFilter: 'blur(8px)',
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
              maxWidth: '620px',
              width: '100%',
              maxHeight: '88vh',
              overflowY: 'auto',
              boxShadow: '0 24px 70px rgba(0,0,0,0.4)',
              fontFamily: "'Cairo','Tajawal',sans-serif",
            }}
          >
            {/* صورة الخبر الكاملة */}
            <div style={{ position: 'relative', borderRadius: '20px 20px 0 0', overflow: 'hidden' }}>
              <img
                src={selectedNews.img}
                alt=""
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  objectFit: 'contain',
                }}
              />
              {/* شريط العدد فوق الصورة */}
              <div style={{
                position: 'absolute',
                top: '14px',
                [lang === 'ar' ? 'right' : 'left']: '14px',
                background: 'linear-gradient(135deg, #1787b6, #0d5a80)',
                color: '#fff',
                fontSize: '10px',
                fontWeight: '700',
                padding: '4px 12px',
                borderRadius: '50px',
                backdropFilter: 'blur(4px)',
                fontFamily: "'Cairo','Tajawal',sans-serif",
              }}>
                {lang === 'ar' ? selectedNews.edition : `Issue 1 · Year One · May 1, 2026`}
              </div>
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
                  background: 'rgba(0,0,0,0.5)',
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

            {/* محتوى الخبر */}
            <div style={{ padding: '24px 28px 32px', textAlign: lang === 'ar' ? 'right' : 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <span style={{
                  fontSize: '11px',
                  fontWeight: '700',
                  color: '#1787b6',
                  background: '#e8f4fb',
                  borderRadius: '50px',
                  padding: '3px 12px',
                }}>
                  {lang === 'ar' ? 'مستشفى تخصصي نجران' : 'Najran Specialist Hospital'}
                </span>
                <p style={{ fontSize: '12px', color: '#94a3b8', fontWeight: '600', margin: 0 }}>
                  🗓{' '}
                  {new Date(selectedNews.date).toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US', {
                    year: 'numeric', month: 'long', day: 'numeric', weekday: 'long',
                  })}
                </p>
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '800',
                color: '#0d2137',
                lineHeight: '1.7',
                marginBottom: '16px',
              }}>
                {lang === 'ar' ? selectedNews.titleAr : selectedNews.titleEn}
              </h3>
              <p style={{
                fontSize: '14.5px',
                color: '#4a6d85',
                lineHeight: '2',
                fontWeight: '500',
              }}>
                {lang === 'ar' ? selectedNews.summaryAr : selectedNews.summaryEn}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationSection;
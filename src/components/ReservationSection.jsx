import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CoverBg from "../assets/cover.jpeg"

const ReservationSection = ({ currentLang }) => {
  const [selectedDept, setSelectedDept] = useState('');
  const [selectedClinic, setSelectedClinic] = useState('');
  const navigate = useNavigate();

  const t = {
    en: {
      title: "Book Your Appointment",
      subtitle: "Choose the appropriate department and clinic",
      tagline: "Elite doctors and advanced medical services at your service 24/7",
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

  // ── Navigate to ClinicDoctorsPage passing dept & clinic names ──────────────
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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
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
          <p className="text-white text-xl md:text-2xl font-medium">
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
      `}</style>
    </div>
  );
};

export default ReservationSection;
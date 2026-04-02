import React, { useState, useRef, useEffect } from 'react';
import { Download, FileText, Shield, Users } from 'lucide-react';

interface PatientsRightsProps {
  currentLang: string;
}

const PatientsRights: React.FC<PatientsRightsProps> = ({ currentLang }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const isAr = currentLang === 'ar';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const content = {
    ar: {
      title: 'حقوق المرضى',
      subtitle: 'نؤمن أن كرامة المريض وحقوقه أساس الرعاية الصحية',
      intro: 'في مستشفانا، نحرص على احترام حقوق كل مريض بشكل كامل، ونلتزم بتوفير بيئة رعاية آمنة، محترمة، وشفافة.',
      downloadText: 'تحميل وثيقة حقوق المرضى (PDF)',
      rights: [
        {
          icon: <Shield className="w-8 h-8" />,
          title: 'الحق في الرعاية الطبية المناسبة',
          desc: 'تلقي رعاية صحية آمنة وعالية الجودة دون تمييز.',
        },
        {
          icon: <Users className="w-8 h-8" />,
          title: 'الحق في الاحترام والكرامة',
          desc: 'المعاملة باحترام وخصوصية، مع الحفاظ على سرية المعلومات الطبية.',
        },
        {
          icon: <FileText className="w-8 h-8" />,
          title: 'الحق في المعلومات والموافقة',
          desc: 'الحصول على شرح واضح عن الحالة والعلاج والمخاطر قبل الموافقة.',
        },
        {
          icon: <Download className="w-8 h-8" />,
          title: 'الحق في الشكوى والتعويض',
          desc: 'تقديم شكوى وتلقي رد سريع ومنصف في حال وجود أي مخالفة.',
        },
      ],
    },
    en: {
      title: "Patients' Rights",
      subtitle: 'We believe that patient dignity and rights are the foundation of healthcare',
      intro: 'At our hospital, we are fully committed to respecting every patient’s rights and providing a safe, respectful, and transparent care environment.',
      downloadText: 'Download Patients Rights Document (PDF)',
      rights: [
        {
          icon: <Shield className="w-8 h-8" />,
          title: 'Right to Appropriate Medical Care',
          desc: 'Receive safe and high-quality healthcare without discrimination.',
        },
        {
          icon: <Users className="w-8 h-8" />,
          title: 'Right to Respect and Dignity',
          desc: 'Be treated with respect, privacy, and confidentiality of medical information.',
        },
        {
          icon: <FileText className="w-8 h-8" />,
          title: 'Right to Information and Consent',
          desc: 'Receive clear explanation about your condition, treatment, and risks before giving consent.',
        },
        {
          icon: <Download className="w-8 h-8" />,
          title: 'Right to Complain and Redress',
          desc: 'File a complaint and receive a prompt and fair response in case of any violation.',
        },
      ],
    },
  };

  const t = content[isAr ? 'ar' : 'en'];

  return (
    <section
      ref={sectionRef}
      className="py-20"
      style={{ background: 'linear-gradient(135deg, #f0f7fb 0%, #e8f4f9 100%)' }}
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header with ECG Pulse */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            {t.subtitle}
          </p>

          {/* ECG Pulse - نفس الستايل المستخدم في OurGoal */}
          <div className="flex justify-center">
            <svg
              viewBox="0 0 300 60"
              width="300"
              height="60"
              xmlns="http://www.w3.org/2000/svg"
              style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.7s ease' }}
            >
              <defs>
                <filter id="glow-rights">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <mask id="revealMask-rights">
                  <rect x="0" y="0" width="300" height="60" fill="white">
                    <animate attributeName="x" from="-300" to="300" dur="2.4s" repeatCount="indefinite" />
                  </rect>
                </mask>
              </defs>
              <line x1="0" y1="30" x2="300" y2="30" stroke="#1787b6" strokeWidth="0.5" strokeOpacity="0.2" />
              <path
                d="M 0,30 L 105,30 L 112,30 L 117,22 L 122,30 L 128,30 L 133,10 L 141,50 L 150,5 L 158,50 L 165,30 L 170,30 L 175,22 L 180,30 L 300,30"
                fill="none"
                stroke="#1787b6"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow-rights)"
                mask="url(#revealMask-rights)"
              />
              <circle r="4" fill="#1787b6" filter="url(#glow-rights)">
                <animateMotion
                  dur="2.4s"
                  repeatCount="indefinite"
                  path="M 0,30 L 105,30 L 112,30 L 117,22 L 122,30 L 128,30 L 133,10 L 141,50 L 150,5 L 158,50 L 165,30 L 170,30 L 175,22 L 180,30 L 300,30"
                />
              </circle>
            </svg>
          </div>
        </div>

        <div className={`flex flex-col lg:flex-row ${isAr ? '' : 'lg:flex-row-reverse'} gap-12 items-center`}>
          {/* Image Section */}
          <div className="lg:w-5/12 w-full">
            <div className="rounded-3xl overflow-hidden shadow-2xl relative">
              <img
                src="https://images.pexels.com/photos/7579832/pexels-photo-7579832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt={isAr ? "حقوق المرضى" : "Patients Rights"}
                className="w-full h-full object-cover"
                style={{ aspectRatio: '16/10' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-1 bg-[#1787b6] rounded" />
                  <span className="uppercase tracking-widest text-sm font-medium">
                    {isAr ? 'رعاية محترمة' : 'Respectful Care'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-7/12 w-full">
            <p className="text-lg leading-relaxed text-gray-700 mb-10">
              {t.intro}
            </p>

            {/* Rights List */}
            <div className="grid md:grid-cols-2 gap-6">
              {t.rights.map((right, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group"
                >
                  <div className="text-[#1787b6] mb-5 group-hover:scale-110 transition-transform">
                    {right.icon}
                  </div>
                  <h3 className="font-semibold text-xl mb-3 text-gray-800">
                    {right.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {right.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Download PDF Button */}
            <div className="mt-12 flex justify-center lg:justify-start">
              <a
                href="../assets/rights.pdf"
                download="حقوق_المرضى.pdf"
                className="group flex items-center gap-4 bg-[#1787b6] hover:bg-[#146a94] transition-all text-white font-medium text-lg px-10 py-5 rounded-2xl shadow-lg"
              >
                <Download className="w-7 h-7 group-hover:-translate-y-0.5 transition-transform" />
                <div>
                  <div>{t.downloadText}</div>
                  <div className="text-sm opacity-80">PDF - {isAr ? 'حقوق المرضى' : "Patients' Rights"}</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientsRights;
import React, { useEffect, useRef, useState } from 'react';
// @ts-ignore
import AboutImg from "../assets/about.jpeg"

interface AboutUsSectionProps {
  currentLang: string;
}

const AboutUsSection: React.FC<AboutUsSectionProps> = ({ currentLang }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const content = {
    ar: {
      title: 'رعايتنا تغنيك عن السفر',
      text: `هذا هو شعارنا اليوم الذي بعون وتوفيق من الله وهمم فريق العمل بالمستشفى ومنذ ٨ سنوات مضت حرصنا أنا وفريقي على ان يكون تقديم الخدمات الطبية على أعلى المعايير الصحية وذلك بدراسة احتياجات المنطقة والأسباب التي تدعو أهالي منطقة نجران إلى السفر خارج المنطقة للبحث عن العلاج.
قمنا بتوفير كل ما يلزم من كوادر طبية متخصصة في جميع فروع الطب وتوفير التجهيزات الطبية والعلمية الفريدة من نوعها والتي تتماشى مع متطلبات الكشف والعلاج والتأهيل الطبي وتطبيق أحدث البروتوكولات العلمية عبر فريقنا الطبي المميز.
ونحمد الله على ما وصلنا إليه من اعتمادات تؤكد جودة تقديم الخدمات الطبية مثل (سباهي) و (جونز هوبكنز) ونعدكم لبذل المزيد من الجهد للوصول للأفضل بإذن الله.`,
      signature: 'رئيس مجلس الإدارة',
      name: 'أ. علي بن ناصر القاضي'
    },
    en: {
      title: 'Our Care Saves You From Traveling',
      text: `This is our motto today, which, with God's help and the efforts of our hospital team, we have been committed to for the past 8 years. My team and I have been keen to provide medical services at the highest health standards by studying the needs of the region and the reasons that lead the people of the Najran region to travel outside the area to seek treatment.
We have provided all the necessary specialized medical staff in all branches of medicine and unique medical and scientific equipment that aligns with the requirements of detection, treatment, and medical rehabilitation, applying the latest scientific protocols through our distinguished medical team.
We thank God for the accreditations we have achieved that confirm the quality of medical services, such as (CBAHI) and (Johns Hopkins), and we promise to make more effort to reach the best, God willing.`,
      signature: 'Chairman of the Board',
      name: 'Mr. Ali bin Nasser Al-Qadi'
    }
  };

  const t = content[currentLang as keyof typeof content];
  const isAr = currentLang === 'ar';

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
            {t.title}
          </h2>

          {/* ECG Pulse SVG Animation */}
          <div className="flex justify-center">
            <svg
              viewBox="0 0 300 60"
              width="300"
              height="60"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              <defs>
                {/* Glowing effect for the pulse line */}
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/*
                  Mask that sweeps left-to-right to reveal/hide the line,
                  creating the "drawing" ECG effect.
                */}
                <mask id="revealMask">
                  <rect x="0" y="0" width="300" height="60" fill="white">
                    <animate
                      attributeName="x"
                      from="-300"
                      to="300"
                      dur="2.4s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </mask>

                {/* Trailing fade mask so the tail disappears */}
                <mask id="trailMask">
                  <linearGradient id="trailGrad" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="black" />
                    <stop offset="60%" stopColor="white" />
                    <stop offset="100%" stopColor="white" />
                    <animateTransform
                      attributeName="gradientTransform"
                      type="translate"
                      from="-1 0"
                      to="1 0"
                      dur="2.4s"
                      repeatCount="indefinite"
                      additive="sum"
                    />
                  </linearGradient>
                  <rect x="0" y="0" width="300" height="60" fill="url(#trailGrad)" />
                </mask>
              </defs>

              {/*
                ECG path:
                - Flat baseline segments on left and right
                - Classic PQRST waveform in the middle
                The path spans x=0 to x=300, centered vertically at y=30
              */}
              <path
                d="
                  M 0,30
                  L 105,30
                  L 112,30
                  L 117,22
                  L 122,30
                  L 128,30
                  L 133,10
                  L 141,50
                  L 150,5
                  L 158,50
                  L 165,30
                  L 170,30
                  L 175,22
                  L 180,30
                  L 300,30
                "
                fill="none"
                stroke="#1787b6"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
                mask="url(#revealMask)"
              />

              {/* Static dim baseline so the track is always visible */}
              <line
                x1="0" y1="30"
                x2="300" y2="30"
                stroke="#1787b6"
                strokeWidth="0.5"
                strokeOpacity="0.2"
              />

              {/* Moving dot at the tip of the pulse */}
              <circle r="4" fill="#1787b6" filter="url(#glow)">
                {/* Follow the same path as the stroke */}
                <animateMotion
                  dur="2.4s"
                  repeatCount="indefinite"
                  path="
                    M 0,30
                    L 105,30
                    L 112,30
                    L 117,22
                    L 122,30
                    L 128,30
                    L 133,10
                    L 141,50
                    L 150,5
                    L 158,50
                    L 165,30
                    L 170,30
                    L 175,22
                    L 180,30
                    L 300,30
                  "
                />
              </circle>
            </svg>
          </div>
        </div>

        {/* Content */}
        <div
          className={`flex flex-col ${isAr ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}
        >
          {/* Text block */}
          <div
            className="lg:w-1/2 space-y-6"
            style={{ direction: isAr ? 'rtl' : 'ltr' }}
          >
            <div>
              <p
                className="text-gray-700 leading-relaxed text-lg whitespace-pre-line"
              >
                {t.text}
              </p>
            </div>

            {/* Signature */}
            <div className="pt-6 border-t-2 border-[#1787b6]">
              <p className="text-[#1787b6] font-semibold text-lg mb-1">
                {t.signature}
              </p>
              <p className="text-gray-800 font-bold text-xl">
                {t.name}
              </p>
            </div>
          </div>

          {/* Image block */}
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={AboutImg}
                alt="Hospital"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1787b6]/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
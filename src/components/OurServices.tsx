import React, { useEffect, useRef, useState } from 'react';

interface OurServicesProps {
  currentLang: string;
}

const content = {
  ar: {
    sectionLabel: 'خدماتنا الطبية',
    subtitle: 'نركز على جودة خدماتنا الطبية',
    description: 'تحرص إدارة المستشفى على تقديم أفضل البروتوكولات العلمية العلاجية من خلال توفير الكوادر الطبية المؤهلة مدعمة بأفضل التجهيزات الطبية التي ننفرد بها في منطقة نجران.',
    services: [
      {
        image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&h=600&fit=crop',
        title: 'عيادات الأماكن النائية والمصانع',
        content: 'أفضل خدمات الرعاية الصحية التي تستحقها، نهج فريد للتوظيف العادل مدعومًا بأفضل وأرقى أنواع التدريب والتطوير المهني المستمر لضمان التميز والنمو. تم اعتماد المستشفى كأول مستشفى خارج المنطقة الشرقية في الحصول على اعتماد جونز هوبكنز أرامكو للرعاية الصحية. لا يقتصر مفهومنا على تقديم الإسعافات الأولية والرعاية السريرية العامة فحسب، بل يشمل أيضًا تكوين بيئة صحية آمنة والعقلية والجسدية لأي فرد.',
      },
      {
        image: 'https://ak.picdn.net/shutterstock/videos/1051617745/thumb/1.jpg?ip=x480',
        title: 'مركز جراحات السمنة',
        content: 'المركز الوحيد المعتمد لجراحات السمنة المفرطة في منطقة نجران. يضم نخبة من أفضل الجراحين:\n• د. سعيد السريعي — استشاري الجراحة العامة وجراحات السمنة بالمنظار\n• د. عبدالرحمن العمري — استشاري الجراحة العامة وجراحات السمنة بالمنظار وجراحات الثدي\n\nيضم الوحدات التالية: وحدة التغذية، وحدة جراحات السمنة المفرطة بالمنظار، وحدة الدعم السلوكي المعرفي لعلاج آثار ومضاعفات السمنة.',
      },
      {
        image: 'https://images.unsplash.com/photo-1559757175-3d2b2c2c0c0e?w=800&h=600&fit=crop',
        title: 'تقنية الريزيوم',
        content: 'نتميز بأننا المستشفى الوحيد بمنطقة نجران الذي يعالج تضخم البروستاتا بالتبخير، حيث قمنا بتوفير جهاز ريزيوم — أحد أفضل تقنيات علاج تضخم البروستاتا الحميد بالتبخير وبدون جراحة وبدون ألم. نحن المستشفى الخاص الوحيد الذي يطبق هذه التقنية في المنطقة بواسطة نخبة من الاستشاريين في جراحة المسالك البولية. كما يضم المركز خدمات طبية متكاملة لأمراض وجراحات المسالك البولية وأمراض وجراحات الذكورة.',
      },
    ],
  },
  en: {
    sectionLabel: 'Our Medical Services',
    subtitle: 'Focused on the quality of our medical services',
    description: 'Hospital management is committed to providing the best scientific treatment protocols through qualified medical staff supported by the finest medical equipment unique to the Najran region.',
    services: [
      {
        image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&h=600&fit=crop',
        title: 'Remote Area & Industrial Clinics',
        content: 'The best healthcare services you deserve — a unique approach to fair employment supported by the finest continuous professional training and development. The hospital is accredited as the first hospital outside the Eastern Province to receive Johns Hopkins Aramco Healthcare accreditation. Our concept extends beyond first aid and general clinical care to include building a safe, healthy environment — mentally and physically — for every individual.',
      },
      {
        image: 'https://ak.picdn.net/shutterstock/videos/1051617745/thumb/1.jpg?ip=x480',
        title: 'Obesity Surgery Center',
        content: 'The only accredited center for morbid obesity surgery in the Najran region. It includes an elite group of surgeons:\n• Dr. Saeed Al-Surayi — Consultant in General & Laparoscopic Obesity Surgery\n• Dr. Abdulrahman Al-Omari — Consultant in General, Laparoscopic Obesity & Breast Surgery\n\nUnits include: Nutrition Unit, Laparoscopic Obesity Surgery Unit, and Cognitive Behavioral Support Unit for obesity complications.',
      },
      {
        image: 'https://images.unsplash.com/photo-1559757175-3d2b2c2c0c0e?w=800&h=600&fit=crop',
        title: 'Rezum Technology',
        content: 'We are the only hospital in the Najran region treating prostate enlargement with steam therapy using the Rezum device — one of the best technologies for treating benign prostatic hyperplasia without surgery or pain. We are the only private hospital applying this technique in the region through a team of urology consultants. The center also offers comprehensive medical services for urological and male reproductive conditions.',
      },
    ],
  },
};

const OurServices: React.FC<OurServicesProps> = ({ currentLang }) => {
  const isAr = currentLang === 'ar';
  const t = content[isAr ? 'ar' : 'en'];
  
  const [activeCard, setActiveCard] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animating, setAnimating] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const activeColor = '#1787b6';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const handleCardClick = (idx: number) => {
    if (idx === activeCard || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveCard(idx);
      setAnimating(false);
    }, 250);
  };

  const active = t.services[activeCard];

  return (
    <section
      ref={sectionRef}
      dir={isAr ? 'rtl' : 'ltr'}
      style={{
        padding: '80px 0',
        background: 'linear-gradient(160deg, #f0f7fb 0%, #ffffff 50%, #e8f4f9 100%)',
        overflow: 'hidden',
      }}
    >
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '60px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.6s ease',
        }}>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 50px)',
            fontWeight: '800',
            color: '#0d2137',
            margin: '0 0 16px',
          }}>
            {t.sectionLabel}
          </h2>

          {/* ECG Pulse Line */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <svg viewBox="0 0 300 60" width="300" height="60" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="glow-srv">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <mask id="reveal-srv">
                  <rect x="0" y="0" width="300" height="60" fill="white">
                    <animate attributeName="x" from="-300" to="300" dur="2.8s" repeatCount="indefinite" />
                  </rect>
                </mask>
              </defs>
              <line x1="0" y1="30" x2="300" y2="30" stroke="#1787b6" strokeWidth="0.5" strokeOpacity="0.2" />
              <path
                d="M 0,30 L 105,30 L 112,30 L 117,22 L 122,30 L 128,30 L 133,10 L 141,50 L 150,5 L 158,50 L 165,30 L 170,30 L 175,22 L 180,30 L 300,30"
                fill="none" stroke="#1787b6" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round"
                filter="url(#glow-srv)" mask="url(#reveal-srv)"
              />
              <circle r="4" fill="#1787b6" filter="url(#glow-srv)">
                <animateMotion dur="2.8s" repeatCount="indefinite"
                  path="M 0,30 L 105,30 L 112,30 L 117,22 L 122,30 L 128,30 L 133,10 L 141,50 L 150,5 L 158,50 L 165,30 L 170,30 L 175,22 L 180,30 L 300,30"
                />
              </circle>
            </svg>
          </div>

          <p style={{
            fontSize: '17px',
            fontWeight: '700',
            color: '#1787b6',
            margin: '0 0 10px',
          }}>
            {t.subtitle}
          </p>
          <p style={{
            fontSize: '15px',
            color: '#6b7280',
            maxWidth: '640px',
            margin: '0 auto',
            lineHeight: '1.8',
          }}>
            {t.description}
          </p>
        </div>

        {/* Service Tabs */}
        <div style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '32px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.6s ease 0.2s',
        }}>
          {t.services.map((srv, idx) => (
            <button
              key={idx}
              onClick={() => handleCardClick(idx)}
              style={{
                padding: '14px 28px',
                borderRadius: '50px',
                border: `2px solid ${activeCard === idx ? activeColor : '#e5e7eb'}`,
                background: activeCard === idx ? activeColor : '#ffffff',
                color: activeCard === idx ? '#ffffff' : '#374151',
                fontSize: '15px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: activeCard === idx ? `0 8px 24px ${activeColor}40` : 'none',
              }}
            >
              {srv.title}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div style={{
          background: '#ffffff',
          borderRadius: '24px',
          overflow: 'hidden',
          boxShadow: `0 4px 40px ${activeColor}18`,
          border: `1px solid ${activeColor}22`,
          opacity: isVisible ? 1 : 0,
          transition: 'all 0.4s ease',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        }}>
          
          {/* Image Sidebar */}
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <img
              src={active.image}
              alt={active.title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                minHeight: '420px',
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(160deg, ${activeColor}cc 0%, transparent 65%)`,
            }} />
          </div>

          {/* Text Content */}
          <div style={{
            padding: '48px 40px',
            direction: isAr ? 'rtl' : 'ltr',
            textAlign: isAr ? 'right' : 'left',
          }}>
            
            <h3 style={{
              fontSize: 'clamp(22px, 2.8vw, 28px)',
              fontWeight: '800',
              color: '#0d2137',
              marginBottom: '16px',
            }}>
              {active.title}
            </h3>

            {/* Accent Line تحت العنوان */}
            <div style={{
              width: '48px',
              height: '4px',
              borderRadius: '2px',
              background: activeColor,
              marginBottom: '24px',
            }} />

            <p style={{
              color: '#374151',
              fontSize: '15.2px',
              lineHeight: '1.95',
              whiteSpace: 'pre-line',
              opacity: animating ? 0 : 1,
              transform: animating ? 'translateY(8px)' : 'translateY(0)',
              transition: 'all 0.25s ease',
            }}>
              {active.content}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurServices;
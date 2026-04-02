import React, { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

interface ArticlesPageProps {
  currentLang: string;
}

const ArticlesPage: React.FC<ArticlesPageProps> = ({ currentLang }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<any>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) observer.observe(currentSection);

    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  const isAr = currentLang === 'ar';

  const articles = [
    {
      id: 1,
      titleAr: 'قسم الجودة وسلامة المرضى',
      titleEn: 'Quality & Patient Safety Department',
      image: 'https://images.pexels.com/photos/6129041/pexels-photo-6129041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      contentAr: `يلتزم قسم الجودة وسلامة المرضى بمستشفى نجران التخصصي بتعزيز التميز والمساءلة والتحسين المستمر في رعاية المرضى. وقد قاد القسم المستشفى للحصول على اعتمادات متعددة، بما في ذلك المركز السعودي لاعتماد المنشآت الصحية (CBAHI)، وأرامكو السعودية (ARAMCO)، والتعليم الطبي المستمر (CME)، بالإضافة إلى تصنيفه كمستشفى صديق للأم والطفل وصديق لكبار السن.

كما يتولى القسم ريادة المبادرات في مجالات تطوير السياسات، وإدارة المخاطر، والتدقيق الإكلينيكي، وسلامة المرضى، وتدريب الموظفين، والامتثال، وذلك من خلال العمل التعاوني مع جميع الأقسام لتعزيز النتائج وضمان بيئة رعاية صحية آمنة وعالية الجودة.

ويتمثل هدف القسم في تقديم رعاية آمنة ورحيمة لكل مريض، قائمة على أعلى المعايير المهنية.`,
      contentEn: `The Quality and Patient Safety Department at Najran Specialized Hospital is committed to promoting excellence, accountability, and continuous improvement in patient care. The department has led the hospital to obtain multiple accreditations, including the Saudi Central Board for Accreditation of Healthcare Institutions (CBAHI), ARAMCO, and Continuing Medical Education (CME), in addition to being classified as a Mother & Child Friendly Hospital and Elderly Friendly Hospital.

The department leads initiatives in policy development, risk management, clinical audit, patient safety, staff training, and compliance through collaborative work with all departments to enhance outcomes and ensure a safe and high-quality healthcare environment.

The department's goal is to provide safe and compassionate care to every patient based on the highest professional standards.`
    },
    {
      id: 2,
      titleAr: 'قسم المالية – التفاعل المالي مع المرضى',
      titleEn: 'Finance Department – Patient Financial Interaction',
      image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      contentAr: `التفاعل المالي مع المرضى – مواد إرشادية ومبادئ أساسية

1. الشفافية والأخلاق في تسعير الخدمات والفوترة
يجب على المستشفيات تزويد المرضى بمعلومات واضحة ودقيقة وشفافة فيما يتعلق بتكاليف الخدمات. يشمل ذلك شرح التكاليف التقديرية، حدود التغطية التأمينية، وتوضيح أي مبالغ متوقعة يدفعها المريض من جيبه الخاص. لا تسامح مطلقًا مع الرسوم الخفية.

التواصل الشفاف يقلل من ارتباك المريض ويقوي الثقة. هدفنا هو تقديم أفضل رعاية بأفضل سعر.

2. الإرشاد المالي للمريض
يلعب المستشارون الماليون دورًا رئيسيًا في مساعدة المرضى على فهم الفوترة، ومطالبات التأمين، وخيارات الدفع، وبرامج الدعم المالي.

3. إدارة حسابات ومدفوعات المرضى
يشرف القسم المالي على دقة حسابات المرضى، ويصدر الإيصالات، ويدير خطط الدفع عند الضرورة.

4. معالجة مطالبات التأمين
في المملكة العربية السعودية، التغطية التأمينية هي شريان حياة. هدفنا هو جعل العملية سلسة من خلال تنسيق جمع المستندات وتقديم المطالبات والمتابعة مع شركات التأمين.

5. حقوق المريض والتواصل المالي
للمرضى الحق في الحصول على تفسيرات مالية مفهومة، وطلب فواتير مفصلة، وتلقي تفسيرات لرفض التأمين.

6. دعم الحالات الخاصة
قد يحتاج بعض المرضى إلى ترتيبات مالية خاصة بسبب حالات الطوارئ أو الضائقة المالية.

7. الاستثمار في الكفاءات والتقنيات
يعتمد النجاح المالي للمستشفى على الاستثمار في الأفراد والأنظمة التي تنقذ الأرواح.

8. الحوكمة المالية القوية والامتثال
تضمن الحوكمة الجيدة الاستدامة والسلوك الأخلاقي من خلال الالتزام بإرشادات وزارة الصحة ومجلس الضمان الصحي التعاوني (CCHI).

لماذا يعد التميز المالي مهمًا لكل مريض؟
عندما يتبع المستشفى ممارسات مالية قوية: يحصل المرضى على رعاية أفضل، تبقى التكاليف تحت السيطرة، تتحسن التكنولوجيا باستمرار، ويركز الأطباء على العلاج. في مستشفانا، نؤمن بأن الشؤون المالية ليست مجرد قسم — بل هي حارس الجودة والأخلاق والاستدامة في الرعاية الصحية.`,
      contentEn: `Patient Financial Interaction – Guidelines and Basic Principles

1. Transparency and Ethics in Service Pricing and Billing
Hospitals must provide patients with clear, accurate, and transparent information regarding service costs. This includes explaining estimated costs, insurance coverage limits, and any out-of-pocket amounts. There is zero tolerance for hidden fees.

Transparent communication reduces patient confusion and builds trust. Our goal is to provide the best care at the best price.

2. Patient Financial Guidance
Financial counselors play a key role in helping patients understand billing, insurance claims, payment options, and financial support programs.

3. Management of Patient Accounts and Payments
The finance department oversees the accuracy of patient accounts, issues receipts, and manages payment plans when necessary.

4. Insurance Claims Processing
In Saudi Arabia, insurance coverage is a lifeline. Our goal is to make the process smooth by coordinating document collection, claim submission, and follow-up with insurance companies.

5. Patient Rights and Financial Communication
Patients have the right to understandable financial explanations, detailed invoices, and explanations for insurance denials.

6. Support for Special Cases
Some patients may need special financial arrangements due to medical emergencies or financial hardship.

7. Investment in Competencies and Advanced Technologies
The financial success of the hospital depends on investing in people and systems that save lives.

8. Strong Financial Governance and Compliance
Good governance ensures sustainability and ethical behavior by complying with the guidelines of the Ministry of Health and the Council for Cooperative Health Insurance (CCHI).

Why is financial excellence important for every patient?
When a hospital follows strong financial practices: patients receive better care, costs are controlled, technology improves continuously, and doctors focus on treatment. In our hospital, we believe that finance is not just a department — it is the guardian of quality, ethics, and sustainability in healthcare.`
    },
    {
      id: 3,
      titleAr: 'قسم تقنية المعلومات – شريان الرعاية الرقمية',
      titleEn: 'Information Technology Department – The Digital Lifeline',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      contentAr: `إدارة تقنية المعلومات – شريان الرعاية الرقمية في مستشفانا

خلف كل تجربة سلسة للمريض، وكل نتيجة مختبر في الوقت المناسب، وكل سجل طبي آمن، يقف فريق يعمل بهدوء في الكواليس — وهو قسم تقنية المعلومات (IT).

في قطاع الرعاية الصحية الحديث، لا تقتصر تقنية المعلومات على أجهزة الكمبيوتر والأنظمة فحسب. بل تتعلق بدعم الأطباء، وطمأنة المرضى، وضمان وصول الرعاية إلى الأشخاص عندما يحتاجون إليها بشدة.

مهمتنا بسيطة: جعل التكنولوجيا غير مرئية وموثوقة ومتمحورة حول الإنسان.

1. بناء بيئة رقمية تتيح ازدهار الرعاية
يثق المرضى بنا في حياتهم، ويعتمد الأطباء على معلومات دقيقة في اللحظة المناسبة. يضمن فريق تقنية المعلومات ذلك من خلال الحفاظ على عمل الأنظمة الإلكترونية بسلاسة، حماية معلومات المرضى، وضمان توفر البيانات في أي وقت خاصة أثناء حالات الطوارئ.

2. إنشاء خدمات رقمية صديقة للمريض
يتوقع المرضى اليوم من المستشفى نفس السهولة التي يحصلون عليها من البنك أو شركة الطيران. تساعد تقنية المعلومات في تقريب المستشفى من المرضى من خلال بوابات المرضى، تطبيقات الهاتف المحمول، أكشاك ذكية، وتذكيرات آلية عبر الرسائل والواتساب.

3. حماية معلومات المرضى — مسؤولية نأخذها على محمل الجد
نأخذ الأمن السيبراني على محمل الجد من خلال الامتثال الكامل للوائح الهيئة الوطنية للأمن السيبراني (NCA)، وزارة الصحة، ومجلس الضمان الصحي التعاوني (CCHI).

4. جعل المستشفى يعمل بذكاء أكبر من خلال الأتمتة وذكاء الأعمال
نقوم بأتمتة العمل المتكرر ليحصل الموظفون على المزيد من الوقت للمرضى، ونزود القيادة بلوحات معلومات في الوقت الفعلي.

5. الوقوف إلى جانب كل قسم، كل يوم
نقدم دعمًا فنيًا على مدار الساعة، استكشاف الأخطاء وإصلاحها بسرعة، وصيانة موثوقة لجميع الأجهزة.

6. قيادة الابتكار والرعاية الصحية الجاهزة للمستقبل
ندعم أدوات الذكاء الاصطناعي، التطبيب عن بعد، وأجهزة إنترنت الأشياء (IoT).

7. الحوكمة والمسؤولية والاستدامة طويلة الأمد
نلتزم بالمعايير الدولية وندير التغيير بعناية لضمان استمرارية النظام الرقمي.

في مستشفانا، قسم تقنية المعلومات هو أكثر من مجرد فريق تقني — نحن شركاء في الرعاية، وحماة لمعلومات المرضى، وداعمون لكل موظف يخدم المريض.

نحن نؤمن بأن التكنولوجيا يجب ألا تحل أبدًا محل اللمسة الإنسانية — ولكن يجب أن تمكنها.`,
      contentEn: `Information Technology Management – The Digital Lifeline of Our Hospital

Behind every smooth patient experience, every timely lab result, and every secure medical record stands a team working quietly behind the scenes — the Information Technology (IT) Department.

In modern healthcare, IT is not just about computers and systems. It is about supporting doctors, reassuring patients, and ensuring care reaches people when they need it most.

Our mission is simple: Make technology invisible, reliable, and human-centered.

1. Building a Digital Environment that Allows Care to Flourish
Patients trust us with their lives, and doctors rely on accurate information at the right moment. Our IT team ensures this by keeping electronic systems running smoothly, protecting patient information, and ensuring data availability at all times, especially during emergencies.

2. Creating Patient-Friendly Digital Services
Patients today expect the same ease from the hospital as from a bank or airline. IT helps bring the hospital closer to patients through patient portals, mobile applications, smart kiosks, and automated reminders via SMS and WhatsApp.

3. Protecting Patient Information – A Responsibility We Take Seriously
We take cybersecurity very seriously by fully complying with the regulations of the National Cybersecurity Authority (NCA), Ministry of Health, and Council for Cooperative Health Insurance (CCHI).

4. Making the Hospital Smarter Through Automation and Business Intelligence
We automate repetitive work so staff have more time for patients and provide leadership with real-time dashboards.

5. Standing by Every Department, Every Day
We provide 24/7 technical support, fast troubleshooting, and reliable maintenance for all devices.

6. Leading Innovation and Future-Ready Healthcare
We support artificial intelligence tools, telemedicine, and Internet of Things (IoT) devices.

7. Governance, Responsibility, and Long-Term Sustainability
We adhere to international standards and manage change carefully to ensure the continuity of the digital system.

In our hospital, the Information Technology Department is more than just a technical team — we are partners in care, protectors of patient information, and supporters of every employee serving the patient.

We believe that technology should never replace the human touch — but it should enable it.`
    }
  ];

  const openArticle = (article: any) => {
    setSelectedArticle(article);
    document.body.style.overflow = 'hidden';
  };

  const closeArticle = () => {
    setSelectedArticle(null);
    document.body.style.overflow = 'visible';
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {isAr ? 'المقالات والمدونة' : 'Articles & Blog'}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {isAr 
              ? 'نشارك معكم أحدث المعارف والتجارب والرؤى الطبية'
              : 'We share with you the latest knowledge, experiences, and medical insights'
            }
          </p>

          {/* نبض ECG */}
          <div className="flex justify-center mt-10">
            <svg
              viewBox="0 0 300 60"
              width="320"
              height="60"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <mask id="revealMask">
                  <rect x="0" y="0" width="300" height="60" fill="white">
                    <animate attributeName="x" from="-300" to="300" dur="2.8s" repeatCount="indefinite" />
                  </rect>
                </mask>
              </defs>

              <path
                d="M 0,30 L 105,30 L 112,30 L 117,22 L 122,30 L 128,30 L 133,10 L 141,50 L 150,5 L 158,50 L 165,30 L 170,30 L 175,22 L 180,30 L 300,30"
                fill="none"
                stroke="#1787b6"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow)"
                mask="url(#revealMask)"
              />

              <line x1="0" y1="30" x2="300" y2="30" stroke="#1787b6" strokeWidth="0.6" strokeOpacity="0.15" />

              <circle r="4" fill="#1787b6" filter="url(#glow)">
                <animateMotion
                  dur="2.8s"
                  repeatCount="indefinite"
                  path="M 0,30 L 105,30 L 112,30 L 117,22 L 122,30 L 128,30 L 133,10 L 141,50 L 150,5 L 158,50 L 165,30 L 170,30 L 175,22 L 180,30 L 300,30"
                />
              </circle>
            </svg>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={article.image}
                  alt={isAr ? article.titleAr : article.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              </div>

              <div className="p-7">
                <h3 className="text-xl font-bold text-gray-800 mb-4 leading-tight min-h-[56px]">
                  {isAr ? article.titleAr : article.titleEn}
                </h3>

                <p className="text-gray-600 leading-relaxed text-[15.2px] line-clamp-5">
                  {(isAr ? article.contentAr : article.contentEn).substring(0, 280)}...
                </p>

                <button 
                  onClick={() => openArticle(article)}
                  className="mt-6 text-[#1787b6] font-semibold flex items-center gap-2 hover:gap-3 transition-all group-hover:translate-x-1"
                >
                  {isAr ? 'اقرأ المزيد' : 'Read More'}
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={closeArticle}>
          <div 
            className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative h-80">
              <img 
                src={selectedArticle.image} 
                alt={isAr ? selectedArticle.titleAr : selectedArticle.titleEn} 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <button 
                onClick={closeArticle}
                className="absolute top-6 right-6 bg-white/90 hover:bg-white p-3 rounded-full transition-colors"
              >
                <X size={28} className="text-gray-800" />
              </button>
            </div>

            <div className="p-8 md:p-12 overflow-y-auto max-h-[calc(92vh-320px)]">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 leading-tight">
                {isAr ? selectedArticle.titleAr : selectedArticle.titleEn}
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-line">
                {isAr ? selectedArticle.contentAr : selectedArticle.contentEn}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ArticlesPage;
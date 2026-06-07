import React, { useEffect, useRef, useState } from 'react';
// @ts-ignore
import CeoImg from "../assets/ceo.jpeg"

interface CeoSectionProps {
  currentLang: string;
}

const CeoSection: React.FC<CeoSectionProps> = ({ currentLang }) => {
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
      title: 'رعاية متكاملة في مكان واحد',
      text: `في مستشفى نجران التخصصي، نحن لا نحضر إلى العمل لمجرد أداء وظيفة، بل نحضر من أجل الناس. فكل مريض يعبر أبوابنا يحمل معه قصة، وأسرة، وأملاً. وهذا الأمل هو الأمانة التي أوكلت إلينا حمايتها. إن عملنا ليس عملاً روتينياً، ولم يكن كذلك يوماً. إنه رسالة سامية ومهمة إنسانية للشفاء، تسري في كل ممر، وكل استشارة، وكل عمل رعاية هادئ يُؤدّى خلف الكواليس. ما بنيناه معاً لم يكن وليد الصدفة، بل تشكّل من خلال الانضباط، والتعاطف، والإيمان الجماعي بأننا عندما نعمل كفريق واحد، عبر جميع الأقسام والتخصصات والأدوار، فإننا قادرون على تحقيق إنجازات استثنائية.

الزملاء الأعزاء، إن الطريق أمامنا يتطلب منا المزيد من الشجاعة والالتزام. فنحن لا نسعى فقط إلى أن نكون مستشفى ناجحاً، بل نبني شيئاً أكثر عمقاً وأهمية، نموذجاً حياً للتميّز المرتكز على المريض، حيث تلتقي الابتكارات الرقمية مع الرحمة الإنسانية، وحيث تعكس كل نقطة تواصل في رحلة المريض أسمى قيمنا. إن رؤيتنا تقوم على ثقافة تعاون شاملة بزاوية 360 درجة؛ ثقافة لا يعمل فيها أي قسم بمعزل عن الآخر، وتتدفق فيها المعلومات بسلاسة، وتُتخذ فيها القرارات مع وضع المريض في قلب الاهتمام، ويشعر فيها كل فرد من الفريق بحجم الأثر الذي يصنعه وشرف المساهمة فيه.

لقد رأيت ما يستطيع هذا الفريق تحقيقه، وشهدت صمودكم، وتفانيكم، واستعدادكم لتقديم ما هو أكثر مما يُطلب منكم، ليس لأن ذلك واجب، بل لأنكم تهتمون حقاً. وهذا أمر نادر، وقوة حقيقية، وهو ما يميزنا عن غيرنا. إن التميّز الحقيقي لا يُقاس بالأرقام والمؤشرات وحدها، بل يُقاس بالأم التي تغادر مستشفانا مطمئنة، وبالمريض الذي يعود إلى منزله بقوة متجددة، وبالأسرة التي تشعر بأنها مرئية ومسموعة ومدعومة خلال أكثر لحظاتها ضعفاً واحتياجاً.

إلى كل زميل يعمل بإخلاص في صمت، وجعل من التعاطف منهجاً، ومن الإنسانية مهنة، أنتم روح هذه المؤسسة. أنتم أعظم نقاط قوتها، وأغلى ما تفخر به. فلنمضِ قدماً معاً بعزيمة، وبقلب نابض بالعطاء، وبإيمان راسخ بأننا معاً لا نعالج المرض فحسب، بل نعيد الحياة إلى النفوس.

`,
      signature: 'المدير التنفيذي',
      name: 'د. رجيف ميسرا'
    },
    en: {
      title: 'Complete Care in One Place',
      text: `At Specialized Najran Hospital, we don’t simply show up to work — we show up for people.
Every patient who walks through our doors carries with them a story, a family, and a hope. And it is that hope we are entrusted to protect. Our work is not routine — it never has been. It is a calling. A mission of healing that flows through every corridor, every consultation, and every quiet act of care performed behind the scenes.
What we have built together did not emerge from chance. It was forged through discipline, through empathy, and through a collective belief that when we function as one — across every department, every discipline, every role — we are capable of extraordinary things.
Dear colleagues,
The road ahead calls for even greater courage and commitment from each of us. We are not simply striving to be a successful hospital. We are building something far more meaningful — a living model of patient-centered excellence, where digital innovation meets human compassion, and where every touchpoint in a patient’s journey reflects our deepest values.
Our vision is a 360° culture of collaboration — one where no department operates in isolation, where information flows freely, decisions are made with the patient at the center, and every team member feels the weight and the honor of the impact they create.
I have seen what this team is capable of. I have witnessed your resilience, your dedication, and your willingness to go beyond what is asked — not because it is required, but because you genuinely care. That is rare. That is powerful. And that is what sets us apart.
True excellence is not measured in metrics alone — it is measured in the mother who leaves our hospital reassured, in the patient who returns home with renewed strength, and in the family that feels seen, heard, and supported throughout their most vulnerable moments.
To every colleague who works with quiet dedication, who has made compassion a discipline and humanity a profession — you are the soul of this institution. You are its greatest strength, and its most enduring pride.
Let us continue forward — with purpose, with heart, and with the unwavering belief that together, we don’t just treat illness.
Together, we restore lives.`,
      signature: 'CEO',
      name: 'Dr. rajiv misra'
    }
  };

  const t = content[currentLang as keyof typeof content];
  const isAr = currentLang === 'ar';

  return (
    <section ref={sectionRef} className="py-20 bg-[#eeeeee]">
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

                    {/* Image block */}
          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={CeoImg}
                alt="Hospital"
                className="w-full h-[900px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1787b6]/20 to-transparent" />
            </div>
          </div>
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


        </div>
      </div>
    </section>
  );
};

export default CeoSection;
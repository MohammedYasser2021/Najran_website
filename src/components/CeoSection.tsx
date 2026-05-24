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
      text: `في مستشفى نجران التخصصي، نحن لا نؤمن بالعمل الروتيني… بل نؤمن بصناعة الأثر.
فكل قسم، وكل موظف، وكل لحظة جهد تُبذل داخل هذه المؤسسة، هي جزء من رسالة إنسانية عظيمة تنقذ الأرواح وتمنح الأمل.

ما حققناه اليوم لم يأتِ بمحض الصدفة، بل كان نتيجة الالتزام والانضباط والعمل بروح الفريق الواحد.

زملائي الأعزاء،
إن المرحلة القادمة تتطلب منا المزيد من الشغف، والابتكار، والتميّز. فهدفنا ليس فقط أن نكون مستشفى ناجحًا… بل أن نصبح نموذجًا رائدًا في الرعاية الصحية، والخدمة الإنسانية، وجودة التشغيل.

أنا على ثقة بقدراتكم، وأؤمن حقًا بأن لدينا فريقًا قادرًا على تجاوز التحديات وتحقيق إنجازات نفتخر بها جميعًا.

فالنجاح الحقيقي لا يُقاس بالكلمات، بل بالأثر الذي نتركه في حياة المرضى وعائلاتهم.

شكرًا لكل من يعمل بإخلاص خلف الكواليس، ولكل من جعل الرحمة مهنة، والإنسانية رسالة.
أنتم القوة الحقيقية ومصدر فخر هذه المؤسسة.
معًا… نصنع الفرق.`,
      signature: 'المدير التنفيذي',
      name: 'د. رجيف ميسرا'
    },
    en: {
      title: 'Complete Care in One Place',
      text: `At Specialized Najran Hospital, we do not believe in routine work… we believe in creating impact. Every department, every employee, and every moment of effort dedicated within this institution is part of a great humanitarian mission that saves lives and gives hope. What we have achieved today did not happen by chance; it is the result of commitment, discipline, and working together as one team. Dear colleagues, the coming phase requires even more passion, innovation, and excellence from all of us. Our goal is not only to be a successful hospital… but to become a leading model in healthcare, humanitarian service, and operational quality. I trust in your abilities, and I truly believe we have a team capable of overcoming challenges and achieving 
accomplishments we can all be proud of. True success is not measured by words, 
but by the impact we leave on the lives of patients and their families. Thank you to
everyone who works sincerely behind the scenes, and to everyone who has made 
compassion aprofession and humanity a mission. You are the true strength and 
pride of this organization.
Together…we make a difference.`,
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
                className="w-full h-[660px] object-cover"
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
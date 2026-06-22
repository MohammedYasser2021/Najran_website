import React, { useState, useRef, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, UserCheck, ExternalLink, Briefcase } from 'lucide-react';
// @ts-ignore
import CoverBg from '../assets/cover.jpeg';


interface ContactUsSectionProps {
  currentLang: string;
}

const ContactUsSection: React.FC<ContactUsSectionProps> = ({ currentLang }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const isAr = currentLang === 'ar';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const content = {
    ar: {
      title: 'اتصل بنا',
      subtitle: 'نحن هنا لخدمتكم على مدار الساعة',
      addressTitle: 'العنوان',
      address: 'طريق الملك سعود 66252، نجران',
      phoneTitle: 'هاتف',
      phone: '920002159',
      emailTitle: 'البريد الإلكتروني',
      email: 'info@najransh.sa',
      careersTitle: 'الوظائف',
      careersNote: 'لإرسال السيرة الذاتية والتقديم على الوظائف الشاغرة',
      workingHours: 'بوابة المريض والمواعيد',
      hours: 'السبت - الخميس: 9:00 ص - 9:00 م',
      emergency: 'الطوارئ: 24 ساعة / 7 أيام',
      surveyTitle: 'استبيان تجربة المريض',
      surveyBtn: 'شاركنا رأيك',
    },
    en: {
      title: 'Contact Us',
      subtitle: 'We are here to serve you around the clock',
      addressTitle: 'Address',
      address: 'King Saud Road 66252, Najran',
      phoneTitle: 'Phone',
      phone: '+966 920002159',
      emailTitle: 'Email',
      email: 'info@najransh.sa',
      careersTitle: 'Careers',
      careersNote: 'Send your CV and apply for open positions',
      workingHours: 'Patient Gate & Appointments',
      hours: 'Saturday - Thursday: 9:00 AM - 9:00 PM',
      emergency: 'Emergency: 24/7',
      surveyTitle: 'Patient Experience Survey',
      surveyBtn: 'Share Your Feedback',
    },
  };

  const t = content[isAr ? 'ar' : 'en'];
  const whatsappNumber = '966920002159';
  const careersEmail = 'HR.Rec@najransh.sa';

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-white"
      dir={isAr ? 'rtl' : 'ltr'}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* Header with ECG Pulse */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            {t.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-xl mx-auto">
            {t.subtitle}
          </p>

          {/* ── ECG Pulse ── */}
          <div className="flex justify-center mt-8">
            <svg
              viewBox="0 0 300 60"
              width="300"
              height="60"
              xmlns="http://www.w3.org/2000/svg"
              style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.7s ease' }}
            >
              <defs>
                <filter id="glow-contact">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <mask id="revealMask-contact">
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
                filter="url(#glow-contact)"
                mask="url(#revealMask-contact)"
              />
              <circle r="4" fill="#1787b6" filter="url(#glow-contact)">
                <animateMotion
                  dur="2.4s"
                  repeatCount="indefinite"
                  path="M 0,30 L 105,30 L 112,30 L 117,22 L 122,30 L 128,30 L 133,10 L 141,50 L 150,5 L 158,50 L 165,30 L 170,30 L 175,22 L 180,30 L 300,30"
                />
              </circle>
            </svg>
          </div>
        </div>

        <div className={`grid lg:grid-cols-12 gap-10 items-start`}>
          {/* معلومات الاتصال */}
          <div className="lg:col-span-5 space-y-10">
            {/* العنوان */}
            <div className="flex gap-5">
              <div className="w-14 h-14 bg-[#1787b6]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-8 h-8 text-[#1787b6]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-1">{t.addressTitle}</h3>
                <p className="text-gray-600 leading-relaxed">{t.address}</p>
              </div>
            </div>

            {/* الهاتف (واتساب) */}
            <div className="flex gap-5">
              <div className="w-14 h-14 bg-[#1787b6]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-8 h-8 text-[#1787b6]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-1">{t.phoneTitle}</h3>
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl font-medium text-[#1787b6] hover:text-[#146a94] transition-colors block"
                >
                  {isAr ? t.phone : '+966 920002159'}
                </a>
                <p className="text-sm text-gray-500 mt-1">
                  {isAr ? 'اضغط للتواصل عبر واتساب' : 'Click to contact via WhatsApp'}
                </p>
              </div>
            </div>

            {/* الإيميل */}
            <div className="flex gap-5">
              <div className="w-14 h-14 bg-[#1787b6]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-8 h-8 text-[#1787b6]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-1">{t.emailTitle}</h3>
                <a
                  href={`mailto:${t.email}`}
                  className="text-xl font-medium text-[#1787b6] hover:text-[#146a94] transition-colors"
                >
                  {t.email}
                </a>
              </div>
            </div>

            {/* الوظائف */}
            <div className="flex gap-5">
              <div className="w-14 h-14 bg-[#1787b6]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-8 h-8 text-[#1787b6]" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-1">{t.careersTitle}</h3>
                <a
                  href={`mailto:${careersEmail}`}
                  className="text-xl font-medium text-[#1787b6] hover:text-[#146a94] transition-colors break-words"
                >
                  {careersEmail}
                </a>
                <p className="text-sm text-gray-500 mt-1">{t.careersNote}</p>
              </div>
            </div>

            {/* ساعات العمل */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-[#1787b6]" />
                <h3 className="font-semibold text-lg">{t.workingHours}</h3>
              </div>
              <div className="space-y-3 text-gray-600">
                <p>{t.hours}</p>
                <p className="font-medium text-[#1787b6]">{t.emergency}</p>
              </div>
            </div>

            {/* استبيان تجربة المريض */}
            <div className="pt-8">
              <a
                href="https://forms.office.com/pages/responsepage.aspx?id=1fBA22C_-EieeDVo-6W1g5kvkCtZ4KdCu12N05syQSpUOEJOS0hWTFpSQU1MRzkwSTZFTUVHWlRBVC4u&origin=lprLink&route=shorturl"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-4 w-full bg-gradient-to-r from-[#1787b6] to-[#146a94] hover:from-[#146a94] hover:to-[#0f5a7f] text-white font-medium text-lg py-6 px-8 rounded-3xl transition-all shadow-lg"
              >
                <UserCheck className="w-7 h-7" />
                <span>{t.surveyBtn}</span>
                <ExternalLink className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </a>
              <p className="text-center text-sm text-gray-500 mt-3">{t.surveyTitle}</p>
            </div>
          </div>

          {/* الصورة + الخريطة */}
          <div className="lg:col-span-7 space-y-8">
            {/* Cover Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={CoverBg}
                alt={isAr ? "اتصل بنا - مستشفى نجران التخصصي" : "Contact Us - Najran Specialized Hospital"}
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '16/9' }}
              />
            </div>

            {/* Google Maps */}
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-100 h-[420px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0000000000005!2d44.1277!3d17.4933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI5JzM1LjkiTiA0NMKwMDcnMzkuNyJF!5e0!3m2!1sen!2ssa!4v1743600000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Najran Location Map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
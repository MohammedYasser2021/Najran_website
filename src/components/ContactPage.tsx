import React, { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react';

// Icons from your Footer
 const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const SnapchatIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
    <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.317 4.176l-.004.048c-.054.602.22.919.397 1.01.13.067.32.106.543.106.263 0 .567-.063.828-.16.134-.048.33-.127.458-.127.117 0 .307.045.307.27 0 .196-.16.38-.345.49-.105.064-.42.195-.68.282-.132.047-.22.13-.22.213 0 .097.1.198.282.335.265.2.629.474.629.904 0 .486-.406.735-.824.735-.168 0-.34-.038-.505-.12-.352-.17-.59-.278-.7-.278-.12 0-.13.046-.13.138 0 .34.068.685.143 1.045.238 1.143.5 2.435-.358 3.56-.356.466-.95.883-1.875 1.173-.433.135-.833.253-1.186.35-.303.083-.562.153-.737.227-.11.047-.135.083-.135.11 0 .038.035.104.145.228.35.404.945 1.08.945 1.896 0 .796-.622 1.22-1.168 1.22-.173 0-.34-.038-.484-.11-.29-.144-.55-.217-.8-.217-.263 0-.543.075-.82.217-.146.074-.312.11-.48.11-.464 0-1.07-.38-1.07-1.22 0-.816.593-1.492.944-1.896.11-.124.145-.19.145-.228 0-.027-.025-.063-.135-.11-.175-.074-.434-.144-.737-.227-.353-.097-.753-.215-1.186-.35-.925-.29-1.52-.707-1.875-1.173-.858-1.125-.596-2.417-.358-3.56.075-.36.143-.705.143-1.045 0-.092-.01-.138-.13-.138-.11 0-.348.108-.7.278-.165.082-.337.12-.505.12-.418 0-.824-.25-.824-.735 0-.43.364-.705.629-.904.182-.137.282-.238.282-.335 0-.083-.088-.166-.22-.213-.26-.087-.575-.218-.68-.282-.185-.11-.345-.294-.345-.49 0-.225.19-.27.307-.27.128 0 .324.08.458.127.26.097.564.16.828.16.223 0 .413-.04.543-.106.177-.09.451-.408.397-1.01l-.004-.048c-.086-.957-.212-2.983.317-4.176C7.853 1.069 11.21.793 12.206.793z" />
  </svg>
);

const TiktokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.19 8.19 0 0 0 4.79 1.53V6.75a4.85 4.85 0 0 1-1.02-.06z" />
  </svg>
);

// @ts-ignore
import MainHospital from '../assets/mainhospital.jpeg';   // ← غيّر الاسم لو الصورة مختلفة

interface ContactPageProps {
  currentLang: string;
}

const ContactPage: React.FC<ContactPageProps> = ({ currentLang }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isAr = currentLang === 'ar';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
  }, []);

  const whatsappNumber = '966920002159';

  return (
    <div ref={sectionRef} className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={MainHospital}
          alt="مستشفى نجران التخصصي"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />

        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            {isAr ? 'تواصل معنا' : 'Contact Us'}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10">
            {isAr ? 'نحن هنا لخدمتكم على مدار الساعة' : 'We are here to serve you 24/7'}
          </p>

          {/* ECG Pulse */}
          <div className="flex justify-center">
            <svg
              viewBox="0 0 300 60"
              width="320"
              height="60"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              <defs>
                <filter id="glow-contact">
                  <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <mask id="revealMask-contact">
                  <rect x="0" y="0" width="300" height="60" fill="white">
                    <animate attributeName="x" from="-300" to="300" dur="2.6s" repeatCount="indefinite" />
                  </rect>
                </mask>
              </defs>
              <line x1="0" y1="30" x2="300" y2="30" stroke="#fff" strokeWidth="0.8" strokeOpacity="0.25" />
              <path
                d="M 0,30 L 105,30 L 112,30 L 117,22 L 122,30 L 128,30 L 133,10 L 141,50 L 150,5 L 158,50 L 165,30 L 170,30 L 175,22 L 180,30 L 300,30"
                fill="none"
                stroke="#fff"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#glow-contact)"
                mask="url(#revealMask-contact)"
              />
              <circle r="4.5" fill="#fff" filter="url(#glow-contact)">
                <animateMotion
                  dur="2.6s"
                  repeatCount="indefinite"
                  path="M 0,30 L 105,30 L 112,30 L 117,22 L 122,30 L 128,30 L 133,10 L 141,50 L 150,5 L 158,50 L 165,30 L 170,30 L 175,22 L 180,30 L 300,30"
                />
              </circle>
            </svg>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-10">
            {/* Phone */}
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-[#1787b6]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-8 h-8 text-[#1787b6]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">اتصل بنا</h3>
                <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer"
                  className="text-3xl font-bold text-[#1787b6] hover:text-[#146a94] transition-colors block mt-1">
                  920002159
                </a>
                <p className="text-sm text-gray-500 mt-1">متاح 24 ساعة عبر الواتساب</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-[#1787b6]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-8 h-8 text-[#1787b6]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">البريد الإلكتروني</h3>
                <a href="mailto:info@najransh.sa" className="text-2xl font-medium text-[#1787b6] hover:text-[#146a94] transition-colors">
                  info@najransh.sa
                </a>
                <p className="text-sm text-gray-500 mt-1">خدمة 24/7</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-[#1787b6]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-8 h-8 text-[#1787b6]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">مكان الزيارة</h3>
                <p className="text-gray-700 leading-relaxed">
                  شارع الملك سعود<br />
                  نجران، المملكة العربية السعودية
                </p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex gap-6">
              <div className="w-14 h-14 bg-[#1787b6]/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-8 h-8 text-[#1787b6]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">ساعات العمل</h3>
                <div className="space-y-2 text-gray-700">
                  <p><span className="font-medium">العيادات:</span> السبت - الخميس | 09:00 ص - 09:00 م</p>
                  <p className="text-[#1787b6] font-semibold">الطوارئ: 24 ساعة / 7 أيام</p>
                </div>
              </div>
            </div>

            {/* Book Appointment Button */}
            <a
              href="https://portal.najransh.sa/auth/login"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-[#1787b6] to-[#0f5a7f] hover:from-[#146a94] hover:to-[#0c4a6b] text-white text-center font-bold text-xl py-7 rounded-3xl shadow-xl transition-all hover:scale-[1.02]"
            >
              احجز موعدك الآن
            </a>
          </div>

          {/* Google Map */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 h-[520px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.0000000000005!2d44.1277!3d17.4933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI5JzM1LjkiTiA0NMKwMDcnMzkuNyJF!5e0!3m2!1sen!2ssa!4v1743600000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Najran Specialized Hospital Location"
              />
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-6 text-sm font-medium">
            {isAr ? 'تابعنا على وسائل التواصل الاجتماعي' : 'Follow us on social media'}
          </p>
          <div className="flex justify-center gap-6 text-gray-400">
            <a href="https://youtube.com/@snh_najrann" target="_blank" rel="noopener noreferrer" className="hover:text-[#1787b6] transition-colors"><YoutubeIcon /></a>
            <a href="https://www.linkedin.com/company/snh_najran" target="_blank" rel="noopener noreferrer" className="hover:text-[#1787b6] transition-colors"><LinkedinIcon /></a>
            <a href="https://www.facebook.com/share/18ZTYzWRdm/" target="_blank" rel="noopener noreferrer" className="hover:text-[#1787b6] transition-colors"><FacebookIcon /></a>
            <a href="https://www.instagram.com/snh_najran" target="_blank" rel="noopener noreferrer" className="hover:text-[#1787b6] transition-colors"><InstagramIcon /></a>
            <a href="https://x.com/SNH_Najran" target="_blank" rel="noopener noreferrer" className="hover:text-[#1787b6] transition-colors"><XIcon /></a>
            <a href="https://www.snapchat.com/add/snh_najran" target="_blank" rel="noopener noreferrer" className="hover:text-[#1787b6] transition-colors"><SnapchatIcon /></a>
            <a href="https://www.tiktok.com/@snh_najran" target="_blank" rel="noopener noreferrer" className="hover:text-[#1787b6] transition-colors"><TiktokIcon /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
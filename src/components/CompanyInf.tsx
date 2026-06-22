import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
// @ts-ignore
import Logo from "../assets/logo.png"
// @ts-ignore
import GooglePlay from "../assets/googleplay.png"
// @ts-ignore
import AppleStore from "../assets/applestore.png"
// @ts-ignore
import GooglePlayQR from "../assets/play_qr.jpg"
// @ts-ignore
import IOSQR from "../assets/ios_qr.jpg"

interface CompanyInfProps {
  currentLang: string;
}

// Small inline phone illustration showing a discount badge on the screen.
// Built as SVG so it stays crisp and on-brand without an extra image asset.
const PhonePromo: React.FC<{ isAr: boolean }> = ({ isAr }) => (
  <div className="flex items-center gap-2 flex-shrink min-w-0">
    <svg
      width="40"
      height="72"
      viewBox="0 0 44 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="flex-shrink-0"
    >
      {/* phone body */}
      <rect x="1.5" y="1.5" width="41" height="77" rx="9" fill="#0d2137" stroke="#0d2137" strokeWidth="1" />
      <rect x="4.5" y="6" width="35" height="62" rx="3" fill="#eaf4fa" />
      {/* notch */}
      <rect x="16" y="3.2" width="12" height="2.2" rx="1.1" fill="#0d2137" />
      {/* home indicator */}
      <rect x="15" y="72.5" width="14" height="2.2" rx="1.1" fill="#3a536b" />
      {/* screen content: discount badge */}
      <circle cx="22" cy="33" r="13.5" fill="#1787b6" />
      <text
        x="22"
        y="31.5"
        textAnchor="middle"
        fontSize="9.5"
        fontWeight="800"
        fill="#ffffff"
        fontFamily="Arial, sans-serif"
      >
        5%
      </text>
      <text
        x="22"
        y="40.5"
        textAnchor="middle"
        fontSize="5"
        fontWeight="700"
        fill="#ffffff"
        fontFamily="Arial, sans-serif"
      >
        {isAr ? 'خصم' : 'OFF'}
      </text>
      {/* small lines mimicking app content */}
      <rect x="9" y="51" width="26" height="2.6" rx="1.3" fill="#c7e3f0" />
      <rect x="9" y="57" width="18" height="2.6" rx="1.3" fill="#c7e3f0" />
    </svg>

    <p className="text-[#1787b6] font-bold text-[13px] leading-snug">
      {isAr ? 'حمّل التطبيق واحصل على خصم 5%' : 'Download the app and get 5% off'}
    </p>
  </div>
);

const CompanyInf: React.FC<CompanyInfProps> = ({ currentLang }) => {
  const isAr = currentLang === 'ar';

  return (
    <section className="bg-[#f8fafc] py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-10 ${isAr ? 'text-right' : 'text-left'}`}>

          {/* 1. Logo + About */}
          <div className="lg:col-span-4">
            <img 
              src={Logo} 
              alt="Najran Specialized Hospital Logo" 
              className="h-20 mb-6"
            />
            <p className="text-gray-700 leading-relaxed text-[15.5px]">
  {isAr 
    ? 'شركاؤك في الصحة — كوادر متخصصة، ورعاية لا تتوقف.'
    : 'Your partners in health — specialized teams, and care that never stops.'
  }
</p>
          </div>

          {/* 2. Contact Us */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold mb-6 text-[#1787b6]">
              {isAr ? 'اتصل بنا' : 'Contact Us'}
            </h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1">
                  <MapPin className="w-5 h-5 text-[#1787b6]" />
                </div>
                <div>
                  <p className="text-gray-700 text-[15px]">
                    {isAr ? 'شارع الملك سعود، نجران' : 'King Saud Street, Najran'}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <Mail className="w-5 h-5 text-[#1787b6]" />
                </div>
                <div>
                  <a 
                    href="mailto:info@najransh.sa" 
                    className="text-gray-700 hover:text-[#1787b6] transition-colors text-[15px]"
                  >
                    info@najransh.sa
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <Phone className="w-5 h-5 text-[#1787b6]" />
                </div>
                <div>
                  <a 
                    href="https://wa.me/966920002159" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#1787b6] transition-colors text-[15px]"
                  >
                    920002159
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Support Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-6 text-[#1787b6]">
              {isAr ? 'الدعم' : 'Support'}
            </h3>
            
            <ul className="space-y-3 text-gray-700 text-[15px]">
              <li>
                <a href="#" className="hover:text-[#1787b6] transition-colors">
                  {isAr ? 'سياسة الإرجاع' : 'Return Policy'}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1787b6] transition-colors">
                  {isAr ? 'الأسئلة الشائعة' : 'FAQ'}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#1787b6] transition-colors">
                  {isAr ? 'مركز المساعدة' : 'Help Center'}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* 4. Download Our Apps — full-width row of its own */}
        <div className={`mt-14 pt-10 border-t border-gray-200 ${isAr ? 'text-right' : 'text-left'}`}>
          <h3 className="text-xl font-bold mb-3 text-[#1787b6]">
            {isAr ? 'نزّل تطبيقاتنا' : 'Download Our Apps'}
          </h3>

          <p className="text-gray-600 text-[15px] mb-7 leading-relaxed max-w-xl">
            {isAr 
              ? 'احصل على خدماتنا بكل سهولة من خلال تطبيق المستشفى الذكي' 
              : 'Get our services easily through our smart hospital app'}
          </p>

          <div className="flex flex-col gap-6">

            {/* Google Play */}
            <div className="flex items-center gap-4 flex-wrap">
              <a 
                href="https://play.google.com/store/apps/details?id=dataocean.venus.najaran&hl=en_US"
                target="_blank"
                rel="noopener noreferrer"
                className="block group flex-shrink-0"
              >
                <img 
                  src={GooglePlay} 
                  alt="Get it on Google Play" 
                  className="h-[56px] w-auto rounded-[10px] shadow-sm 
                             group-hover:shadow-md group-hover:border-[#1787b6] 
                             transition-all duration-300"
                />
              </a>
              <img 
                src={GooglePlayQR} 
                alt="Google Play QR Code" 
                className="sm:h-[100px] h-[85px] sm:w-[100px] w-[85px] rounded-[8px] shadow-sm object-cover flex-shrink-0"
              />
              <PhonePromo isAr={isAr} />
            </div>

            {/* Apple Store */}
            <div className="flex items-center gap-4 flex-wrap">
              <a 
                href="https://apps.apple.com/us/app/specialized-najran-hospital/id6737556244"
                target="_blank"
                rel="noopener noreferrer"
                className="block group flex-shrink-0"
              >
                <img 
                  src={AppleStore} 
                  alt="Download on the App Store" 
                  className="h-14 rounded-[10px] w-[189.11px] shadow-sm 
                             group-hover:shadow-md group-hover:border-[#1787b6] 
                             transition-all duration-300"
                />
              </a>
              <img 
                src={IOSQR} 
                alt="iOS QR Code" 
                className="sm:h-[100px] h-[85px] sm:w-[100px] w-[85px] rounded-[8px] shadow-sm object-cover flex-shrink-0"
              />
              <PhonePromo isAr={isAr} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInf;
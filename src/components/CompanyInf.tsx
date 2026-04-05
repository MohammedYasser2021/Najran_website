import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
// @ts-ignore
import Logo from "../assets/logo.png"
// @ts-ignore
import GooglePlay from "../assets/googleplay.png"
// @ts-ignore
import AppleStore from "../assets/applestore.png"

interface CompanyInfProps {
  currentLang: string;
}

const CompanyInf: React.FC<CompanyInfProps> = ({ currentLang }) => {
  const isAr = currentLang === 'ar';

  return (
    <section className="bg-[#f8fafc] py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 ${isAr ? 'text-right' : 'text-left'}`}>

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

          {/* 4. Download Our Apps */}
          <div className="lg:col-span-3">
            <h3 className="text-xl font-bold mb-6 text-[#1787b6]">
              {isAr ? 'نزّل تطبيقاتنا' : 'Download Our Apps'}
            </h3>
            
            <p className="text-gray-600 text-[15px] mb-7 leading-relaxed">
              {isAr 
                ? 'احصل على خدماتنا بكل سهولة من خلال تطبيق المستشفى الذكي' 
                : 'Get our services easily through our smart hospital app'}
            </p>

            <div className="flex flex-col gap-5">
              {/* Google Play */}
              <a 
                href="https://play.google.com/store/apps/details?id=dataocean.venus.najaran&hl=en_US"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <img 
                  src={GooglePlay} 
                  alt="Get it on Google Play" 
                  className="h-[56px] w-auto rounded-[10px] shadow-sm 
                             group-hover:shadow-md group-hover:border-[#1787b6] 
                             transition-all duration-300"
                />
              </a>

              {/* Apple Store */}
              <a 
                href="https://apps.apple.com/us/app/specialized-najran-hospital/id6737556244"
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <img 
                  src={AppleStore} 
                  alt="Download on the App Store" 
                  className="h-14 rounded-[10px] w-[189.11px]  shadow-sm 
                             group-hover:shadow-md group-hover:border-[#1787b6] 
                             transition-all duration-300"
                />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CompanyInf;
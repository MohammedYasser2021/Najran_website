import { useState } from 'react';
import { Search, ChevronDown, Menu, X, Phone, Mail, MapPin, Smartphone, Share2, Globe } from 'lucide-react';

interface MainNavbarProps {
  currentLang: string;
  changeLanguage: (lang: string) => void;
}

const MainNavbar = ({ currentLang, changeLanguage }: MainNavbarProps) => {
  const [searchValue, setSearchValue] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const isArabic = currentLang === 'ar';

  const menuItems = [
    { key: 'home', label: isArabic ? 'الرئيسية' : 'Home', href: '/' },
    {
      key: 'about',
      label: isArabic ? 'عن المستشفى' : 'About Us',
      hasDropdown: true,
      items: [
        { label: isArabic ? 'رؤيتنا' : 'Our Vision', href: '/vision' },
        { label: isArabic ? 'رسالتنا' : 'Our Mission', href: '/mission' },
        { label: isArabic ? 'قيمنا' : 'Our Values', href: '/values' },
        { label: isArabic ? 'تاريخنا' : 'Our History', href: '/history' },
      ]
    },
    {
      key: 'services',
      label: isArabic ? 'خدماتنا' : 'Services',
      hasDropdown: true,
      items: [
        { label: isArabic ? 'العيادات الخارجية' : 'Outpatient Clinics', href: '/clinics' },
        { label: isArabic ? 'الأقسام الطبية' : 'Medical Departments', href: '/departments' },
        { label: isArabic ? 'الخدمات التشخيصية' : 'Diagnostic Services', href: '/diagnostics' },
      ]
    },
    { key: 'doctors', label: isArabic ? 'أطباؤنا' : 'Our Doctors', href: '/doctors' },
    { key: 'news', label: isArabic ? 'الأخبار' : 'News', href: '/news' },
    { key: 'contact', label: isArabic ? 'اتصل بنا' : 'Contact Us', href: '/contact' },
  ];

  const toggleDropdown = (key: string) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = isArabic
    ? "رعاية بآفاق متجددة - اكتشف معنا"
    : "Care with Renewed Horizons - Discover with us";

  return (
    <>
      <nav className="bg-[#269dcc] md:bg-[#ecf5fa] shadow-md border-b border-gray-200 py-4 sticky top-0 z-40 w-full" style={{ fontFamily: "'Tajawal', 'Cairo', sans-serif" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Desktop Version */}
          <div className="hidden md:flex items-center flex-wrap lg:justify-start justify-center">
            {/* Desktop Search */}
            <div className={isArabic ? "order-1" : "order-3"}>
              <div className="relative w-72">
                <input
                  type="text"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  placeholder={isArabic ? "ابحث عن خدمة أو طبيب..." : "Search for a service or doctor..."}
                  className={`w-full bg-[#269dcc] border border-[#269dcc] py-2.5 rounded-full text-sm
                    focus:outline-none focus:border-[#1f7ba8] transition-all
                    text-white placeholder:text-white
                    ${isArabic ? 'pr-11 pl-5 text-right' : 'pl-11 pr-5 text-left'}`}
                />
                <Search
                  className={`absolute top-1/2 -translate-y-1/2 text-white text-lg
                    ${isArabic ? 'right-4' : 'left-4'}`}
                  size={18}
                />
              </div>
            </div>

            <div className={`flex-1 px-8 ${isArabic ? 'order-3' : 'order-1'}`}>
              <ul
                className={`flex items-center gap-3 text-sm font-semibold
                  ${isArabic ? 'justify-end' : 'justify-start'}`}
              >
                {menuItems.map((item) => (
                  <li key={item.key} className="relative group">
                    {item.hasDropdown ? (
                      <button className="flex items-center gap-1 py-3 px-3 text-[#1786b5] hover:text-[#bf131c] transition-colors whitespace-nowrap">
                        {item.label}
                        <ChevronDown className="text-sm transition-transform duration-300 group-hover:rotate-180" size={14} />
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        className="py-3 px-3 text-[#1786b5] hover:text-[#bf131c] transition-colors block whitespace-nowrap"
                      >
                        {item.label}
                      </a>
                    )}
                    {item.hasDropdown && (
                      <div
                        className={`absolute top-full mt-2 bg-white shadow-xl rounded-xl py-3 px-4 w-60 z-50
                          opacity-0 invisible group-hover:opacity-100 group-hover:visible
                          translate-y-2 group-hover:translate-y-0
                          transition-all duration-300
                          ${isArabic ? 'right-0 text-right' : 'left-0 text-left'}`}
                      >
                        <div className="flex flex-col gap-1 text-sm">
                          {item.items?.map((sub, i) => (
                            <a
                              key={i}
                              href={sub.href}
                              className="px-4 py-2.5 hover:bg-gray-50 hover:text-[#1389bf] rounded-lg transition-all"
                            >
                              {sub.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:hidden order-2 flex-shrink-0">
              <img src="/assets/logo.png" alt="Logo" className="h-10 w-auto" />
            </div>
          </div>

          {/* Mobile Version */}
          <div className="md:hidden flex items-center justify-between">
            {isArabic ? (
              <>
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <Menu size={26} />
                </button>
                <a href="tel:920002159" className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors">
                  <Phone size={19} />
                  <span className="text-sm font-medium">920002159</span>
                </a>
              </>
            ) : (
              <>
                <a href="tel:920002159" className="flex items-center gap-2 text-white hover:text-gray-200 transition-colors">
                  <Phone size={19} />
                  <span className="text-sm font-medium">920002159</span>
                </a>
                <button
                  onClick={() => setIsSidebarOpen(true)}
                  className="text-white hover:text-gray-200 transition-colors"
                >
                  <Menu size={26} />
                </button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-50 transition-opacity duration-300 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 ${isArabic ? 'left-0' : 'right-0'} h-full w-80 bg-[#1a1a1a] text-white z-50 transform transition-transform duration-300 ease-out md:hidden overflow-y-auto
          ${isSidebarOpen ? 'translate-x-0' : isArabic ? '-translate-x-full' : 'translate-x-full'}`}
        style={{ fontFamily: "'Tajawal', 'Cairo', sans-serif" }}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">{isArabic ? 'القائمة' : 'Menu'}</h2>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <X size={26} />
            </button>
          </div>

          {/* Menu Items */}
          <ul className="space-y-1 mb-6">
            {menuItems.map((item) => (
              <li key={item.key}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.key)}
                      className={`w-full flex items-center justify-between py-2.5 px-4 hover:bg-gray-800 rounded-lg transition-all ${isArabic ? 'text-right' : 'text-left'}`}
                    >
                      <span className="font-medium text-sm">{item.label}</span>
                      <ChevronDown
                        className={`transition-transform duration-300 ${openDropdown === item.key ? 'rotate-180' : ''}`}
                        size={16}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openDropdown === item.key ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <ul className={`py-1 ${isArabic ? 'pr-4' : 'pl-4'} space-y-0.5`}>
                        {item.items?.map((sub, i) => (
                          <li key={i}>
                            <a
                              href={sub.href}
                              className="block py-2 px-4 hover:bg-gray-800 rounded-lg text-sm text-gray-300 hover:text-white transition-all"
                            >
                              {sub.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className={`block py-2.5 px-4 hover:bg-gray-800 rounded-lg font-medium text-sm transition-all ${isArabic ? 'text-right' : 'text-left'}`}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder={isArabic ? "ابحث..." : "Search..."}
                className={`w-full bg-gray-800 border border-gray-700 py-2.5 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-[#1389bf] transition-all
                  ${isArabic ? 'pr-11 pl-5 text-right' : 'pl-11 pr-5 text-left'}`}
              />
              <Search
                className={`absolute top-1/2 -translate-y-1/2 text-gray-400
                  ${isArabic ? 'right-4' : 'left-4'}`}
                size={16}
              />
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 mb-6 border-t border-gray-700 pt-4">
            <a href="mailto:info@hospital.com" className={`flex items-center gap-3 text-gray-300 hover:text-white transition-colors ${isArabic ? 'flex-row-reverse text-right' : ''}`}>
              <Mail size={18} className="text-[#1389bf] flex-shrink-0" />
              <span className="text-sm">info@hospital.com</span>
            </a>
            <a href="#" className={`flex items-center gap-3 text-gray-300 hover:text-white transition-colors ${isArabic ? 'flex-row-reverse text-right' : ''}`}>
              <MapPin size={18} className="text-[#1389bf] flex-shrink-0" />
              <span className="text-sm">{isArabic ? 'القاهرة، مصر' : 'Cairo, Egypt'}</span>
            </a>
            <a href="tel:920002159" className={`flex items-center gap-3 text-gray-300 hover:text-white transition-colors ${isArabic ? 'flex-row-reverse text-right' : ''}`}>
              <Smartphone size={18} className="text-[#1389bf] flex-shrink-0" />
              <span className="text-sm">{isArabic ? '920002159' : '920002159'}</span>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="border-t border-gray-700 pt-4">
            <div className="flex items-center justify-center gap-3">

              <a
                href="/contact"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1389bf] hover:bg-[#0f6a96] transition-all font-medium"
                title={isArabic ? 'تواصل' : 'Contact'}
              >
                <Phone size={19} />
              </a>

              <button
                onClick={() => {
                  setIsShareOpen(true);
                  setIsSidebarOpen(false);
                }}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1389bf] hover:bg-[#0f6a96] transition-all font-medium"
                title={isArabic ? 'شارك' : 'Share'}
              >
                <Share2 size={19} />
              </button>

              <button
                onClick={() => {
                  setIsLangOpen(true);
                  setIsSidebarOpen(false);
                }}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1389bf] hover:bg-[#0f6a96] transition-all font-medium"
                title={isArabic ? 'English' : 'عربي'}
              >
                <Globe size={19} />
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* Share Popup */}
      {isShareOpen && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={() => setIsShareOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-7 w-full max-w-sm mx-4 shadow-2xl animate-[slideUp_0.3s_ease-out]"
            onClick={e => e.stopPropagation()}
            style={{ fontFamily: "'Tajawal', 'Cairo', sans-serif" }}
          >
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-lg font-semibold text-gray-800">
                {isArabic ? 'شارك الموقع' : 'Share the Website'}
              </h3>
              <button onClick={() => setIsShareOpen(false)} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>
            <p className="text-gray-600 text-center mb-7 text-sm leading-relaxed">
              {isArabic
                ? 'شارك تجربة الرعاية الصحية المتميزة مع أحبابك'
                : 'Share the outstanding healthcare experience with your loved ones'}
            </p>
            <div className="grid grid-cols-3 gap-6">
              <a href={`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#25D366] text-white text-2xl font-bold shadow-md group-hover:scale-110 transition-transform duration-300">
                  W
                </div>
                <span className="text-xs font-medium mt-2.5 text-gray-700">{isArabic ? 'واتساب' : 'WhatsApp'}</span>
              </a>
              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-black text-white text-2xl font-bold shadow-md group-hover:scale-110 transition-transform duration-300">
                  𝕏
                </div>
                <span className="text-xs font-medium mt-2.5 text-gray-700">{isArabic ? 'تويتر' : 'Twitter'}</span>
              </a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#1877F2] text-white text-2xl font-bold shadow-md group-hover:scale-110 transition-transform duration-300">
                  f
                </div>
                <span className="text-xs font-medium mt-2.5 text-gray-700">{isArabic ? 'فيسبوك' : 'Facebook'}</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Language Popup */}
      {isLangOpen && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={() => setIsLangOpen(false)}
        >
          <div
            className="bg-white rounded-2xl p-7 w-full max-w-sm mx-4 shadow-2xl animate-[slideUp_0.3s_ease-out]"
            onClick={e => e.stopPropagation()}
            style={{ fontFamily: "'Tajawal', 'Cairo', sans-serif" }}
          >
            <div className="text-center">
              <Globe className="text-4xl text-[#1389bf] mx-auto mb-3" size={44} />
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                {isArabic ? 'تغيير لغة الموقع' : 'Change Site Language'}
              </h3>
              <p className="text-gray-500 text-sm mb-6">
                {isArabic ? 'اختر اللغة المفضلة' : 'Choose your preferred language'}
              </p>
            </div>
            <div className="space-y-3">
              <button
                onClick={() => {
                  changeLanguage('ar');
                  setIsLangOpen(false);
                  setIsSidebarOpen(false);
                }}
                className={`w-full py-3.5 rounded-xl font-medium text-base transition-all ${currentLang === 'ar' ? 'bg-[#1389bf] text-white' : 'border-2 border-[#1389bf] text-[#1389bf] hover:bg-[#1389bf] hover:text-white'}`}
              >
                العربية
              </button>
              <button
                onClick={() => {
                  changeLanguage('en');
                  setIsLangOpen(false);
                  setIsSidebarOpen(false);
                }}
                className={`w-full py-3.5 rounded-xl font-medium text-base transition-all ${currentLang === 'en' ? 'bg-[#1389bf] text-white' : 'border-2 border-[#1389bf] text-[#1389bf] hover:bg-[#1389bf] hover:text-white'}`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap');

        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default MainNavbar;

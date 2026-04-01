import { useState, useRef, useEffect } from 'react';
import { Search, ChevronDown, Menu, X, Phone, Mail, MapPin, Smartphone, Share2, Globe, Grid } from 'lucide-react';
import { departments } from './departmentsData';

interface MainNavbarProps {
  currentLang: string;
  changeLanguage: (lang: string) => void;
}

const MainNavbar = ({ currentLang, changeLanguage }: MainNavbarProps) => {
  const [searchValue, setSearchValue]     = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdown, setOpenDropdown]   = useState<string | null>(null);
  const [isShareOpen, setIsShareOpen]     = useState(false);
  const [isLangOpen, setIsLangOpen]       = useState(false);
  const [deptMenuOpen, setDeptMenuOpen]   = useState(false);
  const deptRef  = useRef<HTMLLIElement>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isArabic = currentLang === 'ar';

  /* ── Hover + Click handlers ── */
  const handleDeptEnter = () => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setDeptMenuOpen(true);
  };

  const handleDeptLeave = () => {
    hideTimer.current = setTimeout(() => setDeptMenuOpen(false), 200);
  };

  const handleDeptClick = () => setDeptMenuOpen(prev => !prev);

  /* Close on outside click */
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (deptRef.current && !deptRef.current.contains(e.target as Node)) {
        setDeptMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, []);

  const menuItems = [
    { key: 'home',     label: isArabic ? 'الصفحة الرئيسية'        : 'Home',            href: '/' },
    { key: 'about',    label: isArabic ? 'من نحن'                  : 'About Us',        href: '/about' },
    { key: 'depts',    label: isArabic ? 'الأقسام'                 : 'Departments',     href: null, hasDeptDropdown: true },
    { key: 'doctors',  label: isArabic ? 'الأطباء'                 : 'Doctors',         href: '/doctors' },
    { key: 'blog',     label: isArabic ? 'المدونة والأخبار'         : 'Blog & News',     href: '/news' },
    { key: 'training', label: isArabic ? 'التدريب والتعليم المهني'  : 'Training',        href: '/training' },
    { key: 'rights',   label: isArabic ? 'حقوق المرضى'             : 'Patient Rights',  href: '/patient-rights' },
    { key: 'articles', label: isArabic ? 'المقالات'                : 'Articles',        href: '/articles' },
    { key: 'contact',  label: isArabic ? 'اتصل بنا'                : 'Contact Us',      href: '/contact' },
  ];

  const shareUrl  = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = isArabic
    ? 'رعاية بآفاق متجددة - اكتشف معنا'
    : 'Care with Renewed Horizons - Discover with us';

  return (
    <>
      <nav
        className="bg-[#269dcc] md:bg-[#ecf5fa] shadow-md border-b border-gray-200 py-4 sticky top-0 z-40 w-full"
        style={{ fontFamily: "'Tajawal','Cairo',sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          {/* ── Desktop ── */}
          <div className="hidden md:flex items-center flex-wrap lg:justify-start justify-center">

            {/* Search */}
            <div className={isArabic ? 'order-1' : 'order-3'}>
              <div className="relative w-64">
                <input
                  type="text"
                  value={searchValue}
                  onChange={e => setSearchValue(e.target.value)}
                  placeholder={isArabic ? 'ابحث عن خدمة أو طبيب...' : 'Search...'}
                  className={`w-full bg-[#269dcc] border border-[#269dcc] py-2.5 rounded-full text-sm
                    focus:outline-none text-white placeholder:text-white
                    ${isArabic ? 'pr-11 pl-5 text-right' : 'pl-11 pr-5 text-left'}`}
                />
                <Search className={`absolute top-1/2 -translate-y-1/2 text-white ${isArabic ? 'right-4' : 'left-4'}`} size={17} />
              </div>
            </div>

            {/* Nav links */}
            <div className={`flex-1 px-4 ${isArabic ? 'order-3' : 'order-1'}`}>
              <ul className={`flex items-center gap-0.5 text-[12.5px] font-semibold flex-wrap ${isArabic ? 'justify-end' : 'justify-start'}`}>
                {menuItems.map(item => (
                  <li
                    key={item.key}
                    ref={item.hasDeptDropdown ? deptRef : undefined}
                    className="relative"
                    onMouseEnter={item.hasDeptDropdown ? handleDeptEnter : undefined}
                    onMouseLeave={item.hasDeptDropdown ? handleDeptLeave : undefined}
                  >
                    {item.hasDeptDropdown ? (
                      <>
                        <button
                          onClick={handleDeptClick}
                          className="flex items-center gap-1 py-3 px-2.5 text-[#1786b5] hover:text-[#bf131c] transition-colors whitespace-nowrap"
                        >
                          {item.label}
                          <ChevronDown
                            size={13}
                            className={`transition-transform duration-300 ${deptMenuOpen ? 'rotate-180' : ''}`}
                          />
                        </button>

                        {/* ── Beautiful Scrollable Dropdown ── */}
                        {deptMenuOpen && (
                          <div
                            style={{
                              position: 'absolute',
                              top: 'calc(100% + 4px)',
                              [isArabic ? 'right' : 'left']: '0',
                              width: '340px',
                              background: '#fff',
                              borderRadius: '18px',
                              boxShadow: '0 20px 60px rgba(23,135,182,0.18), 0 4px 16px rgba(0,0,0,0.08)',
                              border: '1px solid #e3eff7',
                              zIndex: 50,
                              overflow: 'hidden',
                            }}
                          >
                            {/* Header */}
                            <div style={{
                              background: 'linear-gradient(135deg, #0d2137 0%, #1787b6 100%)',
                              padding: '14px 18px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '10px',
                            }}>
                              <div style={{
                                width: '30px', height: '30px', borderRadius: '8px',
                                background: 'rgba(255,255,255,0.15)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                flexShrink: 0,
                              }}>
                                <Grid size={15} color="#fff" />
                              </div>
                              <span style={{ fontWeight: '800', fontSize: '13px', color: '#fff', flex: 1 }}>
                                {isArabic ? 'الأقسام الطبية' : 'Medical Departments'}
                              </span>
                              <span style={{
                                background: 'rgba(255,255,255,0.2)',
                                color: '#fff',
                                fontSize: '11px', fontWeight: '700',
                                padding: '2px 9px', borderRadius: '50px',
                              }}>
                                {departments.length}
                              </span>
                            </div>

                            {/* Scrollable list — shows ~10 items, scroll for the rest */}
                            <div style={{
                              maxHeight: '360px',
                              overflowY: 'auto',
                              padding: '8px',
                              scrollbarWidth: 'thin',
                              scrollbarColor: '#c5dff0 transparent',
                            }}>
                              {departments.map((dept, idx) => (
                                <a
                                  key={dept.slug}
                                  href={`/department/${dept.slug}`}
                                  title={isArabic ? dept.nameAr : dept.nameEn}
                                  onClick={() => setDeptMenuOpen(false)}
                                  style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '10px 12px',
                                    borderRadius: '10px',
                                    textDecoration: 'none',
                                    color: '#2d3748',
                                    fontSize: '13px',
                                    fontWeight: '600',
                                    transition: 'all 0.15s',
                                    marginBottom: '2px',
                                  }}
                                  onMouseEnter={e => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.background = '#f0f8fd';
                                    el.style.color = '#1787b6';
                                    el.style.paddingRight = isArabic ? '16px' : '12px';
                                    el.style.paddingLeft  = isArabic ? '12px' : '16px';
                                  }}
                                  onMouseLeave={e => {
                                    const el = e.currentTarget as HTMLElement;
                                    el.style.background = 'transparent';
                                    el.style.color = '#2d3748';
                                    el.style.paddingRight = '12px';
                                    el.style.paddingLeft  = '12px';
                                  }}
                                >
                                  {/* Numbered badge */}
                                  <span style={{
                                    minWidth: '24px', height: '24px',
                                    borderRadius: '6px',
                                    background: '#e8f4fb',
                                    color: '#1787b6',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '10px', fontWeight: '800',
                                    flexShrink: 0,
                                  }}>
                                    {idx + 1}
                                  </span>
                                  {/* Name */}
                                  <span style={{
                                    flex: 1,
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                  }}>
                                    {isArabic ? dept.nameAr : dept.nameEn}
                                  </span>
                                  {/* Arrow */}
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                                    stroke="#c0d8e8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                                    style={{ flexShrink: 0, transform: isArabic ? 'rotate(180deg)' : 'none' }}>
                                    <polyline points="9 18 15 12 9 6"/>
                                  </svg>
                                </a>
                              ))}
                            </div>

                            {/* Footer hint */}
                            <div style={{
                              borderTop: '1px solid #e3eff7',
                              padding: '10px 16px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: '6px',
                              background: '#fafcfe',
                            }}>
                              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                                stroke="#1787b6" strokeWidth="2.5" strokeLinecap="round">
                                <path d="M12 5v14M5 12l7 7 7-7"/>
                              </svg>
                              <span style={{ fontSize: '11px', color: '#6b9bbd', fontWeight: '600' }}>
                                {isArabic ? 'مرر للأسفل لرؤية المزيد' : 'Scroll to see more'}
                              </span>
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <a
                        href={item.href!}
                        className="py-3 px-2.5 text-[#1786b5] hover:text-[#bf131c] transition-colors block whitespace-nowrap"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Mobile ── */}
          <div className="md:hidden flex items-center justify-between">
            {isArabic ? (
              <>
                <button onClick={() => setIsSidebarOpen(true)} className="text-white hover:text-gray-200">
                  <Menu size={26} />
                </button>
                <a href="tel:+966920002159" className="flex items-center gap-2 text-white text-sm font-medium" dir="ltr">
                  <Phone size={18} /> +966 920002159
                </a>
              </>
            ) : (
              <>
                <a href="tel:+966920002159" className="flex items-center gap-2 text-white text-sm font-medium" dir="ltr">
                  <Phone size={18} /> +966 920002159
                </a>
                <button onClick={() => setIsSidebarOpen(true)} className="text-white hover:text-gray-200">
                  <Menu size={26} />
                </button>
              </>
            )}
          </div>

        </div>
      </nav>

      {/* ── Sidebar Overlay ── */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-50 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* ── Sidebar ── */}
      <div
        className={`fixed top-0 ${isArabic ? 'left-0' : 'right-0'} h-full w-80 bg-[#1a1a1a] text-white z-50 transform transition-transform duration-300 md:hidden overflow-y-auto
          ${isSidebarOpen ? 'translate-x-0' : isArabic ? '-translate-x-full' : 'translate-x-full'}`}
        style={{ fontFamily: "'Tajawal','Cairo',sans-serif" }}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">{isArabic ? 'القائمة' : 'Menu'}</h2>
            <button onClick={() => setIsSidebarOpen(false)}>
              <X size={26} />
            </button>
          </div>

          {/* Static links */}
          <ul className="space-y-0.5 mb-2">
            {menuItems.filter(i => !i.hasDeptDropdown).map(item => (
              <li key={item.key}>
                <a
                  href={item.href!}
                  className={`block py-2.5 px-4 hover:bg-gray-800 rounded-lg font-medium text-sm ${isArabic ? 'text-right' : 'text-left'}`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Departments accordion in sidebar */}
          <div className="mb-2">
            <button
              onClick={() => setOpenDropdown(openDropdown === 'depts' ? null : 'depts')}
              className={`w-full flex items-center justify-between py-2.5 px-4 hover:bg-gray-800 rounded-lg font-medium text-sm ${isArabic ? 'text-right' : 'text-left'}`}
            >
              <span>{isArabic ? 'الأقسام' : 'Departments'}</span>
              <ChevronDown
                size={15}
                className={`transition-transform duration-300 ${openDropdown === 'depts' ? 'rotate-180' : ''}`}
              />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openDropdown === 'depts' ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <ul className={`py-1 ${isArabic ? 'pr-4' : 'pl-4'} space-y-0.5 max-h-80 overflow-y-auto`}>
                {departments.map(dept => (
                  <li key={dept.slug}>
                    <a
                      href={`/department/${dept.slug}`}
                      className={`flex items-center gap-2 py-2 px-3 hover:bg-gray-800 rounded-lg text-xs text-gray-300 hover:text-white`}
                      onClick={() => setIsSidebarOpen(false)}
                    >
                      <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#1787b6', flexShrink: 0 }} />
                      {isArabic ? dept.nameAr : dept.nameEn}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Search */}
          <div className="my-5">
            <div className="relative">
              <input
                type="text"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                placeholder={isArabic ? 'ابحث...' : 'Search...'}
                className={`w-full bg-gray-800 border border-gray-700 py-2.5 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none
                  ${isArabic ? 'pr-11 pl-5 text-right' : 'pl-11 pr-5 text-left'}`}
              />
              <Search className={`absolute top-1/2 -translate-y-1/2 text-gray-400 ${isArabic ? 'right-4' : 'left-4'}`} size={15} />
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-3 mb-6 border-t border-gray-700 pt-4">
            <a href="mailto:info@najransh.sa" className={`flex items-center gap-3 text-gray-300 hover:text-white ${isArabic ? 'flex-row-reverse text-right' : ''}`}>
              <Mail size={17} className="text-[#1389bf] flex-shrink-0" />
              <span className="text-sm">info@najransh.sa</span>
            </a>
            <a href="#" className={`flex items-center gap-3 text-gray-300 hover:text-white ${isArabic ? 'flex-row-reverse text-right' : ''}`}>
              <MapPin size={17} className="text-[#1389bf] flex-shrink-0" />
              <span className="text-sm">{isArabic ? 'شارع الملك سعود، نجران، السعودية' : 'King Saud Street, Najran, Saudi Arabia'}</span>
            </a>
            <a href="tel:+966920002159" className={`flex items-center gap-3 text-gray-300 hover:text-white ${isArabic ? 'flex-row-reverse text-right' : ''}`}>
              <Smartphone size={17} className="text-[#1389bf] flex-shrink-0" />
              <span className="text-sm" dir="ltr">+966 920002159</span>
            </a>
            <a href="tel:+966175227888" className={`flex items-center gap-3 text-gray-300 hover:text-white ${isArabic ? 'flex-row-reverse text-right' : ''}`}>
              <Smartphone size={17} className="text-[#1389bf] flex-shrink-0" />
              <span className="text-sm" dir="ltr">+966 175227888</span>
            </a>
          </div>

          {/* Action buttons */}
          <div className="border-t border-gray-700 pt-4">
            <div className="flex items-center justify-center gap-3">
              <a href="/contact" className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1389bf] hover:bg-[#0f6a96]">
                <Phone size={18} />
              </a>
              <button onClick={() => { setIsShareOpen(true); setIsSidebarOpen(false); }}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1389bf] hover:bg-[#0f6a96]">
                <Share2 size={18} />
              </button>
              <button onClick={() => { setIsLangOpen(true); setIsSidebarOpen(false); }}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1389bf] hover:bg-[#0f6a96]">
                <Globe size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Share Popup ── */}
      {isShareOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" onClick={() => setIsShareOpen(false)}>
          <div className="bg-white rounded-2xl p-7 w-full max-w-sm mx-4 shadow-2xl" onClick={e => e.stopPropagation()} style={{ fontFamily: "'Tajawal','Cairo',sans-serif" }}>
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-lg font-semibold text-gray-800">{isArabic ? 'شارك الموقع' : 'Share the Website'}</h3>
              <button onClick={() => setIsShareOpen(false)}><X size={24} className="text-gray-400" /></button>
            </div>
            <p className="text-gray-600 text-center mb-7 text-sm">
              {isArabic ? 'شارك تجربة الرعاية الصحية المتميزة مع أحبابك' : 'Share the outstanding healthcare experience with your loved ones'}
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { href: `https://wa.me/?text=${encodeURIComponent(shareText+' '+shareUrl)}`, bg: '#25D366', icon: 'W', label: isArabic ? 'واتساب' : 'WhatsApp' },
                { href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, bg: '#000', icon: '𝕏', label: isArabic ? 'تويتر' : 'Twitter' },
                { href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, bg: '#1877F2', icon: 'f', label: isArabic ? 'فيسبوك' : 'Facebook' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl text-white text-2xl font-bold shadow-md group-hover:scale-110 transition-transform" style={{ background: s.bg }}>
                    {s.icon}
                  </div>
                  <span className="text-xs font-medium mt-2.5 text-gray-700">{s.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── Language Popup ── */}
      {isLangOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50" onClick={() => setIsLangOpen(false)}>
          <div className="bg-white rounded-2xl p-7 w-full max-w-sm mx-4 shadow-2xl" onClick={e => e.stopPropagation()} style={{ fontFamily: "'Tajawal','Cairo',sans-serif" }}>
            <div className="text-center">
              <Globe className="text-[#1389bf] mx-auto mb-3" size={44} />
              <h3 className="text-lg font-semibold text-gray-800 mb-1">{isArabic ? 'تغيير لغة الموقع' : 'Change Site Language'}</h3>
              <p className="text-gray-500 text-sm mb-6">{isArabic ? 'اختر اللغة المفضلة' : 'Choose your preferred language'}</p>
            </div>
            <div className="space-y-3">
              {['ar', 'en'].map(l => (
                <button key={l}
                  onClick={() => { changeLanguage(l); setIsLangOpen(false); }}
                  className={`w-full py-3.5 rounded-xl font-medium text-base transition-all ${currentLang === l ? 'bg-[#1389bf] text-white' : 'border-2 border-[#1389bf] text-[#1389bf] hover:bg-[#1389bf] hover:text-white'}`}
                >
                  {l === 'ar' ? 'العربية' : 'English'}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700&display=swap');
        @keyframes slideUp { from { transform:translateY(20px); opacity:0; } to { transform:translateY(0); opacity:1; } }
        details summary::-webkit-details-marker { display: none; }
        details[open] summary span:last-child { transform: rotate(45deg); }
      `}</style>
    </>
  );
};

export default MainNavbar;
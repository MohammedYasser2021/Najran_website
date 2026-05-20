import React, { useState } from 'react';
import { FaPhoneAlt, FaShareAlt, FaGlobe } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
// أولاً: أضف الـ imports في أعلى الملف (نفس الـ icons الموجودة في Footer)
import { FaYoutube, FaLinkedinIn, FaFacebookF, FaInstagram, FaTiktok, FaSnapchatGhost } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logo from '../assets/logo.png';
import "../App.css"

const Navbar = ({ currentLang, changeLanguage }) => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const toggleShare = () => setIsShareOpen(!isShareOpen);
  const toggleLang = () => setIsLangOpen(!isLangOpen);

  const shareUrl = window.location.href;
  const shareText = currentLang === 'ar' 
    ? "رعاية طبية متكاملة بمعايير عالمية في نجران - اكتشف معنا" 
    : "Comprehensive Medical Care with Global Standards in Najran - Discover with us";

  const tagline = currentLang === 'ar' 
    ? 'رعاية طبية متكاملة بمعايير عالمية ' 
    : 'Comprehensive Medical Care with Global Standards';

  return (
    <>
      <nav className="bg-white shadow-lg border-b border-gray-100 py-4 md:py-6">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

{/* Desktop & Tablet */}
<div className="hidden md:flex items-center justify-between gap-2">
  
  {/* اللوجو */}
  <div className="flex-shrink-0">
    <img 
      src={logo} 
      alt="Logo" 
      className="h-16 lg:h-24 w-auto object-contain drop-shadow-md" 
    />
  </div>

  {/* الوسط */}
  <div className="flex-1 text-center px-2 lg:px-8 min-w-0">
    <p className="text-base lg:text-2xl font-bold tracking-normal uppercase text-[#1787b6] leading-tight">
      {tagline}
    </p>
    <div className="flex items-center justify-center gap-1 lg:gap-3 mt-2 flex-wrap">
      {[
        { href: 'https://wa.me/966920002159',                                        icon: <FaWhatsapp />,      color: '#25D366' },
        { href: 'https://youtube.com/@snh_najrann',                                  icon: <FaYoutube />,       color: '#FF0000' },
        { href: 'https://www.linkedin.com/company/snh_najran/?originalSubdomain=sa', icon: <FaLinkedinIn />,    color: '#0A66C2' },
        { href: 'https://www.facebook.com/share/18ZTYzWRdm/',                        icon: <FaFacebookF />,     color: '#1877F2' },
        { href: 'https://www.instagram.com/snh_najran',                              icon: <FaInstagram />,     color: '#E1306C' },
        { href: 'https://x.com/SNH_Najran',                                          icon: <FaXTwitter />,      color: '#000000' },
        { href: 'https://www.snapchat.com/add/snh_najran',                           icon: <FaSnapchatGhost />, color: '#FFFC00' },
        { href: 'https://www.tiktok.com/@snh_najran',                                icon: <FaTiktok />,        color: '#000000' },
      ].map(({ href, icon, color }, i) => (
        
          <a
          key={i}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-7 h-7 lg:w-8 lg:h-8 flex items-center justify-center rounded-full text-white text-xs lg:text-sm transition-transform duration-300 hover:scale-110"
          style={{ backgroundColor: color }}
        >
          {icon}
        </a>
      ))}
    </div>
  </div>

  {/* الأزرار الثلاثة */}
  <div className="flex items-center gap-3 lg:gap-8 flex-shrink-0">
    
    <a href="/contact" className="flex flex-col items-center group">
      <div className="w-9 h-9 lg:w-12 lg:h-12 flex items-center justify-center rounded-full bg-[#1e9dd4] group-hover:bg-[#1786b5] transition-all duration-300 shadow-md">
        <FaPhoneAlt className="text-lg lg:text-2xl text-white" />
      </div>
      <span className="text-xs lg:text-sm font-bold mt-1 lg:mt-2 text-[#1e9dd4]">
        {currentLang === 'ar' ? 'تواصل' : 'Contact'}
      </span>
    </a>

    <button onClick={toggleShare} className="flex flex-col items-center group">
      <div className="w-9 h-9 lg:w-12 lg:h-12 flex items-center justify-center rounded-full bg-[#1e9dd4] group-hover:bg-[#1786b5] transition-all duration-300 shadow-md">
        <FaShareAlt className="text-lg lg:text-2xl text-white" />
      </div>
      <span className="text-xs lg:text-sm font-bold mt-1 lg:mt-2 text-[#1e9dd4]">
        {currentLang === 'ar' ? 'شارك' : 'Share'}
      </span>
    </button>

    <button onClick={toggleLang} className="flex flex-col items-center group">
      <div className="w-9 h-9 lg:w-12 lg:h-12 flex items-center justify-center rounded-full bg-[#1e9dd4] group-hover:bg-[#1786b5] transition-all duration-300 shadow-md">
        <FaGlobe className="text-lg lg:text-2xl text-white" />
      </div>
      <span className="text-xs lg:text-sm font-bold mt-1 lg:mt-2 text-[#1e9dd4]">
        {currentLang === 'ar' ? 'English' : 'عربي'}
      </span>
    </button>

  </div>
</div>

          {/* Mobile Version */}
          <div className="md:hidden flex flex-col items-center py-3">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-20 w-auto object-contain mb-3 drop-shadow-md" 
            />
            <p className="text-[16px] sm:text-xl font-bold  uppercase text-center text-[#1787b6] px-4">
              {tagline}
            </p>
            {/* Social Media Links - Mobile */}
<div className="flex items-center justify-center gap-2 mt-3 flex-wrap">
  {[
    { href: 'https://wa.me/966920002159',                                        icon: <FaWhatsapp />,       color: '#25D366' },
    { href: 'https://youtube.com/@snh_najrann',                                  icon: <FaYoutube />,        color: '#FF0000' },
    { href: 'https://www.linkedin.com/company/snh_najran/?originalSubdomain=sa', icon: <FaLinkedinIn />,     color: '#0A66C2' },
    { href: 'https://www.facebook.com/share/18ZTYzWRdm/',                        icon: <FaFacebookF />,      color: '#1877F2' },
    { href: 'https://www.instagram.com/snh_najran',                              icon: <FaInstagram />,      color: '#E1306C' },
    { href: 'https://x.com/SNH_Najran',                                          icon: <FaXTwitter />,       color: '#000000' },
    { href: 'https://www.snapchat.com/add/snh_najran',                           icon: <FaSnapchatGhost />,  color: '#FFFC00' },
    { href: 'https://www.tiktok.com/@snh_najran',                                icon: <FaTiktok />,         color: '#000000' },
  ].map(({ href, icon, color }, i) => (
    
     <a 
      key={i}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-7 h-7 flex items-center justify-center rounded-full text-white text-xs transition-transform duration-300 hover:scale-110"
      style={{ backgroundColor: color }}
    >
      {icon}
    </a>
  ))}
</div>
          </div>

        </div>
      </nav>

      {/* Popup شارك */}
      {isShareOpen && (
        <div 
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={() => setIsShareOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl p-8 w-full max-w-sm mx-4 shadow-2xl animate-[popup_0.3s_ease-out_forwards]"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {currentLang === 'ar' ? 'شارك الموقع' : 'Share the Website'}
              </h3>
              <button onClick={() => setIsShareOpen(false)} className="text-gray-400 hover:text-gray-600">
                <FiX size={28} />
              </button>
            </div>

            <p className="text-gray-600 text-center mb-8 text-sm leading-relaxed">
              {currentLang === 'ar' 
                ? 'شارك تجربة الرعاية الطبية المتميزة مع أحبابك' 
                : 'Share the outstanding medical care experience with your loved ones'}
            </p>

            <div className="grid grid-cols-3 gap-8">
              <a href={`https://wa.me/966920002159`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#25D366] text-white text-4xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  <FaWhatsapp />
                </div>
                <span className="text-xs font-medium mt-3 text-gray-700">واتساب</span>
              </a>

              <a href={`https://x.com/SNH_Najran`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-black text-white text-4xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  𝕏
                </div>
                <span className="text-xs font-medium mt-3 text-gray-700">تويتر</span>
              </a>

              <a href={`https://www.facebook.com/share/18ZTYzWRdm/`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#1877F2] text-white text-4xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  f
                </div>
                <span className="text-xs font-medium mt-3 text-gray-700">فيسبوك</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Popup تغيير اللغة */}
      {isLangOpen && (
        <div 
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 transition-opacity duration-300"
          onClick={() => setIsLangOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl p-8 w-full max-w-sm mx-4 shadow-2xl animate-[popup_0.3s_ease-out_forwards]"
            onClick={e => e.stopPropagation()}
          >
            <div className="text-center">
              <FaGlobe className="text-5xl text-[#1e9dd4] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {currentLang === 'ar' ? 'تغيير لغة الموقع' : 'Change Site Language'}
              </h3>
              <p className="text-gray-500 text-sm mb-7">
                {currentLang === 'ar' ? 'اختر اللغة المفضلة' : 'Choose your preferred language'}
              </p>
            </div>

            <div className="space-y-3">
              <button 
                onClick={() => changeLanguage('ar')}
                className={`w-full py-4 rounded-2xl font-medium text-base transition-all ${currentLang === 'ar' ? 'bg-[#1e9dd4] text-white' : 'border-2 border-[#1e9dd4] text-[#1e9dd4] hover:bg-[#1e9dd4] hover:text-white'}`}
              >
                العربية
              </button>
              <button 
                onClick={() => changeLanguage('en')}
                className={`w-full py-4 rounded-2xl font-medium text-base transition-all ${currentLang === 'en' ? 'bg-[#1e9dd4] text-white' : 'border-2 border-[#1e9dd4] text-[#1e9dd4] hover:bg-[#1e9dd4] hover:text-white'}`}
              >
                English
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
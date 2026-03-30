import React, { useState } from 'react';
import { FaPhoneAlt, FaShareAlt, FaGlobe } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.png';
import "../App.css"

const Navbar = ({ currentLang, changeLanguage }) => {
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const toggleShare = () => setIsShareOpen(!isShareOpen);
  const toggleLang = () => setIsLangOpen(!isLangOpen);

  const shareUrl = window.location.href;
  const shareText = currentLang === 'ar' 
    ? "رعاية بآفاق متجددة - اكتشف معنا" 
    : "Care with Renewed Horizons - Discover with us";

  const tagline = currentLang === 'ar' 
    ? 'رعاية بآفاق متجددة' 
    : 'Care with Renewed Horizons';

  return (
    <>
      <nav className="bg-white shadow-lg border-b border-gray-100 py-4 md:py-5 font-['Cairo']">
        <div className="max-w-7xl mx-auto px-4 md:px-6">

          {/* Desktop & Tablet */}
          <div className="hidden md:flex items-center justify-between">
            <div className="flex-shrink-0">
              <img 
                src={logo} 
                alt="Logo" 
                className="h-20 w-auto object-contain" 
              />
            </div>

            <div className="flex-1 text-center px-8">
              <p className="text-2xl font-bold tracking-wide" style={{ color: '#2c4c9a' }}>
                {tagline}
              </p>
            </div>

            <div className="flex items-center gap-8">
              {/* تواصل */}
              <a href="/contact" className="flex flex-col items-center group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1389bf] group-hover:bg-[#0f6a96] transition-all duration-300">
                  <FaPhoneAlt className="text-2xl text-white" />
                </div>
                <span className="text-xs font-semibold mt-2 text-gray-700">
                  {currentLang === 'ar' ? 'تواصل' : 'Contact'}
                </span>
              </a>

              {/* شارك */}
              <button onClick={toggleShare} className="flex flex-col items-center group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1389bf] group-hover:bg-[#0f6a96] transition-all duration-300">
                  <FaShareAlt className="text-2xl text-white" />
                </div>
                <span className="text-xs font-semibold mt-2 text-gray-700">
                  {currentLang === 'ar' ? 'شارك' : 'Share'}
                </span>
              </button>

              {/* اللغة */}
              <button onClick={toggleLang} className="flex flex-col items-center group">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1389bf] group-hover:bg-[#0f6a96] transition-all duration-300">
                  <FaGlobe className="text-2xl text-white" />
                </div>
                <span className="text-xs font-semibold mt-2 text-gray-700">
                  {currentLang === 'ar' ? 'English' : 'عربي'}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Version */}
          <div className="md:hidden flex flex-col items-center py-2">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-14 w-auto object-contain mb-2" 
            />
            <p className="text-xl font-bold tracking-wide text-center" style={{ color: '#2c4c9a' }}>
              {tagline}
            </p>
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
                ? 'شارك تجربة الرعاية الصحية المتميزة مع أحبابك' 
                : 'Share the outstanding healthcare experience with your loved ones'}
            </p>

            <div className="grid grid-cols-3 gap-8">
              <a href={`https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-[#25D366] text-white text-4xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  <FaWhatsapp />
                </div>
                <span className="text-xs font-medium mt-3 text-gray-700">واتساب</span>
              </a>

              <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-black text-white text-4xl shadow-md group-hover:scale-110 transition-transform duration-300">
                  𝕏
                </div>
                <span className="text-xs font-medium mt-3 text-gray-700">تويتر</span>
              </a>

              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center group">
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
              <FaGlobe className="text-5xl text-[#1389bf] mx-auto mb-4" />
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
                className={`w-full py-4 rounded-2xl font-medium text-base transition-all ${currentLang === 'ar' ? 'bg-[#1389bf] text-white' : 'border-2 border-[#1389bf] text-[#1389bf] hover:bg-[#1389bf] hover:text-white'}`}
              >
                العربية
              </button>
              <button 
                onClick={() => changeLanguage('en')}
                className={`w-full py-4 rounded-2xl font-medium text-base transition-all ${currentLang === 'en' ? 'bg-[#1389bf] text-white' : 'border-2 border-[#1389bf] text-[#1389bf] hover:bg-[#1389bf] hover:text-white'}`}
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
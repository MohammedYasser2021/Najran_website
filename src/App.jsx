import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MainNavbar from './components/MainNavbar';
import CustomLoading from './components/CustomLoading';
import ReservationSection from './components/ReservationSection';

const App = () => {
  const [currentLang, setCurrentLang] = useState('ar');
  const [isLoading, setIsLoading] = useState(true);

  // تحميل اللغة من localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem('siteLanguage') || 'ar';
    setCurrentLang(savedLang);
    document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = savedLang;
  }, []);

  // الـ Loading يظهر 2.5 ثانية فقط
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);   // ← غير الرقم ده لو عايز 2000 (2 ثانية) أو 3000 (3 ثواني)

    return () => clearTimeout(timer);
  }, []);

  const changeLanguage = (lang) => {
    setCurrentLang(lang);
    localStorage.setItem('siteLanguage', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    window.location.reload();
  };

  // عرض الـ Loading فقط (بدون أي نص)
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <CustomLoading />
      </div>
    );
  }

  // الموقع الطبيعي بعد التحميل
  return (
    <div className="font-['Cairo'] min-h-screen">
      <Navbar 
        currentLang={currentLang} 
        changeLanguage={changeLanguage} 
      />

      <MainNavbar 
        currentLang={currentLang} 
        changeLanguage={changeLanguage} 
      />

      <main>
        <ReservationSection currentLang={currentLang} />
      </main>
    </div>
  );
};

export default App;
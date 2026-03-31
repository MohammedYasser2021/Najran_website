import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import MainNavbar from './components/MainNavbar';
import CustomLoading from './components/CustomLoading';
import ReservationSection from './components/ReservationSection';
import AboutUsSection from './components/AboutUsSection';
import OurGoal from './components/OurGoal';
import Doctors from './components/DoctorsSection';
import OurSec from './components/OurSec';
import OurServices from './components/OurServices';
import OurPrizes from './components/OurPrizes';
import Companies from './components/Companies';

const CYCLE_DURATION = 2.4; // يتطابق مع CustomLoading
const CYCLES = 2;
const LOADING_MS = CYCLE_DURATION * CYCLES * 1000; // 4800ms
const FADE_MS = 600;

const App = () => {
  const [currentLang, setCurrentLang] = useState('ar');
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('siteLanguage') || 'ar';
    setCurrentLang(savedLang);
    document.documentElement.dir = savedLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = savedLang;
  }, []);

  useEffect(() => {
    // بعد دورتين ابدأ الـ fade out
    const fadeTimer = setTimeout(() => setIsFading(true), LOADING_MS);
    // بعد الـ fade شيل الـ loading screen
    const doneTimer = setTimeout(() => setIsLoading(false), LOADING_MS + FADE_MS);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  const changeLanguage = (lang) => {
    setCurrentLang(lang);
    localStorage.setItem('siteLanguage', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    window.location.reload();
  };

  return (
    <div className="font-['Cairo'] min-h-screen">

      {/* Loading overlay */}
      {isLoading && (
        <div
          className="fixed inset-0 z-50 bg-white flex items-center justify-center"
          style={{
            transition: `opacity ${FADE_MS}ms ease`,
            opacity: isFading ? 0 : 1,
            pointerEvents: isFading ? 'none' : 'all',
          }}
        >
          <CustomLoading />
        </div>
      )}

      {/* Page content — يتظهر مع نهاية الـ fade */}
      <div
        style={{
          transition: `opacity ${FADE_MS}ms ease`,
          opacity: isFading ? 1 : 0,
        }}
      >
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
          <AboutUsSection currentLang={currentLang} />
          <OurGoal currentLang={currentLang} />
          <Doctors currentLang={currentLang} />
          <OurSec currentLang={currentLang} />
          <OurServices currentLang={currentLang} />
          <OurPrizes currentLang={currentLang} />
          <Companies currentLang={currentLang} />
        </main>
      </div>

    </div>
  );
};

export default App;
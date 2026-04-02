import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import AboutPage from './components/AboutPage';
import DepartmentPage from './components/DepartmentPage';
import FloatingActions from './components/FloatingActions';
import DoctorsPage from './components/DoctorsPage';
import PatientsRights from './components/PatientsRights';
import ContactUsSection from './components/ContactUsSectionn';
import CompanyInf from './components/CompanyInf';
import Footer from './components/Footer';

const CYCLE_DURATION = 2.4;
const CYCLES = 2;
const LOADING_MS = CYCLE_DURATION * CYCLES * 1000;
const FADE_MS = 600;

const HomePage = ({ currentLang, changeLanguage }) => (
  <>
    <Navbar currentLang={currentLang} changeLanguage={changeLanguage} />
    <MainNavbar currentLang={currentLang} changeLanguage={changeLanguage} />
    <main>
      <ReservationSection currentLang={currentLang} />
      <AboutUsSection currentLang={currentLang} />
      <OurGoal currentLang={currentLang} />
      <Doctors currentLang={currentLang} />
      <OurSec currentLang={currentLang} />
      <OurServices currentLang={currentLang} />
      <OurPrizes currentLang={currentLang} />
      <Companies currentLang={currentLang} />
      <PatientsRights currentLang={currentLang} />
      <ContactUsSection currentLang={currentLang} />
    </main>
  </>
);

const AboutPageWrapper = ({ currentLang, changeLanguage }) => (
  <>
    <Navbar currentLang={currentLang} changeLanguage={changeLanguage} />
    <MainNavbar currentLang={currentLang} changeLanguage={changeLanguage} />
    <AboutPage currentLang={currentLang} changeLanguage={changeLanguage} />
  </>
);

const DepartmentPageWrapper = ({ currentLang, changeLanguage }) => (
  <>
    <Navbar currentLang={currentLang} changeLanguage={changeLanguage} />
    <MainNavbar currentLang={currentLang} changeLanguage={changeLanguage} />
    <DepartmentPage currentLang={currentLang} changeLanguage={changeLanguage} />
  </>
);

const DoctorsPageWrapper = ({ currentLang, changeLanguage }) => (
  <>
    <Navbar currentLang={currentLang} changeLanguage={changeLanguage} />
    <MainNavbar currentLang={currentLang} changeLanguage={changeLanguage} />
    <DoctorsPage currentLang={currentLang} changeLanguage={changeLanguage} />
  </>
);

const App = () => {
  const [currentLang, setCurrentLang] = useState('ar');
  const [isLoading, setIsLoading]     = useState(true);
  const [isFading, setIsFading]       = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('siteLanguage') || 'ar';
    setCurrentLang(savedLang);
    document.documentElement.dir  = savedLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = savedLang;
  }, []);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setIsFading(true), LOADING_MS);
    const doneTimer = setTimeout(() => setIsLoading(false), LOADING_MS + FADE_MS);
    return () => { clearTimeout(fadeTimer); clearTimeout(doneTimer); };
  }, []);

  const changeLanguage = (lang) => {
    setCurrentLang(lang);
    localStorage.setItem('siteLanguage', lang);
    document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  return (
    <Router>
      <div className="font-['Cairo'] min-h-screen flex flex-col">
        {isLoading && (
          <div
            className="fixed inset-0 z-50 bg-white flex items-center justify-center"
            style={{ transition: `opacity ${FADE_MS}ms ease`, opacity: isFading ? 0 : 1, pointerEvents: isFading ? 'none' : 'all' }}
          >
            <CustomLoading />
          </div>
        )}

        {!isLoading && (
          <FloatingActions currentLang={currentLang} changeLanguage={changeLanguage} />
        )}

        <div className="flex flex-col flex-1" style={{ transition: `opacity ${FADE_MS}ms ease`, opacity: isFading ? 1 : 0 }}>
          {/* Page content */}
          <div className="flex-1">
            <Routes>
              <Route path="/"                 element={<HomePage             currentLang={currentLang} changeLanguage={changeLanguage} />} />
              <Route path="/about"            element={<AboutPageWrapper     currentLang={currentLang} changeLanguage={changeLanguage} />} />
              <Route path="/department/:slug" element={<DepartmentPageWrapper currentLang={currentLang} changeLanguage={changeLanguage} />} />
              <Route path="/doctors"          element={<DoctorsPageWrapper   currentLang={currentLang} changeLanguage={changeLanguage} />} />
            </Routes>
          </div>

          {/* ✅ CompanyInf & Footer appear on ALL pages */}
          <CompanyInf currentLang={currentLang} />
          <Footer currentLang={currentLang} />
        </div>
      </div>
    </Router>
  );
};

export default App;
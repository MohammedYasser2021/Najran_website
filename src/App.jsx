import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainNavbar from './components/MainNavbar';
import CustomLoading from './components/CustomLoading';
import ReservationSection from './components/ReservationSection';
import AboutUsSection from './components/AboutUsSection';
import CeoSection from './components/CeoSection';
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
import ClinicDoctorsPage from './components/ClinicDoctorsPage';
import ArticlesPage from './components/ArticlesPagee';
import ContactPage from './components/ContactPage';
import NewsPage from './components/NewsPage';

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
      <CeoSection currentLang={currentLang} />
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
              <Route
  path="/clinic-doctors"
  element={
    <>
      <Navbar currentLang={currentLang} changeLanguage={changeLanguage} />
      <MainNavbar currentLang={currentLang} changeLanguage={changeLanguage} />
      <ClinicDoctorsPage currentLang={currentLang} />
    </>
  }
/>
<Route 
    path="/articles" 
    element={
      <>
        <Navbar currentLang={currentLang} changeLanguage={changeLanguage} />
        <MainNavbar currentLang={currentLang} changeLanguage={changeLanguage} />
        <ArticlesPage currentLang={currentLang} />
      </>
    } 
  />
  <Route 
  path="/contact" 
  element={
    <>
      <Navbar currentLang={currentLang} changeLanguage={changeLanguage} />
      <MainNavbar currentLang={currentLang} changeLanguage={changeLanguage} />
      <ContactPage currentLang={currentLang} />
    </>
  } 
/>
  <Route 
  path="/news" 
  element={
    <>
      <Navbar currentLang={currentLang} changeLanguage={changeLanguage} />
      <MainNavbar currentLang={currentLang} changeLanguage={changeLanguage} />
      <NewsPage currentLang={currentLang} />
    </>
  } 
/>
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










// import React, { useEffect, useState } from 'react';
 
// // ============================================================
// // ⚠️  WEBSITE SUSPENDED — لإعادة التفعيل:
// //     1. احذف السطر:  export default SuspendedPage;
// //     2. أزل الـ /* و */ من الكود الأصلي في الأسفل
// // ============================================================
 
// const SuspendedPage = () => {
//   const [dots, setDots] = useState(0);
 
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDots(d => (d + 1) % 4);
//     }, 600);
//     return () => clearInterval(interval);
//   }, []);
 
//   return (
//     <div style={styles.root}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap');
//         * { margin: 0; padding: 0; box-sizing: border-box; }
//         @keyframes pulse {
//           0%, 100% { opacity: 1; transform: scale(1); }
//           50% { opacity: 0.6; transform: scale(0.97); }
//         }
//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(24px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         @keyframes spin {
//           from { transform: rotate(0deg); }
//           to   { transform: rotate(360deg); }
//         }
//         .icon-ring {
//           width: 100px; height: 100px; border-radius: 50%;
//           border: 3px solid rgba(220,38,38,0.15);
//           border-top-color: #dc2626;
//           animation: spin 1.4s linear infinite;
//           position: absolute;
//         }
//         .card    { animation: fadeIn 0.7s ease both; }
//         .card-in { animation: fadeIn 0.7s 0.2s ease both; opacity: 0; }
//         .badge   { animation: pulse 2s ease infinite; }
//       `}</style>
 
//       <div style={styles.grid} />
 
//       <div style={styles.card} className="card">
//         <div style={styles.iconWrap}>
//           <div className="icon-ring" />
//           <div style={styles.iconCircle}>
//             <svg width="38" height="38" viewBox="0 0 24 24" fill="none"
//               stroke="#dc2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <circle cx="12" cy="12" r="10"/>
//               <line x1="12" y1="8" x2="12" y2="12"/>
//               <line x1="12" y1="16" x2="12.01" y2="16"/>
//             </svg>
//           </div>
//         </div>
 
//         <div className="card-in" style={styles.content}>
//           <span style={styles.badge} className="badge">503 — Service Unavailable</span>
//           <h1 style={styles.title}>هذا الموقع معلّق مؤقتاً</h1>
//           <p style={styles.subtitle}>This website has been temporarily suspended</p>
//           <div style={styles.divider} />
//           <p style={styles.body}>
//             إذا كنت صاحب الموقع، يرجى التواصل مع مزود الخدمة لإعادة تفعيل الاشتراك.
//           </p>
//           <p style={styles.bodyEn}>
//             If you are the site owner, please contact your service provider to renew your subscription.
//           </p>
//           <div style={styles.footer}>
//             <span style={styles.footerDot} />
//             <span style={styles.footerText}>جارٍ الانتظار{'.'.repeat(dots)}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
 
// const styles = {
//   root: {
//     fontFamily: "'Cairo', sans-serif", minHeight: '100vh', background: '#0a0a0a',
//     display: 'flex', alignItems: 'center', justifyContent: 'center',
//     position: 'relative', overflow: 'hidden', padding: '24px',
//   },
//   grid: {
//     position: 'absolute', inset: 0,
//     backgroundImage: `linear-gradient(rgba(220,38,38,0.04) 1px, transparent 1px),
//                       linear-gradient(90deg, rgba(220,38,38,0.04) 1px, transparent 1px)`,
//     backgroundSize: '40px 40px', pointerEvents: 'none',
//   },
//   card: {
//     background: 'rgba(18,18,18,0.95)', border: '1px solid rgba(220,38,38,0.18)',
//     borderRadius: '20px', padding: '52px 48px', maxWidth: '520px', width: '100%',
//     textAlign: 'center', boxShadow: '0 0 80px rgba(220,38,38,0.08), 0 24px 60px rgba(0,0,0,0.6)',
//     position: 'relative', zIndex: 1,
//   },
//   iconWrap: {
//     position: 'relative', width: '100px', height: '100px',
//     margin: '0 auto 32px', display: 'flex', alignItems: 'center', justifyContent: 'center',
//   },
//   iconCircle: {
//     width: '72px', height: '72px', background: 'rgba(220,38,38,0.08)',
//     border: '1px solid rgba(220,38,38,0.2)', borderRadius: '50%',
//     display: 'flex', alignItems: 'center', justifyContent: 'center',
//   },
//   content: {},
//   badge: {
//     display: 'inline-block', background: 'rgba(220,38,38,0.1)',
//     border: '1px solid rgba(220,38,38,0.3)', color: '#f87171',
//     fontSize: '11px', fontWeight: '700', letterSpacing: '1.5px',
//     padding: '4px 14px', borderRadius: '100px', marginBottom: '20px', textTransform: 'uppercase',
//   },
//   title:     { color: '#f5f5f5', fontSize: '26px', fontWeight: '900', marginBottom: '8px', lineHeight: 1.3, direction: 'rtl' },
//   subtitle:  { color: '#6b7280', fontSize: '14px', fontWeight: '400', marginBottom: '28px' },
//   divider:   { height: '1px', background: 'rgba(255,255,255,0.06)', marginBottom: '24px' },
//   body:      { color: '#9ca3af', fontSize: '14px', lineHeight: '1.8', direction: 'rtl', marginBottom: '8px' },
//   bodyEn:    { color: '#6b7280', fontSize: '12px', lineHeight: '1.8', direction: 'ltr', marginBottom: '32px' },
//   footer:    { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' },
//   footerDot: { width: '6px', height: '6px', borderRadius: '50%', background: '#dc2626', display: 'inline-block' },
//   footerText:{ color: '#4b5563', fontSize: '12px', fontFamily: "'Cairo', sans-serif", direction: 'rtl', minWidth: '90px', textAlign: 'left' },
// };
 
// // ✅ لإعادة تفعيل الموقع: احذف السطر التالي فقط ثم أزل الـ comment عن الكود الأصلي
// export default SuspendedPage;
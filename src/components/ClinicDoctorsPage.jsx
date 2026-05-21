import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// @ts-ignore
import img1 from '../assets/doctors/1.png';
// @ts-ignore
import img2 from '../assets/doctors/2.png';
// @ts-ignore
import img3 from '../assets/doctors/3.png';
// @ts-ignore
import img4 from '../assets/doctors/4.png';
// @ts-ignore
import img5 from '../assets/doctors/5.png';
// @ts-ignore
import img6 from '../assets/doctors/6.png';
// @ts-ignore
import img7 from '../assets/doctors/7.png';
// @ts-ignore
import img8 from '../assets/doctors/8.png';
// @ts-ignore
import img9 from '../assets/doctors/9.png';
// @ts-ignore
import img10 from '../assets/doctors/10.PNG';
// @ts-ignore
import img11 from '../assets/doctors/11.PNG';
// @ts-ignore
import img12 from '../assets/doctors/12.png';
// @ts-ignore
import img13 from '../assets/doctors/13.png';
// @ts-ignore
import img14 from '../assets/doctors/14.png';
// @ts-ignore
import img15 from '../assets/doctors/15.png';
// @ts-ignore
import img16 from '../assets/doctors/16.PNG';
// @ts-ignore
import img17 from '../assets/doctors/17.PNG';
// @ts-ignore
import img18 from '../assets/doctors/18.png';
// @ts-ignore
import img19 from '../assets/doctors/19.png';
// @ts-ignore
import img20 from '../assets/doctors/20.PNG';
// @ts-ignore
import img21 from '../assets/doctors/21.png';
// @ts-ignore
import img22 from '../assets/doctors/22.png';
// @ts-ignore
import img23 from '../assets/doctors/23.png';
// @ts-ignore
import img24 from '../assets/doctors/24.png';
// @ts-ignore
import img25 from '../assets/doctors/25.PNG';
// @ts-ignore
import img26 from '../assets/doctors/26.png';
// @ts-ignore
import img27 from '../assets/doctors/27.png';
// @ts-ignore
import img28 from '../assets/doctors/28.png';
// @ts-ignore
import img29 from '../assets/doctors/29.png';
// @ts-ignore
import img30 from '../assets/doctors/30.png';
// @ts-ignore
import img31 from '../assets/doctors/31.png';
// @ts-ignore
import img32 from '../assets/doctors/32.PNG';
// @ts-ignore
import img33 from '../assets/doctors/33.png';
// @ts-ignore
import img34 from '../assets/doctors/34.PNG';
// @ts-ignore
import img35 from '../assets/doctors/35.png';
// @ts-ignore
import img36 from '../assets/doctors/36.png';
// @ts-ignore
import img37 from '../assets/doctors/37.png';
// @ts-ignore
import img38 from '../assets/doctors/38.png';
// @ts-ignore
import img39 from '../assets/doctors/39.png';
// @ts-ignore
import img40 from '../assets/doctors/40.png';
// @ts-ignore
import img41 from '../assets/doctors/41.PNG';
// @ts-ignore
import img42 from '../assets/doctors/42.PNG';
// @ts-ignore
import img43 from '../assets/doctors/43.PNG';
// @ts-ignore
import img44 from '../assets/doctors/44.PNG';
// @ts-ignore
import img45 from '../assets/doctors/45.PNG';
// @ts-ignore
import img46 from '../assets/doctors/46.PNG';
// @ts-ignore
import img47 from '../assets/doctors/47.PNG';

// ─── Inline doctor data (مرتبطة بـ doctorData.ts) ───────────────────────────
const WHATSAPP_NUMBER = '920002159';

const doctorsData = [
  {
  id: 1, src: img1,
  nameAr: 'آمنــــه الطيـــــــب',
  nameEn: 'Amnah Al-Tayeb',

  specialtyAr: 'أخصائي أول الطب النفسي',
  specialtyEn: 'Psychiatry Senior Registrar',

  detailsAr: [
    'تشخيص وعلاج الاكتئاب واضطرابات المزاج',
    'تشخيص وعلاج القلق ونوبات الهلع',
    'العلاج النفسي السلوكي والمعرفي',
    'متابعة الاضطرابات النفسية لدى البالغين والمراهقين',
    'علاج اضطرابات النوم والتوتر النفسي',
    'التعامل مع الضغوط النفسية والصدمات',
    'تشخيص وعلاج الوسواس القهري واضطرابات الشخصية'
  ],

  detailsEn: [
    'Diagnosis & Treatment of Depression & Mood Disorders',
    'Diagnosis & Treatment of Anxiety & Panic Disorders',
    'Cognitive Behavioural Therapy (CBT)',
    'Mental Health Care for Adults & Adolescents',
    'Sleep Disorders & Stress Management',
    'Psychological Trauma & Emotional Support',
    'Obsessive-Compulsive & Personality Disorders Treatment'
  ],
},
  { id: 2, src: img2, nameAr: 'عبدالعزيز الشهراني', nameEn: 'Abdulaziz Al-Shahrani', specialtyAr: 'استشاري الجهاز الهضمي والمناظير', specialtyEn: 'Gastroenterology & Endoscopy Consultant', detailsAr: ['تنظير الجهاز الهضمي العلوي','تنظير القولون والأمعاء الغليظة','تشخيص وعلاج جرثومة المعدة','تشخيص وعلاج القرحات الهضمية والارتجاع المريئي','تشخيص وعلاج أمراض الكبد والتليف الكبدي','تشخيص وعلاج أمراض البنكرياس','تشخيص وعلاج الأمراض الالتهابية للأمعاء'], detailsEn: ['Upper GI Endoscopy','Colonoscopy & Large Intestine Examination','Diagnosis & Treatment of H. Pylori','Peptic Ulcers & Gastro-Oesophageal Reflux Disease','Liver Diseases & Hepatic Fibrosis','Pancreatic & Biliary Tract Diseases','Inflammatory Bowel Disease (Crohn\'s & Colitis)'] },
    {
  id: 3, src: img3,

  nameAr: 'محمد المغربي',
  nameEn: 'Mohammed Al-Maghribi',

  specialtyAr: 'استشاري أنف وأذن وحنجرة',
  specialtyEn: 'ENT Consultant',

  detailsAr: [
    'تشخيص وعلاج التهابات الأنف والأذن والحنجرة',
    'علاج حساسية الأنف والجيوب الأنفية',
    'تشخيص وعلاج مشاكل السمع وطنين الأذن',
    'علاج التهابات اللوزتين والحنجرة',
    'تنظير الأنف والحنجرة وتشخيص الحالات المزمنة',
    'علاج اضطرابات التوازن والدوخة',
    'متابعة حالات الشخير وانقطاع التنفس أثناء النوم'
  ],

  detailsEn: [
    'Diagnosis & Treatment of Ear, Nose & Throat Infections',
    'Allergic Rhinitis & Sinusitis Management',
    'Hearing Problems & Tinnitus Treatment',
    'Tonsillitis & Throat Disorders Treatment',
    'Nasal & Laryngeal Endoscopy for Chronic Conditions',
    'Balance Disorders & Vertigo Management',
    'Snoring & Sleep Apnoea Follow-up'
  ],
},
  { id: 4, src: img4, nameAr: 'عبدالله آل قدرة', nameEn: 'Abdullah Al-Qudra', specialtyAr: 'طب الأسنان المتخصص — دنت سمايل', specialtyEn: 'Specialist Dentistry — Dent Smile', detailsAr: ['علاج حالات التهابات عصب الأسنان','علاج حالات التهابات الجذور','إعادة علاج الجذور في حال فشل العلاج السابق','علاج حالات جذور الأسنان الطارئة'], detailsEn: ['Dental Nerve Inflammation Treatment','Root Canal Infections','Root Canal Re-treatment','Emergency Dental Root Cases (Trauma/Accidents)'] },
  { id: 5, src: img5, nameAr: 'عبد الرحمن العمري', nameEn: 'Abdulrahman Al-Omari', specialtyAr: 'جراحات السمنة', specialtyEn: 'Bariatric Surgery', detailsAr: ['تحويل المسار المصغر والكلاسيكي','إعادة وترميم عمليات السمنة السابقة','عمليات الكبسولة العادية والكبسولة الذكية للمعدة'], detailsEn: ['Mini & Classic Gastric Bypass','Revision & Repair of Previous Bariatric Surgery','Standard & Smart Gastric Capsule Procedures'] },
  { id: 6, src: img6, nameAr: 'عادل معلوي', nameEn: 'Adel Maalawi', specialtyAr: 'جراحات المسالك البولية', specialtyEn: 'Urological Surgery', detailsAr: ['معالجة الحصوات والمغص الكلوي بالمناظير المرنة والليزر','جراحات علاج أمراض الذكورة والضعف الجنسي','عمليات الدوالي والقيلة المائية','علاج تضخم البروستاتا بالتبخير'], detailsEn: ['Kidney Stones & Renal Colic via Flexible Ureteroscopy & Laser','Male Sexual Dysfunction Surgery (Penile Implants)','Varicocele & Hydrocele Surgery','Prostate Enlargement Steam Therapy (Rezum)'] },
  { id: 7, src: img7, nameAr: 'عدنان بوغوفه', nameEn: 'Adnan Bughofa', specialtyAr: 'جراحات العظام والمفاصل', specialtyEn: 'Orthopaedic & Joint Surgery', detailsAr: ['زراعة وتبديل المفاصل','مناظير الركبة والكتف والإصابات','جراحات الحوض والإصابات والكسور'], detailsEn: ['Joint Replacement & Arthroplasty','Knee & Shoulder Arthroscopy & Sports Injuries','Pelvic Injuries & Complex Fractures'] },
  { id: 8, src: img8, nameAr: 'احمد جبر', nameEn: 'Ahmed Jabr', specialtyAr: 'طب وجراحة العيون', specialtyEn: 'Ophthalmology & Eye Surgery', detailsAr: ['العدسات اللاصقة الصلبة والمرنة','علاج مشاكل الشبكية','علاج المياه البيضاء (الكاتراكت)','علاج المياه الزرقاء (الجلوكوما)'], detailsEn: ['Rigid & Flexible Contact Lenses','Retinal Disorders','Cataract Treatment','Glaucoma Treatment'] },
  { id: 9, src: img9, nameAr: 'احمد شاكر', nameEn: 'Ahmed Shaker', specialtyAr: 'استشاري التخدير', specialtyEn: 'Anaesthesiology Consultant', detailsAr: ['التخدير العام والموضعي لجميع أنواع العمليات','إدارة الألم الحاد والمزمن ما بعد الجراحة','التخدير فوق الجافية للولادة بدون ألم','التخدير في جراحات القلب والصدر','رعاية المريض في غرفة الإفاقة والعناية المركزة','تقييم المريض قبل العملية'], detailsEn: ['General & Regional Anaesthesia for All Surgical Procedures','Acute & Chronic Post-operative Pain Management','Epidural Anaesthesia for Painless Labour','Cardiac, Thoracic & Vascular Surgery Anaesthesia','Recovery Room & Intensive Care Patient Management','Pre-operative Assessment & Anaesthesia Protocol Planning'] },
    {
  id: 10, src: img10,

  nameAr: 'شيماء سيد',
  nameEn: 'Shaimaa Sayed',

  specialtyAr: 'أخصائي أول المخ والأعصاب',
  specialtyEn: 'Senior Neurologist',

  detailsAr: [
    'تشخيص وعلاج الصداع النصفي والصداع المزمن',
    'متابعة وعلاج مرضى الصرع والتشنجات',
    'تشخيص وعلاج الجلطات الدماغية والسكتات',
    'علاج اضطرابات الأعصاب الطرفية والتنميل',
    'متابعة أمراض الذاكرة والزهايمر',
    'تشخيص وعلاج اضطرابات الحركة والرعشة',
    'متابعة حالات التصلب المتعدد وأمراض الجهاز العصبي'
  ],

  detailsEn: [
    'Diagnosis & Treatment of Migraine & Chronic Headaches',
    'Epilepsy & Seizure Disorders Management',
    'Stroke & Cerebrovascular Disease Treatment',
    'Peripheral Neuropathy & Numbness Management',
    'Memory Disorders & Alzheimer’s Disease Follow-up',
    'Movement Disorders & Tremor Treatment',
    'Multiple Sclerosis & Neurological Diseases Care'
  ],
},
{
  id: 11, src: img11,

  nameAr: 'محمد حبوس',
  nameEn: 'Muhammad Habous',

  specialtyAr: 'إستشاري جراحات المسالك البولية',
  specialtyEn: 'Urology Consultant',

  detailsAr: [
    'تشخيص وعلاج حصوات الكلى والمسالك البولية',
    'علاج التهابات المسالك البولية المتكررة',
    'متابعة وعلاج تضخم البروستاتا',
    'علاج مشاكل السلس البولي واضطرابات التبول',
    'تشخيص وعلاج العقم وضعف الخصوبة لدى الرجال',
    'جراحات المسالك البولية بالمنظار',
    'متابعة أمراض الكلى والمثانة والجهاز البولي'
  ],

  detailsEn: [
    'Kidney Stones & Urinary Tract Diseases Treatment',
    'Recurrent Urinary Tract Infections Management',
    'Benign Prostatic Enlargement Treatment',
    'Urinary Incontinence & Voiding Disorders Care',
    'Male Infertility & Reproductive Health Management',
    'Minimally Invasive Urological Endoscopic Surgery',
    'Kidney, Bladder & Urinary System Follow-up'
  ],
},
  { id: 12, src: img12, nameAr: 'علي قناص', nameEn: 'Ali Qannas', specialtyAr: 'جراحات الأنف والأذن والحنجرة', specialtyEn: 'ENT Surgery', detailsAr: ['أورام الغدة الدرقية وجار الدرقية','أورام الغدة النكافية والغدة اللعابية','أورام الرأس والرقبة المجهرية المتقدمة','تعديل الحاجز الأنفي والقرنيات'], detailsEn: ['Thyroid & Parathyroid Tumours','Parotid & Salivary Gland Tumours','Advanced Microscopic Head & Neck Tumours','Nasal Septum & Turbinate Correction'] },
  { id: 13, src: img13, nameAr: 'علي ظافر آل سويدان', nameEn: 'Ali Zafer Al-Suwaidan', specialtyAr: 'الباطنية والأمراض المعدية', specialtyEn: 'Internal Medicine & Infectious Diseases', detailsAr: ['الحمى المالطية والحمى مجهولة السبب','الالتهابات التنفسية العلوية والسفلية','التهابات المسالك البولية'], detailsEn: ['Brucellosis & Fever of Unknown Origin','Upper & Lower Respiratory Infections','Urinary Tract Infections'] },
  {
  id: 14, src: img14,

  nameAr: 'أحمد آل حيدر',
  nameEn: 'Ahmed Al Haider',

  specialtyAr: 'استشاري العناية المركزة',
  specialtyEn: 'Intensive Care Consultant',

  detailsAr: [
    'متابعة الحالات الحرجة والطارئة بالعناية المركزة',
    'إدارة أجهزة التنفس الصناعي للحالات الحرجة',
    'علاج ومتابعة حالات الصدمة وتسمم الدم',
    'رعاية مرضى ما بعد العمليات الجراحية الكبرى',
    'متابعة حالات الفشل التنفسي والقلب الحاد',
    'التعامل مع الحالات الحرجة متعددة التخصصات',
    'المراقبة الدقيقة للوظائف الحيوية ودعم الأعضاء'
  ],

  detailsEn: [
    'Critical & Emergency Care Management',
    'Mechanical Ventilation for Critical Patients',
    'Shock & Sepsis Treatment and Monitoring',
    'Post-operative Intensive Care Follow-up',
    'Acute Respiratory & Cardiac Failure Management',
    'Multidisciplinary Critical Case Handling',
    'Advanced Vital Functions & Organ Support Monitoring'
  ],
},
  { id: 15, src: img15, nameAr: 'دينا حسين', nameEn: 'Dina Hussein', specialtyAr: 'وحدة طب الأسرة', specialtyEn: 'Family Medicine Unit', detailsAr: ['علاج الأمراض الشائعة الحادة والمزمنة','المتابعة الدورية للأمراض المزمنة','رعاية المسنين والرعاية الصحية المنزلية'], detailsEn: ['Acute & Chronic Common Diseases','Periodic Follow-Up for Chronic Conditions (Hypertension, Diabetes)','Elderly Care & Home Healthcare'] },
  {
  id: 16, src: img16,
  nameAr: 'عبد الله صالح اليامي',
  nameEn: 'Abdullah Saleh Al-Yami',

  specialtyAr: 'استشــــــاري الطــــــب الباطنــــــي',
  specialtyEn: 'Internal Medicine Consultant',

  detailsAr: [
    'تشخيص وعلاج الأمراض الباطنية الحادة والمزمنة',
    'متابعة مرضى السكري وارتفاع ضغط الدم',
    'تشخيص وعلاج اضطرابات الجهاز الهضمي',
    'متابعة أمراض الغدد الصماء والتمثيل الغذائي',
    'علاج التهابات وأمراض الجهاز التنفسي',
    'الفحوصات الدورية والوقاية من الأمراض المزمنة',
    'الرعاية الصحية الشاملة لكبار السن'
  ],

  detailsEn: [
    'Diagnosis & Treatment of Acute & Chronic Internal Diseases',
    'Diabetes & Hypertension Follow-up',
    'Digestive System Disorders Management',
    'Endocrine & Metabolic Diseases Care',
    'Respiratory Diseases & Infections Treatment',
    'Preventive Check-ups & Chronic Disease Screening',
    'Comprehensive Elderly Healthcare'
  ],
},
{
  id: 17, src: img17,

  nameAr: 'عارف الحمادي',
  nameEn: 'Arif Al Hammadi',

  specialtyAr: 'استشاري طب الأطفال',
  specialtyEn: 'Pediatric Consultant',

  detailsAr: [
    'متابعة صحة الأطفال وحديثي الولادة',
    'تشخيص وعلاج أمراض الجهاز التنفسي للأطفال',
    'متابعة النمو والتطور والتغذية للأطفال',
    'علاج الحمى والالتهابات والأمراض الشائعة',
    'متابعة الحساسية والربو عند الأطفال',
    'تقديم برامج التطعيمات الوقائية',
    'رعاية الأطفال في مختلف المراحل العمرية'
  ],

  detailsEn: [
    'Newborn & Child Health Follow-up',
    'Pediatric Respiratory Diseases Treatment',
    'Child Growth, Development & Nutrition Monitoring',
    'Fever, Infections & Common Childhood Illnesses Care',
    'Pediatric Allergy & Asthma Management',
    'Preventive Vaccination Programs',
    'Comprehensive Care for All Pediatric Age Groups'
  ],
},
  { id: 18, src: img18, nameAr: 'ايمان زين العابدين', nameEn: 'Iman Zain Al-Abidin', specialtyAr: 'وحدة صحة المرأة', specialtyEn: "Women's Health Unit", detailsAr: ['متابعة الحمل الحرج وعالي الخطورة','إجراء الولادة الطبيعية والولادة بدون ألم','عمليات ترميم وتجميل المهبل','تصليح سقوط المثانة أو سقوط المستقيم'], detailsEn: ['High-Risk Pregnancy Follow-Up','Normal Delivery & Painless Labour','Vaginal Reconstruction & Rejuvenation','Bladder & Rectal Prolapse Repair'] },
  { id: 19, src: img19, nameAr: 'محمود اسامه', nameEn: 'Mahmoud Osama', specialtyAr: 'الباطنية والسكري والغدد الصماء', specialtyEn: 'Internal Medicine, Diabetes & Endocrinology', detailsAr: ['التشخيص المبكر لمرضى السكري','أمراض الغدد الصماء بأنواعها','الأمراض الباطنية المزمنة'], detailsEn: ['Early Diagnosis of Diabetes','All Types of Endocrine Disorders','Chronic Internal Diseases (Diabetes, Hypertension, GI)'] },
      {
  id: 20, src: img20,

  nameAr: 'مجاهد الوعلاني',
  nameEn: "Mujahid Al-Wa'lani",

  specialtyAr: 'استشاري أمراض الجهاز الهضمي والكبد والمناظير',
  specialtyEn: 'Consultant Gastroenterologist, Hepatologist & Endoscopist',

  detailsAr: [
    'تنظير الجهاز الهضمي العلوي والسفلي',
    'تشخيص وعلاج أمراض الكبد والتليف الكبدي',
    'علاج جرثومة المعدة والقرحة الهضمية',
    'تشخيص وعلاج الارتجاع المريئي واضطرابات الهضم',
    'متابعة أمراض القولون والأمعاء الالتهابية',
    'تشخيص وعلاج أمراض البنكرياس والقنوات الصفراوية',
    'الكشف المبكر عن أورام الجهاز الهضمي بالمنظار'
  ],

  detailsEn: [
    'Upper & Lower Gastrointestinal Endoscopy',
    'Liver Diseases & Hepatic Fibrosis Management',
    'H. Pylori & Peptic Ulcer Treatment',
    'GERD & Digestive Disorders Care',
    'Inflammatory Bowel Diseases Follow-up',
    'Pancreatic & Biliary Tract Diseases Treatment',
    'Early Detection of GI Tumours via Endoscopy'
  ],
},
  { id: 21, src: img21, nameAr: 'محمد آل مطلق', nameEn: 'Mohammed Al-Mutlaq', specialtyAr: 'الأشعة التداخلية', specialtyEn: 'Interventional Radiology', detailsAr: ['دوالي الساقين والأوردة العنكبوتية','آلام ودوالي الخصية عند الرجال','البواسير بالقسطرة','القدم السكري وعدم القدرة على المشي لمسافات طويلة'], detailsEn: ['Varicose Veins & Spider Veins','Testicular Pain & Varicocele in Men','Haemorrhoid Embolisation','Diabetic Foot & Walking Limitation'] },
  { id: 22, src: img22, nameAr: 'محمد السباعي', nameEn: "Mohammed Al-Suba'i", specialtyAr: 'رعاية مركزة حديثي الولادة', specialtyEn: 'Neonatal Intensive Care', detailsAr: ['جميع حالات حديثي الولادة والخدج','حالات المواليد ناقصي النمو','مواليد الحمل عالي الخطورة'], detailsEn: ['All Neonatal & Premature Cases','Growth-Restricted Newborns','High-Risk Pregnancy Newborns'] },
  { id: 23, src: img23, nameAr: 'محمد آل سوار', nameEn: 'Mohammed Al-Sawwar', specialtyAr: 'الجراحة العامة', specialtyEn: 'General Surgery', detailsAr: ['عمليات أورام الجهاز الهضمي','عمليات أورام الرحم والمبيض','عمليات إصلاح الفتق بأنواعه','عمليات البواسير والناسور'], detailsEn: ['GI Tumour Surgery','Uterine & Ovarian Tumour Surgery','All Types of Hernia Repair','Haemorrhoid & Fistula Surgery'] },
  { id: 24, src: img24, nameAr: 'محمد الزهراني', nameEn: 'Mohammed Al-Zahrani', specialtyAr: 'مركز طب الأطفال المتخصص', specialtyEn: 'Paediatric Specialty Centre', detailsAr: ['كشف وتشخيص ومعالجة الحالات العامة لدى الأطفال','كشف وتشخيص ومعالجة الأمراض الصدرية','التهابات الجهاز التنفسي العلوية والسفلية الحادة والمزمنة'], detailsEn: ['General Paediatric Diagnosis & Treatment','Paediatric Chest Diseases','Acute & Chronic Upper & Lower Respiratory Infections'] },
  {
  id: 25, src: img25,

  nameAr: 'صالح متعب آل كردم',
  nameEn: 'Saleh Miteb Al Kardam',

  specialtyAr: 'إستشاري جراحة العظام للأطفال',
  specialtyEn: 'Pediatric Orthopedic Consultant',

  detailsAr: [
    'تشخيص وعلاج تشوهات العظام لدى الأطفال',
    'متابعة مشاكل النمو وتقوس الساقين والقدم المسطحة',
    'علاج الكسور وإصابات العظام للأطفال',
    'تشخيص وعلاج خلع الورك الولادي',
    'متابعة اضطرابات العمود الفقري والجنف',
    'علاج مشاكل المفاصل والحركة لدى الأطفال',
    'الجراحات التصحيحية لعظام الأطفال'
  ],

  detailsEn: [
    'Diagnosis & Treatment of Pediatric Bone Deformities',
    'Growth Disorders, Bow Legs & Flat Feet Management',
    'Pediatric Fractures & Bone Injuries Treatment',
    'Congenital Hip Dislocation Management',
    'Spinal Disorders & Scoliosis Follow-up',
    'Pediatric Joint & Mobility Problems Care',
    'Corrective Pediatric Orthopedic Surgeries'
  ],
},
  { id: 26, src: img26, nameAr: 'محمد حنيف', nameEn: 'Mohammed Hanif', specialtyAr: 'مركز طب الأطفال المتخصص', specialtyEn: 'Paediatric Specialty Centre', detailsAr: ['أمراض السكري ومضاعفاته لدى الأطفال','السمنة المفرطة واضطرابات الدهون','قصر القامة وضعف النمو'], detailsEn: ['Paediatric Diabetes & Complications','Morbid Obesity & Lipid Disorders','Short Stature & Growth Failure'] },
  { id: 27, src: img27, nameAr: 'ناصر آل ابالطحين', nameEn: 'Nasser Al-Abalathin', specialtyAr: 'الأشعة التداخلية', specialtyEn: 'Interventional Radiology', detailsAr: ['آلام الظهر وعرق النساء بالحقن','آلام الرقبة والذراعين وآلام الأبهر','آلام المفاصل بالحقن والتردد الحراري والبلازما'], detailsEn: ['Back Pain & Sciatica Injections','Neck, Arm & Aortic Pain','Joint Pain (Knee & Shoulder) via Injections, Radiofrequency & PRP'] },
  { id: 28, src: img28, nameAr: 'أميمة محجوب', nameEn: 'Umaima Mahjoub', specialtyAr: 'العناية المركزة للأطفال', specialtyEn: 'Pediatric Intensive Care', detailsAr: ['معالجة الحالات الحرجة للأطفال','حالات الالتهابات الصدرية الشديدة وهجمات الربو','علاج حالات الصدمة بأنواعها'], detailsEn: ['Management of Critical Pediatric Cases','Severe Chest Infections & Asthma Attacks','Treatment of All Types of Shock (Septic, Neurogenic, Cardiogenic, Anaphylactic)'] },
  { id: 29, src: img29, nameAr: 'راشد آل قضيع', nameEn: "Rashed Al-Qudai'e", specialtyAr: 'جراحات العظام والمفاصل', specialtyEn: 'Orthopaedic & Joint Surgery', detailsAr: ['علاج خشونة المفاصل والاحتكاك','زراعة وتبديل المفاصل','جراحات الحوض والإصابات والكسور المعقدة','مناظير الركبة والكتف والإصابات الرياضية'], detailsEn: ['Osteoarthritis & Joint Wear Treatment','Joint Replacement & Arthroplasty','Pelvic Surgery & Complex Fractures','Knee & Shoulder Arthroscopy & Sports Injuries'] },
  { id: 30, src: img30, nameAr: 'سعيد السريعي', nameEn: "Saeed Al-Surai'i", specialtyAr: 'جراحات السمنة', specialtyEn: 'Bariatric Surgery', detailsAr: ['جراحات تكميم المعدة بالمنظار','جراحات تحويل المسار','عمليات الكبسولة العادية والكبسولة الذكية','عمليات الجراحة العامة بالمنظار'], detailsEn: ['Laparoscopic Sleeve Gastrectomy','Gastric Bypass Surgery','Standard & Smart Capsule Procedures','Laparoscopic General Surgery'] },
  { id: 31, src: img31, nameAr: 'صالح آل مطلق', nameEn: 'Saleh Al-Mutlaq', specialtyAr: 'طب الأسنان — دنت سمايل', specialtyEn: 'Dental — Dent Smile', detailsAr: ['علاج الحالات العادية والمعقدة','العلاج المبكر لتشوهات الفكين','علاج كبار السن لتعديل الأسنان المائلة قبل الزراعة','التقويم الجراحي بكل درجاته','التقويم الشفاف (إنفيزلاين)'], detailsEn: ['Treatment of Simple & Complex Cases','Early Treatment of Jaw Deformities','Pre-Implant Orthodontics for Seniors','Surgical Orthodontics at All Levels','Clear Aligners (Invisalign)'] },
  {
  id: 32, src: img32,

  nameAr: 'علي آل مسعد',
  nameEn: 'Ali Al Massad',

  specialtyAr: 'استشاري الطب الباطني وأمراض الجهاز الهضمي والكبد',
  specialtyEn: 'Consultant Gastroenterology & Hepatology',

  detailsAr: [
    'تشخيص وعلاج أمراض الجهاز الهضمي المزمنة',
    'علاج أمراض الكبد والتهاب الكبد الفيروسي',
    'تشخيص وعلاج القولون العصبي واضطرابات الهضم',
    'متابعة حالات التليف الكبدي وأمراض المرارة',
    'تنظير الجهاز الهضمي العلوي والسفلي',
    'علاج قرحة المعدة وجرثومة المعدة',
    'متابعة أمراض البنكرياس والقنوات الصفراوية'
  ],

  detailsEn: [
    'Diagnosis & Treatment of Chronic Gastrointestinal Diseases',
    'Liver Diseases & Viral Hepatitis Management',
    'Irritable Bowel Syndrome & Digestive Disorders Care',
    'Liver Fibrosis & Gallbladder Diseases Follow-up',
    'Upper & Lower Gastrointestinal Endoscopy',
    'Peptic Ulcer & H. Pylori Treatment',
    'Pancreatic & Biliary Tract Diseases Management'
  ],
},
  { id: 33, src: img33, nameAr: 'سالي سليمان', nameEn: 'Sally Suleiman', specialtyAr: 'الأمراض الصدرية والحساسية', specialtyEn: 'Pulmonology & Allergy', detailsAr: ['علاج الجلطات الرئوية الحادة','علاج ارتفاع ضغط الشريان الرئوي','علاج وتشخيص أمراض التليف الرئوي','قياس وظائف التنفس'], detailsEn: ['Treatment of Acute Pulmonary Embolism','Pulmonary Arterial Hypertension','Diagnosis & Treatment of Pulmonary Fibrosis','Pulmonary Function Testing'] },
     {
    id: 34, src: img34,
    nameAr: 'خالد الشمراني', nameEn: 'Khaled Al-Shamrani',
    specialtyAr: 'استشاري طب أسنان الأطفال وذوي الاحتياجات الخاصة', specialtyEn: 'Consultant in pediatric dentistry',
    detailsAr: ['علاج الجلطات الرئوية الحادة','علاج ارتفاع ضغط الشريان الرئوي','علاج وتشخيص أمراض التليف الرئوي','قياس وظائف التنفس'],
    detailsEn: ['Treatment of Acute Pulmonary Embolism','Pulmonary Arterial Hypertension','Diagnosis & Treatment of Pulmonary Fibrosis','Pulmonary Function Testing'],
  },
  { id: 35, src: img35, nameAr: 'شهرزاد بن خوجة', nameEn: 'Shahrazad Ben Khoja', specialtyAr: 'قسم التخدير', specialtyEn: 'Anaesthesiology', detailsAr: ['أخصائي أول تخدير','تخدير عام وموضعي','إدارة الألم الحاد والمزمن','تخدير الجراحات المعقدة والحرجة','تخدير جراحات السمنة وتجميل الجسم'], detailsEn: ['Senior Anaesthesia Specialist','General & Regional Anaesthesia','Acute & Chronic Pain Management','Complex & High-Risk Surgical Anaesthesia','Bariatric & Body Contouring Anaesthesia'] },
  { id: 36, src: img36, nameAr: 'سوزان الحداد', nameEn: 'Suzan Al-Haddad', specialtyAr: 'وحدة صحة المرأة', specialtyEn: "Women's Health Unit", detailsAr: ['متابعة الحمل الحرج','إجراء الولادة الطبيعية والولادة بدون ألم','عمليات ترميم وتجميل المهبل','تصليح سقوط المثانة أو سقوط المستقيم'], detailsEn: ['High-Risk Pregnancy Follow-Up','Normal Delivery & Painless Labour','Vaginal Reconstruction & Rejuvenation','Bladder & Rectal Prolapse Repair'] },
  { id: 37, src: img37, nameAr: 'وليد مغراوي', nameEn: 'Walid Maghrawi', specialtyAr: 'القلب والأوعية الدموية', specialtyEn: 'Cardiology & Vascular', detailsAr: ['تصوير الشريان التاجي','اختلال ضربات القلب','رسم القلب بالمجهود','الفحص الدوري الشامل للقلب والأوعية الدموية'], detailsEn: ['Coronary Angiography','Cardiac Arrhythmia','Stress ECG','Comprehensive Cardiovascular Check-Up'] },
  { id: 38, src: img38, nameAr: 'ظافر الشهري', nameEn: 'Zafer Al-Shehri', specialtyAr: 'مركز طب الأطفال المتخصص', specialtyEn: 'Paediatric Specialty Centre', detailsAr: ['علاج مشاكل الجهاز الهضمي','علاج ضعف النمو والتغذية','تشخيص وعلاج آلام البطن المزمنة والدورية','علاج تقرحات الأمعاء الالتهابية'], detailsEn: ['Gastrointestinal Disorders','Growth Failure & Nutritional Issues','Chronic & Recurrent Abdominal Pain','Inflammatory Bowel Disease'] },
  { id: 39, src: img39, nameAr: 'محمد فتحي', nameEn: 'Mohammed Fathi', specialtyAr: 'استشاري أمراض وجراحات المسالك البولية', specialtyEn: 'Urology & Urological Surgery Consultant', detailsAr: ['علاج التهاب وتضخم البروستاتا','علاج البروستاتا بالتبخير (Rezum)','تشخيص واستئصال أورام المثانة بالمنظار','تشخيص وعلاج حصوات الكلى والمسالك البولية بالليزر','علاج سلس البول وضعف الوظيفة البولية'], detailsEn: ['Prostatitis & Benign Prostatic Hyperplasia (BPH) Treatment','Prostate Steam Therapy (Rezum)','Endoscopic Diagnosis & Resection of Bladder Tumours','Laser Treatment of Kidney & Urinary Tract Stones','Urinary Incontinence & Bladder Dysfunction'] },
  { id: 40, src: img40, nameAr: 'احمد العزب', nameEn: 'Ahmed Al-Azzab', specialtyAr: 'استشاري الجهاز الهضمي والمناظير', specialtyEn: 'Gastroenterology & Endoscopy Consultant', detailsAr: ['تشخيص أمراض الكبد (تليف الكبد والفيروسات الكبدية)','تشخيص وعلاج أمراض البنكرياس','تنظير الجهاز الهضمي العلوي','تنظير القولون وتشخيص أمراض الأمعاء','علاج الارتجاع المريئي والقرحات الهضمية'], detailsEn: ['Liver Disease Diagnosis (Cirrhosis & Hepatitis Viruses)','Pancreatic Disease Diagnosis & Treatment','Upper GI Endoscopy (Oesophagus, Stomach & H. Pylori)','Colonoscopy & Intestinal Disease Diagnosis','Gastro-Oesophageal Reflux & Peptic Ulcer Treatment'] },
   {
    id: 41, src: img41,
    nameAr: 'محمد مهدي آل سليمان', nameEn: 'Mohammed Mahdi Al-Sulaiman',
    specialtyAr: 'استشاري أمراض الصدر', specialtyEn: 'Consultant Pulmonologist',
    detailsAr: [
      'تشخيص وعلاج أمراض الجهاز التنفسي المزمنة',
      'علاج الربو الشعبي والحساسية الصدرية',
      'تشخيص وعلاج الالتهاب الرئوي والتهابات الشعب الهوائية',
      'متابعة حالات الانسداد الرئوي المزمن واضطرابات التنفس',
      'تشخيص أمراض الصدر باستخدام وظائف الرئة والأشعة'
    ],
    detailsEn: [
      'Diagnosis & Treatment of Chronic Respiratory Diseases',
      'Asthma & Chest Allergy Management',
      'Diagnosis & Treatment of Pneumonia & Bronchitis',
      'Management of COPD & Breathing Disorders',
      'Chest Disease Diagnosis Using Pulmonary Function Tests & Imaging'
    ],
  },
  {
    id: 42, src: img42,
    nameAr: 'على الهاجري', nameEn: 'Ali Al-Hajri',
    specialtyAr: 'استشاري الطب الباطني والغدد الصماء', specialtyEn: 'Consultant Internist & Endocrinologist',
    detailsAr: [
      'تشخيص وعلاج مرض السكري ومضاعفاته',
      'متابعة اضطرابات الغدة الدرقية والغدد الصماء',
      'علاج ارتفاع ضغط الدم والكوليسترول',
      'تشخيص وعلاج أمراض الباطنية المزمنة',
      'متابعة اضطرابات الهرمونات والسمنة الأيضية'
    ],
    detailsEn: [
      'Diagnosis & Management of Diabetes & Its Complications',
      'Thyroid & Endocrine Disorder Management',
      'Treatment of Hypertension & High Cholesterol',
      'Diagnosis & Treatment of Chronic Internal Medicine Diseases',
      'Management of Hormonal Disorders & Metabolic Obesity'
    ],
  },
  {
    id: 43, src: img43,
    nameAr: 'رشا العطعوط', nameEn: 'Rasha Al-Atout',
    specialtyAr: 'اخصائي اول في الجراحة العامة', specialtyEn: 'Senior Specialist in General Surgery',
    detailsAr: [
      'تشخيص وعلاج حالات الفتق المختلفة',
      'استئصال الزائدة الدودية والمرارة جراحياً',
      'علاج أمراض الشرج مثل البواسير والشرخ الشرجي',
      'جراحات الجهاز الهضمي والمناظير الجراحية',
      'متابعة وعلاج الجروح والخراجات والالتهابات الجراحية'
    ],
    detailsEn: [
      'Diagnosis & Treatment of Various Hernia Cases',
      'Appendectomy & Gallbladder Surgical Removal',
      'Treatment of Anal Diseases Such as Hemorrhoids & Anal Fissures',
      'Gastrointestinal & Laparoscopic Surgeries',
      'Management of Wounds, Abscesses & Surgical Infections'
    ],
  },
  {
  id: 44, src: img44,
  nameAr: 'محمد كانون', nameEn: 'Mohammed Kanoun',
  specialtyAr: 'استشاري جراحات العظام والمفاصل', specialtyEn: 'Consultant Orthopedic & Joint Surgeon',
  detailsAr: [
    'تشخيص وعلاج كسور العظام بمختلف أنواعها',
    'علاج إصابات وإلتواءات المفاصل والأربطة',
    'جراحات تغيير المفاصل مثل الركبة والورك',
    'علاج خشونة المفاصل وآلام العمود الفقري',
    'متابعة إصابات الملاعب وجراحات العظام الرياضية'
  ],
  detailsEn: [
    'Diagnosis & Treatment of All Types of Bone Fractures',
    'Management of Joint and Ligament Injuries & Sprains',
    'Joint Replacement Surgeries (Knee & Hip)',
    'Treatment of Osteoarthritis & Spine Pain',
    'Sports Injuries Management & Orthopedic Surgery'
  ],
},
{
  id: 45, src: img45,
  nameAr: 'ماجد خليفة', nameEn: 'Majed Khalifa',
  specialtyAr: 'أخصائي أمراض القلب', specialtyEn: 'Specialist in Cardiology',
  detailsAr: [
    'تشخيص وعلاج أمراض القلب والشرايين',
    'متابعة ارتفاع ضغط الدم واضطرابات الدورة الدموية',
    'علاج الذبحة الصدرية وأمراض الشريان التاجي',
    'تشخيص اضطرابات ضربات القلب (عدم انتظام النبض)',
    'متابعة حالات فشل عضلة القلب وأمراض القلب المزمنة'
  ],
  detailsEn: [
    'Diagnosis & Treatment of Cardiovascular Diseases',
    'Management of Hypertension & Circulatory Disorders',
    'Treatment of Angina & Coronary Artery Disease',
    'Diagnosis of Heart Rhythm Disorders (Arrhythmia)',
    'Management of Heart Failure & Chronic Cardiac Conditions'
  ],
},
{
  id: 46, src: img46,
  nameAr: 'محمد طربوش', nameEn: 'Mohammed Tarboush',
  specialtyAr: 'أخصائي طب الأطفال وحديثي الولادة', specialtyEn: 'Specialist in Pediatrics & Neonatology',
  detailsAr: [
    'متابعة نمو وتطور الأطفال منذ الولادة',
    'تشخيص وعلاج أمراض الأطفال الشائعة',
    'رعاية وحديثي الولادة ومتابعة الحالات الخداج',
    'علاج أمراض الجهاز التنفسي والهضمي لدى الأطفال',
    'تقديم التطعيمات واللقاحات الدورية للأطفال'
  ],
  detailsEn: [
    'Monitoring Growth & Development of Children from Birth',
    'Diagnosis & Treatment of Common Childhood Diseases',
    'Neonatal Care & Premature Infant Management',
    'Treatment of Pediatric Respiratory & Digestive Disorders',
    'Routine Childhood Vaccinations & Immunization'
  ],
},
{
  id: 47, src: img47,
  nameAr: 'فاريما مالك', nameEn: 'Farima Malik',
  specialtyAr: 'طبيبة أسنان عام', specialtyEn: 'General Dentist',
  detailsAr: [
    'تشخيص وعلاج تسوس الأسنان وحشوات الأسنان',
    'تنظيف الأسنان وإزالة الجير والتصبغات',
    'علاج آلام والتهابات اللثة',
    'خلع الأسنان البسيط عند الحاجة',
    'متابعة صحة الفم والأسنان والوقاية الدورية'
  ],
  detailsEn: [
    'Diagnosis & Treatment of Dental Caries & Fillings',
    'Teeth Cleaning, Scaling & Stain Removal',
    'Treatment of Gum Pain & Inflammation',
    'Simple Tooth Extractions When Needed',
    'Oral Health Checkups & Preventive Dental Care'
  ],
},
];

// ─── Department → Clinic → DoctorIds map ────────────────────────────────────
const departmentsData = [
  { id: 1, nameAr: 'مركز العناية المركزة', nameEn: 'Intensive Care Center', clinics: [
    { nameAr: 'وحدة العناية المركزة للكبار', nameEn: 'Adult Intensive Care Unit', doctorIds: [9, 14, 35] },
    { nameAr: 'وحدة العناية المركزة للأطفال', nameEn: 'Pediatric Intensive Care Unit', doctorIds: [14, 28, 46] },
    { nameAr: 'وحدة العناية المركزة لحديثي الولادة', nameEn: 'Neonatal Intensive Care Unit', doctorIds: [14, 22, 46] },
  ]},
  { id: 4, nameAr: 'مركز الطب الباطني', nameEn: 'Internal Medicine Center', clinics: [
    { nameAr: 'وحدة أمراض القلب', nameEn: 'Cardiology Unit', doctorIds: [37, 42, 45] },
    { nameAr: 'وحدة الأمراض الصدرية', nameEn: 'Chest Diseases Unit', doctorIds: [33, 41] },
    { nameAr: 'وحدة أمراض الدم', nameEn: 'Hematology Unit', doctorIds: [42] },
    { nameAr: 'وحدة طب الأسرة', nameEn: 'Family Medicine Unit', doctorIds: [15] },
    { nameAr: 'وحدة الباطنة العامة والغدد الصماء والسكري', nameEn: 'General Internal Medicine, Endocrinology & Diabetes Unit', doctorIds: [16, 19, 32, 42] },
    { nameAr: 'وحدة الأمراض المعدية', nameEn: 'Infectious Diseases Unit', doctorIds: [13, 16] },
  ]},
  { id: 5, nameAr: 'مركز الجهاز الهضمي والكبد والمناظير', nameEn: 'Gastroenterology, Hepatology & Endoscopy Center', clinics: [
    { nameAr: 'وحدة المناظير العلوية والسفلية (مناظير المعدة والقولون التشخيصية والعلاجية)', nameEn: 'Upper & Lower Endoscopy Unit (Diagnostic & Therapeutic Gastroscopy & Colonoscopy)', doctorIds: [2, 40] },
    { nameAr: 'وحدة مناظير القنوات المرارية ERCP (إزالة حصوات المرارة وتركيب الدعامات المرارية)', nameEn: 'ERCP Unit (Gallstone Removal & Biliary Stenting)', doctorIds: [2, 40] },
  ]},
  { id: 6, nameAr: 'مركز علاج وجراحات السمنة', nameEn: 'Obesity Treatment & Surgery Center', clinics: [
    { nameAr: 'وحدة جراحات السمنة', nameEn: 'Bariatric Surgery Unit', doctorIds: [5, 30] },
    { nameAr: 'وحدة التغذية العلاجية', nameEn: 'Therapeutic Nutrition Unit', doctorIds: [5, 30] },
    { nameAr: 'وحدة الدعم النفسي والسلوكي', nameEn: 'Psychological & Behavioral Support Unit', doctorIds: [1] },
  ]},
  { id: 7, nameAr: 'مركز الجراحة العامة وجراحة المناظير', nameEn: 'General Surgery & Laparoscopy Center', clinics: [
    { nameAr: 'وحدة الجراحات الطارئة', nameEn: 'Emergency Surgery Unit', doctorIds: [23, 43] },
    { nameAr: 'وحدة جراحات المناظير', nameEn: 'Laparoscopic Surgery Unit', doctorIds: [23, 30, 43] },
    { nameAr: 'وحدة جراحات الشرج والمستقيم', nameEn: 'Colorectal Surgery Unit', doctorIds: [23, 43] },
    { nameAr: 'وحدة جراحات الثدي والغدد الصماء', nameEn: 'Breast & Endocrine Surgery Unit', doctorIds: [23, 43] },
  ]},
  { id: 8, nameAr: 'مركز صحة المرأة', nameEn: "Women's Health Center", clinics: [
    { nameAr: 'وحدة أمراض وجراحات النساء والولادة', nameEn: 'Obstetrics & Gynecology Unit', doctorIds: [18, 36] },
    { nameAr: 'وحدة رعاية الأمومة والجراحات التجميلية بعد الولادة', nameEn: 'Maternity Care & Postpartum Cosmetic Surgery Unit', doctorIds: [18, 36] },
    { nameAr: 'وحدة الخدمات التجميلية النسائية', nameEn: "Women's Cosmetic Services Unit", doctorIds: [] },
  ]},
  { id: 9, nameAr: 'مركز أمراض وجراحات المسالك البولية', nameEn: 'Urology Diseases & Surgery Center', clinics: [
    { nameAr: 'وحدة صحة الرجل (أمراض وجراحات الذكورة والعقم)', nameEn: "Men's Health Unit (Andrology & Infertility)", doctorIds: [6, 11, 39] },
    { nameAr: 'وحدة علاج وجراحات حصوات المسالك البولية', nameEn: 'Urinary Stones Treatment & Surgery Unit', doctorIds: [6, 11, 39] },
    { nameAr: 'وحدة علاج وجراحات البروستات', nameEn: 'Prostate Treatment & Surgery Unit', doctorIds: [11, 39] },
  ]},
  { id: 10, nameAr: 'مركز الأنف والأذن والحنجرة', nameEn: 'Ear, Nose & Throat (ENT) Center', clinics: [
    { nameAr: 'وحدة جراحات ومناظير الأنف والأذن والحنجرة', nameEn: 'ENT Endoscopy & Surgery Unit', doctorIds: [3, 12] },
    { nameAr: 'وحدة جراحات الرأس والعنق', nameEn: 'Head & Neck Surgery Unit', doctorIds: [3, 12] },
    { nameAr: 'وحدة السمعيات', nameEn: 'Audiology Unit', doctorIds: [3] },
    { nameAr: 'وحدة علاج وجراحات مشاكل النوم', nameEn: 'Sleep Disorders Treatment & Surgery Unit', doctorIds: [3] },
  ]},
  { id: 11, nameAr: 'مركز طب وجراحة العيون', nameEn: 'Ophthalmology & Eye Surgery Center', clinics: [
    { nameAr: 'وحدة تشخيص وعلاج أمراض العيون', nameEn: 'Eye Diseases Diagnosis & Treatment Unit', doctorIds: [8] },
    { nameAr: 'وحدة جراحات العيون', nameEn: 'Eye Surgery Unit', doctorIds: [8] },
  ]},
  { id: 12, nameAr: 'مركز الأشعة التداخلية', nameEn: 'Interventional Radiology Center', clinics: [
    { nameAr: 'وحدة علاج الأوردة والدوالي والأوعية الدموية بدون جراحة', nameEn: 'Varicose Veins & Vascular Treatment without Surgery', doctorIds: [21] },
    { nameAr: 'وحدة تركيب الدعامات بالأشعة التداخلية بدون جراحة', nameEn: 'Stent Placement by Interventional Radiology without Surgery', doctorIds: [21, 27] },
    { nameAr: 'وحدة علاج المفاصل والعمود الفقري والعظام بدون جراحة', nameEn: 'Joints, Spine & Bones Treatment without Surgery', doctorIds: [27] },
  ]},
  { id: 13, nameAr: 'مركز الطب النفسي', nameEn: 'Psychiatry Center', clinics: [
    { nameAr: 'وحدة علاج إدمان المخدرات', nameEn: 'Drug Addiction Treatment Unit', doctorIds: [1] },
    { nameAr: 'وحدة العلاج السلوكي المعرفي', nameEn: 'Cognitive Behavioral Therapy Unit', doctorIds: [1] },
  ]},
  { id: 14, nameAr: 'مركز طب الأطفال المتخصص', nameEn: 'Specialized Pediatric Center', clinics: [
    { nameAr: 'وحدة العناية المركزة للأطفال حديثي الولادة', nameEn: 'Neonatal Pediatric Intensive Care Unit', doctorIds: [22, 28, 34, 46] },
    { nameAr: 'وحدة الأمراض الصدرية للأطفال', nameEn: 'Pediatric Chest Diseases Unit', doctorIds: [24, 34, 46] },
    { nameAr: 'وحدة مناظير الجهاز الهضمي للأطفال', nameEn: 'Pediatric Gastrointestinal Endoscopy Unit', doctorIds: [20, 38, 46] },
    { nameAr: 'وحدة السكري والغدد الصماء ونمو الأطفال', nameEn: 'Pediatric Diabetes, Endocrinology & Growth Unit', doctorIds: [26, 46] },
    { nameAr: 'وحدة أمراض المخ والأعصاب للأطفال', nameEn: 'Pediatric Neurology Unit', doctorIds: [10, 46] },
  ]},
  { id: 15, nameAr: 'مركز طب الأسنان المتخصص (دنت سمايل)', nameEn: 'Specialized Dental Center (Dent Smile)', clinics: [
    { nameAr: 'عيادة تقويم الأسنان وعظام الوجه والفكين', nameEn: 'Orthodontics, Jaw & Facial Bones Clinic', doctorIds: [31, 34, 47] },
    { nameAr: 'عيادة التركيبات والحشوات التجميلية للأسنان', nameEn: 'Cosmetic Fillings & Prosthetics Clinic', doctorIds: [34, 47] },
    { nameAr: 'عيادة زراعة الأسنان', nameEn: 'Dental Implants Clinic', doctorIds: [34, 47] },
    { nameAr: 'عيادة جراحة الوجه والفكين', nameEn: 'Oral & Maxillofacial Surgery Clinic', doctorIds: [34, 47] },
    { nameAr: 'عيادة أمراض اللثة', nameEn: 'Periodontal Diseases Clinic', doctorIds: [4, 31, 34, 47] },
    { nameAr: 'عيادة أسنان الأطفال', nameEn: 'Pediatric Dentistry Clinic', doctorIds: [4, 34, 47] },
  ]},
  { id: 16, nameAr: 'مركز الجلدية والجراحات التجميلية والليزر', nameEn: 'Dermatology, Cosmetic Surgery & Laser Center', clinics: [
    { nameAr: 'وحدة الجلدية والتجميل والليزر', nameEn: 'Dermatology, Cosmetics & Laser Unit', doctorIds: [23] },
    { nameAr: 'وحدة الجراحات التجميلية', nameEn: 'Cosmetic Surgery Unit', doctorIds: [23] },
  ]},
  { id: 17, nameAr: 'مركز أمراض وجراحات العظام', nameEn: 'Orthopedics & Orthopedic Surgery Center', clinics: [
    { nameAr: 'وحدة الإصابات والكسور المعقدة للعظام والمفاصل', nameEn: 'Complex Fractures & Joint Injuries Unit', doctorIds: [7, 29, 44] },
    { nameAr: 'وحدة استبدال المفاصل الصناعية للركبة والحوض', nameEn: 'Artificial Joint Replacement (Knee & Hip) Unit', doctorIds: [7, 29, 44] },
    { nameAr: 'وحدة الطب الرياضي ومناظير الكتف والركبة', nameEn: 'Sports Medicine & Arthroscopy (Shoulder & Knee) Unit', doctorIds: [7, 29, 44] },
    { nameAr: 'وحدة جراحات اليد الميكروسكوبية', nameEn: 'Microscopic Hand Surgery Unit', doctorIds: [44] },
    { nameAr: 'وحدة جراحة العظام للأطفال', nameEn: 'Pediatric Orthopedic Surgery Unit', doctorIds: [25] },
  ]},
];

// ─── Placeholder avatar (when no real image) ─────────────────────────────────
const avatarUrl = (id) =>
  `https://ui-avatars.com/api/?name=${id}&background=0a4d6b&color=fff&size=200&bold=true`;

// ─── WhatsApp icon ─────────────────────────────────────────────────────────────
const WAIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// ─── Doctor Card ──────────────────────────────────────────────────────────────
const DoctorCard = ({ doc, isAr, index }) => {
  const [expanded, setExpanded] = useState(false);
  const name = isAr ? doc.nameAr : doc.nameEn;
  const specialty = isAr ? doc.specialtyAr : doc.specialtyEn;
  const details = isAr ? doc.detailsAr : doc.detailsEn;

  const openWhatsApp = (e) => {
    e.stopPropagation();
    const msg = isAr
      ? `مرحباً، أود حجز موعد مع الدكتور ${doc.nameAr} — تخصص: ${doc.specialtyAr}`
      : `Hello, I'd like to book an appointment with Dr. ${doc.nameEn} — Specialty: ${doc.specialtyEn}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div
      className="doctor-card"
      style={{
        '--delay': `${index * 0.07}s`,
        direction: isAr ? 'rtl' : 'ltr',
      }}
    >
      {/* Card header */}
      <div className="card-header" onClick={() => setExpanded(v => !v)}>
        {/* Avatar */}
        <div className="avatar-wrap">
          <img
            src={doc.src || avatarUrl(doc.id)}
            alt={name}
            className="avatar-img"
            onError={e => { e.target.src = avatarUrl(doc.id); }}
          />
          <div className="avatar-ring" />
          <span className="availability-dot" />
        </div>

        {/* Info */}
        <div className="card-info">
          <div className="doc-name-row">
            <span className="doc-name">{isAr ? `د. ${name}` : `Dr. ${name}`}</span>
            <span className="doc-badge">#{doc.id}</span>
          </div>
          <p className="doc-specialty">{specialty}</p>
          {!expanded && (
            <p className="doc-hint">
              {isAr ? `${details.length} خدمات` : `${details.length} services`}
              <span className="hint-arrow">{isAr ? ' ← اضغط لعرض التفاصيل' : ' → tap to expand'}</span>
            </p>
          )}
        </div>

        {/* Actions */}
        <div className="card-actions">
          <button className="wa-btn-sm" onClick={openWhatsApp} title="WhatsApp">
            <WAIcon />
          </button>
          <div className={`chevron ${expanded ? 'open' : ''}`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Expanded details */}
      {expanded && (
        <div className="card-body">
          <div className="divider-fade" />
          <div className="services-grid">
            {details.map((d, i) => (
              <div key={i} className="service-item">
                <span className="service-num">{i + 1}</span>
                <span className="service-text">{d}</span>
              </div>
            ))}
          </div>
          <button className="wa-btn-full" onClick={openWhatsApp}>
            <WAIcon />
            <span>{isAr ? `احجز الآن مع د. ${doc.nameAr}` : `Book Now with Dr. ${doc.nameEn}`}</span>
          </button>
        </div>
      )}
    </div>
  );
};

// ─── Main Page ────────────────────────────────────────────────────────────────
const ClinicDoctorsPage = ({ currentLang }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAr = (currentLang || 'ar') === 'ar';

  // Read state passed from ReservationSection
  const { deptName, clinicName } = location.state || {};

  // Find matching department and clinic
  const dept = departmentsData.find(d =>
    (isAr ? d.nameAr : d.nameEn) === deptName ||
    d.nameAr === deptName || d.nameEn === deptName
  );

  const clinic = dept?.clinics.find(c =>
    c.nameAr === clinicName || c.nameEn === clinicName
  );

  const doctors = clinic
    ? clinic.doctorIds.map(id => doctorsData.find(d => d.id === id)).filter(Boolean)
    : [];

  const deptDisplay = dept ? (isAr ? dept.nameAr : dept.nameEn) : deptName;
  const clinicDisplay = clinic ? (isAr ? clinic.nameAr : clinic.nameEn) : clinicName;

  return (
    <div className="cdp-root" dir={isAr ? 'rtl' : 'ltr'}>
      {/* ── Hero Banner ──────────────────────────────────────────────────── */}
      <div className="cdp-hero">
        <div className="hero-grid-overlay" />
        <div className="hero-glow" />
        <div className="hero-content">
          {/* Back button */}
          <button className="back-btn" onClick={() => navigate(-1)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <polyline points={isAr ? '9 18 15 12 9 6' : '15 18 9 12 15 6'} />
            </svg>
            <span>{isAr ? 'رجوع' : 'Back'}</span>
          </button>

          {/* Breadcrumb */}
          <div className="hero-breadcrumb">
            <span className="bc-dept">{deptDisplay}</span>
            <span className="bc-sep">›</span>
            <span className="bc-clinic">{clinicDisplay}</span>
          </div>

          <h1 className="hero-title">
            {isAr ? 'أطباء العيادة' : 'Clinic Doctors'}
          </h1>
          <p className="hero-sub">
            {isAr
              ? `${doctors.length} طبيب متخصص جاهزون لخدمتك`
              : `${doctors.length} specialist doctor${doctors.length !== 1 ? 's' : ''} ready to serve you`}
          </p>

          {/* ECG pulse */}
          <div className="ecg-wrap">
            <svg viewBox="0 0 300 50" width="240" height="40" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="glow-cdp"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                <mask id="reveal-cdp"><rect x="0" y="0" width="300" height="50" fill="white"><animate attributeName="x" from="-300" to="300" dur="2.4s" repeatCount="indefinite"/></rect></mask>
              </defs>
              <path d="M0,25 L100,25 L107,25 L112,17 L117,25 L123,25 L128,5 L136,45 L145,2 L153,45 L160,25 L165,25 L170,17 L175,25 L300,25" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" filter="url(#glow-cdp)" mask="url(#reveal-cdp)"/>
              <circle r="4" fill="#38bdf8" filter="url(#glow-cdp)">
                <animateMotion dur="2.4s" repeatCount="indefinite" path="M0,25 L100,25 L107,25 L112,17 L117,25 L123,25 L128,5 L136,45 L145,2 L153,45 L160,25 L165,25 L170,17 L175,25 L300,25"/>
              </circle>
            </svg>
          </div>
        </div>
      </div>

      {/* ── Doctors Grid ─────────────────────────────────────────────────── */}
      <div className="cdp-body">
        {doctors.length === 0 ? (
          <div className="no-doctors">
            <div className="no-doc-icon">🔍</div>
            <p>{isAr ? 'لا يوجد أطباء مسجلون في هذه العيادة حالياً' : 'No doctors registered in this clinic yet'}</p>
            <button className="back-btn-plain" onClick={() => navigate(-1)}>
              {isAr ? 'رجوع للحجز' : 'Back to Booking'}
            </button>
          </div>
        ) : (
          <div className="doctors-list">
            {doctors.map((doc, i) => (
              <DoctorCard key={doc.id} doc={doc} isAr={isAr} index={i} />
            ))}
          </div>
        )}
      </div>

      {/* ── CTA Bottom Bar ────────────────────────────────────────────────── */}
      <div className="cdp-cta-bar" dir={isAr ? 'rtl' : 'ltr'}>
        <span className="cta-text">
          {isAr ? 'تحتاج مساعدة في اختيار الطبيب المناسب؟' : 'Need help choosing the right doctor?'}
        </span>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(isAr ? 'أحتاج مساعدة في اختيار طبيب مناسب' : 'I need help choosing a doctor')}`}
          target="_blank" rel="noreferrer"
          className="cta-wa-btn"
        >
          <WAIcon />
          <span>{isAr ? 'تواصل معنا عبر واتساب' : 'Contact us on WhatsApp'}</span>
        </a>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap');

        .cdp-root {
          font-family: 'Cairo', 'Tajawal', sans-serif;
          min-height: 100vh;
          background: #f0f6fa;
        }

        /* ── Hero ── */
        .cdp-hero {
          position: relative;
          background: linear-gradient(135deg, #0a1628 0%, #0d2137 50%, #071e35 100%);
          padding: clamp(40px, 6vw, 80px) clamp(20px, 5vw, 60px) clamp(50px, 7vw, 90px);
          overflow: hidden;
        }
        .hero-grid-overlay {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(56,189,248,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(56,189,248,0.05) 1px, transparent 1px);
          background-size: 48px 48px;
        }
        .hero-glow {
          position: absolute; top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 600px; height: 400px;
          background: radial-gradient(ellipse, rgba(56,189,248,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .hero-content {
          position: relative; z-index: 1;
          max-width: 860px; margin: 0 auto;
          display: flex; flex-direction: column; align-items: center; text-align: center;
          gap: 14px;
        }
        .back-btn {
          align-self: flex-start;
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          color: rgba(255,255,255,0.7);
          padding: 7px 16px; border-radius: 50px;
          font-size: 13px; font-weight: 600; cursor: pointer;
          font-family: inherit; transition: all 0.2s;
        }
        .back-btn:hover { background: rgba(255,255,255,0.14); color: #fff; }
        .hero-breadcrumb {
          display: flex; align-items: center; gap: 8px; flex-wrap: wrap; justify-content: center;
          background: rgba(56,189,248,0.12);
          border: 1px solid rgba(56,189,248,0.25);
          border-radius: 50px; padding: 6px 20px;
        }
        .bc-dept { color: #7dd4f0; font-size: 13px; font-weight: 600; }
        .bc-sep { color: rgba(255,255,255,0.3); font-size: 16px; }
        .bc-clinic { color: #fff; font-size: 13px; font-weight: 700; }
        .hero-title {
          color: #fff;
          font-size: clamp(28px, 5vw, 52px);
          font-weight: 900; margin: 0;
          text-shadow: 0 2px 30px rgba(0,0,0,0.5);
        }
        .hero-sub {
          color: rgba(255,255,255,0.6);
          font-size: clamp(13px, 1.8vw, 16px);
          margin: 0; font-weight: 600;
        }
        .ecg-wrap { margin-top: 6px; }

        /* ── Body ── */
        .cdp-body {
          max-width: 860px; margin: 0 auto;
          padding: clamp(28px, 4vw, 52px) clamp(16px, 4vw, 32px);
        }
        .doctors-list {
          display: flex; flex-direction: column; gap: 14px;
        }

        /* ── Doctor Card ── */
        .doctor-card {
          background: #fff;
          border-radius: 20px;
          border: 1.5px solid #e2eff8;
          box-shadow: 0 2px 12px rgba(13,33,55,0.06);
          overflow: hidden;
          animation: slideUp 0.45s ease both;
          animation-delay: var(--delay, 0s);
          transition: box-shadow 0.25s, border-color 0.25s;
        }
        .doctor-card:hover {
          border-color: rgba(56,189,248,0.35);
          box-shadow: 0 8px 32px rgba(56,189,248,0.12);
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .card-header {
          display: flex; align-items: center; gap: 16px;
          padding: 16px 20px;
          cursor: pointer; user-select: none;
          transition: background 0.2s;
        }
        .card-header:hover { background: #f8fcff; }

        /* Avatar */
        .avatar-wrap {
          position: relative; flex-shrink: 0;
          width: 68px; height: 68px;
        }
        .avatar-img {
          width: 100%; height: 100%;
          border-radius: 16px;
          object-fit: cover; display: block;
          box-shadow: 0 4px 14px rgba(0,0,0,0.14);
        }
        .avatar-ring {
          position: absolute; inset: -3px;
          border-radius: 19px;
          border: 2px solid transparent;
          background: linear-gradient(135deg, #38bdf8, #0ea5e9) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: destination-out;
          mask-composite: exclude;
          pointer-events: none;
        }
        .availability-dot {
          position: absolute; bottom: 3px; right: 3px;
          width: 12px; height: 12px;
          background: #22c55e;
          border-radius: 50%;
          border: 2px solid #fff;
          box-shadow: 0 0 6px rgba(34,197,94,0.6);
        }

        /* Info */
        .card-info { flex: 1; min-width: 0; }
        .doc-name-row { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .doc-name { font-size: 15px; font-weight: 800; color: #0d2137; }
        .doc-badge {
          font-size: 10px; font-weight: 700;
          color: #0ea5e9;
          background: rgba(14,165,233,0.1);
          border-radius: 50px; padding: 2px 9px;
        }
        .doc-specialty {
          font-size: 12px; color: #4a7d99; font-weight: 600;
          margin: 4px 0 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
        }
        .doc-hint { font-size: 11px; color: #b0c8d8; margin: 3px 0 0; font-weight: 500; }
        .hint-arrow { color: #0ea5e9; font-weight: 600; }

        /* Actions */
        .card-actions { display: flex; align-items: center; gap: 10px; flex-shrink: 0; }
        .wa-btn-sm {
          width: 38px; height: 38px;
          border-radius: 50%; border: none;
          background: linear-gradient(135deg, #25d366, #1db954);
          color: #fff; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 3px 12px rgba(37,211,102,0.4);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .wa-btn-sm:hover { transform: scale(1.1); box-shadow: 0 5px 18px rgba(37,211,102,0.55); }
        .chevron {
          width: 30px; height: 30px;
          border-radius: 50%;
          background: #f0f5f9;
          display: flex; align-items: center; justify-content: center;
          color: #94a3b8;
          transition: all 0.25s;
        }
        .chevron svg { transition: transform 0.25s; }
        .chevron.open { background: rgba(14,165,233,0.12); color: #0ea5e9; }
        .chevron.open svg { transform: rotate(180deg); }

        /* Expanded body */
        .card-body {
          padding: 0 20px 20px;
          animation: expandIn 0.25s ease;
        }
        @keyframes expandIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .divider-fade {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(14,165,233,0.2), transparent);
          margin-bottom: 16px;
        }
        .services-grid {
          display: flex; flex-direction: column; gap: 8px;
          margin-bottom: 16px;
        }
        .service-item {
          display: flex; align-items: flex-start; gap: 10px;
          background: #f8fcff;
          border-radius: 11px;
          padding: 9px 13px;
          border: 1px solid rgba(14,165,233,0.08);
        }
        .service-num {
          width: 22px; height: 22px;
          border-radius: 50%;
          background: linear-gradient(135deg, #38bdf8, #0ea5e9);
          color: #fff; font-size: 10px; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 1px;
          box-shadow: 0 2px 6px rgba(14,165,233,0.35);
        }
        .service-text { font-size: 13px; color: #1e3a4f; font-weight: 500; line-height: 1.55; }

        .wa-btn-full {
          width: 100%; display: flex; align-items: center; justify-content: center; gap: 10px;
          background: linear-gradient(135deg, #25d366, #1db954);
          color: #fff; border: none; border-radius: 14px;
          padding: 13px 20px; font-size: 14px; font-weight: 700;
          cursor: pointer; font-family: inherit;
          box-shadow: 0 5px 18px rgba(37,211,102,0.38);
          transition: all 0.2s;
        }
        .wa-btn-full:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 26px rgba(37,211,102,0.5);
        }

        /* No doctors */
        .no-doctors {
          text-align: center; padding: 80px 20px;
          color: #94a3b8;
        }
        .no-doc-icon { font-size: 48px; margin-bottom: 14px; }
        .no-doctors p { font-size: 15px; font-weight: 600; }
        .back-btn-plain {
          margin-top: 16px;
          background: #0ea5e9; color: #fff;
          border: none; border-radius: 12px;
          padding: 10px 24px; font-size: 14px;
          font-weight: 700; cursor: pointer; font-family: inherit;
        }

        /* ── CTA Bar ── */
        .cdp-cta-bar {
          background: linear-gradient(135deg, #0a1628, #0d2137);
          padding: clamp(20px, 3vw, 32px) clamp(20px, 5vw, 60px);
          display: flex; align-items: center; justify-content: center;
          gap: 20px; flex-wrap: wrap; text-align: center;
        }
        .cta-text { color: rgba(255,255,255,0.7); font-size: 14px; font-weight: 600; }
        .cta-wa-btn {
          display: inline-flex; align-items: center; gap: 9px;
          background: linear-gradient(135deg, #25d366, #1db954);
          color: #fff; text-decoration: none;
          padding: 11px 22px; border-radius: 50px;
          font-size: 14px; font-weight: 700;
          box-shadow: 0 4px 16px rgba(37,211,102,0.4);
          transition: all 0.2s;
        }
        .cta-wa-btn:hover { transform: translateY(-2px); box-shadow: 0 7px 22px rgba(37,211,102,0.55); }

        /* ── Responsive ── */
        @media (max-width: 520px) {
          .card-header { padding: 12px 14px; gap: 12px; }
          .avatar-wrap { width: 54px; height: 54px; }
          .doc-name { font-size: 13px; }
          .doc-specialty { font-size: 11px; }
          .card-body { padding: 0 14px 16px; }
          .wa-btn-full { font-size: 13px; padding: 11px 14px; }
        }
      `}</style>
    </div>
  );
};

export default ClinicDoctorsPage;
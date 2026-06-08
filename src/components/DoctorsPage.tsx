import React, { useState, useCallback } from 'react';
import Navbar from './Navbar';
import MainNavbar from './MainNavbar';

// @ts-ignore
import img1 from '../assets/doctors/1.png';
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
import img10 from '../assets/doctors/10.png';
// @ts-ignore
import img11 from '../assets/doctors/11.png';
// @ts-ignore
import img12 from '../assets/doctors/12.png';
// @ts-ignore
import img13 from '../assets/doctors/13.png';
// @ts-ignore
import img15 from '../assets/doctors/15.png';
// @ts-ignore
import img16 from '../assets/doctors/16.PNG';
// @ts-ignore
import img17 from '../assets/doctors/17.jpeg';
// @ts-ignore
import img18 from '../assets/doctors/18.png';
// @ts-ignore
import img19 from '../assets/doctors/19.png';
// @ts-ignore
import img20 from '../assets/doctors/20.png';
// @ts-ignore
import img21 from '../assets/doctors/21.png';
// @ts-ignore
import img22 from '../assets/doctors/22.png';
// @ts-ignore
import img23 from '../assets/doctors/23.png';
// @ts-ignore
import img24 from '../assets/doctors/24.png';
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
import img32 from '../assets/doctors/32.png';
// @ts-ignore
import img33 from '../assets/doctors/33.png';
// @ts-ignore
import img34 from '../assets/doctors/34.png';
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
import img44 from '../assets/doctors/44.png';
// @ts-ignore
import img45 from '../assets/doctors/45.png';
// @ts-ignore
import img46 from '../assets/doctors/46.png';
// @ts-ignore
import img47 from '../assets/doctors/47.png';
// @ts-ignore
import img48 from '../assets/doctors/48.png';
// @ts-ignore
import img49 from '../assets/doctors/49.png';
// @ts-ignore
import img50 from '../assets/doctors/50.png';

interface Doctor {
  id: number;
  src: string;
  nameAr: string;
  nameEn: string;
  specialtyAr: string;
  specialtyEn: string;
  detailsAr: string[];
  detailsEn: string[];
}

const WHATSAPP_NUMBER = '966920002159';

const doctors: Doctor[] = [
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
  { id: 4, src: img4, nameAr: 'عبدالله آل قدرة', nameEn: 'Abdullah Al-Qudra', specialtyAr: 'إستشاري علاج جذور الأسنان', specialtyEn: 'Consultant in Endodontics', detailsAr: ['علاج حالات التهابات عصب الأسنان','علاج حالات التهابات الجذور','إعادة علاج الجذور في حال فشل العلاج السابق','علاج حالات جذور الأسنان الطارئة المتعلقة بالسقوط أو الحوادث'], detailsEn: ['Dental Nerve Inflammation Treatment','Root Canal Infections','Root Canal Re-treatment','Emergency Dental Root Cases (Trauma/Accidents)'] },
  { id: 5, src: img5, nameAr: 'عبد الرحمن العمري', nameEn: 'Abdulrahman Al-Omari', specialtyAr: 'اﺳﺘﺸﺎري اﻟﺠﺮاﺣﺔ اﻟﻌﺎﻣﺔ وﺟﺮاﺣﺔ اﻟﻐﺪد واﻟﺜﺪي واﻟﺴﻤﻨﺔ', specialtyEn: '“Consultant General, Endocrine, Breast, and Bariatric Surgeon', detailsAr: ['تحويل المسار المصغر والكلاسيكي','إعادة وترميم عمليات السمنة السابقة','عمليات الكبسولة العادية والكبسولة الذكية للمعدة'], detailsEn: ['Mini & Classic Gastric Bypass','Revision & Repair of Previous Bariatric Surgery','Standard & Smart Gastric Capsule Procedures'] },
  { id: 6, src: img6, nameAr: 'عادل معلوي', nameEn: 'Adel Maalawi', specialtyAr: 'استشاري جراحات المسالك البولية', specialtyEn: 'Consultant in Urological Surgery', detailsAr: ['معالجة الحصوات والمغص الكلوي بالمناظير المرنة والليزر','جراحات علاج أمراض الذكورة والضعف الجنسي (زرع الدعامات)','عمليات الدوالي والقيلة المائية','علاج تضخم البروستاتا بالتبخير'], detailsEn: ['Kidney Stones & Renal Colic via Flexible Ureteroscopy & Laser','Male Sexual Dysfunction Surgery (Penile Implants)','Varicocele & Hydrocele Surgery','Prostate Enlargement Steam Therapy (Rezum)'] },
  { id: 7, src: img7, nameAr: 'عدنان بوغوفه', nameEn: 'Adnan Bughofa', specialtyAr: 'استشاري جراحات وأمراض العظام', specialtyEn: 'Consultant in Orthopedic Surgery and Disorders', detailsAr: ['زراعة وتبديل المفاصل','مناظير الركبة والكتف والإصابات','جراحات الحوض والإصابات والكسور'], detailsEn: ['Joint Replacement & Arthroplasty','Knee & Shoulder Arthroscopy & Sports Injuries','Pelvic Injuries & Complex Fractures'] },
  { id: 8, src: img8, nameAr: 'احمد جبر', nameEn: 'Ahmed Jabr', specialtyAr: 'إستشاري طب وجراحة عيون', specialtyEn: 'Consultant in Ophthalmology and Eye Surgery', detailsAr: ['العدسات اللاصقة الصلبة والمرنة','علاج مشاكل الشبكية','علاج المياه البيضاء (الكاتراكت)','علاج المياه الزرقاء (الجلوكوما)'], detailsEn: ['Rigid & Flexible Contact Lenses','Retinal Disorders','Cataract Treatment','Glaucoma Treatment'] },
  { id: 9, src: img9, nameAr: 'احمد شاكر', nameEn: 'Ahmed Shaker', specialtyAr: 'استشاري التخدير', specialtyEn: 'Anaesthesiology Consultant', detailsAr: ['التخدير العام والموضعي لجميع أنواع العمليات','إدارة الألم الحاد والمزمن ما بعد الجراحة','التخدير فوق الجافية (Epidural) للولادة بدون ألم','التخدير في جراحات القلب والصدر والأوعية الدموية','رعاية المريض في غرفة الإفاقة والعناية المركزة','تقييم المريض قبل العملية وتحديد بروتوكول التخدير المناسب'], detailsEn: ['General & Regional Anaesthesia for All Surgical Procedures','Acute & Chronic Post-operative Pain Management','Epidural Anaesthesia for Painless Labour','Cardiac, Thoracic & Vascular Surgery Anaesthesia','Recovery Room & Intensive Care Patient Management','Pre-operative Assessment & Anaesthesia Protocol Planning'] },
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
  { id: 12, src: img12, nameAr: 'علي قناص', nameEn: 'Ali Qannas', specialtyAr: 'اﺳﺘﺸﺎري اﻧﻒ وأذن وﺣﻨﺠﺮة وﺟﺮاﺣﺎت اﻟﺮأس واﻟﻌﻨﻖ', specialtyEn: 'Consultant in Ear, Nose & Throat and Head & Neck Surgery', detailsAr: ['أورام الغدة الدرقية وجار الدرقية','أورام الغدة النكافية والغدة اللعابية','أورام الرأس والرقبة المجهرية المتقدمة','تعديل الحاجز الأنفي والقرنيات'], detailsEn: ['Thyroid & Parathyroid Tumours','Parotid & Salivary Gland Tumours','Advanced Microscopic Head & Neck Tumours','Nasal Septum & Turbinate Correction'] },
  { id: 13, src: img13, nameAr: 'علي ظافر آل سويدان', nameEn: 'Ali Zafer Al-Suwaidan', specialtyAr: 'اﺳﺘﺸﺎري ﺑﺎﻃﻨﺔ وأﻣﺮاض ﻣﻌﺪﻳﺔ ﻟﺪى اﻟﻜﺒﺎر', specialtyEn: 'Consultant Internist and Adult Infectious Disease Specialist', detailsAr: ['الحمى المالطية والحمى مجهولة السبب','الالتهابات التنفسية العلوية والسفلية','التهابات المسالك البولية'], detailsEn: ['Brucellosis & Fever of Unknown Origin','Upper & Lower Respiratory Infections','Urinary Tract Infections'] },
  { id: 15, src: img15, nameAr: 'دينا حسين', nameEn: 'Dina Hussein', specialtyAr: 'اخصائي أول طب الأسرة', specialtyEn: 'Senior Family Medicine Specialist', detailsAr: ['علاج الأمراض الشائعة الحادة والمزمنة','المتابعة الدورية للأمراض المزمنة (ضغط الدم، السكري)','رعاية المسنين والرعاية الصحية المنزلية'], detailsEn: ['Acute & Chronic Common Diseases','Periodic Follow-Up for Chronic Conditions (Hypertension, Diabetes)','Elderly Care & Home Healthcare'] },
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
  id: 17,
  src: img17,

  nameAr: 'أمل عبدالسلام',
  nameEn: 'Aml Abd-Elsalam',

  specialtyAr: 'أخصائي أول المخ والأعصاب',
  specialtyEn: 'Senior Neurology Specialist',

  detailsAr: [
    'تشخيص وعلاج أمراض المخ والأعصاب',
    'متابعة حالات الصداع والصداع النصفي',
    'تشخيص وعلاج التشنجات والصرع',
    'متابعة حالات ضعف وتنميل الأعصاب',
    'تشخيص وعلاج اضطرابات الحركة والاتزان',
    'متابعة حالات الجلطات العصبية ومضاعفاتها',
    'علاج آلام الأعصاب الطرفية والعضلات'
  ],

  detailsEn: [
    'Diagnosis & Treatment of Neurological Disorders',
    'Migraine & Headache Management',
    'Epilepsy & Seizure Disorders Treatment',
    'Peripheral Neuropathy & Nerve Weakness Follow-up',
    'Movement & Balance Disorders Care',
    'Stroke & Neurological Complications Follow-up',
    'Peripheral Nerve & Muscle Pain Management'
  ],
},
  { id: 18, src: img18, nameAr: 'ايمان زين العابدين', nameEn: 'Iman Zain Al-Abidin', specialtyAr: 'استشاري أمراض وجراحات النساء والتوليد', specialtyEn: "Consultant in Obstetrics and Gynecology", detailsAr: ['متابعة الحمل الحرج وعالي الخطورة','إجراء الولادة الطبيعية والولادة بدون ألم','عمليات ترميم وتجميل المهبل','تصليح سقوط المثانة أو سقوط المستقيم'], detailsEn: ['High-Risk Pregnancy Follow-Up','Normal Delivery & Painless Labour','Vaginal Reconstruction & Rejuvenation','Bladder & Rectal Prolapse Repair'] },
  { id: 19, src: img19, nameAr: 'محمود اسامه', nameEn: 'Mahmoud Osama', specialtyAr: 'إستشاري الأمراض الباطنية', specialtyEn: 'Internal Medicine Consultant', detailsAr: ['التشخيص المبكر لمرضى السكري','أمراض الغدد الصماء بأنواعها','الأمراض الباطنية المزمنة (السكري والضغط والجهاز الهضمي)'], detailsEn: ['Early Diagnosis of Diabetes','All Types of Endocrine Disorders','Chronic Internal Diseases (Diabetes, Hypertension, GI)'] },
      {
  id: 20, src: img20,

  nameAr: 'مجاهد الوعلاني',
  nameEn: "Mujahid Al-Waalani",

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
  { id: 21, src: img21, nameAr: 'محمد آل مطلق', nameEn: 'Mohammed Al-Mutlaq', specialtyAr: 'إستشاري الأشعة التداخلية', specialtyEn: 'Interventional Radiology Consultant', detailsAr: ['دوالي الساقين والأوردة العنكبوتية','آلام ودوالي الخصية عند الرجال','البواسير بالقسطرة','القدم السكري وعدم القدرة على المشي لمسافات طويلة'], detailsEn: ['Varicose Veins & Spider Veins','Testicular Pain & Varicocele in Men','Haemorrhoid Embolisation','Diabetic Foot & Walking Limitation'] },
  { id: 22, src: img22, nameAr: 'محمد السباعي', nameEn: "Mohammed Al-Subaie", specialtyAr: 'استشاري طب الاطفال حديثي الولادة', specialtyEn: 'Pediatric and Neonatal Medicine Consultant', detailsAr: ['جميع حالات حديثي الولادة والخدج','حالات المواليد ناقصي النمو','مواليد الحمل عالي الخطورة'], detailsEn: ['All Neonatal & Premature Cases','Growth-Restricted Newborns','High-Risk Pregnancy Newborns'] },
  { id: 23, src: img23, nameAr: 'محمد آل سوار', nameEn: 'Mohammed Al-Sawwar', specialtyAr: 'اﺳﺘﺸﺎري اﻟﺠﺮاﺣﺔ اﻟﻌﺎﻣﺔ وﺟﺮاﺣﺔ اﻷورام واﻟﻤﺴﺘﻘﻴﻢ', specialtyEn: 'Consultant General, Oncologic, and Colorectal Surgeon', detailsAr: ['عمليات أورام الجهاز الهضمي','عمليات أورام الرحم والمبيض','عمليات إصلاح الفتق بأنواعه','عمليات البواسير والناسور'], detailsEn: ['GI Tumour Surgery','Uterine & Ovarian Tumour Surgery','All Types of Hernia Repair','Haemorrhoid & Fistula Surgery'] },
  { id: 24, src: img24, nameAr: 'محمد الزهراني', nameEn: 'Mohammed Al-Zahrani', specialtyAr: 'استشاري طب الاطفال والامراض الصدرية', specialtyEn: 'Pediatric and Chest Diseases Consultant', detailsAr: ['كشف وتشخيص ومعالجة الحالات العامة لدى الأطفال','كشف وتشخيص ومعالجة الأمراض الصدرية لدى الأطفال','التهابات الجهاز التنفسي العلوي والسفلي الحادة والمزمنة'], detailsEn: ['General Paediatric Diagnosis & Treatment','Paediatric Chest Diseases','Acute & Chronic Upper & Lower Respiratory Infections'] },
  { id: 26, src: img26, nameAr: 'محمد حنيف', nameEn: 'Mohammed Hanif', specialtyAr: 'استشاري طب الأطفال المتخصص', specialtyEn: 'Paediatric Specialty Consultant', detailsAr: ['أمراض السكري ومضاعفاته لدى الأطفال','السمنة المفرطة واضطرابات الدهون','قصر القامة وضعف النمو'], detailsEn: ['Paediatric Diabetes & Complications','Morbid Obesity & Lipid Disorders','Short Stature & Growth Failure'] },
  { id: 27, src: img27, nameAr: 'ناصر آل ابالطحين', nameEn: 'Nasser Al-Abalathin', specialtyAr: 'استشاري الاشعة التداخلية', specialtyEn: 'Interventional Radiology Consultant', detailsAr: ['آلام الظهر وعرق النساء بالحقن','آلام الرقبة والذراعين وآلام الأبهر','آلام المفاصل (الركبة – الكتف) بالحقن والتردد الحراري والبلازما'], detailsEn: ['Back Pain & Sciatica Injections','Neck, Arm & Aortic Pain','Joint Pain (Knee & Shoulder) via Injections, Radiofrequency & PRP'] },
  { id: 28, src: img28, nameAr: 'أميمة محجوب', nameEn: 'Umaima Mahjoub', specialtyAr: 'إستشاري العناية المركزة للأطفال', specialtyEn: 'Pediatric Intensive Care Consultant', detailsAr: ['معالجة الحالات الحرجة للأطفال','حالات الالتهابات الصدرية الشديدة وهجمات الربو','علاج حالات الصدمة بأنواعها (التهابية، عصبية، قلبية، تحسسية)'], detailsEn: ['Management of Critical Pediatric Cases','Severe Chest Infections & Asthma Attacks','Treatment of All Types of Shock (Septic, Neurogenic, Cardiogenic, Anaphylactic)'] },
  { id: 29, src: img29, nameAr: 'راشد آل قضيع', nameEn: "Rashed Al-Quadie", specialtyAr: 'استشاري ﺟﺮاﺣﺔ اﻟﻌﻈﺎم واﻟﻤﻔﺎﺻﻞ', specialtyEn: 'Consultant in Orthopedic Surgery and Joint Surgery', detailsAr: ['علاج خشونة المفاصل والاحتكاك','زراعة وتبديل المفاصل','جراحات الحوض والإصابات والكسور المعقدة','مناظير الركبة والكتف والإصابات الرياضية'], detailsEn: ['Osteoarthritis & Joint Wear Treatment','Joint Replacement & Arthroplasty','Pelvic Surgery & Complex Fractures','Knee & Shoulder Arthroscopy & Sports Injuries'] },
  { id: 30, src: img30, nameAr: 'سعيد السريعي', nameEn: "Saeed Al-Suraie", specialtyAr: 'ﺳﺘﺸﺎري اﻟﺠﺮاﺣﺔ اﻟﻌﺎﻣﺔ وﺟﺮاﺣﺔ اﻟﺴﻤﻨﺔ واﻟﻤﻨﺎﺿﻴﺮ', specialtyEn: 'Consultant General, Bariatric, and Laparoscopic Surgeon', detailsAr: ['جراحات تكميم المعدة بالمنظار','جراحات تحويل المسار','عمليات الكبسولة العادية والكبسولة الذكية','عمليات الجراحة العامة بالمنظار'], detailsEn: ['Laparoscopic Sleeve Gastrectomy','Gastric Bypass Surgery','Standard & Smart Capsule Procedures','Laparoscopic General Surgery'] },
  { id: 31, src: img31, nameAr: 'صالح آل مطلق', nameEn: 'Saleh Al-Mutlaq', specialtyAr: 'استشاري ﺗﻘﻮﻳﻢ اﻷﺳﻨﺎن وﻋﻈﺎم اﻟﻮﺟﻪ واﻟﻔﻜﻴﻦ ', specialtyEn: 'Consultant Orthodontist and Craniofacial Orthopedics Specialist', detailsAr: ['علاج الحالات العادية والمعقدة','العلاج المبكر لتشوهات الفكين','علاج كبار السن لتعديل الأسنان المائلة قبل الزراعة','التقويم الجراحي بكل درجاته','التقويم الشفاف (إنفيزلاين)'], detailsEn: ['Treatment of Simple & Complex Cases','Early Treatment of Jaw Deformities','Pre-Implant Orthodontics for Seniors','Surgical Orthodontics at All Levels','Clear Aligners (Invisalign)'] },
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
  { id: 33, src: img33, nameAr: 'سالي سليمان', nameEn: 'Sally Suleiman', specialtyAr: 'أخصائي أول الأمراض الصدرية والحساسية', specialtyEn: 'Senior Pulmonology and Allergy Specialist', detailsAr: ['علاج الجلطات الرئوية الحادة','علاج ارتفاع ضغط الشريان الرئوي','علاج وتشخيص أمراض التليف الرئوي','قياس وظائف التنفس'], detailsEn: ['Treatment of Acute Pulmonary Embolism','Pulmonary Arterial Hypertension','Diagnosis & Treatment of Pulmonary Fibrosis','Pulmonary Function Testing'] },
{
  id: 34,
  src: img34,

  nameAr: 'مروة مصطفى',
  nameEn: 'Marwa Mustafa',

  specialtyAr: 'أخصائي طب الأطفال',
  specialtyEn: 'Specialist in Pediatrics',

  detailsAr: [
    'متابعة صحة الأطفال وحديثي الولادة',
    'تشخيص وعلاج الأمراض الشائعة عند الأطفال',
    'متابعة النمو والتطور والتغذية للأطفال',
    'علاج الحمى والالتهابات والنزلات المعوية',
    'متابعة الحساسية والربو عند الأطفال',
    'تقديم برامج التطعيمات الوقائية',
    'رعاية الأطفال في مختلف المراحل العمرية'
  ],

  detailsEn: [
    'Newborn & Child Health Follow-up',
    'Diagnosis & Treatment of Common Pediatric Diseases',
    'Child Growth, Development & Nutrition Monitoring',
    'Fever, Infections & Gastroenteritis Management',
    'Pediatric Allergy & Asthma Care',
    'Preventive Vaccination Programs',
    'Comprehensive Care for All Pediatric Age Groups'
  ],
},
  { id: 35, src: img35, nameAr: 'شهرزاد بن خوجة', nameEn: 'Shahrazad Ben Khoja', specialtyAr: 'أخصائية التخدير', specialtyEn: 'Anaesthesiology Specialist', detailsAr: ['أخصائي أول تخدير','تخدير عام وموضعي','إدارة الألم الحاد والمزمن','تخدير الجراحات المعقدة والحرجة','تخدير جراحات السمنة وتجميل الجسم'], detailsEn: ['Senior Anaesthesia Specialist','General & Regional Anaesthesia','Acute & Chronic Pain Management','Complex & High-Risk Surgical Anaesthesia','Bariatric & Body Contouring Anaesthesia'] },
  { id: 36, src: img36, nameAr: 'سوزان الحداد', nameEn: 'Suzan Al-Haddad', specialtyAr: 'استشاري ﺟﺮاﺣﺎت اﻟﻨﺴﺎء واﻟﻮﻻدة', specialtyEn: "Consultant in Obstetrics and Gynecology", detailsAr: ['متابعة الحمل الحرج','إجراء الولادة الطبيعية والولادة بدون ألم','عمليات ترميم وتجميل المهبل','تصليح سقوط المثانة أو سقوط المستقيم'], detailsEn: ['High-Risk Pregnancy Follow-Up','Normal Delivery & Painless Labour','Vaginal Reconstruction & Rejuvenation','Bladder & Rectal Prolapse Repair'] },
  { id: 37, src: img37, nameAr: 'وليد مغراوي', nameEn: 'Walid Maghrawi', specialtyAr: 'إستشاري أمراض القلب', specialtyEn: 'Consultant in Cardiology', detailsAr: ['تصوير الشريان التاجي','اختلال ضربات القلب','رسم القلب بالمجهود','الفحص الدوري الشامل للقلب والأوعية الدموية'], detailsEn: ['Coronary Angiography','Cardiac Arrhythmia','Stress ECG','Comprehensive Cardiovascular Check-Up'] },
  { id: 38, src: img38, nameAr: 'ظافر الشهري', nameEn: 'Zafer Al-Shehri', specialtyAr: 'إستشاري ﻃﺐ اﻷﻃﻔﺎل وﻣﻨﺎﻇﻴﺮ اﻟﺠﻬﺎز اﻟﻬﻀﻤﻲ', specialtyEn: 'إستشاري ﻃﺐ اﻷﻃﻔﺎل وﻣﻨﺎﻇﻴﺮ اﻟﺠﻬﺎز اﻟﻬﻀﻤﻲ', detailsAr: ['علاج مشاكل الجهاز الهضمي','علاج ضعف النمو والتغذية','تشخيص وعلاج آلام البطن المزمنة والدورية','علاج تقرحات الأمعاء الالتهابية'], detailsEn: ['Gastrointestinal Disorders','Growth Failure & Nutritional Issues','Chronic & Recurrent Abdominal Pain','Inflammatory Bowel Disease'] },
  { id: 39, src: img39, nameAr: 'محمد فتحي', nameEn: 'Mohammed Fathi', specialtyAr: 'استشاري أمراض وجراحات المسالك البولية', specialtyEn: 'Urology & Urological Surgery Consultant', detailsAr: ['علاج التهاب وتضخم البروستاتا','علاج البروستاتا بالتبخير (Rezum)','تشخيص واستئصال أورام المثانة بالمنظار','تشخيص وعلاج حصوات الكلى والمسالك البولية بالليزر','علاج سلس البول وضعف الوظيفة البولية'], detailsEn: ['Prostatitis & Benign Prostatic Hyperplasia (BPH) Treatment','Prostate Steam Therapy (Rezum)','Endoscopic Diagnosis & Resection of Bladder Tumours','Laser Treatment of Kidney & Urinary Tract Stones','Urinary Incontinence & Bladder Dysfunction'] },
  { id: 40, src: img40, nameAr: 'احمد العزب', nameEn: 'Ahmed Al-Azzab', specialtyAr: 'اخصائي أول الجهاز الهضمي والمناظير', specialtyEn: 'Senior Gastroenterology & Endoscopy Specialist', detailsAr: ['تشخيص أمراض الكبد (تليف الكبد والفيروسات الكبدية)','تشخيص وعلاج أمراض البنكرياس','تنظير الجهاز الهضمي العلوي (المريء والمعدة وجرثومة المعدة)','تنظير القولون وتشخيص أمراض الأمعاء','علاج الارتجاع المريئي والقرحات الهضمية'], detailsEn: ['Liver Disease Diagnosis (Cirrhosis & Hepatitis Viruses)','Pancreatic Disease Diagnosis & Treatment','Upper GI Endoscopy (Oesophagus, Stomach & H. Pylori)','Colonoscopy & Intestinal Disease Diagnosis','Gastro-Oesophageal Reflux & Peptic Ulcer Treatment'] },
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
{
  id: 48,
  src: img48,
  nameAr: 'عمرو موسى',
  nameEn: 'Amr Mousa',
  specialtyAr: 'أخصائي طب العيون',
  specialtyEn: 'Ophthalmology Specialist',
  detailsAr: [
    'تشخيص وعلاج أمراض العيون المختلفة',
    'فحص النظر وتقييم حدة الإبصار',
    'متابعة وعلاج التهابات وجفاف العين',
    'تشخيص ومتابعة المياه البيضاء والزرقاء',
    'الفحص الدوري لصحة العين والوقاية من المضاعفات'
  ],
  detailsEn: [
    'Diagnosis & Treatment of Various Eye Diseases',
    'Vision Testing & Visual Acuity Assessment',
    'Management of Eye Infections & Dry Eye Syndrome',
    'Diagnosis & Follow-up of Cataracts & Glaucoma',
    'Routine Eye Examinations & Preventive Eye Care'
  ],
},
{
  id: 49,
  src: img49,
  nameAr: 'سامية حكمي',
  nameEn: 'Samia Hakami',
  specialtyAr: 'أخصائية التغذية العلاجية',
  specialtyEn: 'Clinical Dietitian',
  detailsAr: [
    'تقييم الحالة الغذائية ووضع الخطط العلاجية المناسبة',
    'إعداد برامج غذائية لمرضى السكري وارتفاع ضغط الدم',
    'متابعة التغذية العلاجية للحالات المزمنة',
    'وضع خطط غذائية لإنقاص أو زيادة الوزن بطريقة صحية',
    'التثقيف الغذائي وتعزيز العادات الصحية السليمة'
  ],
  detailsEn: [
    'Nutritional Assessment & Personalized Diet Planning',
    'Diet Programs for Diabetes & Hypertension Patients',
    'Clinical Nutrition Follow-up for Chronic Conditions',
    'Healthy Weight Loss & Weight Gain Nutrition Plans',
    'Nutrition Education & Healthy Lifestyle Counseling'
  ],
},
{
  id: 50,
  src: img50,
  nameAr: 'سالي سمير',
  nameEn: 'Sally Samir',
  specialtyAr: 'استشاري تأهيل الأطفال',
  specialtyEn: 'Pediatric Rehabilitation Consultant',
  detailsAr: [
    'تقييم وعلاج مشكلات النمو والتطور الحركي لدى الأطفال',
    'إعداد برامج تأهيل فردية لتحسين المهارات الحركية والوظيفية',
    'متابعة حالات الشلل الدماغي والتأخر الحركي واضطرابات النمو',
    'تدريب الأطفال على تحسين التوازن والتناسق الحركي والاستقلالية',
    'تقديم الإرشاد والدعم للأسرة لتعزيز تطور الطفل وجودة حياته'
  ],
  detailsEn: [
    'Assessment and Treatment of Developmental & Motor Delays in Children',
    'Individualized Rehabilitation Programs to Improve Functional Skills',
    'Management of Cerebral Palsy, Motor Delays & Developmental Disorders',
    'Training to Enhance Balance, Coordination & Independence',
    'Family Guidance and Support to Promote Child Development & Quality of Life'
  ],
},
];

interface DoctorsPageProps {
  currentLang: string;
  changeLanguage: (lang: string) => void;
}

const WhatsAppIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const ECGPulse = () => (
  <div style={{ display: 'flex', justifyContent: 'center', margin: '14px 0 0' }}>
    <svg viewBox="0 0 300 60" width="260" height="46" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow-dp2"><feGaussianBlur stdDeviation="2" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        <mask id="reveal-dp2"><rect x="0" y="0" width="300" height="60" fill="white"><animate attributeName="x" from="-300" to="300" dur="2.4s" repeatCount="indefinite"/></rect></mask>
      </defs>
      <line x1="0" y1="30" x2="300" y2="30" stroke="#1787b6" strokeWidth="0.5" strokeOpacity="0.25"/>
      <path d="M 0,30 L 105,30 L 112,30 L 117,22 L 122,30 L 128,30 L 133,10 L 141,50 L 150,5 L 158,50 L 165,30 L 170,30 L 175,22 L 180,30 L 300,30" fill="none" stroke="#1787b6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow-dp2)" mask="url(#reveal-dp2)"/>
      <circle r="4" fill="#1787b6" filter="url(#glow-dp2)"><animateMotion dur="2.4s" repeatCount="indefinite" path="M 0,30 L 105,30 L 112,30 L 117,22 L 122,30 L 128,30 L 133,10 L 141,50 L 150,5 L 158,50 L 165,30 L 170,30 L 175,22 L 180,30 L 300,30"/></circle>
    </svg>
  </div>
);

// ── Individual Doctor Row (Accordion) ──────────────────────────────────────
interface DoctorRowProps {
  doc: Doctor;
  isAr: boolean;
  isExpanded: boolean;
  onToggle: () => void;
  onWhatsApp: (doc: Doctor, e: React.MouseEvent) => void;
}

const DoctorRow = React.memo(({ doc, isAr, isExpanded, onToggle, onWhatsApp }: DoctorRowProps) => {
  const name = isAr ? doc.nameAr : doc.nameEn;
  const specialty = isAr ? doc.specialtyAr : doc.specialtyEn;
  const details = isAr ? doc.detailsAr : doc.detailsEn;

  return (
    <div style={{
      borderRadius: '20px', overflow: 'hidden', background: '#fff',
      border: isExpanded ? '1.5px solid rgba(23,135,182,0.35)' : '1.5px solid #e8f2f9',
      boxShadow: isExpanded ? '0 12px 40px rgba(23,135,182,0.15), 0 2px 8px rgba(0,0,0,0.04)' : '0 2px 8px rgba(23,135,182,0.06)',
      transition: 'border-color 0.25s, box-shadow 0.25s',
    }}>
      {/* ── Row Header ── */}
      <div
        onClick={onToggle}
        style={{
          display: 'flex', alignItems: 'center', gap: '16px',
          padding: '14px 20px', cursor: 'pointer',
          direction: isAr ? 'rtl' : 'ltr',
          background: isExpanded ? 'linear-gradient(135deg,#f0f8fd,#e8f4fb)' : 'transparent',
          transition: 'background 0.25s',
          userSelect: 'none',
        }}
      >
        {/* Thumbnail */}
        <div style={{ position: 'relative', flexShrink: 0, width: '62px', height: '62px', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.12)' }}>
          <img src={doc.src} alt={name} loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block',
              transform: isExpanded ? 'scale(1.07)' : 'scale(1)', transition: 'transform 0.35s ease' }} />
        </div>

        {/* Text info */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '15px', fontWeight: '800', color: '#0d2137' }}>
              {isAr ? `د. ${name}` : `Dr. ${name}`}
            </span>

          </div>
          <p style={{ fontSize: '12px', color: '#4a7d99', fontWeight: '600', margin: '3px 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {specialty}
          </p>
          {!isExpanded && (
            <p style={{ fontSize: '11px', color: '#b0c4d4', margin: '2px 0 0', fontWeight: '500' }}>
              {isAr ? `${details.length} خدمات — انقر للتفاصيل` : `${details.length} services — click to expand`}
            </p>
          )}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          {!isExpanded && (
            <button
              onClick={e => onWhatsApp(doc, e)}
              title={isAr ? 'تواصل واتساب' : 'WhatsApp'}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '36px', height: '36px', borderRadius: '50%', border: 'none',
                background: 'linear-gradient(135deg,#25d366,#1db954)',
                color: '#fff', cursor: 'pointer',
                boxShadow: '0 3px 10px rgba(37,211,102,0.4)', flexShrink: 0,
              }}
            >
              <WhatsAppIcon />
            </button>
          )}
          <div style={{
            width: '28px', height: '28px', borderRadius: '50%',
            background: isExpanded ? 'rgba(23,135,182,0.12)' : '#f0f5f9',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.25s', flexShrink: 0,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke={isExpanded ? '#1787b6' : '#94a3b8'} strokeWidth="2.5" strokeLinecap="round"
              style={{ transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s' }}>
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
        </div>
      </div>

      {/* ── Expanded Body ── */}
      {isExpanded && (
        <div style={{ padding: '0 20px 20px', direction: isAr ? 'rtl' : 'ltr', animation: 'expandIn 0.25s ease' }}>
          <div style={{ height: '1px', background: 'linear-gradient(90deg,transparent,rgba(23,135,182,0.2),transparent)', marginBottom: '18px' }} />

          <div className="doc-body-inner" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {/* Larger photo */}
            <div className="doc-photo-lg" style={{ flexShrink: 0, width: 'clamp(120px,18vw,170px)', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 28px rgba(0,0,0,0.14)', alignSelf: 'flex-start' }}>
              <img src={doc.src} alt={name}
                style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', objectPosition: 'top center', display: 'block' }} />
            </div>

            {/* Services */}
            <div style={{ flex: 1, minWidth: '200px' }}>
              <p style={{ color: '#94a3b8', fontSize: '10px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.2px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '18px', height: '2px', background: '#1787b6', display: 'inline-block', borderRadius: '2px', flexShrink: 0 }} />
                {isAr ? 'التخصصات والخدمات' : 'Specialties & Services'}
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 16px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                {details.map((d, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', background: '#f8fcff', borderRadius: '10px', padding: '9px 13px', border: '1px solid rgba(23,135,182,0.08)' }}>
                    <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'linear-gradient(135deg,#269dcc,#1787b6)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9px', fontWeight: '800', flexShrink: 0, marginTop: '1px', boxShadow: '0 2px 6px rgba(38,157,204,0.3)' }}>{i + 1}</span>
                    <span style={{ color: '#2d3748', fontSize: '13px', fontWeight: '500', lineHeight: '1.55' }}>{d}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={e => onWhatsApp(doc, e)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '9px', width: '100%', background: 'linear-gradient(135deg,#25d366,#1db954)', color: '#fff', border: 'none', borderRadius: '14px', padding: '12px 18px', fontSize: '13px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit', boxShadow: '0 5px 18px rgba(37,211,102,0.38)', transition: 'all 0.2s ease', letterSpacing: '0.3px' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(37,211,102,0.5)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 5px 18px rgba(37,211,102,0.38)'; }}
              >
                <WhatsAppIcon />
                <span className="wa-btn-text">
                  {isAr ? `تواصل مع د. ${doc.nameAr} عبر واتساب` : `Book with Dr. ${doc.nameEn} via WhatsApp`}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

DoctorRow.displayName = 'DoctorRow';

// ── Main Page ───────────────────────────────────────────────────────────────
const DoctorsPage = ({ currentLang, changeLanguage }: DoctorsPageProps) => {
  const isAr = currentLang === 'ar';
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [search, setSearch] = useState('');
  const [activeSpecialty, setActiveSpecialty] = useState<string>('all');

  const specialties = Array.from(new Set(doctors.map(d => isAr ? d.specialtyAr : d.specialtyEn)));

  const filtered = doctors.filter(d => {
    const name = isAr ? d.nameAr : d.nameEn;
    const specialty = isAr ? d.specialtyAr : d.specialtyEn;
    const matchSearch = name.toLowerCase().includes(search.toLowerCase()) || specialty.toLowerCase().includes(search.toLowerCase());
    const matchSpecialty = activeSpecialty === 'all' || specialty === activeSpecialty;
    return matchSearch && matchSpecialty;
  });

  const openWhatsApp = useCallback((doc: Doctor, e: React.MouseEvent) => {
    e.stopPropagation();
    const name = isAr ? doc.nameAr : doc.nameEn;
    const specialty = isAr ? doc.specialtyAr : doc.specialtyEn;
    const message = isAr
      ? `مرحباً، أود حجز موعد مع الدكتور ${name} - تخصص: ${specialty}`
      : `Hello, I would like to book an appointment with Dr. ${name} - Specialty: ${specialty}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  }, [isAr]);

  return (
    <div dir={isAr ? 'rtl' : 'ltr'} style={{ fontFamily: "'Tajawal', 'Cairo', sans-serif", minHeight: '100vh', background: '#f0f5f9' }}>

      {/* ── Hero ── */}
      <div style={{ position: 'relative', width: '100%', height: 'clamp(260px,38vw,460px)', overflow: 'hidden' }}>
        <img src="https://static.vecteezy.com/system/resources/previews/065/703/890/large_2x/four-doctors-standing-together-in-white-lab-coats-free-photo.jpeg"
  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg,rgba(10,22,40,0.88) 0%,rgba(13,33,55,0.82) 50%,rgba(7,35,60,0.90) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(38,157,204,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(38,157,204,0.06) 1px,transparent 1px)', backgroundSize: '48px 48px' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '600px', height: '600px', background: 'radial-gradient(circle,rgba(38,157,204,0.15) 0%,transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '0 24px' }}>

          <div className="hero-badge-hide-mobile" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(38,157,204,0.18)', border: '1px solid rgba(38,157,204,0.35)', borderRadius: '50px', padding: '6px 20px', marginBottom: '16px', backdropFilter: 'blur(8px)' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#25d366', display: 'inline-block', boxShadow: '0 0 8px #25d366' }} />
            <span style={{ color: '#7dd4f0', fontSize: '13px', fontWeight: '600' }}>{isAr ? 'كادرنا الطبي المتميز' : 'Our Distinguished Medical Staff'}</span>
          </div>

          <h1 style={{ color: '#fff', fontSize: 'clamp(28px,5vw,54px)', fontWeight: '800', margin: '0 0 12px', textShadow: '0 2px 30px rgba(0,0,0,0.5)', lineHeight: 1.15 }}>
            {isAr ? 'فريقنا الطبي' : 'Our Medical Team'}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(13px,1.8vw,17px)', margin: 0, fontWeight: '500' }}>
            {isAr ? 'نخبة من أفضل الأطباء المتخصصين' : 'An elite group of the finest specialist physicians'}
          </p>
          <ECGPulse />
          <div style={{ display: 'flex', gap: 'clamp(20px,4vw,48px)', marginTop: '24px' }}>
            {[{ num: '60+', labelAr: 'طبيب متخصص', labelEn: 'Specialists' }, { num: '24/7', labelAr: 'خدمة متواصلة', labelEn: 'Service' }, { num: '30+', labelAr: 'تخصص طبي', labelEn: 'Specialties' }].map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ color: '#7dd4f0', fontSize: 'clamp(20px,3vw,32px)', fontWeight: '800', lineHeight: 1 }}>{s.num}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', marginTop: '4px' }}>{isAr ? s.labelAr : s.labelEn}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Sticky Search Bar ── */}
      <div style={{
        background: '#fff',
        borderBottom: '1px solid #e3eff7',
        position: 'sticky',
        top: 0,
        zIndex: 1,
        boxShadow: '0 2px 20px rgba(23,135,182,0.08)',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '14px clamp(16px,4vw,48px)' }}>
          <div style={{ position: 'relative' }}>
            <svg style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', [isAr ? 'right' : 'left']: '14px', pointerEvents: 'none' }} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <input type="text"
              placeholder={isAr ? 'ابحث عن طبيب أو تخصص...' : 'Search by name or specialty...'}
              value={search} onChange={e => setSearch(e.target.value)}
              style={{ width: '100%', boxSizing: 'border-box', padding: isAr ? '10px 44px 10px 16px' : '10px 16px 10px 44px', borderRadius: '12px', border: '1.5px solid #e3eff7', fontSize: '14px', fontFamily: 'inherit', background: '#f8fcff', color: '#0d2137', outline: 'none', transition: 'border-color 0.2s', direction: isAr ? 'rtl' : 'ltr' }}
              onFocus={e => (e.target.style.borderColor = '#1787b6')}
              onBlur={e => (e.target.style.borderColor = '#e3eff7')}
            />
          </div>
        </div>
      </div>

      {/* ── Two-column layout — Filter sidebar + Doctors list ── */}
      <section style={{ padding: 'clamp(24px,4vw,56px) 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(16px,4vw,48px)', display: 'flex', gap: '24px', alignItems: 'flex-start' }}>

          {/* Filter Sidebar */}
          <aside className="filter-sidebar" style={{
            width: '230px',
            flexShrink: 0,
            position: 'sticky',
            top: '74px',
            maxHeight: 'calc(100vh - 90px)',
            overflowY: 'auto',
            background: '#fff',
            borderRadius: '18px',
            border: '1.5px solid #e8f2f9',
            boxShadow: '0 2px 8px rgba(23,135,182,0.06)',
            padding: '16px 14px',
            direction: isAr ? 'rtl' : 'ltr',
          }}>
            <p style={{ color: '#94a3b8', fontSize: '10px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.2px', marginBottom: '12px', paddingBottom: '10px', borderBottom: '1px solid #e8f2f9' }}>
              {isAr ? 'فلترة بالتخصص' : 'Filter by Specialty'}
            </p>

            <button
              onClick={() => setActiveSpecialty('all')}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                width: '100%', textAlign: isAr ? 'right' : 'left',
                padding: '8px 12px', borderRadius: '11px', border: 'none',
                fontSize: '13px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit',
                marginBottom: '4px',
                background: activeSpecialty === 'all' ? 'linear-gradient(135deg,#1787b6,#269dcc)' : 'transparent',
                color: activeSpecialty === 'all' ? '#fff' : '#4a6d85',
                transition: 'all 0.18s',
              }}
            >
              <span>{isAr ? 'الكل' : 'All'}</span>
              <span style={{ fontSize: '11px', opacity: 0.75, background: activeSpecialty === 'all' ? 'rgba(255,255,255,0.2)' : 'rgba(23,135,182,0.1)', color: activeSpecialty === 'all' ? '#fff' : '#1787b6', borderRadius: '50px', padding: '1px 7px', fontWeight: '700' }}>
                {doctors.length}
              </span>
            </button>

            {specialties.map(sp => {
              const cnt = doctors.filter(d => (isAr ? d.specialtyAr : d.specialtyEn) === sp).length;
              const isActive = activeSpecialty === sp;
              return (
                <button
                  key={sp}
                  onClick={() => setActiveSpecialty(sp)}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    width: '100%', textAlign: isAr ? 'right' : 'left',
                    padding: '8px 12px', borderRadius: '11px', border: 'none',
                    fontSize: '12px', fontWeight: '600', cursor: 'pointer', fontFamily: 'inherit',
                    marginBottom: '4px',
                    background: isActive ? 'linear-gradient(135deg,#1787b6,#269dcc)' : 'transparent',
                    color: isActive ? '#fff' : '#4a6d85',
                    transition: 'all 0.18s',
                    lineHeight: '1.45',
                  }}
                  onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.background = '#f0f5f9'; }}
                  onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                >
                  <span style={{ textAlign: isAr ? 'right' : 'left', flex: 1, paddingLeft: isAr ? 0 : '4px', paddingRight: isAr ? '4px' : 0 }}>{sp}</span>
                  {cnt > 1 && (
                    <span style={{ fontSize: '10px', flexShrink: 0, background: isActive ? 'rgba(255,255,255,0.2)' : 'rgba(23,135,182,0.1)', color: isActive ? '#fff' : '#1787b6', borderRadius: '50px', padding: '1px 6px', fontWeight: '700', marginRight: isAr ? '6px' : 0, marginLeft: isAr ? 0 : '6px' }}>
                      {cnt}
                    </span>
                  )}
                </button>
              );
            })}
          </aside>

          {/* Doctors list */}
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ color: '#94a3b8', fontSize: '12px', fontWeight: '600', marginBottom: '16px', direction: isAr ? 'rtl' : 'ltr' }}>
              {isAr ? `${filtered.length} طبيب` : `${filtered.length} doctor${filtered.length !== 1 ? 's' : ''}`}
              {search && (isAr ? ` — نتائج "${search}"` : ` — results for "${search}"`)}
            </p>

            {filtered.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '80px 20px', color: '#94a3b8' }}>
                <div style={{ fontSize: '44px', marginBottom: '14px' }}>🔍</div>
                <p style={{ fontSize: '15px', fontWeight: '600' }}>{isAr ? 'لا توجد نتائج مطابقة' : 'No matching results'}</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {filtered.map(doc => (
                  <DoctorRow
                    key={doc.id}
                    doc={doc}
                    isAr={isAr}
                    isExpanded={expandedId === doc.id}
                    onToggle={() => setExpandedId(prev => prev === doc.id ? null : doc.id)}
                    onWhatsApp={openWhatsApp}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <style>{`
        @keyframes expandIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 499px) {
          .hero-badge-hide-mobile { display: none !important; }
        }
        @media (max-width: 520px) {
          .wa-btn-text { display: none !important; }
        }
        @media (max-width: 520px) {
          .doc-body-inner { flex-direction: column !important; }
          .doc-photo-lg { width: 100% !important; }
          .doc-photo-lg img { aspect-ratio: 16 / 9 !important; object-position: top center !important; }
        }
        @media (max-width: 679px) {
          .filter-sidebar { display: none !important; }
        }
        .filter-sidebar::-webkit-scrollbar { width: 4px; }
        .filter-sidebar::-webkit-scrollbar-track { background: transparent; }
        .filter-sidebar::-webkit-scrollbar-thumb { background: #e3eff7; border-radius: 4px; }
        .filter-sidebar::-webkit-scrollbar-thumb:hover { background: #b0cfe0; }
      `}</style>
    </div>
  );
};

export default DoctorsPage;
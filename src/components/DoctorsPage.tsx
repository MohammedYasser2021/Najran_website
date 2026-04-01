import React, { useState } from 'react';
import Navbar from './Navbar';
import MainNavbar from './MainNavbar';

// @ts-ignore
import img1 from '../assets/doctors/1.jpg';
// @ts-ignore
import img2 from '../assets/doctors/2.jpg';
// @ts-ignore
import img3 from '../assets/doctors/3.jpg';
// @ts-ignore
import img4 from '../assets/doctors/4.jpg';
// @ts-ignore
import img5 from '../assets/doctors/5.jpg';
// @ts-ignore
import img6 from '../assets/doctors/6.jpg';
// @ts-ignore
import img7 from '../assets/doctors/7.jpg';
// @ts-ignore
import img8 from '../assets/doctors/8.jpg';
// @ts-ignore
import img9 from '../assets/doctors/9.jpg';
// @ts-ignore
import img10 from '../assets/doctors/10.jpg';
// @ts-ignore
import img11 from '../assets/doctors/11.jpg';
// @ts-ignore
import img12 from '../assets/doctors/12.jpg';
// @ts-ignore
import img13 from '../assets/doctors/13.jpg';
// @ts-ignore
import img14 from '../assets/doctors/14.jpg';
// @ts-ignore
import img15 from '../assets/doctors/15.jpg';
// @ts-ignore
import img16 from '../assets/doctors/16.jpg';
// @ts-ignore
import img17 from '../assets/doctors/17.jpg';
// @ts-ignore
import img18 from '../assets/doctors/18.jpg';
// @ts-ignore
import img19 from '../assets/doctors/19.jpg';
// @ts-ignore
import img20 from '../assets/doctors/20.jpg';
// @ts-ignore
import img21 from '../assets/doctors/21.jpg';
// @ts-ignore
import img22 from '../assets/doctors/22.jpg';
// @ts-ignore
import img23 from '../assets/doctors/23.jpg';
// @ts-ignore
import img24 from '../assets/doctors/24.jpg';
// @ts-ignore
import img25 from '../assets/doctors/25.jpg';
// @ts-ignore
import img26 from '../assets/doctors/26.jpg';
// @ts-ignore
import img27 from '../assets/doctors/27.jpg';
// @ts-ignore
import img28 from '../assets/doctors/28.jpg';
// @ts-ignore
import img29 from '../assets/doctors/29.jpg';
// @ts-ignore
import img30 from '../assets/doctors/30.jpg';
// @ts-ignore
import img31 from '../assets/doctors/31.jpg';
// @ts-ignore
import img32 from '../assets/doctors/32.jpg';
// @ts-ignore
import img33 from '../assets/doctors/33.jpg';
// @ts-ignore
import img34 from '../assets/doctors/34.jpg';
// @ts-ignore
import img35 from '../assets/doctors/35.jpg';
// @ts-ignore
import img36 from '../assets/doctors/36.jpg';
// @ts-ignore
import img37 from '../assets/doctors/37.jpg';
// @ts-ignore
import img38 from '../assets/doctors/38.jpg';
// @ts-ignore
import img39 from '../assets/doctors/39.jpeg';
// @ts-ignore
import img40 from '../assets/doctors/40.jpeg';

interface Doctor {
  id: number;
  src: string;
  specialtyAr: string;
  specialtyEn: string;
  detailsAr: string[];
  detailsEn: string[];
}

const WHATSAPP_NUMBER = '966920002159';

const doctors: Doctor[] = [
  {
    id: 1, src: img1,
    specialtyAr: 'استشاري الأنف والأذن والحنجرة',
    specialtyEn: 'ENT Consultant',
    detailsAr: ['تشخيص وعلاج أمراض الأنف والجيوب الأنفية','علاج التهابات الحلق واللوزتين والغدانية','علاج اضطرابات السمع وأمراض الأذن الوسطى والداخلية','جراحة الأنف التجميلية والوظيفية (الرينوبلاستي)','علاج الشخير وانقطاع التنفس أثناء النوم','فحص وعلاج اضطرابات الصوت والبلع'],
    detailsEn: ['Diagnosis & Treatment of Nasal & Sinus Diseases','Throat, Tonsil & Adenoid Infections','Hearing Disorders & Middle/Inner Ear Diseases','Functional & Cosmetic Rhinoplasty','Snoring & Sleep Apnoea Treatment','Voice & Swallowing Disorders'],
  },
  {
    id: 2, src: img2,
    specialtyAr: 'استشاري الجهاز الهضمي والمناظير',
    specialtyEn: 'Gastroenterology & Endoscopy Consultant',
    detailsAr: ['تنظير الجهاز الهضمي العلوي (المريء والمعدة والاثني عشر)','تنظير القولون والأمعاء الغليظة','تشخيص وعلاج جرثومة المعدة (الهيليكوباكتر)','تشخيص وعلاج القرحات الهضمية والارتجاع المريئي','تشخيص وعلاج أمراض الكبد والتليف الكبدي','تشخيص وعلاج أمراض البنكرياس والقنوات الصفراوية','تشخيص وعلاج الأمراض الالتهابية للأمعاء (كرون والتهاب القولون)'],
    detailsEn: ['Upper GI Endoscopy (Oesophagus, Stomach & Duodenum)','Colonoscopy & Large Intestine Examination','Diagnosis & Treatment of H. Pylori (Stomach Bacteria)','Peptic Ulcers & Gastro-Oesophageal Reflux Disease','Liver Diseases & Hepatic Fibrosis','Pancreatic & Biliary Tract Diseases','Inflammatory Bowel Disease (Crohn\'s & Colitis)'],
  },
  {
    id: 3, src: img3,
    specialtyAr: 'أخصائي أول طب المخ والأعصاب للأطفال',
    specialtyEn: 'Senior Paediatric Neurology Specialist',
    detailsAr: ['تشخيص وعلاج الصرع وتشنجات الأطفال','تشخيص وعلاج اضطرابات النمو العصبي (التوحد وفرط الحركة)','تقييم وعلاج تأخر الكلام والتطور الحركي','تشخيص وعلاج الصداع والشقيقة لدى الأطفال','تقييم وعلاج ضعف العضلات والأمراض العصبية العضلية','متابعة إصابات الرأس والحبل الشوكي لدى الأطفال'],
    detailsEn: ['Diagnosis & Treatment of Epilepsy & Childhood Seizures','Neurodevelopmental Disorders (Autism & ADHD)','Speech Delay & Motor Development Assessment','Paediatric Headache & Migraine','Muscle Weakness & Neuromuscular Diseases','Head & Spinal Cord Injury Follow-Up in Children'],
  },
  { id: 4, src: img4, specialtyAr: 'طب الأسنان المتخصص — دنت سمايل', specialtyEn: 'Specialist Dentistry — Dent Smile', detailsAr: ['علاج حالات التهابات عصب الأسنان','علاج حالات التهابات الجذور','إعادة علاج الجذور في حال فشل العلاج السابق','علاج حالات جذور الأسنان الطارئة المتعلقة بالسقوط أو الحوادث'], detailsEn: ['Dental Nerve Inflammation Treatment','Root Canal Infections','Root Canal Re-treatment','Emergency Dental Root Cases (Trauma/Accidents)'] },
  { id: 5, src: img5, specialtyAr: 'جراحات السمنة', specialtyEn: 'Bariatric Surgery', detailsAr: ['تحويل المسار المصغر والكلاسيكي','إعادة وترميم عمليات السمنة السابقة','عمليات الكبسولة العادية والكبسولة الذكية للمعدة'], detailsEn: ['Mini & Classic Gastric Bypass','Revision & Repair of Previous Bariatric Surgery','Standard & Smart Gastric Capsule Procedures'] },
  { id: 6, src: img6, specialtyAr: 'جراحات المسالك البولية', specialtyEn: 'Urological Surgery', detailsAr: ['معالجة الحصوات والمغص الكلوي بالمناظير المرنة والليزر','جراحات علاج أمراض الذكورة والضعف الجنسي (زرع الدعامات)','عمليات الدوالي والقيلة المائية','علاج تضخم البروستاتا بالتبخير'], detailsEn: ['Kidney Stones & Renal Colic via Flexible Ureteroscopy & Laser','Male Sexual Dysfunction Surgery (Penile Implants)','Varicocele & Hydrocele Surgery','Prostate Enlargement Steam Therapy (Rezum)'] },
  { id: 7, src: img7, specialtyAr: 'جراحات العظام والمفاصل', specialtyEn: 'Orthopaedic & Joint Surgery', detailsAr: ['زراعة وتبديل المفاصل','مناظير الركبة والكتف والإصابات','جراحات الحوض والإصابات والكسور'], detailsEn: ['Joint Replacement & Arthroplasty','Knee & Shoulder Arthroscopy & Sports Injuries','Pelvic Injuries & Complex Fractures'] },
  { id: 8, src: img8, specialtyAr: 'طب وجراحة العيون', specialtyEn: 'Ophthalmology & Eye Surgery', detailsAr: ['العدسات اللاصقة الصلبة والمرنة','علاج مشاكل الشبكية','علاج المياه البيضاء (الكاتراكت)','علاج المياه الزرقاء (الجلوكوما)'], detailsEn: ['Rigid & Flexible Contact Lenses','Retinal Disorders','Cataract Treatment','Glaucoma Treatment'] },
  {
    id: 9, src: img9,
    specialtyAr: 'استشاري التخدير',
    specialtyEn: 'Anaesthesiology Consultant',
    detailsAr: ['التخدير العام والموضعي لجميع أنواع العمليات','إدارة الألم الحاد والمزمن ما بعد الجراحة','التخدير فوق الجافية (Epidural) للولادة بدون ألم','التخدير في جراحات القلب والصدر والأوعية الدموية','رعاية المريض في غرفة الإفاقة والعناية المركزة','تقييم المريض قبل العملية وتحديد بروتوكول التخدير المناسب'],
    detailsEn: ['General & Regional Anaesthesia for All Surgical Procedures','Acute & Chronic Post-operative Pain Management','Epidural Anaesthesia for Painless Labour','Cardiac, Thoracic & Vascular Surgery Anaesthesia','Recovery Room & Intensive Care Patient Management','Pre-operative Assessment & Anaesthesia Protocol Planning'],
  },
  {
    id: 10, src: img10,
    specialtyAr: 'استشاري الباطنية وأمراض الدم',
    specialtyEn: 'Internal Medicine & Haematology Consultant',
    detailsAr: ['تشخيص وعلاج فقر الدم بأنواعه (الحديدي، الانحلالي، الخبيث)','تشخيص وعلاج اضطرابات التخثر ونقص الصفائح الدموية','متابعة وعلاج أمراض الدم الوراثية (الثلاسيميا، الهيموفيليا)','تشخيص وعلاج الأمراض الباطنية المزمنة','علاج التهابات الأوعية الدموية وأمراض المناعة الذاتية','متابعة مرضى السرطان أثناء وبعد العلاج الكيميائي'],
    detailsEn: ['Diagnosis & Treatment of All Types of Anaemia','Coagulation Disorders & Thrombocytopenia','Hereditary Blood Diseases (Thalassaemia & Haemophilia)','Chronic Internal Medicine Diseases','Vasculitis & Autoimmune Diseases','Oncology Patient Follow-Up During & After Chemotherapy'],
  },
  {
    id: 11, src: img11,
    specialtyAr: 'استشاري طب الباطنية',
    specialtyEn: 'Internal Medicine Consultant',
    detailsAr: ['تشخيص وعلاج الأمراض الباطنية الحادة والمزمنة','متابعة مرضى ارتفاع ضغط الدم والسكري','تشخيص وعلاج أمراض الغدة الدرقية','علاج الأمراض الروماتيزمية والمفاصل','تشخيص وعلاج الأمراض المعدية والحمى','الرعاية الصحية الشاملة والمتابعة الدورية'],
    detailsEn: ['Diagnosis & Treatment of Acute & Chronic Internal Diseases','Hypertension & Diabetes Follow-Up','Thyroid Disease Diagnosis & Treatment','Rheumatic & Joint Diseases','Infectious Diseases & Fever Management','Comprehensive Healthcare & Periodic Check-Ups'],
  },
  { id: 12, src: img12, specialtyAr: 'جراحات الأنف والأذن والحنجرة', specialtyEn: 'ENT Surgery', detailsAr: ['أورام الغدة الدرقية وجار الدرقية','أورام الغدة النكافية والغدة اللعابية','أورام الرأس والرقبة المجهرية المتقدمة','تعديل الحاجز الأنفي والقرنيات'], detailsEn: ['Thyroid & Parathyroid Tumours','Parotid & Salivary Gland Tumours','Advanced Microscopic Head & Neck Tumours','Nasal Septum & Turbinate Correction'] },
  { id: 13, src: img13, specialtyAr: 'الباطنية والأمراض المعدية', specialtyEn: 'Internal Medicine & Infectious Diseases', detailsAr: ['الحمى المالطية والحمى مجهولة السبب','الالتهابات التنفسية العلوية والسفلية','التهابات المسالك البولية'], detailsEn: ['Brucellosis & Fever of Unknown Origin','Upper & Lower Respiratory Infections','Urinary Tract Infections'] },
  {
    id: 14, src: img14,
    specialtyAr: 'استشاري جراحات اليد الميكروسكوبية',
    specialtyEn: 'Microsurgery of the Hand Consultant',
    detailsAr: ['جراحة الأعصاب الطرفية للرسغ والأصابع (متلازمة النفق الرسغي)','إعادة تركيب الأصابع والأطراف المبتورة بالجراحة الدقيقة','إصلاح أوتار اليد والرسغ المقطوعة','جراحة كسور عظام اليد والرسغ والمعصم','علاج التشوهات الخلقية لليد والأصابع','جراحة أورام اليد وأكياس الزلالية (الجانغليون)'],
    detailsEn: ['Peripheral Nerve Surgery of Wrist & Fingers (Carpal Tunnel Syndrome)','Microsurgical Replantation of Amputated Fingers & Limbs','Repair of Severed Hand & Wrist Tendons','Hand, Wrist & Forearm Fracture Surgery','Congenital Hand & Finger Deformity Correction','Hand Tumours & Ganglion Cyst Surgery'],
  },
  { id: 15, src: img15, specialtyAr: 'وحدة طب الأسرة', specialtyEn: 'Family Medicine Unit', detailsAr: ['علاج الأمراض الشائعة الحادة والمزمنة','المتابعة الدورية للأمراض المزمنة (ضغط الدم، السكري)','رعاية المسنين والرعاية الصحية المنزلية'], detailsEn: ['Acute & Chronic Common Diseases','Periodic Follow-Up for Chronic Conditions (Hypertension, Diabetes)','Elderly Care & Home Healthcare'] },
  { id: 16, src: img16, specialtyAr: 'الطب النفسي', specialtyEn: 'Psychiatry', detailsAr: ['اضطرابات النوم بكافة أشكاله','اضطرابات القلق والتوتر','اضطرابات الاكتئاب'], detailsEn: ['All Types of Sleep Disorders','Anxiety & Stress Disorders','Depression Disorders'] },
  {
    id: 17, src: img17,
    specialtyAr: 'استشاري جراحة الوجه والفكين',
    specialtyEn: 'Maxillofacial Surgery Consultant',
    detailsAr: ['جراحة تصحيح تشوهات الفك العلوي والسفلي','جراحة الوجه التجميلية وإعادة التشكيل','علاج كسور عظام الوجه والفكين الناتجة عن الحوادث','استئصال أورام الفم والفك وإعادة البناء','جراحة زراعة عظام الفك والجيوب الأنفية','علاج اضطرابات المفصل الفكي الصدغي (TMJ)'],
    detailsEn: ['Corrective Surgery for Upper & Lower Jaw Deformities','Facial Aesthetic & Reconstructive Surgery','Facial Bone & Jaw Fracture Repair (Trauma)','Oral & Jaw Tumour Resection & Reconstruction','Jaw Bone & Sinus Grafting for Implants','Temporomandibular Joint (TMJ) Disorder Treatment'],
  },
  { id: 18, src: img18, specialtyAr: 'وحدة صحة المرأة', specialtyEn: "Women's Health Unit", detailsAr: ['متابعة الحمل الحرج وعالي الخطورة','إجراء الولادة الطبيعية والولادة بدون ألم','عمليات ترميم وتجميل المهبل','تصليح سقوط المثانة أو سقوط المستقيم'], detailsEn: ['High-Risk Pregnancy Follow-Up','Normal Delivery & Painless Labour','Vaginal Reconstruction & Rejuvenation','Bladder & Rectal Prolapse Repair'] },
  { id: 19, src: img19, specialtyAr: 'الباطنية والسكري والغدد الصماء', specialtyEn: 'Internal Medicine, Diabetes & Endocrinology', detailsAr: ['التشخيص المبكر لمرضى السكري','أمراض الغدد الصماء بأنواعها','الأمراض الباطنية المزمنة (السكري والضغط والجهاز الهضمي)'], detailsEn: ['Early Diagnosis of Diabetes','All Types of Endocrine Disorders','Chronic Internal Diseases (Diabetes, Hypertension, GI)'] },
  {
    id: 20, src: img20,
    specialtyAr: 'استشاري تركيبات وزراعة الأسنان',
    specialtyEn: 'Dental Prosthetics & Implants Consultant',
    detailsAr: ['زراعة الأسنان الفورية والتقليدية','التركيبات الثابتة والمتحركة (الكراون والجسور والطقم)','تركيبات الزيركون والبورسلين عالية الجودة','زراعة الأسنان فوق الزرعات (Implant-Supported Dentures)','علاج ضمور عظم الفك وزراعة العظام التعويضية','التصميم الرقمي للابتسامة (Digital Smile Design)'],
    detailsEn: ['Immediate & Conventional Dental Implants','Fixed & Removable Prosthetics (Crowns, Bridges & Dentures)','High-Quality Zirconia & Porcelain Restorations','Implant-Supported Dentures','Jaw Bone Atrophy Treatment & Bone Grafting','Digital Smile Design (DSD)'],
  },
  { id: 21, src: img21, specialtyAr: 'الأشعة التداخلية', specialtyEn: 'Interventional Radiology', detailsAr: ['دوالي الساقين والأوردة العنكبوتية','آلام ودوالي الخصية عند الرجال','البواسير بالقسطرة','القدم السكري وعدم القدرة على المشي لمسافات طويلة'], detailsEn: ['Varicose Veins & Spider Veins','Testicular Pain & Varicocele in Men','Haemorrhoid Embolisation','Diabetic Foot & Walking Limitation'] },
  { id: 22, src: img22, specialtyAr: 'رعاية مركزة حديثي الولادة', specialtyEn: 'Neonatal Intensive Care', detailsAr: ['جميع حالات حديثي الولادة والخدج','حالات المواليد ناقصي النمو','مواليد الحمل عالي الخطورة'], detailsEn: ['All Neonatal & Premature Cases','Growth-Restricted Newborns','High-Risk Pregnancy Newborns'] },
  { id: 23, src: img23, specialtyAr: 'الجراحة العامة', specialtyEn: 'General Surgery', detailsAr: ['عمليات أورام الجهاز الهضمي','عمليات أورام الرحم والمبيض','عمليات إصلاح الفتق بأنواعه','عمليات البواسير والناسور'], detailsEn: ['GI Tumour Surgery','Uterine & Ovarian Tumour Surgery','All Types of Hernia Repair','Haemorrhoid & Fistula Surgery'] },
  { id: 24, src: img24, specialtyAr: 'مركز طب الأطفال المتخصص', specialtyEn: 'Paediatric Specialty Centre', detailsAr: ['كشف وتشخيص ومعالجة الحالات العامة لدى الأطفال','كشف وتشخيص ومعالجة الأمراض الصدرية لدى الأطفال','التهابات الجهاز التنفسي العلوي والسفلي الحادة والمزمنة'], detailsEn: ['General Paediatric Diagnosis & Treatment','Paediatric Chest Diseases','Acute & Chronic Upper & Lower Respiratory Infections'] },
  { id: 25, src: img25, specialtyAr: 'جراحة التجميل', specialtyEn: 'Plastic Surgery', detailsAr: ['شد الجسم الحزامي ٣٦٠ درجة','وترهلات الجسم (بعد عمليات التكميم)','شد البطن والنحت الرباعي للجسم','شفط دهون الرقبة وتحديد الفك','شد وتصغير الصدر'], detailsEn: ['360° Body Lift','Body Sagging (Post-Sleeve Surgery)','Tummy Tuck & 4D Body Sculpting','Neck Liposuction & Jaw Definition','Breast Lift & Reduction'] },
  { id: 26, src: img26, specialtyAr: 'مركز طب الأطفال المتخصص', specialtyEn: 'Paediatric Specialty Centre', detailsAr: ['أمراض السكري ومضاعفاته لدى الأطفال','السمنة المفرطة واضطرابات الدهون','قصر القامة وضعف النمو'], detailsEn: ['Paediatric Diabetes & Complications','Morbid Obesity & Lipid Disorders','Short Stature & Growth Failure'] },
  { id: 27, src: img27, specialtyAr: 'الأشعة التداخلية', specialtyEn: 'Interventional Radiology', detailsAr: ['آلام الظهر وعرق النساء بالحقن','آلام الرقبة والذراعين وآلام الأبهر','آلام المفاصل (الركبة – الكتف) بالحقن والتردد الحراري والبلازما'], detailsEn: ['Back Pain & Sciatica Injections','Neck, Arm & Aortic Pain','Joint Pain (Knee & Shoulder) via Injections, Radiofrequency & PRP'] },
  { id: 28, src: img28, specialtyAr: 'العناية المركزة للأطفال', specialtyEn: 'Pediatric Intensive Care', detailsAr: ['معالجة الحالات الحرجة للأطفال','حالات الالتهابات الصدرية الشديدة وهجمات الربو','علاج حالات الصدمة بأنواعها (التهابية، عصبية، قلبية، تحسسية)'], detailsEn: ['Management of Critical Pediatric Cases','Severe Chest Infections & Asthma Attacks','Treatment of All Types of Shock (Septic, Neurogenic, Cardiogenic, Anaphylactic)'] },
  { id: 29, src: img29, specialtyAr: 'جراحات العظام والمفاصل', specialtyEn: 'Orthopaedic & Joint Surgery', detailsAr: ['علاج خشونة المفاصل والاحتكاك','زراعة وتبديل المفاصل','جراحات الحوض والإصابات والكسور المعقدة','مناظير الركبة والكتف والإصابات الرياضية'], detailsEn: ['Osteoarthritis & Joint Wear Treatment','Joint Replacement & Arthroplasty','Pelvic Surgery & Complex Fractures','Knee & Shoulder Arthroscopy & Sports Injuries'] },
  { id: 30, src: img30, specialtyAr: 'جراحات السمنة', specialtyEn: 'Bariatric Surgery', detailsAr: ['جراحات تكميم المعدة بالمنظار','جراحات تحويل المسار','عمليات الكبسولة العادية والكبسولة الذكية','عمليات الجراحة العامة بالمنظار'], detailsEn: ['Laparoscopic Sleeve Gastrectomy','Gastric Bypass Surgery','Standard & Smart Capsule Procedures','Laparoscopic General Surgery'] },
  { id: 31, src: img31, specialtyAr: 'طب الأسنان — دنت سمايل', specialtyEn: 'Dental — Dent Smile', detailsAr: ['علاج الحالات العادية والمعقدة','العلاج المبكر لتشوهات الفكين','علاج كبار السن لتعديل الأسنان المائلة قبل الزراعة','التقويم الجراحي بكل درجاته','التقويم الشفاف (إنفيزلاين)'], detailsEn: ['Treatment of Simple & Complex Cases','Early Treatment of Jaw Deformities','Pre-Implant Orthodontics for Seniors','Surgical Orthodontics at All Levels','Clear Aligners (Invisalign)'] },
  {
    id: 32, src: img32,
    specialtyAr: 'استشاري جراحة العظام للأطفال',
    specialtyEn: 'Paediatric Orthopaedic Surgery Consultant',
    detailsAr: ['تشخيص وعلاج التشوهات الخلقية للعظام والمفاصل لدى الأطفال','علاج الأقدام المسطحة والأقدام الحنفاء (Club Foot)','جراحة الورك الخلقي المائل والخلع الولادي للورك','تصحيح اعوجاج الأطراف وتفاوت أطوال الأرجل','علاج كسور الأطفال والكسور المعقدة قرب المفاصل','تشخيص وعلاج الأورام العظمية الحميدة والخبيثة لدى الأطفال'],
    detailsEn: ['Congenital Bone & Joint Deformity in Children','Flat Foot & Club Foot Correction','Congenital Hip Dysplasia & Developmental Dislocation of the Hip','Limb Deformity Correction & Leg Length Discrepancy','Paediatric Fractures & Periarticular Complex Fractures','Benign & Malignant Bone Tumours in Children'],
  },
  { id: 33, src: img33, specialtyAr: 'الأمراض الصدرية والحساسية', specialtyEn: 'Pulmonology & Allergy', detailsAr: ['علاج الجلطات الرئوية الحادة','علاج ارتفاع ضغط الشريان الرئوي','علاج وتشخيص أمراض التليف الرئوي','قياس وظائف التنفس'], detailsEn: ['Treatment of Acute Pulmonary Embolism','Pulmonary Arterial Hypertension','Diagnosis & Treatment of Pulmonary Fibrosis','Pulmonary Function Testing'] },
  { id: 34, src: img34, specialtyAr: 'الجلدية والتجميل', specialtyEn: 'Dermatology & Aesthetics', detailsAr: ['علاج أمراض جلدية (البهاق، الصدفية، الثعلبة)','علاج الأمراض الجنسية المعدية','العلاج والتجميل بالليزر (نضارة، تفتيح، تقشير، إزالة الوشم)'], detailsEn: ['Skin Diseases (Vitiligo, Psoriasis, Alopecia)','Sexually Transmitted Infections','Laser Treatments (Rejuvenation, Whitening, Peeling, Tattoo Removal)'] },
  { id: 35, src: img35, specialtyAr: 'قسم التخدير', specialtyEn: 'Anaesthesiology', detailsAr: ['أخصائي أول تخدير','تخدير عام وموضعي','إدارة الألم الحاد والمزمن','تخدير الجراحات المعقدة والحرجة','تخدير جراحات السمنة وتجميل الجسم'], detailsEn: ['Senior Anaesthesia Specialist','General & Regional Anaesthesia','Acute & Chronic Pain Management','Complex & High-Risk Surgical Anaesthesia','Bariatric & Body Contouring Anaesthesia'] },
  { id: 36, src: img36, specialtyAr: 'وحدة صحة المرأة', specialtyEn: "Women's Health Unit", detailsAr: ['متابعة الحمل الحرج','إجراء الولادة الطبيعية والولادة بدون ألم','عمليات ترميم وتجميل المهبل','تصليح سقوط المثانة أو سقوط المستقيم'], detailsEn: ['High-Risk Pregnancy Follow-Up','Normal Delivery & Painless Labour','Vaginal Reconstruction & Rejuvenation','Bladder & Rectal Prolapse Repair'] },
  { id: 37, src: img37, specialtyAr: 'القلب والأوعية الدموية', specialtyEn: 'Cardiology & Vascular', detailsAr: ['تصوير الشريان التاجي','اختلال ضربات القلب','رسم القلب بالمجهود','الفحص الدوري الشامل للقلب والأوعية الدموية'], detailsEn: ['Coronary Angiography','Cardiac Arrhythmia','Stress ECG','Comprehensive Cardiovascular Check-Up'] },
  { id: 38, src: img38, specialtyAr: 'مركز طب الأطفال المتخصص', specialtyEn: 'Paediatric Specialty Centre', detailsAr: ['علاج مشاكل الجهاز الهضمي','علاج ضعف النمو والتغذية','تشخيص وعلاج آلام البطن المزمنة والدورية','علاج تقرحات الأمعاء الالتهابية'], detailsEn: ['Gastrointestinal Disorders','Growth Failure & Nutritional Issues','Chronic & Recurrent Abdominal Pain','Inflammatory Bowel Disease'] },
  {
    id: 39, src: img39,
    specialtyAr: 'استشاري أمراض وجراحات المسالك البولية',
    specialtyEn: 'Urology & Urological Surgery Consultant',
    detailsAr: ['علاج التهاب وتضخم البروستاتا','علاج البروستاتا بالتبخير (Rezum)','تشخيص واستئصال أورام المثانة بالمنظار','تشخيص وعلاج حصوات الكلى والمسالك البولية بالليزر','علاج سلس البول وضعف الوظيفة البولية'],
    detailsEn: ['Prostatitis & Benign Prostatic Hyperplasia (BPH) Treatment','Prostate Steam Therapy (Rezum)','Endoscopic Diagnosis & Resection of Bladder Tumours','Laser Treatment of Kidney & Urinary Tract Stones','Urinary Incontinence & Bladder Dysfunction'],
  },
  {
    id: 40, src: img40,
    specialtyAr: 'استشاري الجهاز الهضمي والمناظير',
    specialtyEn: 'Gastroenterology & Endoscopy Consultant',
    detailsAr: ['تشخيص أمراض الكبد (تليف الكبد والفيروسات الكبدية)','تشخيص وعلاج أمراض البنكرياس','تنظير الجهاز الهضمي العلوي (المريء والمعدة وجرثومة المعدة)','تنظير القولون وتشخيص أمراض الأمعاء','علاج الارتجاع المريئي والقرحات الهضمية'],
    detailsEn: ['Liver Disease Diagnosis (Cirrhosis & Hepatitis Viruses)','Pancreatic Disease Diagnosis & Treatment','Upper GI Endoscopy (Oesophagus, Stomach & H. Pylori)','Colonoscopy & Intestinal Disease Diagnosis','Gastro-Oesophageal Reflux & Peptic Ulcer Treatment'],
  },
];

interface DoctorsPageProps {
  currentLang: string;
  changeLanguage: (lang: string) => void;
}

// WhatsApp icon SVG
const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const ECGPulse = () => (
  <div style={{ display: 'flex', justifyContent: 'center', margin: '14px 0 0' }}>
    <svg viewBox="0 0 300 60" width="280" height="52" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="glow-dp">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge><feMergeNode in="coloredBlur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <mask id="reveal-dp">
          <rect x="0" y="0" width="300" height="60" fill="white">
            <animate attributeName="x" from="-300" to="300" dur="2.4s" repeatCount="indefinite" />
          </rect>
        </mask>
      </defs>
      <line x1="0" y1="30" x2="300" y2="30" stroke="#1787b6" strokeWidth="0.5" strokeOpacity="0.25" />
      <path d="M 0,30 L 105,30 L 112,30 L 117,22 L 122,30 L 128,30 L 133,10 L 141,50 L 150,5 L 158,50 L 165,30 L 170,30 L 175,22 L 180,30 L 300,30"
        fill="none" stroke="#1787b6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        filter="url(#glow-dp)" mask="url(#reveal-dp)" />
      <circle r="4" fill="#1787b6" filter="url(#glow-dp)">
        <animateMotion dur="2.4s" repeatCount="indefinite"
          path="M 0,30 L 105,30 L 112,30 L 117,22 L 122,30 L 128,30 L 133,10 L 141,50 L 150,5 L 158,50 L 165,30 L 170,30 L 175,22 L 180,30 L 300,30" />
      </circle>
    </svg>
  </div>
);

const DoctorsPage = ({ currentLang, changeLanguage }: DoctorsPageProps) => {
  const isAr = currentLang === 'ar';
  const [selectedDoc, setSelectedDoc] = useState<Doctor | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const openWhatsApp = (doc: Doctor, e: React.MouseEvent) => {
    e.stopPropagation();
    const specialty = isAr ? doc.specialtyAr : doc.specialtyEn;
    const message = isAr
      ? `مرحباً، أود حجز موعد مع الدكتور رقم ${doc.id} - تخصص: ${specialty}`
      : `Hello, I would like to book an appointment with Doctor #${doc.id} - Specialty: ${specialty}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div dir={isAr ? 'rtl' : 'ltr'} style={{ fontFamily: "'Cairo','Tajawal',sans-serif", minHeight: '100vh', background: '#f0f5f9' }}>
      <Navbar currentLang={currentLang} changeLanguage={changeLanguage} />
      <MainNavbar currentLang={currentLang} changeLanguage={changeLanguage} />

      {/* ── Hero with Unsplash background ── */}
      <div style={{
        position: 'relative', width: '100%',
        height: 'clamp(280px, 42vw, 500px)',
        overflow: 'hidden',
      }}>
        {/* Real hospital/medical background from Unsplash */}
        <img
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1600&q=80&auto=format&fit=crop"
          alt="medical background"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
        {/* Dark overlay with blue tint */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(135deg, rgba(10,22,40,0.88) 0%, rgba(13,33,55,0.82) 50%, rgba(7,35,60,0.90) 100%)',
        }} />
        {/* Subtle grid pattern */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `linear-gradient(rgba(38,157,204,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(38,157,204,0.06) 1px,transparent 1px)`,
          backgroundSize: '48px 48px',
        }} />
        {/* Glow orb */}
        <div style={{
          position: 'absolute', top: '50%', left: '50%',
          transform: 'translate(-50%,-50%)',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(38,157,204,0.15) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          textAlign: 'center', padding: '0 24px',
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: 'rgba(38,157,204,0.18)', border: '1px solid rgba(38,157,204,0.35)',
            borderRadius: '50px', padding: '6px 20px', marginBottom: '18px',
            backdropFilter: 'blur(8px)', 
          }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#25d366', display: 'inline-block', boxShadow: '0 0 8px #25d366' }} />
            <span style={{ color: '#7dd4f0', fontSize: '13px', fontWeight: '600', letterSpacing: '0.3px' }}>
              {isAr ? 'كادرنا الطبي المتميز' : 'Our Distinguished Medical Staff'}
            </span>
          </div>
          <h1 style={{
            color: '#fff',
            fontSize: 'clamp(30px,5.5vw,58px)',
            fontWeight: '800', margin: '0 0 14px',
            textShadow: '0 2px 30px rgba(0,0,0,0.5)',
            lineHeight: 1.15,
          }}>
            {isAr ? 'فريقنا الطبي' : 'Our Medical Team'}
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(14px,2vw,18px)', margin: 0, fontWeight: '500' }}>
            {isAr ? 'نخبة من أفضل الأطباء المتخصصين' : 'An elite group of the finest specialist physicians'}
          </p>
          <ECGPulse />

          {/* Stats row */}
          <div style={{
            display: 'flex', gap: 'clamp(20px,4vw,48px)',
            marginTop: '28px',
          }}>
            {[
              { num: doctors.length, labelAr: 'طبيب متخصص', labelEn: 'Specialists' },
              { num: '24/7', labelAr: 'خدمة متواصلة', labelEn: 'Service' },
              { num: '15+', labelAr: 'تخصص طبي', labelEn: 'Specialties' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{ color: '#7dd4f0', fontSize: 'clamp(20px,3vw,32px)', fontWeight: '800', lineHeight: 1 }}>{s.num}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px', marginTop: '4px' }}>{isAr ? s.labelAr : s.labelEn}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Doctors Grid ── */}
      <section style={{ padding: 'clamp(40px,6vw,80px) 0', background: '#f0f5f9' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(16px,4vw,48px)' }}>

          {/* Section header */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span style={{
              display: 'inline-block', background: 'linear-gradient(135deg,#e0f2fb,#c8eaf7)',
              color: '#1787b6', fontSize: '13px', fontWeight: '700',
              padding: '6px 22px', borderRadius: '50px', marginBottom: '14px',
              border: '1px solid rgba(23,135,182,0.2)',
            }}>
              {isAr ? 'جميع أطبائنا' : 'All Our Doctors'}
            </span>
            <h2 style={{ fontSize: 'clamp(22px,3.5vw,36px)', fontWeight: '800', color: '#0d2137', margin: 0 }}>
              {isAr ? 'تعرف على فريقنا الطبي' : 'Meet Our Medical Team'}
            </h2>
            <ECGPulse />
          </div>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '24px',
          }}>
            {doctors.map(doc => {
              const isHovered = hoveredId === doc.id;
              return (
                <div
                  key={doc.id}
                  onMouseEnter={() => setHoveredId(doc.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{
                    borderRadius: '20px',
                    overflow: 'hidden',
                    background: '#fff',
                    border: isHovered ? '1px solid rgba(38,157,204,0.4)' : '1px solid #e3eff7',
                    boxShadow: isHovered
                      ? '0 16px 48px rgba(38,157,204,0.2), 0 4px 16px rgba(0,0,0,0.08)'
                      : '0 2px 16px rgba(23,135,182,0.07)',
                    transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
                    transition: 'all 0.3s cubic-bezier(0.25,0.46,0.45,0.94)',
                    cursor: 'default',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  {/* Photo area */}
                  <div
                    style={{ position: 'relative', height: '230px', overflow: 'hidden', cursor: 'pointer' }}
                    onClick={() => setSelectedDoc(doc)}
                  >
                    <img
                      src={doc.src}
                      alt={`doctor-${doc.id}`}
                      style={{
                        width: '100%', height: '100%',
                        objectFit: 'cover', objectPosition: 'top center',
                        display: 'block',
                        transform: isHovered ? 'scale(1.06)' : 'scale(1)',
                        transition: 'transform 0.4s ease',
                      }}
                      loading="lazy"
                    />
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: 'linear-gradient(to top, rgba(13,33,55,0.75) 0%, rgba(13,33,55,0.1) 50%, transparent 100%)',
                    }} />
                    {/* ID badge */}
                    <div style={{
                      position: 'absolute', top: '12px',
                      right: isAr ? 'auto' : '12px',
                      left: isAr ? '12px' : 'auto',
                      background: 'rgba(38,157,204,0.92)',
                      backdropFilter: 'blur(4px)',
                      color: '#fff', fontSize: '10px', fontWeight: '800',
                      padding: '4px 11px', borderRadius: '50px',
                      boxShadow: '0 2px 8px rgba(38,157,204,0.4)',
                    }}>
                      #{doc.id}
                    </div>
                    {/* "View details" hint on hover */}
                    {isHovered && (
                      <div style={{
                        position: 'absolute', bottom: '12px', left: '50%',
                        transform: 'translateX(-50%)',
                        background: 'rgba(255,255,255,0.15)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255,255,255,0.25)',
                        color: '#fff', fontSize: '11px', fontWeight: '700',
                        padding: '5px 14px', borderRadius: '50px',
                        whiteSpace: 'nowrap',
                        animation: 'fadeInUp 0.2s ease',
                      }}>
                        {isAr ? '👆 اضغط للتفاصيل' : '👆 Tap for details'}
                      </div>
                    )}
                  </div>

                  {/* Info + buttons */}
                  <div style={{
                    padding: '14px 16px 16px',
                    direction: isAr ? 'rtl' : 'ltr',
                    display: 'flex', flexDirection: 'column', gap: '10px',
                    flex: 1,
                  }}>
                    <div>
                      <p style={{
                        color: '#0d2137', fontSize: '13px', fontWeight: '700',
                        margin: '0 0 4px',
                        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                      }}>
                        {isAr ? doc.specialtyAr : doc.specialtyEn}
                      </p>
                      {doc.detailsAr.length > 0 && (
                        <p style={{ color: '#1787b6', fontSize: '11px', fontWeight: '600', margin: 0 }}>
                          {isAr ? `${doc.detailsAr.length} تخصصات` : `${doc.detailsEn.length} specialties`}
                        </p>
                      )}
                    </div>

                    {/* WhatsApp button */}
                    <button
                      onClick={(e) => openWhatsApp(doc, e)}
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        gap: '7px',
                        background: 'linear-gradient(135deg,#25d366,#1db954)',
                        color: '#fff', border: 'none',
                        borderRadius: '12px', padding: '9px 14px',
                        fontSize: '12px', fontWeight: '700',
                        cursor: 'pointer',
                        boxShadow: '0 4px 14px rgba(37,211,102,0.35)',
                        transition: 'all 0.2s ease',
                        width: '100%',
                        letterSpacing: '0.2px',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(37,211,102,0.5)';
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                        (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 14px rgba(37,211,102,0.35)';
                      }}
                    >
                      <WhatsAppIcon />
                      {isAr ? 'تواصل معنا' : 'Contact Us'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Modal ── */}
      {selectedDoc && (
        <div
          style={{
            position: 'fixed', inset: 0,
            background: 'rgba(5,15,30,0.75)',
            backdropFilter: 'blur(6px)',
            zIndex: 9999,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '20px',
            animation: 'backdropIn 0.2s ease',
          }}
          onClick={() => setSelectedDoc(null)}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: '#fff', borderRadius: '28px', overflow: 'hidden',
              width: '100%', maxWidth: '500px',
              boxShadow: '0 40px 100px rgba(0,0,0,0.45)',
              animation: 'modalIn 0.3s cubic-bezier(0.34,1.56,0.64,1)',
              maxHeight: '90vh',
              display: 'flex', flexDirection: 'column',
            }}
          >
            {/* Photo header */}
            <div style={{ position: 'relative', height: '270px', flexShrink: 0 }}>
              <img
                src={selectedDoc.src} alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(13,33,55,0.92) 0%, rgba(13,33,55,0.15) 55%, transparent 100%)',
              }} />
              {/* Close */}
              <button
                onClick={() => setSelectedDoc(null)}
                style={{
                  position: 'absolute', top: '16px', right: '16px',
                  width: '36px', height: '36px', borderRadius: '50%',
                  background: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#fff', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.28)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.15)')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>

              {/* Info overlay */}
              <div style={{
                position: 'absolute', bottom: '18px', left: '22px', right: '22px',
                direction: isAr ? 'rtl' : 'ltr',
              }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  background: '#269dcc', color: '#fff',
                  fontSize: '11px', fontWeight: '800',
                  padding: '4px 14px', borderRadius: '50px', marginBottom: '8px',
                }}>
                  <span>#{selectedDoc.id}</span>
                </div>
                <h3 style={{ color: '#fff', fontSize: 'clamp(16px,2.5vw,20px)', fontWeight: '800', margin: 0, lineHeight: 1.3 }}>
                  {isAr ? selectedDoc.specialtyAr : selectedDoc.specialtyEn}
                </h3>
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: '22px 24px', overflowY: 'auto', flex: 1, direction: isAr ? 'rtl' : 'ltr' }}>
              {(isAr ? selectedDoc.detailsAr : selectedDoc.detailsEn).length > 0 ? (
                <>
                  <p style={{
                    color: '#94a3b8', fontSize: '11px', fontWeight: '700',
                    marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '1px',
                    display: 'flex', alignItems: 'center', gap: '8px',
                  }}>
                    <span style={{ width: '20px', height: '2px', background: '#269dcc', display: 'inline-block', borderRadius: '2px' }} />
                    {isAr ? 'التخصصات والخدمات' : 'Specialties & Services'}
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {(isAr ? selectedDoc.detailsAr : selectedDoc.detailsEn).map((d, i) => (
                      <li key={i} style={{
                        display: 'flex', alignItems: 'flex-start', gap: '12px',
                        background: 'linear-gradient(135deg,#f0f8fd,#e8f4fb)',
                        borderRadius: '12px', padding: '11px 16px',
                        border: '1px solid rgba(23,135,182,0.1)',
                      }}>
                        <span style={{
                          width: '22px', height: '22px', borderRadius: '50%',
                          background: 'linear-gradient(135deg,#269dcc,#1787b6)',
                          color: '#fff',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          fontSize: '10px', fontWeight: '800', flexShrink: 0, marginTop: '1px',
                          boxShadow: '0 2px 8px rgba(38,157,204,0.3)',
                        }}>{i + 1}</span>
                        <span style={{ color: '#2d3748', fontSize: '13.5px', fontWeight: '500', lineHeight: '1.6' }}>{d}</span>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <p style={{ color: '#9ca3af', fontSize: '14px', textAlign: 'center', margin: '10px 0 20px' }}>
                  {isAr ? 'سيتم إضافة التفاصيل قريباً' : 'Details will be added soon'}
                </p>
              )}

              {/* WhatsApp button inside modal */}
              <button
                onClick={(e) => openWhatsApp(selectedDoc, e)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  gap: '10px', width: '100%',
                  background: 'linear-gradient(135deg,#25d366,#1db954)',
                  color: '#fff', border: 'none',
                  borderRadius: '16px', padding: '14px 20px',
                  fontSize: '14px', fontWeight: '700',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px rgba(37,211,102,0.4)',
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.3px',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 28px rgba(37,211,102,0.5)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 20px rgba(37,211,102,0.4)';
                }}
              >
                <WhatsAppIcon />
                {isAr ? 'تواصل معنا عبر واتساب' : 'Contact via WhatsApp'}
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.88) translateY(24px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes backdropIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateX(-50%) translateY(8px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default DoctorsPage;
// ─────────────────────────────────────────────────────────────────────────────
//  doctorData.ts  —  Single source of truth for departments, clinics & doctors
// ─────────────────────────────────────────────────────────────────────────────

export const WHATSAPP_NUMBER = '966920002159';

// ── Doctor interface ──────────────────────────────────────────────────────────
export interface Doctor {
  id: number;
  nameAr: string;
  nameEn: string;
  specialtyAr: string;
  specialtyEn: string;
  detailsAr: string[];
  detailsEn: string[];
  /** relative import path — consumer does: import img1 from '../assets/doctors/1.jpg' */
  imgFile: string;
}

// ── Department / Clinic structure ─────────────────────────────────────────────
export interface Clinic {
  idAr: string;
  idEn: string;
  nameAr: string;
  nameEn: string;
  /** doctor IDs belonging to this clinic */
  doctorIds: number[];
}

export interface Department {
  id: number;
  nameAr: string;
  nameEn: string;
  clinics: Clinic[];
}

// ── All doctors ────────────────────────────────────────────────────────────
export const doctors: Doctor[] = [
{
  id: 1, imgFile: '1.png',
  nameAr: 'آمنــــه الطيـــــــب',
  nameEn: 'Amnah Al-Tayeb',
  specialtyAr: 'أخصائي أول الطب النفسي',
  specialtyEn: 'Psychiatry Senior Registrar',
  detailsAr: ['تشخيص وعلاج الاكتئاب واضطرابات المزاج','تشخيص وعلاج القلق ونوبات الهلع','العلاج النفسي السلوكي والمعرفي','متابعة الاضطرابات النفسية لدى البالغين والمراهقين','علاج اضطرابات النوم والتوتر النفسي','التعامل مع الضغوط النفسية والصدمات','تشخيص وعلاج الوسواس القهري واضطرابات الشخصية'],
  detailsEn: ['Diagnosis & Treatment of Depression & Mood Disorders','Diagnosis & Treatment of Anxiety & Panic Disorders','Cognitive Behavioural Therapy (CBT)','Mental Health Care for Adults & Adolescents','Sleep Disorders & Stress Management','Psychological Trauma & Emotional Support','Obsessive-Compulsive & Personality Disorders Treatment'],
},
{
  id: 3, imgFile: '3.png',
  nameAr: 'محمد المغربي', nameEn: 'Mohammed Al-Maghribi',
  specialtyAr: 'استشاري أنف وأذن وحنجرة', specialtyEn: 'ENT Consultant',
  detailsAr: ['تشخيص وعلاج التهابات الأنف والأذن والحنجرة','علاج حساسية الأنف والجيوب الأنفية','تشخيص وعلاج مشاكل السمع وطنين الأذن','علاج التهابات اللوزتين والحنجرة','تنظير الأنف والحنجرة وتشخيص الحالات المزمنة','علاج اضطرابات التوازن والدوخة','متابعة حالات الشخير وانقطاع التنفس أثناء النوم'],
  detailsEn: ['Diagnosis & Treatment of Ear, Nose & Throat Infections','Allergic Rhinitis & Sinusitis Management','Hearing Problems & Tinnitus Treatment','Tonsillitis & Throat Disorders Treatment','Nasal & Laryngeal Endoscopy for Chronic Conditions','Balance Disorders & Vertigo Management','Snoring & Sleep Apnoea Follow-up'],
},
{
  id: 4, imgFile: '4.png',
  nameAr: 'عبدالله آل قدرة', nameEn: 'Abdullah Al-Qudra',
  specialtyAr: 'إستشاري علاج جذور الأسنان', specialtyEn: 'Consultant in Endodontics',
  detailsAr: ['علاج حالات التهابات عصب الأسنان','علاج حالات التهابات الجذور','إعادة علاج الجذور في حال فشل العلاج السابق','علاج حالات جذور الأسنان الطارئة المتعلقة بالسقوط أو الحوادث'],
  detailsEn: ['Dental Nerve Inflammation Treatment','Root Canal Infections','Root Canal Re-treatment','Emergency Dental Root Cases (Trauma/Accidents)'],
},
{
  id: 5, imgFile: '5.png',
  nameAr: 'عبد الرحمن العمري', nameEn: 'Abdulrahman Al-Omari',
  specialtyAr: 'اﺳﺘﺸﺎري اﻟﺠﺮاﺣﺔ اﻟﻌﺎﻣﺔ وﺟﺮاﺣﺔ اﻟﻐﺪد واﻟﺜﺪي واﻟﺴﻤﻨﺔ', specialtyEn: '"Consultant General, Endocrine, Breast, and Bariatric Surgeon',
  detailsAr: ['تحويل المسار المصغر والكلاسيكي','إعادة وترميم عمليات السمنة السابقة','عمليات الكبسولة العادية والكبسولة الذكية للمعدة'],
  detailsEn: ['Mini & Classic Gastric Bypass','Revision & Repair of Previous Bariatric Surgery','Standard & Smart Gastric Capsule Procedures'],
},
{
  id: 6, imgFile: '6.png',
  nameAr: 'عادل معلوي', nameEn: 'Adel Maalawi',
  specialtyAr: 'استشاري جراحات المسالك البولية', specialtyEn: 'Consultant in Urological Surgery',
  detailsAr: ['معالجة الحصوات والمغص الكلوي بالمناظير المرنة والليزر','جراحات علاج أمراض الذكورة والضعف الجنسي (زرع الدعامات)','عمليات الدوالي والقيلة المائية','علاج تضخم البروستاتا بالتبخير'],
  detailsEn: ['Kidney Stones & Renal Colic via Flexible Ureteroscopy & Laser','Male Sexual Dysfunction Surgery (Penile Implants)','Varicocele & Hydrocele Surgery','Prostate Enlargement Steam Therapy (Rezum)'],
},
{
  id: 7, imgFile: '7.png',
  nameAr: 'عدنان بوغوفه', nameEn: 'Adnan Bughofa',
  specialtyAr: 'استشاري جراحات وأمراض العظام', specialtyEn: 'Consultant in Orthopedic Surgery and Disorders',
  detailsAr: ['زراعة وتبديل المفاصل','مناظير الركبة والكتف والإصابات','جراحات الحوض والإصابات والكسور'],
  detailsEn: ['Joint Replacement & Arthroplasty','Knee & Shoulder Arthroscopy & Sports Injuries','Pelvic Injuries & Complex Fractures'],
},
{
  id: 8, imgFile: '8.png',
  nameAr: 'احمد جبر', nameEn: 'Ahmed Jabr',
  specialtyAr: 'إستشاري طب وجراحة عيون', specialtyEn: 'Consultant in Ophthalmology and Eye Surgery',
  detailsAr: ['العدسات اللاصقة الصلبة والمرنة','علاج مشاكل الشبكية','علاج المياه البيضاء (الكاتراكت)','علاج المياه الزرقاء (الجلوكوما)'],
  detailsEn: ['Rigid & Flexible Contact Lenses','Retinal Disorders','Cataract Treatment','Glaucoma Treatment'],
},
{
  id: 9, imgFile: '9.png',
  nameAr: 'احمد شاكر', nameEn: 'Ahmed Shaker',
  specialtyAr: 'استشاري التخدير', specialtyEn: 'Anaesthesiology Consultant',
  detailsAr: ['التخدير العام والموضعي لجميع أنواع العمليات','إدارة الألم الحاد والمزمن ما بعد الجراحة','التخدير فوق الجافية (Epidural) للولادة بدون ألم','التخدير في جراحات القلب والصدر والأوعية الدموية','رعاية المريض في غرفة الإفاقة والعناية المركزة','تقييم المريض قبل العملية وتحديد بروتوكول التخدير المناسب'],
  detailsEn: ['General & Regional Anaesthesia for All Surgical Procedures','Acute & Chronic Post-operative Pain Management','Epidural Anaesthesia for Painless Labour','Cardiac, Thoracic & Vascular Surgery Anaesthesia','Recovery Room & Intensive Care Patient Management','Pre-operative Assessment & Anaesthesia Protocol Planning'],
},
{
  id: 10, imgFile: '10.png',
  nameAr: 'شيماء سيد', nameEn: 'Shaimaa Sayed',
  specialtyAr: 'أخصائي أول المخ والأعصاب', specialtyEn: 'Senior Neurologist',
  detailsAr: ['تشخيص وعلاج الصداع النصفي والصداع المزمن','متابعة وعلاج مرضى الصرع والتشنجات','تشخيص وعلاج الجلطات الدماغية والسكتات','علاج اضطرابات الأعصاب الطرفية والتنميل','متابعة أمراض الذاكرة والزهايمر','تشخيص وعلاج اضطرابات الحركة والرعشة','متابعة حالات التصلب المتعدد وأمراض الجهاز العصبي'],
  detailsEn: ['Diagnosis & Treatment of Migraine & Chronic Headaches','Epilepsy & Seizure Disorders Management','Stroke & Cerebrovascular Disease Treatment','Peripheral Neuropathy & Numbness Management',"Memory Disorders & Alzheimer's Disease Follow-up','Movement Disorders & Tremor Treatment','Multiple Sclerosis & Neurological Diseases Care"],
},
{
  id: 11, imgFile: '11.png',
  nameAr: 'محمد حبوس', nameEn: 'Muhammad Habous',
  specialtyAr: 'إستشاني جراحات المسالك البولية', specialtyEn: 'Urology Consultant',
  detailsAr: ['تشخيص وعلاج حصوات الكلى والمسالك البولية','علاج التهابات المسالك البولية المتكررة','متابعة وعلاج تضخم البروستاتا','علاج مشاكل السلس البولي واضطرابات التبول','تشخيص وعلاج العقم وضعف الخصوبة لدى الرجال','جراحات المسالك البولية بالمنظار','متابعة أمراض الكلى والمثانة والجهاز البولي'],
  detailsEn: ['Kidney Stones & Urinary Tract Diseases Treatment','Recurrent Urinary Tract Infections Management','Benign Prostatic Enlargement Treatment','Urinary Incontinence & Voiding Disorders Care','Male Infertility & Reproductive Health Management','Minimally Invasive Urological Endoscopic Surgery','Kidney, Bladder & Urinary System Follow-up'],
},
{
  id: 12, imgFile: '12.png',
  nameAr: 'علي قناص', nameEn: 'Ali Qannas',
  specialtyAr: 'اﺳﺘﺸﺎري اﻧﻒ وأذن وﺣﻨﺠﺮة وﺟﺮاﺣﺎت اﻟﺮأس واﻟﻌﻨﻖ', specialtyEn: 'Consultant in Ear, Nose & Throat and Head & Neck Surgery',
  detailsAr: ['أورام الغدة الدرقية وجار الدرقية','أورام الغدة النكافية والغدة اللعابية','أورام الرأس والرقبة المجهرية المتقدمة','تعديل الحاجز الأنفي والقرنيات'],
  detailsEn: ['Thyroid & Parathyroid Tumours','Parotid & Salivary Gland Tumours','Advanced Microscopic Head & Neck Tumours','Nasal Septum & Turbinate Correction'],
},
{
  id: 13, imgFile: '13.png',
  nameAr: 'علي ظافر آل سويدان', nameEn: 'Ali Zafer Al-Suwaidan',
  specialtyAr: 'اﺳﺘﺸﺎري ﺑﺎﻃﻨﺔ وأﻣﺮاض ﻣﻌﺪﻳﺔ ﻟﺪى اﻟﻜﺒﺎر', specialtyEn: 'Consultant Internist and Adult Infectious Disease Specialist',
  detailsAr: ['الحمى المالطية والحمى مجهولة السبب','الالتهابات التنفسية العلوية والسفلية','التهابات المسالك البولية'],
  detailsEn: ['Brucellosis & Fever of Unknown Origin','Upper & Lower Respiratory Infections','Urinary Tract Infections'],
},
{
  id: 15, imgFile: '15.png',
  nameAr: 'دينا حسين', nameEn: 'Dina Hussein',
  specialtyAr: 'اخصائي أول طب الأسرة', specialtyEn: 'Senior Family Medicine Specialist',
  detailsAr: ['علاج الأمراض الشائعة الحادة والمزمنة','المتابعة الدورية للأمراض المزمنة (ضغط الدم، السكري)','رعاية المسنين والرعاية الصحية المنزلية'],
  detailsEn: ['Acute & Chronic Common Diseases','Periodic Follow-Up for Chronic Conditions (Hypertension, Diabetes)','Elderly Care & Home Healthcare'],
},
{
  id: 16, imgFile: '16.png',
  nameAr: 'عبد الله صالح اليامي', nameEn: 'Abdullah Saleh Al-Yami',
  specialtyAr: 'استشــــــاري الطــــــب الباطنــــــي', specialtyEn: 'Internal Medicine Consultant',
  detailsAr: ['تشخيص وعلاج الأمراض الباطنية الحادة والمزمنة','متابعة مرضى السكري وارتفاع ضغط الدم','تشخيص وعلاج اضطرابات الجهاز الهضمي','متابعة أمراض الغدد الصماء والتمثيل الغذائي','علاج التهابات وأمراض الجهاز التنفسي','الفحوصات الدورية والوقاية من الأمراض المزمنة','الرعاية الصحية الشاملة لكبار السن'],
  detailsEn: ['Diagnosis & Treatment of Acute & Chronic Internal Diseases','Diabetes & Hypertension Follow-up','Digestive System Disorders Management','Endocrine & Metabolic Diseases Care','Respiratory Diseases & Infections Treatment','Preventive Check-ups & Chronic Disease Screening','Comprehensive Elderly Healthcare'],
},
{
  id: 17, imgFile: '17.jpeg',
  nameAr: 'أمل عبدالسلام', nameEn: 'Aml Abd-Elsalam',
  specialtyAr: 'أخصائي أول المخ والأعصاب', specialtyEn: 'Senior Neurology Specialist',
  detailsAr: ['تشخيص وعلاج أمراض المخ والأعصاب','متابعة حالات الصداع والصداع النصفي','تشخيص وعلاج التشنجات والصرع','متابعة حالات ضعف وتنميل الأعصاب','تشخيص وعلاج اضطرابات الحركة والاتزان','متابعة حالات الجلطات العصبية ومضاعفاتها','علاج آلام الأعصاب الطرفية والعضلات'],
  detailsEn: ['Diagnosis & Treatment of Neurological Disorders','Migraine & Headache Management','Epilepsy & Seizure Disorders Treatment','Peripheral Neuropathy & Nerve Weakness Follow-up','Movement & Balance Disorders Care','Stroke & Neurological Complications Follow-up','Peripheral Nerve & Muscle Pain Management'],
},
{
  id: 18, imgFile: '18.png',
  nameAr: 'ايمان زين العابدين', nameEn: 'Iman Zain Al-Abidin',
  specialtyAr: 'استشاري أمراض وجراحات النساء والتوليد', specialtyEn: 'Consultant in Obstetrics and Gynecology',
  detailsAr: ['متابعة الحمل الحرج وعالي الخطورة','إجراء الولادة الطبيعية والولادة بدون ألم','عمليات ترميم وتجميل المهبل','تصليح سقوط المثانة أو سقوط المستقيم'],
  detailsEn: ['High-Risk Pregnancy Follow-Up','Normal Delivery & Painless Labour','Vaginal Reconstruction & Rejuvenation','Bladder & Rectal Prolapse Repair'],
},
{
  id: 19, imgFile: '19.png',
  nameAr: 'محمود اسامه', nameEn: 'Mahmoud Osama',
  specialtyAr: 'إستشاري الأمراض الباطنية', specialtyEn: 'Internal Medicine Consultant',
  detailsAr: ['التشخيص المبكر لمرضى السكري','أمراض الغدد الصماء بأنواعها','الأمراض الباطنية المزمنة (السكري والضغط والجهاز الهضمي)'],
  detailsEn: ['Early Diagnosis of Diabetes','All Types of Endocrine Disorders','Chronic Internal Diseases (Diabetes, Hypertension, GI)'],
},
{
  id: 20, imgFile: '20.png',
  nameAr: 'مجاهد الوعلاني', nameEn: "Mujahid Al-Waalani",
  specialtyAr: 'استشاري أمراض الجهاز الهضمي والكبد والمناظير', specialtyEn: 'Consultant Gastroenterologist, Hepatologist & Endoscopist',
  detailsAr: ['تنظير الجهاز الهضمي العلوي والسفلي','تشخيص وعلاج أمراض الكبد والتليف الكبدي','علاج جرثومة المعدة والقرحة الهضمية','تشخيص وعلاج الارتجاع المريئي واضطرابات الهضم','متابعة أمراض القولون والأمعاء الالتهابية','تشخيص وعلاج أمراض البنكرياس والقنوات الصفراوية','الكشف المبكر عن أورام الجهاز الهضمي بالمنظار'],
  detailsEn: ['Upper & Lower Gastrointestinal Endoscopy','Liver Diseases & Hepatic Fibrosis Management','H. Pylori & Peptic Ulcer Treatment','GERD & Digestive Disorders Care','Inflammatory Bowel Diseases Follow-up','Pancreatic & Biliary Tract Diseases Treatment','Early Detection of GI Tumours via Endoscopy'],
},
{
  id: 21, imgFile: '21.png',
  nameAr: 'محمد آل مطلق', nameEn: 'Mohammed Al-Mutlaq',
  specialtyAr: 'إستشاري الأشعة التداخلية', specialtyEn: 'Interventional Radiology Consultant',
  detailsAr: ['دوالي الساقين والأوردة العنكبوتية','آلام ودوالي الخصية عند الرجال','البواسير بالقسطرة','القدم السكري وعدم القدرة على المشي لمسافات طويلة'],
  detailsEn: ['Varicose Veins & Spider Veins','Testicular Pain & Varicocele in Men','Haemorrhoid Embolisation','Diabetic Foot & Walking Limitation'],
},
{
  id: 22, imgFile: '22.png',
  nameAr: 'محمد السباعي', nameEn: "Mohammed Al-Subaie",
  specialtyAr: 'استشاري طب الاطفال حديثي الولادة', specialtyEn: 'Pediatric and Neonatal Medicine Consultant',
  detailsAr: ['جميع حالات حديثي الولادة والخدج','حالات المواليد ناقصي النمو','مواليد الحمل عالي الخطورة'],
  detailsEn: ['All Neonatal & Premature Cases','Growth-Restricted Newborns','High-Risk Pregnancy Newborns'],
},
{
  id: 23, imgFile: '23.png',
  nameAr: 'محمد آل سوار', nameEn: 'Mohammed Al-Sawwar',
  specialtyAr: 'اﺳﺘﺸﺎري اﻟﺠﺮاﺣﺔ اﻟﻌﺎﻣﺔ وﺟﺮاﺣﺔ اﻷورام واﻟﻤﺴﺘﻘﻴﻢ', specialtyEn: 'Consultant General, Oncologic, and Colorectal Surgeon',
  detailsAr: ['عمليات أورام الجهاز الهضمي','عمليات أورام الرحم والمبيض','عمليات إصلاح الفتق بأنواعه','عمليات البواسير والناسور'],
  detailsEn: ['GI Tumour Surgery','Uterine & Ovarian Tumour Surgery','All Types of Hernia Repair','Haemorrhoid & Fistula Surgery'],
},
{
  id: 24, imgFile: '24.png',
  nameAr: 'محمد الزهراني', nameEn: 'Mohammed Al-Zahrani',
  specialtyAr: 'استشاري طب الاطفال والامراض الصدرية', specialtyEn: 'Pediatric and Chest Diseases Consultant',
  detailsAr: ['كشف وتشخيص ومعالجة الحالات العامة لدى الأطفال','كشف وتشخيص ومعالجة الأمراض الصدرية لدى الأطفال','التهابات الجهاز التنفسي العلوي والسفلي الحادة والمزمنة'],
  detailsEn: ['General Paediatric Diagnosis & Treatment','Paediatric Chest Diseases','Acute & Chronic Upper & Lower Respiratory Infections'],
},
{
  id: 26, imgFile: '26.png',
  nameAr: 'محمد حنيف', nameEn: 'Mohammed Hanif',
  specialtyAr: 'استشاري طب الأطفال المتخصص', specialtyEn: 'Paediatric Specialty Consultant',
  detailsAr: ['أمراض السكري ومضاعفاته لدى الأطفال','السمنة المفرطة واضطرابات الدهون','قصر القامة وضعف النمو'],
  detailsEn: ['Paediatric Diabetes & Complications','Morbid Obesity & Lipid Disorders','Short Stature & Growth Failure'],
},
{
  id: 27, imgFile: '27.png',
  nameAr: 'ناصر آل ابالطحين', nameEn: 'Nasser Al-Abalathin',
  specialtyAr: 'استشاري الاشعة التداخلية', specialtyEn: 'Interventional Radiology Consultant',
  detailsAr: ['آلام الظهر وعرق النساء بالحقن','آلام الرقبة والذراعين وآلام الأبهر','آلام المفاصل (الركبة – الكتف) بالحقن والتردد الحراري والبلازما'],
  detailsEn: ['Back Pain & Sciatica Injections','Neck, Arm & Aortic Pain','Joint Pain (Knee & Shoulder) via Injections, Radiofrequency & PRP'],
},
{
  id: 28, imgFile: '28.png',
  nameAr: 'أميمة محجوب', nameEn: 'Umaima Mahjoub',
  specialtyAr: 'إستشاري العناية المركزة للأطفال', specialtyEn: 'Pediatric Intensive Care Consultant',
  detailsAr: ['معالجة الحالات الحرجة للأطفال','حالات الالتهابات الصدرية الشديدة وهجمات الربو','علاج حالات الصدمة بأنواعها (التهابية، عصبية، قلبية، تحسسية)'],
  detailsEn: ['Management of Critical Pediatric Cases','Severe Chest Infections & Asthma Attacks','Treatment of All Types of Shock (Septic, Neurogenic, Cardiogenic, Anaphylactic)'],
},
{
  id: 29, imgFile: '29.png',
  nameAr: 'راشد آل قضيع', nameEn: "Rashed Al-Quadie",
  specialtyAr: 'استشاري ﺟﺮاﺣﺔ اﻟﻌﻈﺎم واﻟﻤﻔﺎﺻﻞ', specialtyEn: 'Consultant in Orthopedic Surgery and Joint Surgery',
  detailsAr: ['علاج خشونة المفاصل والاحتكاك','زراعة وتبديل المفاصل','جراحات الحوض والإصابات والكسور المعقدة','مناظير الركبة والكتف والإصابات الرياضية'],
  detailsEn: ['Osteoarthritis & Joint Wear Treatment','Joint Replacement & Arthroplasty','Pelvic Surgery & Complex Fractures','Knee & Shoulder Arthroscopy & Sports Injuries'],
},
{
  id: 30, imgFile: '30.png',
  nameAr: 'سعيد السريعي', nameEn: "Saeed Al-Suraie",
  specialtyAr: 'ﺳﺘﺸﺎري اﻟﺠﺮاﺣﺔ اﻟﻌﺎﻣﺔ وﺟﺮاﺣﺔ اﻟﺴﻤﻨﺔ واﻟﻤﻨﺎﺿﻴﺮ', specialtyEn: 'Consultant General, Bariatric, and Laparoscopic Surgeon',
  detailsAr: ['جراحات تكميم المعدة بالمنظار','جراحات تحويل المسار','عمليات الكبسولة العادية والكبسولة الذكية','عمليات الجراحة العامة بالمنظار'],
  detailsEn: ['Laparoscopic Sleeve Gastrectomy','Gastric Bypass Surgery','Standard & Smart Capsule Procedures','Laparoscopic General Surgery'],
},
{
  id: 31, imgFile: '31.png',
  nameAr: 'صالح آل مطلق', nameEn: 'Saleh Al-Mutlaq',
  specialtyAr: 'استشاري ﺗﻘﻮﻳﻢ اﻷﺳﻨﺎن وﻋﻈﺎم اﻟﻮﺟﻪ واﻟﻔﻜﻴﻦ', specialtyEn: 'Consultant Orthodontist and Craniofacial Orthopedics Specialist',
  detailsAr: ['علاج الحالات العادية والمعقدة','العلاج المبكر لتشوهات الفكين','علاج كبار السن لتعديل الأسنان المائلة قبل الزراعة','التقويم الجراحي بكل درجاته','التقويم الشفاف (إنفيزلاين)'],
  detailsEn: ['Treatment of Simple & Complex Cases','Early Treatment of Jaw Deformities','Pre-Implant Orthodontics for Seniors','Surgical Orthodontics at All Levels','Clear Aligners (Invisalign)'],
},
{
  id: 32, imgFile: '32.png',
  nameAr: 'علي آل مسعد', nameEn: 'Ali Al Massad',
  specialtyAr: 'استشاري الطب الباطني وأمراض الجهاز الهضمي والكبد', specialtyEn: 'Consultant Gastroenterology & Hepatology',
  detailsAr: ['تشخيص وعلاج أمراض الجهاز الهضمي المزمنة','علاج أمراض الكبد والتهاب الكبد الفيروسي','تشخيص وعلاج القولون العصبي واضطرابات الهضم','متابعة حالات التليف الكبدي وأمراض المرارة','تنظير الجهاز الهضمي العلوي والسفلي','علاج قرحة المعدة وجرثومة المعدة','متابعة أمراض البنكرياس والقنوات الصفراوية'],
  detailsEn: ['Diagnosis & Treatment of Chronic Gastrointestinal Diseases','Liver Diseases & Viral Hepatitis Management','Irritable Bowel Syndrome & Digestive Disorders Care','Liver Fibrosis & Gallbladder Diseases Follow-up','Upper & Lower Gastrointestinal Endoscopy','Peptic Ulcer & H. Pylori Treatment','Pancreatic & Biliary Tract Diseases Management'],
},
{
  id: 33, imgFile: '33.png',
  nameAr: 'سالي سليمان', nameEn: 'Sally Suleiman',
  specialtyAr: 'أخصائي أول الأمراض الصدرية والحساسية', specialtyEn: 'Senior Pulmonology and Allergy Specialist',
  detailsAr: ['علاج الجلطات الرئوية الحادة','علاج ارتفاع ضغط الشريان الرئوي','علاج وتشخيص أمراض التليف الرئوي','قياس وظائف التنفس'],
  detailsEn: ['Treatment of Acute Pulmonary Embolism','Pulmonary Arterial Hypertension','Diagnosis & Treatment of Pulmonary Fibrosis','Pulmonary Function Testing'],
},
{
  id: 34, imgFile: '34.png',
  nameAr: 'مروة مصطفى', nameEn: 'Marwa Mustafa',
  specialtyAr: 'أخصائي طب الأطفال', specialtyEn: 'Specialist in Pediatrics',
  detailsAr: ['متابعة صحة الأطفال وحديثي الولادة','تشخيص وعلاج الأمراض الشائعة عند الأطفال','متابعة النمو والتطور والتغذية للأطفال','علاج الحمى والالتهابات والنزلات المعوية','متابعة الحساسية والربو عند الأطفال','تقديم برامج التطعيمات الوقائية','رعاية الأطفال في مختلف المراحل العمرية'],
  detailsEn: ['Newborn & Child Health Follow-up','Diagnosis & Treatment of Common Pediatric Diseases','Child Growth, Development & Nutrition Monitoring','Fever, Infections & Gastroenteritis Management','Pediatric Allergy & Asthma Care','Preventive Vaccination Programs','Comprehensive Care for All Pediatric Age Groups'],
},
{
  id: 35, imgFile: '35.png',
  nameAr: 'شهرزاد بن خوجة', nameEn: 'Shahrazad Ben Khoja',
  specialtyAr: 'أخصائية التخدير', specialtyEn: 'Anaesthesiology Specialist',
  detailsAr: ['أخصائي أول تخدير','تخدير عام وموضعي','إدارة الألم الحاد والمزمن','تخدير الجراحات المعقدة والحرجة','تخدير جراحات السمنة وتجميل الجسم'],
  detailsEn: ['Senior Anaesthesia Specialist','General & Regional Anaesthesia','Acute & Chronic Pain Management','Complex & High-Risk Surgical Anaesthesia','Bariatric & Body Contouring Anaesthesia'],
},
{
  id: 36, imgFile: '36.png',
  nameAr: 'سوزان الحداد', nameEn: 'Suzan Al-Haddad',
  specialtyAr: 'استشاري ﺟﺮاﺣﺎت اﻟﻨﺴﺎء واﻟﻮﻻدة', specialtyEn: 'Consultant in Obstetrics and Gynecology',
  detailsAr: ['متابعة الحمل الحرج','إجراء الولادة الطبيعية والولادة بدون ألم','عمليات ترميم وتجميل المهبل','تصليح سقوط المثانة أو سقوط المستقيم'],
  detailsEn: ['High-Risk Pregnancy Follow-Up','Normal Delivery & Painless Labour','Vaginal Reconstruction & Rejuvenation','Bladder & Rectal Prolapse Repair'],
},
{
  id: 37, imgFile: '37.png',
  nameAr: 'وليد مغراوي', nameEn: 'Walid Maghrawi',
  specialtyAr: 'إستشاري أمراض القلب', specialtyEn: 'Consultant in Cardiology',
  detailsAr: ['تصوير الشريان التاجي','اختلال ضربات القلب','رسم القلب بالمجهود','الفحص الدوري الشامل للقلب والأوعية الدموية'],
  detailsEn: ['Coronary Angiography','Cardiac Arrhythmia','Stress ECG','Comprehensive Cardiovascular Check-Up'],
},
{
  id: 38, imgFile: '38.png',
  nameAr: 'ظافر الشهري', nameEn: 'Zafer Al-Shehri',
  specialtyAr: 'إستشاري ﻃﺐ اﻷﻃﻔﺎل وﻣﻨﺎﻇﻴﺮ اﻟﺠﻬﺎز اﻟﻬﻀﻤﻲ', specialtyEn: 'إستشاري ﻃﺐ اﻷﻃﻔﺎل وﻣﻨﺎﻇﻴﺮ اﻟﺠﻬﺎز اﻟﻬﻀﻤﻲ',
  detailsAr: ['علاج مشاكل الجهاز الهضمي','علاج ضعف النمو والتغذية','تشخيص وعلاج آلام البطن المزمنة والدورية','علاج تقرحات الأمعاء الالتهابية'],
  detailsEn: ['Gastrointestinal Disorders','Growth Failure & Nutritional Issues','Chronic & Recurrent Abdominal Pain','Inflammatory Bowel Disease'],
},
{
  id: 39, imgFile: '39.png',
  nameAr: 'محمد فتحي', nameEn: 'Mohammed Fathi',
  specialtyAr: 'استشاري أمراض وجراحات المسالك البولية', specialtyEn: 'Urology & Urological Surgery Consultant',
  detailsAr: ['علاج التهاب وتضخم البروستاتا','علاج البروستاتا بالتبخير (Rezum)','تشخيص واستئصال أورام المثانة بالمنظار','تشخيص وعلاج حصوات الكلى والمسالك البولية بالليزر','علاج سلس البول وضعف الوظيفة البولية'],
  detailsEn: ['Prostatitis & Benign Prostatic Hyperplasia (BPH) Treatment','Prostate Steam Therapy (Rezum)','Endoscopic Diagnosis & Resection of Bladder Tumours','Laser Treatment of Kidney & Urinary Tract Stones','Urinary Incontinence & Bladder Dysfunction'],
},
{
  id: 40, imgFile: '40.png',
  nameAr: 'احمد العزب', nameEn: 'Ahmed Al-Azzab',
  specialtyAr: 'اخصائي أول الجهاز الهضمي والمناظير', specialtyEn: 'Senior Gastroenterology & Endoscopy Specialist',
  detailsAr: ['تشخيص أمراض الكبد (تليف الكبد والفيروسات الكبدية)','تشخيص وعلاج أمراض البنكرياس','تنظير الجهاز الهضمي العلوي (المريء والمعدة وجرثومة المعدة)','تنظير القولون وتشخيص أمراض الأمعاء','علاج الارتجاع المريئي والقرحات الهضمية'],
  detailsEn: ['Liver Disease Diagnosis (Cirrhosis & Hepatitis Viruses)','Pancreatic Disease Diagnosis & Treatment','Upper GI Endoscopy (Oesophagus, Stomach & H. Pylori)','Colonoscopy & Intestinal Disease Diagnosis','Gastro-Oesophageal Reflux & Peptic Ulcer Treatment'],
},
{
  id: 41, imgFile: '41.png',
  nameAr: 'محمد مهدي آل سليمان', nameEn: 'Mohammed Mahdi Al-Sulaiman',
  specialtyAr: 'استشاري أمراض الصدر', specialtyEn: 'Consultant Pulmonologist',
  detailsAr: ['تشخيص وعلاج أمراض الجهاز التنفسي المزمنة','علاج الربو الشعبي والحساسية الصدرية','تشخيص وعلاج الالتهاب الرئوي والتهابات الشعب الهوائية','متابعة حالات الانسداد الرئوي المزمن واضطرابات التنفس','تشخيص أمراض الصدر باستخدام وظائف الرئة والأشعة'],
  detailsEn: ['Diagnosis & Treatment of Chronic Respiratory Diseases','Asthma & Chest Allergy Management','Diagnosis & Treatment of Pneumonia & Bronchitis','Management of COPD & Breathing Disorders','Chest Disease Diagnosis Using Pulmonary Function Tests & Imaging'],
},
{
  id: 42, imgFile: '42.png',
  nameAr: 'على الهاجري', nameEn: 'Ali Al-Hajri',
  specialtyAr: 'استشاري الطب الباطني والغدد الصماء', specialtyEn: 'Consultant Internist & Endocrinologist',
  detailsAr: ['تشخيص وعلاج مرض السكري ومضاعفاته','متابعة اضطرابات الغدة الدرقية والغدد الصماء','علاج ارتفاع ضغط الدم والكوليسترول','تشخيص وعلاج أمراض الباطنية المزمنة','متابعة اضطرابات الهرمونات والسمنة الأيضية'],
  detailsEn: ['Diagnosis & Management of Diabetes & Its Complications','Thyroid & Endocrine Disorder Management','Treatment of Hypertension & High Cholesterol','Diagnosis & Treatment of Chronic Internal Medicine Diseases','Management of Hormonal Disorders & Metabolic Obesity'],
},
{
  id: 43, imgFile: '43.png',
  nameAr: 'رشا العطعوط', nameEn: 'Rasha Al-Atout',
  specialtyAr: 'اخصائي اول في الجراحة العامة', specialtyEn: 'Senior Specialist in General Surgery',
  detailsAr: ['تشخيص وعلاج حالات الفتق المختلفة','استئصال الزائدة الدودية والمرارة جراحياً','علاج أمراض الشرج مثل البواسير والشرخ الشرجي','جراحات الجهاز الهضمي والمناظير الجراحية','متابعة وعلاج الجروح والخراجات والالتهابات الجراحية'],
  detailsEn: ['Diagnosis & Treatment of Various Hernia Cases','Appendectomy & Gallbladder Surgical Removal','Treatment of Anal Diseases Such as Hemorrhoids & Anal Fissures','Gastrointestinal & Laparoscopic Surgeries','Management of Wounds, Abscesses & Surgical Infections'],
},
{
  id: 44, imgFile: '44.png',
  nameAr: 'محمد كانون', nameEn: 'Mohammed Kanoun',
  specialtyAr: 'استشاري جراحات العظام والمفاصل', specialtyEn: 'Consultant Orthopedic & Joint Surgeon',
  detailsAr: ['تشخيص وعلاج كسور العظام بمختلف أنواعها','علاج إصابات وإلتواءات المفاصل والأربطة','جراحات تغيير المفاصل مثل الركبة والورك','علاج خشونة المفاصل وآلام العمود الفقري','متابعة إصابات الملاعب وجراحات العظام الرياضية'],
  detailsEn: ['Diagnosis & Treatment of All Types of Bone Fractures','Management of Joint and Ligament Injuries & Sprains','Joint Replacement Surgeries (Knee & Hip)','Treatment of Osteoarthritis & Spine Pain','Sports Injuries Management & Orthopedic Surgery'],
},
{
  id: 45, imgFile: '45.png',
  nameAr: 'ماجد خليفة', nameEn: 'Majed Khalifa',
  specialtyAr: 'أخصائي أمراض القلب', specialtyEn: 'Specialist in Cardiology',
  detailsAr: ['تشخيص وعلاج أمراض القلب والشرايين','متابعة ارتفاع ضغط الدم واضطرابات الدورة الدموية','علاج الذبحة الصدرية وأمراض الشريان التاجي','تشخيص اضطرابات ضربات القلب (عدم انتظام النبض)','متابعة حالات فشل عضلة القلب وأمراض القلب المزمنة'],
  detailsEn: ['Diagnosis & Treatment of Cardiovascular Diseases','Management of Hypertension & Circulatory Disorders','Treatment of Angina & Coronary Artery Disease','Diagnosis of Heart Rhythm Disorders (Arrhythmia)','Management of Heart Failure & Chronic Cardiac Conditions'],
},
{
  id: 46, imgFile: '46.png',
  nameAr: 'محمد طربوش', nameEn: 'Mohammed Tarboush',
  specialtyAr: 'أخصائي طب الأطفال وحديثي الولادة', specialtyEn: 'Specialist in Pediatrics & Neonatology',
  detailsAr: ['متابعة نمو وتطور الأطفال منذ الولادة','تشخيص وعلاج أمراض الأطفال الشائعة','رعاية وحديثي الولادة ومتابعة الحالات الخداج','علاج أمراض الجهاز التنفسي والهضمي لدى الأطفال','تقديم التطعيمات واللقاحات الدورية للأطفال'],
  detailsEn: ['Monitoring Growth & Development of Children from Birth','Diagnosis & Treatment of Common Childhood Diseases','Neonatal Care & Premature Infant Management','Treatment of Pediatric Respiratory & Digestive Disorders','Routine Childhood Vaccinations & Immunization'],
},
{
  id: 47, imgFile: '47.png',
  nameAr: 'فاريما مالك', nameEn: 'Farima Malik',
  specialtyAr: 'طبيبة أسنان عام', specialtyEn: 'General Dentist',
  detailsAr: ['تشخيص وعلاج تسوس الأسنان وحشوات الأسنان','تنظيف الأسنان وإزالة الجير والتصبغات','علاج آلام والتهابات اللثة','خلع الأسنان البسيط عند الحاجة','متابعة صحة الفم والأسنان والوقاية الدورية'],
  detailsEn: ['Diagnosis & Treatment of Dental Caries & Fillings','Teeth Cleaning, Scaling & Stain Removal','Treatment of Gum Pain & Inflammation','Simple Tooth Extractions When Needed','Oral Health Checkups & Preventive Dental Care'],
},
{
  id: 48,
  imgFile: '48.png',
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
  imgFile: "49.png",
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
  imgFile: "50.png",
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

// ── Departments with clinics mapped to doctor IDs ─────────────────────────────
export const departments: Department[] = [
  {
    id: 1,
    nameAr: 'مركز العناية المركزة', nameEn: 'Intensive Care Center',
    clinics: [
      { idAr: 'وحدة العناية المركزة للكبار', idEn: 'Adult Intensive Care Unit', nameAr: 'وحدة العناية المركزة للكبار', nameEn: 'Adult Intensive Care Unit', doctorIds: [9, 35] },
      { idAr: 'وحدة العناية المركزة للأطفال', idEn: 'Pediatric Intensive Care Unit', nameAr: 'وحدة العناية المركزة للأطفال', nameEn: 'Pediatric Intensive Care Unit', doctorIds: [28, 46, 50] },
      { idAr: 'وحدة العناية المركزة لحديثي الولادة', idEn: 'Neonatal Intensive Care Unit', nameAr: 'وحدة العناية المركزة لحديثي الولادة', nameEn: 'Neonatal Intensive Care Unit', doctorIds: [22, 46] },
    ],
  },
  {
    id: 4,
    nameAr: 'مركز الطب الباطني', nameEn: 'Internal Medicine Center',
    clinics: [
      { idAr: 'وحدة أمراض القلب', idEn: 'Cardiology Unit', nameAr: 'وحدة أمراض القلب', nameEn: 'Cardiology Unit', doctorIds: [37, 42, 45] },
      { idAr: 'وحدة الأمراض الصدرية', idEn: 'Chest Diseases Unit', nameAr: 'وحدة الأمراض الصدرية', nameEn: 'Chest Diseases Unit', doctorIds: [33, 41] },
      { idAr: 'وحدة أمراض الدم', idEn: 'Hematology Unit', nameAr: 'وحدة أمراض الدم', nameEn: 'Hematology Unit', doctorIds: [42] },
      { idAr: 'وحدة طب الأسرة', idEn: 'Family Medicine Unit', nameAr: 'وحدة طب الأسرة', nameEn: 'Family Medicine Unit', doctorIds: [15,] },
      { idAr: 'وحدة الباطنة العامة والغدد الصماء والسكري', idEn: 'General Internal Medicine, Endocrinology & Diabetes Unit', nameAr: 'وحدة الباطنة العامة والغدد الصماء والسكري', nameEn: 'General Internal Medicine, Endocrinology & Diabetes Unit', doctorIds: [16,19,32, 42] },
      { idAr: 'وحدة الأمراض المعدية', idEn: 'Infectious Diseases Unit', nameAr: 'وحدة الأمراض المعدية', nameEn: 'Infectious Diseases Unit', doctorIds: [13,16] },
    ],
  },
  {
    id: 5,
    nameAr: 'مركز الجهاز الهضمي والكبد والمناظير', nameEn: 'Gastroenterology, Hepatology & Endoscopy Center',
    clinics: [
      { idAr: 'وحدة المناظير العلوية والسفلية', idEn: 'Upper & Lower Endoscopy Unit', nameAr: 'وحدة المناظير العلوية والسفلية', nameEn: 'Upper & Lower Endoscopy Unit', doctorIds: [ 40] },
      { idAr: 'وحدة مناظير القنوات المرارية ERCP', idEn: 'ERCP Unit', nameAr: 'وحدة مناظير القنوات المرارية ERCP', nameEn: 'ERCP Unit', doctorIds: [ 40] },
    ],
  },
  {
    id: 6,
    nameAr: 'مركز علاج وجراحات السمنة', nameEn: 'Obesity Treatment & Surgery Center',
    clinics: [
      { idAr: 'وحدة جراحات السمنة', idEn: 'Bariatric Surgery Unit', nameAr: 'وحدة جراحات السمنة', nameEn: 'Bariatric Surgery Unit', doctorIds: [5, 30,49] },
      { idAr: 'وحدة التغذية العلاجية', idEn: 'Therapeutic Nutrition Unit', nameAr: 'وحدة التغذية العلاجية', nameEn: 'Therapeutic Nutrition Unit', doctorIds: [5, 30,49] },
      { idAr: 'وحدة الدعم النفسي والسلوكي', idEn: 'Psychological & Behavioral Support Unit', nameAr: 'وحدة الدعم النفسي والسلوكي', nameEn: 'Psychological & Behavioral Support Unit', doctorIds: [1] },
    ],
  },
  {
    id: 7,
    nameAr: 'مركز الجراحة العامة وجراحة المناظير', nameEn: 'General Surgery & Laparoscopy Center',
    clinics: [
      { idAr: 'وحدة الجراحات الطارئة', idEn: 'Emergency Surgery Unit', nameAr: 'وحدة الجراحات الطارئة', nameEn: 'Emergency Surgery Unit', doctorIds: [23, 43] },
      { idAr: 'وحدة جراحات المناظير', idEn: 'Laparoscopic Surgery Unit', nameAr: 'وحدة جراحات المناظير', nameEn: 'Laparoscopic Surgery Unit', doctorIds: [23, 30, 43] },
      { idAr: 'وحدة جراحات الشرج والمستقيم', idEn: 'Colorectal Surgery Unit', nameAr: 'وحدة جراحات الشرج والمستقيم', nameEn: 'Colorectal Surgery Unit', doctorIds: [23, 43] },
      { idAr: 'وحدة جراحات الثدي والغدد الصماء', idEn: 'Breast & Endocrine Surgery Unit', nameAr: 'وحدة جراحات الثدي والغدد الصماء', nameEn: 'Breast & Endocrine Surgery Unit', doctorIds: [23, 43] },
    ],
  },
  {
    id: 8,
    nameAr: 'مركز صحة المرأة', nameEn: "Women's Health Center",
    clinics: [
      { idAr: 'وحدة أمراض وجراحات النساء والولادة', idEn: 'Obstetrics & Gynecology Unit', nameAr: 'وحدة أمراض وجراحات النساء والولادة', nameEn: 'Obstetrics & Gynecology Unit', doctorIds: [18, 36] },
      { idAr: 'وحدة رعاية الأمومة والجراحات التجميلية بعد الولادة', idEn: 'Maternity Care & Postpartum Cosmetic Surgery Unit', nameAr: 'وحدة رعاية الأمومة والجراحات التجميلية بعد الولادة', nameEn: 'Maternity Care & Postpartum Cosmetic Surgery Unit', doctorIds: [18, 36] },
      { idAr: 'وحدة الخدمات التجميلية النسائية', idEn: "Women's Cosmetic Services Unit", nameAr: 'وحدة الخدمات التجميلية النسائية', nameEn: "Women's Cosmetic Services Unit", doctorIds: [] },
    ],
  },
  {
    id: 9,
    nameAr: 'مركز أمراض وجراحات المسالك البولية', nameEn: 'Urology Diseases & Surgery Center',
    clinics: [
      { idAr: 'وحدة صحة الرجل', idEn: "Men's Health Unit", nameAr: 'وحدة صحة الرجل (أمراض وجراحات الذكورة والعقم)', nameEn: "Men's Health Unit (Andrology & Infertility)", doctorIds: [6,11, 39] },
      { idAr: 'وحدة علاج وجراحات حصوات المسالك البولية', idEn: 'Urinary Stones Treatment & Surgery Unit', nameAr: 'وحدة علاج وجراحات حصوات المسالك البولية', nameEn: 'Urinary Stones Treatment & Surgery Unit', doctorIds: [6, 11, 39] },
      { idAr: 'وحدة علاج وجراحات البروستات', idEn: 'Prostate Treatment & Surgery Unit', nameAr: 'وحدة علاج وجراحات البروستات', nameEn: 'Prostate Treatment & Surgery Unit', doctorIds: [11, 39] },
    ],
  },
  {
    id: 10,
    nameAr: 'مركز الأنف والأذن والحنجرة', nameEn: 'Ear, Nose & Throat (ENT) Center',
    clinics: [
      { idAr: 'وحدة جراحات ومناظير الأنف والأذن والحنجرة', idEn: 'ENT Endoscopy & Surgery Unit', nameAr: 'وحدة جراحات ومناظير الأنف والأذن والحنجرة', nameEn: 'ENT Endoscopy & Surgery Unit', doctorIds: [3, 12] },
      { idAr: 'وحدة جراحات الرأس والعنق', idEn: 'Head & Neck Surgery Unit', nameAr: 'وحدة جراحات الرأس والعنق', nameEn: 'Head & Neck Surgery Unit', doctorIds: [3, 12] },
      { idAr: 'وحدة السمعيات', idEn: 'Audiology Unit', nameAr: 'وحدة السمعيات', nameEn: 'Audiology Unit', doctorIds: [3] },
      { idAr: 'وحدة علاج وجراحات مشاكل النوم', idEn: 'Sleep Disorders Treatment & Surgery Unit', nameAr: 'وحدة علاج وجراحات مشاكل النوم', nameEn: 'Sleep Disorders Treatment & Surgery Unit', doctorIds: [3] },
    ],
  },
  {
    id: 11,
    nameAr: 'مركز طب وجراحة العيون', nameEn: 'Ophthalmology & Eye Surgery Center',
    clinics: [
      { idAr: 'وحدة تشخيص وعلاج أمراض العيون', idEn: 'Eye Diseases Diagnosis & Treatment Unit', nameAr: 'وحدة تشخيص وعلاج أمراض العيون', nameEn: 'Eye Diseases Diagnosis & Treatment Unit', doctorIds: [8,48] },
      { idAr: 'وحدة جراحات العيون', idEn: 'Eye Surgery Unit', nameAr: 'وحدة جراحات العيون', nameEn: 'Eye Surgery Unit', doctorIds: [8,48] },
    ],
  },
  {
    id: 12,
    nameAr: 'مركز الأشعة التداخلية', nameEn: 'Interventional Radiology Center',
    clinics: [
      { idAr: 'وحدة علاج الأوردة والدوالي', idEn: 'Varicose Veins & Vascular Treatment Unit', nameAr: 'وحدة علاج الأوردة والدوالي والأوعية الدموية بدون جراحة', nameEn: 'Varicose Veins & Vascular Treatment without Surgery', doctorIds: [21] },
      { idAr: 'وحدة تركيب الدعامات بالأشعة التداخلية', idEn: 'Stent Placement Unit', nameAr: 'وحدة تركيب الدعامات بالأشعة التداخلية بدون جراحة', nameEn: 'Stent Placement by Interventional Radiology without Surgery', doctorIds: [21, 27] },
      { idAr: 'وحدة علاج المفاصل والعمود الفقري', idEn: 'Joints, Spine & Bones Unit', nameAr: 'وحدة علاج المفاصل والعمود الفقري والعظام بدون جراحة', nameEn: 'Joints, Spine & Bones Treatment without Surgery', doctorIds: [27] },
    ],
  },
  {
    id: 13,
    nameAr: 'مركز الطب النفسي', nameEn: 'Psychiatry Center',
    clinics: [
      { idAr: 'وحدة علاج إدمان المخدرات', idEn: 'Drug Addiction Treatment Unit', nameAr: 'وحدة علاج إدمان المخدرات', nameEn: 'Drug Addiction Treatment Unit', doctorIds: [1] },
      { idAr: 'وحدة العلاج السلوكي المعرفي', idEn: 'Cognitive Behavioral Therapy Unit', nameAr: 'وحدة العلاج السلوكي المعرفي', nameEn: 'Cognitive Behavioral Therapy Unit', doctorIds: [1] },
    ],
  },
  {
    id: 14,
    nameAr: 'مركز طب الأطفال المتخصص', nameEn: 'Specialized Pediatric Center',
    clinics: [
      { idAr: 'وحدة العناية المركزة للأطفال حديثي الولادة', idEn: 'Neonatal Pediatric Intensive Care Unit', nameAr: 'وحدة العناية المركزة للأطفال حديثي الولادة', nameEn: 'Neonatal Pediatric Intensive Care Unit', doctorIds: [22, 28, 34, 46, 50] },
      { idAr: 'وحدة الأمراض الصدرية للأطفال', idEn: 'Pediatric Chest Diseases Unit', nameAr: 'وحدة الأمراض الصدرية للأطفال', nameEn: 'Pediatric Chest Diseases Unit', doctorIds: [24, 34, 46, 50] },
      { idAr: 'وحدة مناظير الجهاز الهضمي للأطفال', idEn: 'Pediatric Gastrointestinal Endoscopy Unit', nameAr: 'وحدة مناظير الجهاز الهضمي للأطفال', nameEn: 'Pediatric Gastrointestinal Endoscopy Unit', doctorIds: [20, 38, 46, 50] },
      { idAr: 'وحدة السكري والغدد الصماء ونمو الأطفال', idEn: 'Pediatric Diabetes, Endocrinology & Growth Unit', nameAr: 'وحدة السكري والغدد الصماء ونمو الأطفال', nameEn: 'Pediatric Diabetes, Endocrinology & Growth Unit', doctorIds: [26, 46, 50] },
      { idAr: 'وحدة أمراض المخ والأعصاب للأطفال', idEn: 'Pediatric Neurology Unit', nameAr: 'وحدة أمراض المخ والأعصاب للأطفال', nameEn: 'Pediatric Neurology Unit', doctorIds: [10, 46, 17, 50] },
    ],
  },
  {
    id: 15,
    nameAr: 'مركز طب الأسنان المتخصص (دنت سمايل)', nameEn: 'Specialized Dental Center (Dent Smile)',
    clinics: [
      { idAr: 'عيادة تقويم الأسنان وعظام الوجه والفكين', idEn: 'Orthodontics, Jaw & Facial Bones Clinic', nameAr: 'عيادة تقويم الأسنان وعظام الوجه والفكين', nameEn: 'Orthodontics, Jaw & Facial Bones Clinic', doctorIds: [31, 34,47] },
      { idAr: 'عيادة التركيبات والحشوات التجميلية للأسنان', idEn: 'Cosmetic Fillings & Prosthetics Clinic', nameAr: 'عيادة التركيبات والحشوات التجميلية للأسنان', nameEn: 'Cosmetic Fillings & Prosthetics Clinic', doctorIds: [34,47] },
      { idAr: 'عيادة زراعة الأسنان', idEn: 'Dental Implants Clinic', nameAr: 'عيادة زراعة الأسنان', nameEn: 'Dental Implants Clinic', doctorIds: [34,47] },
      { idAr: 'عيادة جراحة الوجه والفكين', idEn: 'Oral & Maxillofacial Surgery Clinic', nameAr: 'عيادة جراحة الوجه والفكين', nameEn: 'Oral & Maxillofacial Surgery Clinic', doctorIds: [34,47] },
      { idAr: 'عيادة أمراض اللثة', idEn: 'Periodontal Diseases Clinic', nameAr: 'عيادة أمراض اللثة', nameEn: 'Periodontal Diseases Clinic', doctorIds: [4, 31, 34,47] },
      { idAr: 'عيادة أسنان الأطفال', idEn: 'Pediatric Dentistry Clinic', nameAr: 'عيادة أسنان الأطفال', nameEn: 'Pediatric Dentistry Clinic', doctorIds: [4, 34,47, 50] },
    ],
  },
  {
    id: 16,
    nameAr: 'مركز الجلدية والجراحات التجميلية والليزر', nameEn: 'Dermatology, Cosmetic Surgery & Laser Center',
    clinics: [
      { idAr: 'وحدة الجلدية والتجميل والليزر', idEn: 'Dermatology, Cosmetics & Laser Unit', nameAr: 'وحدة الجلدية والتجميل والليزر', nameEn: 'Dermatology, Cosmetics & Laser Unit', doctorIds: [23] },
      { idAr: 'وحدة الجراحات التجميلية', idEn: 'Cosmetic Surgery Unit', nameAr: 'وحدة الجراحات التجميلية', nameEn: 'Cosmetic Surgery Unit', doctorIds: [23] },
    ],
  },
  {
    id: 17,
    nameAr: 'مركز أمراض وجراحات العظام', nameEn: 'Orthopedics & Orthopedic Surgery Center',
    clinics: [
      { idAr: 'وحدة الإصابات والكسور المعقدة للعظام والمفاصل', idEn: 'Complex Fractures & Joint Injuries Unit', nameAr: 'وحدة الإصابات والكسور المعقدة للعظام والمفاصل', nameEn: 'Complex Fractures & Joint Injuries Unit', doctorIds: [7, 29, 44] },
      { idAr: 'وحدة استبدال المفاصل الصناعية للركبة والحوض', idEn: 'Artificial Joint Replacement (Knee & Hip) Unit', nameAr: 'وحدة استبدال المفاصل الصناعية للركبة والحوض', nameEn: 'Artificial Joint Replacement (Knee & Hip) Unit', doctorIds: [7, 29, 44] },
      { idAr: 'وحدة الطب الرياضي ومناظير الكتف والركبة', idEn: 'Sports Medicine & Arthroscopy (Shoulder & Knee) Unit', nameAr: 'وحدة الطب الرياضي ومناظير الكتف والركبة', nameEn: 'Sports Medicine & Arthroscopy (Shoulder & Knee) Unit', doctorIds: [7, 29, 44] },
      { idAr: 'وحدة جراحات اليد الميكروسكوبية', idEn: 'Microscopic Hand Surgery Unit', nameAr: 'وحدة جراحات اليد الميكروسكوبية', nameEn: 'Microscopic Hand Surgery Unit', doctorIds: [44] },
      { idAr: 'وحدة جراحة العظام للأطفال', idEn: 'Pediatric Orthopedic Surgery Unit', nameAr: 'وحدة جراحة العظام للأطفال', nameEn: 'Pediatric Orthopedic Surgery Unit', doctorIds: [46, 50] },
    ],
  },
];

// ── Helper: get doctors for a specific clinic ─────────────────────────────────
export function getDoctorsForClinic(deptId: number, clinicIdAr: string): Doctor[] {
  const dept = departments.find(d => d.id === deptId);
  if (!dept) return [];
  const clinic = dept.clinics.find(c => c.idAr === clinicIdAr || c.idEn === clinicIdAr);
  if (!clinic) return [];
  return clinic.doctorIds.map(id => doctors.find(d => d.id === id)!).filter(Boolean);
}

export function getDepartmentById(id: number): Department | undefined {
  return departments.find(d => d.id === id);
}
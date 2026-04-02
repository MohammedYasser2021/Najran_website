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

// ── All 40 doctors ────────────────────────────────────────────────────────────
export const doctors: Doctor[] = [
  {
    id: 1, imgFile: '1.jpg',
    nameAr: 'عبدالله عسيري', nameEn: 'Abdullah Asiri',
    specialtyAr: 'استشاري الأنف والأذن والحنجرة', specialtyEn: 'ENT Consultant',
    detailsAr: ['تشخيص وعلاج أمراض الأنف والجيوب الأنفية','علاج التهابات الحلق واللوزتين والغدانية','علاج اضطرابات السمع وأمراض الأذن الوسطى والداخلية','جراحة الأنف التجميلية والوظيفية (الرينوبلاستي)','علاج الشخير وانقطاع التنفس أثناء النوم','فحص وعلاج اضطرابات الصوت والبلع'],
    detailsEn: ['Diagnosis & Treatment of Nasal & Sinus Diseases','Throat, Tonsil & Adenoid Infections','Hearing Disorders & Middle/Inner Ear Diseases','Functional & Cosmetic Rhinoplasty','Snoring & Sleep Apnoea Treatment','Voice & Swallowing Disorders'],
  },
  {
    id: 2, imgFile: '2.jpg',
    nameAr: 'عبدالعزيز الشهراني', nameEn: 'Abdulaziz Al-Shahrani',
    specialtyAr: 'استشاري الجهاز الهضمي والمناظير', specialtyEn: 'Gastroenterology & Endoscopy Consultant',
    detailsAr: ['تنظير الجهاز الهضمي العلوي (المريء والمعدة والاثني عشر)','تنظير القولون والأمعاء الغليظة','تشخيص وعلاج جرثومة المعدة (الهيليكوباكتر)','تشخيص وعلاج القرحات الهضمية والارتجاع المريئي','تشخيص وعلاج أمراض الكبد والتليف الكبدي','تشخيص وعلاج أمراض البنكرياس والقنوات الصفراوية','تشخيص وعلاج الأمراض الالتهابية للأمعاء (كرون والتهاب القولون)'],
    detailsEn: ['Upper GI Endoscopy (Oesophagus, Stomach & Duodenum)','Colonoscopy & Large Intestine Examination','Diagnosis & Treatment of H. Pylori (Stomach Bacteria)','Peptic Ulcers & Gastro-Oesophageal Reflux Disease','Liver Diseases & Hepatic Fibrosis','Pancreatic & Biliary Tract Diseases','Inflammatory Bowel Disease (Crohn\'s & Colitis)'],
  },
  {
    id: 3, imgFile: '3.jpg',
    nameAr: 'عبدالعزيز الشهري', nameEn: 'Abdulaziz Al-Shehri',
    specialtyAr: 'أخصائي أول طب المخ والأعصاب للأطفال', specialtyEn: 'Senior Paediatric Neurology Specialist',
    detailsAr: ['تشخيص وعلاج الصرع وتشنجات الأطفال','تشخيص وعلاج اضطرابات النمو العصبي (التوحد وفرط الحركة)','تقييم وعلاج تأخر الكلام والتطور الحركي','تشخيص وعلاج الصداع والشقيقة لدى الأطفال','تقييم وعلاج ضعف العضلات والأمراض العصبية العضلية','متابعة إصابات الرأس والحبل الشوكي لدى الأطفال'],
    detailsEn: ['Diagnosis & Treatment of Epilepsy & Childhood Seizures','Neurodevelopmental Disorders (Autism & ADHD)','Speech Delay & Motor Development Assessment','Paediatric Headache & Migraine','Muscle Weakness & Neuromuscular Diseases','Head & Spinal Cord Injury Follow-Up in Children'],
  },
  {
    id: 4, imgFile: '4.jpg',
    nameAr: 'عبدالله آل قدرة', nameEn: 'Abdullah Al-Qudra',
    specialtyAr: 'طب الأسنان المتخصص — دنت سمايل', specialtyEn: 'Specialist Dentistry — Dent Smile',
    detailsAr: ['علاج حالات التهابات عصب الأسنان','علاج حالات التهابات الجذور','إعادة علاج الجذور في حال فشل العلاج السابق','علاج حالات جذور الأسنان الطارئة المتعلقة بالسقوط أو الحوادث'],
    detailsEn: ['Dental Nerve Inflammation Treatment','Root Canal Infections','Root Canal Re-treatment','Emergency Dental Root Cases (Trauma/Accidents)'],
  },
  {
    id: 5, imgFile: '5.jpg',
    nameAr: 'عبد الرحمن العمري', nameEn: 'Abdulrahman Al-Omari',
    specialtyAr: 'جراحات السمنة', specialtyEn: 'Bariatric Surgery',
    detailsAr: ['تحويل المسار المصغر والكلاسيكي','إعادة وترميم عمليات السمنة السابقة','عمليات الكبسولة العادية والكبسولة الذكية للمعدة'],
    detailsEn: ['Mini & Classic Gastric Bypass','Revision & Repair of Previous Bariatric Surgery','Standard & Smart Gastric Capsule Procedures'],
  },
  {
    id: 6, imgFile: '6.jpg',
    nameAr: 'عادل معلوي', nameEn: 'Adel Maalawi',
    specialtyAr: 'جراحات المسالك البولية', specialtyEn: 'Urological Surgery',
    detailsAr: ['معالجة الحصوات والمغص الكلوي بالمناظير المرنة والليزر','جراحات علاج أمراض الذكورة والضعف الجنسي (زرع الدعامات)','عمليات الدوالي والقيلة المائية','علاج تضخم البروستاتا بالتبخير'],
    detailsEn: ['Kidney Stones & Renal Colic via Flexible Ureteroscopy & Laser','Male Sexual Dysfunction Surgery (Penile Implants)','Varicocele & Hydrocele Surgery','Prostate Enlargement Steam Therapy (Rezum)'],
  },
  {
    id: 7, imgFile: '7.jpg',
    nameAr: 'عدنان بوغوفه', nameEn: 'Adnan Bughofa',
    specialtyAr: 'جراحات العظام والمفاصل', specialtyEn: 'Orthopaedic & Joint Surgery',
    detailsAr: ['زراعة وتبديل المفاصل','مناظير الركبة والكتف والإصابات','جراحات الحوض والإصابات والكسور'],
    detailsEn: ['Joint Replacement & Arthroplasty','Knee & Shoulder Arthroscopy & Sports Injuries','Pelvic Injuries & Complex Fractures'],
  },
  {
    id: 8, imgFile: '8.jpg',
    nameAr: 'احمد جبر', nameEn: 'Ahmed Jabr',
    specialtyAr: 'طب وجراحة العيون', specialtyEn: 'Ophthalmology & Eye Surgery',
    detailsAr: ['العدسات اللاصقة الصلبة والمرنة','علاج مشاكل الشبكية','علاج المياه البيضاء (الكاتراكت)','علاج المياه الزرقاء (الجلوكوما)'],
    detailsEn: ['Rigid & Flexible Contact Lenses','Retinal Disorders','Cataract Treatment','Glaucoma Treatment'],
  },
  {
    id: 9, imgFile: '9.jpg',
    nameAr: 'احمد شاكر', nameEn: 'Ahmed Shaker',
    specialtyAr: 'استشاري التخدير', specialtyEn: 'Anaesthesiology Consultant',
    detailsAr: ['التخدير العام والموضعي لجميع أنواع العمليات','إدارة الألم الحاد والمزمن ما بعد الجراحة','التخدير فوق الجافية (Epidural) للولادة بدون ألم','التخدير في جراحات القلب والصدر والأوعية الدموية','رعاية المريض في غرفة الإفاقة والعناية المركزة','تقييم المريض قبل العملية وتحديد بروتوكول التخدير المناسب'],
    detailsEn: ['General & Regional Anaesthesia for All Surgical Procedures','Acute & Chronic Post-operative Pain Management','Epidural Anaesthesia for Painless Labour','Cardiac, Thoracic & Vascular Surgery Anaesthesia','Recovery Room & Intensive Care Patient Management','Pre-operative Assessment & Anaesthesia Protocol Planning'],
  },
  {
    id: 10, imgFile: '10.jpg',
    nameAr: 'علي عسيري', nameEn: 'Ali Asiri',
    specialtyAr: 'استشاري الباطنية وأمراض الدم', specialtyEn: 'Internal Medicine & Haematology Consultant',
    detailsAr: ['تشخيص وعلاج فقر الدم بأنواعه (الحديدي، الانحلالي، الخبيث)','تشخيص وعلاج اضطرابات التخثر ونقص الصفائح الدموية','متابعة وعلاج أمراض الدم الوراثية (الثلاسيميا، الهيموفيليا)','تشخيص وعلاج الأمراض الباطنية المزمنة','علاج التهابات الأوعية الدموية وأمراض المناعة الذاتية','متابعة مرضى السرطان أثناء وبعد العلاج الكيميائي'],
    detailsEn: ['Diagnosis & Treatment of All Types of Anaemia','Coagulation Disorders & Thrombocytopenia','Hereditary Blood Diseases (Thalassaemia & Haemophilia)','Chronic Internal Medicine Diseases','Vasculitis & Autoimmune Diseases','Oncology Patient Follow-Up During & After Chemotherapy'],
  },
  {
    id: 11, imgFile: '11.jpg',
    nameAr: 'علي بالحارث', nameEn: 'Ali Balharith',
    specialtyAr: 'استشاري طب الباطنية', specialtyEn: 'Internal Medicine Consultant',
    detailsAr: ['تشخيص وعلاج الأمراض الباطنية الحادة والمزمنة','متابعة مرضى ارتفاع ضغط الدم والسكري','تشخيص وعلاج أمراض الغدة الدرقية','علاج الأمراض الروماتيزمية والمفاصل','تشخيص وعلاج الأمراض المعدية والحمى','الرعاية الصحية الشاملة والمتابعة الدورية'],
    detailsEn: ['Diagnosis & Treatment of Acute & Chronic Internal Diseases','Hypertension & Diabetes Follow-Up','Thyroid Disease Diagnosis & Treatment','Rheumatic & Joint Diseases','Infectious Diseases & Fever Management','Comprehensive Healthcare & Periodic Check-Ups'],
  },
  {
    id: 12, imgFile: '12.jpg',
    nameAr: 'علي قناص', nameEn: 'Ali Qannas',
    specialtyAr: 'جراحات الأنف والأذن والحنجرة', specialtyEn: 'ENT Surgery',
    detailsAr: ['أورام الغدة الدرقية وجار الدرقية','أورام الغدة النكافية والغدة اللعابية','أورام الرأس والرقبة المجهرية المتقدمة','تعديل الحاجز الأنفي والقرنيات'],
    detailsEn: ['Thyroid & Parathyroid Tumours','Parotid & Salivary Gland Tumours','Advanced Microscopic Head & Neck Tumours','Nasal Septum & Turbinate Correction'],
  },
  {
    id: 13, imgFile: '13.jpg',
    nameAr: 'علي ظافر آل سويدان', nameEn: 'Ali Zafer Al-Suwaidan',
    specialtyAr: 'الباطنية والأمراض المعدية', specialtyEn: 'Internal Medicine & Infectious Diseases',
    detailsAr: ['الحمى المالطية والحمى مجهولة السبب','الالتهابات التنفسية العلوية والسفلية','التهابات المسالك البولية'],
    detailsEn: ['Brucellosis & Fever of Unknown Origin','Upper & Lower Respiratory Infections','Urinary Tract Infections'],
  },
  {
    id: 14, imgFile: '14.jpg',
    nameAr: 'عمري حمدي', nameEn: 'Amri Hamdi',
    specialtyAr: 'استشاري جراحات اليد الميكروسكوبية', specialtyEn: 'Microsurgery of the Hand Consultant',
    detailsAr: ['جراحة الأعصاب الطرفية للرسغ والأصابع (متلازمة النفق الرسغي)','إعادة تركيب الأصابع والأطراف المبتورة بالجراحة الدقيقة','إصلاح أوتار اليد والرسغ المقطوعة','جراحة كسور عظام اليد والرسغ والمعصم','علاج التشوهات الخلقية لليد والأصابع','جراحة أورام اليد وأكياس الزلالية (الجانغليون)'],
    detailsEn: ['Peripheral Nerve Surgery of Wrist & Fingers (Carpal Tunnel Syndrome)','Microsurgical Replantation of Amputated Fingers & Limbs','Repair of Severed Hand & Wrist Tendons','Hand, Wrist & Forearm Fracture Surgery','Congenital Hand & Finger Deformity Correction','Hand Tumours & Ganglion Cyst Surgery'],
  },
  {
    id: 15, imgFile: '15.jpg',
    nameAr: 'دينا حسين', nameEn: 'Dina Hussein',
    specialtyAr: 'وحدة طب الأسرة', specialtyEn: 'Family Medicine Unit',
    detailsAr: ['علاج الأمراض الشائعة الحادة والمزمنة','المتابعة الدورية للأمراض المزمنة (ضغط الدم، السكري)','رعاية المسنين والرعاية الصحية المنزلية'],
    detailsEn: ['Acute & Chronic Common Diseases','Periodic Follow-Up for Chronic Conditions (Hypertension, Diabetes)','Elderly Care & Home Healthcare'],
  },
  {
    id: 16, imgFile: '16.jpg',
    nameAr: 'هشام عفانه', nameEn: 'Hisham Affaneh',
    specialtyAr: 'الطب النفسي', specialtyEn: 'Psychiatry',
    detailsAr: ['اضطرابات النوم بكافة أشكاله','اضطرابات القلق والتوتر','اضطرابات الاكتئاب'],
    detailsEn: ['All Types of Sleep Disorders','Anxiety & Stress Disorders','Depression Disorders'],
  },
  {
    id: 17, imgFile: '17.jpg',
    nameAr: 'ابراهيم البكري', nameEn: 'Ibrahim Al-Bakri',
    specialtyAr: 'استشاري جراحة الوجه والفكين', specialtyEn: 'Maxillofacial Surgery Consultant',
    detailsAr: ['جراحة تصحيح تشوهات الفك العلوي والسفلي','جراحة الوجه التجميلية وإعادة التشكيل','علاج كسور عظام الوجه والفكين الناتجة عن الحوادث','استئصال أورام الفم والفك وإعادة البناء','جراحة زراعة عظام الفك والجيوب الأنفية','علاج اضطرابات المفصل الفكي الصدغي (TMJ)'],
    detailsEn: ['Corrective Surgery for Upper & Lower Jaw Deformities','Facial Aesthetic & Reconstructive Surgery','Facial Bone & Jaw Fracture Repair (Trauma)','Oral & Jaw Tumour Resection & Reconstruction','Jaw Bone & Sinus Grafting for Implants','Temporomandibular Joint (TMJ) Disorder Treatment'],
  },
  {
    id: 18, imgFile: '18.jpg',
    nameAr: 'ايمان زين العابدين', nameEn: 'Iman Zain Al-Abidin',
    specialtyAr: 'وحدة صحة المرأة', specialtyEn: "Women's Health Unit",
    detailsAr: ['متابعة الحمل الحرج وعالي الخطورة','إجراء الولادة الطبيعية والولادة بدون ألم','عمليات ترميم وتجميل المهبل','تصليح سقوط المثانة أو سقوط المستقيم'],
    detailsEn: ['High-Risk Pregnancy Follow-Up','Normal Delivery & Painless Labour','Vaginal Reconstruction & Rejuvenation','Bladder & Rectal Prolapse Repair'],
  },
  {
    id: 19, imgFile: '19.jpg',
    nameAr: 'محمود اسامه', nameEn: 'Mahmoud Osama',
    specialtyAr: 'الباطنية والسكري والغدد الصماء', specialtyEn: 'Internal Medicine, Diabetes & Endocrinology',
    detailsAr: ['التشخيص المبكر لمرضى السكري','أمراض الغدد الصماء بأنواعها','الأمراض الباطنية المزمنة (السكري والضغط والجهاز الهضمي)'],
    detailsEn: ['Early Diagnosis of Diabetes','All Types of Endocrine Disorders','Chronic Internal Diseases (Diabetes, Hypertension, GI)'],
  },
  {
    id: 20, imgFile: '20.jpg',
    nameAr: 'متعب الضلعي', nameEn: "Muta'ab Al-Dhula'i",
    specialtyAr: 'استشاري تركيبات وزراعة الأسنان', specialtyEn: 'Dental Prosthetics & Implants Consultant',
    detailsAr: ['زراعة الأسنان الفورية والتقليدية','التركيبات الثابتة والمتحركة (الكراون والجسور والطقم)','تركيبات الزيركون والبورسلين عالية الجودة','زراعة الأسنان فوق الزرعات (Implant-Supported Dentures)','علاج ضمور عظم الفك وزراعة العظام التعويضية','التصميم الرقمي للابتسامة (Digital Smile Design)'],
    detailsEn: ['Immediate & Conventional Dental Implants','Fixed & Removable Prosthetics (Crowns, Bridges & Dentures)','High-Quality Zirconia & Porcelain Restorations','Implant-Supported Dentures','Jaw Bone Atrophy Treatment & Bone Grafting','Digital Smile Design (DSD)'],
  },
  {
    id: 21, imgFile: '21.jpg',
    nameAr: 'محمد آل مطلق', nameEn: 'Mohammed Al-Mutlaq',
    specialtyAr: 'الأشعة التداخلية', specialtyEn: 'Interventional Radiology',
    detailsAr: ['دوالي الساقين والأوردة العنكبوتية','آلام ودوالي الخصية عند الرجال','البواسير بالقسطرة','القدم السكري وعدم القدرة على المشي لمسافات طويلة'],
    detailsEn: ['Varicose Veins & Spider Veins','Testicular Pain & Varicocele in Men','Haemorrhoid Embolisation','Diabetic Foot & Walking Limitation'],
  },
  {
    id: 22, imgFile: '22.jpg',
    nameAr: 'محمد السباعي', nameEn: "Mohammed Al-Suba'i",
    specialtyAr: 'رعاية مركزة حديثي الولادة', specialtyEn: 'Neonatal Intensive Care',
    detailsAr: ['جميع حالات حديثي الولادة والخدج','حالات المواليد ناقصي النمو','مواليد الحمل عالي الخطورة'],
    detailsEn: ['All Neonatal & Premature Cases','Growth-Restricted Newborns','High-Risk Pregnancy Newborns'],
  },
  {
    id: 23, imgFile: '23.jpg',
    nameAr: 'محمد آل سوار', nameEn: 'Mohammed Al-Sawwar',
    specialtyAr: 'الجراحة العامة', specialtyEn: 'General Surgery',
    detailsAr: ['عمليات أورام الجهاز الهضمي','عمليات أورام الرحم والمبيض','عمليات إصلاح الفتق بأنواعه','عمليات البواسير والناسور'],
    detailsEn: ['GI Tumour Surgery','Uterine & Ovarian Tumour Surgery','All Types of Hernia Repair','Haemorrhoid & Fistula Surgery'],
  },
  {
    id: 24, imgFile: '24.jpg',
    nameAr: 'محمد الزهراني', nameEn: 'Mohammed Al-Zahrani',
    specialtyAr: 'مركز طب الأطفال المتخصص', specialtyEn: 'Paediatric Specialty Centre',
    detailsAr: ['كشف وتشخيص ومعالجة الحالات العامة لدى الأطفال','كشف وتشخيص ومعالجة الأمراض الصدرية لدى الأطفال','التهابات الجهاز التنفسي العلوي والسفلي الحادة والمزمنة'],
    detailsEn: ['General Paediatric Diagnosis & Treatment','Paediatric Chest Diseases','Acute & Chronic Upper & Lower Respiratory Infections'],
  },
  {
    id: 25, imgFile: '25.jpg',
    nameAr: 'محمد دهاق', nameEn: 'Mohammed Dahaq',
    specialtyAr: 'جراحة التجميل', specialtyEn: 'Plastic Surgery',
    detailsAr: ['شد الجسم الحزامي ٣٦٠ درجة','وترهلات الجسم (بعد عمليات التكميم)','شد البطن والنحت الرباعي للجسم','شفط دهون الرقبة وتحديد الفك','شد وتصغير الصدر'],
    detailsEn: ['360° Body Lift','Body Sagging (Post-Sleeve Surgery)','Tummy Tuck & 4D Body Sculpting','Neck Liposuction & Jaw Definition','Breast Lift & Reduction'],
  },
  {
    id: 26, imgFile: '26.jpg',
    nameAr: 'محمد حنيف', nameEn: 'Mohammed Hanif',
    specialtyAr: 'مركز طب الأطفال المتخصص', specialtyEn: 'Paediatric Specialty Centre',
    detailsAr: ['أمراض السكري ومضاعفاته لدى الأطفال','السمنة المفرطة واضطرابات الدهون','قصر القامة وضعف النمو'],
    detailsEn: ['Paediatric Diabetes & Complications','Morbid Obesity & Lipid Disorders','Short Stature & Growth Failure'],
  },
  {
    id: 27, imgFile: '27.jpg',
    nameAr: 'ناصر آل ابالطحين', nameEn: 'Nasser Al-Abalathin',
    specialtyAr: 'الأشعة التداخلية', specialtyEn: 'Interventional Radiology',
    detailsAr: ['آلام الظهر وعرق النساء بالحقن','آلام الرقبة والذراعين وآلام الأبهر','آلام المفاصل (الركبة – الكتف) بالحقن والتردد الحراري والبلازما'],
    detailsEn: ['Back Pain & Sciatica Injections','Neck, Arm & Aortic Pain','Joint Pain (Knee & Shoulder) via Injections, Radiofrequency & PRP'],
  },
  {
    id: 28, imgFile: '28.jpg',
    nameAr: 'أميمة محجوب', nameEn: 'Umaima Mahjoub',
    specialtyAr: 'العناية المركزة للأطفال', specialtyEn: 'Pediatric Intensive Care',
    detailsAr: ['معالجة الحالات الحرجة للأطفال','حالات الالتهابات الصدرية الشديدة وهجمات الربو','علاج حالات الصدمة بأنواعها (التهابية، عصبية، قلبية، تحسسية)'],
    detailsEn: ['Management of Critical Pediatric Cases','Severe Chest Infections & Asthma Attacks','Treatment of All Types of Shock (Septic, Neurogenic, Cardiogenic, Anaphylactic)'],
  },
  {
    id: 29, imgFile: '29.jpg',
    nameAr: 'راشد آل قضيع', nameEn: "Rashed Al-Qudai'e",
    specialtyAr: 'جراحات العظام والمفاصل', specialtyEn: 'Orthopaedic & Joint Surgery',
    detailsAr: ['علاج خشونة المفاصل والاحتكاك','زراعة وتبديل المفاصل','جراحات الحوض والإصابات والكسور المعقدة','مناظير الركبة والكتف والإصابات الرياضية'],
    detailsEn: ['Osteoarthritis & Joint Wear Treatment','Joint Replacement & Arthroplasty','Pelvic Surgery & Complex Fractures','Knee & Shoulder Arthroscopy & Sports Injuries'],
  },
  {
    id: 30, imgFile: '30.jpg',
    nameAr: 'سعيد السريعي', nameEn: "Saeed Al-Surai'i",
    specialtyAr: 'جراحات السمنة', specialtyEn: 'Bariatric Surgery',
    detailsAr: ['جراحات تكميم المعدة بالمنظار','جراحات تحويل المسار','عمليات الكبسولة العادية والكبسولة الذكية','عمليات الجراحة العامة بالمنظار'],
    detailsEn: ['Laparoscopic Sleeve Gastrectomy','Gastric Bypass Surgery','Standard & Smart Capsule Procedures','Laparoscopic General Surgery'],
  },
  {
    id: 31, imgFile: '31.jpg',
    nameAr: 'صالح آل مطلق', nameEn: 'Saleh Al-Mutlaq',
    specialtyAr: 'طب الأسنان — دنت سمايل', specialtyEn: 'Dental — Dent Smile',
    detailsAr: ['علاج الحالات العادية والمعقدة','العلاج المبكر لتشوهات الفكين','علاج كبار السن لتعديل الأسنان المائلة قبل الزراعة','التقويم الجراحي بكل درجاته','التقويم الشفاف (إنفيزلاين)'],
    detailsEn: ['Treatment of Simple & Complex Cases','Early Treatment of Jaw Deformities','Pre-Implant Orthodontics for Seniors','Surgical Orthodontics at All Levels','Clear Aligners (Invisalign)'],
  },
  {
    id: 32, imgFile: '32.jpg',
    nameAr: 'صالح آل كردم', nameEn: 'Saleh Al-Kurdum',
    specialtyAr: 'استشاري جراحة العظام للأطفال', specialtyEn: 'Paediatric Orthopaedic Surgery Consultant',
    detailsAr: ['تشخيص وعلاج التشوهات الخلقية للعظام والمفاصل لدى الأطفال','علاج الأقدام المسطحة والأقدام الحنفاء (Club Foot)','جراحة الورك الخلقي المائل والخلع الولادي للورك','تصحيح اعوجاج الأطراف وتفاوت أطوال الأرجل','علاج كسور الأطفال والكسور المعقدة قرب المفاصل','تشخيص وعلاج الأورام العظمية الحميدة والخبيثة لدى الأطفال'],
    detailsEn: ['Congenital Bone & Joint Deformity in Children','Flat Foot & Club Foot Correction','Congenital Hip Dysplasia & Developmental Dislocation of the Hip','Limb Deformity Correction & Leg Length Discrepancy','Paediatric Fractures & Periarticular Complex Fractures','Benign & Malignant Bone Tumours in Children'],
  },
  {
    id: 33, imgFile: '33.jpg',
    nameAr: 'سالي سليمان', nameEn: 'Sally Suleiman',
    specialtyAr: 'الأمراض الصدرية والحساسية', specialtyEn: 'Pulmonology & Allergy',
    detailsAr: ['علاج الجلطات الرئوية الحادة','علاج ارتفاع ضغط الشريان الرئوي','علاج وتشخيص أمراض التليف الرئوي','قياس وظائف التنفس'],
    detailsEn: ['Treatment of Acute Pulmonary Embolism','Pulmonary Arterial Hypertension','Diagnosis & Treatment of Pulmonary Fibrosis','Pulmonary Function Testing'],
  },
  {
    id: 34, imgFile: '34.jpg',
    nameAr: 'سهام القديمي', nameEn: 'Siham Al-Qudaimi',
    specialtyAr: 'الجلدية والتجميل', specialtyEn: 'Dermatology & Aesthetics',
    detailsAr: ['علاج أمراض جلدية (البهاق، الصدفية، الثعلبة)','علاج الأمراض الجنسية المعدية','العلاج والتجميل بالليزر (نضارة، تفتيح، تقشير، إزالة الوشم)'],
    detailsEn: ['Skin Diseases (Vitiligo, Psoriasis, Alopecia)','Sexually Transmitted Infections','Laser Treatments (Rejuvenation, Whitening, Peeling, Tattoo Removal)'],
  },
  {
    id: 35, imgFile: '35.jpg',
    nameAr: 'شهرزاد بن خوجة', nameEn: 'Shahrazad Ben Khoja',
    specialtyAr: 'قسم التخدير', specialtyEn: 'Anaesthesiology',
    detailsAr: ['أخصائي أول تخدير','تخدير عام وموضعي','إدارة الألم الحاد والمزمن','تخدير الجراحات المعقدة والحرجة','تخدير جراحات السمنة وتجميل الجسم'],
    detailsEn: ['Senior Anaesthesia Specialist','General & Regional Anaesthesia','Acute & Chronic Pain Management','Complex & High-Risk Surgical Anaesthesia','Bariatric & Body Contouring Anaesthesia'],
  },
  {
    id: 36, imgFile: '36.jpg',
    nameAr: 'سوزان الحداد', nameEn: 'Suzan Al-Haddad',
    specialtyAr: 'وحدة صحة المرأة', specialtyEn: "Women's Health Unit",
    detailsAr: ['متابعة الحمل الحرج','إجراء الولادة الطبيعية والولادة بدون ألم','عمليات ترميم وتجميل المهبل','تصليح سقوط المثانة أو سقوط المستقيم'],
    detailsEn: ['High-Risk Pregnancy Follow-Up','Normal Delivery & Painless Labour','Vaginal Reconstruction & Rejuvenation','Bladder & Rectal Prolapse Repair'],
  },
  {
    id: 37, imgFile: '37.jpg',
    nameAr: 'وليد مغراوي', nameEn: 'Walid Maghrawi',
    specialtyAr: 'القلب والأوعية الدموية', specialtyEn: 'Cardiology & Vascular',
    detailsAr: ['تصوير الشريان التاجي','اختلال ضربات القلب','رسم القلب بالمجهود','الفحص الدوري الشامل للقلب والأوعية الدموية'],
    detailsEn: ['Coronary Angiography','Cardiac Arrhythmia','Stress ECG','Comprehensive Cardiovascular Check-Up'],
  },
  {
    id: 38, imgFile: '38.jpg',
    nameAr: 'ظافر الشهري', nameEn: 'Zafer Al-Shehri',
    specialtyAr: 'مركز طب الأطفال المتخصص', specialtyEn: 'Paediatric Specialty Centre',
    detailsAr: ['علاج مشاكل الجهاز الهضمي','علاج ضعف النمو والتغذية','تشخيص وعلاج آلام البطن المزمنة والدورية','علاج تقرحات الأمعاء الالتهابية'],
    detailsEn: ['Gastrointestinal Disorders','Growth Failure & Nutritional Issues','Chronic & Recurrent Abdominal Pain','Inflammatory Bowel Disease'],
  },
  {
    id: 39, imgFile: '39.jpeg',
    nameAr: 'محمد فتحي', nameEn: 'Mohammed Fathi',
    specialtyAr: 'استشاري أمراض وجراحات المسالك البولية', specialtyEn: 'Urology & Urological Surgery Consultant',
    detailsAr: ['علاج التهاب وتضخم البروستاتا','علاج البروستاتا بالتبخير (Rezum)','تشخيص واستئصال أورام المثانة بالمنظار','تشخيص وعلاج حصوات الكلى والمسالك البولية بالليزر','علاج سلس البول وضعف الوظيفة البولية'],
    detailsEn: ['Prostatitis & Benign Prostatic Hyperplasia (BPH) Treatment','Prostate Steam Therapy (Rezum)','Endoscopic Diagnosis & Resection of Bladder Tumours','Laser Treatment of Kidney & Urinary Tract Stones','Urinary Incontinence & Bladder Dysfunction'],
  },
  {
    id: 40, imgFile: '40.jpeg',
    nameAr: 'احمد العزب', nameEn: 'Ahmed Al-Azzab',
    specialtyAr: 'استشاري الجهاز الهضمي والمناظير', specialtyEn: 'Gastroenterology & Endoscopy Consultant',
    detailsAr: ['تشخيص أمراض الكبد (تليف الكبد والفيروسات الكبدية)','تشخيص وعلاج أمراض البنكرياس','تنظير الجهاز الهضمي العلوي (المريء والمعدة وجرثومة المعدة)','تنظير القولون وتشخيص أمراض الأمعاء','علاج الارتجاع المريئي والقرحات الهضمية'],
    detailsEn: ['Liver Disease Diagnosis (Cirrhosis & Hepatitis Viruses)','Pancreatic Disease Diagnosis & Treatment','Upper GI Endoscopy (Oesophagus, Stomach & H. Pylori)','Colonoscopy & Intestinal Disease Diagnosis','Gastro-Oesophageal Reflux & Peptic Ulcer Treatment'],
  },
];

// ── Departments with clinics mapped to doctor IDs ─────────────────────────────
export const departments: Department[] = [
  {
    id: 1,
    nameAr: 'مركز العناية المركزة', nameEn: 'Intensive Care Center',
    clinics: [
      { idAr: 'وحدة العناية المركزة للكبار', idEn: 'Adult Intensive Care Unit', nameAr: 'وحدة العناية المركزة للكبار', nameEn: 'Adult Intensive Care Unit', doctorIds: [9, 35] },
      { idAr: 'وحدة العناية المركزة للأطفال', idEn: 'Pediatric Intensive Care Unit', nameAr: 'وحدة العناية المركزة للأطفال', nameEn: 'Pediatric Intensive Care Unit', doctorIds: [28] },
      { idAr: 'وحدة العناية المركزة لحديثي الولادة', idEn: 'Neonatal Intensive Care Unit', nameAr: 'وحدة العناية المركزة لحديثي الولادة', nameEn: 'Neonatal Intensive Care Unit', doctorIds: [22] },
    ],
  },
  {
    id: 4,
    nameAr: 'مركز الطب الباطني', nameEn: 'Internal Medicine Center',
    clinics: [
      { idAr: 'وحدة أمراض القلب', idEn: 'Cardiology Unit', nameAr: 'وحدة أمراض القلب', nameEn: 'Cardiology Unit', doctorIds: [37] },
      { idAr: 'وحدة الأمراض الصدرية', idEn: 'Chest Diseases Unit', nameAr: 'وحدة الأمراض الصدرية', nameEn: 'Chest Diseases Unit', doctorIds: [33] },
      { idAr: 'وحدة أمراض الدم', idEn: 'Hematology Unit', nameAr: 'وحدة أمراض الدم', nameEn: 'Hematology Unit', doctorIds: [10] },
      { idAr: 'وحدة طب الأسرة', idEn: 'Family Medicine Unit', nameAr: 'وحدة طب الأسرة', nameEn: 'Family Medicine Unit', doctorIds: [15] },
      { idAr: 'وحدة الباطنة العامة والغدد الصماء والسكري', idEn: 'General Internal Medicine, Endocrinology & Diabetes Unit', nameAr: 'وحدة الباطنة العامة والغدد الصماء والسكري', nameEn: 'General Internal Medicine, Endocrinology & Diabetes Unit', doctorIds: [11, 19] },
      { idAr: 'وحدة الأمراض المعدية', idEn: 'Infectious Diseases Unit', nameAr: 'وحدة الأمراض المعدية', nameEn: 'Infectious Diseases Unit', doctorIds: [13] },
    ],
  },
  {
    id: 5,
    nameAr: 'مركز الجهاز الهضمي والكبد والمناظير', nameEn: 'Gastroenterology, Hepatology & Endoscopy Center',
    clinics: [
      { idAr: 'وحدة المناظير العلوية والسفلية', idEn: 'Upper & Lower Endoscopy Unit', nameAr: 'وحدة المناظير العلوية والسفلية', nameEn: 'Upper & Lower Endoscopy Unit', doctorIds: [2, 40] },
      { idAr: 'وحدة مناظير القنوات المرارية ERCP', idEn: 'ERCP Unit', nameAr: 'وحدة مناظير القنوات المرارية ERCP', nameEn: 'ERCP Unit', doctorIds: [2, 40] },
    ],
  },
  {
    id: 6,
    nameAr: 'مركز علاج وجراحات السمنة', nameEn: 'Obesity Treatment & Surgery Center',
    clinics: [
      { idAr: 'وحدة جراحات السمنة', idEn: 'Bariatric Surgery Unit', nameAr: 'وحدة جراحات السمنة', nameEn: 'Bariatric Surgery Unit', doctorIds: [5, 30] },
      { idAr: 'وحدة التغذية العلاجية', idEn: 'Therapeutic Nutrition Unit', nameAr: 'وحدة التغذية العلاجية', nameEn: 'Therapeutic Nutrition Unit', doctorIds: [5, 30] },
      { idAr: 'وحدة الدعم النفسي والسلوكي', idEn: 'Psychological & Behavioral Support Unit', nameAr: 'وحدة الدعم النفسي والسلوكي', nameEn: 'Psychological & Behavioral Support Unit', doctorIds: [16] },
    ],
  },
  {
    id: 7,
    nameAr: 'مركز الجراحة العامة وجراحة المناظير', nameEn: 'General Surgery & Laparoscopy Center',
    clinics: [
      { idAr: 'وحدة الجراحات الطارئة', idEn: 'Emergency Surgery Unit', nameAr: 'وحدة الجراحات الطارئة', nameEn: 'Emergency Surgery Unit', doctorIds: [23] },
      { idAr: 'وحدة جراحات المناظير', idEn: 'Laparoscopic Surgery Unit', nameAr: 'وحدة جراحات المناظير', nameEn: 'Laparoscopic Surgery Unit', doctorIds: [23, 30] },
      { idAr: 'وحدة جراحات الشرج والمستقيم', idEn: 'Colorectal Surgery Unit', nameAr: 'وحدة جراحات الشرج والمستقيم', nameEn: 'Colorectal Surgery Unit', doctorIds: [23] },
      { idAr: 'وحدة جراحات الثدي والغدد الصماء', idEn: 'Breast & Endocrine Surgery Unit', nameAr: 'وحدة جراحات الثدي والغدد الصماء', nameEn: 'Breast & Endocrine Surgery Unit', doctorIds: [23] },
    ],
  },
  {
    id: 8,
    nameAr: 'مركز صحة المرأة', nameEn: "Women's Health Center",
    clinics: [
      { idAr: 'وحدة أمراض وجراحات النساء والولادة', idEn: 'Obstetrics & Gynecology Unit', nameAr: 'وحدة أمراض وجراحات النساء والولادة', nameEn: 'Obstetrics & Gynecology Unit', doctorIds: [18, 36] },
      { idAr: 'وحدة رعاية الأمومة والجراحات التجميلية بعد الولادة', idEn: 'Maternity Care & Postpartum Cosmetic Surgery Unit', nameAr: 'وحدة رعاية الأمومة والجراحات التجميلية بعد الولادة', nameEn: 'Maternity Care & Postpartum Cosmetic Surgery Unit', doctorIds: [18, 36] },
      { idAr: 'وحدة الخدمات التجميلية النسائية', idEn: "Women's Cosmetic Services Unit", nameAr: 'وحدة الخدمات التجميلية النسائية', nameEn: "Women's Cosmetic Services Unit", doctorIds: [25, 34] },
    ],
  },
  {
    id: 9,
    nameAr: 'مركز أمراض وجراحات المسالك البولية', nameEn: 'Urology Diseases & Surgery Center',
    clinics: [
      { idAr: 'وحدة صحة الرجل', idEn: "Men's Health Unit", nameAr: 'وحدة صحة الرجل (أمراض وجراحات الذكورة والعقم)', nameEn: "Men's Health Unit (Andrology & Infertility)", doctorIds: [6, 39] },
      { idAr: 'وحدة علاج وجراحات حصوات المسالك البولية', idEn: 'Urinary Stones Treatment & Surgery Unit', nameAr: 'وحدة علاج وجراحات حصوات المسالك البولية', nameEn: 'Urinary Stones Treatment & Surgery Unit', doctorIds: [6, 39] },
      { idAr: 'وحدة علاج وجراحات البروستات', idEn: 'Prostate Treatment & Surgery Unit', nameAr: 'وحدة علاج وجراحات البروستات', nameEn: 'Prostate Treatment & Surgery Unit', doctorIds: [39] },
    ],
  },
  {
    id: 10,
    nameAr: 'مركز الأنف والأذن والحنجرة', nameEn: 'Ear, Nose & Throat (ENT) Center',
    clinics: [
      { idAr: 'وحدة جراحات ومناظير الأنف والأذن والحنجرة', idEn: 'ENT Endoscopy & Surgery Unit', nameAr: 'وحدة جراحات ومناظير الأنف والأذن والحنجرة', nameEn: 'ENT Endoscopy & Surgery Unit', doctorIds: [1, 12] },
      { idAr: 'وحدة جراحات الرأس والعنق', idEn: 'Head & Neck Surgery Unit', nameAr: 'وحدة جراحات الرأس والعنق', nameEn: 'Head & Neck Surgery Unit', doctorIds: [12] },
      { idAr: 'وحدة السمعيات', idEn: 'Audiology Unit', nameAr: 'وحدة السمعيات', nameEn: 'Audiology Unit', doctorIds: [1] },
      { idAr: 'وحدة علاج وجراحات مشاكل النوم', idEn: 'Sleep Disorders Treatment & Surgery Unit', nameAr: 'وحدة علاج وجراحات مشاكل النوم', nameEn: 'Sleep Disorders Treatment & Surgery Unit', doctorIds: [1, 16] },
    ],
  },
  {
    id: 11,
    nameAr: 'مركز طب وجراحة العيون', nameEn: 'Ophthalmology & Eye Surgery Center',
    clinics: [
      { idAr: 'وحدة تشخيص وعلاج أمراض العيون', idEn: 'Eye Diseases Diagnosis & Treatment Unit', nameAr: 'وحدة تشخيص وعلاج أمراض العيون', nameEn: 'Eye Diseases Diagnosis & Treatment Unit', doctorIds: [8] },
      { idAr: 'وحدة جراحات العيون', idEn: 'Eye Surgery Unit', nameAr: 'وحدة جراحات العيون', nameEn: 'Eye Surgery Unit', doctorIds: [8] },
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
      { idAr: 'وحدة علاج إدمان المخدرات', idEn: 'Drug Addiction Treatment Unit', nameAr: 'وحدة علاج إدمان المخدرات', nameEn: 'Drug Addiction Treatment Unit', doctorIds: [16] },
      { idAr: 'وحدة العلاج السلوكي المعرفي', idEn: 'Cognitive Behavioral Therapy Unit', nameAr: 'وحدة العلاج السلوكي المعرفي', nameEn: 'Cognitive Behavioral Therapy Unit', doctorIds: [16] },
    ],
  },
  {
    id: 14,
    nameAr: 'مركز طب الأطفال المتخصص', nameEn: 'Specialized Pediatric Center',
    clinics: [
      { idAr: 'وحدة العناية المركزة للأطفال حديثي الولادة', idEn: 'Neonatal Pediatric Intensive Care Unit', nameAr: 'وحدة العناية المركزة للأطفال حديثي الولادة', nameEn: 'Neonatal Pediatric Intensive Care Unit', doctorIds: [22, 28] },
      { idAr: 'وحدة الأمراض الصدرية للأطفال', idEn: 'Pediatric Chest Diseases Unit', nameAr: 'وحدة الأمراض الصدرية للأطفال', nameEn: 'Pediatric Chest Diseases Unit', doctorIds: [24] },
      { idAr: 'وحدة مناظير الجهاز الهضمي للأطفال', idEn: 'Pediatric Gastrointestinal Endoscopy Unit', nameAr: 'وحدة مناظير الجهاز الهضمي للأطفال', nameEn: 'Pediatric Gastrointestinal Endoscopy Unit', doctorIds: [38] },
      { idAr: 'وحدة السكري والغدد الصماء ونمو الأطفال', idEn: 'Pediatric Diabetes, Endocrinology & Growth Unit', nameAr: 'وحدة السكري والغدد الصماء ونمو الأطفال', nameEn: 'Pediatric Diabetes, Endocrinology & Growth Unit', doctorIds: [26] },
      { idAr: 'وحدة أمراض المخ والأعصاب للأطفال', idEn: 'Pediatric Neurology Unit', nameAr: 'وحدة أمراض المخ والأعصاب للأطفال', nameEn: 'Pediatric Neurology Unit', doctorIds: [3] },
    ],
  },
  {
    id: 15,
    nameAr: 'مركز طب الأسنان المتخصص (دنت سمايل)', nameEn: 'Specialized Dental Center (Dent Smile)',
    clinics: [
      { idAr: 'عيادة تقويم الأسنان وعظام الوجه والفكين', idEn: 'Orthodontics, Jaw & Facial Bones Clinic', nameAr: 'عيادة تقويم الأسنان وعظام الوجه والفكين', nameEn: 'Orthodontics, Jaw & Facial Bones Clinic', doctorIds: [31] },
      { idAr: 'عيادة التركيبات والحشوات التجميلية للأسنان', idEn: 'Cosmetic Fillings & Prosthetics Clinic', nameAr: 'عيادة التركيبات والحشوات التجميلية للأسنان', nameEn: 'Cosmetic Fillings & Prosthetics Clinic', doctorIds: [20] },
      { idAr: 'عيادة زراعة الأسنان', idEn: 'Dental Implants Clinic', nameAr: 'عيادة زراعة الأسنان', nameEn: 'Dental Implants Clinic', doctorIds: [20] },
      { idAr: 'عيادة جراحة الوجه والفكين', idEn: 'Oral & Maxillofacial Surgery Clinic', nameAr: 'عيادة جراحة الوجه والفكين', nameEn: 'Oral & Maxillofacial Surgery Clinic', doctorIds: [17] },
      { idAr: 'عيادة أمراض اللثة', idEn: 'Periodontal Diseases Clinic', nameAr: 'عيادة أمراض اللثة', nameEn: 'Periodontal Diseases Clinic', doctorIds: [4, 31] },
      { idAr: 'عيادة أسنان الأطفال', idEn: 'Pediatric Dentistry Clinic', nameAr: 'عيادة أسنان الأطفال', nameEn: 'Pediatric Dentistry Clinic', doctorIds: [4] },
    ],
  },
  {
    id: 16,
    nameAr: 'مركز الجلدية والجراحات التجميلية والليزر', nameEn: 'Dermatology, Cosmetic Surgery & Laser Center',
    clinics: [
      { idAr: 'وحدة الجلدية والتجميل والليزر', idEn: 'Dermatology, Cosmetics & Laser Unit', nameAr: 'وحدة الجلدية والتجميل والليزر', nameEn: 'Dermatology, Cosmetics & Laser Unit', doctorIds: [34] },
      { idAr: 'وحدة الجراحات التجميلية', idEn: 'Cosmetic Surgery Unit', nameAr: 'وحدة الجراحات التجميلية', nameEn: 'Cosmetic Surgery Unit', doctorIds: [25] },
    ],
  },
  {
    id: 17,
    nameAr: 'مركز أمراض وجراحات العظام', nameEn: 'Orthopedics & Orthopedic Surgery Center',
    clinics: [
      { idAr: 'وحدة الإصابات والكسور المعقدة للعظام والمفاصل', idEn: 'Complex Fractures & Joint Injuries Unit', nameAr: 'وحدة الإصابات والكسور المعقدة للعظام والمفاصل', nameEn: 'Complex Fractures & Joint Injuries Unit', doctorIds: [7, 29, 32] },
      { idAr: 'وحدة استبدال المفاصل الصناعية للركبة والحوض', idEn: 'Artificial Joint Replacement (Knee & Hip) Unit', nameAr: 'وحدة استبدال المفاصل الصناعية للركبة والحوض', nameEn: 'Artificial Joint Replacement (Knee & Hip) Unit', doctorIds: [7, 29] },
      { idAr: 'وحدة الطب الرياضي ومناظير الكتف والركبة', idEn: 'Sports Medicine & Arthroscopy (Shoulder & Knee) Unit', nameAr: 'وحدة الطب الرياضي ومناظير الكتف والركبة', nameEn: 'Sports Medicine & Arthroscopy (Shoulder & Knee) Unit', doctorIds: [7, 29] },
      { idAr: 'وحدة جراحات اليد الميكروسكوبية', idEn: 'Microscopic Hand Surgery Unit', nameAr: 'وحدة جراحات اليد الميكروسكوبية', nameEn: 'Microscopic Hand Surgery Unit', doctorIds: [14] },
      { idAr: 'وحدة جراحة العظام للأطفال', idEn: 'Pediatric Orthopedic Surgery Unit', nameAr: 'وحدة جراحة العظام للأطفال', nameEn: 'Pediatric Orthopedic Surgery Unit', doctorIds: [32] },
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
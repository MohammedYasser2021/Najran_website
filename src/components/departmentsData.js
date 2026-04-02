// doctorData helpers — import from doctorData.ts in your project
// Here we re-export the doctor mapping inline for convenience
// Make sure to import { doctors, departments as deptDoctors } from './doctorData'
// and use getDoctorsForDept() below in DepartmentPage

export const departments = [
  {
    slug: "intensive-care",
    nameAr: "مركز العناية المركزة",
    nameEn: "Intensive Care Center",
    // ICU monitors and medical equipment
    image: "https://prathimahospitals.com/wp-content/uploads/2021/01/New-Project-14-min-1024x576.jpg",
    doctorDeptId: 1,
    descriptionAr: "يتم من خلاله رعاية وتشخيص وعلاج المرضى الذين يعانون من أمراض حادة ويستخدم هذا المركز مجموعة من أنظمة المراقبة الحيوية المتطورة والعلاجات الداعمة للأعضاء والعديد من العلاجات المتكاملة الأخرى. ويتبع المركز فريق من الأطباء الاستشاريين وطاقم تمريض وأخصائي علاج تنفسي وصيادلة وأخصائيين تغذية سريرية وأخصائيين علاج طبيعي ووظيفي.",
    descriptionEn: "The center provides care, diagnosis and treatment for patients suffering from acute illnesses, using advanced vital monitoring systems, organ support treatments and many other integrated therapies. The center is staffed by a team of consultant physicians, nursing staff, respiratory therapists, pharmacists, clinical nutrition specialists, and physical and occupational therapists.",
    unitsAr: [
      "وحدة العناية المركزة للكبار",
      "وحدة العناية المركزة للأطفال",
      "وحدة العناية المركزة لحديثي الولادة"
    ],
    unitsEn: [
      "Adult Intensive Care Unit",
      "Pediatric Intensive Care Unit",
      "Neonatal Intensive Care Unit"
    ]
  },
  {
    slug: "internal-medicine",
    nameAr: "مركز الطب الباطني",
    nameEn: "Internal Medicine Center",
    // Doctor examining patient / stethoscope
    image: "https://www.ekolhospitals.com/assets/upload/internal-diasese_7468-1842_7439-1842.jpg",
    doctorDeptId: 4,
    descriptionAr: "يلتزم مركز الطب الباطني بتوفير أعلى مستوى من جودة الرعاية الصحية والتي تتراوح من الرعاية الأولية إلى الرعاية المتخصصة والدقيقة للبالغين وكبار السن ذوي الأمراض الحادة والأمراض المزمنة. من خلال نخبة استشاريين ومتخصصين وطاقماً طبياً على أعلى مستوى مدعَّمين بتكنولوجيا متقدمة لتقديم أفضل النصائح والخدمات التشخيصية والعلاج في جميع تخصصات طب الباطنة مثل الغدد الصماء وأمراض الجهاز الهضمي وأمراض الدم والقلب والأعصاب والصدرية.",
    descriptionEn: "The Internal Medicine Center is committed to providing the highest level of healthcare quality, ranging from primary to specialized and subspecialty care for adults and elderly patients with acute and chronic diseases. Through elite consultants, specialists, and a top-tier medical team supported by advanced technology to provide the best advice, diagnostic services and treatment in all internal medicine subspecialties such as endocrinology, gastroenterology, hematology, cardiology, neurology and pulmonology.",
    unitsAr: [
      "وحدة أمراض القلب",
      "وحدة الأمراض العصبية",
      "وحدة الأمراض الصدرية",
      "وحدة أمراض الدم",
      "وحدة طب الأسرة",
      "وحدة طب المستشفيات",
      "وحدة الباطنة العامة والغدد الصماء والسكري",
      "وحدة الأمراض المعدية"
    ],
    unitsEn: [
      "Cardiology Unit",
      "Neurology Unit",
      "Chest Diseases Unit",
      "Hematology Unit",
      "Family Medicine Unit",
      "Hospital Medicine Unit",
      "General Internal Medicine, Endocrinology & Diabetes Unit",
      "Infectious Diseases Unit"
    ]
  },
  {
    slug: "gastroenterology",
    nameAr: "مركز الجهاز الهضمي والكبد والمناظير",
    nameEn: "Gastroenterology, Hepatology & Endoscopy Center",
    // Endoscopy / GI procedure
    image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=1200&h=600&fit=crop",
    doctorDeptId: 5,
    descriptionAr: "يوفر المركز خدمات متكاملة لتشخيص وعلاج أمراض الجهاز الهضمي والكبد باستخدام أحدث تقنيات المناظير التشخيصية والعلاجية على يد نخبة من استشاريي الجهاز الهضمي.",
    descriptionEn: "The center provides integrated services for the diagnosis and treatment of gastrointestinal and liver diseases using the latest diagnostic and therapeutic endoscopy techniques by elite gastroenterology consultants.",
    unitsAr: [
      "وحدة المناظير العلوية والسفلية (مناظير المعدة والقولون التشخيصية والعلاجية)",
      "وحدة مناظير القنوات المرارية ERCP (إزالة حصوات المرارة وتركيب الدعامات المرارية)"
    ],
    unitsEn: [
      "Upper & Lower Endoscopy Unit (Diagnostic & Therapeutic Gastroscopy & Colonoscopy)",
      "ERCP Unit (Gallstone Removal & Biliary Stenting)"
    ]
  },
  {
    slug: "obesity-surgery",
    nameAr: "مركز علاج وجراحات السمنة",
    nameEn: "Obesity Treatment & Surgery Center",
    // Laparoscopic surgery tools / bariatric
    image: "https://tse3.mm.bing.net/th/id/OIP._3aw_I5hqQw53YZhVc_riQHaEe?w=1440&h=870&rs=1&pid=ImgDetMain&o=7&rm=3",
    doctorDeptId: 6,
    descriptionAr: "يعد مركزنا هو المركز الوحيد المعتمد من وزارة الصحة لإجراء جراحات السمنة في نجران ويضم المركز نخبة من الجراحين الاستشاريين في جراحات السمنة المفرطة والجراحة العامة بالمنظار.",
    descriptionEn: "Our center is the only one accredited by the Ministry of Health to perform bariatric surgery in Najran, with elite consultant surgeons specializing in morbid obesity surgery and general laparoscopic surgery.",
    unitsAr: [
      "وحدة جراحات السمنة وعلاج البدانة",
      "وحدة التغذية العلاجية",
      "وحدة الدعم النفسي والسلوكي"
    ],
    unitsEn: [
      "Bariatric Surgery & Obesity Treatment Unit",
      "Therapeutic Nutrition Unit",
      "Psychological & Behavioral Support Unit"
    ],
    servicesAr: [
      "عمليات تكميم المعدة بالمنظار",
      "عمليات تحويل المسار بالمنظار",
      "علاج البدانة بالكبسولة العادية والكبسولة الذكية",
      "خدمات التغذية العلاجية قبل وبعد العمليات الجراحية",
      "متابعة حالات المرضى لعمل الدعم النفسي والسلوكي اللازم لكل حالة"
    ],
    servicesEn: [
      "Laparoscopic sleeve gastrectomy",
      "Laparoscopic gastric bypass",
      "Obesity treatment with standard and smart capsules",
      "Therapeutic nutrition services before and after surgery",
      "Patient follow-up for psychological and behavioral support"
    ]
  },
  {
    slug: "general-surgery",
    nameAr: "مركز الجراحة العامة وجراحة المناظير",
    nameEn: "General Surgery & Laparoscopy Center",
    // Surgeons in operating room
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=1200&h=600&fit=crop",
    doctorDeptId: 7,
    descriptionAr: "يتوفر بالمركز العديد من الجراحين الاستشاريين من الرجال والنساء وتم توفير أحدث تقنيات ومناظير الجراحة العامة لعمليات اليوم الواحد مع أطقم الرعاية التمريضية المدربة والتنويم بأنواعه التي تضاهي الخدمة الفندقية لرعاية متميزة للمرضى المنومين والمرافقين.",
    descriptionEn: "The center has many male and female consultant surgeons, with the latest general surgery and laparoscopy techniques for day surgeries, trained nursing care teams, and hotel-standard inpatient services for excellent patient and companion care.",
    unitsAr: [
      "وحدة الجراحات الطارئة",
      "وحدة جراحات المناظير (الزائدة الدودية، المرارة، البواسير والناصور)",
      "وحدة جراحات الشرج والمستقيم",
      "وحدة جراحات الثدي والغدد الصماء",
      "وحدة جراحات الصدر"
    ],
    unitsEn: [
      "Emergency Surgery Unit",
      "Laparoscopic Surgery Unit (Appendix, Gallbladder, Hemorrhoids & Fistula)",
      "Colorectal Surgery Unit",
      "Breast & Endocrine Surgery Unit",
      "Thoracic Surgery Unit"
    ]
  },
  {
    slug: "womens-health",
    nameAr: "مركز صحة المرأة",
    nameEn: "Women's Health Center",
    // Women's health / maternity
    image: "https://static.sayidaty.net/2023-05/252804.jpg",
    doctorDeptId: 8,
    descriptionAr: "يضم مركز صحة المرأة في مستشفى تخصصي نجران العديد من الاستشاريات الجراحات والأخصائيات في مجال أمراض وجراحات النساء والولادة وتخصصاتها الدقيقة حيث يتوفر لهم العديد من أحدث أجهزة التشخيص والعلاج وغرف العمليات المتطورة وكذلك وحدة خاصة بطوارئ النساء والولادة.",
    descriptionEn: "The Women's Health Center at Najran Specialist Hospital includes many female consultant surgeons and specialists in obstetrics, gynecology, and subspecialties, with the latest diagnostic and treatment devices, advanced operating rooms, and a dedicated women's emergency and maternity unit.",
    unitsAr: [
      "وحدة أمراض وجراحات النساء والولادة",
      "وحدة رعاية الأمومة والجراحات التجميلية بعد الولادة",
      "وحدة الخدمات التجميلية النسائية"
    ],
    unitsEn: [
      "Obstetrics & Gynecology Unit",
      "Maternity Care & Postpartum Cosmetic Surgery Unit",
      "Women's Cosmetic Services Unit"
    ],
    servicesAr: [
      "متابعة الحمل عالي الخطورة",
      "تشخيص وعلاج حالات الإجهاض المتكرر",
      "علاج اضطرابات الدورة وتكيسات المبايض",
      "متابعة حالات تأخر الإنجاب",
      "عمليات الإصلاح المهبلي",
      "عمليات التجميل النسائي",
      "عمليات إصلاح سقوط الرحم والمثانة والمستقيم",
      "الولادات القيصرية أو المتكررة",
      "عمليات استئصال الأورام الليفية وأكياس المبايض",
      "استئصال الرحم بطني أو مهبلي",
      "خدمة 24 ساعة بطوارئ النساء والولادة",
      "التثقيف الصحي وتقديم جميع وسائل تنظيم الحمل"
    ],
    servicesEn: [
      "High-risk pregnancy follow-up",
      "Diagnosis and treatment of recurrent miscarriage",
      "Treatment of menstrual disorders and ovarian cysts",
      "Delayed fertility follow-up",
      "Vaginal repair surgeries",
      "Female cosmetic surgeries",
      "Uterine, bladder and rectal prolapse repair",
      "Cesarean or repeated deliveries",
      "Fibroid and ovarian cyst removal",
      "Abdominal or vaginal hysterectomy",
      "24-hour women's and maternity emergency service",
      "Health education and contraception services"
    ]
  },
  {
    slug: "urology",
    nameAr: "مركز أمراض وجراحات المسالك البولية",
    nameEn: "Urology Diseases & Surgery Center",
    // Urology / kidney anatomy model
    image: "https://saudiarabia.st/saudi-arabia/2025-01-07/%D9%85%D9%85%D9%8A%D8%B2%D8%A7%D8%AA-%D9%88%D8%B9%D9%8A%D9%88%D8%A8-%D8%AA%D8%AE%D8%B5%D8%B5-%D8%AC%D8%B1%D8%A7%D8%AD%D8%A9-%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D9%84%D9%83-%D8%A7%D9%84%D8%A8%D9%88%D9%84%D9%8A%D8%A9/%D9%85%D9%85%D9%8A%D8%B2%D8%A7%D8%AA-%D9%88%D8%B9%D9%8A%D9%88%D8%A8-%D8%AA%D8%AE%D8%B5%D8%B5-%D8%AC%D8%B1%D8%A7%D8%AD%D8%A9-%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D9%84%D9%83-%D8%A7%D9%84%D8%A8%D9%88%D9%84%D9%8A%D8%A9.webp",
    doctorDeptId: 9,
    descriptionAr: "يضم هذا المركز عدداً من الجراحين الاستشاريين في مجال أمراض وجراحات المسالك البولية وهم يتميزون بخبرات طويلة في هذا المجال كما وفرت المستشفى أحدث أجهزة العلاج مثل جهاز الريزيوم لعلاج تضخم البروستاتا بالتبخير وهو الأول من نوعه في نجران ويتميز الجهاز بأنه يعالج حالاته خلال ١٠ دقائق فقط وبدون جراحة أو ألم.",
    descriptionEn: "The center includes several consultant surgeons in urology diseases and surgery with extensive experience. The hospital has provided the latest treatment devices such as the Rezum device for steam treatment of prostate enlargement — the first of its kind in Najran, treating cases in only 10 minutes with no surgery or pain.",
    unitsAr: [
      "وحدة جراحات المسالك البولية",
      "وحدة صحة الرجل (أمراض وجراحات الذكورة والعقم)"
    ],
    unitsEn: [
      "Urology Surgery Unit",
      "Men's Health Unit (Andrology & Infertility)"
    ],
    servicesAr: [
      "علاج حصوات الكلى والحالب بالمناظير وتفتيتها بالليزر",
      "علاج أمراض البروستاتا والمثانة",
      "عمليات الطهارة بجميع الأعمار",
      "عمليات الدوالي والقيلة المائية",
      "علاج أمراض الذكورة والعجز الجنسي",
      "عمليات زراعة الدعامات التعويضية لحالات ضعف الانتصاب",
      "عمليات علاج تضخم البروستاتا بالتبخير (الريزيوم) بدون جراحة أو ألم"
    ],
    servicesEn: [
      "Kidney & ureter stone treatment by laparoscopy and laser lithotripsy",
      "Prostate and bladder disease treatment",
      "Circumcision at all ages",
      "Varicocele and hydrocele surgery",
      "Andrology and erectile dysfunction treatment",
      "Penile implant surgery",
      "Steam treatment of benign prostatic hyperplasia (Rezum) — no surgery or pain"
    ]
  },
  {
    slug: "ent",
    nameAr: "مركز الأنف والأذن والحنجرة",
    nameEn: "Ear, Nose & Throat (ENT) Center",
    // ENT doctor examining patient ear/throat
    image: "https://tse4.mm.bing.net/th/id/OIP.zlaldFy7EWMdt8ErCkIg8gHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    doctorDeptId: 10,
    descriptionAr: "يضم هذا المركز عدداً كبيراً من الجراحين الاستشاريين في مجال تشخيص وعلاج أمراض وجراحات الأنف والأذن والحنجرة وهم يتميزون بسمعة طيبة في منطقة نجران كما يمتلك المركز العديد من أحدث التجهيزات التي تساعد في دقة التشخيص والعلاج.",
    descriptionEn: "The center includes many consultant surgeons in ENT diseases and surgeries with an excellent reputation in the Najran region, and the latest equipment for accurate diagnosis and treatment.",
    unitsAr: [
      "وحدة جراحات ومناظير الأنف والأذن والحنجرة",
      "وحدة جراحات الرأس والعنق",
      "وحدة السمعيات",
      "وحدة علاج وجراحات مشاكل النوم"
    ],
    unitsEn: [
      "ENT Endoscopy & Surgery Unit",
      "Head & Neck Surgery Unit",
      "Audiology Unit",
      "Sleep Disorders Treatment & Surgery Unit"
    ],
    servicesAr: [
      "ترقيع طبلة الأذن بالمنظار",
      "إصلاح اعوجاج الحاجز الأنفي",
      "جراحات لحميات الأنف",
      "تنظيف الجيوب الأنفية بالمنظار",
      "استئصال اللوز واللحمية",
      "تركيب أنابيب الأذن الوسطى",
      "لحميات الأحبال الصوتية",
      "قرنيات الأنف",
      "فحص الأذن بالمنظار",
      "حالات الدوار وضعف التوازن",
      "غسيل الأذن",
      "فحص السمع"
    ],
    servicesEn: [
      "Endoscopic tympanoplasty",
      "Nasal septum deviation correction",
      "Nasal polyp surgeries",
      "Endoscopic sinus cleaning",
      "Tonsil & adenoid removal",
      "Middle ear tube insertion",
      "Vocal cord polyps",
      "Nasal turbinate surgery",
      "Ear endoscopy",
      "Dizziness & balance disorders",
      "Ear irrigation",
      "Hearing tests"
    ]
  },
  {
    slug: "ophthalmology",
    nameAr: "مركز طب وجراحة العيون",
    nameEn: "Ophthalmology & Eye Surgery Center",
    // Eye exam / slit lamp
    image: "https://static2.feelgoodcontacts.net/images/ech/img/entropian-eye-causes-symptoms-treatments.webp",
    doctorDeptId: 11,
    descriptionAr: "يتوافر بالمركز منظومة متكاملة لتقديم الرعاية الصحية لكافة المراجعين من الأطفال والكبار في تخصص أمراض وجراحات العيون. يشمل فحوصات تشخيص ومتابعة أمراض العيون بأحدث الأجهزة.",
    descriptionEn: "The center provides an integrated healthcare system for all patients — children and adults — in the specialty of eye diseases and surgery, including diagnosis and follow-up examinations with the latest devices.",
    unitsAr: [
      "وحدة تشخيص ومتابعة أمراض العيون",
      "وحدة جراحات العيون"
    ],
    unitsEn: [
      "Eye Diseases Diagnosis & Follow-up Unit",
      "Eye Surgery Unit"
    ],
    servicesAr: [
      "الفحص الشامل للعين للكبار والأطفال",
      "استقبال وعلاج كافة إصابات العيون",
      "علاج المياه البيضاء (الكاتراكت)",
      "علاج المياه الزرقاء (الجلوكوما)",
      "متابعة حالات الشبكية",
      "علاج حول الأطفال والكبار",
      "عمليات القنوات الدمعية وتجميل الجفون",
      "تثبيت القرنية المخروطية",
      "العدسات اللاصقة الصلبة والمرنة",
      "إزالة عتمة المحفظة الخلفية بالليزر"
    ],
    servicesEn: [
      "Comprehensive eye examination for adults and children",
      "Reception and treatment of all eye injuries",
      "Cataract treatment",
      "Glaucoma treatment",
      "Retinal condition follow-up",
      "Strabismus treatment for children and adults",
      "Tear duct and eyelid cosmetic surgery",
      "Keratoconus stabilization",
      "Rigid and soft contact lenses",
      "Posterior capsule opacification laser removal"
    ]
  },
  {
    slug: "interventional-radiology",
    nameAr: "مركز الأشعة التداخلية",
    nameEn: "Interventional Radiology Center",
    // Radiology / angiography suite
    image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=1200&h=600&fit=crop",
    doctorDeptId: 12,
    descriptionAr: "أصبحت الأشعة التداخلية تخصصاً مستقلاً تم فصله عن تخصص علم الأشعة وهي مجموعة من التقنيات التي تستخدم الصورة الإشعاعية (الأشعة السينية أو الموجات فوق الصوتية) في تشخيص وعلاج الكثير من الأمراض والحالات الحرجة بدون جراحة.",
    descriptionEn: "Interventional radiology has become an independent specialty, using imaging (X-ray or ultrasound) to diagnose and treat many diseases and critical conditions — without surgery.",
    unitsAr: [
      "وحدة الأشعة التداخلية للأوعية الدموية والدوالي",
      "وحدة الأشعة التداخلية للعظام والمفاصل والعمود الفقري"
    ],
    unitsEn: [
      "Vascular & Varicose Veins Interventional Radiology Unit",
      "Bones, Joints & Spine Interventional Radiology Unit"
    ],
    servicesAr: [
      "علاج دوالي الساقين بأحدث التقنيات",
      "علاج دوالي الخصيتين وتضخم البروستاتا الحميد بالقسطرة",
      "علاج الألم الحاد والمزمن تحت إرشادات الأشعة",
      "تركيب قسطرة الدم الوريدية والغسيل الكلوي",
      "علاج أمراض الشرايين والقدم السكري",
      "علاج أورام الرحم الليفية ودوالي الحوض وبطانة الرحم المهاجرة",
      "علاج آلام الظهر وعرق النساء بالحقن والتردد الحراري بدون جراحة",
      "علاج آلام المفاصل (الركبة، الكتف، الفخذ) بالحقن والبلازما"
    ],
    servicesEn: [
      "Varicose vein treatment with latest techniques",
      "Testicular varicocele and BPH treatment by catheterization",
      "Acute and chronic pain treatment under imaging guidance",
      "Central venous catheter and dialysis catheter insertion",
      "Arterial disease and diabetic foot treatment",
      "Uterine fibroids, pelvic varices and endometriosis treatment",
      "Back pain and sciatica treatment by injection and thermal ablation",
      "Joint pain treatment (knee, shoulder, hip) by injection and PRP"
    ]
  },
  {
    slug: "psychiatry",
    nameAr: "مركز الطب النفسي والإدمان",
    nameEn: "Psychiatry & Addiction Center",
    // Mental health / therapy session
    image: "https://tse2.mm.bing.net/th/id/OIP.gfovH-czeZshW--i5RZ8OgHaED?rs=1&pid=ImgDetMain&o=7&rm=3",
    doctorDeptId: 13,
    descriptionAr: "يتميز المركز بأنه الوحيد الذي يوفر العلاج للاضطرابات النفسية وفي نفس الوقت تقديم الاستشارات الحياتية والزوجية ومشاكل الطفولة والمراهقة وكذلك كبار السن. بالإضافة إلى علاج مشاكل الإدمان لمن تتوفر لديه الرغبة الحقيقية للتخلص من هذه الآفة.",
    descriptionEn: "The center is unique in providing treatment for psychological disorders while also offering life, marital, childhood, adolescent, and elderly counseling, in addition to treating addiction for those with a genuine desire to recover.",
    unitsAr: [
      "وحدة علاج الإدمان",
      "وحدة العلاج السلوكي المعرفي"
    ],
    unitsEn: [
      "Addiction Treatment Unit",
      "Cognitive Behavioral Therapy Unit"
    ],
    servicesAr: [
      "اضطرابات النوم بكافة أشكاله",
      "اضطرابات القلق والتوتر",
      "اضطرابات الاكتئاب",
      "اضطرابات المزاج الحادة والمستعصية",
      "اضطرابات اكتئاب ما بعد الولادة",
      "اضطرابات السلوك عند الأطفال",
      "سوء استخدام العقاقير والإدمان بجميع أنواعه",
      "حالات الخوف والرهاب بجميع أنواعه",
      "الحالات الذهانية الحادة والمستعصية",
      "معالجة اضطرابات الوسواس القهري",
      "علاج حالات اضطراب الأداء الدراسي أو الأداء في العمل"
    ],
    servicesEn: [
      "Sleep disorders of all types",
      "Anxiety and stress disorders",
      "Depression disorders",
      "Acute and refractory mood disorders",
      "Postpartum depression",
      "Children's behavioral disorders",
      "Drug abuse and all types of addiction",
      "Phobias and all types of fear",
      "Acute and refractory psychotic disorders",
      "Obsessive-compulsive disorder (OCD)",
      "Academic and work performance disorders"
    ]
  },
  {
    slug: "pediatrics",
    nameAr: "مركز طب الأطفال المتخصص",
    nameEn: "Specialized Pediatric Center",
    // Pediatrician with child / kids healthcare
    image: "https://tse1.mm.bing.net/th/id/OIP.M0fJ5kBA3ysjOr4dl5dYbwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
    doctorDeptId: 14,
    descriptionAr: "المستشفى الوحيد الذي يضم مركزاً لطب الأطفال المتخصص ويضم أكثر من ٨ تخصصات طبية لأمراض الأطفال، مع أحدث التجهيزات الطبية لرعاية الأطفال منذ الولادة.",
    descriptionEn: "The only hospital featuring a dedicated pediatric specialty center with more than 8 pediatric subspecialties and the latest medical equipment for child care from birth.",
    unitsAr: [
      "وحدة العناية المركزة للأطفال حديثي الولادة",
      "وحدة الأمراض الصدرية للأطفال",
      "وحدة مناظير الجهاز الهضمي للأطفال",
      "وحدة السكري والغدد الصماء ونمو الأطفال",
      "وحدة أمراض المخ والأعصاب للأطفال"
    ],
    unitsEn: [
      "Neonatal Intensive Care Unit",
      "Pediatric Chest Diseases Unit",
      "Pediatric GI Endoscopy Unit",
      "Pediatric Diabetes, Endocrinology & Growth Unit",
      "Pediatric Neurology Unit"
    ]
  },
  {
    slug: "dental",
    nameAr: "مركز طب وجراحة الأسنان المتخصص (دنت سمايل)",
    nameEn: "Specialized Dental Center (Dent Smile)",
    // Dental chair / dentist at work
    image: "https://tse2.mm.bing.net/th/id/OIP.pvvaQP3CK6J_D8AwM_qWlwHaE8?w=1650&h=1102&rs=1&pid=ImgDetMain&o=7&rm=3",
    doctorDeptId: 15,
    descriptionAr: "يضم المركز نخبة من أفضل الاستشاريين والأخصائيين في جميع مجالات طب الأسنان.",
    descriptionEn: "The center includes an elite group of the best consultants and specialists in all fields of dentistry.",
    unitsAr: [
      "عيادة تقويم الأسنان وعظام الوجه والفكين",
      "عيادة التركيبات والحشوات التجميلية للأسنان",
      "عيادة زراعة الأسنان",
      "عيادة جراحة الوجه والفكين",
      "عيادة أمراض اللثة",
      "عيادة أسنان الأطفال"
    ],
    unitsEn: [
      "Orthodontics, Jaw & Facial Bones Clinic",
      "Cosmetic Fillings & Prosthetics Clinic",
      "Dental Implants Clinic",
      "Oral & Maxillofacial Surgery Clinic",
      "Periodontal Diseases Clinic",
      "Pediatric Dentistry Clinic"
    ]
  },
  {
    slug: "dermatology",
    nameAr: "مركز الجلدية والجراحات التجميلية والليزر",
    nameEn: "Dermatology, Cosmetic Surgery & Laser Center",
    // Dermatology / skin treatment laser
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&h=600&fit=crop",
    doctorDeptId: 16,
    descriptionAr: "يتميز مركز الجلدية والجراحات التجميلية وجراحة تحسين التشوهات بوجود الكوادر المميزة وكذلك الأجهزة الحديثة التي ينفرد بها مستشفى تخصصي نجران في المنطقة مما يسهم في تقديم خدمات مميزة في مجال التجميل بشكل أفضل ويوفر معاناة السفر وتوفير الوقت والمال مع الحصول على أفضل النتائج.",
    descriptionEn: "The Dermatology, Cosmetic Surgery & Deformity Correction Center features distinguished staff and modern devices unique to Najran Specialist Hospital in the region, providing exceptional cosmetic services while saving patients the trouble of travel, time and money.",
    unitsAr: [
      "وحدة علاج الأمراض الجلدية والتجميل بالليزر",
      "وحدة الجراحات التجميلية"
    ],
    unitsEn: [
      "Dermatology, Cosmetics & Laser Unit",
      "Cosmetic Surgery Unit"
    ],
    servicesAr: [
      "علاج الأمراض الجلدية",
      "الحقن التجميلي (فيلر، بوتوكس) وإزالة الشعر بالليزر",
      "إعادة نضارة البشرة وإزالة تصبغات الجلد",
      "عمليات حقن الدهون وشد ترهلات البطن بعد الولادة",
      "عمليات شد الجفون",
      "عمليات شد وتكبير وتصغير الصدر",
      "جراحات شفط الدهون وتنسيق القوام 360 درجة",
      "عمليات تجميل الجسم بعد عمليات التكميم وإنقاص الوزن"
    ],
    servicesEn: [
      "Skin disease treatment",
      "Cosmetic injections (fillers, botox) and laser hair removal",
      "Skin rejuvenation and pigmentation removal",
      "Fat injection and postpartum abdominal tightening",
      "Eyelid lift surgery",
      "Breast lift, augmentation and reduction",
      "360-degree liposuction and body contouring",
      "Body cosmetic surgery after sleeve gastrectomy and weight loss"
    ]
  },
  {
    slug: "orthopedics",
    nameAr: "مركز أمراض وجراحات العظام والمفاصل",
    nameEn: "Orthopedics & Joint Surgery Center",
    // X-ray of bones / orthopedic surgery
    image: "https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=1200&h=600&fit=crop",
    doctorDeptId: 17,
    descriptionAr: "يضم مركز جراحات العظام عدداً كبيراً من الجراحين الاستشاريين في مجال أمراض وجراحات العظام وهم يتميزون بخبرات طويلة في هذا المجال ولهم مساهمات وإنجازات علمية تم نشرها في المؤتمرات العالمية. كما يتم اتباع بروتوكولات جراحية فريدة من نوعها داخل منطقة نجران وبعض التقنيات الحديثة التي تنفرد بها المستشفى مثل تقنية (ريجينيرا) لعلاج خشونة المفاصل.",
    descriptionEn: "The Orthopedic Surgery Center includes many consultant surgeons in orthopedic diseases and surgeries with extensive experience and scientific contributions published at international conferences. Unique surgical protocols are followed in the Najran region, including modern techniques exclusive to the hospital such as the Regenera technique for joint arthritis treatment.",
    unitsAr: [
      "وحدة الإصابات والكسور المعقدة للعظام والمفاصل",
      "وحدة استبدال المفاصل الصناعية للركبة والحوض",
      "وحدة الطب الرياضي ومناظير الكتف والركبة",
      "وحدة جراحات اليد الميكروسكوبية",
      "وحدة العلاج الطبيعي والوظيفي"
    ],
    unitsEn: [
      "Complex Fractures & Joint Injuries Unit",
      "Artificial Joint Replacement (Knee & Hip) Unit",
      "Sports Medicine & Arthroscopy (Shoulder & Knee) Unit",
      "Microscopic Hand Surgery Unit",
      "Physical & Occupational Therapy Unit"
    ]
  },
  // ===== Support & Admin Departments =====
  {
    slug: "emergency",
    nameAr: "قسم الطوارئ",
    nameEn: "Emergency Department",
    // ER entrance / emergency team
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=1200&h=600&fit=crop",
    doctorDeptId: null,
    descriptionAr: "يعد قسم الطوارئ في مستشفى تخصصي نجران من أهم الأقسام الطبية التي تهتم في رعاية المرضى واستقبالهم لتوفير الخدمات الطبية والإسعافات اللازمة إذ يتوفر في القسم أفضل الأطباء والممرضين الذين جرى تدريبهم في مجال طب الحالات الطارئة والإسعافات الأولية وإنقاذ الحياة على مدار الساعة.",
    descriptionEn: "The Emergency Department at Najran Specialist Hospital is one of the most important medical departments, caring for and receiving patients to provide necessary medical services and first aid. The department is staffed by the best trained doctors and nurses in emergency medicine, first aid, and life-saving around the clock.",
    unitsAr: [
      "غرف طوارئ مجهزة بأحدث الأجهزة الطبية",
      "وحدة الإنعاش القلبي والرئوي",
      "وحدة علاج الكسور وتركيب الجبائر",
      "وحدة العمليات الجراحية والتجميلية الصغرى"
    ],
    unitsEn: [
      "Modern Emergency Rooms with Latest Equipment",
      "Cardiopulmonary Resuscitation Unit",
      "Fracture Treatment & Splinting Unit",
      "Minor Surgical & Cosmetic Procedures Unit"
    ]
  },
  {
    slug: "diagnostic-radiology",
    nameAr: "قسم الأشعة التشخيصية",
    nameEn: "Diagnostic Radiology Department",
    // MRI machine / CT scanner
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop&sat=-50",
    doctorDeptId: null,
    descriptionAr: "يضم القسم أحدث أجهزة الأشعة التشخيصية المتعارف عليها ويشرف عليه نخبة من الاستشاريين والأخصائيين والفنيين ويتبع القسم سياسة تعاون دقيقة مع قسم الطوارئ في حالات الحوادث والكسور وغيرها من الحالات الطارئة.",
    descriptionEn: "The department includes the latest diagnostic radiology equipment, supervised by a team of consultants, specialists, and technicians. It follows a precise cooperation policy with the Emergency Department for accidents, fractures, and other urgent cases.",
    unitsAr: [
      "الأشعة السينية",
      "الموجات الصوتية",
      "الأشعة المقطعية",
      "الرنين المغناطيسي",
      "الموجات فوق الصوتية على الثدي (ماموجرام)",
      "أشعة كثافة العظام"
    ],
    unitsEn: [
      "X-Ray",
      "Ultrasound",
      "CT Scan",
      "MRI",
      "Breast Ultrasound (Mammogram)",
      "Bone Density Scan"
    ]
  },
  {
    slug: "laboratory",
    nameAr: "قسم المختبر",
    nameEn: "Laboratory Department",
    // Lab technician / blood samples / microscope
    image: "https://nu.edu.om/medicine/assets/uploads/sites/3/2022/05/ChemistryLab-1-1920x1080.jpg",
    doctorDeptId: null,
    descriptionAr: "يعد قسم المختبر من أهم الأقسام المساندة لأغلب التخصصات والمراكز الطبية في المستشفى مما يمنحه الأهمية القصوى بجميع وحداته حيث أنه جزء أساسي من البروتوكول الطبي المستخدم لدقة التشخيص ووضع الخطة العلاجية المناسبة لكل حالة بواسطة الطبيب المعالج.",
    descriptionEn: "The Laboratory Department is one of the most important supporting departments for most specialties and medical centers in the hospital. It is an essential part of the medical protocol used for accurate diagnosis and treatment planning.",
    unitsAr: [
      "وحدة سحب العينات",
      "وحدة الميكروبيولوجي والباراسيتولوجي",
      "وحدة الكيمياء والمناعة",
      "وحدة الهرمون ودلالات الأورام",
      "وحدة الهيماتولوجي",
      "وحدة بنك الدم",
      "وحدة السموم والمخدرات",
      "وحدة فحص العمالة"
    ],
    unitsEn: [
      "Sample Collection Unit",
      "Microbiology & Parasitology Unit",
      "Chemistry & Immunology Unit",
      "Hormones & Tumor Markers Unit",
      "Hematology Unit",
      "Blood Bank Unit",
      "Toxins & Drugs Unit",
      "Labor Examination Unit"
    ]
  },
  {
    slug: "pharmacy",
    nameAr: "قسم الصيدلية",
    nameEn: "Pharmacy Department",
    // Pharmacist / medications
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=1200&h=600&fit=crop",
    doctorDeptId: null,
    descriptionAr: "تقدم الصيدلية الداخلية بجميع أقسامها خدمات للمرضى المنومين في مختلف أقسام المستشفى على مدى 24 ساعة طوال أيام الأسبوع. وتشمل الخدمات توفير جميع الأدوية للمرضى المنومين وذلك لتأمين الاستخدام السليم والآمن للأدوية. كما تقدم الصيدلية البرامج التعليمية بشكل مستمر لفريق العمل الطبي والتمريضي.",
    descriptionEn: "The inpatient pharmacy provides services to admitted patients in all hospital departments 24/7, covering all medications to ensure proper and safe drug use. The pharmacy also continuously provides educational programs for medical and nursing staff.",
    unitsAr: [
      "صيدلية المرضى المنومين (24 ساعة)",
      "وحدة مراقبة أدوية الطوارئ",
      "وحدة البرامج التعليمية الدوائية"
    ],
    unitsEn: [
      "Inpatient Pharmacy (24 hours)",
      "Emergency Medication Monitoring Unit",
      "Pharmaceutical Education Programs Unit"
    ]
  },
  {
    slug: "sterilization",
    nameAr: "قسم التعقيم المركزي",
    nameEn: "Central Sterilization Department",
    // Sterilization / autoclave / surgical instruments
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1200&h=600&fit=crop&hue=200",
    doctorDeptId: null,
    descriptionAr: "هدفنا الأساسي في قسم التعقيم المركزي هو حماية جميع المرضى بضمان جودة عالية من خلال تطبيق أعلى مستويات التعقيم لجميع المستلزمات الطبية تماشياً مع سياسة مكافحة العدوى المتبعة في المستشفى طبقاً لأدق معايير الجودة المعتمدة في نظام المركز السعودي لاعتماد المنشآت الصحية (سباهي).",
    descriptionEn: "Our primary goal in the Central Sterilization Department is to protect all patients by ensuring high quality through applying the highest sterilization standards to all medical supplies, in line with the hospital's infection control policy according to CBAHI standards.",
    unitsAr: [
      "وحدة تعقيم الأدوات الجراحية",
      "وحدة مكافحة العدوى",
      "وحدة ضمان جودة التعقيم"
    ],
    unitsEn: [
      "Surgical Instrument Sterilization Unit",
      "Infection Control Unit",
      "Sterilization Quality Assurance Unit"
    ]
  },
  {
    slug: "social-service",
    nameAr: "قسم الخدمة الاجتماعية",
    nameEn: "Social Service Department",
    // Social worker / counseling session
    image: "https://images.unsplash.com/photo-1491013516836-7db643ee125a?w=1200&h=600&fit=crop",
    doctorDeptId: null,
    descriptionAr: "يقوم القسم بدراسة وتحليل التجارب والممارسات للحالات الواردة للمستشفى وإعداد التوصيات والمقترحات بتبني أفضل الأساليب والممارسات الحديثة المناسبة لكل حالة بما يتناسب مع ظروفها الخاصة.",
    descriptionEn: "The department studies and analyzes cases received by the hospital and prepares recommendations for best practices suited to each case's specific circumstances.",
    unitsAr: [],
    unitsEn: [],
    servicesAr: [
      "تشخيص سريع للحالة عند قدومها للمستشفى",
      "تجميع المعلومات والبيانات اللازمة عن الحالة",
      "دراسة وتحليل الحالة وكتابة التقارير اللازمة",
      "تقديم المشورة بشأن التعامل مع الحالة ومشاكلها (إدمان، عنف، بطالة، معاناة مالية)",
      "وضع برنامج مخصص لكل حالة بما يتناسب مع معاناتها"
    ],
    servicesEn: [
      "Rapid case diagnosis upon hospital arrival",
      "Gathering necessary information and data about the case",
      "Case study, analysis and report writing",
      "Counseling on handling the case (addiction, violence, unemployment, financial hardship)",
      "Developing a customized program for each case"
    ]
  },
  {
    slug: "kitchen-laundry",
    nameAr: "قسم المطبخ والمغسلة",
    nameEn: "Kitchen & Laundry Department",
    // Hospital kitchen / food service
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=600&fit=crop",
    doctorDeptId: null,
    descriptionAr: "يخضع قسم المطعم بالكامل إلى إشراف قسم التغذية العلاجية بالمستشفى وتم وضع سياسة داخلية مع إجراءات مكتوبة ومعتمدة تحدد بالتفصيل مهام ومسئوليات جميع العاملين بالقسم. يتم الإشراف على إعداد وتقديم الوجبات المقننة للمرضى حسب حالتهم الصحية، كما تعمل الكافيتيريا 24 ساعة لتقديم أي مشروبات أو احتياجات غذائية سريعة للزائرين. وتقوم المغسلة بتلبية احتياجات أقسام التمريض والتنويم وتطبيق بروتوكولات مكافحة العدوى كاملة.",
    descriptionEn: "The restaurant is fully supervised by the hospital's therapeutic nutrition department, with written and approved internal policies detailing all staff responsibilities. Regulated meals are prepared and served to patients according to their health condition, and the cafeteria operates 24 hours for visitors. The laundry serves nursing and inpatient departments with full infection control protocols.",
    unitsAr: [
      "وحدة إعداد وجبات المرضى المقننة",
      "كافيتيريا (24 ساعة)",
      "وحدة المغسلة ومكافحة العدوى"
    ],
    unitsEn: [
      "Patient Regulated Meals Unit",
      "Cafeteria (24 hours)",
      "Laundry & Infection Control Unit"
    ]
  },
  {
    slug: "labor-examination",
    nameAr: "مركز فحص العمالة",
    nameEn: "Labor Examination Center",
    // Medical check / health certificate
    image: "https://images.unsplash.com/photo-1576669801775-ff43c5ab079d?w=1200&h=600&fit=crop",
    doctorDeptId: null,
    descriptionAr: "يأتي مركز فحص العمالة في مستشفى تخصصي نجران ليكمل منظومتنا في تكامل تقديم الخدمات الطبية لأهالي منطقة نجران سواء الشركات أو المؤسسات العاملة في استقدام العمالة الأجنبية أو الأفراد في منازلهم.",
    descriptionEn: "The Labor Examination Center at Najran Specialist Hospital completes our integrated medical services for the Najran community, serving companies, institutions, and individuals.",
    unitsAr: [],
    unitsEn: [],
    servicesAr: [
      "فحص طبي لإصدار الإقامة (رجال)",
      "فحص طبي لإصدار الإقامة (نساء)",
      "فحص الشهادات الصحية (شامل ترخيص بلدي)",
      "فحص الشهادات الصحية",
      "فحص رخصة القيادة",
      "فحص (تجديد إقامة)",
      "فحص العمالة الخاصة والمنزلية",
      "فحص مندوبي توصيل الطلبات"
    ],
    servicesEn: [
      "Medical examination for residency issuance (men)",
      "Medical examination for residency issuance (women)",
      "Health certificate examination (including municipal license)",
      "Health certificate examination",
      "Driving license examination",
      "Residency renewal examination",
      "Private and domestic labor examination",
      "Delivery personnel examination"
    ]
  },
  {
    slug: "home-healthcare",
    nameAr: "مركز الرعاية الصحية المنزلية",
    nameEn: "Home Healthcare Center",
    // Nurse visiting patient at home
    image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=1200&h=600&fit=crop",
    doctorDeptId: null,
    descriptionAr: "يقوم فريق الرعاية الصحية المنزلية بالمستشفى بتقديم رعاية آمنة في منزل المريض مع وجود عائلته، مع توفر فريق طبي كامل وخدمة تواصل مستمرة على الرقم الموحد 920002159.",
    descriptionEn: "The hospital's home healthcare team provides safe care in the patient's home with their family, with a complete medical team and continuous communication service via the unified number 920002159.",
    unitsAr: [],
    unitsEn: [],
    servicesAr: [
      "الرعاية التمريضية المنزلية",
      "التأهيل والعلاج الطبيعي المنزلي",
      "خدمات التغذية المنزلية (العلاج الوريدي – أنابيب التغذية المعوية)",
      "أخذ العينات للتحاليل المخبرية",
      "العناية بمرضى القسطرة البولية",
      "خدمة الإسعاف على مدار الساعة",
      "خدمة التواصل على الرقم الموحد 920002159"
    ],
    servicesEn: [
      "Home nursing care",
      "Home rehabilitation and physiotherapy",
      "Home nutrition services (IV therapy – enteral feeding tubes)",
      "Sample collection for lab tests",
      "Urinary catheter patient care",
      "24/7 ambulance service",
      "Communication via unified number 920002159"
    ]
  },
  {
    slug: "toxicology",
    nameAr: "مركز فحص السموم والمخدرات",
    nameEn: "Toxins & Drugs Examination Center",
    // Lab / toxicology testing
    image: "https://static.vecteezy.com/system/resources/thumbnails/014/030/740/original/hand-with-syringe-a-lot-of-pills-spread-out-video.jpg",
    doctorDeptId: null,
    descriptionAr: "يعد مركز فحص السموم والمخدرات بمستشفى تخصصي نجران المركز الوحيد المعتمد من وزارة الصحة في منطقة نجران للكشف عن السموم باستخدام نظام (أوتار) وهو أحدث الأنظمة الآلية للكشف عن العينات بشكل إلكتروني.",
    descriptionEn: "The Toxins and Drugs Examination Center at Najran Specialist Hospital is the only center accredited by the Ministry of Health in the Najran region to detect toxins using the (OTHAR) system — the latest automated electronic detection system.",
    unitsAr: [],
    unitsEn: [],
    servicesAr: [
      "الفحوصات الأولية للمخدرات والمؤثرات العقلية للموظفين",
      "التسجيل والتوثيق الآلي لجميع إجراءات العمل والنتائج",
      "التبليغ بنتائج التحليل بطريقة سلسة وآمنة ودقيقة",
      "ضمان سرية المعلومات",
      "المساهمة في التعليم والتثقيف الطبي والتوعية المجتمعية"
    ],
    servicesEn: [
      "Initial drug and psychotropic substance tests for employees",
      "Automated registration and documentation of all procedures",
      "Safe, accurate, seamless reporting of results",
      "Confidentiality guaranteed",
      "Medical education and community awareness"
    ]
  },
  {
    slug: "work-injuries",
    nameAr: "مركز إصابات العمل",
    nameEn: "Work Injuries Center",
    // Worker injury / occupational health
    image: "https://tse3.mm.bing.net/th/id/OIP.TC6fUJ70moAdWPNQG1jDJQHaEK?w=2560&h=1440&rs=1&pid=ImgDetMain&o=7&rm=3",
    doctorDeptId: null,
    descriptionAr: "يتوفر بالمستشفى مركز خاص لاستقبال إصابات العمل ومساعدة المصاب بإبلاغ مكتب المؤسسة العامة للتأمينات والقيام بكافة إجراءات التشخيص وبروتوكولات العلاج والتقارير الطبية الدقيقة.",
    descriptionEn: "The hospital has a dedicated center for receiving work injuries, helping the injured notify GOSI and completing all diagnosis, treatment protocols and accurate medical reports.",
    unitsAr: [],
    unitsEn: [],
    servicesAr: [
      "إصابات أثناء طريقه من مسكنه إلى مقر عمله أو العكس",
      "إصابات أثناء العمل أو بسببه",
      "إصابات أثناء تنقله لأداء مهمة كلفه بها صاحب العمل",
      "الإصابة بمرض مهني نتيجة العمل (عوامل فيزيائية، كيميائية، حيوية)",
      "أمراض الجهاز التنفسي المهنية",
      "أمراض الجلد المهنية",
      "اعتلالات الجهاز العضلي الهيكلي المرتبطة بالعمل",
      "الأمراض المهنية السرطانية"
    ],
    servicesEn: [
      "Injuries on the way to or from work",
      "Injuries during work or due to it",
      "Injuries during travel for an employer-assigned task",
      "Occupational disease (physical, chemical, biological factors)",
      "Occupational respiratory diseases",
      "Occupational skin diseases",
      "Work-related musculoskeletal disorders",
      "Occupational cancer diseases"
    ]
  },
  {
    slug: "remote-clinics",
    nameAr: "عيادات الأماكن النائية والمصانع",
    nameEn: "Remote Area & Factory Clinics",
    // Field clinic / remote medical camp
    image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=1200&h=600&fit=crop",
    doctorDeptId: null,
    descriptionAr: "حرصاً من المستشفى على خدمة الأهداف التنموية للقطاعات الصناعية المختلفة وخاصة في أماكن تبعد عن المستشفيات، فقد قامت المستشفى بتوفير مركز وإدارة مستقلة لتقديم الخدمات الطبية الطارئة والعلاجية بشكل ثابت ومستمر في تلك الأماكن سواء للشركات أو المصانع أو مواقع التعدين.",
    descriptionEn: "In support of the industrial sector's developmental goals — especially in remote areas far from hospitals — the hospital established an independent center to provide consistent emergency and therapeutic medical services to companies, factories, and mining sites.",
    unitsAr: [
      "عيادات الشركات والمصانع",
      "عيادات مواقع التعدين",
      "وحدة الخدمات الطبية الطارئة الميدانية"
    ],
    unitsEn: [
      "Company & Factory Clinics",
      "Mining Site Clinics",
      "Field Emergency Medical Services Unit"
    ]
  },
  {
    slug: "inpatient-wards",
    nameAr: "أجنحة التنويم والإقامة",
    nameEn: "Inpatient & Accommodation Wards",
    // Comfortable hospital room / suite
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=600&fit=crop",
    doctorDeptId: null,
    descriptionAr: "تتنوع أجنحة التنويم والإقامة في مستشفى تخصصي نجران بين العادية والمتميزة وأيضاً الملكية ويتوفر لكل منها ما يميزها من توفر سبل الراحة للمرضى ومرافقيهم. كما تتميز أجنحة التنويم لدينا بتوفير بيئة مماثلة لمنزل المراجع وذلك لمنحه مزيداً من الراحة النفسية أثناء تلقي العلاج.",
    descriptionEn: "Inpatient wards at Najran Specialist Hospital range from standard to premium and royal suites, each offering comfort amenities for patients and companions. Our wards provide a home-like environment to give patients greater psychological comfort during treatment.",
    unitsAr: [
      "الأجنحة العادية",
      "الأجنحة المتميزة",
      "الأجنحة الملكية"
    ],
    unitsEn: [
      "Standard Wards",
      "Premium Wards",
      "Royal Suites"
    ],
    servicesAr: [
      "مداخل خاصة مخصصة لكل جناح",
      "صالات مجهزة لاستقبال ضيوف وزوار المريض",
      "أفضل الأسرّة الطبية الأمريكية والأثاث الفاخر",
      "دورة مياه منفصلة بكل جناح",
      "أجهزة رفاهية كهربائية متكاملة",
      "كافيتيريا تعمل 24 ساعة للزوار"
    ],
    servicesEn: [
      "Dedicated private entrances for each ward",
      "Equipped lounges for patient visitors and guests",
      "Premium American medical beds and luxury furniture",
      "Separate bathroom in each ward",
      "Full electrical comfort appliances",
      "24-hour cafeteria for visitors"
    ]
  }
];
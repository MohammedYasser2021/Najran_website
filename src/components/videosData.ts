/**
 * ============================================================
 *  ملف الفيديوهات — فيديو جديد = أضف Object هنا وخلاص ✅
 * ============================================================
 *
 *  الخطوات:
 *  1) حط ملف الفيديو في:        src/assets/videos/
 *     وصورة الغلاف (اختياري) في: src/assets/videos/posters/
 *  2) فوق في الـ imports أضف سطر استيراد للفيديو (والغلاف).
 *  3) أضف Object جديد في المصفوفة تحت.
 *
 *  الحقول:
 *   id     : رقم أو نص فريد (ما يتكررش)
 *   title  : العنوان { ar, en }
 *   desc   : وصف قصير { ar, en }  (اختياري)
 *   video  : الفيديو المستورد، أو لينك يوتيوب كامل، أو لينك mp4 خارجي
 *   poster : صورة الغلاف المستوردة (اختياري — بتخلي الصفحة أخف وأسرع بكتير)
 *
 *  الترتيب: زي ما هو مكتوب هنا (الأول يظهر الأول).
 *  عشان فيديو جديد يظهر في الأول، حطه على رأس المصفوفة.
 */

// @ts-ignore
import vid1 from '../assets/videos/vid1.mp4';
// @ts-ignore
import poster1 from '../assets/videos/posters/vid1.jpg';
// @ts-ignore
import vid2 from '../assets/videos/vid2.mp4';
// @ts-ignore
import poster2 from '../assets/videos/posters/vid2.jpg';
// @ts-ignore
import vid3 from '../assets/videos/vid3.mp4';
// @ts-ignore
import poster3 from '../assets/videos/posters/vid3.jpg';
// @ts-ignore
import vid5 from '../assets/videos/vid5.mp4';
// @ts-ignore
import poster5 from '../assets/videos/posters/vid5.jpg';
// @ts-ignore
import vid6 from '../assets/videos/vid6.mp4';
// @ts-ignore
import poster6 from '../assets/videos/posters/vid6.jpg';
// @ts-ignore
import vid7 from '../assets/videos/vid7.mp4';
// @ts-ignore
import poster7 from '../assets/videos/posters/vid7.jpg';
// @ts-ignore
import vid8 from '../assets/videos/vid8.mp4';
// @ts-ignore
import poster8 from '../assets/videos/posters/vid8.jpg';
// @ts-ignore
import vid9 from '../assets/videos/vid9.mp4';
// @ts-ignore
import poster9 from '../assets/videos/posters/vid9.jpg';
// @ts-ignore
import vid10 from '../assets/videos/vid10.mp4';
// @ts-ignore
import poster10 from '../assets/videos/posters/vid10.jpg';
// @ts-ignore
import vid11 from '../assets/videos/vid11.mp4';
// @ts-ignore
import poster11 from '../assets/videos/posters/vid11.jpg';

export interface VideoItem {
  id: number | string;
  title: { ar: string; en: string };
  desc?: { ar: string; en: string };
  video: string;
  poster?: string;
}

export const videos: VideoItem[] = [
  {
    id: 2,
    title: { ar: 'حملة التوعية بسرطان الثدي — أكتوبر', en: 'October Breast Cancer Awareness Month' },
    desc: {
      ar: 'مبادرة توعوية من مستشفى تخصصي نجران للتوعية بأهمية الكشف المبكر عن سرطان الثدي.',
      en: 'An awareness initiative by Specialized Najran Hospital highlighting the importance of early breast cancer detection.',
    },
    video: vid2,
    poster: poster2,
  },
  {
    id: 5,
    title: { ar: 'سرطان الثدي: الأعراض وعوامل الخطورة', en: 'Breast Cancer: Symptoms and Risk Factors' },
    desc: {
      ar: 'يتحدث د. عبدالرحمن العمري، استشاري جراحات السمنة والمناظير والغدد الصماء وجراحات الثدي، عن أعراض سرطان الثدي وعوامل الخطورة.',
      en: 'Dr. Abdulrahman Al-Omari, Consultant in Obesity, Laparoscopic, Endocrine and Breast Surgery, talks about the symptoms and risk factors of breast cancer.',
    },
    video: vid5,
    poster: poster5,
  },
  {
    id: 1,
    title: { ar: 'د. عبدالرحمن العمري', en: 'Dr. Abdulrahman Al-Omari' },
    desc: {
      ar: 'استشاري جراحات السمنة والمناظير والغدد الصماء وجراحات الثدي.',
      en: 'Consultant in Obesity, Laparoscopic, Endocrine and Breast Surgery.',
    },
    video: vid1,
    poster: poster1,
  },
  {
    id: 10,
    title: { ar: 'د. عفيص دكام آل صليع', en: 'Dr. Afees Dukam Al Saleea' },
    desc: {
      ar: 'استشاري جراحة الأوعية الدموية والقسطرة المتقدمة.',
      en: 'Consultant in Vascular Surgery and Advanced Catheterization.',
    },
    video: vid10,
    poster: poster10,
  },

  {
    id: 3,
    title: { ar: 'اسأل أجاوب: آلام الرقبة', en: 'Ask & Answer: Neck Pain' },
    desc: {
      ar: 'لقاء مع أخصائية العلاج الطبيعي للإجابة عن أسئلة المرضى حول آلام الرقبة.',
      en: 'A physiotherapy specialist answers patients\' questions about neck pain.',
    },
    video: vid3,
    poster: poster3,
  },
  {
    id: 8,
    title: { ar: 'اسأل أجاوب: التنميل', en: 'Ask & Answer: Numbness' },
    desc: {
      ar: 'لقاء مع أخصائية العلاج الطبيعي للإجابة عن أسئلة المرضى حول التنميل.',
      en: 'A physiotherapy specialist answers patients\' questions about numbness.',
    },
    video: vid8,
    poster: poster8,
  },
  {
    id: 7,
    title: { ar: 'فعالية الإسعافات الأولية والإنعاش القلبي الرئوي', en: 'First Aid & CPR Awareness Event' },
    desc: {
      ar: 'فعالية توعوية وتدريبية على الإسعافات الأولية والإنعاش القلبي الرئوي بمشاركة الهلال الأحمر.',
      en: 'An awareness and training event on first aid and CPR, with the participation of the Saudi Red Crescent.',
    },
    video: vid7,
    poster: poster7,
  },
  {
    id: 6,
    title: { ar: 'حملة التوعية بمكافحة العدوى', en: 'Infection Control Awareness Campaign' },
    desc: {
      ar: 'فعالية توعوية بمكافحة العدوى وسلامة المرضى والعاملين داخل المستشفى.',
      en: 'An awareness event on infection control and the safety of patients and staff inside the hospital.',
    },
    video: vid6,
    poster: poster6,
  },
  {
    id: 11,
    title: { ar: 'من داخل أكاديمية تخصصي نجران الصحية', en: 'Inside the Najran Specialist Hospital Health Academy' },
    desc: {
      ar: 'لقطات من فعالية تدريبية في أكاديمية مستشفى تخصصي نجران الصحية.',
      en: 'Highlights from a training event at the Najran Specialist Hospital Health Academy.',
    },
    video: vid11,
    poster: poster11,
  },
  {
    id: 9,
    title: { ar: 'كلمة شكر من أحد مرضانا', en: 'A Thank-You Message from One of Our Patients' },
    desc: {
      ar: 'أحد مرضى المستشفى يشاركنا تجربته ويوجّه كلمة شكر لفريق الرعاية.',
      en: 'A patient shares his experience and thanks the care team.',
    },
    video: vid9,
    poster: poster9,
  },
];

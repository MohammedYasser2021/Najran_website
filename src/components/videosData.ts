/**
 * ============================================================
 *  ملف الفيديوهات — فيديو جديد = أضف Object هنا وخلاص ✅
 * ============================================================
 *
 *  الخطوات:
 *  1) حط ملف الفيديو في:  src/assets/videos/
 *  2) فوق في الـ imports أضف سطر استيراد للفيديو الجديد (زي vid1 و vid2).
 *  3) أضف Object جديد في المصفوفة تحت وخلي video: اسم المتغير اللي استوردته.
 *
 *  الحقول:
 *   id     : رقم أو نص فريد (ما يتكررش)
 *   title  : العنوان { ar, en }
 *   desc   : وصف قصير { ar, en }  (اختياري)
 *   video  : الفيديو المستورد، أو لينك يوتيوب كامل، أو لينك mp4 خارجي
 *
 *  الترتيب: زي ما هو مكتوب هنا (الأول يظهر الأول).
 *  عشان فيديو جديد يظهر في الأول، حطه على رأس المصفوفة.
 */

// @ts-ignore
import vid1 from '../assets/vid1.mp4';
// @ts-ignore
import vid2 from '../assets/vid2.mp4';

export interface VideoItem {
  id: number | string;
  title: { ar: string; en: string };
  desc?: { ar: string; en: string };
  video: string;
}

export const videos: VideoItem[] = [
  {
    id: 2,
    title: {
      ar: 'حملة التوعية بسرطان الثدي — أكتوبر',
      en: 'October Breast Cancer Awareness Month',
    },
    desc: {
      ar: 'مبادرة توعوية من مستشفى تخصصي نجران للتوعية بأهمية الكشف المبكر عن سرطان الثدي.',
      en: 'An awareness initiative by Specialized Najran Hospital highlighting the importance of early breast cancer detection.',
    },
    video: vid2,
  },
  {
    id: 1,
    title: {
      ar: 'د. عبدالرحمن العمري',
      en: 'Dr. Abdulrahman Al-Omari',
    },
    desc: {
      ar: 'استشاري جراحات السمنة والمناظير والغدد الصماء وجراحات الثدي.',
      en: 'Consultant in Obesity, Laparoscopic, Endocrine and Breast Surgery.',
    },
    video: vid1,
  },
];

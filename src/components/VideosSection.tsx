import React, { useEffect, useRef, useState } from 'react';
import { videos } from './videosData';

interface VideosSectionProps {
  currentLang: string;
}

const content = {
  ar: {
    sectionLabel: 'عدسة تخصصي نجران',
    subtitle: 'لقاءات وحملات توعوية ومبادرات من قلب المستشفى',
    nowPlaying: 'يعرض الآن',
    playlist: 'قائمة الفيديوهات',
    of: 'من',
  },
  en: {
    sectionLabel: 'Najran Lens',
    subtitle: 'Interviews, awareness campaigns and initiatives from inside the hospital',
    nowPlaying: 'Now playing',
    playlist: 'Playlist',
    of: 'of',
  },
};

const ACCENT = '#1787b6';
const PULSE_PATH =
  'M 0,30 L 105,30 L 112,30 L 117,22 L 122,30 L 128,30 L 133,10 L 141,50 L 150,5 L 158,50 L 165,30 L 170,30 L 175,22 L 180,30 L 300,30';

const getYouTubeId = (url: string): string | null => {
  const m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
  return m ? m[1] : null;
};

const formatTime = (s: number) => {
  if (!isFinite(s) || s <= 0) return '';
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, '0')}`;
};

const PlayIcon = ({ size = 30 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" style={{ marginInlineStart: 3 }}>
    <path d="M8 5v14l11-7z" />
  </svg>
);

const Thumb: React.FC<{
  src: string;
  poster?: string;
  onDuration?: (d: number) => void;
  fit?: 'cover' | 'contain';
}> = ({ src, poster, onDuration, fit = 'cover' }) => {
  const yt = getYouTubeId(src);
  const base: React.CSSProperties = { width: '100%', height: '100%', objectFit: fit, objectPosition: 'center 20%' };

  // لو فيه صورة غلاف (poster) بنستخدمها — أخف وأسرع بكتير من تحميل الفيديو نفسه
  if (poster || yt) {
    return (
      <>
        <img src={poster || `https://i.ytimg.com/vi/${yt}/hqdefault.jpg`} alt="" loading="lazy" style={base} />
        {/* المدة: بنجيبها من الميتاداتا بدون ما نحمّل الفيديو كله */}
        {!yt && onDuration && (
          <video
            src={src}
            preload="metadata"
            muted
            onLoadedMetadata={(e) => onDuration(e.currentTarget.duration)}
            style={{ display: 'none' }}
          />
        )}
      </>
    );
  }
  return (
    <video
      src={`${src}#t=0.5`}
      preload="metadata"
      muted
      playsInline
      onLoadedMetadata={(e) => onDuration && onDuration(e.currentTarget.duration)}
      style={{ ...base, pointerEvents: 'none' }}
    />
  );
};

const VideosSection: React.FC<VideosSectionProps> = ({ currentLang }) => {
  const isAr = currentLang === 'ar';
  const t = content[isAr ? 'ar' : 'en'];

  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive] = useState(0);
  const [started, setStarted] = useState(false); // false = غلاف + زرار تشغيل، true = الفيديو شغال
  const [durations, setDurations] = useState<Record<string, number>>({});
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  if (videos.length === 0) return null;

  const cur = videos[active] || videos[0];
  const curYt = getYouTubeId(cur.video);
  const curTitle = isAr ? cur.title.ar : cur.title.en;
  const curDesc = cur.desc ? (isAr ? cur.desc.ar : cur.desc.en) : '';

  const select = (i: number) => {
    setActive(i);
    setStarted(true); // المستخدم داس بنفسه، فالتشغيل التلقائي مسموح
  };

  return (
    <section
      ref={sectionRef}
      dir={isAr ? 'rtl' : 'ltr'}
      style={{
        padding: '80px 0',
        background: 'linear-gradient(160deg, #0d2137 0%, #123552 55%, #0d2137 100%)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <style>{`
        .vs-layout { display: grid; grid-template-columns: minmax(0, 1.9fr) minmax(0, 1fr); gap: 28px; align-items: start; }
        @media (max-width: 900px) { .vs-layout { grid-template-columns: minmax(0, 1fr); } }
        .vs-list::-webkit-scrollbar { width: 6px; }
        .vs-list::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 6px; }
      `}</style>

      <div style={{ position: 'absolute', top: -120, right: -120, width: 320, height: 320, borderRadius: '50%', background: `${ACCENT}22`, filter: 'blur(60px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -120, left: -120, width: 320, height: 320, borderRadius: '50%', background: `${ACCENT}1a`, filter: 'blur(60px)', pointerEvents: 'none' }} />

      <div className="container mx-auto px-4 max-w-7xl" style={{ position: 'relative' }}>
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '48px',
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.6s ease',
          }}
        >
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 50px)', fontWeight: 800, color: '#ffffff', margin: '0 0 16px' }}>
            {t.sectionLabel}
          </h2>

          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <svg viewBox="0 0 300 60" width="300" height="60" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="glow-vid">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <mask id="reveal-vid">
                  <rect x="0" y="0" width="300" height="60" fill="white">
                    <animate attributeName="x" from="-300" to="300" dur="2.8s" repeatCount="indefinite" />
                  </rect>
                </mask>
              </defs>
              <line x1="0" y1="30" x2="300" y2="30" stroke="#1787b6" strokeWidth="0.5" strokeOpacity="0.3" />
              <path d={PULSE_PATH} fill="none" stroke="#1787b6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" filter="url(#glow-vid)" mask="url(#reveal-vid)" />
              <circle r="4" fill="#1787b6" filter="url(#glow-vid)">
                <animateMotion dur="2.8s" repeatCount="indefinite" path={PULSE_PATH} />
              </circle>
            </svg>
          </div>

          <p style={{ fontSize: '17px', fontWeight: 700, color: '#6cc3e6', margin: 0 }}>{t.subtitle}</p>
        </div>

        {/* Player + Playlist */}
        <div
          className="vs-layout"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s ease 0.15s',
          }}
        >
          {/* ---- Main player ---- */}
          <div
            style={{
              background: '#0a1a2b',
              borderRadius: '24px',
              overflow: 'hidden',
              border: `1px solid ${ACCENT}44`,
              boxShadow: '0 25px 60px rgba(0,0,0,0.45)',
            }}
          >
            <div style={{ position: 'relative', aspectRatio: '16 / 9', background: '#000' }}>
              {started ? (
                curYt ? (
                  <iframe
                    key={cur.id}
                    src={`https://www.youtube.com/embed/${curYt}?autoplay=1&rel=0`}
                    title={curTitle}
                    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                    style={{ width: '100%', height: '100%', border: 'none' }}
                  />
                ) : (
                  <video
                    key={cur.id}
                    src={cur.video}
                    controls
                    autoPlay
                    playsInline
                    style={{ width: '100%', height: '100%', background: '#000' }}
                  />
                )
              ) : (
                <button
                  onClick={() => setStarted(true)}
                  aria-label="Play"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 'none', padding: 0, cursor: 'pointer', background: '#000' }}
                >
                  <Thumb src={cur.video} poster={cur.poster} fit="contain" />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(13,33,55,0.65), rgba(13,33,55,0.1) 60%)' }} />
                  <span
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: 86,
                      height: 86,
                      borderRadius: '50%',
                      background: ACCENT,
                      color: '#fff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 0 0 10px ${ACCENT}44, 0 12px 34px rgba(0,0,0,0.5)`,
                    }}
                  >
                    <PlayIcon size={36} />
                  </span>
                </button>
              )}
            </div>

            <div style={{ padding: '22px 28px 26px' }}>
              <span style={{ display: 'inline-block', color: '#6cc3e6', fontSize: 12, fontWeight: 700, letterSpacing: 1, marginBottom: 8 }}>
                {active + 1} {t.of} {videos.length}
              </span>
              <h3 style={{ color: '#fff', fontSize: 'clamp(20px, 2.4vw, 26px)', fontWeight: 800, margin: '0 0 10px', lineHeight: 1.5 }}>
                {curTitle}
              </h3>
              {curDesc && <p style={{ color: '#a9bccd', fontSize: 15, lineHeight: 1.9, margin: 0 }}>{curDesc}</p>}
            </div>
          </div>

          {/* ---- Playlist ---- */}
          <div
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '24px',
              padding: '18px',
              backdropFilter: 'blur(6px)',
            }}
          >
            <div style={{ color: '#fff', fontWeight: 800, fontSize: 16, margin: '4px 6px 14px', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 4, height: 18, borderRadius: 2, background: ACCENT, display: 'inline-block' }} />
              {t.playlist}
            </div>

            <div className="vs-list" style={{ display: 'flex', flexDirection: 'column', gap: 12, maxHeight: 460, overflowY: 'auto', paddingInlineEnd: 4 }}>
              {videos.map((v, i) => {
                const isActive = i === active;
                const title = isAr ? v.title.ar : v.title.en;
                const dur = formatTime(durations[String(v.id)] || 0);
                return (
                  <button
                    key={v.id}
                    onClick={() => select(i)}
                    style={{
                      display: 'flex',
                      gap: 12,
                      alignItems: 'center',
                      textAlign: isAr ? 'right' : 'left',
                      padding: 10,
                      borderRadius: 16,
                      cursor: 'pointer',
                      border: `1.5px solid ${isActive ? ACCENT : 'transparent'}`,
                      background: isActive ? `${ACCENT}26` : 'rgba(255,255,255,0.04)',
                      transition: 'all 0.25s ease',
                    }}
                  >
                    <div style={{ position: 'relative', flex: '0 0 128px', aspectRatio: '16 / 9', borderRadius: 10, overflow: 'hidden', background: '#000' }}>
                      <Thumb src={v.video} poster={v.poster} onDuration={(d) => setDurations((p) => ({ ...p, [String(v.id)]: d }))} />
                      <span style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.25)', color: '#fff' }}>
                        <PlayIcon size={22} />
                      </span>
                      {dur && (
                        <span dir="ltr" style={{ position: 'absolute', bottom: 4, [isAr ? 'left' : 'right']: 4, background: 'rgba(0,0,0,0.75)', color: '#fff', fontSize: 10, fontWeight: 700, padding: '1px 6px', borderRadius: 10 }}>
                          {dur}
                        </span>
                      )}
                    </div>
                    <div style={{ minWidth: 0, flex: 1 }}>
                      {isActive && (
                        <span style={{ display: 'block', color: '#6cc3e6', fontSize: 11, fontWeight: 700, marginBottom: 3 }}>● {t.nowPlaying}</span>
                      )}
                      <span
                        style={{
                          color: '#fff',
                          fontSize: 14,
                          fontWeight: 700,
                          lineHeight: 1.6,
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {title}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideosSection;

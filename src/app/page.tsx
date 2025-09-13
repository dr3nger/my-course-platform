// src/app/page.tsx

import VideoPlayer from './components/MuxPlayer';

export default function HomePage() {
  // تذكر أن تغير هذا الـ ID إلى الـ Playback ID الخاص بالفيديو الذي رفعته على Mux
  const myLessonVideoId = "JkPaYxX8RDIKgxFXzZdQROn9WOTBVyTbVxpyn4Z7zcs";

  return (
    <main style={{ maxWidth: '800px', margin: 'auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
        مرحبًا بك في منصة الكورسات
      </h1>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
        الدرس الأول
      </h2>

      {/* مشغل الفيديو من Mux */}
      <VideoPlayer playbackId={myLessonVideoId} />

      <p style={{ marginTop: '1.5rem', lineHeight: '1.6' }}>
        هذا هو شرح الدرس الأول. الفيديو أعلاه يتم بثه بشكل آمن من Mux.
      </p>
    </main>
  );
}
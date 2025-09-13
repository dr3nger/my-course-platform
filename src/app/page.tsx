// src/app/page.tsx

import VideoPlayer from './components/MuxPlayer';

export default function HomePage() {
  // تم وضع الـ ID الخاص بك هنا
  const myLessonVideoId = "JkPaYxX8RDIKgxFXzZdQROn9WOTBVyTbVxpyn4Z7zcs";

  return (
    <main style={{ maxWidth: '800px', margin: 'auto', padding: '20px', fontFamily: 'sans-serif', backgroundColor: '#f0f2f5', minHeight: '100vh' }}>
      <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          مرحبًا بك في منصة الكورسات
        </h1>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '0.5rem' }}>
          الدرس الأول
        </h2>

        {/* مشغل الفيديو من Mux */}
        <div style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)' }}>
          <VideoPlayer playbackId={myLessonVideoId} />
        </div>

        <p style={{ marginTop: '1.5rem', lineHeight: '1.6', color: '#333' }}>
          هذا هو شرح الدرس الأول. الفيديو أعلاه يتم بثه بشكل آمن من Mux.
        </p>
      </div>
    </main>
  );
}
export default function CSLessons() {
  const lessons = [
    { chapter: 1, title: 'อัลกอริทึม (Algorithm)', desc: 'เรียนรู้การจัดลำดับขั้นตอนและการวางแผนเส้นทางเพื่อแก้ปัญหา' },
    { chapter: 2, title: 'ผังงาน (Flowchart)', desc: 'การใช้สัญลักษณ์เพื่อเขียนผังงานแสดงลำดับขั้นตอน' },
    { chapter: 3, title: 'การเขียนโปรแกรม', desc: 'ทดลองเขียนโปรแกรมแบบบล็อกคำสั่ง (Blockly) ควบคุมตัวละคร' },
    { chapter: 4, title: 'ข้อมูลและสารสนเทศ', desc: 'การประมวลผล การวิเคราะห์ข้อมูล และการค้นหาคำตอบ' },
    { chapter: 5, title: 'เทคโนโลยีอย่างปลอดภัย', desc: 'เรียนรู้การใช้สื่อดิจิทัลและอินเทอร์เน็ตอย่างปลอดภัย' },
  ];

  return (
    <div className="animate-fade-in">
      <h1 className="title text-gradient">วิทยาการคำนวณ ม.3</h1>
      <p className="subtitle">บทเรียนเพื่อพัฒนาทักษะการคิดเชิงคำนวณและการแก้ปัญหา</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
        {lessons.map((lesson) => (
          <div key={lesson.chapter} className="glass-panel" style={{ padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div style={{
              background: 'linear-gradient(45deg, var(--primary-color), var(--secondary-color))',
              width: '80px',
              height: '80px',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              fontWeight: 'bold',
              boxShadow: '0 4px 15px rgba(255, 0, 122, 0.3)'
            }}>
              {lesson.chapter}
            </div>
            <div>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-color)' }}>
                บทที่ {lesson.chapter}: {lesson.title}
              </h2>
              <p style={{ color: 'var(--text-muted)' }}>{lesson.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

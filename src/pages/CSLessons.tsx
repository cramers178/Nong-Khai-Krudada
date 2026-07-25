import { useState } from 'react';
import { useGame } from '../context/GameContext';
import AlgorithmPuzzle from '../components/AlgorithmPuzzle';
import Quiz from '../components/Quiz';
import MemoryGame from '../components/MemoryGame';

const lessons = [
  { id: 1, title: 'บทที่ 1: อัลกอริทึม (Algorithm)', description: 'เรียนรู้ลำดับขั้นตอนการแก้ปัญหา' },
  { id: 2, title: 'บทที่ 2: ผังงาน (Flowchart)', description: 'การเขียนผังงานเพื่ออธิบายกระบวนการ' },
  { id: 3, title: 'บทที่ 3: การเขียนโปรแกรมเบื้องต้น', description: 'คำสั่งพื้นฐานและการทำงานแบบมีเงื่อนไข' },
  { id: 4, title: 'บทที่ 4: ข้อมูลและสารสนเทศ', description: 'การจัดการข้อมูลและการประมวลผล' },
  { id: 5, title: 'บทที่ 5: เทคโนโลยีอย่างปลอดภัย', description: 'การใช้อินเทอร์เน็ตอย่างรู้เท่าทันและปลอดภัย' },
];

export default function CSLessons() {
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);
  const { addScore } = useGame();
  const [completed, setCompleted] = useState<number[]>([]);

  const handleComplete = (lessonId: number) => {
    if (!completed.includes(lessonId)) {
      setCompleted([...completed, lessonId]);
      addScore(10);
    }
    setTimeout(() => setSelectedLesson(null), 2000);
  };

  const renderLessonContent = () => {
    switch(selectedLesson) {
      case 1:
        return (
          <div>
            <h3>แบบทดสอบ: จัดเรียงขั้นตอนการต้มบะหมี่กึ่งสำเร็จรูป</h3>
            <AlgorithmPuzzle 
              initialSteps={[
                { id: 'c', text: 'ใส่เส้นบะหมี่และเครื่องปรุง' },
                { id: 'b', text: 'รอน้ำเดือด' },
                { id: 'a', text: 'ต้มน้ำในหม้อ' },
                { id: 'd', text: 'รอ 3 นาที พร้อมรับประทาน' }
              ]}
              correctOrder={['a', 'b', 'c', 'd']}
              onComplete={() => handleComplete(1)}
            />
          </div>
        );
      case 2:
        return (
          <div>
            <h3>แบบทดสอบ: ผังงาน (Flowchart)</h3>
            <Quiz 
              questions={[
                { id: 1, question: 'สัญลักษณ์รูปสี่เหลี่ยมผืนผ้าในผังงาน หมายถึงอะไร?', options: ['เริ่มต้น/สิ้นสุด', 'การปฏิบัติงาน/ประมวลผล', 'การตัดสินใจ', 'ทิศทาง'], correctIndex: 1 },
                { id: 2, question: 'สัญลักษณ์รูปสี่เหลี่ยมขนมเปียกปูน (ข้าวหลามตัด) หมายถึงอะไร?', options: ['การปฏิบัติงาน', 'รับข้อมูล/แสดงผลข้อมูล', 'การตัดสินใจ', 'จุดเชื่อมต่อ'], correctIndex: 2 }
              ]}
              onComplete={() => handleComplete(2)}
            />
          </div>
        );
      case 3:
        return (
          <div>
            <h3>แบบทดสอบ: จับคู่คำสั่งการเขียนโปรแกรม</h3>
            <MemoryGame onComplete={() => handleComplete(3)} />
          </div>
        );
      case 4:
        return (
          <div>
            <h3>แบบทดสอบ: ข้อมูลและสารสนเทศ</h3>
            <Quiz 
              questions={[
                { id: 1, question: 'ข้อใดคือข้อมูล (Data)?', options: ['รายงานสรุปยอดขาย', 'เกรดเฉลี่ยของนักเรียน', 'คะแนนสอบของนักเรียนแต่ละคน', 'พยากรณ์อากาศพรุ่งนี้'], correctIndex: 2 },
                { id: 2, question: 'สารสนเทศ (Information) เกิดจากอะไร?', options: ['ข้อมูลที่ผ่านการประมวลผลแล้ว', 'ข้อมูลดิบที่เพิ่งเก็บรวบรวมมา', 'รหัสผ่านเข้าเครื่องคอมพิวเตอร์', 'ตัวเลขเท่านั้น'], correctIndex: 0 }
              ]}
              onComplete={() => handleComplete(4)}
            />
          </div>
        );
      case 5:
        return (
          <div>
            <h3>แบบทดสอบ: สถานการณ์การใช้เทคโนโลยี</h3>
            <Quiz 
              questions={[
                { id: 1, question: 'ถ้ามีคนแปลกหน้าทักแชทมาขอรหัสผ่านเกมเพื่อเติมไอเทมให้ฟรี ควรทำอย่างไร?', options: ['ให้ไปเลย เพราะอยากได้ไอเทมฟรี', 'ถามชื่อจริงก่อนแล้วค่อยให้', 'ปฏิเสธและบล็อกทันที', 'ให้รหัสผ่านแต่เปลี่ยนรหัสผ่านทีหลัง'], correctIndex: 2 },
                { id: 2, question: 'ข้อใดเป็นการตั้งรหัสผ่านที่ดี?', options: ['12345678', 'วันเดือนปีเกิดตัวเอง', 'ชื่อเล่นตัวเอง', 'ประกอบด้วยตัวอักษรพิมพ์ใหญ่ พิมพ์เล็ก และตัวเลข'], correctIndex: 3 }
              ]}
              onComplete={() => handleComplete(5)}
            />
          </div>
        );
      default:
        return null;
    }
  };

  if (selectedLesson !== null) {
    const lesson = lessons.find(l => l.id === selectedLesson);
    return (
      <div className="glass-panel animate-fade-in" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ marginBottom: '1rem', color: 'var(--primary-color)' }}>{lesson?.title}</h2>
        <p style={{ marginBottom: '2rem' }}>{lesson?.description}</p>
        
        {renderLessonContent()}

        {completed.includes(selectedLesson) && (
          <div style={{ marginTop: '1rem', color: '#2ecc71', fontWeight: 'bold' }}>
            ✅ คุณผ่านบทเรียนนี้แล้ว! ได้รับคะแนน +10
          </div>
        )}

        <button className="btn-secondary" style={{ marginTop: '2rem' }} onClick={() => setSelectedLesson(null)}>
          กลับหน้าสารบัญ
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 className="title text-gradient" style={{ textAlign: 'center', marginBottom: '1rem' }}>บทเรียนวิทยาการคำนวณ ม.3</h1>
      <p style={{ textAlign: 'center', marginBottom: '3rem' }}>เลือกบทเรียนที่คุณต้องการศึกษาและทำแบบทดสอบเพื่อสะสมคะแนน</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {lessons.map((lesson) => (
          <div key={lesson.id} className="glass-panel hover-scale" style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{lesson.title} {completed.includes(lesson.id) ? '✅' : ''}</h3>
              <p style={{ color: 'var(--text-muted)' }}>{lesson.description}</p>
            </div>
            <button className="btn-primary" onClick={() => setSelectedLesson(lesson.id)}>
              เข้าเรียน
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

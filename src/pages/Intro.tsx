export default function Intro() {
  return (
    <div className="animate-fade-in glass-panel" style={{ padding: '3rem' }}>
      <h1 className="title text-gradient">บทนำ (Introduction)</h1>
      
      <div style={{ marginTop: '2rem', lineHeight: '1.8', fontSize: '1.1rem' }}>
        <h2 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>ความเป็นมา</h2>
        <p style={{ marginBottom: '2rem' }}>
          จังหวัดหนองคายเป็นจังหวัดที่มีเอกลักษณ์ด้านวัฒนธรรม ความเชื่อ และแหล่งท่องเที่ยวที่มีชื่อเสียง เช่น พญานาค ศาลาแก้วกู่ และผาตากเสื้อ ซึ่งเป็น Soft Power ที่สะท้อนอัตลักษณ์ของจังหวัดและสามารถส่งเสริมการท่องเที่ยว เศรษฐกิจ และการเรียนรู้ได้
        </p>

        <h2 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>ความสำคัญ</h2>
        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '2rem' }}>
          <li>ส่งเสริมการเรียนรู้ Soft Power จังหวัดหนองคาย</li>
          <li>ส่งเสริมการเรียนรู้ผ่านเกม (Game-Based Learning)</li>
          <li>บูรณาการกับรายวิชาวิทยาการคำนวณ ม.3</li>
          <li>ฝึกการคิดวิเคราะห์ การแก้ปัญหา และการวางแผน</li>
        </ul>

        <h2 style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>วัตถุประสงค์</h2>
        <ol style={{ paddingLeft: '2rem' }}>
          <li>เพื่อให้ผู้เรียนรู้จัก Soft Power จังหวัดหนองคาย</li>
          <li>เพื่อให้ผู้เรียนศึกษาประวัติของสถานที่สำคัญ</li>
          <li>เพื่อฝึกทักษะวิทยาการคำนวณผ่านเกม</li>
          <li>เพื่อสร้างความสนุกในการเรียนรู้</li>
        </ol>
      </div>
    </div>
  );
}

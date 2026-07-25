export default function SoftPower() {
  return (
    <div className="animate-fade-in">
      <h1 className="title text-gradient">เรียนรู้ Soft Power จังหวัดหนองคาย</h1>
      <p className="subtitle">เลือกสถานที่ที่คุณต้องการศึกษาประวัติศาสตร์และวัฒนธรรม</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        {/* Naga */}
        <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🐉</div>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>ตำนานพญานาค</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', textAlign: 'left' }}>
            ศึกษาความเชื่อเกี่ยวกับพญานาค ตำนานบั้งไฟพญานาค และความสำคัญที่มีต่อวิถีชีวิตชาวหนองคาย
          </p>
          <button className="btn-secondary" style={{ width: '100%' }}>อ่านเพิ่มเติม</button>
        </div>

        {/* Wat Kaeo Ku */}
        <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🛕</div>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>ศาลาแก้วกู่</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', textAlign: 'left' }}>
            อุทยานเทวาลัยที่มีประติมากรรมปูนปั้นขนาดใหญ่ ศึกษาประวัติผู้สร้างและความโดดเด่นทางสถาปัตยกรรม
          </p>
          <button className="btn-secondary" style={{ width: '100%' }}>อ่านเพิ่มเติม</button>
        </div>

        {/* Pha Tak Suea */}
        <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🌄</div>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>ผาตากเสื้อ</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', textAlign: 'left' }}>
            จุดชมวิวธรรมชาติที่สวยงาม พร้อมสกายวอล์คพื้นกระจกใส ศึกษาความสำคัญต่อการท่องเที่ยว
          </p>
          <button className="btn-secondary" style={{ width: '100%' }}>อ่านเพิ่มเติม</button>
        </div>

      </div>
    </div>
  );
}

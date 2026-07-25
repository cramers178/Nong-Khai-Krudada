import { useState } from 'react';

const softPowerData = [
  {
    id: 'naga',
    icon: '🐉',
    title: 'ตำนานพญานาค',
    short: 'ศึกษาความเชื่อเกี่ยวกับพญานาค ตำนานบั้งไฟพญานาค และความสำคัญที่มีต่อวิถีชีวิตชาวหนองคาย',
    details: `ความเชื่อเรื่อง "พญานาค" ถือเป็นสิ่งที่ผูกพันกับชาวหนองคายและลุ่มน้ำโขงมาอย่างยาวนาน ชาวบ้านเชื่อว่าพญานาคคือผู้ปกปักรักษาแม่น้ำโขงและบันดาลความอุดมสมบูรณ์ให้แก่แผ่นดิน 

จุดเด่นที่สุดคือปรากฏการณ์ "บั้งไฟพญานาค" ที่จะเกิดขึ้นในช่วงวันออกพรรษา (ขึ้น 15 ค่ำ เดือน 11) ของทุกปี โดยจะมีลูกไฟสีชมพูแดงพุ่งขึ้นจากใต้แม่น้ำโขงสู่ท้องฟ้า ซึ่งเป็นปรากฏการณ์ทางธรรมชาติที่ผสมผสานกับความเชื่อจนกลายเป็นเอกลักษณ์ระดับโลก และเป็น "Soft Power" สำคัญที่ดึงดูดนักท่องเที่ยวให้มาเยือนหนองคายอย่างล้นหลาม`
  },
  {
    id: 'wat',
    icon: '🛕',
    title: 'ศาลาแก้วกู่',
    short: 'อุทยานเทวาลัยที่มีประติมากรรมปูนปั้นขนาดใหญ่ ศึกษาประวัติผู้สร้างและความโดดเด่นทางสถาปัตยกรรม',
    details: `ศาลาแก้วกู่ หรือ อุทยานเทวาลัย เป็นสถานที่ที่รวบรวมประติมากรรมปูนปั้นขนาดมหึมาที่บอกเล่าเรื่องราวตามความเชื่อของศาสนาพุทธ พราหมณ์ และฮินดู สร้างขึ้นโดย "หลวงปู่บุญเหลือ สุรีรัตน์"

สถาปัตยกรรมเหล่านี้เต็มไปด้วยปรัชญาชีวิตและการเวียนว่ายตายเกิด จุดเด่นคือรูปปั้นปางต่างๆ ที่มีความวิจิตรพิสดาร แฝงคติธรรมสอนใจ นับเป็นผลงานศิลปะทางศาสนาที่แปลกตาและทรงคุณค่าอย่างยิ่ง จนกลายเป็นแหล่งท่องเที่ยวเชิงวัฒนธรรมที่ใครมาหนองคายต้องห้ามพลาด`
  },
  {
    id: 'phataksuea',
    icon: '🌄',
    title: 'ผาตากเสื้อ',
    short: 'จุดชมวิวธรรมชาติที่สวยงาม พร้อมสกายวอล์คพื้นกระจกใส ศึกษาความสำคัญต่อการท่องเที่ยว',
    details: `วัดผาตากเสื้อ ตั้งอยู่บนยอดเขาสูงในอำเภอสังคม จังหวัดหนองคาย เป็นหนึ่งในจุดชมวิวแม่น้ำโขงที่สวยงามที่สุดในประเทศไทย โดยเฉพาะช่วงหน้าหนาวที่สามารถชมทะเลหมอกเหนือลำน้ำโขงที่ไหลคดเคี้ยวไปตามพรมแดนไทย-ลาว

ไฮไลท์สำคัญคือ "สกายวอล์ค (Skywalk)" พื้นกระจกใสรูปตัวยู (U-shape) ยื่นออกไปที่หน้าผา เป็นแห่งแรกของประเทศไทยที่เปิดให้นักท่องเที่ยวได้สัมผัสความตื่นเต้นและชมทัศนียภาพแบบพาโนรามา ช่วยยกระดับการท่องเที่ยวทางธรรมชาติของจังหวัดได้อย่างยอดเยี่ยม`
  }
];

export default function SoftPower() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  if (selectedId) {
    const data = softPowerData.find(d => d.id === selectedId);
    return (
      <div className="glass-panel animate-fade-in" style={{ padding: '3rem', maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ fontSize: '4rem', textAlign: 'center' }}>{data?.icon}</div>
        <h1 className="title text-gradient" style={{ textAlign: 'center', margin: '1rem 0' }}>{data?.title}</h1>
        
        <div style={{ background: 'rgba(0,0,0,0.3)', padding: '2rem', borderRadius: '12px', marginTop: '2rem' }}>
          {data?.details.split('\n\n').map((paragraph, i) => (
            <p key={i} style={{ marginBottom: '1rem', lineHeight: '1.8', fontSize: '1.1rem' }}>
              {paragraph}
            </p>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <button className="btn-secondary" onClick={() => setSelectedId(null)}>กลับหน้าหลัก Soft Power</button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <h1 className="title text-gradient" style={{ textAlign: 'center' }}>เรียนรู้ Soft Power จังหวัดหนองคาย</h1>
      <p className="subtitle" style={{ textAlign: 'center', marginBottom: '3rem' }}>เลือกสถานที่ที่คุณต้องการศึกษาประวัติศาสตร์และวัฒนธรรม</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {softPowerData.map(item => (
          <div key={item.id} className="glass-panel hover-scale" style={{ padding: '2rem', textAlign: 'center' }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>{item.icon}</div>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>{item.title}</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', textAlign: 'left' }}>
              {item.short}
            </p>
            <button className="btn-primary" style={{ width: '100%' }} onClick={() => setSelectedId(item.id)}>
              อ่านประวัติเพิ่มเติม
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useState } from 'react';
import { MapPin, Info, Star } from 'lucide-react';

const softPowerData = [
  {
    id: 'naga',
    icon: '🐉',
    title: 'ตำนานพญานาค',
    short: 'ศึกษาความเชื่อเกี่ยวกับพญานาค ตำนานบั้งไฟพญานาค และความสำคัญที่มีต่อวิถีชีวิตชาวหนองคาย',
    content: (
      <>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
          ความเชื่อเรื่อง <strong>"พญานาค"</strong> ถือเป็นรากฐานทางวัฒนธรรมที่ผูกพันกับชาวหนองคายและผู้คนในลุ่มแม่น้ำโขงมาอย่างยาวนาน ชาวบ้านมีความเชื่ออย่างแรงกล้าว่าพญานาคคือผู้ปกปักรักษาแม่น้ำโขง และเป็นผู้บันดาลความอุดมสมบูรณ์ให้แก่แผ่นดิน
        </p>
        
        <div style={{ background: 'rgba(255, 0, 122, 0.1)', borderLeft: '4px solid #ff007a', padding: '1.5rem', borderRadius: '0 12px 12px 0', marginBottom: '1.5rem' }}>
          <h3 style={{ color: '#ffc107', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Star size={20} /> ไฮไลท์สำคัญ: บั้งไฟพญานาค
          </h3>
          <p style={{ lineHeight: '1.8' }}>
            จุดเด่นที่สุดคือปรากฏการณ์ <strong>"บั้งไฟพญานาค"</strong> ที่จะเกิดขึ้นในช่วงวันออกพรรษา (ขึ้น 15 ค่ำ เดือน 11) ของทุกปี โดยจะมีลูกไฟสีชมพูแดงพุ่งขึ้นจากใต้แม่น้ำโขงสู่ท้องฟ้า ซึ่งเป็นปรากฏการณ์ธรรมชาติที่ผสมผสานกับความเชื่อได้อย่างลงตัว
          </p>
        </div>

        <h3 style={{ color: '#4cc9f0', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Info size={20} /> พลังแห่ง Soft Power
        </h3>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
          <li><strong>กระตุ้นเศรษฐกิจ:</strong> ดึงดูดนักท่องเที่ยวหลายแสนคนในช่วงเทศกาลออกพรรษา</li>
          <li><strong>ศิลปวัฒนธรรม:</strong> เกิดการสร้างสรรค์ลายผ้า ลายเครื่องปั้นดินเผา และการฟ้อนรำที่เกี่ยวกับพญานาค</li>
          <li><strong>ภาพยนตร์และสื่อ:</strong> เป็นแรงบันดาลใจในการสร้างภาพยนตร์และละครมากมายที่เผยแพร่สู่สายตาชาวโลก</li>
        </ul>
      </>
    )
  },
  {
    id: 'wat',
    icon: '🛕',
    title: 'ศาลาแก้วกู่',
    short: 'อุทยานเทวาลัยที่มีประติมากรรมปูนปั้นขนาดใหญ่ ศึกษาประวัติผู้สร้างและความโดดเด่นทางสถาปัตยกรรม',
    content: (
      <>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
          <strong>ศาลาแก้วกู่</strong> หรือ อุทยานเทวาลัย เป็นสถานที่ที่รวบรวมประติมากรรมปูนปั้นขนาดมหึมา สร้างขึ้นโดย <em>"หลวงปู่บุญเหลือ สุรีรัตน์"</em> ภายใต้แนวคิดในการผสมผสานความเชื่อของศาสนาพุทธ พราหมณ์ และฮินดู เข้าไว้ด้วยกันในพื้นที่เดียว
        </p>
        
        <div style={{ background: 'rgba(76, 201, 240, 0.1)', borderLeft: '4px solid #4cc9f0', padding: '1.5rem', borderRadius: '0 12px 12px 0', marginBottom: '1.5rem' }}>
          <h3 style={{ color: '#ffc107', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={20} /> ความโดดเด่นทางสถาปัตยกรรม
          </h3>
          <p style={{ lineHeight: '1.8' }}>
            ผลงานปูนปั้นแต่ละชิ้นไม่ได้มีเพียงความวิจิตรพิสดารและขนาดที่ใหญ่โตอลังการเท่านั้น แต่ยังแฝงไปด้วย <strong>ปริศนาธรรม ข้อคิด ปรัชญาชีวิต และเรื่องราวของการเวียนว่ายตายเกิด</strong> เอาไว้อย่างแยบยล
          </p>
        </div>

        <h3 style={{ color: '#ff007a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Info size={20} /> พลังแห่ง Soft Power
        </h3>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
          <li><strong>แหล่งท่องเที่ยวเชิงวัฒนธรรม:</strong> กลายเป็น Landmark ที่ชาวไทยและชาวต่างชาติที่มาเยือนหนองคายต้องมาถ่ายรูปและศึกษา</li>
          <li><strong>แรงบันดาลใจทางศิลปะ:</strong> เป็นแหล่งรวมสุดยอดงานช่างปูนปั้นพื้นบ้านที่ศิลปินรุ่นหลังสามารถมาศึกษาศิลปะการสลักปูนได้</li>
        </ul>
      </>
    )
  },
  {
    id: 'phataksuea',
    icon: '🌄',
    title: 'ผาตากเสื้อ',
    short: 'จุดชมวิวธรรมชาติที่สวยงาม พร้อมสกายวอล์คพื้นกระจกใส ศึกษาความสำคัญต่อการท่องเที่ยว',
    content: (
      <>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
          <strong>วัดผาตากเสื้อ</strong> ตั้งอยู่บนยอดเขาสูงในอำเภอสังคม จังหวัดหนองคาย ถือเป็นหนึ่งในจุดชมวิวแม่น้ำโขงที่สวยงามที่สุดในประเทศไทย โดยเฉพาะช่วงหน้าหนาวที่สามารถชม <em>ทะเลหมอก</em> ลอยเหนือลำน้ำโขงที่ไหลคดเคี้ยวไปตามพรมแดนไทย-ลาวได้อย่างชัดเจน
        </p>
        
        <div style={{ background: 'rgba(255, 193, 7, 0.1)', borderLeft: '4px solid #ffc107', padding: '1.5rem', borderRadius: '0 12px 12px 0', marginBottom: '1.5rem' }}>
          <h3 style={{ color: '#4cc9f0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Star size={20} /> ไฮไลท์สำคัญ: สกายวอล์ค (Skywalk)
          </h3>
          <p style={{ lineHeight: '1.8' }}>
            จุดดึงดูดระดับชาติคือ <strong>"สกายวอล์คกระจกใสรูปตัวยู (U-shape)"</strong> ที่ยื่นออกไปที่หน้าผา ซึ่งถือเป็นแห่งแรกของประเทศไทย เปิดให้นักท่องเที่ยวได้สัมผัสความตื่นเต้นท้าทายและชมทัศนียภาพแบบพาโนรามาที่ไม่มีอะไรบดบัง
          </p>
        </div>

        <h3 style={{ color: '#ff007a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Info size={20} /> พลังแห่ง Soft Power
        </h3>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
          <li><strong>ยกระดับการท่องเที่ยวทางธรรมชาติ:</strong> เปลี่ยนจากเมืองทางผ่านให้กลายเป็นเมืองหลักแห่งการท่องเที่ยวสัมผัสธรรมชาติ</li>
          <li><strong>กระจายรายได้สู่ชุมชน:</strong> ทำให้เกิดธุรกิจที่พัก โฮมสเตย์ และร้านอาหารท้องถิ่นในอำเภอสังคมเติบโตอย่างก้าวกระโดด</li>
        </ul>
      </>
    )
  }
];

export default function SoftPower() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  if (selectedId) {
    const data = softPowerData.find(d => d.id === selectedId);
    return (
      <div className="glass-panel animate-fade-in" style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '1rem' }}>{data?.icon}</div>
        <h1 className="title text-gradient" style={{ textAlign: 'center', marginBottom: '2rem' }}>{data?.title}</h1>
        
        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
          {data?.content}
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <button 
            className="btn-secondary" 
            style={{ padding: '12px 30px', fontSize: '1.1rem' }}
            onClick={() => setSelectedId(null)}
          >
            ← กลับหน้าหลัก Soft Power
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in" style={{ padding: '2rem' }}>
      <h1 className="title text-gradient" style={{ textAlign: 'center' }}>แหล่งเรียนรู้ Soft Power จังหวัดหนองคาย</h1>
      <p className="subtitle" style={{ textAlign: 'center', marginBottom: '4rem', fontSize: '1.2rem' }}>
        เลือกสถานที่ที่คุณต้องการศึกษาประวัติศาสตร์ วัฒนธรรม และอิทธิพลที่มีต่อวิถีชีวิต
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        {softPowerData.map(item => (
          <div key={item.id} className="glass-panel hover-scale" style={{ 
            padding: '2.5rem 2rem', 
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div style={{ 
              fontSize: '4.5rem', 
              marginBottom: '1.5rem',
              background: 'rgba(255,255,255,0.1)',
              width: '120px',
              height: '120px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
            }}>
              {item.icon}
            </div>
            <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem', fontSize: '1.8rem' }}>{item.title}</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', textAlign: 'center', lineHeight: '1.6' }}>
              {item.short}
            </p>
            <div style={{ marginTop: 'auto', width: '100%' }}>
              <button 
                className="btn-primary" 
                style={{ width: '100%', padding: '12px' }} 
                onClick={() => setSelectedId(item.id)}
              >
                อ่านเนื้อหาฉบับเต็ม
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

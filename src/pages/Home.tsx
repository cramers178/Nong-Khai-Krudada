import { Link } from 'react-router-dom';
import { Play, BookOpen, Map, Monitor } from 'lucide-react';

export default function Home() {
  return (
    <div className="home-container animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', textAlign: 'center' }}>
      <div className="glass-panel" style={{ padding: '4rem', maxWidth: '800px', width: '100%' }}>
        <h1 className="title text-gradient" style={{ fontSize: '4rem', marginBottom: '1rem' }}>
          Nong Khai Adventure
        </h1>
        <h2 className="subtitle" style={{ fontSize: '1.5rem', marginBottom: '3rem', color: 'var(--text-muted)' }}>
          ผจญภัยตามรอย Soft Power จังหวัดหนองคาย
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginTop: '2rem' }}>
          <Link to="/adventure" className="btn-primary" style={{ gridColumn: 'span 2', padding: '1.5rem', fontSize: '1.5rem' }}>
            <Play size={32} /> เริ่มเกม
          </Link>
          
          <Link to="/intro" className="btn-secondary">
            <BookOpen size={24} /> บทนำ
          </Link>
          
          <Link to="/softpower" className="btn-secondary">
            <Map size={24} /> เรียนรู้ Soft Power
          </Link>
          
          <Link to="/cslessons" className="btn-secondary" style={{ gridColumn: 'span 2' }}>
            <Monitor size={24} /> วิทยาการคำนวณ ม.3
          </Link>
        </div>
      </div>
      
      <div style={{ marginTop: '3rem', color: 'var(--text-muted)' }}>
        <p>โครงงานบูรณาการ Soft Power และวิทยาการคำนวณ</p>
      </div>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

export default function Dashboard() {
  const [statsData, setStatsData] = useState<{ name: string, value: number, fill: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbxzEXRcOLlJ0_kVtdW8AxMOMxayiwFmR4HvwChAveR7pgFL66kOcPG4J7Ie0EP11E0q/exec');
        const rawStats = await response.json();
        
        const data = [
          { name: 'ครู (Teacher)', value: rawStats.teacher || 0, fill: '#ff007a' },
          { name: 'นักเรียน (Student)', value: rawStats.student || 0, fill: '#4cc9f0' },
          { name: 'บุคคลทั่วไป (General)', value: rawStats.general || 0, fill: '#7209b7' },
        ];
        setStatsData(data);
      } catch (e) {
        console.error('Failed to fetch stats from Google Apps Script', e);
        // Fallback or empty state
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="animate-fade-in" style={{ padding: '20px' }}>
      <h1 className="title text-gradient" style={{ textAlign: 'center', marginBottom: '40px' }}>
        📊 สรุปผู้เข้าใช้งาน (Dashboard)
      </h1>
      
      {loading ? (
        <div style={{ textAlign: 'center', padding: '50px', fontSize: '1.2rem', color: '#4cc9f0' }}>
          กำลังโหลดข้อมูลจากฐานข้อมูล...
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        
        {/* Bar Chart Container */}
        <div className="glass-panel" style={{ padding: '20px', height: '400px', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '1.2rem' }}>จำนวนผู้ใช้งานแยกตามกลุ่ม</h2>
          <div style={{ flex: 1 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={statsData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="name" stroke="#adb5bd" />
                <YAxis stroke="#adb5bd" />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(15, 17, 26, 0.9)', border: '1px solid var(--border-color)', borderRadius: '8px' }} 
                  itemStyle={{ color: '#fff' }}
                />
                <Bar dataKey="value" radius={[5, 5, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart Container */}
        <div className="glass-panel" style={{ padding: '20px', height: '400px', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '1.2rem' }}>สัดส่วนผู้ใช้งานทั้งหมด</h2>
          <div style={{ flex: 1 }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={statsData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={120}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                >
                  {statsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: 'rgba(15, 17, 26, 0.9)', border: '1px solid var(--border-color)', borderRadius: '8px' }} 
                  itemStyle={{ color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        </div>
      )}
    </div>
  );
}

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: 'calc(100vh - 80px)', // adjust for padding if any
      padding: '0'
    }}>
      <div 
        className="animate-fade-in"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1200px', // Restrict max width so it doesn't get too large
          aspectRatio: '16/10', // Adjust if the real image aspect ratio is different (e.g. 3/2 or 16/9)
          backgroundImage: 'url(/ปก.png)', // The user must save their image as public/ปก.png
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          borderRadius: '16px',
          boxShadow: '0 10px 40px rgba(0,0,0,0.8)'
        }}
      >
        {/* Invisible clickable areas over the drawn buttons in the image */}
        
        {/* 1. เริ่มเกม */}
        <Link 
          to="/adventure" 
          className="hover-zone" 
          title="เริ่มเกม"
          style={{
            position: 'absolute',
            top: '47%', left: '35%', width: '19.5%', height: '8%'
          }} 
        />

        {/* 2. เรียนรู้ Soft Power */}
        <Link 
          to="/softpower" 
          className="hover-zone" 
          title="เรียนรู้ Soft Power"
          style={{
            position: 'absolute',
            top: '57%', left: '35%', width: '19.5%', height: '8%'
          }} 
        />

        {/* 3. วิทยาการคำนวณ */}
        <Link 
          to="/cslessons" 
          className="hover-zone" 
          title="วิทยาการคำนวณ"
          style={{
            position: 'absolute',
            top: '67%', left: '35%', width: '19.5%', height: '8%'
          }} 
        />

        {/* 4. เล่นเกมผจญภัย */}
        <Link 
          to="/adventure" 
          className="hover-zone" 
          title="เล่นเกมผจญภัย"
          style={{
            position: 'absolute',
            top: '77%', left: '35%', width: '19.5%', height: '8%'
          }} 
        />

        {/* 5. ผู้จัดทำ */}
        <Link 
          to="/intro" 
          className="hover-zone" 
          title="ผู้จัดทำ"
          style={{
            position: 'absolute',
            top: '86.5%', left: '35%', width: '19.5%', height: '8%'
          }} 
        />

      </div>
    </div>
  );
}

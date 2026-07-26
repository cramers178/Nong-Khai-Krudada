import React, { useState, useEffect } from 'react';
import { User, Users, GraduationCap } from 'lucide-react';
import './RoleSelectionModal.css';

export const RoleSelectionModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already selected a role
    const storedRole = localStorage.getItem('userRole');
    if (!storedRole) {
      setIsOpen(true);
    }
  }, []);

  const handleSelectRole = (role: string) => {
    localStorage.setItem('userRole', role);
    
    // Simulate updating global stats (for demo purposes)
    const storedStats = localStorage.getItem('roleStats');
    let stats: Record<string, number> = { teacher: 0, student: 0, general: 0 };
    
    if (storedStats) {
      try {
        stats = JSON.parse(storedStats);
      } catch (e) {
        console.error('Failed to parse role stats');
      }
    } else {
        // initialize some fake stats if empty so the chart doesn't look completely empty initially
        stats = { teacher: 5, student: 15, general: 10 };
    }
    
    if (stats[role] !== undefined) {
      stats[role] += 1;
    } else {
        stats[role] = 1;
    }
    
    localStorage.setItem('roleStats', JSON.stringify(stats));
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="role-modal-overlay">
      <div className="role-modal glass-panel">
        <h2 className="title text-gradient" style={{ textAlign: 'center', marginBottom: '20px', fontSize: '2rem' }}>ยินดีต้อนรับ</h2>
        <p style={{ textAlign: 'center', marginBottom: '30px', fontSize: '1.2rem' }}>กรุณาระบุสถานะของคุณก่อนเข้าใช้งาน</p>
        
        <div className="role-buttons">
          <button className="role-btn btn-secondary" onClick={() => handleSelectRole('teacher')}>
            <GraduationCap size={24} />
            ครู
          </button>
          <button className="role-btn btn-secondary" onClick={() => handleSelectRole('student')}>
            <User size={24} />
            นักเรียน
          </button>
          <button className="role-btn btn-secondary" onClick={() => handleSelectRole('general')}>
            <Users size={24} />
            บุคคลทั่วไป
          </button>
        </div>
      </div>
    </div>
  );
};

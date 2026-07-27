import React, { useState, useEffect } from 'react';
import { User, Users, GraduationCap } from 'lucide-react';
import './RoleSelectionModal.css';

export const RoleSelectionModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check if the user has already selected a role
    const storedRole = localStorage.getItem('userRole');
    if (!storedRole) {
      setIsOpen(true);
    }
  }, []);

  const handleSelectRole = async (role: string) => {
    setIsSubmitting(true);
    
    try {
      const formData = new URLSearchParams();
      formData.append('role', role);

      await fetch('https://script.google.com/macros/s/AKfycbxzEXRcOLlJ0_kVtdW8AxMOMxayiwFmR4HvwChAveR7pgFL66kOcPG4J7Ie0EP11E0q/exec', {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Use no-cors to prevent CORS issues with Google Apps Script redirect
      });

      localStorage.setItem('userRole', role);
      setIsOpen(false);
    } catch (e) {
      console.error('Failed to save role to Google Apps Script', e);
      // Still allow them to enter even if tracking fails, or show error
      localStorage.setItem('userRole', role);
      setIsOpen(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="role-modal-overlay">
      <div className="role-modal glass-panel">
        <h2 className="title text-gradient" style={{ textAlign: 'center', marginBottom: '15px', fontSize: '1.8rem', lineHeight: '1.4' }}>
          ยินดีต้อนรับสู่ "Mekong Legends:<br/>ตำนานพญานาคสู่นวัตกรรมเกมการเรียนรู้"
        </h2>
        <p style={{ textAlign: 'center', marginBottom: '15px', fontSize: '1.2rem', fontStyle: 'italic', color: '#4cc9f0' }}>
          "เฮ็ดในสิ่งที่เชื่อ เชื่อในสิ่งที่เฮ็ด"
        </p>
        <p style={{ textAlign: 'center', marginBottom: '30px', fontSize: '1.1rem' }}>ผู้เข้าใช้งานคือใคร? (กรุณาระบุสถานะ)</p>
        
        <div className="role-buttons">
          <button className="role-btn btn-secondary" onClick={() => handleSelectRole('student')} disabled={isSubmitting}>
            <User size={24} />
            นักเรียน
          </button>
          <button className="role-btn btn-secondary" onClick={() => handleSelectRole('teacher')} disabled={isSubmitting}>
            <GraduationCap size={24} />
            ครู
          </button>
          <button className="role-btn btn-secondary" onClick={() => handleSelectRole('general')} disabled={isSubmitting}>
            <Users size={24} />
            บุคคลทั่วไป
          </button>
        </div>
        
        {isSubmitting && (
          <p style={{ textAlign: 'center', marginTop: '20px', color: '#4cc9f0' }}>กำลังบันทึกข้อมูล...</p>
        )}
      </div>
    </div>
  );
};

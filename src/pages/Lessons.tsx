
import { BookOpen, Target, FileText } from 'lucide-react';

function Lessons() {
  return (
    <div className="animate-fade-in" style={{ padding: '2rem' }}>
      <div className="glass-panel" style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1 className="title text-gradient">💻 บทเรียน : วิทยาการคำนวณ ระดับชั้นมัธยมศึกษาปีที่ 3</h1>
        </div>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: 'var(--accent-color)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <BookOpen /> บทนำ
          </h2>
          <p style={{ lineHeight: '1.8' }}>
            วิทยาการคำนวณ เป็นรายวิชาที่มุ่งพัฒนาทักษะการคิดอย่างเป็นระบบ การแก้ปัญหา การออกแบบขั้นตอนการทำงาน การพัฒนาโปรแกรม และการใช้เทคโนโลยีดิจิทัลอย่างปลอดภัย นักเรียนจะได้เรียนรู้ผ่านการลงมือปฏิบัติและประยุกต์ใช้ความรู้กับสถานการณ์ในชีวิตประจำวัน
          </p>
        </section>

        {/* Chapter 1 */}
        <section style={{ marginBottom: '3rem', background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '16px' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>📚 บทที่ 1 การคิดเชิงคำนวณ (Computational Thinking)</h2>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem', color: '#ffc107' }}>
              <Target size={20} /> จุดประสงค์การเรียนรู้
            </h3>
            <ul style={{ paddingLeft: '2rem', lineHeight: '1.6' }}>
              <li>อธิบายความหมายของการคิดเชิงคำนวณได้</li>
              <li>วิเคราะห์ปัญหาและแบ่งปัญหาออกเป็นส่วนย่อยได้</li>
              <li>เลือกวิธีแก้ปัญหาอย่างเป็นขั้นตอน</li>
            </ul>
          </div>

          <div>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem', color: '#4cc9f0' }}>
              <FileText size={20} /> เนื้อหา
            </h3>
            <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
              การคิดเชิงคำนวณ คือ กระบวนการคิดเพื่อแก้ปัญหาอย่างเป็นระบบ โดยแบ่งปัญหาออกเป็นส่วนย่อย วิเคราะห์รูปแบบ และออกแบบวิธีแก้ปัญหาอย่างมีลำดับขั้น
            </p>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>องค์ประกอบสำคัญ:</p>
            <ol style={{ paddingLeft: '2rem', lineHeight: '1.6' }}>
              <li>การแบ่งปัญหา (Decomposition)</li>
              <li>การหารูปแบบ (Pattern Recognition)</li>
              <li>การคิดเชิงนามธรรม (Abstraction)</li>
              <li>การออกแบบขั้นตอนวิธี (Algorithm)</li>
            </ol>
          </div>
        </section>

        {/* Chapter 2 */}
        <section style={{ marginBottom: '3rem', background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '16px' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>📚 บทที่ 2 อัลกอริทึม (Algorithm)</h2>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem', color: '#ffc107' }}>
              <Target size={20} /> จุดประสงค์การเรียนรู้
            </h3>
            <ul style={{ paddingLeft: '2rem', lineHeight: '1.6' }}>
              <li>อธิบายความหมายของอัลกอริทึมได้</li>
              <li>ออกแบบลำดับขั้นตอนการทำงานได้</li>
            </ul>
          </div>

          <div>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem', color: '#4cc9f0' }}>
              <FileText size={20} /> เนื้อหา
            </h3>
            <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
              อัลกอริทึม คือ ขั้นตอนการแก้ปัญหาที่มีลำดับชัดเจน ตั้งแต่เริ่มต้นจนสิ้นสุด
            </p>
            
            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#ff007a' }}>💡 ตัวอย่าง: การชงเครื่องดื่ม</p>
              <ol style={{ paddingLeft: '2rem', lineHeight: '1.6' }}>
                <li>เตรียมแก้ว</li>
                <li>เติมน้ำ</li>
                <li>เติมผงเครื่องดื่ม</li>
                <li>คนให้เข้ากัน</li>
                <li>พร้อมดื่ม</li>
              </ol>
            </div>

            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>หลักการของอัลกอริทึม:</p>
            <ul style={{ paddingLeft: '2rem', lineHeight: '1.6' }}>
              <li>มีจุดเริ่มต้น</li>
              <li>มีลำดับขั้นตอน</li>
              <li>มีจุดสิ้นสุด</li>
              <li>สามารถปฏิบัติตามได้จริง</li>
            </ul>
          </div>
        </section>

        {/* Chapter 3 */}
        <section style={{ marginBottom: '3rem', background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '16px' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>📚 บทที่ 3 ผังงาน (Flowchart)</h2>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem', color: '#ffc107' }}>
              <Target size={20} /> จุดประสงค์การเรียนรู้
            </h3>
            <ul style={{ paddingLeft: '2rem', lineHeight: '1.6' }}>
              <li>อธิบายสัญลักษณ์ของผังงานได้</li>
              <li>อ่านและสร้างผังงานอย่างง่ายได้</li>
            </ul>
          </div>

          <div>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem', color: '#4cc9f0' }}>
              <FileText size={20} /> เนื้อหา
            </h3>
            <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
              ผังงาน (Flowchart) คือ แผนภาพที่ใช้แสดงลำดับขั้นตอนการทำงาน
            </p>
            
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>สัญลักษณ์พื้นฐาน:</p>
            <ul style={{ paddingLeft: '2rem', lineHeight: '1.6', listStyle: 'none' }}>
              <li><strong style={{color: '#ffc107'}}>● วงรี</strong> - ใช้แทน จุดเริ่มต้นและจุดสิ้นสุด</li>
              <li><strong style={{color: '#ffc107'}}>▭ สี่เหลี่ยมผืนผ้า</strong> - ใช้แทน การประมวลผล</li>
              <li><strong style={{color: '#ffc107'}}>◇ สี่เหลี่ยมข้าวหลามตัด</strong> - ใช้แทน การตัดสินใจ</li>
              <li><strong style={{color: '#ffc107'}}>▱ สี่เหลี่ยมด้านขนาน</strong> - ใช้แทน การรับข้อมูลหรือแสดงผล</li>
            </ul>
          </div>
        </section>

        {/* Chapter 4 */}
        <section style={{ marginBottom: '3rem', background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '16px' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>📚 บทที่ 4 การเขียนโปรแกรม</h2>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem', color: '#ffc107' }}>
              <Target size={20} /> จุดประสงค์การเรียนรู้
            </h3>
            <ul style={{ paddingLeft: '2rem', lineHeight: '1.6' }}>
              <li>เข้าใจหลักการเขียนโปรแกรม</li>
              <li>ใช้คำสั่งพื้นฐานในการสร้างโปรแกรมได้</li>
            </ul>
          </div>

          <div>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem', color: '#4cc9f0' }}>
              <FileText size={20} /> เนื้อหา
            </h3>
            <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
              การเขียนโปรแกรม คือ การสั่งให้คอมพิวเตอร์ทำงานตามลำดับคำสั่ง
            </p>
            
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>องค์ประกอบพื้นฐาน:</p>
            <ul style={{ paddingLeft: '2rem', lineHeight: '1.6', marginBottom: '1rem' }}>
              <li>ตัวแปร (Variable)</li>
              <li>การรับข้อมูล (Input)</li>
              <li>การแสดงผล (Output)</li>
              <li>เงื่อนไข (If-Else)</li>
              <li>การทำซ้ำ (Loop)</li>
            </ul>

            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#ff007a' }}>💡 ตัวอย่าง:</p>
              <pre style={{ color: '#adb5bd', fontFamily: 'inherit', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
หากคะแนนมากกว่าหรือเท่ากับ 50
  แสดงข้อความ "ผ่าน"
หากน้อยกว่า 50
  แสดงข้อความ "ไม่ผ่าน"
              </pre>
            </div>
          </div>
        </section>

        {/* Chapter 5 */}
        <section style={{ marginBottom: '3rem', background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '16px' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>📚 บทที่ 5 ข้อมูลและสารสนเทศ</h2>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem', color: '#ffc107' }}>
              <Target size={20} /> จุดประสงค์การเรียนรู้
            </h3>
            <ul style={{ paddingLeft: '2rem', lineHeight: '1.6' }}>
              <li>อธิบายความแตกต่างระหว่างข้อมูลและสารสนเทศได้</li>
              <li>วิเคราะห์ข้อมูลอย่างง่ายได้</li>
            </ul>
          </div>

          <div>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem', color: '#4cc9f0' }}>
              <FileText size={20} /> เนื้อหา
            </h3>
            <ul style={{ paddingLeft: '2rem', lineHeight: '1.6', marginBottom: '1rem' }}>
              <li><strong style={{color: '#ffc107'}}>ข้อมูล (Data):</strong> คือ ข้อเท็จจริงที่ยังไม่ผ่านการประมวลผล</li>
              <li><strong style={{color: '#ffc107'}}>สารสนเทศ (Information):</strong> คือ ข้อมูลที่ผ่านการประมวลผลแล้วและสามารถนำไปใช้ประโยชน์ได้</li>
            </ul>

            <div style={{ background: 'rgba(0,0,0,0.2)', padding: '1rem', borderRadius: '8px' }}>
              <p style={{ fontWeight: 'bold', marginBottom: '0.5rem', color: '#ff007a' }}>💡 ตัวอย่าง:</p>
              <p><strong>ข้อมูล:</strong> 65, 70, 80, 90</p>
              <p><strong>สารสนเทศ:</strong> คะแนนเฉลี่ย เท่ากับ 76.25 คะแนน</p>
            </div>
          </div>
        </section>

        {/* Chapter 6 */}
        <section style={{ marginBottom: '3rem', background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '16px' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>📚 บทที่ 6 อินเทอร์เน็ตและเทคโนโลยีดิจิทัล</h2>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem', color: '#ffc107' }}>
              <Target size={20} /> จุดประสงค์การเรียนรู้
            </h3>
            <ul style={{ paddingLeft: '2rem', lineHeight: '1.6' }}>
              <li>ใช้อินเทอร์เน็ตเพื่อค้นหาข้อมูลได้อย่างเหมาะสม</li>
              <li>เลือกแหล่งข้อมูลที่น่าเชื่อถือได้</li>
            </ul>
          </div>

          <div>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem', color: '#4cc9f0' }}>
              <FileText size={20} /> เนื้อหา
            </h3>
            <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
              อินเทอร์เน็ตเป็นเครือข่ายที่เชื่อมโยงข้อมูลจากทั่วโลก ช่วยในการค้นคว้า ติดต่อสื่อสาร และเรียนรู้
            </p>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>หลักการค้นหาข้อมูล:</p>
            <ul style={{ paddingLeft: '2rem', lineHeight: '1.6' }}>
              <li>ใช้คำค้นที่ชัดเจน</li>
              <li>ตรวจสอบแหล่งที่มา</li>
              <li>เปรียบเทียบข้อมูลจากหลายแหล่ง</li>
              <li>อ้างอิงข้อมูลอย่างถูกต้อง</li>
            </ul>
          </div>
        </section>

        {/* Chapter 7 */}
        <section style={{ marginBottom: '3rem', background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '16px' }}>
          <h2 style={{ color: 'var(--primary-color)', marginBottom: '1rem' }}>📚 บทที่ 7 ความปลอดภัยในการใช้เทคโนโลยี</h2>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem', color: '#ffc107' }}>
              <Target size={20} /> จุดประสงค์การเรียนรู้
            </h3>
            <ul style={{ paddingLeft: '2rem', lineHeight: '1.6' }}>
              <li>ใช้อินเทอร์เน็ตอย่างปลอดภัย</li>
              <li>ป้องกันข้อมูลส่วนบุคคล</li>
            </ul>
          </div>

          <div>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '0.5rem', color: '#4cc9f0' }}>
              <FileText size={20} /> เนื้อหา
            </h3>
            <p style={{ lineHeight: '1.6', marginBottom: '1rem' }}>
              การใช้งานเทคโนโลยีควรคำนึงถึงความปลอดภัยและความรับผิดชอบ
            </p>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>แนวปฏิบัติ:</p>
            <ul style={{ paddingLeft: '2rem', lineHeight: '1.6' }}>
              <li>ตั้งรหัสผ่านที่คาดเดายาก</li>
              <li>ไม่เปิดเผยข้อมูลส่วนตัว</li>
              <li>ระวังข่าวปลอม</li>
              <li>ไม่คลิกลิงก์ที่ไม่น่าเชื่อถือ</li>
              <li>เคารพลิขสิทธิ์ผลงานของผู้อื่น</li>
              <li>ใช้สื่อออนไลน์อย่างสุภาพ</li>
            </ul>
          </div>
        </section>

        {/* Summary */}
        <section style={{ background: 'rgba(76, 201, 240, 0.1)', padding: '2rem', borderRadius: '16px', border: '1px solid rgba(76, 201, 240, 0.3)' }}>
          <h2 style={{ color: 'var(--accent-color)', marginBottom: '1rem', textAlign: 'center' }}>🎉 สรุปบทเรียน</h2>
          <p style={{ textAlign: 'center', marginBottom: '1rem' }}>หลังจากศึกษาบทเรียนนี้ นักเรียนจะสามารถ:</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ul style={{ listStyle: 'none', lineHeight: '1.8' }}>
              <li>✅ คิดแก้ปัญหาอย่างเป็นระบบ</li>
              <li>✅ ออกแบบอัลกอริทึมได้</li>
              <li>✅ อ่านและสร้างผังงานได้</li>
              <li>✅ เข้าใจหลักการเขียนโปรแกรมเบื้องต้น</li>
              <li>✅ วิเคราะห์ข้อมูลและสารสนเทศได้</li>
              <li>✅ ใช้อินเทอร์เน็ตอย่างปลอดภัยและมีความรับผิดชอบ</li>
              <li>✅ ประยุกต์ใช้ความรู้ด้านวิทยาการคำนวณในชีวิตประจำวัน</li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  );
}

export default Lessons;

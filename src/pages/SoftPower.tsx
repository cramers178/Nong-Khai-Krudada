import { useState } from 'react';
import { MapPin, Info, Star, Target, Gamepad2, ExternalLink } from 'lucide-react';

const softPowerData = [
  {
    id: 'naga',
    icon: '/ตำนานพญานาค.gif',
    title: 'ตำนานพญานาค จังหวัดหนองคาย',
    short: 'ความเชื่อที่อยู่คู่กับวิถีชีวิตริมฝั่งแม่น้ำโขง และปรากฏการณ์บั้งไฟพญานาค',
    content: (
      <>
        <h3 style={{ color: '#ffc107', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Info size={20} /> ความเป็นมา
        </h3>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
          พญานาคเป็นสัญลักษณ์ที่สำคัญของจังหวัดหนองคาย และเป็นความเชื่อที่อยู่คู่กับวิถีชีวิตของประชาชนริมฝั่งแม่น้ำโขงมาเป็นเวลาหลายร้อยปี ตามความเชื่อของชาวลุ่มแม่น้ำโขง พญานาคเป็นสัตว์ในตำนานที่มีลักษณะคล้ายงูใหญ่ มีฤทธิ์อำนาจและอาศัยอยู่ใต้ลำน้ำโขง ทำหน้าที่ปกปักรักษาแม่น้ำ พระพุทธศาสนา และผู้คนที่อาศัยอยู่บริเวณนี้
        </p>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
          ความเชื่อเรื่องพญานาคมีความเกี่ยวข้องกับพระพุทธศาสนา โดยเชื่อว่าพญานาคเป็นผู้ศรัทธาในพระพุทธเจ้า และมีเรื่องราวปรากฏอยู่ในพุทธประวัติหลายตอน เช่น เรื่องพญานาคมุจลินท์ที่แผ่พังพานปกป้องพระพุทธเจ้าจากฝนตกหนักหลังตรัสรู้
        </p>

        <div style={{ background: 'rgba(255, 0, 122, 0.1)', borderLeft: '4px solid #ff007a', padding: '1.5rem', borderRadius: '0 12px 12px 0', marginBottom: '1.5rem' }}>
          <h3 style={{ color: '#ff007a', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Star size={20} /> ปรากฏการณ์บั้งไฟพญานาค
          </h3>
          <p style={{ lineHeight: '1.8', marginBottom: '0.5rem' }}>
            ปรากฏการณ์บั้งไฟพญานาค เป็นปรากฏการณ์ที่เกิดขึ้นในคืนวันออกพรรษา ซึ่งมีลูกไฟสีแดงอมชมพูพุ่งขึ้นจากแม่น้ำโขงโดยไม่มีเสียงและไม่มีควัน ชาวบ้านเชื่อว่าเป็นการถวายพุทธบูชาของพญานาคต่อองค์พระสัมมาสัมพุทธเจ้า
          </p>
          <p style={{ lineHeight: '1.8' }}>
            ปรากฏการณ์นี้ทำให้จังหวัดหนองคายกลายเป็นแหล่งท่องเที่ยวที่มีชื่อเสียง นักท่องเที่ยวจากทั่วประเทศและต่างประเทศเดินทางมาชมเป็นจำนวนมากในทุกปี ส่งผลดีต่อเศรษฐกิจ การท่องเที่ยว และวัฒนธรรมของจังหวัด
          </p>
        </div>

        <h3 style={{ color: '#4cc9f0', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Star size={20} /> ความสำคัญ
        </h3>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          <li>เป็นสัญลักษณ์ประจำจังหวัดหนองคาย</li>
          <li>สะท้อนความเชื่อและวัฒนธรรมของชาวลุ่มแม่น้ำโขง</li>
          <li>ส่งเสริมการท่องเที่ยวและเศรษฐกิจของจังหวัด</li>
          <li>เป็นแรงบันดาลใจในการสร้างงานศิลปกรรมและสถาปัตยกรรมหลายแห่ง</li>
        </ul>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div style={{ background: 'rgba(76, 201, 240, 0.1)', padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ color: '#4cc9f0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Target size={20} /> ความรู้ที่ได้รับ
            </h3>
            <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '1.8' }}>
              <li>✓ อธิบายตำนานพญานาคได้</li>
              <li>✓ อธิบายความสำคัญของบั้งไฟพญานาคได้</li>
              <li>✓ เห็นคุณค่าของวัฒนธรรมท้องถิ่น</li>
              <li>✓ เข้าใจความสัมพันธ์ระหว่างความเชื่อ ศาสนา และการท่องเที่ยว</li>
            </ul>
          </div>
          <div style={{ background: 'rgba(255, 193, 7, 0.1)', padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ color: '#ffc107', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Gamepad2 size={20} /> ภารกิจ
            </h3>
            <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>อ่านข้อมูลให้ครบทุกหัวข้อ</li>
              <li>ค้นหา "ลูกแก้วนาค" จำนวน 3 ลูก</li>
              <li>พูดคุยกับผู้เฒ่าประจำหมู่บ้าน</li>
              <li>ตอบคำถามจำนวน 5 ข้อ</li>
              <li>รับเหรียญ "ผู้พิทักษ์พญานาค"</li>
            </ol>
          </div>
        </div>
        
        <p style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="https://www.phonphisai.go.th/index/?page=article3679" target="_blank" rel="noreferrer" style={{ color: '#4cc9f0', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <ExternalLink size={16} /> อ่านเพิ่มเติมคลิกที่นี่
          </a>
        </p>
      </>
    )
  },
  {
    id: 'wat',
    icon: '/ศาลาแก้วกู่.gif',
    title: 'ศาลาแก้วกู่ จังหวัดหนองคาย',
    short: 'อุทยานประติมากรรมคอนกรีตเสริมเหล็กที่สะท้อนแนวคิดทางศาสนา',
    content: (
      <>
        <h3 style={{ color: '#ffc107', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Info size={20} /> ความเป็นมา
        </h3>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
          ศาลาแก้วกู่ หรือวัดแขก เป็นอุทยานประติมากรรมขนาดใหญ่ที่ตั้งอยู่ในจังหวัดหนองคาย สร้างขึ้นโดยหลวงปู่บุญเหลือ สุรีรัตน์ เมื่อปี พ.ศ. 2521 ภายในพื้นที่มีประติมากรรมคอนกรีตเสริมเหล็กจำนวนมาก ทั้งพระพุทธรูป เทพเจ้าในศาสนาฮินดู และรูปปั้นจากความเชื่อพื้นบ้าน
        </p>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
          การออกแบบประติมากรรมแต่ละชิ้นสะท้อนแนวคิดเรื่องการทำความดี ความกตัญญู การเวียนว่ายตายเกิด และหลักธรรมทางพระพุทธศาสนา ทำให้ศาลาแก้วกู่เป็นแหล่งเรียนรู้ด้านศิลปะ ศาสนา และวัฒนธรรมที่สำคัญของจังหวัดหนองคาย
        </p>

        <div style={{ background: 'rgba(76, 201, 240, 0.1)', borderLeft: '4px solid #4cc9f0', padding: '1.5rem', borderRadius: '0 12px 12px 0', marginBottom: '1.5rem' }}>
          <h3 style={{ color: '#4cc9f0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={20} /> จุดเด่นของศาลาแก้วกู่
          </h3>
          <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
            <li>มีประติมากรรมขนาดใหญ่กว่า 100 ชิ้น</li>
            <li>ผสมผสานศิลปะไทย ลาว และฮินดู</li>
            <li>มีรูปปั้นเทพเจ้า พระพุทธรูป และสัตว์ในตำนาน</li>
            <li>เป็นแหล่งท่องเที่ยวเชิงวัฒนธรรมที่สำคัญ</li>
          </ul>
        </div>

        <h3 style={{ color: '#ff007a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Star size={20} /> ความสำคัญ
        </h3>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
          ศาลาแก้วกู่เป็นแหล่งท่องเที่ยวที่ช่วยเผยแพร่ศิลปวัฒนธรรมและความเชื่อของคนในภูมิภาคลุ่มแม่น้ำโขง อีกทั้งยังเป็นสถานที่ศึกษาประวัติศาสตร์ ศิลปกรรม และหลักธรรมทางศาสนา นักท่องเที่ยวและนักเรียนสามารถเรียนรู้เรื่องราวผ่านประติมากรรมแต่ละชิ้นได้
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div style={{ background: 'rgba(76, 201, 240, 0.1)', padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ color: '#4cc9f0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Target size={20} /> ความรู้ที่ได้รับ
            </h3>
            <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '1.8' }}>
              <li>✓ รู้จักประวัติศาลาแก้วกู่</li>
              <li>✓ เข้าใจแนวคิดของผู้สร้าง</li>
              <li>✓ เรียนรู้ศิลปกรรมและประติมากรรม</li>
              <li>✓ เห็นคุณค่าของศิลปวัฒนธรรมไทย</li>
            </ul>
          </div>
          <div style={{ background: 'rgba(255, 193, 7, 0.1)', padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ color: '#ffc107', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Gamepad2 size={20} /> ภารกิจ
            </h3>
            <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>สำรวจประติมากรรม 5 จุด</li>
              <li>ค้นหารูปปั้นที่กำหนด</li>
              <li>จับคู่รูปภาพให้ถูกต้อง</li>
              <li>ตอบคำถามจำนวน 5 ข้อ</li>
              <li>รับเหรียญ "นักสำรวจศาลาแก้วกู่"</li>
            </ol>
          </div>
        </div>

        <p style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="https://th.wikipedia.org/wiki/%E0%B8%A8%E0%B8%B2%E0%B8%A5%E0%B8%B2%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7%E0%B8%81%E0%B8%B9%E0%B9%88" target="_blank" rel="noreferrer" style={{ color: '#4cc9f0', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <ExternalLink size={16} /> อ่านเพิ่มเติมคลิกที่นี่
          </a>
        </p>
      </>
    )
  },
  {
    id: 'phataksuea',
    icon: '/ผาตากเสื้อ.gif',
    title: 'ผาตากเสื้อ จังหวัดหนองคาย',
    short: 'แหล่งท่องเที่ยวทางธรรมชาติที่มีสะพานกระจก Skywalk ยื่นออกไปจากหน้าผา',
    content: (
      <>
        <h3 style={{ color: '#ffc107', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Info size={20} /> ความเป็นมา
        </h3>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
          ผาตากเสื้อ ตั้งอยู่ในอำเภอสังคม จังหวัดหนองคาย เป็นแหล่งท่องเที่ยวทางธรรมชาติที่มีชื่อเสียงและได้รับความนิยมจากนักท่องเที่ยวทั้งชาวไทยและชาวต่างประเทศ จากจุดชมวิวสามารถมองเห็นแม่น้ำโขงและประเทศลาวได้อย่างชัดเจน
        </p>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
          ชื่อ "ผาตากเสื้อ" มาจากเรื่องเล่าของชาวบ้านที่นิยมซักผ้าและนำเสื้อผ้ามาตากบนโขดหินบริเวณหน้าผา ต่อมาพื้นที่แห่งนี้ได้รับการพัฒนาให้เป็นจุดชมวิวและแหล่งท่องเที่ยวสำคัญของจังหวัด
        </p>

        <div style={{ background: 'rgba(255, 193, 7, 0.1)', borderLeft: '4px solid #ffc107', padding: '1.5rem', borderRadius: '0 12px 12px 0', marginBottom: '1.5rem' }}>
          <h3 style={{ color: '#ffc107', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={20} /> Skywalk ผาตากเสื้อ
          </h3>
          <p style={{ lineHeight: '1.8', marginBottom: '0.5rem' }}>
            จุดเด่นของผาตากเสื้อ คือ สะพานกระจก Skywalk ที่ยื่นออกไปจากหน้าผา นักท่องเที่ยวสามารถเดินชมวิวได้อย่างใกล้ชิด พร้อมชมทัศนียภาพของแม่น้ำโขง ป่าไม้ และภูเขาโดยรอบแบบพาโนรามา
          </p>
          <p style={{ lineHeight: '1.8' }}>
            ในช่วงฤดูหนาว บริเวณนี้ยังเป็นจุดชมทะเลหมอกและพระอาทิตย์ขึ้นที่สวยงาม จึงได้รับความนิยมจากนักท่องเที่ยวเป็นจำนวนมาก
          </p>
        </div>

        <h3 style={{ color: '#ff007a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Star size={20} /> ความสำคัญ
        </h3>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          <li>เป็นแหล่งท่องเที่ยวทางธรรมชาติที่สำคัญของจังหวัดหนองคาย</li>
          <li>ส่งเสริมการท่องเที่ยวเชิงอนุรักษ์</li>
          <li>สร้างรายได้ให้กับชุมชน</li>
          <li>เป็นแหล่งเรียนรู้ด้านธรรมชาติและสิ่งแวดล้อม</li>
        </ul>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div style={{ background: 'rgba(76, 201, 240, 0.1)', padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ color: '#4cc9f0', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Target size={20} /> ความรู้ที่ได้รับ
            </h3>
            <ul style={{ listStyle: 'none', paddingLeft: '0', lineHeight: '1.8' }}>
              <li>✓ รู้จักประวัติผาตากเสื้อ</li>
              <li>✓ เข้าใจความสำคัญของแหล่งท่องเที่ยวธรรมชาติ</li>
              <li>✓ ตระหนักถึงการอนุรักษ์สิ่งแวดล้อม</li>
              <li>✓ ส่งเสริมการท่องเที่ยวอย่างรับผิดชอบ</li>
            </ul>
          </div>
          <div style={{ background: 'rgba(255, 193, 7, 0.1)', padding: '1.5rem', borderRadius: '12px' }}>
            <h3 style={{ color: '#ffc107', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Gamepad2 size={20} /> ภารกิจ
            </h3>
            <ol style={{ paddingLeft: '1.5rem', lineHeight: '1.8' }}>
              <li>เดินสำรวจเส้นทางธรรมชาติ</li>
              <li>ถ่ายภาพจุดชมวิว</li>
              <li>ค้นหาสัญลักษณ์ธรรมชาติ 5 จุด</li>
              <li>ตอบคำถามจำนวน 5 ข้อ</li>
              <li>รับเหรียญ "ผู้พิชิตผาตากเสื้อ"</li>
            </ol>
          </div>
        </div>

        <p style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="https://nki.onab.go.th/th/content/category/detail/id/110/iid/25706" target="_blank" rel="noreferrer" style={{ color: '#4cc9f0', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <ExternalLink size={16} /> อ่านเพิ่มเติมคลิกที่นี่
          </a>
        </p>
      </>
    )
  },
  {
    id: 'pho_chai',
    icon: '/วัดโพธิ์ชัย.gif',
    title: 'วัดโพธิ์ชัย จังหวัดหนองคาย',
    short: 'พระอารามหลวงชั้นตรี ที่ประดิษฐานหลวงพ่อพระใส ศูนย์รวมศรัทธาของชาวหนองคาย',
    content: (
      <>
        <h3 style={{ color: '#ffc107', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Info size={20} /> ความเป็นมา
        </h3>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
          วัดโพธิ์ชัย เป็นพระอารามหลวงชั้นตรี ชนิดสามัญ สังกัดคณะสงฆ์มหานิกาย ตั้งอยู่ในอำเภอเมือง จังหวัดหนองคาย ถือเป็นวัดที่มีความสำคัญที่สุดแห่งหนึ่งของจังหวัด และเป็นศูนย์รวมศรัทธาของชาวหนองคาย เนื่องจากเป็นที่ประดิษฐาน <b>หลวงพ่อพระใส</b> พระพุทธรูปศักดิ์สิทธิ์คู่บ้านคู่เมืองหนองคาย ซึ่งได้รับความเคารพจากชาวไทยและชาวลาวมาอย่างยาวนาน
        </p>
        <p style={{ marginBottom: '1.5rem', lineHeight: '1.8' }}>
          วัดโพธิ์ชัยเป็นวัดเก่าแก่ สันนิษฐานว่าสร้างขึ้นประมาณ พ.ศ. 2360 เดิมชื่อว่า "วัดผีผิว" เนื่องจากพื้นที่บริเวณนั้นเคยใช้ประกอบพิธีเผาศพ ต่อมาจึงได้รับการบูรณะและเปลี่ยนชื่อเป็น วัดโพธิ์ชัย ภายหลังได้รับการยกฐานะเป็น พระอารามหลวง และกลายเป็นศูนย์กลางพระพุทธศาสนาที่สำคัญของจังหวัดหนองคาย
        </p>

        <div style={{ background: 'rgba(255, 193, 7, 0.1)', borderLeft: '4px solid #ffc107', padding: '1.5rem', borderRadius: '0 12px 12px 0', marginBottom: '1.5rem' }}>
          <h3 style={{ color: '#ffc107', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MapPin size={20} /> หลวงพ่อพระใส
          </h3>
          <p style={{ lineHeight: '1.8', marginBottom: '0.5rem' }}>
            หลวงพ่อพระใสเป็นพระพุทธรูปปางมารวิชัย ศิลปะล้านช้าง หล่อด้วยโลหะสีทองสุก ตามตำนานกล่าวว่า พระพุทธรูป 3 องค์ ได้แก่ พระสุก พระเสริม และพระใส สร้างโดยพระราชธิดาของกษัตริย์ล้านช้าง เพื่อถวายเป็นพุทธบูชา
          </p>
          <p style={{ lineHeight: '1.8' }}>
            ต่อมาเมื่อมีการอัญเชิญพระพุทธรูปมายังฝั่งไทย มีตำนานเล่าว่าเมื่อจะอัญเชิญหลวงพ่อพระใสลงกรุงเทพฯ เกวียนที่ใช้บรรทุกเกิดหัก จึงเชื่อกันว่าหลวงพ่อพระใสประสงค์จะประดิษฐานอยู่ที่หนองคาย ทำให้ได้รับสมญาว่า "หลวงพ่อเกวียนหัก" ปัจจุบันประดิษฐานอยู่ที่วัดโพธิ์ชัย
          </p>
        </div>

        <h3 style={{ color: '#ff007a', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Star size={20} /> ความสำคัญทางศาสนาและวัฒนธรรม
        </h3>
        <ul style={{ paddingLeft: '1.5rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
          <li>เป็นวัดหลวงประจำจังหวัดหนองคายและศูนย์รวมศรัทธาของประชาชนทั้งฝั่งไทยและลาว</li>
          <li><b>งานสมโภชหลวงพ่อพระใส:</b> จัดขึ้นช่วงเทศกาลสงกรานต์ อัญเชิญหลวงพ่อพระใสแห่รอบเมืองให้ประชาชนได้สรงน้ำ</li>
          <li><b>บุญบั้งไฟ:</b> จัดขบวนแห่เวียนรอบพระอุโบสถเพื่อขอฝนและสืบสานประเพณีอีสานในช่วงเดือนหก</li>
          <li>เป็นโบราณสถานที่ขึ้นทะเบียนโดยกรมศิลปากร และมีสถาปัตยกรรมแบบล้านช้างผสมผสานสมัยรัตนโกสินทร์</li>
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
        <div style={{ textAlign: 'center', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
          {data?.icon.startsWith('/') ? (
            <img src={data.icon} alt={data.title} style={{ width: '150px', height: '150px', objectFit: 'cover', borderRadius: '50%', boxShadow: '0 4px 15px rgba(0,0,0,0.3)' }} />
          ) : (
            <div style={{ fontSize: '4rem' }}>{data?.icon}</div>
          )}
        </div>
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

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', maxWidth: '2048px', margin: '0 auto' }}>
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
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
              overflow: 'hidden'
            }}>
              {item.icon.startsWith('/') ? (
                 <img src={item.icon} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                 item.icon
              )}
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

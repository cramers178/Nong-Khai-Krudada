import { useState } from 'react';
import { MapPin, Info, Star, Target, Gamepad2, ExternalLink, ChevronRight, ChevronLeft } from 'lucide-react';

const nagaTaleSlides = [
  {
    image: '/naka/naga_01.png',
    text: '“กำเนิดพญานาค  นานมาแล้ว ก่อนที่บ้านเมืองจะเกิดขึ้นทั่วแผ่นดินอีสาน โลกแบ่งออกเป็นสามภพ คือ สวรรค์ โลกมนุษย์ และเมืองบาดาล ใต้ลำน้ำโขงอันกว้างใหญ่ เชื่อกันว่ามีเมืองแห่งหนึ่งชื่อว่า เมืองบาดาล เป็นนครอันงดงาม สร้างด้วยแก้วเจ็ดประการ แสงส่องประกายราวกับดวงดาว ไม่มีทั้งความมืดและความอดอยาก”'
  },
  {
    image: '/naka/naga_02.png',
    text: 'ผู้ปกครองเมืองคือ พญานาค ผู้มีอานุภาพ สามารถแปลงกายเป็นมนุษย์หรือเป็นงูใหญ่ได้ตามต้องการ มีหน้าที่ดูแลแม่น้ำ ลำคลอง และความอุดมสมบูรณ์ของโลก\nเมื่อฝนฟ้าตกต้องตามฤดูกาล ชาวบ้านเชื่อว่าเป็นเพราะพญานาคช่วยรักษาสมดุลของธรรมชาติ'
  },
  {
    image: '/naka/naga_03.png',
    text: 'ปู่ศรีสุทโธ เจ้าแห่งเมืองบาดาล\nในบรรดาพญานาคทั้งหลาย ผู้คนลุ่มน้ำโขงเคารพนับถือ ปู่ศรีสุทโธ ว่าเป็นพญานาคผู้ทรงธรรม\nเล่ากันว่า'
  },
  {
    image: '/naka/naga_04.png',
    text: '“ปู่ศรีสุทโธปกครองเมืองบาดาลด้วยความเมตตา ทรงสั่งสอนเหล่านาคทุกตนว่า”\n"ผู้มีอำนาจ ต้องใช้เพื่อคุ้มครอง มิใช่เพื่อข่มเหง"'
  },
  {
    image: '/naka/naga_05.png',
    text: '“ทุกครั้งที่ชาวบ้านประสบภัยแล้ง หากผู้คนร่วมกันทำความดี รักษาศีล และอยู่ร่วมกันด้วยความสามัคคี ฝนก็จะตกต้องตามฤดูกาล ผู้เฒ่าผู้แก่จึงสอนลูกหลานเสมอว่าน้ำดี เพราะคนดี"'
  },
  {
    image: '/naka/naga_06.png',
    text: 'สายน้ำแห่งชีวิต\nสมัยก่อน ชาวบ้านริมโขงดำรงชีวิตด้วยการหาปลา ทำนา และเดินเรือ\nก่อนออกเรือ ผู้เฒ่าจะจุดธูปหนึ่งดอก กล่าวคำขอขมาลำน้ำและเจ้าที่เจ้าทาง พร้อมเอ่ยถึงพญานาค เพื่อขอให้การเดินทางปลอดภัย\nไม่มีใครกล้าทิ้งสิ่งสกปรกลงแม่น้ำ เพราะเชื่อว่าเป็นการลบหลู่ผู้พิทักษ์สายน้ำ\nด้วยเหตุนี้ แม่น้ำจึงอุดมสมบูรณ์ มีปลาและสัตว์น้ำมากมาย'
  },
  {
    image: '/naka/naga_07.png',
    text: 'เมืองคำชะโนด\nเล่ากันว่า ระหว่างโลกมนุษย์กับเมืองบาดาล มีสถานที่ศักดิ์สิทธิ์แห่งหนึ่ง คือ คำชะโนด\nผู้คนเชื่อว่าเป็นประตูเชื่อมระหว่างสองภพ'
  },
  {
    image: '/naka/naga_10.png',
    text: 'ผู้ที่เดินทางไปด้วยความเคารพ จะรู้สึกสงบร่มเย็น\nแต่ผู้ที่เข้าไปด้วยความโลภ หรือคิดลบหลู่สิ่งศักดิ์สิทธิ์ มักถูกเล่าว่าพบเหตุการณ์ประหลาด เช่น เดินวนหาทางออกไม่พบ หรือรู้สึกเหมือนเวลาผ่านไปผิดปกติ'
  },
  {
    image: '/naka/naga_08.png',
    text: 'เรื่องเล่าเหล่านี้เป็นส่วนหนึ่งของความเชื่อพื้นบ้านที่สืบทอดกันมา'
  },
  {
    image: '/naka/naga_12.png',
    text: 'บั้งไฟพญานาค\nเมื่อถึงคืนวันออกพรรษา ผู้คนริมแม่น้ำโขงจะมารวมตัวกันริมฝั่ง\nชาวบ้านเชื่อว่า พญานาคจะจุดลูกไฟสีแดงอมชมพูพุ่งขึ้นจากลำน้ำ เพื่อถวายเป็นพุทธบูชา เนื่องในโอกาสที่พระพุทธเจ้าเสด็จกลับจากสวรรค์ชั้นดาวดึงส์'
  },
  {
    image: '/naka/naga_11.png',
    text: 'ผู้เฒ่าจะบอกลูกหลานว่า\n"อย่ามองเพียงลูกไฟ แต่จงมองศรัทธาของผู้คน"\nปัจจุบันมีการอธิบายปรากฏการณ์นี้หลายแนวทาง ทั้งทางวิทยาศาสตร์และตามความเชื่อ แต่สำหรับชุมชนริมโขง บั้งไฟพญานาคยังคงเป็นสัญลักษณ์สำคัญของศรัทธาและอัตลักษณ์ท้องถิ่น'
  },
  {
    image: '/naka/naga_10.png',
    text: 'พญานาคกับพระพุทธศาสนา\nเรื่องเล่าที่ได้รับการยอมรับในพระพุทธศาสนากล่าวถึง พญามุจลินท์ ผู้แผ่พังพานปกป้องพระพุทธเจ้าจากลมฝนหลังตรัสรู้\nด้วยเหตุนี้ พญานาคจึงเป็นสัญลักษณ์ของการคุ้มครองพระพุทธศาสนา\nชาวอีสานจึงนิยมสร้างรูปปั้นพญานาคไว้ตามบันไดวัด เปรียบเสมือนผู้เฝ้ารักษาพระธรรม'
  },
  {
    image: '/naka/naga_09.png',
    text: 'คติสอนใจจากตำนาน\nผู้เฒ่าผู้แก่ไม่ได้เล่าตำนานพญานาคเพื่อให้ผู้คนหวาดกลัว แต่เพื่อสอนว่า\n• จงเคารพธรรมชาติ เพราะสายน้ำคือชีวิต \n• ใช้อำนาจด้วยเมตตา ไม่เบียดเบียนผู้อื่น \n• รักษาคำพูดและความซื่อสัตย์ \n• ทำความดีโดยไม่หวังผลตอบแทน \n• อยู่ร่วมกันด้วยความสามัคคี \nจึงมีคำกล่าวของชาวอีสานว่า\n"คนรักษาน้ำ น้ำก็รักษาคน"'
  }
];

function NagaTaleViewer() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < nagaTaleSlides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const slide = nagaTaleSlides[currentSlide];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
      <div 
        style={{ 
          width: '100%', 
          maxWidth: '1152px', 
          aspectRatio: '1152 / 1023',
          position: 'relative',
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          cursor: 'pointer'
        }}
        onClick={nextSlide}
      >
        <img 
          src={slide.image} 
          alt={`Naga Tale ${currentSlide + 1}`} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        
        {currentSlide > 0 && (
          <button 
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10 }}
          >
            <ChevronLeft size={30} />
          </button>
        )}
        
        {currentSlide < nagaTaleSlides.length - 1 && (
          <button 
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10 }}
          >
            <ChevronRight size={30} />
          </button>
        )}
      </div>

      <div style={{ 
        background: 'rgba(255, 255, 255, 0.1)', 
        padding: '2rem', 
        borderRadius: '12px',
        maxWidth: '900px',
        width: '100%',
        textAlign: 'center',
        border: '1px solid rgba(255,255,255,0.2)'
      }}>
        {slide.text.split('\n').map((line, idx) => (
          <p key={idx} style={{ fontSize: '1.25rem', lineHeight: '1.8', marginBottom: idx !== slide.text.split('\n').length - 1 ? '1rem' : 0 }}>
            {line}
          </p>
        ))}
      </div>

      <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.2rem', marginTop: '-1rem' }}>
        {currentSlide === nagaTaleSlides.length - 1 ? "จบตำนาน" : `หน้า ${currentSlide + 1} / ${nagaTaleSlides.length} (คลิกที่ภาพเพื่อไปต่อ)`}
      </div>
    </div>
  );
}

const softPowerData = [
  {
    id: 'naga',
    icon: '/ตำนานพญานาค.gif',
    title: 'ตำนานพญานาคฉบับพื้นบ้านอีสาน',
    short: 'นิทานตำนานพญานาค: ความเชื่อที่อยู่คู่กับวิถีชีวิตริมฝั่งแม่น้ำโขง',
    content: <NagaTaleViewer />
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

        <p style={{ textAlign: 'center', marginTop: '2rem' }}>
          <a href="https://th.wikipedia.org/wiki/%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B9%82%E0%B8%9E%E0%B8%98%E0%B8%B4%E0%B9%8C%E0%B8%8A%E0%B8%B1%E0%B8%A2_(%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AB%E0%B8%99%E0%B8%AD%E0%B8%87%E0%B8%84%E0%B8%B2%E0%B8%A2)" target="_blank" rel="noreferrer" style={{ color: '#4cc9f0', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <ExternalLink size={16} /> อ่านเพิ่มเติมคลิกที่นี่
          </a>
        </p>
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
            <img src={data.icon} alt={data.title} style={{ width: '100%', maxWidth: '350px', aspectRatio: '1/1', objectFit: 'cover', borderRadius: '20px', boxShadow: '0 8px 25px rgba(0,0,0,0.4)' }} />
          ) : (
            <div style={{ fontSize: '8rem' }}>{data?.icon}</div>
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

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', maxWidth: '1200px', margin: '0 auto' }}>
        {softPowerData.map(item => (
          <div key={item.id} className="glass-panel hover-scale" style={{ 
            padding: item.id === 'naga' ? '3.5rem 3rem' : '2.5rem 2rem', 
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gridColumn: item.id === 'naga' ? '1 / -1' : 'auto', // Span full width for naga
            border: item.id === 'naga' ? '2px solid rgba(255, 0, 122, 0.4)' : '1px solid rgba(255,255,255,0.1)',
            boxShadow: item.id === 'naga' ? '0 15px 40px rgba(255, 0, 122, 0.2)' : '0 8px 32px 0 rgba(31, 38, 135, 0.3)'
          }}>
            <div style={{ 
              fontSize: '4.5rem', 
              marginBottom: '1.5rem',
              background: 'rgba(255,255,255,0.1)',
              width: '100%',
              maxWidth: item.id === 'naga' ? '400px' : '250px',
              aspectRatio: '1/1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '20px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
              overflow: 'hidden'
            }}>
              {item.icon.startsWith('/') ? (
                 <img src={item.icon} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                 item.icon
              )}
            </div>
            <h2 style={{ color: item.id === 'naga' ? '#ff007a' : 'var(--primary-color)', marginBottom: '1rem', fontSize: item.id === 'naga' ? '2.5rem' : '1.8rem', textShadow: item.id === 'naga' ? '0 2px 10px rgba(255,0,122,0.5)' : 'none' }}>{item.title}</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', textAlign: 'center', lineHeight: '1.6', fontSize: item.id === 'naga' ? '1.2rem' : '1rem' }}>
              {item.short}
            </p>
            <div style={{ marginTop: 'auto', width: '100%' }}>
              <button 
                className={item.id === 'naga' ? 'btn-secondary' : 'btn-primary'}
                style={{ width: '100%', padding: item.id === 'naga' ? '16px' : '12px', fontSize: item.id === 'naga' ? '1.2rem' : '1rem' }} 
                onClick={() => setSelectedId(item.id)}
              >
                อ่านนิทานฉบับเต็ม
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

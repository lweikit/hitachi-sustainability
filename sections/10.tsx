import styles from "../styles/sections/10.module.scss"

import { Row, Col } from "reactstrap"

const S10 = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col xs={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
          <h3>
            การใช้ระบบวิเคราะห์ Big Dataในประเทศสิงคโปร์
          </h3>
          <div className="video-container">
            <iframe src="https://www.youtube-nocookie.com/embed/J-Myvrbz0f8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <Row>
            <Col sm={{ size: 10, offset: 1 }} md={{ size: 12, offset: 0 }}>
              <p>
                รัฐบาลประเทศสิงคโปร์ได้กำหนดวิสัยทัศน์ในการบรรลุเป้าหมายการ ปล่อยก๊าซเรือนกระจกให้เป็นศูนย์ ซึ่งรวมถึงการลดมลพิษจากการขนส่ง ภาคขนส่งเป็นต้นกำเนิดของการปล่อยก๊าซเรือนกระจกรวมเป็นสัดส่วนสูงสุดถึงร้อยละ 15 ของประเทศ
              </p>
              <p>
                โครงการ Go-Ahead Singapore ได้พัฒนาขึ้นไปอีกขั้นจากการปรับใช้ระบบวิเคราะห์ Big data เพื่อปรับปรุงประสิทธิภาพการดำเนินงาน Hitachi เป็นผู้สนับสนุนโครงการ Go-Ahead Singapore ในด้านการวัดและปรับปรุงประสิทธิภาพการดำเนินงานของระบบรถประจำทางผ่านการพัฒนาและการบำรุงรักษาเว็บพอร์ทัลระบบวิเคราะห์ Big data ที่ปรับได้ตามความต้องการผลที่ได้คือเจ้าหน้าที่จัดการตารางเวลาเดินรถสามารถระบุปัญหาได้อย่างรวดเร็วและแก้ไขปัญหาได้ทันท่วงทีเมื่อรวมกับข้อมูลการจราจรที่แม่นยำแล้ว ทำให้โครงการ Go Ahead สามารถปรับใช้งานรถประจำทางได้อย่างมีประสิทธิภาพมากขึ้น ซึ่งจะช่วยจำนวนรถลดและเวลาการวิ่งรถที่ไม่มีผู้โดยสารของรถประจำทางในย่านถนนที่มีการจราจรหนาแน่นและลดการปล่อยก๊าซไอเสียจากรถได้
              </p>
              <Row>
                <Col xs={{ size: 8, offset: 2 }}>
                  <object type="image/svg+xml" data="sections/10/case-3.svg"/>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default S10
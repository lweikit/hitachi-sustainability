import styles from "../styles/sections/07.module.scss"

import { Row, Col } from "reactstrap"

const S07 = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col xs={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }}>
          <Row>
            <Col xs={{ size: 12 }} md={{ size: 6 }} className={styles.spacing}>
              <h2>
                Hitachi ให้คำมั่นในการสนับสนุนความยั่งยืนของภูมิภาคเอเชียตะวันออกเฉียงใต้
              </h2>
              <Row>
                <Col xs={{ size: 6 }}>
                  <object type="image/svg+xml" data="sections/07/hands.svg"/>
                </Col>
              </Row>
            </Col>
            <Col xs={{ size: 12 }} md={{ size: 6 }} className={styles.spacing}>
              <p>
                Hitachi เชื่อมั่นในนวัตกรรมเพื่อสังคม เราได้มุ่งมั่นในการปรับปรุงคุณภาพชีวิตขอผู้คนมาอย่างต่อเนื่องผ่านโซลูชันทางเทคโนโลยีเชิงนวัตกรรม นอกจากนี้เรายังเป็นผู้สนับสนุนหลักของโครงการ United Nations Climate Change Conference (COP26) ในปีพ.ศ.2564อีกด้วย Hitachi เป็นผู้นำในการสนับสนุนและพัฒนาสังคมของภูมิภาคไปสู่สังคมสีเขียว
              </p>
              <p>
                ด้านล่างนี้เป็นตัวอย่างข้อเสนอของ Hitachi ที่สร้างความแตกต่างในบางประเทศของภูมิภาคนี้
              </p>
              <Row>
                <Col xs={{ size: 3 }}>
                  <object type="image/svg+xml" data="sections/07/arrows.svg"/> 
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default S07
import styles from "../styles/sections/09.module.scss"

import { Row, Col } from "reactstrap"

const S09 = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col xs={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
          <h3>
            ระบบกักเก็บพลังงานแบตเตอรี่ในประเทศฟิลิปปินส์
          </h3>
          <div className="video-container">
            <iframe src="https://www.youtube-nocookie.com/embed/y7biHnt-v9k" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <Row>
            <Col sm={{ size: 10, offset: 1 }} md={{ size: 12, offset: 0 }}>
              <p>
                Hitachi และบริษัท Manila Electric Co ได้ติดตั้งระบบกักเก็บพลังงานแบตเตอรี่ขนาด 2MW ในเมืองบูลาคาน ระบบแบตเตอรี่เป็นแบบแยกส่วนและเคลื่อนย้ายได้ในตู้คอนเทนเนอร์ขนาด 40 ฟุต ให้ความมั่นคงของแหล่งพลังงานหมุนเวียนโดยเฉพาะพลังงานแสงอาทิตย์ ซึ่งโดยธรรมชาติแล้วจะไม่เสถียรตลอดทั้งวันระบบนี้จะช่วยในการจัดการพลังงานและความต้องการใช้เพื่อ เพิ่มความวางใจของบริการและระบบพลังงาน เพื่อชดเชยต่อพลังงานหมุนเวียนที่ไม่เสถียรได้
              </p>
              <Row>
                <Col xs={{ size: 8, offset: 2 }}>
                  <object type="image/svg+xml" data="sections/09/case-2.svg"/>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default S09
import styles from "../styles/sections/08.module.scss"

import { Row, Col } from "reactstrap"

const S08 = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col xs={{ size: 10, offset: 1 }} md={{ size: 6, offset: 3 }}>
          <h3>
            การบริการแบ่งปันยานพาหนะ ในประเทศไทย
          </h3>
          <div className="video-container">
            <iframe src="https://www.youtube-nocookie.com/embed/6TXWI5k06nw" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <Row>
            <Col sm={{ size: 10, offset: 1 }} md={{ size: 12, offset: 0 }}>
              <p className={styles.description}>
                การจัดส่งสินค้าในประเทศไทยมีอัตราการเติบโตเพิ่มขึ้นร้อยละ 35ในปีพ.ศ. 2563  เนื่องจากการเติบโตอย่างรวดเร็วของการซื้อขายสินค้าด้วยสื่ออิเล็กทรอนิกส์การเติบโตที่รวดเร็วดังกล่าวต้องมาควบคู่กับความพยายามด้านความยั่งยืน เนื่องจากภาคการขนส่งเป็นต้นกำเนิดของการปล่อยก๊าซเรือนกระจกที่มากเป็นอันดับสองของประเทศ Hitachi ได้เปิดตัวบริการแบ่งปันยานพาหนะในประเทศไทยเพื่อลดผลกระทบต่อสิ่งแวดล้อม การนำระบบติดตามแบบทันท่วงทีมาใช้จะช่วยให้บริษัทสามารถระบุตำแหน่งและใช้บริการรถได้เหมาะสมเพื่อลดจำนวนรถบรรทุกที่วิ่งเปล่าบนถนนในประเทศไทยได้ การปรับปรุงระบบการขนส่งนี้ช่วยลดการปล่อยคาร์บอนในประเทศไทย ซึ่งเป็นส่วนหนึ่งในความพยายามสู่เป้าหมายการลดคาร์บอนของ COP26
              </p>
              <Row>
                <Col xs={{ size: 8, offset: 2 }}>
                  <object type="image/svg+xml" data="sections/08/case-1.svg"/>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default S08
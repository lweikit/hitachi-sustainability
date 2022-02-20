import styles from "../styles/sections/03.module.scss"

import { Row, Col } from "reactstrap"

const S03 = () => {
  return (
    <div className={styles.container}>
      <Row>
        <Col xs={{ size: 8, offset: 2 }} md={{ size: 6, offset: 3 }}>
          <object type="image/svg+xml" data="sections/03/water.svg" className={styles.svg}/>
          <p>
            Ini adalah perkembangan yang mengkhawatirkan mengingat ketergantungan berlebihan kawasan ini pada sumber-sumber tidak terbarukan untuk suplai energi primer. 
          </p>
          <p>
            Penduduk Asia Tenggara telah menyaksikan sendiri ancaman perubahan iklim dan degradasi lingkungan, karena banyaknya bencana banjir yang mengancam penghidupan di tahun 2021. Tanpa perubahan signifikan pada dekade mendatang, bangsa-bangsa Asia Tenggara akan menelan kerugian yang setara dengan US$22,5 miliar dalam GDP akibat banjir.
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default S03
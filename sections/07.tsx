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
              Hitachi berkomitmen mendukung upaya keberlanjutan Asia Tenggara
              </h2>
              <Row>
                <Col xs={{ size: 6 }}>
                  <object type="image/svg+xml" data="sections/07/hands.svg"/>
                </Col>
              </Row>
            </Col>
            <Col xs={{ size: 12 }} md={{ size: 6 }} className={styles.spacing}>
              <p>
                Hitachi percaya pada inovasi sosial, dengan terus berupaya meningkatkan kualitas hidup masyarakat melalui solusi teknologi inovatif. Hitachi juga menjadi Mitra Utama dalam 2021 United Nations Climate Change Conference (COP26). Dalam mendukung gerakan kawasan ini menuju masyarakat hijau, Hitachi memimpin di depan.
              </p>
              <p>
                Berikut ini adalah tiga contoh penawaran teknologi Hitachi yang membawa perbedaan:
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